import { ExampleSection } from '../../../../components/common/example-section';

export function Gap() {
  return (
    <ExampleSection 
      title="Gap" 
      description="Control the space between flex items."
    >
      <div className="space-y-4">
        <div className="flex gap-2 bg-gray-100 p-4 rounded-lg">
          <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">gap-2</div>
          <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
          <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
        </div>
        <div className="flex gap-4 bg-gray-100 p-4 rounded-lg">
          <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">gap-4</div>
          <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
          <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
        </div>
        <div className="flex gap-8 bg-gray-100 p-4 rounded-lg">
          <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">gap-8</div>
          <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
          <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
        </div>
      </div>
    </ExampleSection>
  );
}
