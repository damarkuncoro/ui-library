import { forwardRef, useMemo } from 'react';
import { ShapeContract } from '../contracts/shape-contract';
import { shapeSkinContractDef } from '../contracts/shape-skin-contract';
import { tw } from '../../../utils/tailwind/helpers';
import { tokens } from '../../../theme/design-tokens';

const { variants, sizes } = shapeSkinContractDef;

// Helper to generate variant classes dynamically from Contract
// This ensures strict adherence to shape-skin-contract.ts
type ShapeVariantDef = typeof variants[keyof typeof variants];

const createVariantClasses = (variant: ShapeVariantDef) => {
  const classes: string[] = [];
  
  if (variant.borderRadius) {
    classes.push(tw('rounded', variant.borderRadius));
  }
  
  if ('aspectRatio' in variant && variant.aspectRatio) {
    classes.push(tw('aspect', variant.aspectRatio));
  }

  return classes.join(' ');
};

type ShapeSizeDef = typeof sizes[keyof typeof sizes];

const createSizeClasses = (size: ShapeSizeDef, excludeHeight = false) => {
  const classes: string[] = [];

  if (size.width) classes.push(tw('w', size.width));
  if (!excludeHeight && size.height) classes.push(tw('h', size.height));
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
  sm: {
    default: createSizeClasses(sizes.sm),
    aspect: createSizeClasses(sizes.sm, true),
  },
  md: {
    default: createSizeClasses(sizes.md),
    aspect: createSizeClasses(sizes.md, true),
  },
  lg: {
    default: createSizeClasses(sizes.lg),
    aspect: createSizeClasses(sizes.lg, true),
  },
  xl: {
    default: createSizeClasses(sizes.xl),
    aspect: createSizeClasses(sizes.xl, true),
  },
  full: {
    default: createSizeClasses(sizes.full),
    aspect: createSizeClasses(sizes.full, true),
  },
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
    
    // 2. Determine if we should enforce Aspect Ratio (exclude fixed height)
    // Check if the current variant has an aspectRatio defined in contract
    const variantDef = variants[variant as keyof typeof variants];
    const hasAspectRatio = variantDef && 'aspectRatio' in variantDef;
    
    const sizeGroup = sizeClasses[size] || sizeClasses.md;
    const sizeClass = hasAspectRatio ? sizeGroup.aspect : sizeGroup.default;

    const classList = [
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
