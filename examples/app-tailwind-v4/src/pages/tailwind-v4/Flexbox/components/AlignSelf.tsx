import { ExampleSection } from '../../../../components/common/example-section';

export function AlignSelf() {
  return (
    <ExampleSection 
      title="Align Self" 
      description="Override the align-items value for individual flex items."
    >
      <div className="flex items-center gap-2 bg-gray-100 p-4 rounded-lg h-32">
        <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Auto</div>
        <div className="w-12 h-16 self-start bg-green-500 rounded flex items-center justify-center text-white text-xs">Start</div>
        <div className="w-12 h-12 self-center bg-purple-500 rounded flex items-center justify-center text-white text-xs">Center</div>
        <div className="w-12 h-10 self-end bg-orange-500 rounded flex items-center justify-center text-white text-xs">End</div>
        <div className="w-12 self-stretch bg-pink-500 rounded flex items-center justify-center text-white text-xs">Stretch</div>
      </div>
    </ExampleSection>
  );
}
