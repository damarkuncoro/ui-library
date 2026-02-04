import { shapeSkinContractDef } from '../contracts/shape-skin-contract';
import { tw } from '../../../utils/tailwind/helpers';

const { variants, sizes } = shapeSkinContractDef;

// Helper to generate variant classes dynamically from Contract
type ShapeVariantDef = typeof variants[keyof typeof variants];

const createVariantClasses = (variant: ShapeVariantDef) => {
  const classes: string[] = [];
  
  if (variant.borderRadius) {
    classes.push(tw('rounded', variant.borderRadius));
  }
  
  if ('aspectRatio' in variant && variant.aspectRatio) {
    if (variant.aspectRatio === '1/1') {
      classes.push('aspect-square');
    } else {
      classes.push(tw('aspect', variant.aspectRatio));
    }
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
export const variantClasses = {
  square: createVariantClasses(variants.square),
  circle: createVariantClasses(variants.circle),
  pill: createVariantClasses(variants.pill),
  box: createVariantClasses(variants.box),
};

export const sizeClasses = {
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
