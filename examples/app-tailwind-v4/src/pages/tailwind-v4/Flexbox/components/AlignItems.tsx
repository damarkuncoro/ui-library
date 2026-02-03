import { ExampleSection } from '../../../../components/common/example-section';

export function AlignItems() {
  return (
    <ExampleSection 
      title="Align Items" 
      description="Control how flex items are aligned along the cross axis."
    >
      <div className="space-y-4">
        <div className="flex items-start gap-2 bg-gray-100 p-4 rounded-lg h-32">
          <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Start</div>
          <div className="w-12 h-16 bg-green-500 rounded flex items-center justify-center text-white text-xs">Tall</div>
          <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
        </div>
        <div className="flex items-center gap-2 bg-gray-100 p-4 rounded-lg h-32">
          <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Center</div>
          <div className="w-12 h-16 bg-green-500 rounded flex items-center justify-center text-white text-xs">Tall</div>
          <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
        </div>
        <div className="flex items-end gap-2 bg-gray-100 p-4 rounded-lg h-32">
          <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">End</div>
          <div className="w-12 h-16 bg-green-500 rounded flex items-center justify-center text-white text-xs">Tall</div>
          <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
        </div>
        <div className="flex items-stretch gap-2 bg-gray-100 p-4 rounded-lg h-32">
          <div className="w-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Stretch</div>
          <div className="w-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
          <div className="w-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
        </div>
      </div>
    </ExampleSection>
  );
}
