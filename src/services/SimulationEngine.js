/**
 * Simulation Engine
 * Monte Carlo and historical simulation for pension stress testing
 */

import { EQUITY_RETURNS, INFLATION, BOND_MODEL } from '../constants.js';
import { seededRng, gaussianRandom } from '../utils/MathUtils.js';
import { calculateGlidepath } from './GlidepathService.js';
import { calculateTax, grossToNet } from './TaxCalculator.js';

/**
 * Runs a single simulation with given returns
 * @param {object} config - Simulation configuration
 * @param {object} returns - Yearly returns { equity: {}, inflation: {} }
 * @param {number} seed - Random seed
 * @returns {object} Simulation result
 */
export function simulate(config, returns, seed = 0) {
  const rng = seededRng(seed);

  // Initialize fund values
  let equity = config.equityStart;
  let bond = config.bondStart;
  let cash = config.cashStart;

  // State tracking
  let protMonths = 0;
  let maxConsec = 0;
  let consecProt = 0;
  let hodlUsed = 0;
  let failed = false;
  let failMonth = null;

  // History for analysis
  const hist = [];

  // Inflation tracking
  const yearlyInf = [];
  let prevInf = 0.025;

  // Record initial state
  hist.push({
    year: 0,
    month: 0,
    equity,
    bond,
    cash,
    total: equity + bond + cash,
    draw: 0,
    source: 'None',
    inProtection: false,
    equityMin: config.equityMin,
    bondMin: config.bondMin,
    cashMax: config.cashTarget
  });

  // Run simulation month by month
  for (let month = 0; month < config.years * 12; month++) {
    const year = Math.floor(month / 12);
    const monthInYear = month % 12;

    // Get this year's returns (constant within year)
    const eqReturn = returns.equity[year] || 0;
    const inf = returns.inflation[year] || 0.025;

    // Track yearly inflation for CPI calculations
    if (monthInYear === 0 && year > 0) {
      yearlyInf.push(returns.inflation[year - 1] || 0.025);
    }

    // Apply monthly returns (compounded from annual)
    const monthlyEqReturn = Math.pow(1 + eqReturn, 1/12) - 1;
    const monthlyBondReturn = calculateBondReturn(inf, eqReturn, prevInf, rng) / 12;
    const monthlyCashReturn = Math.max(0.001, inf) / 12; // Cash tracks inflation

    equity *= (1 + monthlyEqReturn);
    bond *= (1 + monthlyBondReturn);
    cash *= (1 + monthlyCashReturn);

    prevInf = inf;

    // Calculate cumulative inflation for glidepath
    const cumInf = yearlyInf.reduce((acc, i) => acc * (1 + i), 1) *
                   (1 + inf * (monthInYear / 12));

    // Calculate glidepath minimums
    const eqMin = calculateGlidepath(config.equityMin, year, config.duration, cumInf, true);
    const bdMin = calculateGlidepath(config.bondMin, year, config.duration, cumInf, true);
    const csTarget = calculateGlidepath(config.cashTarget, year, config.duration, cumInf, false);

    // Calculate required draw
    const draw = calculateMonthlyDraw(config, year, cumInf, yearlyInf);

    // Determine if in protection mode
    const totalGrowth = equity + bond;
    const minGrowth = eqMin + bdMin;
    const growthHealthy = totalGrowth >= minGrowth + draw;

    let inProtection = false;
    let actualDraw = draw;
    let source = 'Growth';

    // Protection mode logic
    if (!config.disableProtection && !growthHealthy) {
      inProtection = true;
      actualDraw = draw * config.protectionMult;
      protMonths++;
      consecProt++;
      maxConsec = Math.max(maxConsec, consecProt);
    } else {
      consecProt = 0;
    }

    // Execute withdrawal
    if (!inProtection && growthHealthy) {
      // Draw from growth funds proportionally
      const eqSurplus = Math.max(0, equity - eqMin);
      const bdSurplus = Math.max(0, bond - bdMin);
      const totalSurplus = eqSurplus + bdSurplus;

      if (totalSurplus >= actualDraw) {
        const eqDraw = actualDraw * (eqSurplus / totalSurplus);
        const bdDraw = actualDraw * (bdSurplus / totalSurplus);
        equity -= eqDraw;
        bond -= bdDraw;
        source = 'Growth';
      } else {
        // Fallback to cash
        cash -= actualDraw;
        source = 'Cash';
      }
    } else {
      // In protection or unhealthy - draw from cash
      if (cash >= actualDraw) {
        cash -= actualDraw;
        source = 'Cash';
      } else if (bond >= actualDraw - cash) {
        // Use remaining cash + bonds
        const fromCash = cash;
        const fromBond = actualDraw - cash;
        cash = 0;
        bond -= fromBond;
        source = 'Bond+Cash';
      } else if (equity >= actualDraw - cash - bond) {
        // Last resort: use equity too
        const remaining = actualDraw - cash - bond;
        cash = 0;
        bond = 0;
        equity -= remaining;
        source = 'All';
      } else if (config.hodlEnabled && hodlUsed < config.hodlValue) {
        // Use HODL reserve
        const available = config.hodlValue - hodlUsed;
        const needed = actualDraw - cash - bond - equity;
        const fromHodl = Math.min(available, needed);
        hodlUsed += fromHodl;
        cash = 0;
        bond = 0;
        equity = 0;
        source = 'HODL';

        if (fromHodl < needed) {
          // Still not enough - fail
          failed = true;
          failMonth = month;
        }
      } else {
        // Total failure
        failed = true;
        failMonth = month;
      }
    }

    // Ensure no negative values
    equity = Math.max(0, equity);
    bond = Math.max(0, bond);
    cash = Math.max(0, cash);

    // Record history (yearly snapshots)
    if (monthInYear === 0 || month === config.years * 12 - 1 || failed) {
      hist.push({
        year: year + (monthInYear / 12),
        month,
        equity,
        bond,
        cash,
        total: equity + bond + cash,
        draw: actualDraw,
        source,
        inProtection,
        equityMin: eqMin,
        bondMin: bdMin,
        cashMax: csTarget
      });
    }

    if (failed) break;
  }

  return {
    failed,
    years: failed ? failMonth / 12 : config.years,
    failMonth,
    final: equity + bond + cash,
    finalEquity: equity,
    finalBond: bond,
    finalCash: cash,
    protMonths,
    maxConsec,
    hodlUsed,
    hist,
    seed
  };
}

