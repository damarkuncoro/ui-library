import { StackExamples } from '@damarkuncoro/ui-library';
import { PageLayout } from '../../../components/common/page-layout';
import { PageHeader } from '../../../components/common/page-header';
import { ExampleSection } from '../../../components/common/example-section';

export function StackPage() {
  return (
    <PageLayout>
      <PageHeader 
        title="Stack Component" 
        description="A layout primitive that manages layout of immediate children along the vertical or horizontal axis with optional spacing." 
      />

      <div className="space-y-12">
        <ExampleSection 
          title="Stack Examples" 
          description="Various configurations of the Stack component."
        >
          <StackExamples />
        </ExampleSection>
      </div>
    </PageLayout>
  );
}
