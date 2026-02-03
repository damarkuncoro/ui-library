import { tokens } from '../../theme/design-tokens.js';

// --- SKIN CONTRACT DEFINITION ---
// Defines the visual contract that all input skins must implement.

export const inputSkinContractDef = {
  id: "contract_input_skin_v1",
  name: "input-skin",
  
  // Visual properties for each variant
  variants: {
    outline: {
      backgroundColor: tokens.colors.transparent,
      borderColor: tokens.colors.neutral.border, // gray-300
      color: tokens.colors.neutral.text, // gray-700
      placeholderColor: tokens.colors.neutral.textSecondary,
      hover: {
        borderColor: tokens.colors.neutral.text, // gray-700
      },
      focus: {
        borderColor: tokens.colors.primary.main, // blue-600
        ringColor: tokens.colors.primary.main, // blue-600 (mapped to ring)
      },
      invalid: {
        borderColor: tokens.colors.danger.main, // red-600
        ringColor: tokens.colors.danger.main,
      }
    },
    filled: {
      backgroundColor: tokens.colors.secondary.main, // gray-100
      borderColor: tokens.colors.transparent,
      color: tokens.colors.neutral.text,
      placeholderColor: tokens.colors.neutral.textSecondary,
      hover: {
        backgroundColor: tokens.colors.secondary.hover, // gray-200
      },
      focus: {
        backgroundColor: tokens.colors.transparent,
        borderColor: tokens.colors.primary.main,
        ringColor: tokens.colors.primary.main,
      },
      invalid: {
        borderColor: tokens.colors.danger.main,
        ringColor: tokens.colors.danger.main,
      }
    },
    flushed: {
      backgroundColor: tokens.colors.transparent,
      borderColor: tokens.colors.transparent, // Bottom border handled by layout usually, but here we assume standard border
      borderBottomColor: tokens.colors.neutral.border,
      color: tokens.colors.neutral.text,
      placeholderColor: tokens.colors.neutral.textSecondary,
      hover: {
        borderBottomColor: tokens.colors.neutral.text,
      },
      focus: {
        borderBottomColor: tokens.colors.primary.main,
        ringColor: tokens.colors.transparent, // No ring for flushed usually
      },
      invalid: {
        borderBottomColor: tokens.colors.danger.main,
        ringColor: tokens.colors.transparent,
      }
    },
  },
  
  // Icon positioning and spacing
  icons: {
    padding: tokens.sizing[10], // 40px
    position: tokens.spacing[3], // 12px
    color: tokens.colors.neutral.textSecondary,
    ariaHidden: true,
  },
  
  // Size specifications
  sizes: {
    sm: {
      height: tokens.sizing[8],
      padding: `0 ${tokens.spacing[3]}`, // 12px
      fontSize: tokens.typography.fontSize.xs,
    },
    md: {
      height: tokens.sizing[10],
      padding: `0 ${tokens.spacing[4]}`, // 16px
      fontSize: tokens.typography.fontSize.sm,
    },
    lg: {
      height: tokens.sizing[12],
      padding: `0 ${tokens.spacing[6]}`, // 24px
      fontSize: tokens.typography.fontSize.base,
    },
  },
  
  // Base styles
  base: {
    borderRadius: tokens.borders.radius.md,
    transition: tokens.transition.base,
    width: '100%',
    outline: 'none',
  },
  
  disabled: {
    opacity: tokens.opacity.disabled,
    cursor: 'not-allowed',
    backgroundColor: tokens.colors.secondary.main, // gray-100
  }
} as const;
