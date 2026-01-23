/**
 * Decision Panel Component
 * Renders the single unified recommendation (no alternatives)
 */

import { formatCurrency, formatPercent } from '../../utils/FormatUtils.js';
import { AlertSeverity } from '../../models/Decision.js';

/**
 * Renders the decision output panel
 * @param {object} decision - Decision object from DecisionService
 * @param {HTMLElement} container - Container element to render into
 */
export function renderDecisionPanel(decision, container) {
  const html = buildDecisionHTML(decision);
  container.innerHTML = html;
}

/**
 * Builds the HTML for the decision panel
 * @param {object} decision - Decision object
 * @returns {string} HTML string
 */
export function buildDecisionHTML(decision) {
  const d = decision;
  const details = d.calculationDetails || {};

  let html = '';

  // Mode indicator
  const modeClass = d.taxEfficient ? 'success' : 'warning';
  const modeLabel = d.taxEfficient ? 'Tax-Efficient Mode' : 'Standard Mode';
  const modeIcon = d.taxEfficient ? '✓' : '!';

  html += `<div class="decision-mode ${modeClass}">
    <span class="mode-icon">${modeIcon}</span>
    <span class="mode-label">${modeLabel}</span>
    ${d.inProtection ? '<span class="protection-badge">PROTECTION</span>' : ''}
  </div>`;

  // Alerts
  if (d.alerts && d.alerts.length > 0) {
    html += '<div class="alerts">';
    for (const alert of d.alerts) {
      const alertClass = getAlertClass(alert.severity);
      html += `<div class="alert ${alertClass}">${alert.message}</div>`;
    }
    html += '</div>';
  }

  // Main recommendation card
  html += '<div class="recommendation-card">';
  html += '<h3>Monthly Recommendation</h3>';

  // SIPP draw
  html += '<div class="draw-row primary">';
  html += `<span class="label">SIPP Withdrawal</span>`;
  html += `<span class="value">${formatCurrency(d.sippDraw)}</span>`;
  html += '</div>';

  // ISA top-up (if applicable)
  if (d.isaDraw > 0) {
    html += '<div class="draw-row">';
    html += `<span class="label">ISA Top-up</span>`;
    html += `<span class="value">${formatCurrency(d.isaDraw)}</span>`;
    html += '</div>';
  }

  // Other income
  if (d.other > 0) {
    html += '<div class="draw-row muted">';
    html += `<span class="label">Other Pension</span>`;
    html += `<span class="value">${formatCurrency(d.other)}</span>`;
    html += '</div>';
  }

  // State pension
  if (d.statePension > 0) {
    html += '<div class="draw-row muted">';
    html += `<span class="label">State Pension</span>`;
    html += `<span class="value">${formatCurrency(d.statePension)}</span>`;
    html += '</div>';
  }

  // Divider
  html += '<div class="divider"></div>';

  // Total
  const totalMonthly = d.sippDraw + d.isaDraw + d.other + d.statePension;
  html += '<div class="draw-row total">';
  html += `<span class="label">Total Monthly Income</span>`;
  html += `<span class="value">${formatCurrency(totalMonthly)}</span>`;
  html += '</div>';

  // Tax boost indicator
  if (d.boostAmount > 0) {
    html += '<div class="boost-indicator">';
    html += `<span class="boost-label">Includes Tax Boost:</span>`;
    html += `<span class="boost-value">+${formatCurrency(d.boostAmount)}</span>`;
    html += '</div>';
  }

  html += '</div>'; // End recommendation-card

  // Withdrawal source
  html += '<div class="source-card">';
  html += '<h4>Withdraw From</h4>';
  html += `<div class="source-label ${d.source.toLowerCase()}">${d.source}</div>`;

  if (d.source === 'Growth' && (d.drawFromEquity > 0 || d.drawFromBond > 0)) {
    html += '<div class="source-breakdown">';
    if (d.drawFromEquity > 0) {
      html += `<div class="source-item">Equity: ${formatCurrency(d.drawFromEquity)}</div>`;
    }
    if (d.drawFromBond > 0) {
      html += `<div class="source-item">Bond: ${formatCurrency(d.drawFromBond)}</div>`;
    }
    html += '</div>';
  }

  html += '</div>'; // End source-card

  // Fund status summary
  html += '<div class="fund-status">';
  html += '<h4>Fund Status</h4>';

  const totalFunds = d.equity + d.bond + d.cash;
  const totalMins = d.adjEquityMin + d.adjBondMin + d.adjCashTarget;
  const surplus = totalFunds - totalMins;
  const surplusPercent = totalMins > 0 ? (surplus / totalMins) * 100 : 0;

  html += '<div class="fund-grid">';

  // Equity
  const eqSurplus = d.equity - d.adjEquityMin;
  html += buildFundCell('Equity', d.equity, d.adjEquityMin, eqSurplus);

  // Bond
  const bdSurplus = d.bond - d.adjBondMin;
  html += buildFundCell('Bond', d.bond, d.adjBondMin, bdSurplus);

  // Cash
  const csSurplus = d.cash - d.adjCashTarget;
  html += buildFundCell('Cash', d.cash, d.adjCashTarget, csSurplus);

  html += '</div>'; // End fund-grid

  // Overall status
  const statusClass = surplus >= 0 ? 'healthy' : 'warning';
  html += `<div class="overall-status ${statusClass}">`;
  html += `<span>Total Surplus: ${formatCurrency(surplus)}</span>`;
  html += `<span>(${surplusPercent.toFixed(1)}% above target)</span>`;
  html += '</div>';

  html += '</div>'; // End fund-status

  // Tax information
  html += '<div class="tax-info">';
  html += '<h4>Tax Summary</h4>';
  html += '<div class="tax-grid">';
  html += `<div class="tax-item"><span>Personal Allowance:</span><span>${formatCurrency(d.pa)}</span></div>`;
  html += `<div class="tax-item"><span>Basic Rate Limit:</span><span>${formatCurrency(d.brl)}</span></div>`;

  if (details.taxInfo) {
    html += `<div class="tax-item"><span>Projected Annual Taxable:</span><span>${formatCurrency(details.taxInfo.annualTaxable)}</span></div>`;
    html += `<div class="tax-item"><span>Headroom to BRL:</span><span>${formatCurrency(details.taxInfo.headroomToBRL)}</span></div>`;
    html += `<div class="tax-item"><span>Estimated Annual Tax:</span><span>${formatCurrency(details.taxInfo.annualTax)}</span></div>`;
  }
  html += '</div>';
  html += '</div>'; // End tax-info

  // Rebalancing recommendations
  if (d.rebalanceNeeded && d.rebalanceActions.length > 0) {
    html += '<div class="rebalance-card">';
    html += '<h4>Rebalancing Suggestions</h4>';
    html += '<ul>';
    for (const action of d.rebalanceActions) {
      html += `<li>${action}</li>`;
    }
    html += '</ul>';
    html += '</div>';
  }

  // Mode explanation
  html += '<div class="mode-explanation">';
  html += '<h4>Why This Recommendation?</h4>';
  html += `<p>${details.reason || 'Standard calculation based on your settings.'}</p>`;

  if (!details.hasSufficientIsa && details.isaNeededMonthly > 0) {
    html += `<p class="isa-warning">To enable tax-efficient mode, you need ${formatCurrency(details.totalIsaNeeded)} in your ISA (${d.remainingMonths} months remaining in tax year).</p>`;
  }
  html += '</div>';

  // Debug toggle (collapsed by default)
  html += '<details class="debug-section">';
  html += '<summary>Calculation Details</summary>';
  html += '<pre>' + JSON.stringify(details, null, 2) + '</pre>';
  html += '</details>';

  return html;
}

