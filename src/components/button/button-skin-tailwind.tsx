import { forwardRef, useMemo } from 'react';
import { ButtonContract } from './button-contract';
import { ButtonBase } from './button-base';
import { buttonSkinContractDef } from './button-skin-contract';
import { tokens } from '../../theme/design-tokens';
import { sanitize } from '../../utils/tailwind/helpers';

// Helper to access contract values
const { variants, sizes, base, disabled, icons, loader } = buttonSkinContractDef;

// Helper to construct arbitrary values without confusing Tailwind scanner
const tw = (prefix: string, val: string | number) => `${prefix}-[${sanitize(val)}]`;

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
    classes.unshift('border', tw('border', (variant as any).borderColor));
  }

  return classes.join(' ');
};

// Export styles for testing consistency
// These classes use JIT Arbitrary Values injected directly from the contract.
// This ensures STRICT VISUAL CONSISTENCY without manual mapping.
export const variantClasses = {
  primary: createVariantClasses(variants.primary),
  secondary: createVariantClasses(variants.secondary),
  outline: createVariantClasses(variants.outline),
  ghost: createVariantClasses(variants.ghost),
  danger: createVariantClasses(variants.danger),
};

export const sizeClasses = {
  sm: [tw('h', sizes.sm.height), tw('p', sizes.sm.padding), tw('text', sizes.sm.fontSize)].join(' '),
  md: [tw('h', sizes.md.height), tw('p', sizes.md.padding), tw('text', sizes.md.fontSize)].join(' '),
  lg: [tw('h', sizes.lg.height), tw('p', sizes.lg.padding), tw('text', sizes.lg.fontSize)].join(' '),
};

// Base layout and interaction styles
// Using arbitrary properties to strictly follow contract
const layoutClasses = [
  'inline-flex items-center justify-center',
  tw('rounded', base.borderRadius),
  tw('font', base.fontWeight),
  `[transition:${sanitize(base.transition)}]`
].join(' ');

const stateClasses = [
  'focus:outline-none',
  `disabled:${tw('opacity', disabled.opacity)}`,
  `disabled:${tw('cursor', disabled.cursor)}`
].join(' ');

// Child element styles (Loader & Icons) using arbitrary groups
// These align with contract.loader specifications (size, border)
const childClasses = [
  `[&_.button-icon-left]:${tw('mr', icons.rightSpacing)}`,
  `[&_.button-icon-right]:${tw('ml', icons.leftSpacing)}`,
  '[&_.button-loader]:animate-spin',
  `[&_.button-loader]:${tw('border', loader.borderWidth)}`,
  '[&_.button-loader]:border-current',
  '[&_.button-loader]:border-t-transparent',
  '[&_.button-loader]:rounded-full',
  `[&_.button-loader]:${tw('h', loader.size)}`,
  `[&_.button-loader]:${tw('w', loader.size)}`,
].join(' ');

const baseClasses = `${layoutClasses} ${stateClasses} ${childClasses}`;

/**
 * Skin implementation for Button.
 * Adheres to Meta Architecture: Skins -> Base UI + Tailwind + Contract.
 * Responsible for:
 * - Visual Styling (Tailwind CSS)
 * - Mapping Props to Classes
 * - Composition of Base UI
 */
export const ButtonTailwind = forwardRef<HTMLButtonElement, ButtonContract>(
  (
    {
      variant = 'primary',
      size = 'md',
      className = '',
      ...props
    },
    ref
  ) => {
    // Combine classes with memoization
    const combinedClassName = useMemo(() => [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className
    ].filter(Boolean).join(' '), [variant, size, className]);

    return (
      <ButtonBase
        ref={ref}
        className={combinedClassName}
        variant={variant}
        size={size}
        {...props}
      />
    );
  }
);

ButtonTailwind.displayName = 'ButtonTailwind';