/**
 * Calculates bond return using multi-asset model
 */
function calculateBondReturn(inf, eqReturn, prevInf, rng) {
  // Use lagged inflation for regime detection
  const laggedInf = prevInf;

  // Determine regime
  let weights;
  if (laggedInf > 0.045) {
    weights = BOND_MODEL.HIGH_INFLATION;
  } else if (laggedInf < 0) {
    weights = BOND_MODEL.DEFLATION;
  } else {
    weights = BOND_MODEL.NORMAL;
  }

  // Calculate individual asset returns
  const linkerReturn = inf + 0.005 + gaussianRandom(0, BOND_MODEL.VOLATILITY.LINKER, rng);
  const nomBondReturn = 0.04 - (inf > 0.04 ? (inf - 0.04) * 0.5 : 0) +
                        gaussianRandom(0, BOND_MODEL.VOLATILITY.NOMINAL, rng);
  const propertyReturn = eqReturn * 0.6 + inf + gaussianRandom(0, BOND_MODEL.VOLATILITY.PROPERTY, rng);
  const commodityReturn = inf * 1.2 + gaussianRandom(0, BOND_MODEL.VOLATILITY.COMMODITY, rng);
  const cashReturn = Math.max(0.001, inf) + gaussianRandom(0, BOND_MODEL.VOLATILITY.CASH, rng);
  const equityReturn = eqReturn * 0.5; // Partial equity exposure

  // Weighted average
  return weights.LINKER * linkerReturn +
         weights.NOMINAL * nomBondReturn +
         weights.PROPERTY * propertyReturn +
         weights.COMMODITY * commodityReturn +
         weights.CASH * cashReturn +
         weights.EQUITY * equityReturn;
}

/**
 * Calculates monthly draw amount
 */
function calculateMonthlyDraw(config, year, cumInf, yearlyInf) {
  // Adjust tax thresholds
  const pa = config.taxMode === 'frozen' ? config.pa : config.pa * cumInf;
  const brl = config.taxMode === 'frozen' ? config.brl : config.brl * cumInf;

  // Target income
  const target = config.baseSalary * cumInf;

  // Other income with CPI cap
  let other = config.other;
  for (const inf of yearlyInf) {
    other *= (1 + Math.min(inf, 0.04));
  }

  // State pension
  const statePension = year >= config.statePensionYear
    ? config.statePension * cumInf
    : 0;

  // SIPP draw (capped at BRL)
  const fixed = other + statePension;
  const sippDraw = Math.max(0, Math.min(brl, target) - fixed);

  return sippDraw / 12;
}

/**
 * Runs Monte Carlo simulation
 * @param {object} config - Simulation configuration
 * @param {number} runs - Number of simulation runs
 * @returns {object[]} Array of simulation results
 */
export function runMonteCarlo(config, runs = 1000) {
  const years = Object.keys(EQUITY_RETURNS).map(Number).sort((a, b) => a - b);
  const results = [];

  for (let i = 0; i < runs; i++) {
    const rng = seededRng(i * 12345);

    // Build random return sequence by sampling from history
    const returns = { equity: {}, inflation: {} };
    for (let y = 0; y < config.years; y++) {
      const randomYear = years[Math.floor(rng() * years.length)];
      returns.equity[y] = EQUITY_RETURNS[randomYear];
      returns.inflation[y] = INFLATION[randomYear] || 0.025;
    }

    results.push(simulate(config, returns, i));
  }

  return results;
}

