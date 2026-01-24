/**
 * Tax Calculator Service
 * Handles all UK income tax calculations
 */

import { TAX_DEFAULTS } from '../constants.js';

/**
 * Calculates income tax on a gross amount
 * @param {number} gross - Gross taxable income
 * @param {number} pa - Personal Allowance
 * @param {number} brl - Basic Rate Limit
 * @param {number} hrl - Higher Rate Limit (for PA taper)
 * @returns {number} Total tax payable
 */
export function calculateTax(gross, pa, brl, hrl = TAX_DEFAULTS.HIGHER_RATE_LIMIT) {
  if (gross <= 0) return 0;

  // Apply PA taper for high earners
  let effectivePA = pa;
  if (gross > TAX_DEFAULTS.PA_TAPER_THRESHOLD) {
    const reduction = (gross - TAX_DEFAULTS.PA_TAPER_THRESHOLD) * TAX_DEFAULTS.PA_TAPER_RATE;
    effectivePA = Math.max(0, pa - reduction);
  }

  // Taxable income after PA
  const taxable = Math.max(0, gross - effectivePA);

  // Basic rate band (up to BRL - PA originally, but we use BRL as the threshold)
  const basicBand = Math.max(0, brl - effectivePA);
  const higherBand = hrl - brl;

  let tax = 0;

  // Basic rate (20%)
  const basicTaxable = Math.min(taxable, basicBand);
  tax += basicTaxable * TAX_DEFAULTS.BASIC_RATE;

  // Higher rate (40%)
  if (taxable > basicBand) {
    const higherTaxable = Math.min(taxable - basicBand, higherBand);
    tax += higherTaxable * TAX_DEFAULTS.HIGHER_RATE;
  }

  // Additional rate (45%)
  if (taxable > basicBand + higherBand) {
    const additionalTaxable = taxable - basicBand - higherBand;
    tax += additionalTaxable * TAX_DEFAULTS.ADDITIONAL_RATE;
  }

  return tax;
}

/**
 * Calculates net income from gross
 * @param {number} gross - Gross income
 * @param {number} pa - Personal Allowance
 * @param {number} brl - Basic Rate Limit
 * @param {number} hrl - Higher Rate Limit
 * @returns {number} Net income after tax
 */
export function grossToNet(gross, pa, brl, hrl = TAX_DEFAULTS.HIGHER_RATE_LIMIT) {
  return gross - calculateTax(gross, pa, brl, hrl);
}

/**
 * Calculates gross income needed to achieve target net
 * Uses binary search for accuracy
 * @param {number} targetNet - Target net income
 * @param {number} pa - Personal Allowance
 * @param {number} brl - Basic Rate Limit
 * @param {number} hrl - Higher Rate Limit
 * @returns {number} Required gross income
 */
export function netToGross(targetNet, pa, brl, hrl = TAX_DEFAULTS.HIGHER_RATE_LIMIT) {
  if (targetNet <= 0) return 0;

  // Binary search for the gross that yields target net
  let low = targetNet;
  let high = targetNet * 2; // Upper bound estimate

  for (let i = 0; i < 50; i++) { // Max iterations
    const mid = (low + high) / 2;
    const net = grossToNet(mid, pa, brl, hrl);

    if (Math.abs(net - targetNet) < 0.01) {
      return mid;
    }

    if (net < targetNet) {
      low = mid;
    } else {
      high = mid;
    }
  }

  return (low + high) / 2;
}

/**
 * Calculates the marginal tax rate at a given income level
 * @param {number} gross - Gross income
 * @param {number} pa - Personal Allowance
 * @param {number} brl - Basic Rate Limit
 * @returns {number} Marginal rate as decimal (0.20, 0.40, 0.45, or 0.60 in taper zone)
 */
