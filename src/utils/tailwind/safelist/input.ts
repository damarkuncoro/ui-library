import { inputSkinContractDef } from '../../../components/input/input-skin-contract.js';
import { sanitize } from '../helpers.js';

const tw = (prefix: string, val: string | number) => `${prefix}-[${sanitize(val)}]`;

// Generator for Input Safelist
export function generateInputSafelist() {
  const { variants, sizes, base, icons, disabled } = inputSkinContractDef;
  const classes: string[] = [];

  // Variants
  Object.values(variants).forEach((v: any) => {
    if (v.backgroundColor) classes.push(tw('bg', v.backgroundColor));
    if (v.borderColor) classes.push(tw('border', v.borderColor));
    if (v.color) classes.push(tw('text', v.color));
    if (v.placeholderColor) classes.push(`placeholder:${tw('text', v.placeholderColor)}`);
    if (v.borderBottomColor) classes.push(tw('border-b', v.borderBottomColor));

    if (v.hover?.borderColor) classes.push(`hover:${tw('border', v.hover.borderColor)}`);
    if (v.hover?.backgroundColor) classes.push(`hover:${tw('bg', v.hover.backgroundColor)}`);
    if (v.hover?.borderBottomColor) classes.push(`hover:${tw('border-b', v.hover.borderBottomColor)}`);

    if (v.focus?.borderColor) classes.push(`focus:${tw('border', v.focus.borderColor)}`);
    if (v.focus?.ringColor) classes.push(`focus:${tw('ring', v.focus.ringColor)}`);
    if (v.focus?.borderBottomColor) classes.push(`focus:${tw('border-b', v.focus.borderBottomColor)}`);
    
    // Invalid state handling
    if (v.invalid?.borderColor) classes.push(`!${tw('border', v.invalid.borderColor)}`);
    if (v.invalid?.ringColor) classes.push(`!${tw('ring', v.invalid.ringColor)}`);
    if (v.invalid?.borderBottomColor) classes.push(`!${tw('border-b', v.invalid.borderBottomColor)}`);
  });

  // Sizes
  Object.values(sizes).forEach((s: any) => {
    if (s.height) classes.push(tw('h', s.height));
    if (s.padding) classes.push(tw('p', s.padding));
    if (s.fontSize) classes.push(tw('text', s.fontSize));
  });
  
  classes.push(tw('rounded', base.borderRadius));
  classes.push(`[transition:${sanitize(base.transition)}]`);
  classes.push(`disabled:${tw('opacity', disabled.opacity)}`);
  classes.push(`disabled:${tw('cursor', disabled.cursor)}`);

  // Icon related
  classes.push(tw('pl', icons.padding));
  classes.push(tw('pr', icons.padding));
  classes.push(`[&_.input-icon-left]:${tw('left', icons.position)}`);
  classes.push(`[&_.input-icon-right]:${tw('right', icons.position)}`);
  classes.push(`[&_.input-icon-left]:${tw('text', icons.color)}`);
  classes.push(`[&_.input-icon-right]:${tw('text', icons.color)}`);
  
  return classes;
}
