import { forwardRef, useMemo } from 'react';
import { ShapeContract } from './shape-contract';
import { shapeSkinContractDef } from './shape-skin-contract';
import { sanitize } from '../../utils/tailwind/helpers';
import { tokens } from '../../theme/design-tokens';

const { variants, sizes } = shapeSkinContractDef;

// Helper to construct arbitrary values without confusing Tailwind scanner
const tw = (prefix: string, val: string | number) => `${prefix}-[${sanitize(val)}]`;

// Helper to generate variant classes dynamically from Contract
// This ensures strict adherence to shape-skin-contract.ts
type ShapeVariantDef = typeof variants[keyof typeof variants];

const createVariantClasses = (variant: ShapeVariantDef) => {
  const classes: string[] = [];
  
  if (variant.borderRadius) {
    classes.push(`rounded-[${sanitize(variant.borderRadius)}]`);
  }
  
  if ('aspectRatio' in variant && variant.aspectRatio) {
    classes.push(`aspect-[${sanitize(variant.aspectRatio)}]`);
  }

  return classes.join(' ');
};

type ShapeSizeDef = typeof sizes[keyof typeof sizes];

const createSizeClasses = (size: ShapeSizeDef) => {
  const classes: string[] = [];

  if (size.width) classes.push(tw('w', size.width));
  if (size.height) classes.push(tw('h', size.height));
  if ('fontSize' in size && size.fontSize) {
    classes.push(tw('text', size.fontSize));
  }

  return classes.join(' ');
};

// Pre-computed class maps using the Factory Pattern
// Now, if contract changes, these maps update automatically!
const variantClasses = {
  square: createVariantClasses(variants.square),
  circle: createVariantClasses(variants.circle),
  pill: createVariantClasses(variants.pill),
  box: createVariantClasses(variants.box),
};

const sizeClasses = {
  sm: createSizeClasses(sizes.sm),
  md: createSizeClasses(sizes.md),
  lg: createSizeClasses(sizes.lg),
  xl: createSizeClasses(sizes.xl),
  full: createSizeClasses(sizes.full),
};

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
    const sizeClass = sizeClasses[size] || sizeClasses.md;

    const classList = [
      'inline-flex',
      'items-center',
      'justify-center',
      'overflow-hidden',
      'border',
      // Use arbitrary values for tokens to ensure they are picked up by JIT
      `bg-[${sanitize(tokens.colors.secondary.main)}]`,
      `border-[${sanitize(tokens.colors.neutral.border)}]`,
      variantClass,
      sizeClass,
    ];

    return `${classList.join(' ')} ${className}`;
  }, [variant, size, className]);

  return (
    <div ref={ref} className={classes} style={style} {...rest}>
      {children}
    </div>
  );
});

ShapeSkinTailwind.displayName = 'ShapeSkinTailwind';
