/**
 * UK State Pension Utilities
 *
 * Handles State Pension calculations based on HMRC forecast data.
 * Uses the actual SP start date and weekly amount from the user's forecast.
 */

import { getTaxYear, getTaxYearStart, getTaxYearEnd } from './DateUtils.js';

/**
 * Parses a date string in various formats
 * Accepts: "21 April 2037", "2037-04-21", "21/04/2037"
 *
 * @param {string} dateStr - Date string to parse
 * @returns {Date|null} Parsed date or null if invalid
 */
export function parseStatePensionDate(dateStr) {
  if (!dateStr) return null;

  // Try ISO format first (2037-04-21)
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) return d;
  }

  // Try UK format (21/04/2037)
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
  }

  // Try natural format (21 April 2037)
  const months = {
    january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
    july: 6, august: 7, september: 8, october: 9, november: 10, december: 11
  };

  const match = dateStr.match(/^(\d{1,2})\s+(\w+)\s+(\d{4})$/i);
  if (match) {
    const day = parseInt(match[1]);
    const month = months[match[2].toLowerCase()];
    const year = parseInt(match[3]);
    if (month !== undefined) {
      return new Date(year, month, day);
    }
  }

  return null;
}

/**
 * Formats a State Pension start date for display
 *
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date like "21 April 2037"
 */
