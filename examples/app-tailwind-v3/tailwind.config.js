/** @type {import('tailwindcss').Config} */
import { preset } from '@damarkuncoro/ui-library/tailwind';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../src/components/**/*.{js,ts,jsx,tsx}",
    "../../src/theme/**/*.{js,ts,jsx,tsx}"
  ],
  presets: [preset],
  theme: {
    extend: {},
  },
  plugins: [],
}