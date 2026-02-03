import { ExampleSection } from '../../../../components/common/example-section';

export function Position() {
  return (
    <ExampleSection 
      title="Position" 
      description="Control how an element is positioned in the document flow."
    >
      <div className="relative h-48 bg-gray-100 rounded-lg p-4">
        <div className="absolute top-4 left-4 w-20 h-20 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs">
          Absolute
        </div>
        <div className="relative top-8 left-8 w-20 h-20 bg-green-500 rounded-lg flex items-center justify-center text-white text-xs">
          Relative
        </div>
        <div className="fixed bottom-4 right-4 w-20 h-20 bg-purple-500 rounded-lg flex items-center justify-center text-white text-xs shadow-lg">
          Fixed
        </div>
        <div className="sticky top-0 w-20 h-20 bg-orange-500 rounded-lg flex items-center justify-center text-white text-xs ml-32">
          Sticky
        </div>
      </div>
    </ExampleSection>
  );
}
