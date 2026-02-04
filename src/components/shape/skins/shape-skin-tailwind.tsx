import { forwardRef, useMemo } from 'react';
import { ShapeContract } from '../contracts/shape-contract';
import { shapeSkinContractDef } from '../contracts/shape-skin-contract';
import { tw } from '../../../utils/tailwind/helpers';
import { tokens } from '../../../theme/core/design-tokens';
import { cn } from '../../../styling-constitution-engine/react';
import { ShapeBase } from '../base/shape-base';
import { variantClasses, sizeClasses } from './shape-skin-classes';

const { variants } = shapeSkinContractDef;

export const ShapeSkinTailwind = forwardRef<HTMLDivElement, ShapeContract>((props, ref) => {
  const {
    variant = 'box',
    size = 'md',
    className = '',
    children,
    style,
    ...rest
  } = props;

  const classes = useMemo(() => {
    // 1. Get Base Classes
    const variantClass = variantClasses[variant] || variantClasses.box;
    
    // 2. Determine if we should enforce Aspect Ratio (exclude fixed height)
    // Check if the current variant has an aspectRatio defined in contract
    const variantDef = variants[variant as keyof typeof variants];
    const hasAspectRatio = variantDef && 'aspectRatio' in variantDef;
    
    const sizeGroup = sizeClasses[size] || sizeClasses.md;
    const sizeClass = hasAspectRatio ? sizeGroup.aspect : sizeGroup.default;

    return cn(
      'inline-flex',
      'items-center',
      'justify-center',
      'overflow-hidden',
      'border',
      // Use arbitrary values for tokens to ensure they are picked up by JIT
      tw('bg', tokens.colors.secondary.main),
      tw('border', tokens.colors.neutral.border),
      variantClass,
      sizeClass,
      className
    );
  }, [variant, size, className]);

  return (
    <ShapeBase ref={ref} className={classes} style={style} {...rest}>
      {children}
    </ShapeBase>
  );
});

ShapeSkinTailwind.displayName = 'ShapeSkinTailwind';
