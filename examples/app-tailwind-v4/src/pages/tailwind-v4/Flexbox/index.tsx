import { PageLayout } from '../../../components/common/page-layout';
import { PageHeader } from '../../../components/common/page-header';
import { FlexDirection } from './components/FlexDirection';
import { FlexWrap } from './components/FlexWrap';
import { JustifyContent } from './components/JustifyContent';
import { AlignItems } from './components/AlignItems';
import { AlignContent } from './components/AlignContent';
import { AlignSelf } from './components/AlignSelf';
import { FlexGrow } from './components/FlexGrow';
import { FlexShrink } from './components/FlexShrink';
import { FlexBasis } from './components/FlexBasis';
import { FlexShorthand } from './components/FlexShorthand';
import { Gap } from './components/Gap';
import { Order } from './components/Order';
import { PracticalExamples } from './components/PracticalExamples';

export function FlexboxPage() {
  return (
    <PageLayout>
      <PageHeader 
        title="Flexbox Utilities" 
        description="Comprehensive flexbox utilities for creating flexible, responsive layouts." 
      />

      <div className="space-y-12">
        <FlexDirection />
        <FlexWrap />
        <JustifyContent />
        <AlignItems />
        <AlignContent />
        <AlignSelf />
        <FlexGrow />
        <FlexShrink />
        <FlexBasis />
        <FlexShorthand />
        <Gap />
        <Order />
        <PracticalExamples />
      </div>
    </PageLayout>
  );
}
