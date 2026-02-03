import { ExampleSection } from '../../../../components/common/example-section';

export function FlexShorthand() {
  return (
    <ExampleSection 
      title="Flex Shorthand" 
      description="Combine grow, shrink, and basis in a single property."
    >
      <div className="space-y-4">
        <div className="flex gap-2 bg-gray-100 p-4 rounded-lg">
          <div className="flex-1 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">flex-1</div>
          <div className="flex-1 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">flex-1</div>
          <div className="flex-1 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">flex-1</div>
        </div>
        <div className="flex gap-2 bg-gray-100 p-4 rounded-lg">
          <div className="flex-none w-20 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">flex-none</div>
          <div className="flex-auto h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">flex-auto</div>
          <div className="flex-initial w-20 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">flex-initial</div>
        </div>
      </div>
    </ExampleSection>
  );
}
