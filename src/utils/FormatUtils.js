/**
 * Formatting Utilities
 */

/**
 * Formats a number as GBP currency
 * @param {number} value - Value to format
 * @param {boolean} showPence - Whether to show pence (default: false for large values)
 * @returns {string} Formatted currency string
 */
export function formatCurrency(value, showPence = null) {
  const absValue = Math.abs(value);
  const showDecimal = showPence !== null ? showPence : absValue < 100;

  const formatted = Math.abs(value).toLocaleString('en-GB', {
    minimumFractionDigits: showDecimal ? 2 : 0,
    maximumFractionDigits: showDecimal ? 2 : 0
  });

  return value < 0 ? `-£${formatted}` : `£${formatted}`;
}

/**
 * Formats a number in millions (e.g., £1.5M)
 * @param {number} value - Value to format
 * @returns {string} Formatted string
 */
export function formatMillions(value) {
  return `£${(value / 1e6).toFixed(2)}M`;
}

/**
 * Formats a percentage
 * @param {number} value - Value as decimal (0.05 = 5%)
 * @param {number} decimals - Decimal places (default: 1)
 * @returns {string} Formatted percentage
 */
export function formatPercent(value, decimals = 1) {
  return `${(value * 100).toFixed(decimals)}%`;
}

/**
 * Formats a number with commas
 * @param {number} value - Value to format
 * @returns {string} Formatted number
 */
export function formatNumber(value) {
  return value.toLocaleString('en-GB');
}

/**
 * Formats a number of months as years and months
 * @param {number} months - Total months
 * @returns {string} Formatted string (e.g., "2 yrs 3 mo")
 */
export function formatMonthsAsYears(months) {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} mo`;
  }
  if (remainingMonths === 0) {
    return `${years} yr${years !== 1 ? 's' : ''}`;
  }
  return `${years} yr${years !== 1 ? 's' : ''} ${remainingMonths} mo`;
}

/**
 * Formats a date as a readable string
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date (e.g., "15 Jan 2024")
 */
export function formatDate(date) {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

/**
 * Formats a date as month and year
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date (e.g., "January 2024")
 */
export function formatMonthYear(date) {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-GB', {
    month: 'long',
    year: 'numeric'
  });
}

/**
 * Parses a currency string back to a number
 * @param {string} value - Currency string (e.g., "£1,234.56")
 * @returns {number} Numeric value
 */
export function parseCurrency(value) {
  return parseFloat(String(value).replace(/[£,\s]/g, '')) || 0;
}

/**
 * Clamps a value between min and max
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped value
 */
export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

/**
 * Rounds to specified decimal places
 * @param {number} value - Value to round
 * @param {number} decimals - Decimal places
 * @returns {number} Rounded value
 */
export function roundTo(value, decimals) {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}
