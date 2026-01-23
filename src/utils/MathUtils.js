/**
 * Mathematical and Statistical Utilities
 */

/**
 * Generates a seeded random number generator
 * Uses mulberry32 algorithm for deterministic sequences
 * @param {number} seed - Seed value
 * @returns {function} Random number generator (returns 0-1)
 */
export function seededRng(seed) {
  return function() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

/**
 * Generates a normally distributed random number using Box-Muller transform
 * @param {number} mean - Mean of distribution
 * @param {number} stdDev - Standard deviation
 * @param {function} rng - Random number generator
 * @returns {number} Random number from normal distribution
 */
export function gaussianRandom(mean, stdDev, rng) {
  const u1 = rng();
  const u2 = rng();
  const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  return mean + stdDev * z;
}

/**
 * Calculates the percentile value from a sorted array
 * @param {number[]} sortedArray - Sorted array of values
 * @param {number} percentile - Percentile (0-100)
 * @returns {number} Value at percentile
 */
export function getPercentile(sortedArray, percentile) {
  const index = Math.floor((percentile / 100) * sortedArray.length);
  return sortedArray[Math.min(index, sortedArray.length - 1)] || 0;
}

/**
 * Calculates mean of an array
 * @param {number[]} array - Array of numbers
 * @returns {number} Mean value
 */
export function mean(array) {
  if (array.length === 0) return 0;
  return array.reduce((a, b) => a + b, 0) / array.length;
}

/**
 * Calculates standard deviation of an array
 * @param {number[]} array - Array of numbers
 * @returns {number} Standard deviation
 */
export function standardDeviation(array) {
  if (array.length === 0) return 0;
  const avg = mean(array);
  const squareDiffs = array.map(value => Math.pow(value - avg, 2));
  return Math.sqrt(mean(squareDiffs));
}

/**
 * Calculates median of an array
 * @param {number[]} array - Array of numbers
 * @returns {number} Median value
 */
export function median(array) {
  if (array.length === 0) return 0;
  const sorted = [...array].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}

/**
 * Linear interpolation between two values
 * @param {number} a - Start value
 * @param {number} b - End value
 * @param {number} t - Interpolation factor (0-1)
 * @returns {number} Interpolated value
 */
export function lerp(a, b, t) {
  return a + (b - a) * t;
}

/**
 * Calculates cumulative product (compounded returns)
 * @param {number[]} returns - Array of returns (as decimals)
 * @returns {number} Cumulative product
 */
export function cumulativeProduct(returns) {
  return returns.reduce((acc, r) => acc * (1 + r), 1);
}

/**
 * Calculates compound annual growth rate (CAGR)
 * @param {number} startValue - Starting value
 * @param {number} endValue - Ending value
 * @param {number} years - Number of years
 * @returns {number} CAGR as decimal
 */
export function cagr(startValue, endValue, years) {
  if (startValue <= 0 || years <= 0) return 0;
  return Math.pow(endValue / startValue, 1 / years) - 1;
}

/**
 * Generates array of percentile data points from results
 * @param {object[]} results - Array of simulation results
 * @param {number} years - Number of years
 * @returns {object[]} Array of percentile objects per year
 */
export function generatePercentileData(results, years) {
  const data = [];

  for (let year = 0; year <= years; year++) {
    const totals = results
      .map(r => {
        const h = r.hist.find(h => h.year === year);
        return h ? h.total : 0;
      })
      .sort((a, b) => a - b);

    const n = totals.length;
    data.push({
      year,
      p5: totals[Math.floor(n * 0.05)] || 0,
      p10: totals[Math.floor(n * 0.10)] || 0,
      p25: totals[Math.floor(n * 0.25)] || 0,
      p50: totals[Math.floor(n * 0.50)] || 0,
      p75: totals[Math.floor(n * 0.75)] || 0,
      p90: totals[Math.floor(n * 0.90)] || 0,
      p95: totals[Math.floor(n * 0.95)] || 0
    });
  }

  return data;
}

/**
 * Calculates distance from a point to a line segment
 * Used for chart tooltip hit detection
 * @param {number} px - Point X
 * @param {number} py - Point Y
 * @param {number} x1 - Segment start X
 * @param {number} y1 - Segment start Y
 * @param {number} x2 - Segment end X
 * @param {number} y2 - Segment end Y
 * @returns {number} Distance
 */
export function distanceToSegment(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len2 = dx * dx + dy * dy;

  if (len2 === 0) {
    return Math.sqrt((px - x1) ** 2 + (py - y1) ** 2);
  }

  const t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / len2));
  const projX = x1 + t * dx;
  const projY = y1 + t * dy;

  return Math.sqrt((px - projX) ** 2 + (py - projY) ** 2);
}

/**
 * Generates a simple hash for data integrity checking
 * @param {object} data - Object to hash
 * @returns {string} Hash string
 */
export function simpleHash(data) {
  const str = JSON.stringify(data);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash.toString(16);
}
