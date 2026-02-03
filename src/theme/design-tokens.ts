import { colorPalette, colorContractDef } from './contracts/color-contract';
import { layoutContract } from './contracts/layout-contract';
import { flexContract } from './contracts/flex-contract';
import { gridContract } from './contracts/grid-contract';
import { sizingContract } from './contracts/sizing-contract';
import { spacingContract } from './contracts/spacing-contract';
import { typographyContract } from './contracts/typography-contract';
import { bordersContract } from './contracts/borders-contract';
import { backgroundsContract } from './contracts/backgrounds-contract';
import { effectsContract } from './contracts/effects-contract';
import { tablesContract } from './contracts/tables-contract';
import { animationContract } from './contracts/animation-contract';
import { aspectRatioContract } from './contracts/aspect-ratio-contract';
import { columnsContract } from './contracts/columns-contract';
import { breakAfterContract } from './contracts/break-after-contract';
import { accessibilityContract } from './contracts/accessibility-contract';
import { interactivityContract } from './contracts/interactivity-contract';
import { transitionsContract } from './contracts/transitions-contract';
import { transformsContract } from './contracts/transforms-contract';

// --- GLOBAL DESIGN TOKENS ---
// This is the "Root Contract" for the entire UI Library.
// All Component Skin Contracts should reference these tokens.

export const palette = colorPalette;
export const layout = layoutContract;
export const flex = flexContract;
export const grid = gridContract;
export const sizing = sizingContract;
export const spacing = spacingContract;
export const typography = typographyContract;
export const borders = bordersContract;
export const backgrounds = backgroundsContract;
export const effects = effectsContract;
export const tables = tablesContract;
export const animation = animationContract;
export const aspectRatio = aspectRatioContract;
export const columns = columnsContract;
export const breakAfter = breakAfterContract;
export const accessibility = accessibilityContract;
export const interactivity = interactivityContract;
export const transitions = transitionsContract;
export const transforms = transformsContract;

// 1. Define the CSS Variable Keys (The "Contract" for the Theme)
export const cssVars = {
  colors: colorContractDef,
  shadows: {
    focusRing: 'var(--shadow-focus-ring)',
  },
  borders: {
    radius: {
      DEFAULT: 'var(--radius)',
      none: 'var(--radius-none)',
      sm: 'var(--radius-sm)',
      md: 'var(--radius-md)',
      lg: 'var(--radius-lg)',
      xl: 'var(--radius-xl)',
      '2xl': 'var(--radius-2xl)',
      '3xl': 'var(--radius-3xl)',
      full: 'var(--radius-full)',
    }
  }
} as const;

// Shared tokens common to both Light and Dark themes
// DRY Principle: Define once, use everywhere
const sharedThemeTokens = {
  // Shadows
  '--shadow-focus-ring': '0 0 0 2px',

  // Aspect Ratio
  '--aspect-video': '16/9',

  // Container (Columns)
  '--container-3xs': '16rem',
  '--container-2xs': '18rem',
  '--container-xs': '20rem',
  '--container-sm': '24rem',
  '--container-md': '28rem',
  '--container-lg': '32rem',
  '--container-xl': '36rem',
  '--container-2xl': '42rem',
  '--container-3xl': '48rem',
  '--container-4xl': '56rem',
  '--container-5xl': '64rem',
  '--container-6xl': '72rem',
  '--container-7xl': '80rem',

  // Radius (Borders)
  '--radius-none': borders.radius.none,
  '--radius-sm': borders.radius.sm,
  '--radius': borders.radius.DEFAULT,
  '--radius-md': borders.radius.md,
  '--radius-lg': borders.radius.lg,
  '--radius-xl': borders.radius.xl,
  '--radius-2xl': borders.radius['2xl'],
  '--radius-3xl': borders.radius['3xl'],
  '--radius-full': borders.radius.full,
};

