import { forwardRef } from 'react';
import { ButtonContract } from '../contracts/button-contract';
import { buttonSkinContractDef } from '../contracts/button-skin-contract';

/**
 * Base UI implementation for Button.
 * Adheres to Meta Architecture: Base UI -> UI Contract.
 * Responsible for:
 * - DOM Structure
 * - Accessibility (ARIA)
 * - Logic (Loading state, Icon placement)
 * - Forwarding Refs
 * - No styling dependencies (Tailwind is not imported here)
 */
export const ButtonBase = forwardRef<HTMLButtonElement, ButtonContract>(
  (
    {
      children,
      disabled,
      isLoading,
      leftIcon,
      rightIcon,
      type = 'button',
      className,
      ...props
    },
    ref
  ) => {
    // Determine if button should be disabled
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={isLoading}
        className={className}
        {...props}
      >
        {isLoading && (
          <span className="button-loader-wrapper" aria-hidden="true">
            {/* Slot for loader, styled by Skin */}
            <span className="button-loader" />
          </span>
        )}
        
        {!isLoading && leftIcon && (
          <span
            className="button-icon-left"
            aria-hidden={buttonSkinContractDef.icons.ariaHidden}
          >
            {leftIcon}
          </span>
        )}

        <span className="button-content">{children}</span>

        {!isLoading && rightIcon && (
          <span
            className="button-icon-right"
            aria-hidden={buttonSkinContractDef.icons.ariaHidden}
          >
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

ButtonBase.displayName = 'ButtonBase';
