import { spacingContract } from './spacing-contract';

// --- LAYOUT CONTRACT DEFINITION ---
// Defines the spatial and structural system for the application.
// This serves as the Single Source of Truth for all layout-related definitions.
// Values are based on Tailwind CSS Default Spacing/Sizing Scale.

export const layoutContract = {
  // --- SPACING & SIZING ---
  // Re-exported from Spacing Contract for backward compatibility and grouping
  spacing: spacingContract,

  // --- BORDER RADIUS ---
  borderRadius: {
    none: '0px',
    sm: '0.125rem',  // 2px
    DEFAULT: '0.25rem', // 4px
    md: '0.375rem',  // 6px
    lg: '0.5rem',    // 8px
    xl: '0.75rem',   // 12px
    '2xl': '1rem',   // 16px
    '3xl': '1.5rem', // 24px
    full: '9999px',
  },

  // --- SCREENS (BREAKPOINTS) ---
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // --- Z-INDEX ---
  zIndex: {
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    auto: 'auto',
  },
  
  // --- CONTAINER ---
  // Configuration for the container component
  container: {
    center: true,
    padding: '2rem', // default padding
  }
} as const;
