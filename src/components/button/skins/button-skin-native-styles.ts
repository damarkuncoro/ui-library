import { CSSProperties } from 'react';
import { buttonSkinContractDef } from '../contracts/button-skin-contract';

// --- DRY Style Generators ---

// Helper type for the variant definition union
type VariantDef = typeof buttonSkinContractDef.variants[keyof typeof buttonSkinContractDef.variants];
type SizeDef = typeof buttonSkinContractDef.sizes[keyof typeof buttonSkinContractDef.sizes];

const generateStyles = <T,>(
  source: Record<string, T>,
  mapper: (def: T) => CSSProperties
): Record<string, CSSProperties> => {
  return Object.entries(source).reduce((acc, [key, value]) => {
    acc[key] = mapper(value);
    return acc;
  }, {} as Record<string, CSSProperties>);
};

export const baseStyles: CSSProperties = buttonSkinContractDef.base;

export const disabledStyles: CSSProperties = buttonSkinContractDef.disabled;

export const variantStyles = generateStyles(buttonSkinContractDef.variants, (def: VariantDef) => ({
  backgroundColor: def.backgroundColor,
  color: def.color,
  ...('borderColor' in def ? { borderColor: (def as any).borderColor } : {}),
}));

export const hoverStyles = generateStyles(buttonSkinContractDef.variants, (def: VariantDef) => ({
  backgroundColor: def.hover.backgroundColor,
  ...('borderColor' in def.hover ? { borderColor: (def.hover as any).borderColor } : {}),
}));

export const focusStyles = generateStyles(buttonSkinContractDef.variants, (def: VariantDef) => ({
  outline: def.focus.outline,
  outlineOffset: def.focus.outlineOffset,
}));

export const sizeStyles = generateStyles(buttonSkinContractDef.sizes, (def: SizeDef) => ({
  height: def.height,
  paddingLeft: def.paddingX,
  paddingRight: def.paddingX,
  fontSize: def.fontSize,
}));
