import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ShapeSkinTailwind } from '../skins/shape-skin-tailwind';

describe('ShapeSkinTailwind', () => {
  it('should verify square variant uses aspect-ratio and excludes fixed height', () => {
    render(<ShapeSkinTailwind variant="square" size="md" data-testid="shape-square" />);
    
    const shape = screen.getByTestId('shape-square');
    const classList = shape.className;

    // Check aspect ratio class
    // Note: tokens.aspectRatio.square is '1/1', which maps to aspect-square
    expect(classList).toContain('aspect-square');
    
    // Check width class is present (md width = sizing[12])
    // We don't check exact value here, just that 'w-' exists
    expect(classList).toMatch(/w-\[[^\]]+\]/);
    
    // CRITICAL: Check height class is ABSENT for square variant
    // This confirms our responsiveness fix
    expect(classList).not.toMatch(/h-\[[^\]]+\]/);
  });

  it('should verify box variant includes fixed height', () => {
    render(<ShapeSkinTailwind variant="box" size="md" data-testid="shape-box" />);
    
    const shape = screen.getByTestId('shape-box');
    const classList = shape.className;

    // Check width class is present
    expect(classList).toMatch(/w-\[[^\]]+\]/);
    
    // CRITICAL: Check height class is PRESENT for box variant (default behavior)
    expect(classList).toMatch(/h-\[[^\]]+\]/);
  });

  it('should verify circle variant also excludes fixed height', () => {
    render(<ShapeSkinTailwind variant="circle" size="lg" data-testid="shape-circle" />);
    
    const shape = screen.getByTestId('shape-circle');
    const classList = shape.className;

    expect(classList).toContain('aspect-square');
    expect(classList).not.toMatch(/h-\[[^\]]+\]/);
  });
});
