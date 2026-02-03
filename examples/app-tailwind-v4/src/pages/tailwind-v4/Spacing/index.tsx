import { PageLayout } from '../../../components/common/page-layout';
import { PageHeader } from '../../../components/common/page-header';
import { ExampleSection } from '../../../components/common/example-section';
import { Padding } from './components/Padding';
import { Margin } from './components/Margin';
import { SpaceBetween } from './components/SpaceBetween';
import { PracticalExamples } from './components/PracticalExamples';

export function SpacingPage() {
  return (
    <PageLayout>
      <PageHeader 
        title="Spacing Utilities" 
        description="Comprehensive spacing utilities for controlling padding, margin, and space between elements." 
      />

      <div className="space-y-12">
        <ExampleSection 
          title="Padding" 
          description="Control the padding of elements with all sides, horizontal/vertical, and individual side utilities."
        >
          <Padding />
        </ExampleSection>

        <ExampleSection 
          title="Margin" 
          description="Control the margin of elements with all sides, horizontal/vertical, individual sides, and negative values."
        >
          <Margin />
        </ExampleSection>

        <ExampleSection 
          title="Space Between" 
          description="Control space between flex and grid children using space-between utilities."
        >
          <SpaceBetween />
        </ExampleSection>

        <ExampleSection 
          title="Practical Examples" 
          description="Real-world spacing patterns for common use cases."
        >
          <PracticalExamples />
        </ExampleSection>
      </div>
    </PageLayout>
  );
}