import { PageLayout } from '../../../components/common/page-layout';
import { PageHeader } from '../../../components/common/page-header';
import { ExampleSection } from '../../../components/common/example-section';
import { BoxShadow } from './components/BoxShadow';
import { Opacity } from './components/Opacity';
import { MixBlendMode } from './components/MixBlendMode';
import { PracticalExamples } from './components/PracticalExamples';

export function EffectsPage() {
  return (
    <PageLayout>
      <PageHeader 
        title="Effects Utilities" 
        description="Comprehensive effects utilities for controlling shadows, opacity, and blend modes." 
      />

      <div className="space-y-12">
        <ExampleSection 
          title="Box Shadow" 
          description="Control the shadow of elements with different sizes, colors, and inner shadows."
        >
          <BoxShadow />
        </ExampleSection>

        <ExampleSection 
          title="Opacity" 
          description="Control the opacity of elements with different levels and hover/focus states."
        >
          <Opacity />
        </ExampleSection>

        <ExampleSection 
          title="Mix Blend Mode" 
          description="Control how elements blend with their background using CSS blend modes."
        >
          <MixBlendMode />
        </ExampleSection>

        <ExampleSection 
          title="Practical Examples" 
          description="Real-world effect patterns for common use cases."
        >
          <PracticalExamples />
        </ExampleSection>
      </div>
    </PageLayout>
  );
}