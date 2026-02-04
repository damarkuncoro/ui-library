import { ReactNode, ElementType, CSSProperties } from 'react';
import { textSkinContractDef } from './text-skin-contract';

export type TextVariant = keyof typeof textSkinContractDef.variants;

export interface TextContract {
  /**
   * The semantic variant of the text.
   * @default 'body1'
   */
  variant?: TextVariant;

  /**
   * The HTML element or component to render.
   * @default 'p'
   */
  as?: ElementType;

  /**
   * Text alignment.
   */
  align?: 'left' | 'center' | 'right' | 'justify';

  /**
   * Whether to truncate the text with an ellipsis.
   */
  truncate?: boolean;

  /**
   * Whether to prevent text wrapping.
   */
  noWrap?: boolean;

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
