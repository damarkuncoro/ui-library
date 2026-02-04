import { forwardRef, useMemo } from 'react';
import { ButtonContract } from '../contracts/button-contract';
import { ButtonBase } from '../base/button-base';
import { variantClasses, sizeClasses, baseClasses } from './button-skin-classes';
import { cn } from '../../../styling-constitution-engine/react';

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
    const combinedClassName = useMemo(() => cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className
    ), [variant, size, className]);

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
