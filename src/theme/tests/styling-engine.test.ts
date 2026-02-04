import { describe, it, expect } from 'vitest';
import { defaultStylingEngine } from '../core/styling-engine';
import { colorPalette } from '../contracts/color-contract';
import { spacingContract } from '../contracts/spacing-contract';

describe('Styling Engine Contract', () => {
  it('should export a valid styling engine implementation', () => {
    expect(defaultStylingEngine).toBeDefined();
    expect(defaultStylingEngine.palette).toBe(colorPalette);
    expect(defaultStylingEngine.spacing).toBe(spacingContract);
  });

  it('should have all required properties', () => {
    const keys = [
      'palette', 'layout', 'flex', 'grid', 'sizing', 'spacing', 'typography',
      'borders', 'backgrounds', 'effects', 'tables', 'animation', 'aspectRatio',
      'columns', 'breakAfter', 'breakBefore', 'breakInside', 'boxDecorationBreak',
      'boxSizing', 'display', 'float', 'clear', 'isolation', 'objectFit',
      'objectPosition', 'overflow', 'overscrollBehavior', 'position', 'inset',
      'accessibility', 'interactivity', 'transitions', 'transforms'
    ];

    keys.forEach(key => {
      expect(defaultStylingEngine).toHaveProperty(key);
    });
  });
});
