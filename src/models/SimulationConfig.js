/**
 * Simulation Configuration Model
 * Represents settings for Monte Carlo and historical simulations
 */

import { SIMULATION_DEFAULTS, DRAWDOWN_DEFAULTS } from '../constants.js';

/**
 * Creates a SimulationConfig object
 * @param {object} params - Configuration parameters
 * @returns {object} SimulationConfig
 */
export function createSimulationConfig(params = {}) {
  return {
    // Starting fund values
    equityStart: params.equityStart ?? DRAWDOWN_DEFAULTS.EQUITY_MIN,
    bondStart: params.bondStart ?? DRAWDOWN_DEFAULTS.BOND_MIN,
    cashStart: params.cashStart ?? DRAWDOWN_DEFAULTS.CASH_TARGET,

    // Glidepath minimums
    equityMin: params.equityMin ?? DRAWDOWN_DEFAULTS.EQUITY_MIN,
    bondMin: params.bondMin ?? DRAWDOWN_DEFAULTS.BOND_MIN,
    cashTarget: params.cashTarget ?? DRAWDOWN_DEFAULTS.CASH_TARGET,

    // Simulation duration
    years: params.years ?? SIMULATION_DEFAULTS.YEARS,
    duration: params.duration ?? SIMULATION_DEFAULTS.YEARS,

    // Income parameters
    baseSalary: params.baseSalary ?? DRAWDOWN_DEFAULTS.BASE_SALARY,
    other: params.other ?? 0,
    statePension: params.statePension ?? 0,
    statePensionYear: params.statePensionYear ?? 12,

    // Tax settings
    pa: params.pa ?? 12570,
    brl: params.brl ?? 50270,
    hrl: params.hrl ?? 125140,
    taxMode: params.taxMode ?? 'inflates', // 'inflates' or 'frozen'

    // Protection settings
    protectionMult: params.protectionMult ?? SIMULATION_DEFAULTS.PROTECTION_MULTIPLIER,
    consecutiveLimit: params.consecutiveLimit ?? DRAWDOWN_DEFAULTS.CONSECUTIVE_LIMIT,
    disableProtection: params.disableProtection ?? false,

    // HODL (emergency reserve) settings
    hodlEnabled: params.hodlEnabled ?? SIMULATION_DEFAULTS.HODL_ENABLED,
    hodlValue: params.hodlValue ?? SIMULATION_DEFAULTS.HODL_VALUE
  };
}

/**
 * Creates simulation config from stress settings
 * @param {object} stressSettings - Stress tester settings
 * @returns {object} SimulationConfig
 */
export function fromStressSettings(stressSettings) {
  return createSimulationConfig({
    equityStart: stressSettings.equityMin,
    bondStart: stressSettings.bondMin,
    cashStart: stressSettings.cashTarget,
    equityMin: stressSettings.equityMin,
    bondMin: stressSettings.bondMin,
    cashTarget: stressSettings.cashTarget,
    years: stressSettings.duration,
    duration: stressSettings.duration,
    baseSalary: stressSettings.baseSalary,
    other: stressSettings.other,
    statePension: stressSettings.statePension,
    statePensionYear: stressSettings.statePensionYear,
    pa: stressSettings.pa,
    brl: stressSettings.brl,
    hrl: stressSettings.hrl,
    taxMode: stressSettings.taxMode,
    protectionMult: stressSettings.protectionMult,
    consecutiveLimit: stressSettings.consecutiveLimit,
    disableProtection: stressSettings.disableProtection,
    hodlEnabled: stressSettings.hodlEnabled,
    hodlValue: stressSettings.hodlValue
  });
}

/**
 * Creates simulation result object
 * @param {object} params - Result parameters
 * @returns {object} SimulationResult
 */
export function createSimulationResult(params = {}) {
  return {
    // Outcome
    failed: params.failed ?? false,
    years: params.years ?? 0,
    failMonth: params.failMonth ?? null,

    // Final state
    final: params.final ?? 0,
    finalEquity: params.finalEquity ?? 0,
    finalBond: params.finalBond ?? 0,
    finalCash: params.finalCash ?? 0,

    // Protection statistics
    protMonths: params.protMonths ?? 0,
    maxConsec: params.maxConsec ?? 0,

    // HODL usage
    hodlUsed: params.hodlUsed ?? 0,

    // History of monthly states
    hist: params.hist || [],

    // Analysis
    startYear: params.startYear ?? null,
    seed: params.seed ?? null
  };
}

/**
 * Creates a history point for simulation tracking
 * @param {object} params - Point parameters
 * @returns {object} History point
 */
export function createHistoryPoint(params = {}) {
  return {
    year: params.year ?? 0,
    month: params.month ?? 0,
    equity: params.equity ?? 0,
    bond: params.bond ?? 0,
    cash: params.cash ?? 0,
    total: params.total ?? 0,
    draw: params.draw ?? 0,
    source: params.source ?? 'Growth',
    inProtection: params.inProtection ?? false,
    equityMin: params.equityMin ?? 0,
    bondMin: params.bondMin ?? 0,
    cashMax: params.cashMax ?? 0
  };
}

/**
 * Validates a SimulationConfig
 * @param {object} config - Config to validate
 * @returns {object} Validation result { valid: boolean, errors: string[] }
 */
export function validateSimulationConfig(config) {
  const errors = [];

  if (config.years <= 0 || config.years > 100) {
    errors.push('Simulation years must be between 1 and 100');
  }
  if (config.baseSalary < 0) {
    errors.push('Base salary cannot be negative');
  }
  if (config.equityStart < 0 || config.bondStart < 0 || config.cashStart < 0) {
    errors.push('Starting fund values cannot be negative');
  }
  if (config.protectionMult < 0 || config.protectionMult > 1) {
    errors.push('Protection multiplier must be between 0 and 1');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}
