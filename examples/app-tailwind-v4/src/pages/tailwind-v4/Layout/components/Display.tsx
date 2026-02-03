import { ExampleSection } from '../../../../components/common/example-section';

export function Display() {
  return (
    <ExampleSection 
      title="Display" 
      description="Control the display behavior of elements."
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="block bg-blue-100 p-4 rounded">
          <p className="font-medium mb-2">Block</p>
          <div className="block bg-blue-200 p-2 rounded mb-2">Block 1</div>
          <div className="block bg-blue-200 p-2 rounded">Block 2</div>
        </div>
        <div className="inline-block bg-green-100 p-4 rounded">
          <p className="font-medium mb-2">Inline Block</p>
          <div className="inline-block bg-green-200 p-2 rounded mr-2">Inline 1</div>
          <div className="inline-block bg-green-200 p-2 rounded">Inline 2</div>
        </div>
        <div className="flex bg-purple-100 p-4 rounded">
          <p className="font-medium mb-2 mr-4">Flex</p>
          <div className="flex gap-2">
            <div className="bg-purple-200 p-2 rounded w-8 h-8"></div>
            <div className="bg-purple-200 p-2 rounded w-8 h-8"></div>
            <div className="bg-purple-200 p-2 rounded w-8 h-8"></div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 bg-orange-100 p-4 rounded">
          <p className="font-medium col-span-3 mb-2">Grid</p>
          <div className="bg-orange-200 p-2 rounded h-8"></div>
          <div className="bg-orange-200 p-2 rounded h-8"></div>
          <div className="bg-orange-200 p-2 rounded h-8"></div>
        </div>
      </div>
    </ExampleSection>
  );
}
