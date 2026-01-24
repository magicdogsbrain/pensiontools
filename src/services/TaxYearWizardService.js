/**
 * Tax Year Wizard Service
 * Handles tax year setup wizard logic including ISA sufficiency calculations
 */

import { getTaxYear, getRemainingTaxYearMonths, parseMonth } from '../utils/DateUtils.js';
import {
  getTaxYearConfigAsync,
  getDecisionSettingsAsync,
  getAllTaxYearsAsync,
  getStatePensionForTaxYear,
  isYearSetupComplete
} from '../storage/DecisionRepository.js';

/**
 * Checks if the Tax Year Setup Wizard should be shown
 *
 * The wizard is triggered when:
 * 1. User calculates a decision for a month in a tax year that hasn't been set up
 *
 * @param {string} selectedMonth - Month selected in decision tool (YYYY-MM format)
 * @returns {Promise<object>} { showWizard: boolean, taxYear: string, isApril: boolean, reason: string }
 */
export async function shouldShowWizard(selectedMonth) {
  const dateObj = parseMonth(selectedMonth);
  const taxYear = getTaxYear(dateObj);
  const month = dateObj.getMonth() + 1; // 1-indexed

  // Check if year setup is complete
  const isComplete = await isYearSetupComplete(taxYear);

  if (isComplete) {
    return {
      showWizard: false,
      taxYear,
      isApril: month === 4,
      reason: 'Year setup already complete'
    };
  }

  return {
    showWizard: true,
    taxYear,
    isApril: month === 4,
    reason: `Tax year ${taxYear} has not been set up`
  };
}

/**
 * Suggests an inflation-adjusted salary based on last year's CPI
 *
 * @param {number} baseSalary - Base salary from settings
 * @param {number} lastYearCpi - CPI from previous tax year (as decimal, e.g., 0.04 for 4%)
 * @returns {number} Suggested salary
 */
export function suggestSalary(baseSalary, lastYearCpi) {
  return baseSalary * (1 + lastYearCpi);
}

/**
 * Gets the previous tax year's CPI for salary suggestion
 *
 * @param {string} taxYear - Current tax year in 'YY/YY' format
 * @returns {Promise<number>} Previous year's CPI (defaults to 0.025 if not found)
 */
export async function getPreviousYearCpi(taxYear) {
  const allTaxYears = await getAllTaxYearsAsync();
  const sortedTaxYears = Object.keys(allTaxYears).sort();

  const currentIndex = sortedTaxYears.indexOf(taxYear);

  // If there's a previous year, get its CPI
  if (currentIndex > 0) {
    const prevYear = sortedTaxYears[currentIndex - 1];
    return allTaxYears[prevYear]?.cpi || 0.025;
  }

  // No previous year, use default
  return 0.025;
}

/**
 * Calculates how much ISA/Savings is needed for tax efficiency
 *
 * This is calculated BEFORE the user enters their ISA amount, to guide them.
 *
 * @param {object} params - Calculation parameters
 * @returns {object} ISA requirement calculation result
 */
