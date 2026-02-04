import { render } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { TextSkinTailwind as Text } from '../skins/text-skin-tailwind';

describe('Text Component - SCE Integration', () => {
  const originalError = console.error;
  
  afterEach(() => {
    console.error = originalError;
    vi.clearAllMocks();
  });

  it('should log constitutional violation for arbitrary values', () => {
    console.error = vi.fn();
    
    // Render with an arbitrary value class (forbidden by constitution)
    render(<Text className="p-[13px]">Hello</Text>);
    
    expect(console.error).toHaveBeenCalled();
    const errorArgs = (console.error as any).mock.calls[0][0];
    expect(errorArgs).toContain('[SCE] Constitutional Violation');
    expect(errorArgs).toContain('p-[13px]');
  });

  it('should NOT log violation for valid contract classes', () => {
    console.error = vi.fn();
    
    // Render with valid classes
    render(<Text className="text-center font-bold">Hello</Text>);
    
    expect(console.error).not.toHaveBeenCalled();
  });
});
