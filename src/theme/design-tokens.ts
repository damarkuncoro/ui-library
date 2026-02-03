import { colorPalette, colorContractDef } from './color-contract';
import { layoutContract } from './layout-contract';
import { flexContract } from './flex-contract';
import { gridContract } from './grid-contract';
import { sizingContract } from './sizing-contract';
import { spacingContract } from './spacing-contract';
import { typographyContract } from './typography-contract';

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

// 1. Define the CSS Variable Keys (The "Contract" for the Theme)
export const cssVars = {
  colors: colorContractDef,
  shadows: {
    focusRing: 'var(--shadow-focus-ring)',
  },
  layout: {
    borderRadius: {
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

// 2. Define the Actual Values for Themes
export const themes = {
  light: {
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

    // Shadows
    '--shadow-focus-ring': '0 0 0 2px',

    // Radius (Layout)
    '--radius-none': layout.borderRadius.none,
    '--radius-sm': layout.borderRadius.sm,
    '--radius': layout.borderRadius.DEFAULT,
    '--radius-md': layout.borderRadius.md,
    '--radius-lg': layout.borderRadius.lg,
    '--radius-xl': layout.borderRadius.xl,
    '--radius-2xl': layout.borderRadius['2xl'],
    '--radius-3xl': layout.borderRadius['3xl'],
    '--radius-full': layout.borderRadius.full,
  },
  dark: {
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

    // Shadows
    '--shadow-focus-ring': '0 0 0 2px',

    // Radius (Layout) - Same as light for now, but could be different!
    '--radius-none': layout.borderRadius.none,
    '--radius-sm': layout.borderRadius.sm,
    '--radius': layout.borderRadius.DEFAULT,
    '--radius-md': layout.borderRadius.md,
    '--radius-lg': layout.borderRadius.lg,
    '--radius-xl': layout.borderRadius.xl,
    '--radius-2xl': layout.borderRadius['2xl'],
    '--radius-3xl': layout.borderRadius['3xl'],
    '--radius-full': layout.borderRadius.full,
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
  shadows: cssVars.shadows,
  
  // UI Control Tokens
  ui: {
    outlineOffset: '2px',
    outlineWidth: '2px',
  },

  // Layout Tokens (Mapped to CSS Vars where applicable)
  borderRadius: cssVars.layout.borderRadius, // Now uses var(--radius-*)
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
    disabled: '0.5',
  },
  transition: {
    base: 'all 0.2s ease',
  }
} as const;
