/** @type {import('tailwindcss').Config} */
import { preset } from '@damarkuncoro/ui-library/tailwind';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../lib/esm/**/*.{js,ts,jsx,tsx}",
    "../../src/**/*.{js,ts,jsx,tsx}"
  ],
  presets: [preset],
  theme: {
    extend: {},
  },
  plugins: [],
}