import { defaultStylingEngine as engine } from './styling-engine';
import { colorContractDef } from '../contracts/color-contract';

// --- GLOBAL DESIGN TOKENS ---
// This is the "Runtime Adapter" for the UI Library.
// It bridges the StylingEngineContract (Schema) to the Application Runtime.
// All Component Skin Contracts should reference these tokens.

export const palette = engine.palette;
export const layout = engine.layout;
export const flex = engine.flex;
export const grid = engine.grid;
export const sizing = engine.sizing;
export const spacing = engine.spacing;
export const typography = engine.typography;
export const borders = engine.borders;
export const backgrounds = engine.backgrounds;
export const effects = engine.effects;
export const tables = engine.tables;
export const animation = engine.animation;
export const aspectRatio = engine.aspectRatio;
export const columns = engine.columns;
export const breakAfter = engine.breakAfter;
export const breakBefore = engine.breakBefore;
export const breakInside = engine.breakInside;
export const boxDecorationBreak = engine.boxDecorationBreak;
export const boxSizing = engine.boxSizing;
export const display = engine.display;
export const float = engine.float;
export const clear = engine.clear;
export const isolation = engine.isolation;
export const objectFit = engine.objectFit;
export const objectPosition = engine.objectPosition;
export const overflow = engine.overflow;
export const overscrollBehavior = engine.overscrollBehavior;
export const position = engine.position;
export const inset = engine.inset;
export const accessibility = engine.accessibility;
export const interactivity = engine.interactivity;
export const transitions = engine.transitions;
export const transforms = engine.transforms;

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
  '--radius-none': engine.borders.radius.none,
  '--radius-sm': engine.borders.radius.sm,
  '--radius': engine.borders.radius.DEFAULT,
  '--radius-md': engine.borders.radius.md,
  '--radius-lg': engine.borders.radius.lg,
  '--radius-xl': engine.borders.radius.xl,
  '--radius-2xl': engine.borders.radius['2xl'],
  '--radius-3xl': engine.borders.radius['3xl'],
  '--radius-full': engine.borders.radius.full,
};

