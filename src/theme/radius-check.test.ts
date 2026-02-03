import { describe, it, expect } from 'vitest';
import { tokens, themes } from './design-tokens';
import { sanitize } from '../utils/tailwind/helpers';

describe('Radius Token & CSS Variable Verification', () => {
  it('should verify that rounded-[var(--radius-md)] maps to a valid value', () => {
    // 1. Verify the token points to the variable
    const tokenValue = tokens.borders.radius.md;
    expect(tokenValue).toBe('var(--radius-md)');

    // 2. Verify the variable is defined in the light theme
    const variableValue = themes.light['--radius-md'];
    expect(variableValue).toBeDefined();
    expect(variableValue).toBe('0.375rem'); // Based on borders-contract.ts

    // 3. Verify the constructed Tailwind class
    // This simulates what the Shape component does
    const arbitraryClass = `rounded-[${sanitize(tokenValue)}]`;
    expect(arbitraryClass).toBe('rounded-[var(--radius-md)]');
  });
});
