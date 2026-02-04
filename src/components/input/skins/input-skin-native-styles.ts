import { CSSProperties } from 'react';
import { inputSkinContractDef } from '../contracts/input-skin-contract';

// --- FRAMEWORK AGNOSTIC SKIN STYLES ---
// Styles are derived from the skin contract to ensure consistency across all implementations.

const { variants, sizes, base, disabled, icons } = inputSkinContractDef;

export const baseStyles: CSSProperties = base;

export const disabledStyles: CSSProperties = disabled;

export const variantStyles: Record<string, CSSProperties> = {
  outline: {
    backgroundColor: variants.outline.backgroundColor,
    borderColor: variants.outline.borderColor,
    color: variants.outline.color,
  },
  filled: {
    backgroundColor: variants.filled.backgroundColor,
    borderColor: variants.filled.borderColor,
    color: variants.filled.color,
  },
  flushed: {
    backgroundColor: variants.flushed.backgroundColor,
    borderColor: variants.flushed.borderBottomColor,
    borderBottomColor: variants.flushed.borderBottomColor,
    color: variants.flushed.color,
  },
};

export const hoverStyles: Record<string, CSSProperties> = {
  outline: {
    borderColor: variants.outline.hover.borderColor,
  },
  filled: {
    backgroundColor: variants.filled.hover.backgroundColor,
  },
  flushed: {
    borderBottomColor: variants.flushed.hover.borderBottomColor,
  },
};

export const focusStyles: Record<string, CSSProperties> = {
  outline: {
    borderColor: variants.outline.focus.borderColor,
  },
  filled: {
    backgroundColor: variants.filled.focus.backgroundColor,
    borderColor: variants.filled.focus.borderColor,
  },
  flushed: {
    borderBottomColor: variants.flushed.focus.borderBottomColor,
  },
};

export const invalidStyles: Record<string, CSSProperties> = {
  outline: {
    borderColor: variants.outline.invalid.borderColor,
  },
  filled: {
    borderColor: variants.filled.invalid.borderColor,
  },
  flushed: {
    borderBottomColor: variants.flushed.invalid.borderBottomColor,
  },
};

export const sizeStyles: Record<string, CSSProperties> = {
  sm: {
    height: sizes.sm.height,
    paddingLeft: sizes.sm.paddingX,
    paddingRight: sizes.sm.paddingX,
    fontSize: sizes.sm.fontSize,
  },
  md: {
    height: sizes.md.height,
    paddingLeft: sizes.md.paddingX,
    paddingRight: sizes.md.paddingX,
    fontSize: sizes.md.fontSize,
  },
  lg: {
    height: sizes.lg.height,
    paddingLeft: sizes.lg.paddingX,
    paddingRight: sizes.lg.paddingX,
    fontSize: sizes.lg.fontSize,
  },
};

export const wrapperStyles: CSSProperties = {
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  width: '100%',
};

export const iconPadding = icons.padding;
