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
    // Re-sanitize preset strings to ensure no hidden chars cause issues
    ...(preset.safelist || []).map(s => s.trim()),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
