import { PageLayout } from '../../../components/common/page-layout';
import { PageHeader } from '../../../components/common/page-header';
import { ExampleSection } from '../../../components/common/example-section';
import { Width } from './components/Width';
import { Height } from './components/Height';
import { MaxWidth } from './components/MaxWidth';
import { MaxHeight } from './components/MaxHeight';
import { MinWidth } from './components/MinWidth';
import { MinHeight } from './components/MinHeight';
import { PracticalExamples } from './components/PracticalExamples';

export function SizingPage() {
  return (
    <PageLayout>
      <PageHeader 
        title="Sizing Utilities" 
        description="Comprehensive sizing utilities for controlling element width, height, and dimensions." 
      />

      <div className="space-y-12">
        <ExampleSection 
          title="Width" 
          description="Control the width of elements with fixed, percentage, and special values."
        >
          <Width />
        </ExampleSection>

        <ExampleSection 
          title="Height" 
          description="Control the height of elements with fixed, percentage, and special values."
        >
          <Height />
        </ExampleSection>

        <ExampleSection 
          title="Max Width" 
          description="Set maximum width constraints for responsive layouts."
        >
          <MaxWidth />
        </ExampleSection>

        <ExampleSection 
          title="Max Height" 
          description="Set maximum height constraints for scrollable content."
        >
          <MaxHeight />
        </ExampleSection>

        <ExampleSection 
          title="Min Width" 
          description="Set minimum width constraints to prevent content from becoming too narrow."
        >
          <MinWidth />
        </ExampleSection>

        <ExampleSection 
          title="Min Height" 
          description="Set minimum height constraints for consistent spacing."
        >
          <MinHeight />
        </ExampleSection>

        <ExampleSection 
          title="Practical Examples" 
          description="Real-world sizing patterns for common use cases."
        >
          <PracticalExamples />
        </ExampleSection>
      </div>
    </PageLayout>
  );
}