export function calculateIsaNeeded(params) {
  const {
    targetAnnualGross,    // Target annual gross salary
    brl,                  // Basic Rate Limit
    other = 0,            // Annual other taxable income
    statePension = 0,     // Annual state pension
    remainingMonths,      // Months remaining in tax year
    grossIncomeToDate = 0 // Income already received before starting pension
  } = params;

  // Remaining BRL headroom after income-to-date
  const remainingBrlHeadroom = Math.max(0, brl - grossIncomeToDate);

  // If BRL already exhausted, cannot be tax-efficient
  if (remainingBrlHeadroom <= 0) {
    return {
      isaNeeded: 0,
      brlExhausted: true,
      remainingBrlHeadroom: 0,
      maxTaxEfficientSalary: brl,
      reducedSalaryOption: brl,
      canBeTaxEfficient: false,
      reason: 'BRL already exhausted by prior income'
    };
  }

  // Pro-rated amounts for remaining months
  const monthlyOther = other / 12;
  const monthlyStatePension = statePension / 12;
  const monthlyFixedIncome = monthlyOther + monthlyStatePension;
  const remainingFixedIncome = monthlyFixedIncome * remainingMonths;

  // Maximum SIPP that keeps total at/below BRL
  const maxSippRemaining = Math.max(0, remainingBrlHeadroom - remainingFixedIncome);

  // Target income for remaining months (pro-rated from annual)
  const targetRemainingGross = (targetAnnualGross / 12) * remainingMonths;

  // ISA needed = target - fixed income - max SIPP at BRL
  const isaNeeded = Math.max(0, targetRemainingGross - remainingFixedIncome - maxSippRemaining);

  // Calculate if target is achievable at BRL (no ISA needed)
  const targetAchievableAtBrl = targetRemainingGross <= (maxSippRemaining + remainingFixedIncome);

  return {
    isaNeeded,
    brlExhausted: false,
    remainingBrlHeadroom,
    maxTaxEfficientSalary: brl,
    reducedSalaryOption: brl,
    canBeTaxEfficient: true,
    targetAchievableAtBrl,
    maxSippRemaining,
    remainingFixedIncome,
    targetRemainingGross,
    reason: isaNeeded > 0
      ? `Need £${Math.round(isaNeeded).toLocaleString()} ISA/Savings for tax efficiency`
      : 'Target achievable at BRL without ISA'
  };
}

/**
 * Validates user's ISA/Savings input against requirement
 *
 * @param {number} isaEntered - Amount user entered
 * @param {number} isaNeeded - Amount needed for tax efficiency
 * @param {boolean} brlExhausted - Whether BRL is already exhausted
 * @returns {object} Validation result with options
 */
export function validateIsaInput(isaEntered, isaNeeded, brlExhausted) {
  if (brlExhausted) {
    return {
      sufficient: false,
      isBrlExhausted: true,
      options: [
        { key: 'reduced', label: 'Reduce salary to BRL', description: 'Accept lower income to stay tax-efficient' },
        { key: 'inefficient', label: 'Accept tax-inefficient year', description: 'Draw full SIPP, pay 40% on excess' }
      ]
    };
  }

  if (isaEntered >= isaNeeded) {
    return {
      sufficient: true,
      isBrlExhausted: false,
      options: []
    };
  }

  // ISA insufficient
  return {
    sufficient: false,
    isBrlExhausted: false,
    shortfall: isaNeeded - isaEntered,
    options: [
      { key: 'increase', label: `Increase ISA to £${Math.round(isaNeeded).toLocaleString()}`, description: 'Provide enough ISA for tax efficiency' },
      { key: 'reduced', label: 'Reduce salary to BRL', description: 'Keep ISA to grow, accept lower income' },
      { key: 'inefficient', label: 'Accept tax-inefficient year', description: 'Draw full SIPP, ISA stays untouched' }
    ]
  };
}

/**
 * Gets all data needed for the wizard
 *
 * @param {string} selectedMonth - Selected month in YYYY-MM format
 * @returns {Promise<object>} Wizard initialization data
 */
