import { ExampleSection } from '../../../../components/common/example-section';

export function AlignContent() {
  return (
    <ExampleSection 
      title="Align Content" 
      description="Control how flex lines are distributed along the cross axis when there's extra space."
    >
      <div className="space-y-4">
        <div className="flex flex-wrap content-start gap-2 bg-gray-100 p-4 rounded-lg h-40">
          <div className="w-16 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Start</div>
          <div className="w-16 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
          <div className="w-16 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
          <div className="w-16 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">4</div>
          <div className="w-16 h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">5</div>
        </div>
        <div className="flex flex-wrap content-center gap-2 bg-gray-100 p-4 rounded-lg h-40">
          <div className="w-16 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Center</div>
          <div className="w-16 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
          <div className="w-16 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
          <div className="w-16 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">4</div>
          <div className="w-16 h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">5</div>
        </div>
        <div className="flex flex-wrap content-end gap-2 bg-gray-100 p-4 rounded-lg h-40">
          <div className="w-16 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">End</div>
          <div className="w-16 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
          <div className="w-16 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
          <div className="w-16 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">4</div>
          <div className="w-16 h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">5</div>
        </div>
        <div className="flex flex-wrap content-between gap-2 bg-gray-100 p-4 rounded-lg h-40">
          <div className="w-16 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Between</div>
          <div className="w-16 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
          <div className="w-16 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
          <div className="w-16 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">4</div>
          <div className="w-16 h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">5</div>
        </div>
      </div>
    </ExampleSection>
  );
}
