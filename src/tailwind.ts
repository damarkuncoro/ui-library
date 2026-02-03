import path from 'path';
import { sharedPreset } from './utils/tailwind-config';

export const preset = sharedPreset;

export function content() {
  return [
    path.join(__dirname, '**/*.{js,jsx,ts,tsx}'),
    path.join(__dirname, '../../esm/**/*.{js,jsx,ts,tsx}'),
  ];
}
