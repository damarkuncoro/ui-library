import { colorContractDef } from '../../../theme/contracts/color-contract';

// Generates safelist for color classes
// This ensures that dynamic usage of these colors (if any) works correctly.
// Although we usually use static classes like `bg-primary-main`, this is a safety net.

export const generateColorSafelist = () => {
  const classes: string[] = [];
  const prefixes = ['bg', 'text', 'border', 'ring', 'outline'];
  const states = ['hover', 'focus', 'active', 'disabled'];

  // Iterate over the contract definition
  Object.entries(colorContractDef).forEach(([category, variants]) => {
    Object.keys(variants).forEach((variant) => {
      const colorName = `${category}-${variant}`; // e.g. primary-main
      
      prefixes.forEach(prefix => {
        // Base class: bg-primary-main
        classes.push(`${prefix}-${colorName}`);
        
        // State classes: hover:bg-primary-main
        states.forEach(state => {
            classes.push(`${state}:${prefix}-${colorName}`);
        });
      });
    });
  });

  return classes;
};
