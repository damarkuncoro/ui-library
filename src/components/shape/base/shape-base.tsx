import { forwardRef } from 'react';
import { ShapeContract } from '../contracts/shape-contract';

export const ShapeBase = forwardRef<HTMLDivElement, ShapeContract>((props, ref) => {
  const { as: Component = 'div', children, ...rest } = props as any; // Allow polymorphism if needed later, currently div
  
  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});

ShapeBase.displayName = 'ShapeBase';
