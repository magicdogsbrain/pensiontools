/**
 * Drawdown Service
 * Calculates optimal SIPP and ISA withdrawals with tax efficiency
 *
 * NEW LOGIC (v6.0):
 * - Single advice output (not two alternatives)
 * - ISA used as top-up to keep SIPP+Other at BRL
 * - Tax-efficient mode requires ISA for remaining tax year months
 * - Tax boost applies when we have enough ISA coverage
 */

import { calculateTax, grossToNet, calculateBRLHeadroom } from './TaxCalculator.js';
import { getRemainingTaxYearMonths, getElapsedTaxYearMonths } from '../utils/DateUtils.js';
import { INFLATION_DEFAULTS } from '../constants.js';

/**
 * Calculates the recommended SIPP draw based on tax efficiency
 *
 * Strategy:
 * 1. Calculate target gross salary (inflation-adjusted)
 * 2. SIPP + Other should not exceed BRL to stay in basic rate
 * 3. If we have ISA for remaining months, we can be tax-efficient
 * 4. Without sufficient ISA, just draw up to Target Gross Salary
 *
 * @param {object} params - Calculation parameters
 * @returns {object} Draw recommendation
 */
export function calculateSIPPDraw(params) {
  const {
    baseSalary,
    cumulativeInflation,
    yearlyInflation = [],
    other = 0,
    statePension = 0,
    statePensionYear = 12,
    yearNumber = 0,
    pa,
    brl,
    hrl,
    taxMode = 'inflates'
  } = params;

  // Adjust thresholds for inflation if not frozen
  const adjPA = taxMode === 'frozen' ? pa : pa * cumulativeInflation;
  const adjBRL = taxMode === 'frozen' ? brl : brl * cumulativeInflation;
  const adjHRL = taxMode === 'frozen' ? hrl : hrl * cumulativeInflation;

  // Target income (inflation-adjusted)
  const targetGross = baseSalary * cumulativeInflation;

  // Other pension with CPI capped at 4%
  const adjOther = calculateCappedInflation(other, yearlyInflation);

  // State pension (full CPI, starts at specific year)
  const adjStatePension = yearNumber >= statePensionYear
    ? statePension * cumulativeInflation
    : 0;

  // Total fixed income
  const fixedIncome = adjOther + adjStatePension;

  // SIPP should fill up to BRL (to stay in basic rate) OR target, whichever is lower
  const maxGrossAtBRL = adjBRL;
  const sippToReachBRL = Math.max(0, maxGrossAtBRL - fixedIncome);
  const sippToReachTarget = Math.max(0, targetGross - fixedIncome);

  // Standard SIPP draw: minimum of (to BRL) and (to target)
  const annualSippDraw = Math.min(sippToReachBRL, sippToReachTarget);

  return {
    pa: adjPA,
    brl: adjBRL,
    hrl: adjHRL,
    targetGross,
    other: adjOther,
    statePension: adjStatePension,
    fixedIncome,
    annualSippDraw,
    monthlySippDraw: annualSippDraw / 12,
    sippPlusfixedAtBRL: sippToReachBRL + fixedIncome === adjBRL
  };
}

/**
 * Calculates other pension income with CPI capped at 4%
 */
function calculateCappedInflation(base, yearlyRates, cap = INFLATION_DEFAULTS.OTHER_INCOME_CAP) {
  let amount = base;
  for (const rate of yearlyRates) {
    amount *= (1 + Math.min(rate, cap));
  }
  return amount;
}

/**
 * Determines if we are in "tax-efficient mode"
 *
 * Tax-efficient mode requires:
 * - ISA balance sufficient for remaining months in tax year
 * - Each month needs approximately (target net - SIPP net - other net)
 *
 * @param {object} params - Parameters
 * @returns {object} Tax efficiency status
 */
