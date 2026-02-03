import { ExampleSection } from '../../../../components/common/example-section';

export function FlexShrink() {
  return (
    <ExampleSection 
      title="Flex Shrink" 
      description="Control how much a flex item should shrink relative to other items."
    >
      <div className="flex gap-2 bg-gray-100 p-4 rounded-lg overflow-hidden">
        <div className="shrink-0 w-32 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">0 (No shrink)</div>
        <div className="shrink w-32 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">1</div>
        <div className="shrink w-32 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">1</div>
      </div>
    </ExampleSection>
  );
}
