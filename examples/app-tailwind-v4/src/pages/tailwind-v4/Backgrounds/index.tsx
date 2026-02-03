import { PageLayout } from '../../../components/common/page-layout';
import { PageHeader } from '../../../components/common/page-header';
import { ExampleSection } from '../../../components/common/example-section';
import { BackgroundColor } from './components/BackgroundColor';
import { Gradient } from './components/Gradient';
import { BackgroundImage } from './components/BackgroundImage';
import { PracticalExamples } from './components/PracticalExamples';

export function BackgroundsPage() {
  return (
    <PageLayout>
      <PageHeader 
        title="Backgrounds Utilities" 
        description="Comprehensive background utilities for controlling color, gradients, and images." 
      />

      <div className="space-y-12">
        <ExampleSection 
          title="Background Color" 
          description="Control the background color of elements with gray scale, color palette, and opacity variants."
        >
          <BackgroundColor />
        </ExampleSection>

        <ExampleSection 
          title="Gradient" 
          description="Create beautiful gradient backgrounds with linear directions, multi-color stops, and custom positions."
        >
          <Gradient />
        </ExampleSection>

        <ExampleSection 
          title="Background Image" 
          description="Control background image positioning, size, and repeat behavior."
        >
          <BackgroundImage />
        </ExampleSection>

        <ExampleSection 
          title="Practical Examples" 
          description="Real-world background patterns for common use cases."
        >
          <PracticalExamples />
        </ExampleSection>
      </div>
    </PageLayout>
  );
}