export function checkTaxEfficientMode(params) {
  const {
    currentDate,
    isaBalance,
    isaMonthlyDraw,  // Expected ISA top-up per month
    monthlyNetTarget,
    monthlySippNet,
    monthlyOtherNet = 0
  } = params;

  const remainingMonths = getRemainingTaxYearMonths(currentDate);

  // ISA needed to cover the gap for remaining months
  const monthlyIsaNeed = Math.max(0, monthlyNetTarget - monthlySippNet - monthlyOtherNet);
  const totalIsaNeeded = monthlyIsaNeed * remainingMonths;

  const hasSufficientIsa = isaBalance >= totalIsaNeeded;

  return {
    remainingMonths,
    monthlyIsaNeed,
    totalIsaNeeded,
    isaBalance,
    hasSufficientIsa,
    taxEfficientMode: hasSufficientIsa,
    isaShortfall: hasSufficientIsa ? 0 : totalIsaNeeded - isaBalance
  };
}

/**
 * Main decision calculation - NEW UNIFIED LOGIC
 *
 * This replaces the old two-alternative system with a single recommendation:
 *
 * 1. If SIPP + Other would be ABOVE BRL but we have ISA:
 *    - Cap SIPP + Other at BRL
 *    - Use ISA as top-up to reach target net income
 *
 * 2. If we have ISA for remaining tax year months (tax-efficient mode):
 *    - Can use tax-efficient withdrawal
 *    - Tax boost is available if applicable
 *
 * 3. If we DON'T have enough ISA for remaining months:
 *    - NOT in tax-efficient mode
 *    - Just draw up to Target Gross Salary (may exceed BRL)
 *    - Tax boost logic can still apply
 *
 * @param {object} params - Full calculation parameters
 * @returns {object} Single unified recommendation
 */
