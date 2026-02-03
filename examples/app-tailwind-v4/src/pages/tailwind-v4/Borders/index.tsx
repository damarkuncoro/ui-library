import { PageLayout } from '../../../components/common/page-layout';
import { PageHeader } from '../../../components/common/page-header';
import { ExampleSection } from '../../../components/common/example-section';
import { BorderWidth } from './components/BorderWidth';
import { BorderColor } from './components/BorderColor';
import { BorderStyle } from './components/BorderStyle';
import { BorderRadius } from './components/BorderRadius';
import { PracticalExamples } from './components/PracticalExamples';

export function BordersPage() {
  return (
    <PageLayout>
      <PageHeader 
        title="Borders Utilities" 
        description="Comprehensive border utilities for controlling width, color, style, and radius of element borders." 
      />

      <div className="space-y-12">
        <ExampleSection 
          title="Border Width" 
          description="Control the width of borders with all sides, individual sides, and horizontal/vertical utilities."
        >
          <BorderWidth />
        </ExampleSection>

        <ExampleSection 
          title="Border Color" 
          description="Control the color of borders with all sides, individual sides, and horizontal/vertical utilities."
        >
          <BorderColor />
        </ExampleSection>

        <ExampleSection 
          title="Border Style" 
          description="Control the style of borders with solid, dashed, dotted, and double options."
        >
          <BorderStyle />
        </ExampleSection>

        <ExampleSection 
          title="Border Radius" 
          description="Control the radius of element corners with predefined and numeric values."
        >
          <BorderRadius />
        </ExampleSection>

        <ExampleSection 
          title="Practical Examples" 
          description="Real-world border patterns for common use cases."
        >
          <PracticalExamples />
        </ExampleSection>
      </div>
    </PageLayout>
  );
}