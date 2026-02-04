import { forwardRef, useMemo } from 'react';
import { StackContract } from '../contracts/stack-contract';
import { StackBase } from '../base/stack-base';
import { directionClasses, alignClasses, justifyClasses, wrapClasses } from './stack-skin-classes';
import { cn } from '../../../styling-constitution-engine/react';
import { tw } from '../../../utils/tailwind/helpers';

export const StackTailwind = forwardRef<HTMLElement, StackContract>(
  ({
    direction = 'col',
    align = 'stretch',
    justify = 'start',
    gap = 2,
    wrap = false,
    className = '',
    ...props
  }, ref) => {

    const classes = useMemo(() => {
      return cn(
        'flex',
        directionClasses[direction],
        alignClasses[align],
        justifyClasses[justify],
        wrapClasses[String(wrap) as keyof typeof wrapClasses],
        gap !== undefined && `gap-${gap}`,
        className
      );
    }, [direction, align, justify, gap, wrap, className]);

    return (
      <StackBase ref={ref} className={classes} {...props} />
    );
  }
);

StackTailwind.displayName = 'StackTailwind';
