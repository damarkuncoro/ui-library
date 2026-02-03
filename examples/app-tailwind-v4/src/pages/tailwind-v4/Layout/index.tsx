import { PageLayout } from '../../../components/common/page-layout';
import { PageHeader } from '../../../components/common/page-header';
import { AspectRatio } from './components/AspectRatio';
import { Columns } from './components/Columns';
import { BreakUtilities } from './components/BreakUtilities';
import { BoxDecorationBreak } from './components/BoxDecorationBreak';
import { BoxSizing } from './components/BoxSizing';
import { Display } from './components/Display';
import { FloatClear } from './components/FloatClear';
import { Isolation } from './components/Isolation';
import { ObjectFitPosition } from './components/ObjectFitPosition';
import { Overflow } from './components/Overflow';
import { OverscrollBehavior } from './components/OverscrollBehavior';
import { Position } from './components/Position';
import { PositioningUtilities } from './components/PositioningUtilities';
import { Visibility } from './components/Visibility';
import { ZIndex } from './components/ZIndex';

export function LayoutPage() {
  return (
    <PageLayout>
      <PageHeader 
        title="Layout Utilities" 
        description="Comprehensive layout utilities for controlling element positioning, sizing, and display behavior." 
      />

      <div className="space-y-12">
        <AspectRatio />
        <Columns />
        <BreakUtilities />
        <BoxDecorationBreak />
        <BoxSizing />
        <Display />
        <FloatClear />
        <Isolation />
        <ObjectFitPosition />
        <Overflow />
        <OverscrollBehavior />
        <Position />
        <PositioningUtilities />
        <Visibility />
        <ZIndex />
      </div>
    </PageLayout>
  );
}
