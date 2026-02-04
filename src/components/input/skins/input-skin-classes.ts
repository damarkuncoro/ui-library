import { inputSkinContractDef } from '../contracts/input-skin-contract';
import { tokens } from '../../../theme/core/design-tokens';
import { sanitize, tw } from '../../../utils/tailwind/helpers';

// Helper to access contract values
const { variants, sizes, base, disabled, icons } = inputSkinContractDef;

// Maps for contract values to standard utilities (SCE compliance)
const heightMap: Record<string, string> = {
  [tokens.sizing[8]]: 'h-8',
  [tokens.sizing[10]]: 'h-10',
  [tokens.sizing[12]]: 'h-12',
};

const paddingMap: Record<string, string> = {
  [tokens.spacing[3]]: 'px-3',
  [tokens.spacing[4]]: 'px-4',
  [tokens.spacing[6]]: 'px-6',
  [tokens.spacing[10]]: '10', // For icon padding (pl-10, pr-10)
};

const fontMap: Record<string, string> = {
  [tokens.typography.fontSize.xs]: 'text-xs',
  [tokens.typography.fontSize.sm]: 'text-sm',
  [tokens.typography.fontSize.base]: 'text-base',
};

const opacityMap: Record<string, string> = {
  [tokens.opacity.disabled]: 'opacity-50', // 0.5 -> 50
};

const getSizeClass = (val: string, type: 'h' | 'px' | 'text') => {
  if (type === 'h') return heightMap[val] || tw('h', val);
  if (type === 'px') return paddingMap[val] || tw('px', val);
  if (type === 'text') return fontMap[val] || tw('text', val);
  return '';
};

// Helper to generate variant classes (DRY)
type InputVariant = typeof variants[keyof typeof variants];

const createVariantClasses = (variant: InputVariant) => {
  // Common logic for outline and filled
  // Check if it has ringColor in focus (outline/filled) vs flushed which has different structure
  if ('ringColor' in variant.focus && 'borderColor' in variant) {
    const v = variant as typeof variants.outline | typeof variants.filled;
    const classes = [
      tw('bg', v.backgroundColor),
      'border',
      tw('border', v.borderColor),
      tw('text', v.color),
      `placeholder:${tw('text', v.placeholderColor)}`,
      `focus:${tw('border', v.focus.borderColor)}`,
      `focus:${tw('ring', tokens.ui.outlineWidth)}`,
      `focus:${tw('ring', v.focus.ringColor)}`
    ];

    // Handle Hover
    // Outline: changes borderColor
    // Filled: changes backgroundColor
    if ('borderColor' in v.hover) {
        classes.push(`hover:${tw('border', (v.hover as any).borderColor)}`);
    } else if ('backgroundColor' in v.hover) {
        classes.push(`hover:${tw('bg', (v.hover as any).backgroundColor)}`);
    }

    // Handle Focus Background (Filled only)
    if ('backgroundColor' in v.focus) {
        classes.push(`focus:${tw('bg', (v.focus as any).backgroundColor)}`);
    }

    return classes.join(' ');
  }

  // Fallback for flushed or other variants that don't match the pattern
  return '';
};

// Derived Classes (Contract -> JIT)
export const variantClasses = {
  outline: createVariantClasses(variants.outline),
  filled: createVariantClasses(variants.filled),
  flushed: [
    tw('bg', variants.flushed.backgroundColor),
    'border-b',
    tw('border-b', variants.flushed.borderBottomColor),
    'rounded-none px-0',
    tw('text', variants.flushed.color),
    `placeholder:${tw('text', variants.flushed.placeholderColor)}`,
    `hover:${tw('border-b', variants.flushed.hover.borderBottomColor)}`,
    `focus:${tw('border-b', variants.flushed.focus.borderBottomColor)}`,
    'focus:ring-0 focus:outline-none'
  ].join(' '),
};

export const errorClasses = {
  outline: `!${tw('border', variants.outline.invalid.borderColor)} !${tw('ring', variants.outline.invalid.ringColor)}`,
  filled: `!${tw('border', variants.filled.invalid.borderColor)} !${tw('ring', variants.filled.invalid.ringColor)}`,
  flushed: `!${tw('border-b', variants.flushed.invalid.borderBottomColor)}`,
};

export const sizeClasses = {
  sm: [
    getSizeClass(sizes.sm.height, 'h'),
    getSizeClass(sizes.sm.paddingX, 'px'),
    getSizeClass(sizes.sm.fontSize, 'text')
  ].join(' '),
  md: [
    getSizeClass(sizes.md.height, 'h'),
    getSizeClass(sizes.md.paddingX, 'px'),
    getSizeClass(sizes.md.fontSize, 'text')
  ].join(' '),
  lg: [
    getSizeClass(sizes.lg.height, 'h'),
    getSizeClass(sizes.lg.paddingX, 'px'),
    getSizeClass(sizes.lg.fontSize, 'text')
  ].join(' '),
};

// Icon Classes
export const iconClasses = {
  paddingLeft: paddingMap[icons.padding] ? `pl-${paddingMap[icons.padding]}` : tw('pl', icons.padding),
  paddingRight: paddingMap[icons.padding] ? `pr-${paddingMap[icons.padding]}` : tw('pr', icons.padding),
  wrapperLeft: `[&_.input-icon-left]:absolute [&_.input-icon-left]:left-3 [&_.input-icon-left]:z-10 [&_.input-icon-left]:${tw('text', icons.color)}`,
  wrapperRight: `[&_.input-icon-right]:absolute [&_.input-icon-right]:right-3 [&_.input-icon-right]:z-10 [&_.input-icon-right]:${tw('text', icons.color)}`,
};

// Base styles (Wrapper)
export const wrapperBase = 'relative inline-flex items-center w-full';

// Input Element Base Styles
export const inputBase = [
  'w-full min-w-0 outline-none',
  `[transition:${sanitize(base.transition)}]`,
  tw('rounded', base.borderRadius),
  `disabled:${opacityMap[disabled.opacity] || tw('opacity', disabled.opacity)}`,
  'disabled:cursor-not-allowed',
  `disabled:${tw('bg', disabled.backgroundColor)}`
].join(' ');
