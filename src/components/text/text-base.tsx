import { forwardRef } from 'react';
import { TextContract } from './text-contract';

export const TextBase = forwardRef<HTMLElement, TextContract>(
  ({ as: Component = 'p', children, ...props }, ref) => {
    return (
      <Component ref={ref as any} {...props}>
        {children}
      </Component>
    );
  }
);

TextBase.displayName = 'TextBase';
