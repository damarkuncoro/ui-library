
// This file is auto-generated (conceptually) to help Tailwind Scanner detect arbitrary values
// used in the Button component that are derived from the Skin Contract.
//
// These strings MUST match the output of `tw(prefix, value)` in runtime.

export const buttonSafelist = [
  // --- SIZES ---
  // sm
  'h-[2rem]',
  'px-[0.75rem]',
  'text-[0.75rem]',
  // md
  'h-[2.5rem]',
  'px-[1rem]',
  'text-[0.875rem]',
  // lg
  'h-[3rem]',
  'px-[1.5rem]',
  'text-[1rem]',

  // --- VARIANTS ---
  // Primary
  'bg-[var(--color-primary-main)]',
  'text-[var(--color-primary-contrast)]',
  'hover:bg-[var(--color-primary-hover)]',
  'focus:ring-[var(--color-primary-focus)]',
  
  // Secondary
  'bg-[var(--color-secondary-main)]',
  'text-[var(--color-secondary-contrast)]',
  'hover:bg-[var(--color-secondary-hover)]',
  'focus:ring-[var(--color-secondary-focus)]',

  // Outline
  'bg-[transparent]',
  'border-[var(--color-neutral-border)]',
  'text-[var(--color-neutral-text)]',
  'hover:bg-[var(--color-neutral-bg)]',
  
  // Ghost
  // bg-[transparent] (duplicate)
  // text-[var(--color-neutral-text)] (duplicate)
  'hover:bg-[var(--color-secondary-main)]',
  
  // Danger
  'bg-[var(--color-danger-main)]',
  'text-[var(--color-danger-contrast)]',
  'hover:bg-[var(--color-danger-hover)]',
  'focus:ring-[var(--color-danger-focus)]',

  // --- BASE ---
  'rounded-[var(--radius-md)]', // Default
  'font-[500]',
  
  // --- FOCUS ---
  'focus:ring-[2px]', // tokens.ui.outlineWidth
  'focus:ring-offset-[2px]', // tokens.ui.outlineOffset

  // --- LOADER ---
  '[&_.button-loader]:border-[2px]',
  '[&_.button-loader]:h-[16px]',
  '[&_.button-loader]:w-[16px]',

  // --- ICONS ---
  '[&_.button-icon-left]:mr-[0.5rem]',
  '[&_.button-icon-right]:ml-[0.5rem]',
  
  // --- DISABLED ---
  'disabled:opacity-[0.5]',
  'disabled:cursor-[not-allowed]',
];
