import { shapeSkinContractDef } from '../../../components/shape/contracts/shape-skin-contract.js';
import { tokens } from '../../../theme/design-tokens.js';
import { tw } from '../helpers.js';

// Generator for Shape Safelist
export function generateShapeSafelist() {
  const { variants, sizes } = shapeSkinContractDef;
  const classes: string[] = [];

  // Base Classes (Hardcoded in Skin)
  classes.push(tw('bg', tokens.colors.secondary.main));
  classes.push(tw('border', tokens.colors.neutral.border));

  // Variants
  Object.values(variants).forEach((v: any) => {
    if (v.borderRadius) classes.push(tw('rounded', v.borderRadius));
    if (v.aspectRatio) classes.push(tw('aspect', v.aspectRatio));
  });

  // Sizes
  Object.values(sizes).forEach((s: any) => {
    if (s.width) classes.push(tw('w', s.width));
    if (s.height) classes.push(tw('h', s.height));
    if (s.fontSize) classes.push(tw('text', s.fontSize));
  });

  return classes;
}