export function getMarginalRate(gross, pa, brl) {
  // In PA taper zone (100k-125,140): effective 60% rate
  if (gross > TAX_DEFAULTS.PA_TAPER_THRESHOLD && gross <= TAX_DEFAULTS.HIGHER_RATE_LIMIT) {
    return 0.60;
  }

  // Above additional rate threshold
  if (gross > TAX_DEFAULTS.HIGHER_RATE_LIMIT) {
    return TAX_DEFAULTS.ADDITIONAL_RATE;
  }

  // Above BRL: higher rate
  if (gross > brl) {
    return TAX_DEFAULTS.HIGHER_RATE;
  }

  // Above PA: basic rate
  if (gross > pa) {
    return TAX_DEFAULTS.BASIC_RATE;
  }

  // Below PA: no tax
  return 0;
}

/**
 * Calculates tax comparison between two withdrawal strategies
 * @param {object} efficient - Tax-efficient withdrawal {sipp, isa, other, state}
 * @param {object} inefficient - All-SIPP withdrawal {sipp, isa, other, state}
 * @param {number} pa - Personal Allowance
 * @param {number} brl - Basic Rate Limit
 * @param {number} hrl - Higher Rate Limit
 * @returns {object} Comparison { efficientTax, inefficientTax, saving, annualSaving }
 */
export function compareTaxStrategies(efficient, inefficient, pa, brl, hrl) {
  // Annual taxable income for each strategy
  const efficientAnnualTaxable = (efficient.sipp + efficient.other + efficient.state) * 12;
  const inefficientAnnualTaxable = (inefficient.sipp + inefficient.other + inefficient.state) * 12;

  const efficientTax = calculateTax(efficientAnnualTaxable, pa, brl, hrl);
  const inefficientTax = calculateTax(inefficientAnnualTaxable, pa, brl, hrl);

  const annualSaving = inefficientTax - efficientTax;

  return {
    efficientTax,
    inefficientTax,
    efficientMonthlyTax: efficientTax / 12,
    inefficientMonthlyTax: inefficientTax / 12,
    annualSaving,
    monthlySaving: annualSaving / 12
  };
}

/**
 * Calculates BRL headroom (how much more can be withdrawn at basic rate)
 * @param {number} currentAnnualTaxable - Current year-to-date taxable income
 * @param {number} brl - Basic Rate Limit
 * @returns {number} Remaining headroom to BRL
 */
export function calculateBRLHeadroom(currentAnnualTaxable, brl) {
  return Math.max(0, brl - currentAnnualTaxable);
}

/**
 * Calculates effective tax rate on income
 * @param {number} gross - Gross income
 * @param {number} pa - Personal Allowance
 * @param {number} brl - Basic Rate Limit
 * @param {number} hrl - Higher Rate Limit
 * @returns {number} Effective rate as decimal
 */
export function getEffectiveRate(gross, pa, brl, hrl = TAX_DEFAULTS.HIGHER_RATE_LIMIT) {
  if (gross <= 0) return 0;
  const tax = calculateTax(gross, pa, brl, hrl);
  return tax / gross;
}

/**
 * Determines if income is in the PA taper zone (effective 60% rate)
 * @param {number} gross - Gross income
 * @returns {boolean} True if in taper zone
 */
export function isInTaperZone(gross) {
  return gross > TAX_DEFAULTS.PA_TAPER_THRESHOLD &&
         gross <= TAX_DEFAULTS.HIGHER_RATE_LIMIT;
}

/**
 * Calculates the tax band breakdown for a given income
 * @param {number} gross - Gross income
 * @param {number} pa - Personal Allowance
 * @param {number} brl - Basic Rate Limit
 * @param {number} hrl - Higher Rate Limit
 * @returns {object} Breakdown by band
 */
