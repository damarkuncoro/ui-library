import { forwardRef, useMemo } from 'react';
import { InputBase, InputBaseProps } from '../base/input-base';
import { inputSkinContractDef } from '../contracts/input-skin-contract';
import { tw } from '../../../utils/tailwind/helpers';
import { cn } from '../../../styling-constitution-engine/react';
import { 
  variantClasses, 
  errorClasses, 
  sizeClasses, 
  inputBase, 
  wrapperBase 
} from './input-skin-classes';

// Helper to access contract values
const { icons } = inputSkinContractDef;

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
    const finalInputClasses = useMemo(() => cn(
      inputBase,
      variantClass,
      invalidClass,
      sizeClass,
      // Icon Padding
      leftIcon ? tw('pl', icons.padding) : '',
      rightIcon ? tw('pr', icons.padding) : '',
      inputClassName
    ), [variantClass, invalidClass, sizeClass, leftIcon, rightIcon, inputClassName]);

    // 4. Compose Wrapper Class with memoization
    const finalWrapperClasses = useMemo(() => cn(
      wrapperBase,
      className,
      // Icon positioning
      `[&_.input-icon-left]:absolute [&_.input-icon-left]:${tw('left', icons.position)} [&_.input-icon-left]:z-10 [&_.input-icon-left]:${tw('text', icons.color)} [&_.input-icon-left]:aria-hidden=true`,
      `[&_.input-icon-right]:absolute [&_.input-icon-right]:${tw('right', icons.position)} [&_.input-icon-right]:z-10 [&_.input-icon-right]:${tw('text', icons.color)} [&_.input-icon-right]:aria-hidden=true`
    ), [className]);

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
