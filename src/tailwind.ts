import path from 'path';
import { cssVars, tokens } from './theme/design-tokens';
import { buttonSkinContractDef } from './components/button/button-skin-contract';
import { inputSkinContractDef } from './components/input/input-skin-contract';

// Helper to sanitize values for Tailwind arbitrary values (e.g. spaces to underscores)
const sanitize = (val: string | number) => String(val).replace(/ /g, '_');

// Generator for Button Safelist
function generateButtonSafelist() {
  const { variants, sizes, base, disabled, loader, icons } = buttonSkinContractDef;
  const classes: string[] = [];

  // Variants
  Object.values(variants).forEach((v: any) => {
    if (v.backgroundColor) classes.push(`bg-[${sanitize(v.backgroundColor)}]`);
    if (v.color) classes.push(`text-[${sanitize(v.color)}]`);
    if (v.borderColor) classes.push(`border-[${sanitize(v.borderColor)}]`);
    
    if (v.hover?.backgroundColor) classes.push(`hover:bg-[${sanitize(v.hover.backgroundColor)}]`);
    
    if (v.focus?.ringColor) classes.push(`focus:ring-[${sanitize(v.focus.ringColor)}]`);
    if (v.focus?.outlineOffset) classes.push(`focus:ring-offset-[${sanitize(v.focus.outlineOffset)}]`);
  });

  // Sizes
  Object.values(sizes).forEach((s: any) => {
    if (s.height) classes.push(`h-[${sanitize(s.height)}]`);
    if (s.padding) classes.push(`[padding:${sanitize(s.padding)}]`);
    if (s.fontSize) classes.push(`text-[${sanitize(s.fontSize)}]`);
  });

  // Base & UI Tokens
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
  
  classes.push(`focus:ring-[${sanitize(tokens.ui.outlineWidth)}]`);

  return classes;
}

// Generator for Input Safelist
function generateInputSafelist() {
  const { variants, sizes, base } = inputSkinContractDef;
  const classes: string[] = [];

  // Variants
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
    
    // Invalid state handling if needed, usually mapped to classes in implementation
  });

  // Sizes
  Object.values(sizes).forEach((s: any) => {
    if (s.height) classes.push(`h-[${sanitize(s.height)}]`);
    if (s.padding) classes.push(`[padding:${sanitize(s.padding)}]`);
    if (s.fontSize) classes.push(`text-[${sanitize(s.fontSize)}]`);
  });
  
  classes.push(`rounded-[${sanitize(base.borderRadius)}]`);
  classes.push(`[transition:${sanitize(base.transition)}]`);
  
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
    ...generateButtonSafelist(),
    ...generateInputSafelist(),
  ],
  plugins: [],
};

export function content() {
  return [
    path.join(__dirname, '**/*.{js,jsx,ts,tsx}'),
    path.join(__dirname, '../../esm/**/*.{js,jsx,ts,tsx}'),
  ];
}
