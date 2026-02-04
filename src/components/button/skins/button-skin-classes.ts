import { buttonSkinContractDef } from '../contracts/button-skin-contract';
import { tokens } from '../../../theme/design-tokens';
import { sanitize, tw } from '../../../utils/tailwind/helpers';

// Helper to access contract values
const { variants, sizes, base, disabled, icons, loader } = buttonSkinContractDef;

// Helper to generate variant classes (DRY)
type ButtonVariant = typeof variants[keyof typeof variants];

const createVariantClasses = (variant: ButtonVariant) => {
  const classes = [
    tw('bg', variant.backgroundColor),
    tw('text', variant.color),
    `hover:${tw('bg', variant.hover.backgroundColor)}`,
    `focus:${tw('ring', variant.focus.ringColor)}`,
    `focus:${tw('ring', tokens.ui.outlineWidth)}`,
    `focus:${tw('ring-offset', variant.focus.outlineOffset)}`
  ];

  if ('borderColor' in variant) {
    classes.unshift('border', tw('border', variant.borderColor));
  }

  return classes.join(' ');
};

// Export styles for testing consistency
export const variantClasses = {
  primary: createVariantClasses(variants.primary),
  secondary: createVariantClasses(variants.secondary),
  outline: createVariantClasses(variants.outline),
  ghost: createVariantClasses(variants.ghost),
  danger: createVariantClasses(variants.danger),
};

const heightMap: Record<string, string> = {
  [tokens.sizing[10]]: 'h-10',
  [tokens.sizing[12]]: 'h-12',
  [tokens.sizing[14]]: 'h-14',
};

const paddingMap: Record<string, string> = {
  [tokens.spacing[4]]: 'px-4',
  [tokens.spacing[6]]: 'px-6',
  [tokens.spacing[8]]: 'px-8',
};

const fontMap: Record<string, string> = {
  [tokens.typography.fontSize.sm]: 'text-sm',
  [tokens.typography.fontSize.base]: 'text-base',
  [tokens.typography.fontSize.lg]: 'text-lg',
};

const getSizeClass = (val: string, type: 'h' | 'px' | 'text') => {
  if (type === 'h') return heightMap[val] || tw('h', val);
  if (type === 'px') return paddingMap[val] || tw('px', val);
  if (type === 'text') return fontMap[val] || tw('text', val);
  return '';
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

// Base layout and interaction styles
const layoutClasses = [
  'inline-flex items-center justify-center',
  tw('rounded', base.borderRadius),
  tw('font', base.fontWeight),
  `[transition:${sanitize(base.transition)}]`
].join(' ');

const stateClasses = [
  'focus:outline-none',
  `disabled:${tw('opacity', disabled.opacity)}`,
  `disabled:cursor-${disabled.cursor}`
].join(' ');

// Maps for contract values to standard utilities to avoid arbitrary values (SCE compliance)
const loaderSizeMap: Record<string, string> = {
  [tokens.sizing.icon.xs]: 'h-3 w-3',
  [tokens.sizing.icon.sm]: 'h-3.5 w-3.5',
  [tokens.sizing.icon.md]: 'h-4 w-4',
  [tokens.sizing.icon.lg]: 'h-5 w-5',
  [tokens.sizing.icon.xl]: 'h-6 w-6',
};

const loaderBorderMap: Record<string, string> = {
  '1px': 'border',
  '2px': 'border-2',
  '4px': 'border-4',
};

const loaderSizeClass = loaderSizeMap[loader.size] || `${tw('h', loader.size)} ${tw('w', loader.size)}`;
const loaderBorderClass = loaderBorderMap[loader.borderWidth] || tw('border', loader.borderWidth);

// Child element styles (Loader & Icons) using arbitrary groups
const childClasses = [
  `[&_.button-icon-left]:${tw('mr', icons.rightSpacing)}`,
  `[&_.button-icon-right]:${tw('ml', icons.leftSpacing)}`,
  '[&_.button-loader]:animate-spin',
  `[&_.button-loader]:${loaderBorderClass}`,
  '[&_.button-loader]:border-current',
  '[&_.button-loader]:border-t-transparent',
  '[&_.button-loader]:rounded-full',
  `[&_.button-loader]:${loaderSizeClass}`,
].join(' ');

export const baseClasses = `${layoutClasses} ${stateClasses} ${childClasses}`;
