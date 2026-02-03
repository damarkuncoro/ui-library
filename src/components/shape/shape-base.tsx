import { forwardRef } from 'react';
import { ShapeContract } from './shape-contract';
import { ShapeSkinTailwind } from './shape-skin-tailwind';

export const Shape = forwardRef<HTMLDivElement, ShapeContract>((props, ref) => {
  return <ShapeSkinTailwind {...props} ref={ref} />;
});

Shape.displayName = 'Shape';
