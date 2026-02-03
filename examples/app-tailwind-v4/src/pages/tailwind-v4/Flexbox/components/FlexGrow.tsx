import { ExampleSection } from '../../../../components/common/example-section';

export function FlexGrow() {
  return (
    <ExampleSection 
      title="Flex Grow" 
      description="Control how much a flex item should grow relative to other items."
    >
      <div className="space-y-4">
        <div className="flex gap-2 bg-gray-100 p-4 rounded-lg">
          <div className="grow-0 w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">0</div>
          <div className="grow w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">1</div>
          <div className="grow w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">1</div>
        </div>
        <div className="flex gap-2 bg-gray-100 p-4 rounded-lg">
          <div className="grow-0 w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">0</div>
          <div className="grow-2 w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
          <div className="grow w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">1</div>
        </div>
      </div>
    </ExampleSection>
  );
}
