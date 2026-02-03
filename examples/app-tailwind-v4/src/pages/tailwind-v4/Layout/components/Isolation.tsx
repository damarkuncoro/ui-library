import { ExampleSection } from '../../../../components/common/example-section';

export function Isolation() {
  return (
    <ExampleSection 
      title="Isolation" 
      description="Control whether an element creates a new stacking context."
    >
      <div className="relative h-32 bg-gray-100 rounded-lg overflow-hidden">
        <div className="isolate absolute top-4 left-4 w-20 h-20 bg-blue-500 rounded-lg z-10 flex items-center justify-center text-white">
          Isolate
        </div>
        <div className="absolute top-8 left-8 w-20 h-20 bg-red-500 rounded-lg z-0 flex items-center justify-center text-white">
          Behind
        </div>
      </div>
    </ExampleSection>
  );
}
