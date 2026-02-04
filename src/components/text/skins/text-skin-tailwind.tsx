import { forwardRef, useMemo } from 'react';
import { TextContract } from '../contracts/text-contract';
import { TextBase } from '../base/text-base';
import { variantClasses } from './text-skin-classes';
import { cn } from '../../../styling-constitution-engine/react';

export const TextSkinTailwind = forwardRef<HTMLElement, TextContract>(
  ({ variant = 'body1', align, truncate, noWrap, className = '', ...props }, ref) => {
    
    const classes = useMemo(() => {
      const variantClass = variantClasses[variant];
      const alignClass = align ? `text-${align}` : '';
      const truncateClass = truncate ? 'truncate' : '';
      const noWrapClass = noWrap ? 'whitespace-nowrap' : '';
      
      // Use Constitutional Class Merger
      return cn(variantClass, alignClass, truncateClass, noWrapClass, className);
    }, [variant, align, truncate, noWrap, className]);

    return (
      <TextBase ref={ref} className={classes} {...props} />
    );
  }
);

TextSkinTailwind.displayName = 'TextSkinTailwind';
