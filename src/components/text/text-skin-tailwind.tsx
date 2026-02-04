import { forwardRef, useMemo } from 'react';
import { TextContract, TextVariant } from './text-contract';
import { textSkinContractDef } from './text-skin-contract';
import { tw } from '../../utils/tailwind/helpers';
import { TextBase } from './text-base';

const { variants } = textSkinContractDef;

const createVariantClasses = (variant: TextVariant) => {
  const v = variants[variant];
  const classes = [
    tw('text', v.fontSize),
    tw('font', v.fontWeight),
    tw('leading', v.lineHeight),
    tw('tracking', v.letterSpacing),
  ];
  
  if ('textTransform' in v) {
    // uppercase, lowercase, capitalize are standard Tailwind utilities
    classes.push((v as any).textTransform);
  }
  
  return classes.join(' ');
};

// Pre-compute classes for performance
const variantClasses: Record<TextVariant, string> = Object.keys(variants).reduce((acc, key) => {
  acc[key as TextVariant] = createVariantClasses(key as TextVariant);
  return acc;
}, {} as Record<TextVariant, string>);

export const TextSkinTailwind = forwardRef<HTMLElement, TextContract>(
  ({ variant = 'body1', align, truncate, noWrap, className = '', ...props }, ref) => {
    
    const classes = useMemo(() => {
      const variantClass = variantClasses[variant];
      const alignClass = align ? `text-${align}` : '';
      const truncateClass = truncate ? 'truncate' : '';
      const noWrapClass = noWrap ? 'whitespace-nowrap' : '';
      
      return [variantClass, alignClass, truncateClass, noWrapClass, className]
        .filter(Boolean)
        .join(' ');
    }, [variant, align, truncate, noWrap, className]);

    return (
      <TextBase ref={ref} className={classes} {...props} />
    );
  }
);

TextSkinTailwind.displayName = 'TextSkinTailwind';
