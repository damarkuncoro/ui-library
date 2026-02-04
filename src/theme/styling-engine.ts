import { StylingEngineContract } from './contracts/styling-engine-contract';
import { colorPalette } from './contracts/color-contract';
import { layoutContract } from './contracts/layout-contract';
import { flexContract } from './contracts/flex-contract';
import { gridContract } from './contracts/grid-contract';
import { sizingContract } from './contracts/sizing-contract';
import { spacingContract } from './contracts/spacing-contract';
import { typographyContract } from './contracts/typography-contract';
import { bordersContract } from './contracts/borders-contract';
import { backgroundsContract } from './contracts/backgrounds-contract';
import { effectsContract } from './contracts/effects-contract';
import { tablesContract } from './contracts/tables-contract';
import { animationContract } from './contracts/animation-contract';
import { aspectRatioContract } from './contracts/aspect-ratio-contract';
import { columnsContract } from './contracts/columns-contract';
import { breakAfterContract } from './contracts/break-after-contract';
import { breakBeforeContract } from './contracts/break-before-contract';
import { breakInsideContract } from './contracts/break-inside-contract';
import { boxDecorationBreakContract } from './contracts/box-decoration-break-contract';
import { boxSizingContract } from './contracts/box-sizing-contract';
import { displayContract } from './contracts/display-contract';
import { floatContract } from './contracts/float-contract';
import { clearContract } from './contracts/clear-contract';
import { isolationContract } from './contracts/isolation-contract';
import { objectFitContract } from './contracts/object-fit-contract';
import { objectPositionContract } from './contracts/object-position-contract';
import { overflowContract } from './contracts/overflow-contract';
import { overscrollBehaviorContract } from './contracts/overscroll-behavior-contract';
import { positionContract } from './contracts/position-contract';
import { insetContract } from './contracts/inset-contract';
import { accessibilityContract } from './contracts/accessibility-contract';
import { interactivityContract } from './contracts/interactivity-contract';
import { transitionsContract } from './contracts/transitions-contract';
import { transformsContract } from './contracts/transforms-contract';

// --- DEFAULT STYLING ENGINE IMPLEMENTATION ---
// This object serves as the reference implementation of the StylingEngineContract.
// It aggregates all the atomic contracts into a single "Theme" object.

export const defaultStylingEngine: StylingEngineContract = {
  palette: colorPalette,
  layout: layoutContract,
  flex: flexContract,
  grid: gridContract,
  sizing: sizingContract,
  spacing: spacingContract,
  typography: typographyContract,
  borders: bordersContract,
  backgrounds: backgroundsContract,
  effects: effectsContract,
  tables: tablesContract,
  animation: animationContract,
  aspectRatio: aspectRatioContract,
  columns: columnsContract,
  breakAfter: breakAfterContract,
  breakBefore: breakBeforeContract,
  breakInside: breakInsideContract,
  boxDecorationBreak: boxDecorationBreakContract,
  boxSizing: boxSizingContract,
  display: displayContract,
  float: floatContract,
  clear: clearContract,
  isolation: isolationContract,
  objectFit: objectFitContract,
  objectPosition: objectPositionContract,
  overflow: overflowContract,
  overscrollBehavior: overscrollBehaviorContract,
  position: positionContract,
  inset: insetContract,
  accessibility: accessibilityContract,
  interactivity: interactivityContract,
  transitions: transitionsContract,
  transforms: transformsContract,
};