// 2. Define the Actual Values for Themes
export const themes = {
  light: {
    ...sharedThemeTokens,
    
    // Primary (Blue)
    '--color-primary-main': palette.blue[600],
    '--color-primary-hover': palette.blue[700],
    '--color-primary-focus': palette.blue[500],
    '--color-primary-contrast': palette.white,

    // Secondary (Gray)
    '--color-secondary-main': palette.gray[100],
    '--color-secondary-hover': palette.gray[200],
    '--color-secondary-focus': palette.gray[500],
    '--color-secondary-contrast': palette.gray[900],

    // Danger (Red)
    '--color-danger-main': palette.red[600],
    '--color-danger-hover': palette.red[700],
    '--color-danger-focus': palette.red[500],
    '--color-danger-contrast': palette.white,

    // Neutral
    '--color-neutral-border': palette.gray[300],
    '--color-neutral-text': palette.gray[700],
    '--color-neutral-text-secondary': palette.gray[500],
    '--color-neutral-bg': palette.gray[50],
    '--color-neutral-bg-surface': palette.white,
  },
  dark: {
    ...sharedThemeTokens,

    // Primary (Lighter Blue for Dark Mode)
    '--color-primary-main': palette.blue[500],
    '--color-primary-hover': palette.blue[400],
    '--color-primary-focus': palette.blue[600],
    '--color-primary-contrast': palette.white,

    // Secondary (Darker Gray)
    '--color-secondary-main': palette.gray[800],
    '--color-secondary-hover': palette.gray[700],
    '--color-secondary-focus': palette.gray[600],
    '--color-secondary-contrast': palette.gray[100],

    // Danger (Lighter Red)
    '--color-danger-main': palette.red[500],
    '--color-danger-hover': palette.red[400],
    '--color-danger-focus': palette.red[600],
    '--color-danger-contrast': palette.white,

    // Neutral (Inverted)
    '--color-neutral-border': palette.gray[600],
    '--color-neutral-text': palette.gray[100],
    '--color-neutral-text-secondary': palette.gray[400],
    '--color-neutral-bg': palette.gray[900], // Dark background
    '--color-neutral-bg-surface': palette.gray[800], // Slightly lighter for cards
  }
};

// 3. Export the `tokens` object used by components
// This combines CSS Variables (for colors) and Static Values (for spacing/typo)
export const tokens = {
  colors: {
    ...cssVars.colors,
    transparent: 'transparent',
    white: '#FFFFFF',
    black: '#000000',
  },
  shadows: {
    ...cssVars.shadows,
    ...effects.boxShadow,
  },
  
  // UI Control Tokens
  ui: {
    outlineOffset: '2px',
    outlineWidth: '2px',
  },

  // Borders (Radius, Width, Style)
  borders: {
    radius: cssVars.borders.radius, // Now uses var(--radius-*)
    width: borders.width,
    style: borders.style,
    outlineWidth: borders.outlineWidth,
    outlineOffset: borders.outlineOffset,
    ringWidth: borders.ringWidth,
    ringOffsetWidth: borders.ringOffsetWidth,
  },

  // Backgrounds
  backgrounds: backgrounds,

  // Layout Tokens (Mapped to CSS Vars where applicable)
  // borderRadius removed from here, moved to borders.radius
  aspectRatio: aspectRatio.aspectRatio,
  columns: columns.columns,
  breakAfter: breakAfter.breakAfter,
  spacing: spacing,
  screens: layout.screens,
  zIndex: layout.zIndex,
  
  // Flexbox Tokens
  flex: flex,
  
  // Grid Tokens
  grid: grid,

  // Sizing Tokens
  sizing: {
    ...sizing.values,
    ...sizing.width, // Includes screen: 100vw
    
    // Sub-categories
    minWidth: sizing.minWidth,
    maxWidth: sizing.maxWidth,
    minHeight: sizing.minHeight,
    maxHeight: sizing.maxHeight,
    
    // Component Specific
    icon: sizing.icon,
  },

  typography: typography,
  
  opacity: {
    ...effects.opacity,
    disabled: effects.opacity[50],
  },
  
  effects: {
    mixBlendMode: effects.mixBlendMode,
    backgroundBlendMode: effects.backgroundBlendMode,
    filters: {
      blur: effects.blur,
      brightness: effects.brightness,
      contrast: effects.contrast,
      dropShadow: effects.dropShadow,
      grayscale: effects.grayscale,
      hueRotate: effects.hueRotate,
      invert: effects.invert,
      saturate: effects.saturate,
      sepia: effects.sepia,
    },
    backdropFilters: {
      blur: effects.backdropBlur,
      brightness: effects.backdropBrightness,
      contrast: effects.backdropContrast,
      grayscale: effects.backdropGrayscale,
      hueRotate: effects.backdropHueRotate,
      invert: effects.backdropInvert,
      opacity: effects.backdropOpacity,
      saturate: effects.backdropSaturate,
      sepia: effects.backdropSepia,
    }
  },

  // Tables Tokens
  tables: tables,

  // Animation Tokens
  animation: animation,

  // Accessibility Tokens
  accessibility: accessibility,

  // Interactivity Tokens
  interactivity: interactivity,

  transition: {
    ...transitions,
    base: `${transitions.transitionProperty.DEFAULT} ${transitions.transitionDuration[200]} ${transitions.transitionTimingFunction.DEFAULT}`,
  },

  // Transforms Tokens
  transforms: transforms,
} as const;
