import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { buttonContractDef } from './button-contract';
import { buttonSkinContractDef } from './button-skin-contract';
import { variantClasses, sizeClasses } from './button-skin-tailwind';
import { ButtonTailwind } from './button-skin-tailwind';
import { ButtonNative } from './button-skin-native';
import { ButtonBase } from './button-base';

/**
 * Consistency Tests
 * Ensures that the Implementation (Skin) matches the Contract Definition.
 */
describe('Button Contract Consistency', () => {
  
  describe('Variant Consistency', () => {
    // Get variants from Runtime Contract Object
    const contractVariants = buttonContractDef.variants.find(v => v.name === 'variant')?.values || [];

    it('should have all contract variants implemented in skin', () => {
      contractVariants.forEach(variant => {
        expect(variantClasses).toHaveProperty(variant);
      });
    });

    it('should not have extra variants in skin not defined in contract', () => {
      const implementedVariants = Object.keys(variantClasses);
      implementedVariants.forEach(variant => {
        expect(contractVariants).toContain(variant);
      });
    });
  });

  describe('Size Consistency', () => {
    const contractSizes = buttonContractDef.variants.find(v => v.name === 'size')?.values || [];

    it('should have all contract sizes implemented in skin', () => {
      contractSizes.forEach(size => {
        expect(sizeClasses).toHaveProperty(size);
      });
    });

    it('should not have extra sizes in skin not defined in contract', () => {
      const implementedSizes = Object.keys(sizeClasses);
      implementedSizes.forEach(size => {
        expect(contractSizes).toContain(size);
      });
    });
  });

  describe('Contract Value Integrity', () => {
    it('should have base styles defined in contract', () => {
      expect(buttonSkinContractDef.base).toBeDefined();
      expect(buttonSkinContractDef.base.borderRadius).toBeDefined();
      expect(buttonSkinContractDef.base.fontWeight).toBeDefined();
      expect(buttonSkinContractDef.base.transition).toBeDefined();
    });

    it('should have disabled styles defined in contract', () => {
      expect(buttonSkinContractDef.disabled).toBeDefined();
      expect(buttonSkinContractDef.disabled.opacity).toBeDefined();
      expect(buttonSkinContractDef.disabled.cursor).toBeDefined();
    });
  });

  describe('Behavior Consistency', () => {
    it('should have icon behavior defined in contract', () => {
       const iconProp = buttonContractDef.props.find(p => p.name === 'leftIcon');
       expect(iconProp).toBeDefined();
    });

    it('should have loader behavior defined in contract', () => {
        const loadingProp = buttonContractDef.props.find(p => p.name === 'isLoading');
        expect(loadingProp).toBeDefined();
    });
  });
});

/**
 * Integration Tests
 * Ensures that the Component renders correctly and behaves as expected.
 */
