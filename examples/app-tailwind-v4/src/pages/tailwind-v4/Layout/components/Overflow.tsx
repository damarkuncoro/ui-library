import { ExampleSection } from '../../../../components/common/example-section';

export function Overflow() {
  return (
    <ExampleSection 
      title="Overflow" 
      description="Control how content that exceeds the container bounds is handled."
    >
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <p className="text-sm font-medium">Overflow Auto</p>
          <div className="w-full h-24 overflow-auto bg-gray-100 rounded-lg p-2">
            <p className="text-xs">Scrollable content that overflows the container. Use the scrollbar to see more content.</p>
            <p className="text-xs mt-2">More content here...</p>
            <p className="text-xs mt-2">Even more content...</p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">Overflow Hidden</p>
          <div className="w-full h-24 overflow-hidden bg-gray-100 rounded-lg p-2">
            <p className="text-xs">This content is clipped when it overflows the container.</p>
            <p className="text-xs mt-2">You won't see this part...</p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">Overflow Scroll</p>
          <div className="w-full h-24 overflow-scroll bg-gray-100 rounded-lg p-2">
            <p className="text-xs">Always show scrollbars regardless of content.</p>
            <p className="text-xs mt-2">More content here...</p>
          </div>
        </div>
      </div>
    </ExampleSection>
  );
}
