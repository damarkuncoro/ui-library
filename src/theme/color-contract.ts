// --- COLOR CONTRACT DEFINITION ---
// Defines the palette and semantic color roles for the application.
// This serves as the Single Source of Truth for all color-related definitions.

export const colorPalette = {
  blue: {
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
  },
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  red: {
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    900: '#7F1D1D',
  },
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
} as const;

// Semantic Color Roles (Contract for Themes)
// These map to CSS Variables
export const colorContractDef = {
  primary: {
    main: 'var(--color-primary-main)',
    hover: 'var(--color-primary-hover)',
    focus: 'var(--color-primary-focus)',
    contrastText: 'var(--color-primary-contrast)',
  },
  secondary: {
    main: 'var(--color-secondary-main)',
    hover: 'var(--color-secondary-hover)',
    focus: 'var(--color-secondary-focus)',
    contrastText: 'var(--color-secondary-contrast)',
  },
  danger: {
    main: 'var(--color-danger-main)',
    hover: 'var(--color-danger-hover)',
    focus: 'var(--color-danger-focus)',
    contrastText: 'var(--color-danger-contrast)',
  },
  neutral: {
    border: 'var(--color-neutral-border)',
    text: 'var(--color-neutral-text)',
    textSecondary: 'var(--color-neutral-text-secondary)',
    bg: 'var(--color-neutral-bg)',
    bgSurface: 'var(--color-neutral-bg-surface)',
  }
} as const;
