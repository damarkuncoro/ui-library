import { forwardRef, CSSProperties, useState, useMemo } from 'react';
import { ButtonContract } from './button-contract';
import { ButtonBase } from './button-base';
import { buttonSkinContractDef } from './button-skin-contract';

// --- FRAMEWORK AGNOSTIC SKIN ---
// This implementation uses standard React `style` objects (CSS-in-JS lite).
// It proves that `ButtonBase` is NOT coupled to Tailwind.
// You can replace this with Styled-Components, Emotion, Stitches, or Vanilla CSS Modules.
//
// Styles are derived from the skin contract to ensure consistency across all implementations.

const baseStyles: CSSProperties = buttonSkinContractDef.base;

const disabledStyles: CSSProperties = buttonSkinContractDef.disabled;

const variantStyles: Record<string, CSSProperties> = {
  primary: {
    backgroundColor: buttonSkinContractDef.variants.primary.backgroundColor,
    color: buttonSkinContractDef.variants.primary.color,
  },
  secondary: {
    backgroundColor: buttonSkinContractDef.variants.secondary.backgroundColor,
    color: buttonSkinContractDef.variants.secondary.color,
  },
  outline: {
    backgroundColor: buttonSkinContractDef.variants.outline.backgroundColor,
    borderColor: buttonSkinContractDef.variants.outline.borderColor,
    color: buttonSkinContractDef.variants.outline.color,
  },
  ghost: {
    backgroundColor: buttonSkinContractDef.variants.ghost.backgroundColor,
    color: buttonSkinContractDef.variants.ghost.color,
  },
  danger: {
    backgroundColor: buttonSkinContractDef.variants.danger.backgroundColor,
    color: buttonSkinContractDef.variants.danger.color,
  },
};

const hoverStyles: Record<string, CSSProperties> = {
  primary: {
    backgroundColor: buttonSkinContractDef.variants.primary.hover.backgroundColor,
  },
  secondary: {
    backgroundColor: buttonSkinContractDef.variants.secondary.hover.backgroundColor,
  },
  outline: {
    backgroundColor: buttonSkinContractDef.variants.outline.hover.backgroundColor,
  },
  ghost: {
    backgroundColor: buttonSkinContractDef.variants.ghost.hover.backgroundColor,
  },
  danger: {
    backgroundColor: buttonSkinContractDef.variants.danger.hover.backgroundColor,
  },
};

const focusStyles: Record<string, CSSProperties> = {
  primary: {
    outline: buttonSkinContractDef.variants.primary.focus.outline,
    outlineOffset: buttonSkinContractDef.variants.primary.focus.outlineOffset,
  },
  secondary: {
    outline: buttonSkinContractDef.variants.secondary.focus.outline,
    outlineOffset: buttonSkinContractDef.variants.secondary.focus.outlineOffset,
  },
  outline: {
    outline: buttonSkinContractDef.variants.outline.focus.outline,
    outlineOffset: buttonSkinContractDef.variants.outline.focus.outlineOffset,
  },
  ghost: {
    outline: buttonSkinContractDef.variants.ghost.focus.outline,
    outlineOffset: buttonSkinContractDef.variants.ghost.focus.outlineOffset,
  },
  danger: {
    outline: buttonSkinContractDef.variants.danger.focus.outline,
    outlineOffset: buttonSkinContractDef.variants.danger.focus.outlineOffset,
  },
};

const sizeStyles: Record<string, CSSProperties> = {
  sm: {
    height: buttonSkinContractDef.sizes.sm.height,
    paddingLeft: buttonSkinContractDef.sizes.sm.paddingX,
    paddingRight: buttonSkinContractDef.sizes.sm.paddingX,
    fontSize: buttonSkinContractDef.sizes.sm.fontSize,
  },
  md: {
    height: buttonSkinContractDef.sizes.md.height,
    paddingLeft: buttonSkinContractDef.sizes.md.paddingX,
    paddingRight: buttonSkinContractDef.sizes.md.paddingX,
    fontSize: buttonSkinContractDef.sizes.md.fontSize,
  },
  lg: {
    height: buttonSkinContractDef.sizes.lg.height,
    paddingLeft: buttonSkinContractDef.sizes.lg.paddingX,
    paddingRight: buttonSkinContractDef.sizes.lg.paddingX,
    fontSize: buttonSkinContractDef.sizes.lg.fontSize,
  },
};

export const ButtonNative = forwardRef<HTMLButtonElement, ButtonContract>(
  (
    {
      variant = 'primary',
      size = 'md',
      disabled,
      isLoading,
      style,
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    // State management for hover and focus
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    // Determine if button should be disabled
    const isDisabled = disabled || isLoading;

    // Event handlers
    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled) {
        setIsHovered(true);
      }
      onMouseEnter?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsHovered(false);
      onMouseLeave?.(e);
    };

    const handleFocus = (e: React.FocusEvent<HTMLButtonElement>) => {
      if (!isDisabled) {
        setIsFocused(true);
      }
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    // Merge styles: Base + Variant + Size + Hover + Focus + Disabled + User Overrides
    const combinedStyle: CSSProperties = useMemo(() => ({
      ...baseStyles,
      ...(variantStyles[variant] || variantStyles.primary),
      ...(sizeStyles[size] || sizeStyles.md),
      ...(isHovered && !isDisabled ? hoverStyles[variant] || hoverStyles.primary : {}),
      ...(isFocused && !isDisabled ? focusStyles[variant] || focusStyles.primary : {}),
      ...(isDisabled ? disabledStyles : {}),
      ...style, // Allow user overrides
    }), [variant, size, isHovered, isFocused, isDisabled, style]);

    return (
      <ButtonBase
        ref={ref}
        style={combinedStyle}
        // No className passed here, purely style-driven
        variant={variant}
        size={size}
        disabled={disabled}
        isLoading={isLoading}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    );
  }
);

ButtonNative.displayName = 'ButtonNative';
