import { 
  ButtonVariantExamples, 
  ButtonSizeExamples, 
  ButtonIconExamples, 
  ButtonStateExamples, 
  ButtonCombinedExamples,
  ButtonNativeSkinExamples,
  ButtonAccessibilityExamples,
  ButtonPaddingExamples
} from '@damarkuncoro/ui-library';
import { PageLayout } from '../../../components/common/page-layout';
import { PageHeader } from '../../../components/common/page-header';
import { ExampleSection } from '../../../components/common/example-section';

export function ButtonPage() {
  return (
    <PageLayout>
      <PageHeader 
        title="Button Component" 
        description="Interactive buttons with support for multiple variants, sizes, and states." 
      />

      <div className="space-y-12">
        <ExampleSection 
          title="Variants" 
          description="Use different variants to communicate action hierarchy."
        >
          <ButtonVariantExamples />
        </ExampleSection>

        <ExampleSection 
          title="Sizes" 
          description="Buttons come in three sizes: small, medium, and large."
        >
          <ButtonSizeExamples />
        </ExampleSection>

        <ExampleSection 
          title="Icons" 
          description="Add icons to the left or right of the text for visual cues."
        >
          <ButtonIconExamples />
        </ExampleSection>

        <ExampleSection 
          title="States" 
          description="Visual feedback for interaction states like disabled and loading."
        >
          <ButtonStateExamples />
        </ExampleSection>

        <ExampleSection 
          title="Combined Usage" 
          description="Real-world examples combining multiple properties."
        >
          <ButtonCombinedExamples />
        </ExampleSection>

        <ExampleSection 
          title="Native Skin" 
          description="The same component logic rendered with standard HTML styles (no Tailwind)."
        >
          <ButtonNativeSkinExamples />
        </ExampleSection>

        <ExampleSection 
          title="Accessibility" 
          description="Built-in keyboard navigation and ARIA support."
        >
          <ButtonAccessibilityExamples />
        </ExampleSection>

        <ExampleSection 
          title="Padding Customization" 
          description="Override default horizontal padding with the paddingX prop."
        >
          <ButtonPaddingExamples />
        </ExampleSection>
      </div>
    </PageLayout>
  );
}
