import { shapeSkinContractDef } from '../../../components/shape/shape-skin-contract.js';
import { tokens } from '../../../theme/design-tokens.js';
import { sanitize } from '../helpers.js';

const tw = (prefix: string, val: string | number) => `${prefix}-[${sanitize(val)}]`;

// Generator for Shape Safelist
export function generateShapeSafelist() {
  const { variants, sizes } = shapeSkinContractDef;
  const classes: string[] = [];

  // Base Classes (Hardcoded in Skin)
  classes.push(`bg-[${sanitize(tokens.colors.secondary.main)}]`);
  classes.push(`border-[${sanitize(tokens.colors.neutral.border)}]`);

  // Variants
  Object.values(variants).forEach((v: any) => {
    if (v.borderRadius) classes.push(`rounded-[${sanitize(v.borderRadius)}]`);
    if (v.aspectRatio) classes.push(`aspect-[${sanitize(v.aspectRatio)}]`);
  });

  // Sizes
  Object.values(sizes).forEach((s: any) => {
    if (s.width) classes.push(tw('w', s.width));
    if (s.height) classes.push(tw('h', s.height));
    if (s.fontSize) classes.push(tw('text', s.fontSize));
  });

  return classes;
}
