import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { InputTailwind, variantClasses, sizeClasses } from './input-skin-tailwind';
import { inputSkinContractDef } from './input-skin-contract';
import { tokens } from '../../theme/design-tokens';
import { ThemeProvider } from '../../theme/theme-provider';

describe('Input Component System', () => {
  const { variants, sizes, disabled } = inputSkinContractDef;

  describe('Contract Integration', () => {
    it('should use design tokens for primary variant color', () => {
      // Check if the generated class string contains the token value
      expect(variantClasses.outline).toContain(tokens.colors.primary.main);
      expect(variantClasses.outline).toContain(tokens.colors.neutral.border);
    });

    it('should use typography tokens for sizes', () => {
      expect(sizeClasses.sm).toContain(tokens.typography.fontSize.xs);
      expect(sizeClasses.md).toContain(tokens.typography.fontSize.sm);
      expect(sizeClasses.lg).toContain(tokens.typography.fontSize.base);
    });
  });

  describe('InputTailwind Rendering', () => {
    it('should render with default props', () => {
      render(<InputTailwind placeholder="Enter text" />);
      const input = screen.getByPlaceholderText('Enter text');
      expect(input).toBeInTheDocument();
      expect(input.tagName).toBe('INPUT');
      
      // Should have default variant classes
      const expectedBg = variants.outline.backgroundColor;
      expect(input).toHaveClass(`bg-[${expectedBg}]`);
    });

    it('should render left icon', () => {
      render(<InputTailwind leftIcon={<span data-testid="icon">🔍</span>} />);
      expect(screen.getByTestId('icon')).toBeInTheDocument();
      // Input should have padding left
      const input = screen.getByRole('textbox');
      expect(input).toHaveClass(`pl-[${tokens.sizing[10]}]`);
    });

    it('should handle disabled state', () => {
      render(<InputTailwind isDisabled />);
      const input = screen.getByRole('textbox');
      expect(input).toBeDisabled();
      expect(input).toHaveClass(`disabled:opacity-[${disabled.opacity}]`);
    });

    it('should handle invalid state', () => {
      render(<InputTailwind isInvalid />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-invalid', 'true');
      // Should have error classes
      expect(input).toHaveClass(`!border-[${variants.outline.invalid.borderColor}]`);
    });
  });
});
