/**
 * Charts Module
 * Canvas-based visualization for stress testing results
 * Supports dark mode and interactive hover tooltips
 */

// Get colors from CSS variables (dark mode aware)
function getColors() {
  const style = getComputedStyle(document.documentElement);
  const isDark = style.getPropertyValue('--bg').trim() === '#0d1117' ||
                 document.documentElement.classList.contains('dark') ||
                 window.matchMedia('(prefers-color-scheme: dark)').matches;

  return {
    primary: '#6366f1',
    success: '#22c55e',
    warning: '#f59e0b',
    danger: '#ef4444',
    muted: isDark ? '#8b949e' : '#6b7280',
    grid: isDark ? '#30363d' : '#e5e7eb',
    bg: isDark ? '#161b22' : '#ffffff',
    text: isDark ? '#c9d1d9' : '#1f2937',
    cardBg: isDark ? '#21262d' : '#ffffff',
    cone: isDark ? 'rgba(99, 102, 241, 0.25)' : 'rgba(99, 102, 241, 0.15)',
    coneBorder: 'rgba(99, 102, 241, 0.4)',
    trajectory: isDark ? 'rgba(99, 102, 241, 0.4)' : 'rgba(99, 102, 241, 0.3)',
    trajectoryFailed: isDark ? 'rgba(239, 68, 68, 0.5)' : 'rgba(239, 68, 68, 0.4)',
    trajectoryHover: '#6366f1',
    trajectoryFailedHover: '#ef4444'
  };
}

// Store chart data for hover interactions
const chartDataStore = new Map();

/**
 * Draws a cone of uncertainty chart showing percentile bands
 */
