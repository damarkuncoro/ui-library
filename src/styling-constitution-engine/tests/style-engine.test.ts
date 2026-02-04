/**
 * Style Engine - Unit Tests
 * Version: v0.1
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { StyleEngine, createStyleEngine, defaultConstitution } from '../core/style-engine';
import { Constitution } from '../core/types';

describe('StyleEngine', () => {
  let styleEngine: StyleEngine;
  let testConstitution: Constitution;

  beforeEach(() => {
    testConstitution = {
      colors: {
        primary: '#e11d48',
        secondary: '#6b7280',
        neutral: '#f8fafc'
      },
      spacing: {
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem'
      },
      sizing: {
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem'
      },
      fontSizes: {
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem'
      },
      fontWeights: {
        normal: '400',
        medium: '500',
        bold: '700'
      },
      lineHeights: {
        tight: '1.25',
        normal: '1.5',
        relaxed: '1.625'
      },
      letterSpacings: {
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em'
      },
      radius: {
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem'
      },
      borderWidths: {
        thin: '1px',
        normal: '2px',
        thick: '3px'
      },
      shadows: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
      },
      opacity: {
        '0': '0',
        '50': '0.5',
        '100': '1'
      },
      zIndex: {
        '0': '0',
        '10': '10',
        '50': '50'
      },
      transitions: {
        all: 'all',
        colors: 'color, background-color, border-color'
      },
      durations: {
        '200': '200ms',
        '300': '300ms',
        '500': '500ms'
      },
      easings: {
        linear: 'linear',
        in: 'cubic-bezier(0.4, 0, 1, 1)',
        out: 'cubic-bezier(0, 0, 0.2, 1)'
      },
      animations: {
        spin: 'spin 1s linear infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      transforms: {
        none: 'none',
        'scale-100': 'scale(1)'
      },
      scale: {
        '100': '100%',
        '105': '105%'
      },
      rotate: {
        '0': '0deg',
        '90': '90deg'
      },
      skew: {
        '0': '0deg',
        '12': '12deg'
      },
      translate: {
        '0': '0',
        '1': '1px'
      },
      widths: {
        auto: 'auto',
        full: '100%'
      },
      heights: {
        auto: 'auto',
        full: '100%'
      },
      minWidths: {
        '0': '0',
        full: '100%'
      },
      maxWidths: {
        '0': '0',
        full: '100%'
      },
      minHeights: {
        '0': '0',
        full: '100%'
      },
      maxHeights: {
        '0': '0',
        full: '100%'
      },
      // Flexbox
      flexDirection: {
        row: 'row',
        column: 'column'
      },
      flexWrap: {
        nowrap: 'nowrap',
        wrap: 'wrap'
      },
      justifyContent: {
        start: 'flex-start',
        center: 'center',
        end: 'flex-end'
      },
      alignItems: {
        start: 'flex-start',
        center: 'center',
        end: 'flex-end'
      },
      alignContent: {
        start: 'flex-start',
        center: 'center',
        end: 'flex-end'
      },
      flexValues: {
        '0': '0',
        '1': '1'
      },
      flexGrow: {
        '0': '0',
        '1': '1'
      },
      flexShrink: {
        '0': '0',
        '1': '1'
      },
      order: {
        '0': '0',
        '1': '1'
      },
      // Grid
      gridTemplateColumns: {
        '1': 'repeat(1, minmax(0, 1fr))',
        '2': 'repeat(2, minmax(0, 1fr))'
      },
      gridTemplateRows: {
        '1': 'repeat(1, minmax(0, 1fr))',
        '2': 'repeat(2, minmax(0, 1fr))'
      },
      gap: {
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem'
      },
      aspectRatio: {
        square: '1/1',
        video: '16/9'
      }
    };

    styleEngine = createStyleEngine(testConstitution, true);
  });

  describe('Token Resolution', () => {
    it('should resolve color token to CSS variable', () => {
      const style = styleEngine.resolve('button', {
        background: 'token:colors.primary'
      });

      expect(style.background).toBe('var(--colors-primary)');
    });

    it('should resolve spacing token to CSS variable', () => {
      const style = styleEngine.resolve('button', {
        padding: 'token:spacing.md'
      });

      expect(style.padding).toBe('var(--spacing-md)');
    });

    it('should resolve nested token path', () => {
      const style = styleEngine.resolve('button', {
        fontSize: 'token:fontSizes.md'
      });

      expect(style.fontSize).toBe('var(--fontSizes-md)');
    });

    it('should throw error for non-existent token category', () => {
      expect(() => {
        styleEngine.resolve('button', {
          background: 'token:unknown.primary'
        });
      }).toThrow("Token category 'unknown' not found in constitution");
    });

    it('should throw error for non-existent token', () => {
      expect(() => {
        styleEngine.resolve('button', {
          background: 'token:colors.nonexistent'
        });
      }).toThrow("Token 'colors.nonexistent' not found in constitution");
    });
  });

  describe('Style Validation', () => {
    it('should validate token-only styles', () => {
      const result = styleEngine.validate('button', {
        background: 'token:colors.primary',
        textColor: 'token:colors.neutral'
      });

      expect(result.valid).toBe(true);
    });

    it('should reject hardcoded hex colors in strict mode', () => {
      const result = styleEngine.validate('button', {
        background: '#ff0000'
      });

      expect(result.valid).toBe(false);
      expect(result.error).toBe('STYLE_VIOLATION');
    });

    it('should reject hardcoded pixel values in strict mode', () => {
      const result = styleEngine.validate('button', {
        padding: '16px'
      });

      expect(result.valid).toBe(false);
      expect(result.error).toBe('STYLE_VIOLATION');
    });

    it('should reject hardcoded rem values in strict mode', () => {
      const result = styleEngine.validate('button', {
        padding: '1rem'
      });

      expect(result.valid).toBe(false);
      expect(result.error).toBe('STYLE_VIOLATION');
    });

    it('should allow CSS variable references', () => {
      const result = styleEngine.validate('button', {
        background: 'var(--colors-primary)'
      });

      expect(result.valid).toBe(true);
    });

    it('should allow non-string values', () => {
      const result = styleEngine.validate('button', {
        opacity: 0.5
      });

      expect(result.valid).toBe(true);
    });
  });

  describe('Style Compilation', () => {
    it('should compile valid style contract to CSS', () => {
      const result = styleEngine.compile('button', {
        background: 'token:colors.primary',
        textColor: 'token:colors.neutral',
        padding: 'token:spacing.md'
      });

      expect(result.success).toBe(true);
      expect(result.css).toContain('.button');
      expect(result.css).toContain('background-color: var(--colors-primary);');
      expect(result.css).toContain('color: var(--colors-neutral);');
      expect(result.css).toContain('padding: var(--spacing-md);');
    });

    it('should fail compilation for invalid style contract', () => {
      const result = styleEngine.compile('button', {
        background: '#ff0000'
      });

      expect(result.success).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
    });

    it('should generate atomic CSS rules', () => {
      const result = styleEngine.compile('button', {
        background: 'token:colors.primary',
        textColor: 'token:colors.neutral'
      });

      expect(result.css).toMatch(/\.button \{/);
      expect(result.css).toMatch(/background-color: var\(--colors-primary\);/);
      expect(result.css).toMatch(/color: var\(--colors-neutral\);/);
    });
  });

  describe('Strict Mode', () => {
    it('should throw error for hardcoded values in strict mode', () => {
      const strictEngine = createStyleEngine(testConstitution, true);

      expect(() => {
        strictEngine.resolve('button', {
          background: '#ff0000'
        });
      }).toThrow();
    });

    it('should warn for hardcoded values in non-strict mode', () => {
      const nonStrictEngine = createStyleEngine(testConstitution, false);
      const consoleWarnSpy = vi.spyOn(console, 'warn');

      nonStrictEngine.resolve('button', {
        background: '#ff0000'
      });

      expect(consoleWarnSpy).toHaveBeenCalled();
      consoleWarnSpy.mockRestore();
    });
  });

  describe('Default Constitution', () => {
    it('should have all required token categories', () => {
      expect(defaultConstitution.colors).toBeDefined();
      expect(defaultConstitution.spacing).toBeDefined();
      expect(defaultConstitution.sizing).toBeDefined();
      expect(defaultConstitution.fontSizes).toBeDefined();
      expect(defaultConstitution.fontWeights).toBeDefined();
      expect(defaultConstitution.radius).toBeDefined();
      expect(defaultConstitution.borderWidths).toBeDefined();
      expect(defaultConstitution.shadows).toBeDefined();
    });

    it('should have valid color tokens', () => {
      expect(defaultConstitution.colors.primary).toMatch(/^#[0-9A-Fa-f]{6}$/);
      expect(defaultConstitution.colors.secondary).toMatch(/^#[0-9A-Fa-f]{6}$/);
    });

    it('should have valid spacing tokens', () => {
      expect(defaultConstitution.spacing.md).toMatch(/^\d+(\.\d+)?rem$/);
      expect(defaultConstitution.spacing.lg).toMatch(/^\d+(\.\d+)?rem$/);
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty style object', () => {
      const result = styleEngine.compile('button', {});

      expect(result.success).toBe(true);
      expect(result.css).toContain('.button {');
    });

    it('should handle mixed valid and invalid styles', () => {
      const result = styleEngine.compile('button', {
        background: 'token:colors.primary',
        padding: '16px'
      });

      expect(result.success).toBe(false);
      expect(result.errors.length).toBe(1);
    });

    it('should handle deeply nested token paths', () => {
      const style = styleEngine.resolve('button', {
        fontSize: 'token:fontSizes.md'
      });

      expect(style.fontSize).toBe('var(--fontSizes-md)');
    });

    it('should handle token with special characters', () => {
      const style = styleEngine.resolve('button', {
        background: 'token:colors.text-muted'
      });

      expect(style.background).toBe('var(--colors-text-muted)');
    });
  });
});