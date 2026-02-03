import { 
  ShapeVariantExamples, 
  ShapeSizeExamples,
  tokens
} from '@damarkuncoro/ui-library';
import { PageLayout } from '../../../components/common/page-layout';
import { PageHeader } from '../../../components/common/page-header';
import { ExampleSection } from '../../../components/common/example-section';

// Pre-define radius classes to avoid inline styles and ensure Tailwind compatibility
const radiusClassMap: Record<string, string> = {
  none: 'rounded-[var(--radius-none)]',
  sm: 'rounded-[var(--radius-sm)]',
  DEFAULT: 'rounded-[var(--radius)]',
  md: 'rounded-[var(--radius-md)]',
  lg: 'rounded-[var(--radius-lg)]',
  xl: 'rounded-[var(--radius-xl)]',
  '2xl': 'rounded-[var(--radius-2xl)]',
  '3xl': 'rounded-[var(--radius-3xl)]',
  full: 'rounded-[var(--radius-full)]',
};

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
            {Object.entries(tokens.borders.radius).map(([key]) => (
              <div 
                key={key} 
                className={`bg-neutral-200 p-4 border border-neutral-300 flex items-center justify-center ${radiusClassMap[key] || ''}`}
              >
                <span className="text-sm font-medium text-neutral-600">{key}</span>
              </div>
            ))}
          </div>
          
        </ExampleSection>
      </div>
    </PageLayout>
  );
}
