import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ShapeSkinTailwind } from '../skins/shape-skin-tailwind';
import { shapeSkinContractDef } from '../contracts/shape-skin-contract';
import { sanitize } from '../../../utils/tailwind/helpers';
import { tokens } from '../../../theme/design-tokens';

describe('ShapeSkinTailwind Consistency with Contract', () => {
  const { variants, sizes } = shapeSkinContractDef;

  describe('Variants Consistency', () => {
    Object.entries(variants).forEach(([variantName, variantDef]) => {
      it(`should apply correct classes for variant: ${variantName}`, () => {
        const { container } = render(<ShapeSkinTailwind variant={variantName as any} />);
        const element = container.firstChild as HTMLElement;
        const classList = element.className;

        // Check Border Radius
        if (variantDef.borderRadius) {
          const expectedClass = `rounded-[${sanitize(variantDef.borderRadius)}]`;
          expect(classList).toContain(expectedClass);
        }

        // Check Aspect Ratio
        if ('aspectRatio' in variantDef) {
           const expectedClass = `aspect-[${sanitize(variantDef.aspectRatio as string)}]`;
           expect(classList).toContain(expectedClass);
        }
      });
    });
  });

  describe('Sizes Consistency', () => {
    Object.entries(sizes).forEach(([sizeName, sizeDef]) => {
      it(`should apply correct classes for size: ${sizeName}`, () => {
        const { container } = render(<ShapeSkinTailwind size={sizeName as any} />);
        const element = container.firstChild as HTMLElement;
        const classList = element.className;

        // Check Width
        if (sizeDef.width) {
          const expectedClass = `w-[${sanitize(sizeDef.width)}]`;
          expect(classList).toContain(expectedClass);
        }

        // Check Height
        if (sizeDef.height) {
          const expectedClass = `h-[${sanitize(sizeDef.height)}]`;
          expect(classList).toContain(expectedClass);
        }

        // Check Font Size
        if ('fontSize' in sizeDef) {
          const expectedClass = `text-[${sanitize(sizeDef.fontSize as string)}]`;
          expect(classList).toContain(expectedClass);
        }
      });
    });
  });
  
  describe('Common Base Styles', () => {
      it('should apply base styles defined in skin', () => {
          const { container } = render(<ShapeSkinTailwind />);
          const element = container.firstChild as HTMLElement;
          const classList = element.className;
          
          expect(classList).toContain('inline-flex');
          expect(classList).toContain('items-center');
          expect(classList).toContain('justify-center');
          expect(classList).toContain('overflow-hidden');
          
          // Check for semantic token usage
          const expectedBg = `bg-[${sanitize(tokens.colors.secondary.main)}]`;
          expect(classList).toContain(expectedBg);
          
          const expectedBorder = `border-[${sanitize(tokens.colors.neutral.border)}]`;
          expect(classList).toContain(expectedBorder);
      });
  });
});
