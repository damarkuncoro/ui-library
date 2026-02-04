import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TextSkinTailwind } from './text-skin-tailwind';

describe('Text Component', () => {
  it('should render with default props', () => {
    render(<TextSkinTailwind>Hello World</TextSkinTailwind>);
    const text = screen.getByText('Hello World');
    expect(text.tagName).toBe('P');
  });

  it('should render as different element', () => {
    render(<TextSkinTailwind as="h1">Heading</TextSkinTailwind>);
    const text = screen.getByText('Heading');
    expect(text.tagName).toBe('H1');
  });

  it('should apply alignment classes', () => {
    render(<TextSkinTailwind align="center">Centered</TextSkinTailwind>);
    const text = screen.getByText('Centered');
    expect(text.className).toContain('text-center');
  });

  it('should apply truncate class', () => {
    render(<TextSkinTailwind truncate>Truncated</TextSkinTailwind>);
    const text = screen.getByText('Truncated');
    expect(text.className).toContain('truncate');
  });
  
  it('should apply noWrap class', () => {
    render(<TextSkinTailwind noWrap>No Wrap</TextSkinTailwind>);
    const text = screen.getByText('No Wrap');
    expect(text.className).toContain('whitespace-nowrap');
  });
});
