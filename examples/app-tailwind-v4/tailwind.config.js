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
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