export function getTaxBandBreakdown(gross, pa, brl, hrl = TAX_DEFAULTS.HIGHER_RATE_LIMIT) {
  // Apply PA taper
  let effectivePA = pa;
  if (gross > TAX_DEFAULTS.PA_TAPER_THRESHOLD) {
    const reduction = (gross - TAX_DEFAULTS.PA_TAPER_THRESHOLD) * TAX_DEFAULTS.PA_TAPER_RATE;
    effectivePA = Math.max(0, pa - reduction);
  }

  const taxable = Math.max(0, gross - effectivePA);
  const basicBand = Math.max(0, brl - effectivePA);
  const higherBand = hrl - brl;

  const inPersonalAllowance = Math.min(gross, effectivePA);
  const inBasicRate = Math.min(Math.max(0, taxable), basicBand);
  const inHigherRate = Math.min(Math.max(0, taxable - basicBand), higherBand);
  const inAdditionalRate = Math.max(0, taxable - basicBand - higherBand);

  return {
    effectivePA,
    inPersonalAllowance,
    inBasicRate,
    inHigherRate,
    inAdditionalRate,
    basicRateTax: inBasicRate * TAX_DEFAULTS.BASIC_RATE,
    higherRateTax: inHigherRate * TAX_DEFAULTS.HIGHER_RATE,
    additionalRateTax: inAdditionalRate * TAX_DEFAULTS.ADDITIONAL_RATE,
    totalTax: (inBasicRate * TAX_DEFAULTS.BASIC_RATE) +
              (inHigherRate * TAX_DEFAULTS.HIGHER_RATE) +
              (inAdditionalRate * TAX_DEFAULTS.ADDITIONAL_RATE)
  };
}

/**
 * Calculates comprehensive tax comparison for a decision
 * Compares actual tax-efficient scenario vs inefficient scenario (all SIPP)
 *
 * @param {object} params - Calculation parameters
 * @returns {object} Tax comparison with monthly, YTD, and projected figures
 */
export function calculateTaxComparison(params) {
  const {
    monthlySipp,        // SIPP draw this month
    monthlyIsa,         // ISA draw this month (tax-free)
    monthlyOther,       // Other taxable income this month
    monthlyStatePension, // State pension this month
    pa,
    brl,
    hrl = TAX_DEFAULTS.HIGHER_RATE_LIMIT,
    taxableIncomeYTD = 0,  // Taxable income so far this year (before this month)
    remainingMonths = 12,  // Months remaining including this one
    grossIncomeToDate = 0  // Pre-pension income (employment etc)
  } = params;

  // Monthly taxable (SIPP + Other + State - ISA is tax-free)
  const monthlyTaxable = monthlySipp + monthlyOther + monthlyStatePension;

  // YTD taxable after this month
  const ytdTaxable = taxableIncomeYTD + monthlyTaxable + grossIncomeToDate;

  // Project annual based on repeating this month's income
  const projectedAnnualTaxable = grossIncomeToDate + ytdTaxable + (monthlyTaxable * (remainingMonths - 1));

  // Calculate actual taxes
  const monthlyTaxActual = calculateTax(monthlyTaxable * 12, pa, brl, hrl) / 12;
  const ytdTaxActual = calculateTax(ytdTaxable, pa, brl, hrl);
  const projectedTaxActual = calculateTax(projectedAnnualTaxable, pa, brl, hrl);

  // Calculate inefficient scenario taxes (what if ISA was drawn from SIPP instead)
  const monthlyTaxableInefficient = monthlySipp + monthlyIsa + monthlyOther + monthlyStatePension;
  const ytdTaxableInefficient = taxableIncomeYTD + monthlyTaxableInefficient + grossIncomeToDate;
  const projectedAnnualTaxableInefficient = grossIncomeToDate + ytdTaxableInefficient +
    (monthlyTaxableInefficient * (remainingMonths - 1));

  const monthlyTaxInefficient = calculateTax(monthlyTaxableInefficient * 12, pa, brl, hrl) / 12;
  const ytdTaxInefficient = calculateTax(ytdTaxableInefficient, pa, brl, hrl);
  const projectedTaxInefficient = calculateTax(projectedAnnualTaxableInefficient, pa, brl, hrl);

  return {
    // Monthly figures
    taxPaidMonthly: monthlyTaxActual,
    taxSavedMonthly: monthlyTaxInefficient - monthlyTaxActual,
    taxIfInefficientMonthly: monthlyTaxInefficient,

    // YTD figures
    taxPaidYTD: ytdTaxActual,
    taxSavedYTD: ytdTaxInefficient - ytdTaxActual,
    taxIfInefficientYTD: ytdTaxInefficient,

    // Projected annual figures
    taxProjectedAnnual: projectedTaxActual,
    taxSavedProjectedAnnual: projectedTaxInefficient - projectedTaxActual,
    taxIfInefficientProjectedAnnual: projectedTaxInefficient,

    // Additional info
    monthlyTaxable,
    ytdTaxable,
    projectedAnnualTaxable,
    effectiveRateMonthly: monthlyTaxable > 0 ? monthlyTaxActual / monthlyTaxable : 0,
    effectiveRateProjected: projectedAnnualTaxable > 0 ? projectedTaxActual / projectedAnnualTaxable : 0
  };
}

