import { sharedPreset as preset } from '../../src/utils/tailwind-config';

export default {
  presets: [preset],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../src/**/*.{js,ts,jsx,tsx}',
  ],
};