// 2. Define the Actual Values for Themes
export const themes = {
  light: {
    ...sharedThemeTokens,
    
    // Primary (Blue)
    '--color-primary-main': engine.palette.blue[600],
    '--color-primary-hover': engine.palette.blue[700],
    '--color-primary-focus': engine.palette.blue[500],
    '--color-primary-contrast': engine.palette.white,

    // Secondary (Gray)
    '--color-secondary-main': engine.palette.gray[100],
    '--color-secondary-hover': engine.palette.gray[200],
    '--color-secondary-focus': engine.palette.gray[500],
    '--color-secondary-contrast': engine.palette.gray[900],

    // Danger (Red)
    '--color-danger-main': engine.palette.red[600],
    '--color-danger-hover': engine.palette.red[700],
    '--color-danger-focus': engine.palette.red[500],
    '--color-danger-contrast': engine.palette.white,

    // Neutral
    '--color-neutral-border': engine.palette.gray[300],
    '--color-neutral-text': engine.palette.gray[700],
    '--color-neutral-text-secondary': engine.palette.gray[500],
    '--color-neutral-bg': engine.palette.gray[50],
    '--color-neutral-bg-surface': engine.palette.white,
  },
  dark: {
    ...sharedThemeTokens,

    // Primary (Lighter Blue for Dark Mode)
    '--color-primary-main': engine.palette.blue[500],
    '--color-primary-hover': engine.palette.blue[400],
    '--color-primary-focus': engine.palette.blue[600],
    '--color-primary-contrast': engine.palette.white,

    // Secondary (Darker Gray)
    '--color-secondary-main': engine.palette.gray[800],
    '--color-secondary-hover': engine.palette.gray[700],
    '--color-secondary-focus': engine.palette.gray[600],
    '--color-secondary-contrast': engine.palette.gray[100],

    // Danger (Lighter Red)
    '--color-danger-main': engine.palette.red[500],
    '--color-danger-hover': engine.palette.red[400],
    '--color-danger-focus': engine.palette.red[600],
    '--color-danger-contrast': engine.palette.white,

    // Neutral (Inverted)
    '--color-neutral-border': engine.palette.gray[600],
    '--color-neutral-text': engine.palette.gray[100],
    '--color-neutral-text-secondary': engine.palette.gray[400],
    '--color-neutral-bg': engine.palette.gray[900], // Dark background
    '--color-neutral-bg-surface': engine.palette.gray[800], // Slightly lighter for cards
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
    ...engine.effects.boxShadow,
  },
  
  // UI Control Tokens
  ui: {
    outlineOffset: '2px',
    outlineWidth: '2px',
  },

  // Borders (Radius, Width, Style)
  borders: {
    radius: cssVars.borders.radius, // Now uses var(--radius-*)
    width: engine.borders.width,
    style: engine.borders.style,
    outlineWidth: engine.borders.outlineWidth,
    outlineOffset: engine.borders.outlineOffset,
    ringWidth: engine.borders.ringWidth,
    ringOffsetWidth: engine.borders.ringOffsetWidth,
  },

  // Backgrounds
  backgrounds: engine.backgrounds,

  // Layout Tokens (Mapped to CSS Vars where applicable)
  // borderRadius removed from here, moved to borders.radius
  aspectRatio: engine.aspectRatio.aspectRatio,
  columns: engine.columns.columns,
  breakAfter: engine.breakAfter.breakAfter,
  breakBefore: engine.breakBefore.breakBefore,
  breakInside: engine.breakInside.breakInside,
  boxDecorationBreak: engine.boxDecorationBreak.boxDecorationBreak,
  boxSizing: engine.boxSizing.boxSizing,
  display: engine.display.display,
  float: engine.float.float,
  clear: engine.clear.clear,
  isolation: engine.isolation.isolation,
  objectFit: engine.objectFit.objectFit,
  objectPosition: engine.objectPosition.objectPosition,
  overflow: engine.overflow.overflow,
  overscrollBehavior: engine.overscrollBehavior.overscrollBehavior,
  position: engine.position.position,
  inset: engine.inset.inset,
  spacing: engine.spacing,
  screens: engine.layout.screens,
  zIndex: engine.layout.zIndex,
  
  // Flexbox Tokens
  flex: engine.flex,
  
  // Grid Tokens
  grid: engine.grid,

  // Sizing Tokens
  sizing: {
    ...engine.sizing.values,
    ...engine.sizing.width, // Includes screen: 100vw
    
    // Sub-categories
    minWidth: engine.sizing.minWidth,
    maxWidth: engine.sizing.maxWidth,
    minHeight: engine.sizing.minHeight,
    maxHeight: engine.sizing.maxHeight,
    
    // Component Specific
    icon: engine.sizing.icon,
  },

  typography: engine.typography,
  
  opacity: {
    ...engine.effects.opacity,
    disabled: engine.effects.opacity[50],
  },
  
  effects: {
    mixBlendMode: engine.effects.mixBlendMode,
    backgroundBlendMode: engine.effects.backgroundBlendMode,
    filters: {
      blur: engine.effects.blur,
      brightness: engine.effects.brightness,
      contrast: engine.effects.contrast,
      dropShadow: engine.effects.dropShadow,
      grayscale: engine.effects.grayscale,
      hueRotate: engine.effects.hueRotate,
      invert: engine.effects.invert,
      saturate: engine.effects.saturate,
      sepia: engine.effects.sepia,
    },
    backdropFilters: {
      blur: engine.effects.backdropBlur,
      brightness: engine.effects.backdropBrightness,
      contrast: engine.effects.backdropContrast,
      grayscale: engine.effects.backdropGrayscale,
      hueRotate: engine.effects.backdropHueRotate,
      invert: engine.effects.backdropInvert,
      opacity: engine.effects.backdropOpacity,
      saturate: engine.effects.backdropSaturate,
      sepia: engine.effects.backdropSepia,
    }
  },

  // Tables Tokens
  tables: engine.tables,

  // Animation Tokens
  animation: engine.animation,

  // Accessibility Tokens
  accessibility: engine.accessibility,

  // Interactivity Tokens
  interactivity: engine.interactivity,

  transition: {
    ...engine.transitions,
    base: `${engine.transitions.transitionProperty.DEFAULT} ${engine.transitions.transitionDuration[200]} ${engine.transitions.transitionTimingFunction.DEFAULT}`,
  },

  // Transforms Tokens
  transforms: engine.transforms,
} as const;
