/**
 * Charts Module
 * Canvas-based visualization for stress testing results
 */

// Chart color palette
const COLORS = {
  primary: '#6366f1',
  success: '#22c55e',
  warning: '#f59e0b',
  danger: '#ef4444',
  muted: '#6b7280',
  grid: '#e5e7eb',
  bg: '#ffffff',
  text: '#1f2937',
  equity: '#6366f1',
  bond: '#22c55e',
  cash: '#f59e0b',
  cone: 'rgba(99, 102, 241, 0.15)',
  coneBorder: 'rgba(99, 102, 241, 0.4)',
  trajectory: 'rgba(99, 102, 241, 0.2)',
  trajectoryFailed: 'rgba(239, 68, 68, 0.3)'
};

/**
 * Draws a cone of uncertainty chart showing percentile bands
 * @param {HTMLCanvasElement} canvas - Target canvas element
 * @param {object[]} results - Simulation results array
 * @param {object} options - Chart options
 */
export function drawCone(canvas, results, options = {}) {
  const ctx = canvas.getContext('2d');
  const { width, height } = canvas;
  const padding = { top: 40, right: 30, bottom: 60, left: 80 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Clear canvas
  ctx.fillStyle = COLORS.bg;
  ctx.fillRect(0, 0, width, height);

  // Extract yearly totals from all results
  const years = options.years || 35;
  const yearlyData = {};

  for (let y = 0; y <= years; y++) {
    yearlyData[y] = [];
  }

  results.forEach(r => {
    r.hist.forEach(h => {
      const yr = Math.floor(h.year);
      if (yearlyData[yr] !== undefined) {
        yearlyData[yr].push(h.total);
      }
    });
  });

  // Calculate percentiles for each year
  const percentiles = [];
  for (let y = 0; y <= years; y++) {
    const values = yearlyData[y].sort((a, b) => a - b);
    if (values.length === 0) continue;

    const p = (pct) => values[Math.floor(values.length * pct)] || 0;
    percentiles.push({
      year: y,
      p5: p(0.05),
      p10: p(0.10),
      p25: p(0.25),
      p50: p(0.50),
      p75: p(0.75),
      p90: p(0.90),
      p95: p(0.95)
    });
  }

  if (percentiles.length === 0) return;

  // Calculate scales
  const maxValue = Math.max(...percentiles.map(p => p.p95)) * 1.1;
  const minValue = 0;

  const xScale = (year) => padding.left + (year / years) * chartWidth;
  const yScale = (value) => padding.top + chartHeight - ((value - minValue) / (maxValue - minValue)) * chartHeight;

  // Draw grid
  drawGrid(ctx, padding, chartWidth, chartHeight, years, maxValue, options.title || 'Fund Value Over Time');

  // Draw cone bands (95th to 5th percentile)
  const bands = [
    { upper: 'p95', lower: 'p5', color: 'rgba(99, 102, 241, 0.08)' },
    { upper: 'p90', lower: 'p10', color: 'rgba(99, 102, 241, 0.12)' },
    { upper: 'p75', lower: 'p25', color: 'rgba(99, 102, 241, 0.18)' }
  ];

  bands.forEach(band => {
    ctx.beginPath();
    ctx.fillStyle = band.color;

    // Upper line (left to right)
    percentiles.forEach((p, i) => {
      const x = xScale(p.year);
      const y = yScale(p[band.upper]);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });

    // Lower line (right to left)
    for (let i = percentiles.length - 1; i >= 0; i--) {
      const p = percentiles[i];
      const x = xScale(p.year);
      const y = yScale(p[band.lower]);
      ctx.lineTo(x, y);
    }

    ctx.closePath();
    ctx.fill();
  });

  // Draw median line
  ctx.beginPath();
  ctx.strokeStyle = COLORS.primary;
  ctx.lineWidth = 3;
  percentiles.forEach((p, i) => {
    const x = xScale(p.year);
    const y = yScale(p.p50);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // Draw legend
  drawConeLegend(ctx, width - padding.right - 150, padding.top + 20);
}

/**
 * Draws sample trajectories chart
 * @param {HTMLCanvasElement} canvas - Target canvas element
 * @param {object[]} results - Simulation results array (limited to ~100)
 * @param {object} options - Chart options
 */
export function drawTrajectories(canvas, results, options = {}) {
  const ctx = canvas.getContext('2d');
  const { width, height } = canvas;
  const padding = { top: 40, right: 30, bottom: 60, left: 80 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Clear canvas
  ctx.fillStyle = COLORS.bg;
  ctx.fillRect(0, 0, width, height);

  const years = options.years || 35;

  // Find max value across all trajectories
  let maxValue = 0;
  results.forEach(r => {
    r.hist.forEach(h => {
      if (h.total > maxValue) maxValue = h.total;
    });
  });
  maxValue *= 1.1;

  const xScale = (year) => padding.left + (year / years) * chartWidth;
  const yScale = (value) => padding.top + chartHeight - (value / maxValue) * chartHeight;

  // Draw grid
  drawGrid(ctx, padding, chartWidth, chartHeight, years, maxValue, options.title || 'Sample Trajectories');

  // Draw each trajectory
  const sampleResults = results.slice(0, 100); // Limit to 100 for performance

  // Draw failed first (underneath)
  sampleResults.filter(r => r.failed).forEach(r => {
    ctx.beginPath();
    ctx.strokeStyle = COLORS.trajectoryFailed;
    ctx.lineWidth = 1;
    r.hist.forEach((h, i) => {
      const x = xScale(h.year);
      const y = yScale(h.total);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  });

  // Draw successful
  sampleResults.filter(r => !r.failed).forEach(r => {
    ctx.beginPath();
    ctx.strokeStyle = COLORS.trajectory;
    ctx.lineWidth = 1;
    r.hist.forEach((h, i) => {
      const x = xScale(h.year);
      const y = yScale(h.total);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  });

  // Draw legend
  ctx.font = '12px system-ui, sans-serif';
  ctx.fillStyle = COLORS.trajectory.replace('0.2', '1');
  ctx.fillRect(width - padding.right - 120, padding.top + 10, 15, 3);
  ctx.fillStyle = COLORS.text;
  ctx.fillText('Successful', width - padding.right - 100, padding.top + 15);

  ctx.fillStyle = COLORS.trajectoryFailed.replace('0.3', '1');
  ctx.fillRect(width - padding.right - 120, padding.top + 30, 15, 3);
  ctx.fillStyle = COLORS.text;
  ctx.fillText('Failed', width - padding.right - 100, padding.top + 35);
}

/**
 * Draws a protection distribution histogram
 * @param {HTMLCanvasElement} canvas - Target canvas element
 * @param {object[]} results - Simulation results array
 * @param {object} options - Chart options
 */
export function drawHistogram(canvas, results, options = {}) {
  const ctx = canvas.getContext('2d');
  const { width, height } = canvas;
  const padding = { top: 40, right: 30, bottom: 60, left: 60 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Clear canvas
  ctx.fillStyle = COLORS.bg;
  ctx.fillRect(0, 0, width, height);

  // Calculate protection month distribution
  const protMonths = results.map(r => r.protMonths);
  const maxProt = Math.max(...protMonths);
  const bucketSize = Math.max(1, Math.ceil(maxProt / 20)); // ~20 buckets
  const buckets = {};

  for (let i = 0; i <= maxProt; i += bucketSize) {
    buckets[i] = 0;
  }

  protMonths.forEach(p => {
    const bucket = Math.floor(p / bucketSize) * bucketSize;
    buckets[bucket] = (buckets[bucket] || 0) + 1;
  });

  const bucketKeys = Object.keys(buckets).map(Number).sort((a, b) => a - b);
  const maxCount = Math.max(...Object.values(buckets));

  // Draw title
  ctx.font = 'bold 14px system-ui, sans-serif';
  ctx.fillStyle = COLORS.text;
  ctx.textAlign = 'center';
  ctx.fillText(options.title || 'Protection Months Distribution', width / 2, padding.top - 15);

  // Draw axes
  ctx.strokeStyle = COLORS.grid;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padding.left, padding.top);
  ctx.lineTo(padding.left, padding.top + chartHeight);
  ctx.lineTo(padding.left + chartWidth, padding.top + chartHeight);
  ctx.stroke();

  // Draw bars
  const barWidth = (chartWidth / bucketKeys.length) * 0.8;
  const barGap = (chartWidth / bucketKeys.length) * 0.2;

  bucketKeys.forEach((bucket, i) => {
    const count = buckets[bucket];
    const barHeight = (count / maxCount) * chartHeight;
    const x = padding.left + i * (barWidth + barGap) + barGap / 2;
    const y = padding.top + chartHeight - barHeight;

    // Color based on protection level
    const intensity = bucket / maxProt;
    if (bucket === 0) {
      ctx.fillStyle = COLORS.success;
    } else if (intensity < 0.3) {
      ctx.fillStyle = COLORS.warning;
    } else {
      ctx.fillStyle = COLORS.danger;
    }

    ctx.fillRect(x, y, barWidth, barHeight);

    // X-axis label
    if (i % 3 === 0 || i === bucketKeys.length - 1) {
      ctx.font = '10px system-ui, sans-serif';
      ctx.fillStyle = COLORS.muted;
      ctx.textAlign = 'center';
      ctx.fillText(bucket.toString(), x + barWidth / 2, padding.top + chartHeight + 15);
    }
  });

  // Y-axis labels
  ctx.textAlign = 'right';
  ctx.fillStyle = COLORS.muted;
  for (let i = 0; i <= 4; i++) {
    const value = Math.round((maxCount * i) / 4);
    const y = padding.top + chartHeight - (chartHeight * i / 4);
    ctx.fillText(value.toString(), padding.left - 10, y + 4);
  }

  // Axis labels
  ctx.font = '12px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Protection Months', width / 2, height - 10);
  ctx.save();
  ctx.translate(15, height / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText('Number of Runs', 0, 0);
  ctx.restore();
}

/**
 * Draws scenario comparison chart
 * @param {HTMLCanvasElement} canvas - Target canvas element
 * @param {object} scenarios - Scenario results keyed by name
 * @param {object} options - Chart options
 */
export function drawScenarioComparison(canvas, scenarios, options = {}) {
  const ctx = canvas.getContext('2d');
  const { width, height } = canvas;
  const padding = { top: 40, right: 150, bottom: 60, left: 80 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Clear canvas
  ctx.fillStyle = COLORS.bg;
  ctx.fillRect(0, 0, width, height);

  const scenarioNames = Object.keys(scenarios);
  const years = options.years || 35;

  // Find max value
  let maxValue = 0;
  scenarioNames.forEach(name => {
    const result = scenarios[name].result;
    if (result && result.hist) {
      result.hist.forEach(h => {
        if (h.total > maxValue) maxValue = h.total;
      });
    }
  });
  maxValue *= 1.1;

  const xScale = (year) => padding.left + (year / years) * chartWidth;
  const yScale = (value) => padding.top + chartHeight - (value / maxValue) * chartHeight;

  // Draw grid
  drawGrid(ctx, padding, chartWidth, chartHeight, years, maxValue, options.title || 'Scenario Comparison');

  // Colors for each scenario
  const scenarioColors = [
    '#6366f1', '#22c55e', '#f59e0b', '#ef4444',
    '#8b5cf6', '#06b6d4', '#ec4899', '#84cc16'
  ];

  // Draw each scenario
  scenarioNames.forEach((name, idx) => {
    const result = scenarios[name].result;
    if (!result || !result.hist) return;

    ctx.beginPath();
    ctx.strokeStyle = scenarioColors[idx % scenarioColors.length];
    ctx.lineWidth = 2;

    result.hist.forEach((h, i) => {
      const x = xScale(h.year);
      const y = yScale(h.total);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Add to legend
    const legendY = padding.top + 20 + idx * 22;
    ctx.fillStyle = scenarioColors[idx % scenarioColors.length];
    ctx.fillRect(width - padding.right + 20, legendY, 20, 3);
    ctx.font = '11px system-ui, sans-serif';
    ctx.fillStyle = COLORS.text;
    ctx.textAlign = 'left';
    ctx.fillText(scenarios[name].name || name, width - padding.right + 45, legendY + 4);

    // Show final value
    const finalVal = result.final / 1000;
    ctx.fillStyle = COLORS.muted;
    ctx.fillText(`£${finalVal.toFixed(0)}k`, width - padding.right + 45, legendY + 16);
  });
}

/**
 * Helper: Draw grid and axes
 */
function drawGrid(ctx, padding, chartWidth, chartHeight, years, maxValue, title) {
  // Title
  ctx.font = 'bold 14px system-ui, sans-serif';
  ctx.fillStyle = COLORS.text;
  ctx.textAlign = 'center';
  ctx.fillText(title, padding.left + chartWidth / 2, padding.top - 15);

  // Grid lines
  ctx.strokeStyle = COLORS.grid;
  ctx.lineWidth = 1;

  // Horizontal grid lines
  for (let i = 0; i <= 5; i++) {
    const y = padding.top + (chartHeight * i / 5);
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(padding.left + chartWidth, y);
    ctx.stroke();

    // Y-axis labels
    const value = maxValue * (5 - i) / 5;
    ctx.font = '11px system-ui, sans-serif';
    ctx.fillStyle = COLORS.muted;
    ctx.textAlign = 'right';
    ctx.fillText(formatValue(value), padding.left - 10, y + 4);
  }

  // Vertical grid lines (every 5 years)
  for (let y = 0; y <= years; y += 5) {
    const x = padding.left + (y / years) * chartWidth;
    ctx.beginPath();
    ctx.moveTo(x, padding.top);
    ctx.lineTo(x, padding.top + chartHeight);
    ctx.stroke();

    // X-axis labels
    ctx.textAlign = 'center';
    ctx.fillText(`Y${y}`, x, padding.top + chartHeight + 20);
  }

  // Axis labels
  ctx.font = '12px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Years', padding.left + chartWidth / 2, padding.top + chartHeight + 45);

  ctx.save();
  ctx.translate(20, padding.top + chartHeight / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText('Fund Value', 0, 0);
  ctx.restore();
}

/**
 * Helper: Draw cone legend
 */
function drawConeLegend(ctx, x, y) {
  const items = [
    { label: 'Median (50th)', color: COLORS.primary, type: 'line' },
    { label: '25th-75th %ile', color: 'rgba(99, 102, 241, 0.18)', type: 'band' },
    { label: '10th-90th %ile', color: 'rgba(99, 102, 241, 0.12)', type: 'band' },
    { label: '5th-95th %ile', color: 'rgba(99, 102, 241, 0.08)', type: 'band' }
  ];

  ctx.font = '11px system-ui, sans-serif';

  items.forEach((item, i) => {
    const itemY = y + i * 18;

    if (item.type === 'line') {
      ctx.strokeStyle = item.color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x, itemY);
      ctx.lineTo(x + 20, itemY);
      ctx.stroke();
    } else {
      ctx.fillStyle = item.color;
      ctx.fillRect(x, itemY - 6, 20, 12);
    }

    ctx.fillStyle = COLORS.text;
    ctx.textAlign = 'left';
    ctx.fillText(item.label, x + 25, itemY + 4);
  });
}

/**
 * Helper: Format large values
 */
function formatValue(value) {
  if (value >= 1000000) {
    return `£${(value / 1000000).toFixed(1)}M`;
  } else if (value >= 1000) {
    return `£${(value / 1000).toFixed(0)}k`;
  }
  return `£${value.toFixed(0)}`;
}

/**
 * Get chart container styles
 */
export function getChartStyles() {
  return `
    .chart-container {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 20px;
    }

    .chart-container canvas {
      display: block;
      width: 100%;
      height: auto;
      max-height: 400px;
    }

    .chart-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 20px;
      margin-bottom: 20px;
    }

    @media (max-width: 768px) {
      .chart-row {
        grid-template-columns: 1fr;
      }
    }
  `;
}
