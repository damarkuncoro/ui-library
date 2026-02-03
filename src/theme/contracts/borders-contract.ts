// --- BORDERS CONTRACT DEFINITION ---
// Defines standard border properties (width, style, radius).
// Also includes outline and ring properties.
// Serves as SSOT for decoration-related CSS values.

export const bordersContract = {
  // border-width
  width: {
    0: '0px',
    px: '1px',
    2: '2px',
    4: '4px',
    8: '8px',
  },

  // border-style
  style: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
    double: 'double',
    none: 'none',
    hidden: 'hidden',
  },

  // border-radius
  // Moved from Layout Contract
  radius: {
    none: '0px',
    sm: '0.125rem',     // 2px
    DEFAULT: '0.25rem', // 4px
    md: '0.375rem',     // 6px
    lg: '0.5rem',       // 8px
    xl: '0.75rem',      // 12px
    '2xl': '1rem',      // 16px
    '3xl': '1.5rem',    // 24px
    full: '9999px',
  },

  // outline-width
  outlineWidth: {
    0: '0px',
    px: '1px',
    2: '2px',
    4: '4px',
    8: '8px',
  },

  // outline-offset
  outlineOffset: {
    0: '0px',
    px: '1px',
    2: '2px',
    4: '4px',
    8: '8px',
  },

  // ring-width
  ringWidth: {
    DEFAULT: '3px',
    0: '0px',
    1: '1px',
    2: '2px',
    4: '4px',
    8: '8px',
    inset: 'inset',
  },

  // ring-offset-width
  ringOffsetWidth: {
    0: '0px',
    px: '1px',
    1: '1px',
    2: '2px',
    4: '4px',
    8: '8px',
  }
} as const;
