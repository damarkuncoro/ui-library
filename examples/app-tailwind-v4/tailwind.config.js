/** @type {import('tailwindcss').Config} */
import { preset } from '@damarkuncoro/ui-library/tailwind/v4';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [preset],
  theme: {
    extend: {},
  },
  plugins: [],
}
