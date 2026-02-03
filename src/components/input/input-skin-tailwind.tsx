import { forwardRef, useMemo } from 'react';
import { InputBase, InputBaseProps } from './input-base';
import { inputSkinContractDef } from './input-skin-contract';
import { tokens } from '../../theme/design-tokens';
import { sanitize } from '../../utils/tailwind/helpers';

// Helper to access contract values
const { variants, sizes, base, disabled, icons } = inputSkinContractDef;

// Helper to construct arbitrary values without confusing Tailwind scanner
const tw = (prefix: string, val: string | number) => `${prefix}-[${sanitize(val)}]`;

// Derived Classes (Contract -> JIT)
export const variantClasses = {
  outline: [
    tw('bg', variants.outline.backgroundColor),
    'border',
    tw('border', variants.outline.borderColor),
    tw('text', variants.outline.color),
    `placeholder:${tw('text', variants.outline.placeholderColor)}`,
    `hover:${tw('border', variants.outline.hover.borderColor)}`,
    `focus:${tw('border', variants.outline.focus.borderColor)}`,
    `focus:${tw('ring', tokens.ui.outlineWidth)}`,
    `focus:${tw('ring', variants.outline.focus.ringColor)}`
  ].join(' '),
  filled: [
    tw('bg', variants.filled.backgroundColor),
    'border',
    tw('border', variants.filled.borderColor),
    tw('text', variants.filled.color),
    `placeholder:${tw('text', variants.filled.placeholderColor)}`,
    `hover:${tw('bg', variants.filled.hover.backgroundColor)}`,
    `focus:${tw('bg', variants.filled.focus.backgroundColor)}`,
    `focus:${tw('border', variants.filled.focus.borderColor)}`,
    `focus:${tw('ring', tokens.ui.outlineWidth)}`,
    `focus:${tw('ring', variants.filled.focus.ringColor)}`
  ].join(' '),
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
  sm: [tw('h', sizes.sm.height), tw('p', sizes.sm.padding), tw('text', sizes.sm.fontSize)].join(' '),
  md: [tw('h', sizes.md.height), tw('p', sizes.md.padding), tw('text', sizes.md.fontSize)].join(' '),
  lg: [tw('h', sizes.lg.height), tw('p', sizes.lg.padding), tw('text', sizes.lg.fontSize)].join(' '),
};

// Base styles (Wrapper)
const wrapperBase = 'relative inline-flex items-center w-full';

// Input Element Base Styles
const inputBase = [
  'w-full min-w-0 outline-none',
  `[transition:${sanitize(base.transition)}]`,
  tw('rounded', base.borderRadius),
  `disabled:${tw('opacity', disabled.opacity)}`,
  `disabled:${tw('cursor', disabled.cursor)}`,
  `disabled:${tw('bg', disabled.backgroundColor)}`
].join(' ');

export const InputTailwind = forwardRef<HTMLInputElement, InputBaseProps>(
  (
    {
      variant = 'outline',
      size = 'md',
      isInvalid = false,
      disabled = false,
      readOnly = false,
      className = '',
      inputClassName = '',
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    // 1. Resolve Variant Class
    const variantClass = variantClasses[variant] || variantClasses.outline;
    const invalidClass = isInvalid ? (errorClasses[variant] || errorClasses.outline) : '';
    
    // 2. Resolve Size Class
    const sizeClass = sizeClasses[size] || sizeClasses.md;

    // 3. Compose Input Element Class with memoization
    const finalInputClasses = useMemo(() => [
      inputBase,
      variantClass,
      invalidClass,
      sizeClass,
      // Icon Padding
      leftIcon ? tw('pl', icons.padding) : '',
      rightIcon ? tw('pr', icons.padding) : '',
      inputClassName
    ].filter(Boolean).join(' '), [variantClass, invalidClass, sizeClass, leftIcon, rightIcon, inputClassName]);

    // 4. Compose Wrapper Class with memoization
    const finalWrapperClasses = useMemo(() => [
      wrapperBase,
      className,
      // Icon positioning
      `[&_.input-icon-left]:absolute [&_.input-icon-left]:${tw('left', icons.position)} [&_.input-icon-left]:z-10 [&_.input-icon-left]:${tw('text', icons.color)} [&_.input-icon-left]:aria-hidden=true`,
      `[&_.input-icon-right]:absolute [&_.input-icon-right]:${tw('right', icons.position)} [&_.input-icon-right]:z-10 [&_.input-icon-right]:${tw('text', icons.color)} [&_.input-icon-right]:aria-hidden=true`,
    ].filter(Boolean).join(' '), [className]);

    return (
      <InputBase
        ref={ref}
        className={finalWrapperClasses}
        inputClassName={finalInputClasses}
        variant={variant}
        size={size}
        isInvalid={isInvalid}
        disabled={disabled}
        readOnly={readOnly}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        {...props}
      />
    );
  }
);

InputTailwind.displayName = 'InputTailwind';
