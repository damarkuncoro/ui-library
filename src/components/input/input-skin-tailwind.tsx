import { forwardRef, useMemo } from 'react';
import { InputBase, InputBaseProps } from './input-base';
import { inputSkinContractDef } from './input-skin-contract';
import { tokens } from '../../theme/design-tokens';

// Helper to access contract values
const { variants, sizes, base, disabled, icons } = inputSkinContractDef;

// Derived Classes (Contract -> JIT)
export const variantClasses = {
  outline: `bg-[${variants.outline.backgroundColor}] border border-[${variants.outline.borderColor}] text-[${variants.outline.color}] placeholder:text-[${variants.outline.placeholderColor}] hover:border-[${variants.outline.hover.borderColor}] focus:border-[${variants.outline.focus.borderColor}] focus:ring-[${tokens.ui.outlineWidth}] focus:ring-[${variants.outline.focus.ringColor}]`,
  filled: `bg-[${variants.filled.backgroundColor}] border border-[${variants.filled.borderColor}] text-[${variants.filled.color}] placeholder:text-[${variants.filled.placeholderColor}] hover:bg-[${variants.filled.hover.backgroundColor}] focus:bg-[${variants.filled.focus.backgroundColor}] focus:border-[${variants.filled.focus.borderColor}] focus:ring-[${tokens.ui.outlineWidth}] focus:ring-[${variants.filled.focus.ringColor}]`,
  flushed: `bg-[${variants.flushed.backgroundColor}] border-b border-[${variants.flushed.borderBottomColor}] rounded-none px-0 text-[${variants.flushed.color}] placeholder:text-[${variants.flushed.placeholderColor}] hover:border-b-[${variants.flushed.hover.borderBottomColor}] focus:border-b-[${variants.flushed.focus.borderBottomColor}] focus:ring-0 focus:outline-none`,
};

export const errorClasses = {
  outline: `!border-[${variants.outline.invalid.borderColor}] !ring-[${variants.outline.invalid.ringColor}]`,
  filled: `!border-[${variants.filled.invalid.borderColor}] !ring-[${variants.filled.invalid.ringColor}]`,
  flushed: `!border-[${variants.flushed.invalid.borderBottomColor}]`,
};

export const sizeClasses = {
  sm: `h-[${sizes.sm.height}] px-[${tokens.spacing[3]}] text-[${sizes.sm.fontSize}]`,
  md: `h-[${sizes.md.height}] px-[${tokens.spacing[4]}] text-[${sizes.md.fontSize}]`,
  lg: `h-[${sizes.lg.height}] px-[${tokens.spacing[6]}] text-[${sizes.lg.fontSize}]`,
};

// Base styles (Wrapper)
const wrapperBase = 'relative inline-flex items-center w-full';

// Input Element Base Styles
const inputBase = `w-full min-w-0 outline-none [transition:${base.transition.replace(/ /g, '_')}] rounded-[${base.borderRadius}] disabled:opacity-[${disabled.opacity}] disabled:cursor-[${disabled.cursor}] disabled:bg-[${disabled.backgroundColor}]`;

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
      leftIcon ? `pl-[${icons.padding}]` : '',
      rightIcon ? `pr-[${icons.padding}]` : '',
      inputClassName
    ].filter(Boolean).join(' '), [variantClass, invalidClass, sizeClass, leftIcon, rightIcon, inputClassName]);

    // 4. Compose Wrapper Class with memoization
    const finalWrapperClasses = useMemo(() => [
      wrapperBase,
      className,
      // Icon positioning
      `[&_.input-icon-left]:absolute [&_.input-icon-left]:left-[${icons.position}] [&_.input-icon-left]:z-10 [&_.input-icon-left]:text-[${icons.color}] [&_.input-icon-left]:aria-hidden=true`,
      `[&_.input-icon-right]:absolute [&_.input-icon-right]:right-[${icons.position}] [&_.input-icon-right]:z-10 [&_.input-icon-right]:text-[${icons.color}] [&_.input-icon-right]:aria-hidden=true`,
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
