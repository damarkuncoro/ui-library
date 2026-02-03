import { PageLayout } from '../../../components/common/page-layout';
import { PageHeader } from '../../../components/common/page-header';
import { ExampleSection } from '../../../components/common/example-section';
import { GridTemplateColumns } from './components/GridTemplateColumns';
import { GridTemplateRows } from './components/GridTemplateRows';
import { GridGap } from './components/GridGap';
import { GridColSpan } from './components/GridColSpan';
import { GridRowSpan } from './components/GridRowSpan';
import { GridAutoFlow } from './components/GridAutoFlow';
import { GridAutoColumns } from './components/GridAutoColumns';
import { GridAutoRows } from './components/GridAutoRows';
import { PracticalExamples } from './components/PracticalExamples';

export function GridPage() {
  return (
    <PageLayout>
      <PageHeader 
        title="Grid Utilities" 
        description="Comprehensive grid utilities for creating powerful two-dimensional layouts." 
      />

      <div className="space-y-12">
        <ExampleSection 
          title="Grid Template Columns" 
          description="Control the column layout of a grid container."
        >
          <GridTemplateColumns />
        </ExampleSection>

        <ExampleSection 
          title="Grid Template Rows" 
          description="Control the row layout of a grid container."
        >
          <GridTemplateRows />
        </ExampleSection>

        <ExampleSection 
          title="Grid Gap" 
          description="Control the spacing between grid items."
        >
          <GridGap />
        </ExampleSection>

        <ExampleSection 
          title="Grid Column Span" 
          description="Control how many columns a grid item should span."
        >
          <GridColSpan />
        </ExampleSection>

        <ExampleSection 
          title="Grid Row Span" 
          description="Control how many rows a grid item should span."
        >
          <GridRowSpan />
        </ExampleSection>

        <ExampleSection 
          title="Grid Auto Flow" 
          description="Control how auto-placed items are flowed in the grid."
        >
          <GridAutoFlow />
        </ExampleSection>

        <ExampleSection 
          title="Grid Auto Columns" 
          description="Control the size of implicitly-created column tracks."
        >
          <GridAutoColumns />
        </ExampleSection>

        <ExampleSection 
          title="Grid Auto Rows" 
          description="Control the size of implicitly-created row tracks."
        >
          <GridAutoRows />
        </ExampleSection>

        <ExampleSection 
          title="Practical Examples" 
          description="Real-world grid layout patterns for common use cases."
        >
          <PracticalExamples />
        </ExampleSection>
      </div>
    </PageLayout>
  );
}