/**
 * Builds HTML for a fund status cell
 */
function buildFundCell(name, current, minimum, surplus) {
  const statusClass = surplus >= 0 ? 'healthy' : 'deficit';

  return `<div class="fund-cell ${statusClass}">
    <div class="fund-name">${name}</div>
    <div class="fund-current">${formatCurrency(current)}</div>
    <div class="fund-min">Min: ${formatCurrency(minimum)}</div>
    <div class="fund-surplus">${surplus >= 0 ? '+' : ''}${formatCurrency(surplus)}</div>
  </div>`;
}

/**
 * Gets CSS class for alert severity
 */
function getAlertClass(severity) {
  switch (severity) {
    case AlertSeverity.DANGER: return 'alert-danger';
    case AlertSeverity.WARNING: return 'alert-warning';
    case AlertSeverity.SUCCESS: return 'alert-success';
    case AlertSeverity.INFO:
    default: return 'alert-info';
  }
}

/**
 * Gets CSS styles for the decision panel
 * @returns {string} CSS styles
 */
export function getDecisionPanelStyles() {
  return `
    .decision-mode {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px 20px;
      border-radius: 8px;
      margin-bottom: 20px;
      font-weight: 600;
    }

    .decision-mode.success {
      background: rgba(46, 160, 67, 0.15);
      border: 1px solid rgba(46, 160, 67, 0.3);
      color: #2ea043;
    }

    .decision-mode.warning {
      background: rgba(240, 198, 116, 0.15);
      border: 1px solid rgba(240, 198, 116, 0.3);
      color: #f0c674;
    }

    .mode-icon {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: currentColor;
      color: #1a1a2e;
      font-size: 14px;
    }

    .protection-badge {
      margin-left: auto;
      padding: 4px 10px;
      background: rgba(248, 81, 73, 0.2);
      border: 1px solid rgba(248, 81, 73, 0.4);
      border-radius: 4px;
      color: #f85149;
      font-size: 12px;
      text-transform: uppercase;
    }

    .alerts {
      margin-bottom: 20px;
    }

    .alert {
      padding: 12px 16px;
      border-radius: 6px;
      margin-bottom: 8px;
      font-size: 14px;
    }

    .alert-danger {
      background: rgba(248, 81, 73, 0.15);
      border-left: 4px solid #f85149;
      color: #f85149;
    }

    .alert-warning {
      background: rgba(240, 198, 116, 0.15);
      border-left: 4px solid #f0c674;
      color: #f0c674;
    }

    .alert-success {
      background: rgba(46, 160, 67, 0.15);
      border-left: 4px solid #2ea043;
      color: #2ea043;
    }

    .alert-info {
      background: rgba(126, 184, 218, 0.15);
      border-left: 4px solid #7eb8da;
      color: #7eb8da;
    }

    .recommendation-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 20px;
    }

    .recommendation-card h3 {
      margin: 0 0 20px 0;
      color: var(--primary);
    }

    .draw-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid var(--border);
    }

    .draw-row.primary .label {
      font-weight: 600;
      color: var(--primary);
    }

    .draw-row.primary .value {
      font-size: 24px;
      font-weight: 700;
      color: var(--primary);
    }

    .draw-row.muted {
      color: var(--text-muted);
    }

    .draw-row.total {
      border-bottom: none;
      padding-top: 16px;
    }

    .draw-row.total .label {
      font-weight: 600;
    }

    .draw-row.total .value {
      font-size: 20px;
      font-weight: 700;
      color: var(--success);
    }

    .divider {
      height: 2px;
      background: var(--border);
      margin: 8px 0;
    }

    .boost-indicator {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      margin-top: 12px;
      padding: 8px 12px;
      background: rgba(126, 184, 218, 0.1);
      border-radius: 6px;
      font-size: 14px;
      color: var(--info);
    }

    .source-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
      text-align: center;
    }

    .source-card h4 {
      margin: 0 0 12px 0;
      color: var(--text-muted);
      font-size: 14px;
    }

    .source-label {
      display: inline-block;
      padding: 12px 32px;
      border-radius: 8px;
      font-size: 18px;
      font-weight: 600;
    }

    .source-label.growth {
      background: rgba(46, 160, 67, 0.2);
      color: #2ea043;
    }

    .source-label.cash {
      background: rgba(240, 198, 116, 0.2);
      color: #f0c674;
    }

    .source-label.mixed {
      background: rgba(126, 184, 218, 0.2);
      color: #7eb8da;
    }

    .source-breakdown {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 12px;
      color: var(--text-muted);
      font-size: 14px;
    }

    .fund-status {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
    }

    .fund-status h4 {
      margin: 0 0 16px 0;
    }

    .fund-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }

    .fund-cell {
      padding: 16px;
      border-radius: 8px;
      text-align: center;
    }

    .fund-cell.healthy {
      background: rgba(46, 160, 67, 0.1);
      border: 1px solid rgba(46, 160, 67, 0.2);
    }

    .fund-cell.deficit {
      background: rgba(248, 81, 73, 0.1);
      border: 1px solid rgba(248, 81, 73, 0.2);
    }

    .fund-name {
      font-weight: 600;
      margin-bottom: 8px;
    }

    .fund-current {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 4px;
    }

    .fund-min {
      font-size: 12px;
      color: var(--text-muted);
    }

    .fund-surplus {
      font-size: 14px;
      margin-top: 8px;
    }

    .fund-cell.healthy .fund-surplus {
      color: #2ea043;
    }

    .fund-cell.deficit .fund-surplus {
      color: #f85149;
    }

    .overall-status {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-top: 16px;
      padding: 12px;
      border-radius: 8px;
    }

    .overall-status.healthy {
      background: rgba(46, 160, 67, 0.1);
      color: #2ea043;
    }

    .overall-status.warning {
      background: rgba(248, 81, 73, 0.1);
      color: #f85149;
    }

    .tax-info, .rebalance-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
    }

    .tax-info h4, .rebalance-card h4 {
      margin: 0 0 16px 0;
    }

    .tax-grid {
      display: grid;
      gap: 8px;
    }

    .tax-item {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px solid var(--border);
      font-size: 14px;
    }

    .tax-item:last-child {
      border-bottom: none;
    }

    .rebalance-card ul {
      margin: 0;
      padding-left: 20px;
    }

    .rebalance-card li {
      margin-bottom: 8px;
      color: var(--text-muted);
    }

    .mode-explanation {
      background: var(--card-alt);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
    }

    .mode-explanation h4 {
      margin: 0 0 12px 0;
      color: var(--primary);
    }

    .mode-explanation p {
      margin: 0 0 8px 0;
      color: var(--text-muted);
      line-height: 1.6;
    }

    .isa-warning {
      color: var(--warning) !important;
    }

    .debug-section {
      margin-top: 20px;
      padding: 16px;
      background: var(--card-alt);
      border-radius: 8px;
    }

    .debug-section summary {
      cursor: pointer;
      color: var(--text-muted);
      font-size: 14px;
    }

    .debug-section pre {
      margin-top: 16px;
      padding: 16px;
      background: var(--card);
      border-radius: 6px;
      overflow-x: auto;
      font-size: 12px;
      color: var(--text-muted);
    }
  `;
}
