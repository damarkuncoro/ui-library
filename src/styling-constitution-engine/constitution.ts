import { defaultStylingEngine } from '../theme/styling-engine';
import { colorContractDef } from '../theme/contracts/color-contract';
import { Constitution } from './types';

// Adapting the existing StylingEngine to the Constitution interface
export const designConstitution: Constitution = {
  colors: {
    ...flattenColors(defaultStylingEngine.palette),
    ...flattenColors(colorContractDef)
  },
  spacing: defaultStylingEngine.spacing as unknown as Record<string, string>,
  fontSizes: defaultStylingEngine.typography.fontSize as unknown as Record<string, string>,
  fontWeights: defaultStylingEngine.typography.fontWeight as unknown as Record<string, string>,
  radius: defaultStylingEngine.borders.radius as unknown as Record<string, string>,
  borderWidths: defaultStylingEngine.borders.width as unknown as Record<string, string>,
  shadows: defaultStylingEngine.effects.boxShadow as unknown as Record<string, string>,
  sizing: defaultStylingEngine.sizing.values as unknown as Record<string, string>,
  lineHeights: defaultStylingEngine.typography.lineHeight as unknown as Record<string, string>,
  letterSpacings: defaultStylingEngine.typography.letterSpacing as unknown as Record<string, string>,
  opacity: defaultStylingEngine.effects.opacity as unknown as Record<string, string>,
  zIndex: defaultStylingEngine.layout.zIndex as unknown as Record<string, string>,
  transitions: defaultStylingEngine.transitions.transitionProperty as unknown as Record<string, string>,
  durations: defaultStylingEngine.transitions.transitionDuration as unknown as Record<string, string>,
  easings: defaultStylingEngine.transitions.transitionTimingFunction as unknown as Record<string, string>,
  animations: defaultStylingEngine.animation.animation as unknown as Record<string, string>,
  transforms: defaultStylingEngine.transforms as unknown as Record<string, string>,
  scale: defaultStylingEngine.transforms.scale as unknown as Record<string, string>,
  rotate: defaultStylingEngine.transforms.rotate as unknown as Record<string, string>,
  skew: defaultStylingEngine.transforms.skew as unknown as Record<string, string>,
  translate: defaultStylingEngine.transforms.translate as unknown as Record<string, string>,
  widths: {
    ...defaultStylingEngine.sizing.values,
    ...defaultStylingEngine.sizing.width
  } as unknown as Record<string, string>,
  heights: {
    ...defaultStylingEngine.sizing.values,
    ...defaultStylingEngine.sizing.height
  } as unknown as Record<string, string>,
  minWidths: defaultStylingEngine.sizing.minWidth as unknown as Record<string, string>,
  maxWidths: defaultStylingEngine.sizing.maxWidth as unknown as Record<string, string>,
  minHeights: defaultStylingEngine.sizing.minHeight as unknown as Record<string, string>,
  maxHeights: defaultStylingEngine.sizing.maxHeight as unknown as Record<string, string>,
  // Flexbox
  flexDirection: defaultStylingEngine.flex.direction as unknown as Record<string, string>,
  flexWrap: defaultStylingEngine.flex.wrap as unknown as Record<string, string>,
  justifyContent: defaultStylingEngine.flex.justify as unknown as Record<string, string>,
  alignItems: defaultStylingEngine.flex.align as unknown as Record<string, string>,
  alignContent: {} as Record<string, string>, // Not in contract yet
  flexValues: defaultStylingEngine.flex.flex as unknown as Record<string, string>,
  flexGrow: defaultStylingEngine.flex.grow as unknown as Record<string, string>,
  flexShrink: defaultStylingEngine.flex.shrink as unknown as Record<string, string>,
  order: defaultStylingEngine.flex.order as unknown as Record<string, string>,
  // Grid
  gridTemplateColumns: defaultStylingEngine.grid.cols as unknown as Record<string, string>,
  gridTemplateRows: defaultStylingEngine.grid.rows as unknown as Record<string, string>,
  gap: defaultStylingEngine.spacing as unknown as Record<string, string>,
  aspectRatio: defaultStylingEngine.aspectRatio.aspectRatio as unknown as Record<string, string>,
};

// Helper to flatten nested colors
function flattenColors(palette: any, prefix = ''): Record<string, string> {
  const result: Record<string, string> = {};
  for (const key in palette) {
    if (typeof palette[key] === 'object' && palette[key] !== null) {
      const nested = flattenColors(palette[key], `${prefix}${key}-`);
      Object.assign(result, nested);
    } else {
      result[`${prefix}${key}`] = palette[key];
    }
  }
  return result;
}
