import { ReactNode } from 'react';
import { tokens } from '../../theme/design-tokens.js';

// --- SKIN CONTRACT DEFINITION ---
// Defines the visual contract that all button skins must implement.
// This ensures consistency across different styling approaches (Tailwind, Native, etc.).
//
// The skin contract defines:
// 1. Visual properties for each variant
// 2. States (hover, focus, disabled, loading)
// 3. Size specifications
// 4. Icon behavior

export const buttonSkinContractDef = {
  id: "contract_button_skin_v1",
  name: "button-skin",
  category: "ui.skin",
  description: "Visual contract for button skin implementations",
  
  // Visual properties for each variant
  variants: {
    primary: {
      backgroundColor: tokens.colors.primary.main, // blue-600
      color: tokens.colors.primary.contrastText,
      hover: {
        backgroundColor: tokens.colors.primary.hover, // blue-700
      },
      focus: {
        outline: `${tokens.shadows.focusRing} ${tokens.colors.primary.focus}`,
        outlineOffset: tokens.ui.outlineOffset,
        ringColor: tokens.colors.primary.focus, // blue-500
      },
    },
    secondary: {
      backgroundColor: tokens.colors.secondary.main, // gray-100
      color: tokens.colors.secondary.contrastText, // gray-900
      hover: {
        backgroundColor: tokens.colors.secondary.hover, // gray-200
      },
      focus: {
        outline: `${tokens.shadows.focusRing} ${tokens.colors.secondary.focus}`,
        outlineOffset: tokens.ui.outlineOffset,
        ringColor: tokens.colors.secondary.focus, // gray-500
      },
    },
    outline: {
      backgroundColor: tokens.colors.transparent,
      borderColor: tokens.colors.neutral.border, // gray-300
      color: tokens.colors.neutral.text, // gray-700
      hover: {
        backgroundColor: tokens.colors.neutral.bg, // gray-50
      },
      focus: {
        outline: `${tokens.shadows.focusRing} ${tokens.colors.primary.focus}`,
        outlineOffset: tokens.ui.outlineOffset,
        ringColor: tokens.colors.primary.focus, // blue-500
      },
    },
    ghost: {
      backgroundColor: tokens.colors.transparent,
      color: tokens.colors.neutral.text, // gray-700
      hover: {
        backgroundColor: tokens.colors.secondary.main, // gray-100
      },
      focus: {
        outline: `${tokens.shadows.focusRing} ${tokens.colors.secondary.focus}`,
        outlineOffset: tokens.ui.outlineOffset,
        ringColor: tokens.colors.secondary.focus, // gray-500
      },
    },
    danger: {
      backgroundColor: tokens.colors.danger.main, // red-600
      color: tokens.colors.danger.contrastText,
      hover: {
        backgroundColor: tokens.colors.danger.hover, // red-700
      },
      focus: {
        outline: `${tokens.shadows.focusRing} ${tokens.colors.danger.focus}`,
        outlineOffset: tokens.ui.outlineOffset,
        ringColor: tokens.colors.danger.focus, // red-500
      },
    },
  },
  
  // Size specifications
  sizes: {
    sm: {
      height: tokens.sizing[10], // 40px
      paddingX: tokens.spacing[4], // 16px
      fontSize: tokens.typography.fontSize.sm,
      iconSize: tokens.sizing.icon.md,
    },
    md: {
      height: tokens.sizing[12], // 48px
      paddingX: tokens.spacing[6], // 24px
      fontSize: tokens.typography.fontSize.base,
      iconSize: tokens.sizing.icon.lg,
    },
    lg: {
      height: tokens.sizing[14], // 56px
      paddingX: tokens.spacing[8], // 32px
      fontSize: tokens.typography.fontSize.lg,
      iconSize: tokens.sizing.icon.xl,
    },
  },
  
  // Common base styles
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: tokens.borders.radius.md, // 6px
    border: `1px solid ${tokens.colors.transparent}`,
    cursor: 'pointer',
    transition: tokens.transition.base,
    fontWeight: tokens.typography.fontWeight.medium,
  },
  
  // Disabled state
  disabled: {
    opacity: tokens.opacity.disabled,
    cursor: 'not-allowed',
  },
  
  // Icon behavior
  icons: {
    leftSpacing: tokens.spacing[2], // mr-2
    rightSpacing: tokens.spacing[2], // ml-2
    ariaHidden: true,
  },
  
  // Loader behavior
  loader: {
    size: tokens.sizing.icon.md, // h-4 w-4
    borderWidth: tokens.ui.outlineWidth,
    animation: 'spin',
  },
} as const;

// --- TYPE INFERENCE FOR SKIN CONTRACT ---

/**
 * Extracts variant names from the skin contract.
 */
export type ButtonSkinVariant = keyof typeof buttonSkinContractDef.variants;

/**
 * Extracts size names from the skin contract.
 */
export type ButtonSkinSize = keyof typeof buttonSkinContractDef.sizes;

/**
 * Visual properties for a specific variant.
 */
export type VariantVisualProperties = typeof buttonSkinContractDef.variants[ButtonSkinVariant];

/**
 * Size specifications for a specific size.
 */
export type SizeSpecifications = typeof buttonSkinContractDef.sizes[ButtonSkinSize];

/**
 * Base styles that all skins must implement.
 */
export type BaseStyles = typeof buttonSkinContractDef.base;

/**
 * Disabled state styles.
 */
export type DisabledStyles = typeof buttonSkinContractDef.disabled;

/**
 * Icon behavior specifications.
 */
export type IconBehavior = typeof buttonSkinContractDef.icons;

/**
 * Loader behavior specifications.
 */
export type LoaderBehavior = typeof buttonSkinContractDef.loader;

// --- SKIN IMPLEMENTATION INTERFACE ---

/**
 * Interface that all button skin implementations must follow.
 * This ensures consistency across different styling approaches.
 */
export interface ButtonSkinContract {
  /**
   * The variant of the button.
   */
  variant?: ButtonSkinVariant;
  
  /**
   * The size of the button.
   */
  size?: ButtonSkinSize;
  
  /**
   * Whether the button is disabled.
   */
  disabled?: boolean;
  
  /**
   * Whether the button is in a loading state.
   */
  isLoading?: boolean;
  
  /**
   * Optional icon to display before the text.
   */
  leftIcon?: ReactNode;
  
  /**
   * Optional icon to display after the text.
   */
  rightIcon?: ReactNode;
  
  /**
   * Custom class name for styling.
   */
  className?: string;
  
  /**
   * Custom inline styles.
   */
  style?: React.CSSProperties;
}