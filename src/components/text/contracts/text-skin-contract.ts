import { tokens } from '../../../theme/core/design-tokens';

/**
 * Text Skin Contract Definition
 * Defines the semantic variants for typography.
 */
export const textSkinContractDef = {
  variants: {
    display1: {
      fontSize: tokens.typography.fontSize['6xl'],
      fontWeight: tokens.typography.fontWeight.bold,
      lineHeight: tokens.typography.lineHeight.tight,
      letterSpacing: tokens.typography.letterSpacing.tight,
    },
    display2: {
      fontSize: tokens.typography.fontSize['5xl'],
      fontWeight: tokens.typography.fontWeight.bold,
      lineHeight: tokens.typography.lineHeight.tight,
      letterSpacing: tokens.typography.letterSpacing.tight,
    },
    h1: {
      fontSize: tokens.typography.fontSize['4xl'],
      fontWeight: tokens.typography.fontWeight.bold,
      lineHeight: tokens.typography.lineHeight.tight,
      letterSpacing: tokens.typography.letterSpacing.tight,
    },
    h2: {
      fontSize: tokens.typography.fontSize['3xl'],
      fontWeight: tokens.typography.fontWeight.semibold,
      lineHeight: tokens.typography.lineHeight.tight,
      letterSpacing: tokens.typography.letterSpacing.tight,
    },
    h3: {
      fontSize: tokens.typography.fontSize['2xl'],
      fontWeight: tokens.typography.fontWeight.semibold,
      lineHeight: tokens.typography.lineHeight.snug,
      letterSpacing: tokens.typography.letterSpacing.normal,
    },
    h4: {
      fontSize: tokens.typography.fontSize.xl,
      fontWeight: tokens.typography.fontWeight.semibold,
      lineHeight: tokens.typography.lineHeight.snug,
      letterSpacing: tokens.typography.letterSpacing.normal,
    },
    h5: {
      fontSize: tokens.typography.fontSize.lg,
      fontWeight: tokens.typography.fontWeight.semibold,
      lineHeight: tokens.typography.lineHeight.normal,
      letterSpacing: tokens.typography.letterSpacing.normal,
    },
    h6: {
      fontSize: tokens.typography.fontSize.base,
      fontWeight: tokens.typography.fontWeight.semibold,
      lineHeight: tokens.typography.lineHeight.normal,
      letterSpacing: tokens.typography.letterSpacing.normal,
    },
    body1: {
      fontSize: tokens.typography.fontSize.base,
      fontWeight: tokens.typography.fontWeight.normal,
      lineHeight: tokens.typography.lineHeight.normal,
      letterSpacing: tokens.typography.letterSpacing.normal,
    },
    body2: {
      fontSize: tokens.typography.fontSize.sm,
      fontWeight: tokens.typography.fontWeight.normal,
      lineHeight: tokens.typography.lineHeight.relaxed,
      letterSpacing: tokens.typography.letterSpacing.normal,
    },
    caption: {
      fontSize: tokens.typography.fontSize.xs,
      fontWeight: tokens.typography.fontWeight.normal,
      lineHeight: tokens.typography.lineHeight.normal,
      letterSpacing: tokens.typography.letterSpacing.wide,
    },
    overline: {
      fontSize: tokens.typography.fontSize.xs,
      fontWeight: tokens.typography.fontWeight.bold,
      lineHeight: tokens.typography.lineHeight.normal,
      letterSpacing: tokens.typography.letterSpacing.widest,
      textTransform: 'uppercase',
    },
  },
} as const;
