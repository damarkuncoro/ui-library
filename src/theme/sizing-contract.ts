import { spacingContract } from './spacing-contract';

// --- SIZING CONTRACT DEFINITION ---
// Defines standard sizing values (width, height, min/max).
// Extends Layout Spacing with Fractions and Keywords.
// Serves as SSOT for sizing-related CSS values.

const spacing = spacingContract;

const fractions = {
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
  full: '100%',
} as const;

export const sizingContract = {
  // General Sizing Scale (Spacing + Fractions + Keywords)
  // Used for width, height, basis
  values: {
    ...spacing,
    ...fractions,
    auto: 'auto',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
  },

  // Specific Width Overrides/Additions
  width: {
    screen: '100vw',
  },

  // Specific Height Overrides/Additions
  height: {
    screen: '100vh',
  },

  // Min-Width Scale
  minWidth: {
    0: '0px',
    full: '100%',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
  },

  // Max-Width Scale (Prose, Containers)
  maxWidth: {
    none: 'none',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    full: '100%',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
    prose: '65ch',
  },

  // Min-Height Scale
  minHeight: {
    0: '0px',
    full: '100%',
    screen: '100vh',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
  },

  // Max-Height Scale
  maxHeight: {
    full: '100%',
    screen: '100vh',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
  },

  // Icon Sizing (Component Specific)
  icon: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
  },
} as const;
