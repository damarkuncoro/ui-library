/** @type {import('tailwindcss').Config} */
import { preset } from '../../lib/esm/tailwind-v4.js';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../lib/esm/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [preset],
  safelist: [
    ...(preset.safelist || []),
    // Explicitly safelist padding classes as they are sometimes dropped during preset import
    '[padding:0_12px]',
    '[padding:0_16px]',
    '[padding:0_24px]',
    // Input Icon classes (Manual Safelist Workaround)
    '[padding-left:40px]',
    '[padding-right:40px]',
    '[&_.input-icon-left]:left-[12px]',
    '[&_.input-icon-right]:right-[12px]',
    '[&_.input-icon-left]:text-[var(--color-neutral-text-secondary)]',
    '[&_.input-icon-right]:text-[var(--color-neutral-text-secondary)]',
    // Border Radius (Manual Safelist Workaround)
    'rounded-[6px]',
    // Common Utilities (Manual Safelist Workaround)
    'font-[500]',
    '[transition:all_0.2s_ease]',
    'disabled:opacity-[0.5]',
    'disabled:cursor-[not-allowed]',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
