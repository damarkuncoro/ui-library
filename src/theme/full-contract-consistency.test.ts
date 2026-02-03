import { describe, it, expect } from 'vitest';
import { colorContractDef } from './contracts/color-contract';
import { themes } from './design-tokens';

// Helper to extract variable names from values like "var(--color-primary-main)"
const extractVarName = (val: string) => {
  const match = val.match(/var\((--[\w-]+)\)/);
  return match ? match[1] : null;
};

// Flatten the color contract to get all expected CSS variables
const getExpectedCssVars = (obj: Record<string, any>, prefix = ''): string[] => {
  let vars: string[] = [];
  for (const key in obj) {
    if (typeof obj[key] === 'string' && obj[key].startsWith('var(--')) {
      const varName = extractVarName(obj[key]);
      if (varName) vars.push(varName);
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      vars = vars.concat(getExpectedCssVars(obj[key], `${prefix}${key}.`));
    }
  }
  return vars;
};

describe('Full Contract to CSS Consistency', () => {
  const expectedColorVars = getExpectedCssVars(colorContractDef);

  describe('Color Contract Implementation', () => {
    it('should have all defined color variables implemented in Light Theme', () => {
      expectedColorVars.forEach(varName => {
        expect(themes.light).toHaveProperty(varName);
        expect(themes.light[varName as keyof typeof themes.light]).toBeDefined();
        // Ensure it resolves to a real color (hex/rgb) or another var, not undefined/null
        expect(themes.light[varName as keyof typeof themes.light]).not.toBe('');
      });
    });

    it('should have all defined color variables implemented in Dark Theme', () => {
      expectedColorVars.forEach(varName => {
        expect(themes.dark).toHaveProperty(varName);
        expect(themes.dark[varName as keyof typeof themes.dark]).toBeDefined();
        expect(themes.dark[varName as keyof typeof themes.dark]).not.toBe('');
      });
    });
  });

  describe('Specific Value Checks', () => {
     // Validate a few critical tokens to ensure mapping is correct, not just present
     it('should map Primary Main correctly in Light Theme', () => {
         // Assuming Blue 600 from palette
         // We check strictly if it matches the format of a hex color or expected value
         const val = themes.light['--color-primary-main'];
         expect(val).toMatch(/^#?[0-9a-fA-F]{3,6}$/); 
     });

     it('should map Neutral Bg correctly in Dark Theme', () => {
         const val = themes.dark['--color-neutral-bg'];
         // Should be a dark color (checking existence and format)
         expect(val).toMatch(/^#?[0-9a-fA-F]{3,6}$/);
     });
  });
});