export async function getWizardData(selectedMonth) {
  const dateObj = parseMonth(selectedMonth);
  const taxYear = getTaxYear(dateObj);
  const month = dateObj.getMonth() + 1;
  const isApril = month === 4;
  const remainingMonths = getRemainingTaxYearMonths(dateObj);

  // Get settings and existing config
  const settings = await getDecisionSettingsAsync();
  const existingConfig = await getTaxYearConfigAsync(taxYear);
  const allTaxYears = await getAllTaxYearsAsync();

  // Get previous year's config for defaults
  const sortedTaxYears = Object.keys(allTaxYears).sort();
  const prevYearIndex = sortedTaxYears.indexOf(taxYear) - 1;
  const prevYearConfig = prevYearIndex >= 0
    ? allTaxYears[sortedTaxYears[prevYearIndex]]
    : null;

  // Get state pension info
  const statePensionInfo = await getStatePensionForTaxYear(taxYear);

  // Suggest salary based on CPI
  const prevCpi = prevYearConfig?.cpi || 0.025;
  const suggestedSalary = suggestSalary(settings.baseSalary, prevCpi);

  return {
    taxYear,
    selectedMonth,
    isApril,
    remainingMonths,

    // Current settings
    baseSalary: settings.baseSalary,
    suggestedSalary,

    // Previous year defaults
    defaults: {
      pa: prevYearConfig?.pa || existingConfig.pa,
      brl: prevYearConfig?.brl || existingConfig.brl,
      hrl: prevYearConfig?.hrl || existingConfig.hrl,
      cpi: prevCpi,
      other: prevYearConfig?.other || 0
    },

    // State pension
    statePension: statePensionInfo,

    // Existing config (if partially filled)
    existingConfig: existingConfig.yearSetupComplete ? existingConfig : null
  };
}

/**
 * Calculates the monthly breakdown for the confirmation step
 *
 * @param {object} params - Confirmed wizard parameters
 * @returns {object} Monthly breakdown
 */
export function calculateMonthlyBreakdown(params) {
  const {
    targetSalary,
    brl,
    other = 0,
    statePension = 0,
    isaSavingsAllocation = 0,
    remainingMonths,
    grossIncomeToDate = 0,
    isTaxEfficient = true
  } = params;

  const monthlyTarget = targetSalary / 12;
  const monthlyOther = other / 12;
  const monthlyStatePension = statePension / 12;
  const monthlyFixedIncome = monthlyOther + monthlyStatePension;

  if (!isTaxEfficient) {
    // Tax-inefficient mode: full SIPP draw, no ISA
    const monthlySipp = monthlyTarget - monthlyFixedIncome;
    return {
      monthlySipp,
      monthlyIsa: 0,
      monthlyOther,
      monthlyStatePension,
      monthlyTotal: monthlyTarget,
      mode: 'tax-inefficient'
    };
  }

  // Tax-efficient mode
  const remainingBrl = Math.max(0, brl - grossIncomeToDate);
  const maxMonthlySippAtBrl = Math.max(0, (remainingBrl / remainingMonths) - monthlyFixedIncome);
  const monthlySipp = Math.min(monthlyTarget - monthlyFixedIncome, maxMonthlySippAtBrl);
  const monthlyIsa = isaSavingsAllocation / remainingMonths;

  return {
    monthlySipp,
    monthlyIsa,
    monthlyOther,
    monthlyStatePension,
    monthlyTotal: monthlySipp + monthlyIsa + monthlyFixedIncome,
    mode: 'tax-efficient'
  };
}

/**
 * Builds the tax year config to save after wizard completion
 *
 * @param {object} wizardData - Data collected from wizard
 * @returns {object} Tax year config to save
 */
export function buildTaxYearConfig(wizardData) {
  const {
    pa,
    brl,
    hrl,
    cpi,
    other,
    isaSavingsAllocation,
    isTaxEfficient,
    taxEfficiencyChoice,
    grossIncomeToDate,
    startMonth,
    confirmedSalary
  } = wizardData;

  return {
    // Tax thresholds
    pa,
    brl,
    hrl,

    // Previous year's CPI
    cpi,

    // Other taxable income (annual)
    other,

    // ISA/Savings
    isaSavingsAllocation: isTaxEfficient ? isaSavingsAllocation : 0,
    isaSavingsUsed: 0,

    // Tax efficiency
    isTaxEfficient,
    taxEfficiencyChoice,

    // Mid-year start
    grossIncomeToDate: grossIncomeToDate || 0,
    startMonth: startMonth || 4,

    // Wizard completion
    yearSetupComplete: true,
    confirmedSalary
  };
}
