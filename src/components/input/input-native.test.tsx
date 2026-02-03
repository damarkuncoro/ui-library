import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { InputNative } from './input-skin-native';
import { inputSkinContractDef } from './input-skin-contract';

describe('InputNative Component', () => {
  const { variants, sizes } = inputSkinContractDef;

  it('should render with default props', () => {
    render(<InputNative placeholder="Native Input" />);
    const input = screen.getByPlaceholderText('Native Input');
    expect(input).toBeInTheDocument();
    
    // Check if inline styles are applied (check critical style)
    expect(input).toHaveAttribute('style', expect.stringContaining('background-color: transparent'));
  });

  it('should apply size styles', () => {
    render(<InputNative size="lg" placeholder="Large Input" />);
    const input = screen.getByPlaceholderText('Large Input');
    
    expect(input).toHaveStyle({
      height: sizes.lg.height,
      fontSize: sizes.lg.fontSize,
    });
  });

  it('should render icons', () => {
    render(<InputNative leftIcon={<span data-testid="left-icon">L</span>} />);
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
  });

  it('should handle disabled state', () => {
    render(<InputNative isDisabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
    
    // Check if opacity is applied in style attribute
    expect(input).toHaveAttribute('style', expect.stringContaining('opacity: 0.5'));
  });
});
