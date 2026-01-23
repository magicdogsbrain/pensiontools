/**
 * Tax Year Model
 * Represents UK tax year configuration and calculations
 */

import { TAX_DEFAULTS } from '../constants.js';

/**
 * Creates a TaxYear configuration object
 * @param {object} config - Tax year configuration
 * @returns {object} TaxYear object
 */
export function createTaxYear(config = {}) {
  return {
    // Tax thresholds
    pa: config.pa ?? TAX_DEFAULTS.PERSONAL_ALLOWANCE,
    brl: config.brl ?? TAX_DEFAULTS.BASIC_RATE_LIMIT,
    hrl: config.hrl ?? TAX_DEFAULTS.HIGHER_RATE_LIMIT,

    // Expected inflation for the year
    cpi: config.cpi ?? 0.025,

    // Other income sources (annual amounts)
    other: config.other ?? 0,          // Other pension income
    statePension: config.statePension ?? 0,

    // ISA configuration
    isaBalance: config.isaBalance ?? 0,
    isaMonthlyDraw: config.isaMonthlyDraw ?? 0
  };
}

/**
 * Gets the default tax year configuration
 * @returns {object} Default TaxYear
 */
export function getDefaultTaxYear() {
  return createTaxYear({
    pa: TAX_DEFAULTS.PERSONAL_ALLOWANCE,
    brl: TAX_DEFAULTS.BASIC_RATE_LIMIT,
    hrl: TAX_DEFAULTS.HIGHER_RATE_LIMIT,
    cpi: 0.025,
    other: 0,
    statePension: 0,
    isaBalance: 0,
    isaMonthlyDraw: 0
  });
}

/**
 * Inflates tax thresholds by cumulative inflation
 * @param {object} taxYear - TaxYear configuration
 * @param {number} cumulativeInflation - Cumulative inflation factor
 * @param {boolean} frozen - Whether thresholds are frozen
 * @returns {object} Adjusted thresholds
 */
export function adjustThresholds(taxYear, cumulativeInflation, frozen = false) {
  if (frozen) {
    return {
      pa: taxYear.pa,
      brl: taxYear.brl,
      hrl: taxYear.hrl
    };
  }

  return {
    pa: taxYear.pa * cumulativeInflation,
    brl: taxYear.brl * cumulativeInflation,
    hrl: taxYear.hrl * cumulativeInflation
  };
}

/**
 * Calculates Personal Allowance after high income taper
 * @param {number} grossIncome - Total gross income
 * @param {number} basePA - Base Personal Allowance
 * @returns {number} Effective Personal Allowance
 */
export function calculateEffectivePA(grossIncome, basePA) {
  if (grossIncome <= TAX_DEFAULTS.PA_TAPER_THRESHOLD) {
    return basePA;
  }

  const reduction = (grossIncome - TAX_DEFAULTS.PA_TAPER_THRESHOLD) * TAX_DEFAULTS.PA_TAPER_RATE;
  return Math.max(0, basePA - reduction);
}

/**
 * Validates a TaxYear configuration
 * @param {object} taxYear - TaxYear to validate
 * @returns {object} Validation result { valid: boolean, errors: string[] }
 */
export function validateTaxYear(taxYear) {
  const errors = [];

  if (taxYear.pa < 0) errors.push('Personal Allowance cannot be negative');
  if (taxYear.brl <= taxYear.pa) errors.push('Basic Rate Limit must exceed Personal Allowance');
  if (taxYear.hrl <= taxYear.brl) errors.push('Higher Rate Limit must exceed Basic Rate Limit');
  if (taxYear.cpi < -0.1 || taxYear.cpi > 0.3) errors.push('CPI should be between -10% and 30%');

  return {
    valid: errors.length === 0,
    errors
  };
}
