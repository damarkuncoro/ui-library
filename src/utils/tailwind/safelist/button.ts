import { buttonSkinContractDef } from '../../../components/button/button-skin-contract.js';
import { tokens } from '../../../theme/design-tokens.js';
import { sanitize } from '../helpers.js';

const tw = (prefix: string, val: string | number) => `${prefix}-[${sanitize(val)}]`;

// Generator for Button Safelist
export function generateButtonSafelist() {
  const { variants, sizes, base, disabled, loader, icons } = buttonSkinContractDef;
  const classes: string[] = [];

  // Variants
  Object.values(variants).forEach((v: any) => {
    if (v.backgroundColor) classes.push(tw('bg', v.backgroundColor));
    if (v.color) classes.push(tw('text', v.color));
    if (v.borderColor) classes.push(tw('border', v.borderColor));
    
    if (v.hover?.backgroundColor) classes.push(`hover:${tw('bg', v.hover.backgroundColor)}`);
    
    if (v.focus?.ringColor) classes.push(`focus:${tw('ring', v.focus.ringColor)}`);
    if (v.focus?.outlineOffset) classes.push(`focus:${tw('ring-offset', v.focus.outlineOffset)}`);
  });

  // Sizes
  Object.values(sizes).forEach((s: any) => {
    if (s.height) classes.push(tw('h', s.height));
    if (s.paddingX) classes.push(tw('px', s.paddingX));
    if (s.fontSize) classes.push(tw('text', s.fontSize));
  });

  // Base & UI Tokens
  classes.push(tw('rounded', base.borderRadius));
  classes.push(tw('font', base.fontWeight));
  classes.push(`[transition:${sanitize(base.transition)}]`);
  classes.push(`disabled:${tw('opacity', disabled.opacity)}`);
  classes.push(`disabled:${tw('cursor', disabled.cursor)}`);
  
  classes.push(`[&_.button-icon-left]:${tw('mr', icons.rightSpacing)}`);
  classes.push(`[&_.button-icon-right]:${tw('ml', icons.leftSpacing)}`);
  
  classes.push(`[&_.button-loader]:${tw('border', loader.borderWidth)}`);
  classes.push(`[&_.button-loader]:${tw('h', loader.size)}`);
  classes.push(`[&_.button-loader]:${tw('w', loader.size)}`);
  
  classes.push(`focus:${tw('ring', tokens.ui.outlineWidth)}`);
  classes.push(`focus:${tw('ring-offset', tokens.ui.outlineOffset)}`);
  return classes;
}