describe('Button Component Integration', () => {
  
  describe('ButtonTailwind', () => {
    it('should render children correctly', () => {
      render(<ButtonTailwind>Click Me</ButtonTailwind>);
      expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('should apply disabled state when disabled prop is true', () => {
      render(<ButtonTailwind disabled>Disabled</ButtonTailwind>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('should apply disabled state when isLoading is true', () => {
      render(<ButtonTailwind isLoading>Loading</ButtonTailwind>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('should render left icon when provided', () => {
      render(<ButtonTailwind leftIcon={<span data-testid="left-icon">Left</span>}>Button</ButtonTailwind>);
      expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    });

    it('should render right icon when provided', () => {
      render(<ButtonTailwind rightIcon={<span data-testid="right-icon">Right</span>}>Button</ButtonTailwind>);
      expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    });

    it('should hide icons when isLoading is true', () => {
       render(
        <ButtonTailwind 
          isLoading 
          leftIcon={<span data-testid="left-icon">Left</span>}
          rightIcon={<span data-testid="right-icon">Right</span>}
        >
          Button
        </ButtonTailwind>
      );
      expect(screen.queryByTestId('left-icon')).not.toBeInTheDocument();
      expect(screen.queryByTestId('right-icon')).not.toBeInTheDocument();
    });

    it('should render loader when isLoading is true', () => {
      render(<ButtonTailwind isLoading>Loading</ButtonTailwind>);
      // Loader usually has specific class or aria-label, but here we check for presence
      // Implementation detail: ButtonBase renders a loader div
      const button = screen.getByRole('button');
      // We can check if it contains the loader class or element
      // For now, let's assume if text is present and button disabled, it's ok. 
      // Or check if the loader wrapper is there
      expect(button.querySelector('.button-loader-wrapper')).toBeInTheDocument();
    });

    it('should forward ref correctly', () => {
      const ref = { current: null };
      render(<ButtonTailwind ref={ref}>Button</ButtonTailwind>);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('should apply custom className', () => {
      render(<ButtonTailwind className="custom-class">Button</ButtonTailwind>);
      expect(screen.getByRole('button')).toHaveClass('custom-class');
    });

    it('should pass through additional props', () => {
      render(<ButtonTailwind data-testid="test-button" aria-label="Custom Label">Button</ButtonTailwind>);
      const button = screen.getByTestId('test-button');
      expect(button).toHaveAttribute('aria-label', 'Custom Label');
    });

    it('should render with default variant and size', () => {
        render(<ButtonTailwind>Default</ButtonTailwind>);
        const button = screen.getByRole('button');
        // Check if default variant classes are applied
        // variantClasses.primary contains the expected classes
        // We can't easily check the full string match because of arbitrary values format
        // But we can check if it contains part of the primary variant definition
        const { variants } = buttonSkinContractDef;
        const expectedBg = variants.primary.backgroundColor;
        expect(button).toHaveClass(`bg-[${expectedBg}]`);
    });

    it('should render with custom variant', () => {
        render(<ButtonTailwind variant="danger">Danger</ButtonTailwind>);
        const button = screen.getByRole('button');
        const { variants } = buttonSkinContractDef;
        const expectedBg = variants.danger.backgroundColor;
        expect(button).toHaveClass(`bg-[${expectedBg}]`);
    });

    it('should render with custom size', () => {
        render(<ButtonTailwind size="lg">Large</ButtonTailwind>);
        const button = screen.getByRole('button');
        const { sizes } = buttonSkinContractDef;
        const expectedHeight = sizes.lg.height;
        expect(button).toHaveClass(`h-[${expectedHeight}]`);
    });
    
    it('should merge custom className with base classes', () => {
      render(<ButtonTailwind className="custom-class">Button</ButtonTailwind>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
      // Should also have base classes
      expect(button).toHaveClass('inline-flex'); 
    });

    it('should handle loading state', () => {
       const { disabled } = buttonSkinContractDef;
       render(<ButtonTailwind isLoading>Loading</ButtonTailwind>);
       const button = screen.getByRole('button');
       expect(button).toHaveClass(`disabled:opacity-[${disabled.opacity}]`);
       expect(button).toHaveClass(`disabled:cursor-[${disabled.cursor}]`);
    });

    it('should handle disabled state', () => {
      const { disabled } = buttonSkinContractDef;
      render(<ButtonTailwind disabled>Disabled</ButtonTailwind>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass(`disabled:opacity-[${disabled.opacity}]`);
      expect(button).toHaveClass(`disabled:cursor-[${disabled.cursor}]`);
    });
  });

  describe('ButtonNative', () => {
    it('should render with default variant and size', () => {
      render(<ButtonNative>Click</ButtonNative>);
      const button = screen.getByRole('button');
      // Use contract definition as source of truth
      expect(button.style.backgroundColor).toBe(buttonSkinContractDef.variants.primary.backgroundColor);
      expect(button.style.color).toBe(buttonSkinContractDef.variants.primary.color);
    });

    it('should render with custom variant', () => {
      render(<ButtonNative variant="danger">Delete</ButtonNative>);
      const button = screen.getByRole('button');
      expect(button.style.backgroundColor).toBe(buttonSkinContractDef.variants.danger.backgroundColor);
      expect(button.style.color).toBe(buttonSkinContractDef.variants.danger.color);
    });

    it('should render with custom size', () => {
      render(<ButtonNative size="lg">Large</ButtonNative>);
      const button = screen.getByRole('button');
      expect(button.style.height).toBe(buttonSkinContractDef.sizes.lg.height);
      // We skip checking padding/fontSize specifically if they are complex strings, 
      // but height is usually a direct value in contract
    });

    it('should merge custom style with base styles', () => {
      render(<ButtonNative style={{ margin: '10px' }}>Click</ButtonNative>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ margin: '10px' });
      expect(button).toHaveStyle({ display: 'inline-flex' });
    });

    it('should handle loading state', () => {
      render(<ButtonNative isLoading>Loading</ButtonNative>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute('aria-busy', 'true');
    });

    it('should handle disabled state', () => {
      render(<ButtonNative disabled>Disabled</ButtonNative>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes for disabled state', () => {
      render(<ButtonBase disabled>Disabled</ButtonBase>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('should have proper ARIA attributes for loading state', () => {
      render(<ButtonBase isLoading>Loading</ButtonBase>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-busy', 'true');
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('should hide loader from screen readers', () => {
      render(<ButtonBase isLoading>Loading</ButtonBase>);
      const loaderWrapper = screen.getByRole('button').querySelector('.button-loader-wrapper');
      expect(loaderWrapper).toHaveAttribute('aria-hidden', 'true');
    });
  });
});
