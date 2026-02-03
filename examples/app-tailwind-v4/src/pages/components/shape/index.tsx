import { 
  ShapeVariantExamples, 
  ShapeSizeExamples,
  tokens
} from '@damarkuncoro/ui-library';
import { PageLayout } from '../../../components/common/page-layout';
import { PageHeader } from '../../../components/common/page-header';
import { ExampleSection } from '../../../components/common/example-section';

export function ShapePage() {
  return (
    <PageLayout>
      <PageHeader 
        title="Shape Component" 
        description="A primitive component for creating various geometric shapes." 
      />

      <div className="space-y-12">
        <ExampleSection 
          title="Variants" 
          description="Different geometric shapes available."
        >
          <ShapeVariantExamples />
        </ExampleSection>

        <ExampleSection 
          title="Sizes" 
          description="Standardized sizes from xs to xl."
        >
          <ShapeSizeExamples />

          <div className="grid grid-cols-3 gap-4">
            {Object.entries(tokens.borders.radius).map(([key, value]) => (
              <div key={key} className={`bg-neutral-200 p-4 border border-neutral-300 flex items-center justify-center rounded-[${value}]`}>
                <span className="text-sm font-medium text-neutral-600">{key}</span>
              </div>
            ))}
          </div>
          
        </ExampleSection>
      </div>
    </PageLayout>
  );
}
