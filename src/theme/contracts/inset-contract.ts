import { spacingContract } from './spacing-contract';

// --- INSET CONTRACT DEFINITION ---
// Defines standard inset values (top, right, bottom, left).
// Extends Layout Spacing with Fractions and Keywords.
// Serves as SSOT for inset-related CSS values.

const spacing = spacingContract;

const fractions = {
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  full: '100%',
} as const;

export const insetContract = {
  inset: {
    ...spacing,
    ...fractions,
    auto: 'auto',
  },
} as const;
