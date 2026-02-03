import { colorPalette, colorContractDef } from './color-contract';

// --- GLOBAL DESIGN TOKENS ---
// This is the "Root Contract" for the entire UI Library.
// All Component Skin Contracts should reference these tokens.

export const palette = colorPalette;

// 1. Define the CSS Variable Keys (The "Contract" for the Theme)
export const cssVars = {
  colors: colorContractDef,
  shadows: {
    focusRing: 'var(--shadow-focus-ring)',
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

  // Static Tokens (Shared across themes for now)
  borderRadius: {
    sm: '4px',
    md: '6px',
    lg: '8px',
    full: '9999px',
  },
  spacing: {
    2: '8px',
    3: '12px',
    4: '16px',
    6: '24px',
  },
  sizing: {
    8: '32px',
    10: '40px',
    12: '48px',
    icon: {
      sm: '14px',
      md: '16px',
      lg: '20px',
    },
  },
  typography: {
    fontFamily: {
      sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    }
  },
  opacity: {
    disabled: '0.5',
  },
  transition: {
    base: 'all 0.2s ease',
  }
} as const;
