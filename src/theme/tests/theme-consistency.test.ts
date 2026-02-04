import { describe, it, expect } from 'vitest';
import { tokens, themes } from '../core/design-tokens';
import { bordersContract } from '../contracts/borders-contract';

describe('Theme Consistency Test', () => {
  describe('Radius Token Consistency', () => {
    it('should map tokens.borders.radius.md to the correct CSS variable', () => {
      // 1. Check if token uses the CSS variable
      expect(tokens.borders.radius.md).toBe('var(--radius-md)');
    });

    it('should have a value for --radius-md in Light Theme', () => {
      // 2. Check if Light Theme has a value for that variable
      expect(themes.light['--radius-md']).toBeDefined();
      // 3. Verify the value matches the source contract
      expect(themes.light['--radius-md']).toBe(bordersContract.radius.md);
    });

    it('should have a value for --radius-md in Dark Theme', () => {
      // 4. Check if Dark Theme has a value for that variable
      expect(themes.dark['--radius-md']).toBeDefined();
      // 5. Verify the value matches the source contract (assuming shared)
      expect(themes.dark['--radius-md']).toBe(bordersContract.radius.md);
    });
  });

  describe('Shape Component Color Consistency', () => {
     it('should have tokens.colors.secondary.main mapped to a variable', () => {
      // Check if tokens.colors.secondary.main is 'var(--color-secondary-main)'
      expect(tokens.colors.secondary.main).toBe('var(--color-secondary-main)');
    });

    it('should have a value for --color-secondary-main in Light Theme', () => {
      expect(themes.light['--color-secondary-main']).toBeDefined();
      // Should be a hex color
      expect(themes.light['--color-secondary-main']).toMatch(/^#?[0-9a-fA-F]{3,6}$/);
    });

    it('should have a value for --color-secondary-main in Dark Theme', () => {
       expect(themes.dark['--color-secondary-main']).toBeDefined();
       expect(themes.dark['--color-secondary-main']).toMatch(/^#?[0-9a-fA-F]{3,6}$/);
    });
  });
});
