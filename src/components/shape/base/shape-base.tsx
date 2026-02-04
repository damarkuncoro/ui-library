import { forwardRef } from 'react';
import { ShapeContract } from '../contracts/shape-contract';
import { ShapeSkinTailwind } from '../skins/shape-skin-tailwind';

export const Shape = forwardRef<HTMLDivElement, ShapeContract>((props, ref) => {
  return <ShapeSkinTailwind {...props} ref={ref} />;
});

Shape.displayName = 'Shape';
