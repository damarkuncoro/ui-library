import { forwardRef, useMemo } from 'react';
import { ShapeContract } from './shape-contract';
import { shapeSkinContractDef } from './shape-skin-contract';
import { sanitize } from '../../utils/tailwind/helpers';
import { tokens } from '../../theme/design-tokens';

const { variants, sizes } = shapeSkinContractDef;

// Helper to construct arbitrary values without confusing Tailwind scanner
const tw = (prefix: string, val: string | number) => `${prefix}-[${sanitize(val)}]`;

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
    const variantDef = variants[variant as keyof typeof variants] || variants.box;
    const sizeDef = sizes[size as keyof typeof sizes] || sizes.md;

    const classList = [
      'inline-flex', // Default to inline-flex for shapes
      'items-center',
      'justify-center',
      'overflow-hidden',
      tw('bg', tokens.colors.secondary.main), // Use semantic token instead of raw Tailwind class
      'border',
      tw('border', tokens.colors.neutral.border),
    ];

    // Variant Styles
    if (variantDef.borderRadius) {
      classList.push(tw('rounded', variantDef.borderRadius));
    }
    
    if ('aspectRatio' in variantDef) {
      classList.push(tw('aspect', variantDef.aspectRatio as string));
    }

    // Size Styles
    if (sizeDef.width) {
      classList.push(tw('w', sizeDef.width));
    }
    
    if (sizeDef.height) {
      classList.push(tw('h', sizeDef.height));
    }
    
    if ('fontSize' in sizeDef) {
      classList.push(tw('text', sizeDef.fontSize as string));
    }

    return `${classList.join(' ')} ${className}`;
  }, [variant, size, className]);

  return (
    <div ref={ref} className={classes} style={style} {...rest}>
      {children}
    </div>
  );
});

ShapeSkinTailwind.displayName = 'ShapeSkinTailwind';
