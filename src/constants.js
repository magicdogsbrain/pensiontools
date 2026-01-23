/**
 * Pension Tools - Constants Module
 * Centralized configuration and magic numbers
 */

// ============================================================================
// VERSION
// ============================================================================
export const VERSION = '6.0.0';

// ============================================================================
// TAX DEFAULTS (UK 2024/25)
// ============================================================================
export const TAX_DEFAULTS = {
  PERSONAL_ALLOWANCE: 12570,
  BASIC_RATE_LIMIT: 50270,
  HIGHER_RATE_LIMIT: 125140,
  BASIC_RATE: 0.20,
  HIGHER_RATE: 0.40,
  ADDITIONAL_RATE: 0.45,
  PA_TAPER_THRESHOLD: 100000,
  PA_TAPER_RATE: 0.5  // Lose £1 of PA for every £2 over threshold
};

// ============================================================================
// INFLATION DEFAULTS
// ============================================================================
export const INFLATION_DEFAULTS = {
  ASSUMED_CPI: 0.025,           // 2.5% default
  OTHER_INCOME_CAP: 0.04,       // 4% cap on other pension CPI
  STATE_PENSION_FLOOR: 0.025    // Minimum state pension increase
};

// ============================================================================
// DRAWDOWN DEFAULTS
// ============================================================================
export const DRAWDOWN_DEFAULTS = {
  BASE_SALARY: 30000,
  EQUITY_MIN: 250000,
  BOND_MIN: 200000,
  CASH_TARGET: 50000,
  DURATION_YEARS: 35,
  PROTECTION_FACTOR: 20,        // % reduction in protection mode
  RECOVERY_BUFFER: 15000,       // Buffer before exiting protection
  CONSECUTIVE_LIMIT: 3          // Cash draws before protection triggers
};

// ============================================================================
// SIMULATION DEFAULTS
// ============================================================================
export const SIMULATION_DEFAULTS = {
  MONTE_CARLO_RUNS: 1000,
  SAMPLE_TRAJECTORIES: 100,
  YEARS: 35,
  PROTECTION_MULTIPLIER: 0.8,   // Draw multiplier in protection mode
  HODL_ENABLED: false,
  HODL_VALUE: 25000
};

// ============================================================================
// BOND MODEL ALLOCATIONS
// ============================================================================
export const BOND_MODEL = {
  // Normal regime allocation
  NORMAL: {
    LINKER: 0.15,     // Index-linked gilts
    NOMINAL: 0.30,    // Nominal bonds
    PROPERTY: 0.20,   // Property
    COMMODITY: 0.10,  // Commodities
    CASH: 0.10,       // Cash
    EQUITY: 0.15      // Partial equity exposure
  },
  // High inflation regime (>4.5%)
  HIGH_INFLATION: {
    LINKER: 0.50,
    NOMINAL: 0.10,
    PROPERTY: 0.15,
    COMMODITY: 0.15,
    CASH: 0.05,
    EQUITY: 0.05
  },
  // Deflation regime (<0%)
  DEFLATION: {
    LINKER: 0.05,
    NOMINAL: 0.50,
    PROPERTY: 0.10,
    COMMODITY: 0.05,
    CASH: 0.20,
    EQUITY: 0.10
  },
  // Volatility parameters
  VOLATILITY: {
    LINKER: 0.03,
    NOMINAL: 0.05,
    PROPERTY: 0.08,
    COMMODITY: 0.15,
    CASH: 0.002
  }
};

// ============================================================================
// HISTORICAL DATA - FTSE ALL-SHARE TOTAL RETURN (1985-2023)
// ============================================================================
export const EQUITY_RETURNS = {
  1985: 0.1969, 1986: 0.2467, 1987: 0.0467, 1988: 0.0744, 1989: 0.3520,
  1990: -0.0986, 1991: 0.2076, 1992: 0.1975, 1993: 0.2815, 1994: -0.0580,
  1995: 0.2353, 1996: 0.1601, 1997: 0.2376, 1998: 0.1398, 1999: 0.2406,
  2000: -0.0574, 2001: -0.1337, 2002: -0.2248, 2003: 0.2079, 2004: 0.1248,
  2005: 0.2205, 2006: 0.1684, 2007: 0.0547, 2008: -0.2983, 2009: 0.3034,
  2010: 0.1459, 2011: -0.0336, 2012: 0.1225, 2013: 0.2043, 2014: 0.0117,
  2015: 0.0098, 2016: 0.1672, 2017: 0.1326, 2018: -0.0943, 2019: 0.1924,
  2020: -0.0966, 2021: 0.1820, 2022: 0.0078, 2023: 0.0782
};