export function calculateDrawdownRecommendation(params) {
  const {
    // Fund values
    equity,
    bond,
    cash,
    isaBalance = 0,

    // Settings
    baseSalary,
    cumulativeInflation,
    yearlyInflation = [],
    other = 0,
    statePension = 0,
    statePensionYear = 12,
    yearNumber = 0,
    pa,
    brl,
    hrl,
    taxMode = 'inflates',

    // Date context
    currentDate,

    // History for tax year
    taxYearHistory = [],
    inProtection = false,
    protectionFactor = 20  // % reduction in protection mode
  } = params;

  // Step 1: Calculate standard SIPP draw (annual)
  const sippCalc = calculateSIPPDraw({
    baseSalary,
    cumulativeInflation,
    yearlyInflation,
    other,
    statePension,
    statePensionYear,
    yearNumber,
    pa,
    brl,
    hrl,
    taxMode
  });

  // Step 2: Calculate target net income
  const targetGross = sippCalc.targetGross;
  const targetNet = grossToNet(targetGross, sippCalc.pa, sippCalc.brl, sippCalc.hrl);
  const monthlyTargetNet = targetNet / 12;

  // Step 3: Calculate what SIPP + Other + State would give us at BRL cap
  const monthlySippAtBRL = sippCalc.monthlySippDraw;
  const monthlyOther = sippCalc.other / 12;
  const monthlyState = sippCalc.statePension / 12;
  const monthlyFixedIncome = monthlyOther + monthlyState;

  // Gross at BRL cap (monthly)
  const monthlyGrossAtBRL = monthlySippAtBRL + monthlyFixedIncome;

  // Net at BRL cap (annual calculation, then divide)
  const annualGrossAtBRL = monthlyGrossAtBRL * 12;
  const annualNetAtBRL = grossToNet(annualGrossAtBRL, sippCalc.pa, sippCalc.brl, sippCalc.hrl);
  const monthlyNetAtBRL = annualNetAtBRL / 12;

  // Step 4: Check if we need ISA top-up
  const isaNeededMonthly = Math.max(0, monthlyTargetNet - monthlyNetAtBRL);

  // Step 5: Check if we have enough ISA for remaining tax year
  const remainingMonths = getRemainingTaxYearMonths(currentDate);
  const totalIsaNeeded = isaNeededMonthly * remainingMonths;
  const hasSufficientIsa = isaBalance >= totalIsaNeeded;

  // Step 6: Determine mode and calculate recommendation
  let recommendation;

  if (hasSufficientIsa && isaNeededMonthly > 0) {
    // TAX-EFFICIENT MODE with ISA top-up
    // SIPP capped at BRL, ISA makes up the difference
    recommendation = {
      mode: 'tax-efficient',
      monthlySipp: inProtection
        ? monthlySippAtBRL * (1 - protectionFactor / 100)
        : monthlySippAtBRL,
      monthlyIsa: isaNeededMonthly,
      monthlyOther,
      monthlyState,
      reason: 'ISA top-up keeps SIPP+Other at BRL for tax efficiency',
      taxBoostEligible: !inProtection,  // Tax boost available in this mode
      isaUsedForTopUp: true
    };
  } else if (!hasSufficientIsa && isaNeededMonthly > 0) {
    // NOT TAX-EFFICIENT - insufficient ISA
    // Draw up to Target Gross Salary from SIPP (may exceed BRL)
    const sippToTarget = Math.max(0, targetGross / 12 - monthlyFixedIncome);

    recommendation = {
      mode: 'standard',
      monthlySipp: inProtection
        ? sippToTarget * (1 - protectionFactor / 100)
        : sippToTarget,
      monthlyIsa: 0,  // Not using ISA as we don't have enough
      monthlyOther,
      monthlyState,
      reason: `Insufficient ISA for ${remainingMonths} months - drawing to target`,
      taxBoostEligible: true,  // Tax boost can still apply
      isaUsedForTopUp: false,
      warning: `Need £${Math.round(totalIsaNeeded - isaBalance).toLocaleString()} more ISA for tax-efficient mode`
    };
  } else {
    // Target achievable at or below BRL (no ISA needed)
    recommendation = {
      mode: 'tax-efficient',
      monthlySipp: inProtection
        ? monthlySippAtBRL * (1 - protectionFactor / 100)
        : monthlySippAtBRL,
      monthlyIsa: 0,
      monthlyOther,
      monthlyState,
      reason: 'Target income achieved within BRL',
      taxBoostEligible: !inProtection,
      isaUsedForTopUp: false
    };
  }

  // Step 7: Calculate tax boost opportunity (catch-up from protection periods)
  const boostInfo = calculateTaxBoost({
    taxYearHistory,
    remainingMonths,
    brl: sippCalc.brl,
    currentMonthlySipp: recommendation.monthlySipp,
    monthlyFixedIncome,
    inProtection,
    growthSurplus: (equity + bond) - (params.adjEquityMin || 0) - (params.adjBondMin || 0)
  });

  // Step 8: Build final recommendation
  const monthlyTotal = recommendation.monthlySipp +
                       recommendation.monthlyIsa +
                       recommendation.monthlyOther +
                       recommendation.monthlyState;

  const annualTaxable = (recommendation.monthlySipp + monthlyFixedIncome) * 12;
  const annualTax = calculateTax(annualTaxable, sippCalc.pa, sippCalc.brl, sippCalc.hrl);

  return {
    ...recommendation,

    // Add boost if eligible and available
    boostAmount: boostInfo.boostAmount,
    boostReason: boostInfo.reason,

    // Tax info
    taxInfo: {
      pa: sippCalc.pa,
      brl: sippCalc.brl,
      hrl: sippCalc.hrl,
      annualTaxable,
      annualTax,
      monthlyTax: annualTax / 12,
      effectiveRate: annualTaxable > 0 ? annualTax / annualTaxable : 0,
      headroomToBRL: calculateBRLHeadroom(annualTaxable, sippCalc.brl)
    },

    // Totals
    monthlyGross: recommendation.monthlySipp + monthlyFixedIncome,
    monthlyNet: grossToNet((recommendation.monthlySipp + monthlyFixedIncome) * 12,
                           sippCalc.pa, sippCalc.brl, sippCalc.hrl) / 12 +
                recommendation.monthlyIsa,
    monthlyTotal,

    // Context
    remainingMonths,
    isaBalance,
    isaNeededMonthly,
    totalIsaNeeded,
    hasSufficientIsa,

    // Debug
    calculation: {
      targetGross,
      targetNet,
      monthlyTargetNet,
      monthlyGrossAtBRL,
      monthlyNetAtBRL
    }
  };
}

