import { 
  InputVariantExamples, 
  InputSizeExamples, 
  InputIconExamples, 
  InputStateExamples, 
  InputCombinedExamples
} from '@damarkuncoro/ui-library';
import { PageLayout } from '../../../components/common/page-layout';
import { PageHeader } from '../../../components/common/page-header';
import { ExampleSection } from '../../../components/common/example-section';

export function InputPage() {
  return (
    <PageLayout>
      <PageHeader 
        title="Input Component" 
        description="Text inputs with support for multiple variants, sizes, icons and states." 
      />

      <div className="space-y-12">
        <ExampleSection 
          title="Variants" 
          description="Different visual styles for various contexts."
        >
          <InputVariantExamples />
        </ExampleSection>

        <ExampleSection 
          title="Sizes" 
          description="Inputs come in three sizes: small, medium, and large."
        >
          <InputSizeExamples />
        </ExampleSection>

        <ExampleSection 
          title="Icons" 
          description="Add icons to the left or right of the input for visual cues."
        >
          <InputIconExamples />
        </ExampleSection>

        <ExampleSection 
          title="States" 
          description="Visual feedback for interaction states like disabled, read-only, and invalid."
        >
          <InputStateExamples />
        </ExampleSection>

        <ExampleSection 
          title="Combined Usage" 
          description="Real-world examples combining multiple properties."
        >
          <InputCombinedExamples />
        </ExampleSection>
      </div>
    </PageLayout>
  );
}
