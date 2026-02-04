import { forwardRef } from 'react';
import { StackContract } from '../contracts/stack-contract';

export const StackBase = forwardRef<HTMLElement, StackContract>(
  ({ as: Component = 'div', children, ...props }, ref) => {
    return (
      <Component ref={ref as any} {...props}>
        {children}
      </Component>
    );
  }
);

StackBase.displayName = 'StackBase';