/**
 * Calculates tax boost opportunity (catch-up from protection shortfalls)
 */
function calculateTaxBoost(params) {
  const {
    taxYearHistory,
    remainingMonths,
    brl,
    currentMonthlySipp,
    monthlyFixedIncome,
    inProtection,
    growthSurplus
  } = params;

  if (inProtection) {
    return { boostAmount: 0, reason: 'In protection mode - no boost' };
  }

  // Calculate shortfall from protection periods this tax year
  let protectionShortfall = 0;
  let boostAlreadyTaken = 0;

  for (const h of taxYearHistory) {
    if (h.inProtection && h.stdSipp) {
      protectionShortfall += (h.stdSipp - (h.sipp || 0));
    }
    if (h.boostAmount > 0) {
      boostAlreadyTaken += h.boostAmount;
    }
  }

  const remainingShortfall = Math.max(0, protectionShortfall - boostAlreadyTaken);

  if (remainingShortfall <= 0) {
    return { boostAmount: 0, reason: 'No shortfall to recover' };
  }

  // Calculate BRL headroom for remaining months
  const annualSippSoFar = taxYearHistory.reduce((sum, h) => sum + (h.sipp || 0), 0) * 12 / taxYearHistory.length;
  const projectedAnnual = annualSippSoFar + (currentMonthlySipp * remainingMonths * 12 / remainingMonths);
  const annualTaxable = projectedAnnual + (monthlyFixedIncome * 12);
  const brlHeadroom = Math.max(0, brl - annualTaxable);

  // Boost limited by: remaining shortfall, BRL headroom, fund surplus
  const maxBoostFromBRL = brlHeadroom / remainingMonths;
  const maxBoostFromFunds = growthSurplus / remainingMonths;
  const catchUpPerMonth = remainingShortfall / remainingMonths;

  const boostAmount = Math.min(catchUpPerMonth, maxBoostFromBRL, maxBoostFromFunds);

  if (boostAmount <= 0) {
    return { boostAmount: 0, reason: 'No headroom for boost' };
  }

  return {
    boostAmount,
    reason: `Catching up £${Math.round(remainingShortfall).toLocaleString()} protection shortfall`
  };
}

/**
 * Generates a drawdown schedule for planning
 * @param {object} settings - Drawdown settings
 * @param {number} duration - Years to project
 * @param {number} assumedInflation - Assumed annual inflation
 * @returns {object[]} Schedule of annual withdrawals
 */
export function generateDrawdownSchedule(settings, duration, assumedInflation = 0.025) {
  const schedule = [];
  const yearlyInflation = [];

  for (let year = 0; year <= duration; year++) {
    if (year > 0) yearlyInflation.push(assumedInflation);

    const cumInf = Math.pow(1 + assumedInflation, year);

    const calc = calculateSIPPDraw({
      baseSalary: settings.baseSalary,
      cumulativeInflation: cumInf,
      yearlyInflation: [...yearlyInflation],
      other: settings.other,
      statePension: settings.statePension,
      statePensionYear: settings.statePensionYear,
      yearNumber: year,
      pa: settings.pa,
      brl: settings.brl,
      hrl: settings.hrl,
      taxMode: settings.taxMode
    });

    const totalTaxable = calc.annualSippDraw + calc.other + calc.statePension;
    const tax = calculateTax(totalTaxable, calc.pa, calc.brl, calc.hrl);

    schedule.push({
      year,
      brl: calc.brl,
      other: calc.other,
      statePension: calc.statePension,
      sippDraw: calc.annualSippDraw,
      totalTaxable,
      tax,
      netIncome: totalTaxable - tax
    });
  }

  return schedule;
}
