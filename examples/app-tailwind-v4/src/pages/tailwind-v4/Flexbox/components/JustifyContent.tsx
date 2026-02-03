import { ExampleSection } from '../../../../components/common/example-section';

export function JustifyContent() {
  return (
    <ExampleSection 
      title="Justify Content" 
      description="Control how flex items are distributed along the main axis."
    >
      <div className="space-y-4">
        <div className="flex justify-start gap-2 bg-gray-100 p-4 rounded-lg">
          <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Start</div>
          <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
          <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
        </div>
        <div className="flex justify-center gap-2 bg-gray-100 p-4 rounded-lg">
          <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Center</div>
          <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
          <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
        </div>
        <div className="flex justify-end gap-2 bg-gray-100 p-4 rounded-lg">
          <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">End</div>
          <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
          <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
        </div>
        <div className="flex justify-between gap-2 bg-gray-100 p-4 rounded-lg">
          <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Between</div>
          <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
          <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
        </div>
        <div className="flex justify-around gap-2 bg-gray-100 p-4 rounded-lg">
          <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Around</div>
          <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
          <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
        </div>
        <div className="flex justify-evenly gap-2 bg-gray-100 p-4 rounded-lg">
          <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Evenly</div>
          <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
          <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
        </div>
      </div>
    </ExampleSection>
  );
}
