import { cssVars } from '../theme/design-tokens';
import { generateButtonSafelist, generateInputSafelist, generateShapeSafelist, generateTextSafelist } from './tailwind/index';

export const sharedPreset = {
  theme: {
    extend: {
      colors: cssVars.colors,
      boxShadow: cssVars.shadows,
      borderRadius: cssVars.borders.radius,
    },
  },
  safelist: [
    ...generateButtonSafelist(),
    ...generateInputSafelist(),
    ...generateShapeSafelist(),
    ...generateTextSafelist(),
  ],
  plugins: [],
};