// ============================================================================
// HISTORICAL DATA - UK CPI INFLATION (1985-2023)
// ============================================================================
export const INFLATION = {
  1985: 0.061, 1986: 0.034, 1987: 0.042, 1988: 0.049, 1989: 0.079,
  1990: 0.095, 1991: 0.059, 1992: 0.036, 1993: 0.016, 1994: 0.025,
  1995: 0.034, 1996: 0.024, 1997: 0.031, 1998: 0.034, 1999: 0.013,
  2000: 0.030, 2001: 0.012, 2002: 0.013, 2003: 0.014, 2004: 0.013,
  2005: 0.021, 2006: 0.023, 2007: 0.023, 2008: 0.036, 2009: 0.022,
  2010: 0.033, 2011: 0.045, 2012: 0.028, 2013: 0.026, 2014: 0.015,
  2015: 0.001, 2016: 0.007, 2017: 0.027, 2018: 0.025, 2019: 0.018,
  2020: 0.009, 2021: 0.026, 2022: 0.101, 2023: 0.075
};

// ============================================================================
// SCENARIO DEFINITIONS
// ============================================================================
export const SCENARIOS = {
  GREAT_DEPRESSION: {
    name: 'Great Depression',
    equity: [-0.17, -0.34, -0.53, -0.23, 0.67, 0.04, 0.39, 0.25, -0.38, 0.28],
    inflation: [0, -0.06, -0.09, -0.10, 0.01, 0.02, 0.03, 0.01, 0.03, -0.02],
    color: '#e74c3c'
  },
  STAGFLATION_70S: {
    name: 'Stagflation 70s',
    equity: [-0.17, -0.28, 0.38, 0.18, -0.13, -0.03, 0.04, 0.15, -0.09, 0.20],
    inflation: [0.09, 0.12, 0.07, 0.05, 0.07, 0.09, 0.13, 0.13, 0.09, 0.04],
    color: '#e67e22'
  },
  LOST_DECADE_2000S: {
    name: 'Lost Decade 2000s',
    equity: [-0.06, -0.07, -0.17, 0.25, 0.03, -0.01, 0.16, 0.06, -0.34, 0.19],
    inflation: [0.03, 0.02, 0.02, 0.02, 0.03, 0.03, 0.03, 0.04, 0, 0.03],
    color: '#9b59b6'
  },
  CRISIS_2008: {
    name: '2008 Crisis',
    equity: [-0.34, 0.19, 0.11, 0.06, 0.07, 0.27, 0.08, -0.02, 0.13, 0.25],
    inflation: [0, 0.03, 0.02, 0.03, 0.02, 0.02, 0.01, 0.01, 0.02, 0.02],
    color: '#3498db'
  },
  SYNTHETIC_WORST: {
    name: 'Synthetic Worst',
    equity: [-0.40, 0.10, 0.10, 0.10, -0.35, 0.10, 0.10, 0.10, 0.10, -0.30],
    inflation: [0.08, 0.05, 0.05, 0.05, 0.08, 0.05, 0.05, 0.05, 0.05, 0.08],
    color: '#1abc9c'
  }
};

// ============================================================================
// UI CHART COLORS
// ============================================================================
export const CHART_COLORS = {
  SUCCESS: '#2ea043',
  SUCCESS_LIGHT: 'rgba(46,160,67,0.25)',
  FAILURE: '#f85149',
  FAILURE_LIGHT: 'rgba(248,81,73,0.8)',
  WARNING: '#f0c674',
  INFO: '#7eb8da',
  GLIDEPATH: '#7eb8da',
  CONE_LIGHT: 'rgba(240,198,116,0.15)',
  CONE_MEDIUM: 'rgba(240,198,116,0.2)',
  CONE_DARK: 'rgba(240,198,116,0.35)',
  GRID: 'rgba(255,255,255,0.1)',
  TEXT_MUTED: '#8b8b9b'
};

// ============================================================================
// TAX YEAR BOUNDARIES
// ============================================================================
export const TAX_YEAR = {
  START_MONTH: 4,  // April
  START_DAY: 6
};
