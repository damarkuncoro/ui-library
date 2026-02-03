import { forwardRef } from 'react';
import { InputContract } from './input-contract';
import { inputSkinContractDef } from './input-skin-contract';

export interface InputBaseProps extends InputContract {}

export const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  (
    {
      className = '',
      inputClassName = '',
      wrapperStyle,
      variant = 'outline',
      size = 'md',
      isInvalid = false,
      disabled = false,
      readOnly = false,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {

    // Handle keyboard events for accessibility
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (disabled || readOnly) return;
      
      // Call any existing onKeyDown handler
      props.onKeyDown?.(event);
    };

    return (
      <div
        className={`input-wrapper ${className}`}
        style={wrapperStyle}
        data-variant={variant}
        data-size={size}
      >
        {leftIcon && (
          <div
            className="input-icon-left"
            aria-hidden={inputSkinContractDef.icons.ariaHidden}
          >
            {leftIcon}
          </div>
        )}
        
        <input
          ref={ref}
          className={`input-element ${inputClassName}`}
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={isInvalid}
          aria-disabled={disabled}
          aria-readonly={readOnly}
          onKeyDown={handleKeyDown}
          {...props}
        />
        
        {rightIcon && (
          <div
            className="input-icon-right"
            aria-hidden={inputSkinContractDef.icons.ariaHidden}
          >
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);

InputBase.displayName = 'InputBase';
