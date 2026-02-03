import { forwardRef, CSSProperties, useState, useMemo } from 'react';
import { InputBase, InputBaseProps } from './input-base';
import { inputSkinContractDef } from './input-skin-contract';

// --- FRAMEWORK AGNOSTIC SKIN ---
// This implementation uses standard React `style` objects (CSS-in-JS lite).
// It proves that `InputBase` is NOT coupled to Tailwind.
// You can replace this with Styled-Components, Emotion, Stitches, or Vanilla CSS Modules.
//
// Styles are derived from the skin contract to ensure consistency across all implementations.

const { variants, sizes, base, disabled, icons } = inputSkinContractDef;

const baseStyles: CSSProperties = base;

const disabledStyles: CSSProperties = disabled;

const variantStyles: Record<string, CSSProperties> = {
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

const hoverStyles: Record<string, CSSProperties> = {
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

const focusStyles: Record<string, CSSProperties> = {
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

const invalidStyles: Record<string, CSSProperties> = {
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

const sizeStyles: Record<string, CSSProperties> = {
  sm: {
    height: sizes.sm.height,
    padding: sizes.sm.padding,
    fontSize: sizes.sm.fontSize,
  },
  md: {
    height: sizes.md.height,
    padding: sizes.md.padding,
    fontSize: sizes.md.fontSize,
  },
  lg: {
    height: sizes.lg.height,
    padding: sizes.lg.padding,
    fontSize: sizes.lg.fontSize,
  },
};

const wrapperStyles: CSSProperties = {
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  width: '100%',
};

export const InputNative = forwardRef<HTMLInputElement, InputBaseProps>(
  (
    {
      variant = 'outline',
      size = 'md',
      isInvalid = false,
      disabled = false,
      readOnly = false,
      leftIcon,
      rightIcon,
      className = '',
      inputClassName = '',
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

    // Event handlers
    const handleMouseEnter = (e: React.MouseEvent<HTMLInputElement>) => {
      if (!disabled && !readOnly) {
        setIsHovered(true);
      }
      onMouseEnter?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLInputElement>) => {
      setIsHovered(false);
      onMouseLeave?.(e);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (!disabled && !readOnly) {
        setIsFocused(true);
      }
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    // Calculate padding for icons
    // Note: In a real Native implementation, we would need to handle this more robustly
    // potentially by merging with size styles.
    const iconPaddingLeft = leftIcon ? icons.padding : undefined;
    const iconPaddingRight = rightIcon ? icons.padding : undefined;

    // Merge styles: Base + Variant + Size + Hover + Focus + Invalid + Disabled + User Overrides
    const combinedStyle: CSSProperties = useMemo(() => ({
      ...baseStyles,
      ...(variantStyles[variant] || variantStyles.outline),
      ...(sizeStyles[size] || sizeStyles.md),
      ...(isHovered && !disabled && !readOnly ? hoverStyles[variant] || hoverStyles.outline : {}),
      ...(isFocused && !disabled && !readOnly ? focusStyles[variant] || focusStyles.outline : {}),
      ...(isInvalid ? invalidStyles[variant] || invalidStyles.outline : {}),
      ...(disabled ? disabledStyles : {}),
      paddingLeft: iconPaddingLeft, // Override padding if icon exists
      paddingRight: iconPaddingRight, // Override padding if icon exists
      ...style, // Allow user overrides
    }), [variant, size, isHovered, isFocused, isInvalid, disabled, readOnly, iconPaddingLeft, iconPaddingRight, style]);

    return (
      <InputBase
        ref={ref}
        style={combinedStyle}
        wrapperStyle={wrapperStyles}
        variant={variant}
        size={size}
        isInvalid={isInvalid}
        disabled={disabled}
        readOnly={readOnly}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        className={className}
        inputClassName={inputClassName}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    );
  }
);

InputNative.displayName = 'InputNative';
