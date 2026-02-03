import { ExampleSection } from '../../../../components/common/example-section';

export function Order() {
  return (
    <ExampleSection 
      title="Order" 
      description="Control the visual order of flex items."
    >
      <div className="flex gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="order-3 w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">1</div>
        <div className="order-1 w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
        <div className="order-2 w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
        <div className="order-last w-12 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">Last</div>
        <div className="order-first w-12 h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">First</div>
      </div>
    </ExampleSection>
  );
}