/**
 * Calculates YTD tax from history records
 *
 * @param {Array} history - Array of history records for the tax year
 * @param {number} pa - Personal Allowance
 * @param {number} brl - Basic Rate Limit
 * @param {number} hrl - Higher Rate Limit
 * @param {number} grossIncomeToDate - Pre-pension income
 * @returns {object} YTD tax summary
 */
export function calculateYTDTaxFromHistory(history, pa, brl, hrl = TAX_DEFAULTS.HIGHER_RATE_LIMIT, grossIncomeToDate = 0) {
  // Sum up all taxable income from history
  let totalTaxable = grossIncomeToDate;
  let totalIsa = 0;

  for (const record of history) {
    totalTaxable += (record.sipp || 0) + (record.other || 0) + (record.state || 0);
    totalIsa += record.isa || 0;
  }

  const actualTax = calculateTax(totalTaxable, pa, brl, hrl);

  // What would tax have been if ISA was taxable
  const inefficientTaxable = totalTaxable + totalIsa;
  const inefficientTax = calculateTax(inefficientTaxable, pa, brl, hrl);

  return {
    totalTaxable,
    totalIsa,
    taxPaidYTD: actualTax,
    taxSavedYTD: inefficientTax - actualTax,
    taxIfInefficientYTD: inefficientTax,
    monthsRecorded: history.length
  };
}

/**
 * Projects annual tax based on current trajectory
 *
 * @param {object} params - Projection parameters
 * @returns {object} Projected annual tax
 */
export function projectAnnualTax(params) {
  const {
    ytdTaxable,           // Taxable income so far
    ytdIsa,               // ISA used so far
    remainingMonths,      // Months left in tax year
    expectedMonthlySipp,  // Expected monthly SIPP going forward
    expectedMonthlyIsa,   // Expected monthly ISA going forward
    expectedMonthlyOther, // Expected monthly other income
    expectedMonthlyState, // Expected monthly state pension
    pa,
    brl,
    hrl = TAX_DEFAULTS.HIGHER_RATE_LIMIT
  } = params;

  // Project remaining taxable income
  const remainingTaxable = (expectedMonthlySipp + expectedMonthlyOther + expectedMonthlyState) * remainingMonths;
  const remainingIsa = expectedMonthlyIsa * remainingMonths;

  const projectedAnnualTaxable = ytdTaxable + remainingTaxable;
  const projectedAnnualIsa = ytdIsa + remainingIsa;

  const projectedTax = calculateTax(projectedAnnualTaxable, pa, brl, hrl);

  // Inefficient projection (ISA as taxable)
  const projectedTaxableInefficient = projectedAnnualTaxable + projectedAnnualIsa;
  const projectedTaxInefficient = calculateTax(projectedTaxableInefficient, pa, brl, hrl);

  return {
    projectedAnnualTaxable,
    projectedAnnualIsa,
    taxProjectedAnnual: projectedTax,
    taxSavedProjectedAnnual: projectedTaxInefficient - projectedTax,
    taxIfInefficientProjected: projectedTaxInefficient,
    effectiveRate: projectedAnnualTaxable > 0 ? projectedTax / projectedAnnualTaxable : 0
  };
}