export function formatStatePensionDate(date) {
  const d = typeof date === 'string' ? parseStatePensionDate(date) : date;
  if (!d || isNaN(d.getTime())) return '';

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

/**
 * Calculates the annual State Pension amount from weekly
 *
 * Note: SP is paid every 4 weeks (13 times/year), not monthly.
 * Annual = Weekly × 52
 *
 * @param {number} weeklyAmount - Weekly State Pension amount
 * @returns {number} Annual amount
 */
export function weeklyToAnnual(weeklyAmount) {
  return weeklyAmount * 52;
}

/**
 * Calculates the monthly average State Pension amount
 *
 * For budgeting purposes, we use annual ÷ 12 even though
 * actual payments are 4-weekly (some months have 2 payments).
 *
 * @param {number} weeklyAmount - Weekly State Pension amount
 * @returns {number} Monthly average amount
 */
export function weeklyToMonthlyAverage(weeklyAmount) {
  return (weeklyAmount * 52) / 12;
}

/**
 * Gets the tax year when State Pension starts
 *
 * @param {Date|string} spStartDate - State Pension start date
 * @returns {string} Tax year in 'YY/YY' format (e.g., '37/38')
 */
export function getStatePensionStartTaxYear(spStartDate) {
  const d = typeof spStartDate === 'string' ? parseStatePensionDate(spStartDate) : spStartDate;
  if (!d || isNaN(d.getTime())) return null;

  return getTaxYear(d);
}

/**
 * Calculates State Pension for a specific tax year
 *
 * Handles:
 * - Years before SP starts: returns 0
 * - First year: pro-rata based on start date
 * - Subsequent years: full amount, inflated by CPI
 *
 * @param {object} params - Calculation parameters
 * @param {string} params.taxYear - Tax year to calculate for ('YY/YY' format)
 * @param {Date|string} params.spStartDate - State Pension start date
 * @param {number} params.weeklyAmount - Weekly SP amount (today's money)
 * @param {object} params.taxYearConfigs - All tax year configs (for CPI data)
 * @returns {object} { annual, monthly, isReceiving, isFirstYear, weeksInYear, startDate }
 */
export function calculateStatePensionForTaxYear(params) {
  const {
    taxYear,
    spStartDate,
    weeklyAmount,
    taxYearConfigs = {}
  } = params;

  if (!spStartDate || !weeklyAmount || weeklyAmount <= 0) {
    return {
      annual: 0,
      monthly: 0,
      isReceiving: false,
      isFirstYear: false,
      weeksInYear: 0,
      startDate: null
    };
  }

  const startDate = typeof spStartDate === 'string'
    ? parseStatePensionDate(spStartDate)
    : spStartDate;

  if (!startDate || isNaN(startDate.getTime())) {
    return {
      annual: 0,
      monthly: 0,
      isReceiving: false,
      isFirstYear: false,
      weeksInYear: 0,
      startDate: null
    };
  }

  const spStartTaxYear = getTaxYear(startDate);
  const taxYearStart = getTaxYearStart(taxYear);
  const taxYearEnd = getTaxYearEnd(taxYear);

  // Compare tax years
  const sortedYears = [...new Set([spStartTaxYear, taxYear, ...Object.keys(taxYearConfigs)])]
    .sort();
  const spStartIndex = sortedYears.indexOf(spStartTaxYear);
  const currentIndex = sortedYears.indexOf(taxYear);

  // Before SP starts
  if (currentIndex < spStartIndex) {
    return {
      annual: 0,
      monthly: 0,
      isReceiving: false,
      isFirstYear: false,
      weeksInYear: 0,
      startDate: formatStatePensionDate(startDate)
    };
  }

  // Calculate cumulative CPI inflation from SP start year
  let cumulativeInflation = 1;
  for (let i = spStartIndex; i < currentIndex; i++) {
    const yr = sortedYears[i];
    const config = taxYearConfigs[yr];
    const cpi = config?.cpi || 0.025; // Default 2.5% if no CPI data
    cumulativeInflation *= (1 + cpi);
  }

  const inflatedWeekly = weeklyAmount * cumulativeInflation;

  // First year - pro-rata
  const isFirstYear = taxYear === spStartTaxYear;

  if (isFirstYear) {
    // Calculate weeks from SP start to end of tax year
    const msPerWeek = 7 * 24 * 60 * 60 * 1000;
    const weeksInYear = Math.max(0, (taxYearEnd.getTime() - startDate.getTime()) / msPerWeek);
    const proRataAnnual = inflatedWeekly * weeksInYear;

    return {
      annual: proRataAnnual,
      monthly: proRataAnnual / 12,
      isReceiving: true,
      isFirstYear: true,
      weeksInYear: Math.round(weeksInYear * 10) / 10,
      startDate: formatStatePensionDate(startDate)
    };
  }

  // Full year
  const fullAnnual = inflatedWeekly * 52;

  return {
    annual: fullAnnual,
    monthly: fullAnnual / 12,
    isReceiving: true,
    isFirstYear: false,
    weeksInYear: 52,
    startDate: formatStatePensionDate(startDate)
  };
}

/**
 * Calculates years/months until State Pension starts
 *
 * @param {Date|string} spStartDate - State Pension start date
 * @param {Date} fromDate - Calculate from this date (defaults to now)
 * @returns {object} { years, months, totalMonths, isPast }
 */
export function getTimeUntilStatePension(spStartDate, fromDate = new Date()) {
  const startDate = typeof spStartDate === 'string'
    ? parseStatePensionDate(spStartDate)
    : spStartDate;

  if (!startDate || isNaN(startDate.getTime())) {
    return { years: 0, months: 0, totalMonths: 0, isPast: false };
  }

  const diffMs = startDate.getTime() - fromDate.getTime();
  const isPast = diffMs <= 0;

  if (isPast) {
    return { years: 0, months: 0, totalMonths: 0, isPast: true };
  }

  const totalMonths = Math.floor(diffMs / (30.44 * 24 * 60 * 60 * 1000));
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return { years, months, totalMonths, isPast };
}

/**
 * Validates State Pension settings
 *
 * @param {object} settings - { spStartDate, spWeeklyAmount }
 * @returns {object} { isValid, errors: string[] }
 */
export function validateStatePensionSettings(settings) {
  const errors = [];

  if (settings.spStartDate) {
    const parsed = parseStatePensionDate(settings.spStartDate);
    if (!parsed) {
      errors.push('Invalid State Pension start date format');
    }
  }

  if (settings.spWeeklyAmount !== undefined && settings.spWeeklyAmount !== null) {
    if (typeof settings.spWeeklyAmount !== 'number' || settings.spWeeklyAmount < 0) {
      errors.push('Weekly State Pension amount must be a positive number');
    }
    if (settings.spWeeklyAmount > 500) {
      errors.push('Weekly State Pension amount seems unusually high (max ~£230/week in 2024)');
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}
