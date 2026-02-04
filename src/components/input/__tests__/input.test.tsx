import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { InputTailwind } from '../skins/input-skin-tailwind';
import { variantClasses, sizeClasses } from '../skins/input-skin-classes';
import { inputSkinContractDef } from '../contracts/input-skin-contract';
import { tokens } from '../../../theme/design-tokens';

describe('Input Component System', () => {
  const { variants, disabled } = inputSkinContractDef;

  describe('Contract Integration', () => {
    it('should use design tokens for primary variant color', () => {
      // Check if the generated class string contains the token value
      expect(variantClasses.outline).toContain(tokens.colors.primary.main);
      expect(variantClasses.outline).toContain(tokens.colors.neutral.border);
    });

    it('should use typography tokens for sizes', () => {
      expect(sizeClasses.sm).toContain('text-xs');
      expect(sizeClasses.md).toContain('text-sm');
      expect(sizeClasses.lg).toContain('text-base');
    });

    it('should apply correct padding classes', () => {
      // Test small size padding
      expect(sizeClasses.sm).toContain('px-3');
      
      // Test medium size padding
      expect(sizeClasses.md).toContain('px-4');
      
      // Test large size padding
      expect(sizeClasses.lg).toContain('px-6');
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
      expect(input).toHaveClass('pl-10');
    });

    it('should handle disabled state', () => {
      render(<InputTailwind disabled />);
      const input = screen.getByRole('textbox');
      expect(input).toBeDisabled();
      expect(input).toHaveClass('disabled:opacity-50');
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
