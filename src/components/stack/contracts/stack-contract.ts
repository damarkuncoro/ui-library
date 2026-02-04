import { ReactNode, ElementType, CSSProperties } from 'react';
import { flexContract } from '../../../theme/contracts/flex-contract';
import { spacingContract } from '../../../theme/contracts/spacing-contract';

export type StackDirection = keyof typeof flexContract.direction;
export type StackAlign = keyof typeof flexContract.align;
export type StackJustify = keyof typeof flexContract.justify;
export type StackGap = keyof typeof spacingContract;

export interface StackContract {
  /**
   * The HTML element or component to render.
   * @default 'div'
   */
  as?: ElementType;

  /**
   * The direction to stack the items.
   * @default 'col'
   */
  direction?: StackDirection;

  /**
   * The alignment of items perpendicular to the direction.
   * @default 'stretch'
   */
  align?: StackAlign;

  /**
   * The distribution of items along the direction.
   * @default 'start'
   */
  justify?: StackJustify;

  /**
   * The gap between items.
   * @default 2
   */
  gap?: StackGap;

  /**
   * Whether to wrap items.
   * @default false
   */
  wrap?: boolean;

  /**
   * Additional class names.
   */
  className?: string;

  /**
   * Inline styles.
   */
  style?: CSSProperties;

  /**
   * Child content.
   */
  children?: ReactNode;
}