export function drawCone(canvas, results, options = {}) {
  const COLORS = getColors();
  const ctx = canvas.getContext('2d');
  const { width, height } = canvas;
  const padding = { top: 50, right: 30, bottom: 60, left: 80 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Clear canvas
  ctx.fillStyle = COLORS.bg;
  ctx.fillRect(0, 0, width, height);

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

  const maxValue = Math.max(...percentiles.map(p => p.p95)) * 1.1;
  const xScale = (year) => padding.left + (year / years) * chartWidth;
  const yScale = (value) => padding.top + chartHeight - (value / maxValue) * chartHeight;

  // Draw grid
  drawGrid(ctx, padding, chartWidth, chartHeight, years, maxValue, options.title || 'Cone of Uncertainty', COLORS);

  // Draw cone bands
  const bands = [
    { upper: 'p95', lower: 'p5', color: COLORS.cone },
    { upper: 'p90', lower: 'p10', color: COLORS.cone.replace('0.25', '0.35').replace('0.15', '0.25') },
    { upper: 'p75', lower: 'p25', color: COLORS.cone.replace('0.25', '0.45').replace('0.15', '0.35') }
  ];

  bands.forEach(band => {
    ctx.beginPath();
    ctx.fillStyle = band.color;

    percentiles.forEach((p, i) => {
      const x = xScale(p.year);
      const y = yScale(p[band.upper]);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });

    for (let i = percentiles.length - 1; i >= 0; i--) {
      const p = percentiles[i];
      ctx.lineTo(xScale(p.year), yScale(p[band.lower]));
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
  drawConeLegend(ctx, width - padding.right - 160, padding.top + 10, COLORS);

  // Store data for hover
  chartDataStore.set(canvas.id, { percentiles, xScale, yScale, padding, chartWidth, chartHeight, years, maxValue, type: 'cone' });

  // Add hover listener
  setupConeHover(canvas, COLORS);
}

/**
 * Draws sample trajectories chart with interactive hover
 */
export function drawTrajectories(canvas, results, options = {}) {
  const COLORS = getColors();
  const ctx = canvas.getContext('2d');
  const { width, height } = canvas;
  const padding = { top: 50, right: 30, bottom: 60, left: 80 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  ctx.fillStyle = COLORS.bg;
  ctx.fillRect(0, 0, width, height);

  const years = options.years || 35;

  let maxValue = 0;
  results.forEach(r => {
    r.hist.forEach(h => {
      if (h.total > maxValue) maxValue = h.total;
    });
  });
  maxValue *= 1.1;

  const xScale = (year) => padding.left + (year / years) * chartWidth;
  const yScale = (value) => padding.top + chartHeight - (value / maxValue) * chartHeight;

  drawGrid(ctx, padding, chartWidth, chartHeight, years, maxValue, options.title || 'Sample Trajectories', COLORS);

  const sampleResults = results.slice(0, 100);

  // Draw failed trajectories
  sampleResults.filter(r => r.failed).forEach(r => {
    ctx.beginPath();
    ctx.strokeStyle = COLORS.trajectoryFailed;
    ctx.lineWidth = 1.5;
    r.hist.forEach((h, i) => {
      const x = xScale(h.year);
      const y = yScale(h.total);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  });

  // Draw successful trajectories
  sampleResults.filter(r => !r.failed).forEach(r => {
    ctx.beginPath();
    ctx.strokeStyle = COLORS.trajectory;
    ctx.lineWidth = 1.5;
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
  ctx.fillStyle = COLORS.trajectory.replace('0.4', '1').replace('0.3', '1');
  ctx.fillRect(width - padding.right - 130, padding.top + 10, 20, 4);
  ctx.fillStyle = COLORS.text;
  ctx.textAlign = 'left';
  ctx.fillText('Successful', width - padding.right - 105, padding.top + 16);

  ctx.fillStyle = COLORS.trajectoryFailed.replace('0.5', '1').replace('0.4', '1');
  ctx.fillRect(width - padding.right - 130, padding.top + 30, 20, 4);
  ctx.fillStyle = COLORS.text;
  ctx.fillText('Failed', width - padding.right - 105, padding.top + 36);

  // Store data for hover
  chartDataStore.set(canvas.id, {
    results: sampleResults,
    xScale,
    yScale,
    padding,
    chartWidth,
    chartHeight,
    years,
    maxValue,
    type: 'trajectory'
  });

  // Add hover listener
  setupTrajectoryHover(canvas, COLORS);
}

/**
 * Draws protection distribution histogram
 */
export function drawHistogram(canvas, results, options = {}) {
  const COLORS = getColors();
  const ctx = canvas.getContext('2d');
  const { width, height } = canvas;
  const padding = { top: 50, right: 30, bottom: 60, left: 60 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  ctx.fillStyle = COLORS.bg;
  ctx.fillRect(0, 0, width, height);

  const protMonths = results.map(r => r.protMonths);
  const maxProt = Math.max(...protMonths);
  const bucketSize = Math.max(1, Math.ceil(maxProt / 20));
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

  // Title
  ctx.font = 'bold 14px system-ui, sans-serif';
  ctx.fillStyle = COLORS.text;
  ctx.textAlign = 'center';
  ctx.fillText(options.title || 'Protection Months Distribution', width / 2, padding.top - 20);

  // Axes
  ctx.strokeStyle = COLORS.grid;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padding.left, padding.top);
  ctx.lineTo(padding.left, padding.top + chartHeight);
  ctx.lineTo(padding.left + chartWidth, padding.top + chartHeight);
  ctx.stroke();

  // Bars
  const barWidth = (chartWidth / bucketKeys.length) * 0.8;
  const barGap = (chartWidth / bucketKeys.length) * 0.2;

  bucketKeys.forEach((bucket, i) => {
    const count = buckets[bucket];
    const barHeight = (count / maxCount) * chartHeight;
    const x = padding.left + i * (barWidth + barGap) + barGap / 2;
    const y = padding.top + chartHeight - barHeight;

    const intensity = bucket / maxProt;
    if (bucket === 0) {
      ctx.fillStyle = COLORS.success;
    } else if (intensity < 0.3) {
      ctx.fillStyle = COLORS.warning;
    } else {
      ctx.fillStyle = COLORS.danger;
    }

    ctx.fillRect(x, y, barWidth, barHeight);

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
 */
export function drawScenarioComparison(canvas, scenarios, options = {}) {
  const COLORS = getColors();
  const ctx = canvas.getContext('2d');
  const { width, height } = canvas;
  const padding = { top: 50, right: 180, bottom: 60, left: 80 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  ctx.fillStyle = COLORS.bg;
  ctx.fillRect(0, 0, width, height);

  const scenarioNames = Object.keys(scenarios);
  const years = options.years || 35;

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

  drawGrid(ctx, padding, chartWidth, chartHeight, years, maxValue, options.title || 'Scenario Comparison', COLORS);

  const scenarioColors = [
    '#6366f1', '#22c55e', '#f59e0b', '#ef4444',
    '#8b5cf6', '#06b6d4', '#ec4899', '#84cc16'
  ];

  scenarioNames.forEach((name, idx) => {
    const result = scenarios[name].result;
    if (!result || !result.hist) return;

    ctx.beginPath();
    ctx.strokeStyle = scenarioColors[idx % scenarioColors.length];
    ctx.lineWidth = 2.5;

    result.hist.forEach((h, i) => {
      const x = xScale(h.year);
      const y = yScale(h.total);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Legend
    const legendY = padding.top + 15 + idx * 24;
    ctx.fillStyle = scenarioColors[idx % scenarioColors.length];
    ctx.fillRect(width - padding.right + 15, legendY, 20, 4);
    ctx.font = '11px system-ui, sans-serif';
    ctx.fillStyle = COLORS.text;
    ctx.textAlign = 'left';
    ctx.fillText(scenarios[name].name || name, width - padding.right + 40, legendY + 5);

    const finalVal = result.final / 1000;
    ctx.fillStyle = COLORS.muted;
    ctx.fillText(`£${finalVal.toFixed(0)}k`, width - padding.right + 40, legendY + 18);
  });
}

/**
 * Draw grid helper
 */
function drawGrid(ctx, padding, chartWidth, chartHeight, years, maxValue, title, COLORS) {
  ctx.font = 'bold 14px system-ui, sans-serif';
  ctx.fillStyle = COLORS.text;
  ctx.textAlign = 'center';
  ctx.fillText(title, padding.left + chartWidth / 2, padding.top - 20);

  ctx.strokeStyle = COLORS.grid;
  ctx.lineWidth = 1;

  for (let i = 0; i <= 5; i++) {
    const y = padding.top + (chartHeight * i / 5);
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(padding.left + chartWidth, y);
    ctx.stroke();

    const value = maxValue * (5 - i) / 5;
    ctx.font = '11px system-ui, sans-serif';
    ctx.fillStyle = COLORS.muted;
    ctx.textAlign = 'right';
    ctx.fillText(formatValue(value), padding.left - 10, y + 4);
  }

  for (let y = 0; y <= years; y += 5) {
    const x = padding.left + (y / years) * chartWidth;
    ctx.beginPath();
    ctx.moveTo(x, padding.top);
    ctx.lineTo(x, padding.top + chartHeight);
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.fillText(`Y${y}`, x, padding.top + chartHeight + 20);
  }

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
 * Cone legend helper
 */
function drawConeLegend(ctx, x, y, COLORS) {
  const items = [
    { label: 'Median (50th)', color: COLORS.primary, type: 'line' },
    { label: '25th-75th %ile', color: COLORS.cone.replace('0.25', '0.45').replace('0.15', '0.35'), type: 'band' },
    { label: '10th-90th %ile', color: COLORS.cone.replace('0.25', '0.35').replace('0.15', '0.25'), type: 'band' },
    { label: '5th-95th %ile', color: COLORS.cone, type: 'band' }
  ];

  ctx.font = '11px system-ui, sans-serif';

  items.forEach((item, i) => {
    const itemY = y + i * 20;

    if (item.type === 'line') {
      ctx.strokeStyle = item.color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x, itemY);
      ctx.lineTo(x + 25, itemY);
      ctx.stroke();
    } else {
      ctx.fillStyle = item.color;
      ctx.fillRect(x, itemY - 7, 25, 14);
    }

    ctx.fillStyle = COLORS.text;
    ctx.textAlign = 'left';
    ctx.fillText(item.label, x + 30, itemY + 4);
  });
}

/**
 * Format large values
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
 * Setup cone chart hover
 */
function setupConeHover(canvas, COLORS) {
  const existingListener = canvas._coneHoverListener;
  if (existingListener) {
    canvas.removeEventListener('mousemove', existingListener);
  }

  const listener = (e) => {
    const data = chartDataStore.get(canvas.id);
    if (!data || data.type !== 'cone') return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleX;

    const { percentiles, xScale, yScale, padding, chartWidth, years } = data;

    // Find nearest year
    const yearFloat = ((mouseX - padding.left) / chartWidth) * years;
    const nearestYear = Math.round(yearFloat);

    if (nearestYear < 0 || nearestYear > years) {
      hideTooltip();
      return;
    }

    const pData = percentiles.find(p => p.year === nearestYear);
    if (!pData) {
      hideTooltip();
      return;
    }

    showTooltip(e.clientX, e.clientY, `
      <strong>Year ${nearestYear}</strong><br>
      95th: ${formatValue(pData.p95)}<br>
      75th: ${formatValue(pData.p75)}<br>
      50th: ${formatValue(pData.p50)}<br>
      25th: ${formatValue(pData.p25)}<br>
      5th: ${formatValue(pData.p5)}
    `);
  };

  canvas._coneHoverListener = listener;
  canvas.addEventListener('mousemove', listener);
  canvas.addEventListener('mouseleave', hideTooltip);
}

/**
 * Setup trajectory chart hover with detailed stats
 */
function setupTrajectoryHover(canvas, COLORS) {
  const existingListener = canvas._trajHoverListener;
  if (existingListener) {
    canvas.removeEventListener('mousemove', existingListener);
  }

  const listener = (e) => {
    const data = chartDataStore.get(canvas.id);
    if (!data || data.type !== 'trajectory') return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;

    const { results, xScale, yScale, padding, chartWidth, chartHeight } = data;

    // Check if mouse is in chart area
    if (mouseX < padding.left || mouseX > padding.left + chartWidth ||
        mouseY < padding.top || mouseY > padding.top + chartHeight) {
      hideTooltip();
      redrawTrajectories(canvas, data, COLORS, null);
      return;
    }

    // Find closest trajectory
    let closestResult = null;
    let minDist = Infinity;

    results.forEach(r => {
      r.hist.forEach(h => {
        const px = xScale(h.year);
        const py = yScale(h.total);
        const dist = Math.sqrt(Math.pow(mouseX - px, 2) + Math.pow(mouseY - py, 2));
        if (dist < minDist && dist < 30) {
          minDist = dist;
          closestResult = r;
        }
      });
    });

    if (closestResult) {
      const statusText = closestResult.failed ? 'FAILED' : 'Survived';
      const statusColor = closestResult.failed ? '#ef4444' : '#22c55e';

      showTooltip(e.clientX, e.clientY, `
        <strong style="color: ${statusColor}">${statusText}</strong><br>
        Years: ${closestResult.years.toFixed(1)}<br>
        Final Value: ${formatValue(closestResult.final)}<br>
        Protection Months: ${closestResult.protMonths}<br>
        Max Consecutive: ${closestResult.maxConsec}<br>
        ${closestResult.hodlUsed > 0 ? `HODL Used: ${formatValue(closestResult.hodlUsed)}` : ''}
        ${closestResult.startYear ? `<br>Start Year: ${closestResult.startYear}` : ''}
      `);

      redrawTrajectories(canvas, data, COLORS, closestResult);
    } else {
      hideTooltip();
      redrawTrajectories(canvas, data, COLORS, null);
    }
  };

  canvas._trajHoverListener = listener;
  canvas.addEventListener('mousemove', listener);
  canvas.addEventListener('mouseleave', () => {
    hideTooltip();
    const data = chartDataStore.get(canvas.id);
    if (data) redrawTrajectories(canvas, data, COLORS, null);
  });
}

/**
 * Redraw trajectories with highlight
 */
function redrawTrajectories(canvas, data, COLORS, highlight) {
  const ctx = canvas.getContext('2d');
  const { width, height } = canvas;
  const padding = { top: 50, right: 30, bottom: 60, left: 80 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  ctx.fillStyle = COLORS.bg;
  ctx.fillRect(0, 0, width, height);

  drawGrid(ctx, padding, chartWidth, chartHeight, data.years, data.maxValue, 'Sample Trajectories', COLORS);

  const { results, xScale, yScale } = data;

  // Draw non-highlighted trajectories
  results.forEach(r => {
    if (r === highlight) return;

    ctx.beginPath();
    ctx.strokeStyle = r.failed ? COLORS.trajectoryFailed : COLORS.trajectory;
    ctx.lineWidth = 1.5;
    r.hist.forEach((h, i) => {
      const x = xScale(h.year);
      const y = yScale(h.total);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  });

  // Draw highlighted trajectory on top
  if (highlight) {
    ctx.beginPath();
    ctx.strokeStyle = highlight.failed ? COLORS.trajectoryFailedHover : COLORS.trajectoryHover;
    ctx.lineWidth = 4;
    highlight.hist.forEach((h, i) => {
      const x = xScale(h.year);
      const y = yScale(h.total);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Draw points on highlighted trajectory
    ctx.fillStyle = highlight.failed ? COLORS.trajectoryFailedHover : COLORS.trajectoryHover;
    highlight.hist.forEach(h => {
      const x = xScale(h.year);
      const y = yScale(h.total);
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  // Redraw legend
  ctx.font = '12px system-ui, sans-serif';
  ctx.fillStyle = COLORS.trajectory.replace('0.4', '1').replace('0.3', '1');
  ctx.fillRect(width - padding.right - 130, padding.top + 10, 20, 4);
  ctx.fillStyle = COLORS.text;
  ctx.textAlign = 'left';
  ctx.fillText('Successful', width - padding.right - 105, padding.top + 16);

  ctx.fillStyle = COLORS.trajectoryFailed.replace('0.5', '1').replace('0.4', '1');
  ctx.fillRect(width - padding.right - 130, padding.top + 30, 20, 4);
  ctx.fillStyle = COLORS.text;
  ctx.fillText('Failed', width - padding.right - 105, padding.top + 36);
}

/**
 * Show tooltip
 */
function showTooltip(x, y, html) {
  let tooltip = document.getElementById('chartTooltip');
  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.id = 'chartTooltip';
    document.body.appendChild(tooltip);
  }

  tooltip.innerHTML = html;
  tooltip.style.display = 'block';
  tooltip.style.left = (x + 15) + 'px';
  tooltip.style.top = (y + 15) + 'px';
}

/**
 * Hide tooltip
 */
function hideTooltip() {
  const tooltip = document.getElementById('chartTooltip');
  if (tooltip) {
    tooltip.style.display = 'none';
  }
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
    }

    #chartTooltip {
      position: fixed;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 12px 16px;
      font-size: 13px;
      line-height: 1.5;
      color: var(--text);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      pointer-events: none;
      z-index: 10000;
      display: none;
      max-width: 250px;
    }

    #chartTooltip strong {
      display: block;
      margin-bottom: 6px;
      font-size: 14px;
    }
  `;
}
