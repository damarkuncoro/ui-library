import { ExampleSection } from '../../../../components/common/example-section';

export function FlexWrap() {
  return (
    <ExampleSection 
      title="Flex Wrap" 
      description="Control whether flex items wrap onto multiple lines."
    >
      <div className="space-y-4">
        <div className="flex flex-nowrap gap-2 bg-gray-100 p-4 rounded-lg overflow-hidden">
          <div className="w-20 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs shrink-0">No Wrap</div>
          <div className="w-20 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs shrink-0">Item 2</div>
          <div className="w-20 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs shrink-0">Item 3</div>
          <div className="w-20 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs shrink-0">Item 4</div>
        </div>
        <div className="flex flex-wrap gap-2 bg-gray-100 p-4 rounded-lg">
          <div className="w-20 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Wrap</div>
          <div className="w-20 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">Item 2</div>
          <div className="w-20 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">Item 3</div>
          <div className="w-20 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">Item 4</div>
          <div className="w-20 h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">Item 5</div>
        </div>
        <div className="flex flex-wrap-reverse gap-2 bg-gray-100 p-4 rounded-lg">
          <div className="w-20 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Wrap Rev</div>
          <div className="w-20 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">Item 2</div>
          <div className="w-20 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">Item 3</div>
          <div className="w-20 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">Item 4</div>
          <div className="w-20 h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">Item 5</div>
        </div>
      </div>
    </ExampleSection>
  );
}