/**
 * Runs historical simulation (all possible start years)
 * @param {object} config - Simulation configuration
 * @returns {object[]} Array of simulation results with start years
 */
export function runHistorical(config) {
  const years = Object.keys(EQUITY_RETURNS).map(Number).sort((a, b) => a - b);
  const maxYear = Math.max(...years);
  const results = [];

  for (const startYear of years) {
    // Skip if not enough history for full simulation
    if (startYear + config.years - 1 > maxYear) continue;

    // Build sequential return sequence
    const returns = { equity: {}, inflation: {} };
    for (let y = 0; y < config.years; y++) {
      returns.equity[y] = EQUITY_RETURNS[startYear + y] || 0;
      returns.inflation[y] = INFLATION[startYear + y] || 0.025;
    }

    const result = simulate(config, returns, startYear);
    result.startYear = startYear;
    results.push(result);
  }

  return results;
}

/**
 * Runs scenario simulation
 * @param {object} config - Simulation configuration
 * @param {object} scenario - Scenario definition { equity: [], inflation: [] }
 * @returns {object} Simulation result
 */
export function runScenario(config, scenario) {
  const returns = { equity: {}, inflation: {} };

  for (let y = 0; y < config.years; y++) {
    returns.equity[y] = scenario.equity[y % scenario.equity.length];
    returns.inflation[y] = scenario.inflation[y % scenario.inflation.length];
  }

  return simulate(config, returns, 999);
}

/**
 * Calculates success rate from results
 * @param {object[]} results - Array of simulation results
 * @returns {number} Success rate as percentage
 */
export function calculateSuccessRate(results) {
  const failures = results.filter(r => r.failed).length;
  return ((results.length - failures) / results.length) * 100;
}

/**
 * Analyzes simulation results for statistics
 * @param {object[]} results - Array of simulation results
 * @returns {object} Statistics summary
 */
export function analyzeResults(results) {
  const successful = results.filter(r => !r.failed);
  const failed = results.filter(r => r.failed);

  const survivalYears = results.map(r => r.years).sort((a, b) => a - b);
  const finals = successful.map(r => r.final).sort((a, b) => a - b);
  const protMonths = results.map(r => r.protMonths);

  return {
    total: results.length,
    successCount: successful.length,
    failCount: failed.length,
    successRate: calculateSuccessRate(results),

    // Survival statistics
    minYears: survivalYears[0],
    p10Years: survivalYears[Math.floor(results.length * 0.1)],
    medianYears: survivalYears[Math.floor(results.length * 0.5)],

    // Final value statistics (successful runs only)
    medianFinal: finals[Math.floor(finals.length * 0.5)] || 0,
    p10Final: finals[Math.floor(finals.length * 0.1)] || 0,
    p90Final: finals[Math.floor(finals.length * 0.9)] || 0,
    avgFinal: successful.reduce((a, r) => a + r.final, 0) / (successful.length || 1),

    // Protection statistics
    runsWithProtection: results.filter(r => r.protMonths > 0).length,
    avgProtMonths: protMonths.reduce((a, b) => a + b, 0) / results.length,
    maxProtMonths: Math.max(...protMonths),
    maxConsecutive: Math.max(...results.map(r => r.maxConsec)),

    // HODL statistics
    runsUsingHodl: results.filter(r => r.hodlUsed > 0).length,
    avgHodlUsed: results.filter(r => r.hodlUsed > 0)
      .reduce((a, r) => a + r.hodlUsed, 0) /
      (results.filter(r => r.hodlUsed > 0).length || 1),
    maxHodlUsed: Math.max(...results.map(r => r.hodlUsed || 0))
  };
}

/**
 * Optimizes fund allocation for best success rate
 * @param {object} baseConfig - Base simulation configuration
 * @param {function} simulationFn - Simulation function (runMonteCarlo or runHistorical)
 * @returns {object} Optimization result
 */
export function optimizeAllocation(baseConfig, simulationFn) {
  const total = baseConfig.equityStart + baseConfig.bondStart + baseConfig.cashStart;
  const results = [];

  // Test different allocations
  for (let eqPct = 20; eqPct <= 80; eqPct += 10) {
    for (let bdPct = 10; bdPct <= 80 - eqPct + 10; bdPct += 10) {
      const csPct = 100 - eqPct - bdPct;
      if (csPct < 5) continue;

      const config = {
        ...baseConfig,
        equityStart: total * eqPct / 100,
        bondStart: total * bdPct / 100,
        cashStart: total * csPct / 100
      };

      const simResults = simulationFn(config, 500); // Reduced runs for speed
      const stats = analyzeResults(simResults);

      results.push({
        equityPct: eqPct,
        bondPct: bdPct,
        cashPct: csPct,
        successRate: stats.successRate,
        medianFinal: stats.medianFinal,
        avgProtMonths: stats.avgProtMonths
      });
    }
  }

  // Sort by success rate
  results.sort((a, b) => b.successRate - a.successRate);

  return {
    best: results[0],
    all: results
  };
}
