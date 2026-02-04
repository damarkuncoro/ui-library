import { tokens } from '../../../theme/design-tokens';

// --- SKIN CONTRACT DEFINITION ---
// Defines the visual contract for shape variants.

export const shapeSkinContractDef = {
  id: "contract_shape_skin_v1",
  name: "shape-skin",
  category: "ui.skin",
  
  variants: {
    square: {
      aspectRatio: tokens.aspectRatio.square,
      borderRadius: tokens.borders.radius.none,
    },
    circle: {
      aspectRatio: tokens.aspectRatio.square,
      borderRadius: tokens.borders.radius.full,
    },
    pill: {
      borderRadius: tokens.borders.radius.full,
      // Pill usually depends on content for aspect ratio
    },
    box: {
      borderRadius: tokens.borders.radius.md,
    },
  },

  sizes: {
    sm: {
      width: tokens.sizing[8],  // 32px
      height: tokens.sizing[8],
      fontSize: tokens.typography.fontSize.xs,
    },
    md: {
      width: tokens.sizing[12], // 48px
      height: tokens.sizing[12],
      fontSize: tokens.typography.fontSize.sm,
    },
    lg: {
      width: tokens.sizing[16], // 64px
      height: tokens.sizing[16],
      fontSize: tokens.typography.fontSize.base,
    },
    xl: {
      width: tokens.sizing[24], // 96px
      height: tokens.sizing[24],
      fontSize: tokens.typography.fontSize.lg,
    },
    full: {
      width: tokens.sizing.full,
      height: tokens.sizing.full,
    }
  }
};
