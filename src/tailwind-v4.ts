import { cssVars } from './theme/design-tokens';
import { buttonSkinContractDef } from './components/button/button-skin-contract';
import { inputSkinContractDef } from './components/input/input-skin-contract';

const sanitize = (val: string | number) => String(val).replace(/ /g, '_');

function buttonSafelist() {
  const { variants, sizes, base, disabled, loader, icons } = buttonSkinContractDef;
  const classes: string[] = [];
  Object.values(variants).forEach((v: any) => {
    if (v.backgroundColor) classes.push(`bg-[${sanitize(v.backgroundColor)}]`);
    if (v.color) classes.push(`text-[${sanitize(v.color)}]`);
    if (v.borderColor) classes.push(`border-[${sanitize(v.borderColor)}]`);
    if (v.hover?.backgroundColor) classes.push(`hover:bg-[${sanitize(v.hover.backgroundColor)}]`);
    if (v.focus?.ringColor) classes.push(`focus:ring-[${sanitize(v.focus.ringColor)}]`);
    if (v.focus?.outlineOffset) classes.push(`focus:ring-offset-[${sanitize(v.focus.outlineOffset)}]`);
  });
  Object.values(sizes).forEach((s: any) => {
    if (s.height) classes.push(`h-[${sanitize(s.height)}]`);
    if (s.padding) {
        const pClass = `[padding:${sanitize(s.padding)}]`;
        classes.push(pClass);
        // console.log('Generating padding class:', pClass); 
    }
    if (s.fontSize) classes.push(`text-[${sanitize(s.fontSize)}]`);
  });
  classes.push(`rounded-[${sanitize(base.borderRadius)}]`);
  classes.push(`font-[${sanitize(base.fontWeight)}]`);
  classes.push(`[transition:${sanitize(base.transition)}]`);
  classes.push(`disabled:opacity-[${sanitize(disabled.opacity)}]`);
  classes.push(`disabled:cursor-[${sanitize(disabled.cursor)}]`);
  classes.push(`[&_.button-icon-left]:mr-[${sanitize(icons.rightSpacing)}]`);
  classes.push(`[&_.button-icon-right]:ml-[${sanitize(icons.leftSpacing)}]`);
  classes.push(`[&_.button-loader]:border-[${sanitize(loader.borderWidth)}]`);
  classes.push(`[&_.button-loader]:h-[${sanitize(loader.size)}]`);
  classes.push(`[&_.button-loader]:w-[${sanitize(loader.size)}]`);
  return classes;
}

function inputSafelist() {
  const { variants, sizes, base, icons, disabled } = inputSkinContractDef;
  const classes: string[] = [];
  Object.values(variants).forEach((v: any) => {
    if (v.backgroundColor) classes.push(`bg-[${sanitize(v.backgroundColor)}]`);
    if (v.borderColor) classes.push(`border-[${sanitize(v.borderColor)}]`);
    if (v.color) classes.push(`text-[${sanitize(v.color)}]`);
    if (v.placeholderColor) classes.push(`placeholder:text-[${sanitize(v.placeholderColor)}]`);
    if (v.borderBottomColor) classes.push(`border-b-[${sanitize(v.borderBottomColor)}]`);
    if (v.hover?.borderColor) classes.push(`hover:border-[${sanitize(v.hover.borderColor)}]`);
    if (v.hover?.backgroundColor) classes.push(`hover:bg-[${sanitize(v.hover.backgroundColor)}]`);
    if (v.hover?.borderBottomColor) classes.push(`hover:border-b-[${sanitize(v.hover.borderBottomColor)}]`);
    if (v.focus?.borderColor) classes.push(`focus:border-[${sanitize(v.focus.borderColor)}]`);
    if (v.focus?.ringColor) classes.push(`focus:ring-[${sanitize(v.focus.ringColor)}]`);
    if (v.focus?.borderBottomColor) classes.push(`focus:border-b-[${sanitize(v.focus.borderBottomColor)}]`);
    if (v.invalid?.borderColor) classes.push(`!border-[${sanitize(v.invalid.borderColor)}]`);
    if (v.invalid?.ringColor) classes.push(`!ring-[${sanitize(v.invalid.ringColor)}]`);
    if (v.invalid?.borderBottomColor) classes.push(`!border-[${sanitize(v.invalid.borderBottomColor)}]`);
  });
  Object.values(sizes).forEach((s: any) => {
    if (s.height) classes.push(`h-[${sanitize(s.height)}]`);
    if (s.padding) classes.push(`[padding:${sanitize(s.padding)}]`);
    if (s.fontSize) classes.push(`text-[${sanitize(s.fontSize)}]`);
  });
  
  classes.push(`rounded-[${sanitize(base.borderRadius)}]`);
  classes.push(`[transition:${sanitize(base.transition)}]`);
  classes.push(`disabled:opacity-[${sanitize(disabled.opacity)}]`);
  classes.push(`disabled:cursor-[${sanitize(disabled.cursor)}]`);
  
  // Icon related
  classes.push(`[padding-left:${sanitize(icons.padding)}]`);
  classes.push(`[padding-right:${sanitize(icons.padding)}]`);
  classes.push(`[&_.input-icon-left]:left-[${sanitize(icons.position)}]`);
  classes.push(`[&_.input-icon-right]:right-[${sanitize(icons.position)}]`);
  classes.push(`[&_.input-icon-left]:text-[${sanitize(icons.color)}]`);
  classes.push(`[&_.input-icon-right]:text-[${sanitize(icons.color)}]`);

  return classes;
}

export const preset = {
  theme: {
    extend: {
      colors: cssVars.colors,
      boxShadow: cssVars.shadows,
    },
  },
  safelist: [
    ...buttonSafelist(),
    ...inputSafelist(),
  ],
  plugins: [],
};
