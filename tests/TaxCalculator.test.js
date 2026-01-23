/**
 * Tax Calculator Tests
 */

import { describe, it, expect } from 'vitest';
import {
  calculateTax,
  grossToNet,
  netToGross,
  getMarginalRate,
  calculateBRLHeadroom,
  getEffectiveRate,
  isInTaperZone,
  getTaxBandBreakdown,
  compareTaxStrategies
} from '../src/services/TaxCalculator.js';

describe('TaxCalculator', () => {
  // Standard tax parameters for 2024/25
  const PA = 12570;
  const BRL = 50270;
  const HRL = 125140;

  describe('calculateTax', () => {
    it('should return 0 for income below personal allowance', () => {
      expect(calculateTax(10000, PA, BRL)).toBe(0);
      expect(calculateTax(12570, PA, BRL)).toBe(0);
    });

    it('should calculate basic rate tax correctly', () => {
      // £20,000 gross = £20,000 - £12,570 = £7,430 taxable at 20%
      const tax = calculateTax(20000, PA, BRL);
      expect(tax).toBeCloseTo(1486, 0); // £7,430 * 0.20 = £1,486
    });

    it('should calculate tax at BRL boundary correctly', () => {
      // At exactly BRL, all taxable income is at basic rate
      const taxable = BRL - PA; // £37,700
      const expectedTax = taxable * 0.20; // £7,540
      expect(calculateTax(BRL, PA, BRL)).toBeCloseTo(expectedTax, 0);
    });

    it('should calculate higher rate tax correctly', () => {
      // £60,000 gross
      // Basic rate: £50,270 - £12,570 = £37,700 at 20% = £7,540
      // Higher rate: £60,000 - £50,270 = £9,730 at 40% = £3,892
      // Total: £11,432
      const tax = calculateTax(60000, PA, BRL);
      expect(tax).toBeCloseTo(11432, 0);
    });

    it('should apply PA taper for income over £100,000', () => {
      // At £110,000, PA is reduced by (£110,000 - £100,000) * 0.5 = £5,000
      // Effective PA = £12,570 - £5,000 = £7,570
      const tax = calculateTax(110000, PA, BRL, HRL);
      // More tax due to reduced PA
      expect(tax).toBeGreaterThan(calculateTax(100000, PA, BRL, HRL));
    });

    it('should eliminate PA completely at £125,140+', () => {
      // PA fully tapered away
      const tax125140 = calculateTax(125140, PA, BRL, HRL);
      const tax130000 = calculateTax(130000, PA, BRL, HRL);
      // The difference should only be 45% (additional rate) on the extra £4,860
      const diff = tax130000 - tax125140;
      expect(diff).toBeCloseTo(4860 * 0.45, 0);
    });

    it('should handle zero income', () => {
      expect(calculateTax(0, PA, BRL)).toBe(0);
    });

    it('should handle negative income gracefully', () => {
      expect(calculateTax(-1000, PA, BRL)).toBe(0);
    });
  });

  describe('grossToNet', () => {
    it('should return full amount for income below PA', () => {
      expect(grossToNet(10000, PA, BRL)).toBe(10000);
    });

    it('should calculate net correctly at various levels', () => {
      // £30,000 gross, tax = (30000-12570)*0.2 = £3,486, net = £26,514
      expect(grossToNet(30000, PA, BRL)).toBeCloseTo(26514, 0);
    });

    it('should be consistent with calculateTax', () => {
      const gross = 45000;
      const tax = calculateTax(gross, PA, BRL);
      const net = grossToNet(gross, PA, BRL);
      expect(net).toBeCloseTo(gross - tax, 2);
    });
  });

  describe('netToGross', () => {
    it('should return correct gross for net below PA', () => {
      // Net of £10,000 when below PA needs gross of £10,000
      expect(netToGross(10000, PA, BRL)).toBeCloseTo(10000, 0);
    });

    it('should be inverse of grossToNet', () => {
      const originalGross = 35000;
      const net = grossToNet(originalGross, PA, BRL);
      const calculatedGross = netToGross(net, PA, BRL);
      expect(calculatedGross).toBeCloseTo(originalGross, 0);
    });

    it('should work at higher rate levels', () => {
      const originalGross = 70000;
      const net = grossToNet(originalGross, PA, BRL, HRL);
      const calculatedGross = netToGross(net, PA, BRL, HRL);
      expect(calculatedGross).toBeCloseTo(originalGross, 0);
    });
  });

  describe('getMarginalRate', () => {
    it('should return 0 below PA', () => {
      expect(getMarginalRate(10000, PA, BRL)).toBe(0);
    });

    it('should return 0.20 in basic rate band', () => {
      expect(getMarginalRate(30000, PA, BRL)).toBe(0.20);
    });

    it('should return 0.40 in higher rate band', () => {
      expect(getMarginalRate(60000, PA, BRL)).toBe(0.40);
    });

    it('should return 0.60 in PA taper zone', () => {
      expect(getMarginalRate(110000, PA, BRL)).toBe(0.60);
    });

    it('should return 0.45 above HRL', () => {
      expect(getMarginalRate(150000, PA, BRL)).toBe(0.45);
    });
  });

  describe('calculateBRLHeadroom', () => {
    it('should calculate remaining headroom correctly', () => {
      expect(calculateBRLHeadroom(40000, BRL)).toBe(10270);
      expect(calculateBRLHeadroom(50270, BRL)).toBe(0);
    });

    it('should return 0 when already at or above BRL', () => {
      expect(calculateBRLHeadroom(60000, BRL)).toBe(0);
    });
  });

  describe('getEffectiveRate', () => {
    it('should return 0 for income below PA', () => {
      expect(getEffectiveRate(10000, PA, BRL)).toBe(0);
    });

    it('should calculate effective rate correctly', () => {
      // £30,000: tax = £3,486, rate = 11.62%
      const rate = getEffectiveRate(30000, PA, BRL);
      expect(rate).toBeCloseTo(0.1162, 2);
    });
  });

  describe('isInTaperZone', () => {
    it('should return false below £100,000', () => {
      expect(isInTaperZone(90000)).toBe(false);
    });

    it('should return true between £100,000 and £125,140', () => {
      expect(isInTaperZone(110000)).toBe(true);
    });

    it('should return false above £125,140', () => {
      expect(isInTaperZone(150000)).toBe(false);
    });
  });

  describe('getTaxBandBreakdown', () => {
    it('should break down tax bands correctly', () => {
      const breakdown = getTaxBandBreakdown(40000, PA, BRL);

      expect(breakdown.effectivePA).toBe(PA);
      expect(breakdown.inPersonalAllowance).toBe(PA);
      expect(breakdown.inBasicRate).toBeCloseTo(40000 - PA, 0);
      expect(breakdown.inHigherRate).toBe(0);
      expect(breakdown.inAdditionalRate).toBe(0);
    });

    it('should handle higher rate income', () => {
      const breakdown = getTaxBandBreakdown(60000, PA, BRL, HRL);

      expect(breakdown.inBasicRate).toBeCloseTo(BRL - PA, 0);
      expect(breakdown.inHigherRate).toBeCloseTo(60000 - BRL, 0);
    });
  });

  describe('compareTaxStrategies', () => {
    it('should calculate tax savings between strategies', () => {
      const efficient = {
        sipp: 2000,  // Monthly SIPP draw capped at BRL
        isa: 500,    // ISA top-up
        other: 0,
        state: 0
      };

      const inefficient = {
        sipp: 2500,  // All from SIPP (no ISA)
        isa: 0,
        other: 0,
        state: 0
      };

      const comparison = compareTaxStrategies(efficient, inefficient, PA, BRL, HRL);

      // Inefficient has higher annual taxable income
      expect(comparison.inefficientTax).toBeGreaterThan(comparison.efficientTax);
      expect(comparison.annualSaving).toBeGreaterThan(0);
    });
  });
});
