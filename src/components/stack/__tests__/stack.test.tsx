import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Stack } from '../index';
import '@testing-library/jest-dom';

describe('Stack Component', () => {
  it('renders children correctly', () => {
    render(
      <Stack>
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(<Stack data-testid="stack" />);
    const stack = screen.getByTestId('stack');
    expect(stack).toHaveClass('flex', 'flex-col', 'items-stretch', 'justify-start', 'gap-2', 'flex-nowrap');
  });

  it('applies direction classes', () => {
    render(<Stack data-testid="stack-row" direction="row" />);
    expect(screen.getByTestId('stack-row')).toHaveClass('flex-row');

    render(<Stack data-testid="stack-col-rev" direction="col-reverse" />);
    expect(screen.getByTestId('stack-col-rev')).toHaveClass('flex-col-reverse');
  });

  it('applies align classes', () => {
    render(<Stack data-testid="stack-center" align="center" />);
    expect(screen.getByTestId('stack-center')).toHaveClass('items-center');
  });

  it('applies justify classes', () => {
    render(<Stack data-testid="stack-between" justify="between" />);
    expect(screen.getByTestId('stack-between')).toHaveClass('justify-between');
  });

  it('applies gap classes', () => {
    render(<Stack data-testid="stack-gap-4" gap={4} />);
    expect(screen.getByTestId('stack-gap-4')).toHaveClass('gap-4');
  });

  it('applies wrap classes', () => {
    render(<Stack data-testid="stack-wrap" wrap />);
    expect(screen.getByTestId('stack-wrap')).toHaveClass('flex-wrap');
  });

  it('renders as a different element', () => {
    render(<Stack as="section" data-testid="stack-section" />);
    const stack = screen.getByTestId('stack-section');
    expect(stack.tagName).toBe('SECTION');
  });

  it('merges custom className', () => {
    render(<Stack data-testid="stack-custom" className="bg-red-500" />);
    expect(screen.getByTestId('stack-custom')).toHaveClass('bg-red-500');
  });
});
