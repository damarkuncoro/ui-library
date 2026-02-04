// Helper to construct arbitrary values or use semantic class names
// Since we extended the Tailwind theme with these colors, we can use the class names directly.
// But for robustness, we can also support arbitrary values if needed.

// Here we map the contract to Tailwind Utility Classes.
// This ensures that if the contract changes, we just update this mapping.

export const colorClasses = {
  primary: {
    main: 'bg-primary-main text-primary-contrastText',
    hover: 'hover:bg-primary-hover',
    focus: 'focus:ring-primary-focus',
    text: 'text-primary-main',
    bg: 'bg-primary-main',
    border: 'border-primary-main',
  },
  secondary: {
    main: 'bg-secondary-main text-secondary-contrastText',
    hover: 'hover:bg-secondary-hover',
    focus: 'focus:ring-secondary-focus',
    text: 'text-secondary-main',
    bg: 'bg-secondary-main',
    border: 'border-secondary-main',
  },
  danger: {
    main: 'bg-danger-main text-danger-contrastText',
    hover: 'hover:bg-danger-hover',
    focus: 'focus:ring-danger-focus',
    text: 'text-danger-main',
    bg: 'bg-danger-main',
    border: 'border-danger-main',
  },
  neutral: {
    text: 'text-neutral-text',
    textSecondary: 'text-neutral-text-secondary',
    bg: 'bg-neutral-bg',
    bgSurface: 'bg-neutral-bg-surface',
    border: 'border-neutral-border',
  }
};

// We can also export a helper to generate arbitrary values if we weren't using the theme extension
// const twColor = (val: string) => `[color:${sanitize(val)}]`;
