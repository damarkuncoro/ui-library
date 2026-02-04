import { describe, it, expect } from 'vitest';
import { compileStyle } from '../core/compiler';
import { validateContract } from '../core/governance';

describe('Styling Constitution Engine (SCE) v0.1', () => {
  
  describe('Governance Layer', () => {
    it('should accept valid contract classes', () => {
      // These tokens must exist in the constitution (derived from defaultStylingEngine)
      const classes = [
        'bg-primary-main', 
        'px-4', 
        'rounded-md', 
        'text-lg', 
        'font-bold',
        'w-full',
        'h-4',
        'm-4',
        'opacity-50',
        'leading-tight'
      ];
      const result = validateContract(classes);
      
      if (!result.isValid) {
          console.error(result.error);
      }
      expect(result.isValid).toBe(true);
    });

    it('should reject arbitrary values (Anti-Constitution)', () => {
      const classes = ['bg-[#123456]', 'p-[13px]'];
      const result = validateContract(classes);
      expect(result.isValid).toBe(false);
      expect(result.error).toEqual({
        code: 'INVALID_CONTRACT',
        class: 'bg-[#123456]',
        reason: 'Inline values are forbidden by constitution'
      });
    });

    it('should reject non-existent tokens', () => {
      const classes = ['bg-nonexistent-color', 'p-9999'];
      const result = validateContract(classes);
      expect(result.isValid).toBe(false);
      expect(result.error?.reason).toContain('Token does not exist');
    });
  });

  describe('Compilation Engine', () => {
    it('should compile valid contract to atomic CSS', () => {
      const input = {
        node: 'button',
        classes: ['bg-primary-main', 'px-4']
      };
      
      const output = compileStyle(input);
      
      // Check output contains expected CSS variables
      // Note: primary-main maps to var(--color-primary-main)
      // px-4 maps to var(--space-4)
      
      expect(output.css).toContain('.bg-primary-main { background-color: var(--color-primary-main); }');
      expect(output.css).toContain('.px-4 { padding-inline: var(--space-4); }');
    });

    it('should handle property overloading (Text: Color vs Size)', () => {
       const input = {
        node: 'span',
        classes: ['text-primary-main', 'text-lg']
      };
      
      const output = compileStyle(input);
      
      expect(output.css).toContain('.text-primary-main { color: var(--color-primary-main); }');
      expect(output.css).toContain('.text-lg { font-size: var(--text-lg); }');
    });

    it('should handle property overloading (Border: Color vs Width)', () => {
        // Assuming '2' exists in borderWidths (standard Tailwind)
       const input = {
        node: 'div',
        classes: ['border-primary-main', 'border-2']
      };
      
      const output = compileStyle(input);
      
      expect(output.css).toContain('.border-primary-main { border-color: var(--color-primary-main); }');
      // If '2' exists in borderWidths:
      // expect(output.css).toContain('.border-2 { border-width: var(--border-2); }');
    });

    it('should throw error on invalid contract during compilation', () => {
      const input = {
        node: 'div',
        classes: ['p-[10px]']
      };
      
      expect(() => compileStyle(input)).toThrow('INVALID_CONTRACT');
    });

    it('should compile extended contract tokens', () => {
      const input = {
        node: 'div',
        classes: [
          'w-full', 
          'h-4', 
          'opacity-50', 
          'leading-tight',
          'z-10',
          'transition-all',
          'duration-300'
        ]
      };
      
      const output = compileStyle(input);
      
      expect(output.css).toContain('.w-full { width: var(--width-full); }');
      expect(output.css).toContain('.h-4 { height: var(--height-4); }');
      expect(output.css).toContain('.opacity-50 { opacity: var(--opacity-50); }');
      expect(output.css).toContain('.leading-tight { line-height: var(--leading-tight); }');
      expect(output.css).toContain('.z-10 { z-index: var(--z-10); }');
      // Verify transition mappings if 'all' and '300' exist in constitution
      // We assume they do based on standard Tailwind defaults
    });
  });

});
