import { forwardRef, CSSProperties, useState, useMemo } from 'react';
import { ButtonContract } from '../contracts/button-contract';
import { ButtonBase } from '../base/button-base';
import { buttonSkinContractDef } from '../contracts/button-skin-contract';

// --- FRAMEWORK AGNOSTIC SKIN ---
// This implementation uses standard React `style` objects (CSS-in-JS lite).
// It proves that `ButtonBase` is NOT coupled to Tailwind.
// You can replace this with Styled-Components, Emotion, Stitches, or Vanilla CSS Modules.
//
// Styles are derived from the skin contract to ensure consistency across all implementations.

const baseStyles: CSSProperties = buttonSkinContractDef.base;

const disabledStyles: CSSProperties = buttonSkinContractDef.disabled;

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

const variantStyles = generateStyles(buttonSkinContractDef.variants, (def: VariantDef) => ({
  backgroundColor: def.backgroundColor,
  color: def.color,
  ...('borderColor' in def ? { borderColor: (def as any).borderColor } : {}),
}));

const hoverStyles = generateStyles(buttonSkinContractDef.variants, (def: VariantDef) => ({
  backgroundColor: def.hover.backgroundColor,
  ...('borderColor' in def.hover ? { borderColor: (def.hover as any).borderColor } : {}),
}));

const focusStyles = generateStyles(buttonSkinContractDef.variants, (def: VariantDef) => ({
  outline: def.focus.outline,
  outlineOffset: def.focus.outlineOffset,
}));

const sizeStyles = generateStyles(buttonSkinContractDef.sizes, (def: SizeDef) => ({
  height: def.height,
  paddingLeft: def.paddingX,
  paddingRight: def.paddingX,
  fontSize: def.fontSize,
}));

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
