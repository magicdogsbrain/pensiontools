/**
 * Decision Model
 * Represents a monthly drawdown decision with all calculations
 */

/**
 * Creates a Decision result object
 * @param {object} params - Decision parameters
 * @returns {object} Decision object
 */
export function createDecision(params = {}) {
  return {
    // Context
    date: params.date || null,
    taxYear: params.taxYear || null,
    yearNumber: params.yearNumber ?? 0,
    monthInTaxYear: params.monthInTaxYear ?? 0,
    remainingMonths: params.remainingMonths ?? 12,

    // Fund values (current)
    equity: params.equity ?? 0,
    bond: params.bond ?? 0,
    cash: params.cash ?? 0,
    isa: params.isa ?? 0,

    // Glidepath minimums (adjusted for inflation and depletion)
    adjEquityMin: params.adjEquityMin ?? 0,
    adjBondMin: params.adjBondMin ?? 0,
    adjCashTarget: params.adjCashTarget ?? 0,

    // Tax thresholds (current year)
    pa: params.pa ?? 0,
    brl: params.brl ?? 0,
    hrl: params.hrl ?? 0,

    // Income sources
    other: params.other ?? 0,           // Monthly other pension
    statePension: params.statePension ?? 0, // Monthly state pension

    // Calculated draws
    sippDraw: params.sippDraw ?? 0,     // Recommended SIPP withdrawal
    isaDraw: params.isaDraw ?? 0,       // Recommended ISA top-up
    totalMonthlyNet: params.totalMonthlyNet ?? 0,

    // Tax efficiency metrics
    taxEfficient: params.taxEfficient ?? true,
    annualTaxableSoFar: params.annualTaxableSoFar ?? 0,
    projectedAnnualTaxable: params.projectedAnnualTaxable ?? 0,
    headroomToBRL: params.headroomToBRL ?? 0,

    // Protection status
    inProtection: params.inProtection ?? false,
    protectionReason: params.protectionReason || null,
    consecutiveCashDraws: params.consecutiveCashDraws ?? 0,

    // Tax boost (catch-up)
    boostAmount: params.boostAmount ?? 0,
    boostEligible: params.boostEligible ?? false,

    // Withdrawal source
    source: params.source || 'Growth',  // 'Growth', 'Cash', 'ISA'
    drawFromEquity: params.drawFromEquity ?? 0,
    drawFromBond: params.drawFromBond ?? 0,
    drawFromCash: params.drawFromCash ?? 0,

    // Rebalancing
    rebalanceNeeded: params.rebalanceNeeded ?? false,
    rebalanceActions: params.rebalanceActions || [],

    // Warnings and alerts
    alerts: params.alerts || [],

    // Debug information
    calculationDetails: params.calculationDetails || {}
  };
}

/**
 * Creates a history record from a Decision
 * @param {object} decision - Decision object
 * @returns {object} History record for storage
 */
export function decisionToHistory(decision) {
  return {
    date: decision.date,
    taxYear: decision.taxYear,
    yearNum: decision.yearNumber,
    equity: decision.equity,
    bond: decision.bond,
    cash: decision.cash,
    total: decision.equity + decision.bond + decision.cash,
    source: decision.source,
    sipp: decision.sippDraw,
    isa: decision.isaDraw,
    other: decision.other,
    state: decision.statePension,
    inProtection: decision.inProtection,
    reason: decision.protectionReason || '',
    boostAmount: decision.boostAmount,
    rebal: decision.rebalanceActions.join('; '),
    adjEquity: decision.adjEquityMin,
    adjBond: decision.adjBondMin,
    adjCash: decision.adjCashTarget
  };
}

/**
 * Creates a Decision from a history record
 * @param {object} history - History record
 * @returns {object} Partial Decision object
 */
export function historyToDecision(history) {
  return createDecision({
    date: history.date,
    taxYear: history.taxYear,
    yearNumber: history.yearNum,
    equity: history.equity,
    bond: history.bond,
    cash: history.cash,
    sippDraw: history.sipp,
    isaDraw: history.isa,
    other: history.other,
    statePension: history.state,
    inProtection: history.inProtection,
    source: history.source,
    boostAmount: history.boostAmount || 0,
    adjEquityMin: history.adjEquity,
    adjBondMin: history.adjBond,
    adjCashTarget: history.adjCash
  });
}

/**
 * Calculates summary statistics from a Decision
 * @param {object} decision - Decision object
 * @returns {object} Summary statistics
 */
export function getDecisionSummary(decision) {
  const totalFunds = decision.equity + decision.bond + decision.cash;
  const totalMinimums = decision.adjEquityMin + decision.adjBondMin + decision.adjCashTarget;
  const growthFunds = decision.equity + decision.bond;
  const growthMinimums = decision.adjEquityMin + decision.adjBondMin;

  return {
    totalFunds,
    totalMinimums,
    surplus: totalFunds - totalMinimums,
    surplusPercent: totalMinimums > 0 ? ((totalFunds - totalMinimums) / totalMinimums) * 100 : 0,
    growthFunds,
    growthMinimums,
    growthSurplus: growthFunds - growthMinimums,
    cashBuffer: decision.cash - decision.adjCashTarget,
    monthlyIncome: decision.sippDraw + decision.isaDraw + decision.other + decision.statePension,
    isHealthy: growthFunds >= growthMinimums && decision.cash >= decision.adjCashTarget
  };
}

/**
 * Alert severity levels
 */
export const AlertSeverity = {
  INFO: 'info',
  WARNING: 'warning',
  DANGER: 'danger',
  SUCCESS: 'success'
};

/**
 * Creates an alert object
 * @param {string} message - Alert message
 * @param {string} severity - Alert severity
 * @param {string} code - Alert code for identification
 * @returns {object} Alert object
 */
export function createAlert(message, severity = AlertSeverity.INFO, code = null) {
  return { message, severity, code };
}
