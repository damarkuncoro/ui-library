import { forwardRef, useMemo } from 'react';
import { ButtonContract } from './button-contract';
import { ButtonBase } from './button-base';
import { buttonSkinContractDef } from './button-skin-contract';
import { tokens } from '../../theme/design-tokens';

// Helper to access contract values
const { variants, sizes, base, disabled, icons, loader } = buttonSkinContractDef;

// Export styles for testing consistency
// These classes use JIT Arbitrary Values injected directly from the contract.
// This ensures STRICT VISUAL CONSISTENCY without manual mapping.
export const variantClasses = {
  primary: `bg-[${variants.primary.backgroundColor}] text-[${variants.primary.color}] hover:bg-[${variants.primary.hover.backgroundColor}] focus:ring-[${variants.primary.focus.ringColor}] focus:ring-[${tokens.ui.outlineWidth}] focus:ring-offset-[${variants.primary.focus.outlineOffset}]`,
  secondary: `bg-[${variants.secondary.backgroundColor}] text-[${variants.secondary.color}] hover:bg-[${variants.secondary.hover.backgroundColor}] focus:ring-[${variants.secondary.focus.ringColor}] focus:ring-[${tokens.ui.outlineWidth}] focus:ring-offset-[${variants.secondary.focus.outlineOffset}]`,
  outline: `border border-[${variants.outline.borderColor}] bg-[${variants.outline.backgroundColor}] text-[${variants.outline.color}] hover:bg-[${variants.outline.hover.backgroundColor}] focus:ring-[${variants.outline.focus.ringColor}] focus:ring-[${tokens.ui.outlineWidth}] focus:ring-offset-[${variants.outline.focus.outlineOffset}]`,
  ghost: `bg-[${variants.ghost.backgroundColor}] text-[${variants.ghost.color}] hover:bg-[${variants.ghost.hover.backgroundColor}] focus:ring-[${variants.ghost.focus.ringColor}] focus:ring-[${tokens.ui.outlineWidth}] focus:ring-offset-[${variants.ghost.focus.outlineOffset}]`,
  danger: `bg-[${variants.danger.backgroundColor}] text-[${variants.danger.color}] hover:bg-[${variants.danger.hover.backgroundColor}] focus:ring-[${variants.danger.focus.ringColor}] focus:ring-[${tokens.ui.outlineWidth}] focus:ring-offset-[${variants.danger.focus.outlineOffset}]`,
};

export const sizeClasses = {
  sm: `h-[${sizes.sm.height}] [padding:${sizes.sm.padding.replace(/ /g, '_')}] text-[${sizes.sm.fontSize}]`,
  md: `h-[${sizes.md.height}] [padding:${sizes.md.padding.replace(/ /g, '_')}] text-[${sizes.md.fontSize}]`,
  lg: `h-[${sizes.lg.height}] [padding:${sizes.lg.padding.replace(/ /g, '_')}] text-[${sizes.lg.fontSize}]`,
};

// Base layout and interaction styles
// Using arbitrary properties to strictly follow contract
const layoutClasses = `inline-flex items-center justify-center rounded-[${base.borderRadius}] font-[${base.fontWeight}] [transition:${base.transition.replace(/ /g, '_')}]`;
const stateClasses = `focus:outline-none disabled:opacity-[${disabled.opacity}] disabled:cursor-[${disabled.cursor}]`;

// Child element styles (Loader & Icons) using arbitrary groups
// These align with contract.loader specifications (size, border)
const childClasses = [
  `[&_.button-icon-left]:mr-[${icons.rightSpacing}]`,
  `[&_.button-icon-right]:ml-[${icons.leftSpacing}]`,
  '[&_.button-loader]:animate-spin',
  `[&_.button-loader]:border-[${loader.borderWidth}]`,
  '[&_.button-loader]:border-current',
  '[&_.button-loader]:border-t-transparent',
  '[&_.button-loader]:rounded-full',
  `[&_.button-loader]:h-[${loader.size}]`,
  `[&_.button-loader]:w-[${loader.size}]`,
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
