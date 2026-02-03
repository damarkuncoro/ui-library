import { ExampleSection } from '../../../../components/common/example-section';

export function FlexDirection() {
  return (
    <ExampleSection 
      title="Flex Direction" 
      description="Control the direction of flex items."
    >
      <div className="space-y-4">
        <div className="flex flex-row gap-2 bg-gray-100 p-4 rounded-lg">
          <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-sm">1</div>
          <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-sm">2</div>
          <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-sm">3</div>
        </div>
        <div className="flex flex-col gap-2 bg-gray-100 p-4 rounded-lg">
          <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-sm">1</div>
          <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-sm">2</div>
          <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-sm">3</div>
        </div>
        <div className="flex flex-row-reverse gap-2 bg-gray-100 p-4 rounded-lg">
          <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-sm">1</div>
          <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-sm">2</div>
          <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-sm">3</div>
        </div>
      </div>
    </ExampleSection>
  );
}
