import { ExampleSection } from '../../../../components/common/example-section';

export function FlexBasis() {
  return (
    <ExampleSection 
      title="Flex Basis" 
      description="Set the initial size of a flex item before free space is distributed."
    >
      <div className="flex gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="flex-basis-0 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">0</div>
        <div className="flex-basis-1/4 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">1/4</div>
        <div className="flex-basis-1/2 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">1/2</div>
        <div className="flex-basis-auto h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">Auto</div>
      </div>
    </ExampleSection>
  );
}
