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
