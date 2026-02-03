import { cssVars } from '../theme/design-tokens.js';
import { generateButtonSafelist, generateInputSafelist } from './tailwind/index.js';

export const sharedPreset = {
  theme: {
    extend: {
      colors: cssVars.colors,
      boxShadow: cssVars.shadows,
    },
  },
  safelist: [
    ...generateButtonSafelist(),
    ...generateInputSafelist(),
  ],
  plugins: [],
};
