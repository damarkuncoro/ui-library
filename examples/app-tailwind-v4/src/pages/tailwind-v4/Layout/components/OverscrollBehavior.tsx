import { ExampleSection } from '../../../../components/common/example-section';

export function OverscrollBehavior() {
  return (
    <ExampleSection 
      title="Overscroll Behavior" 
      description="Control how scroll chaining and overscroll gestures work."
    >
      <div className="space-y-4">
        <div className="overscroll-contain w-full h-32 overflow-auto bg-gray-100 rounded-lg p-4 border-2 border-blue-300">
          <p className="text-sm font-medium mb-2">Overscroll Contain</p>
          <p className="text-xs">Scroll chaining is prevented at this boundary.</p>
          <p className="text-xs mt-2">Scroll down to see the effect...</p>
          <p className="text-xs mt-2">Keep scrolling...</p>
          <p className="text-xs mt-2">Almost there...</p>
          <p className="text-xs mt-2">Bottom reached!</p>
        </div>
      </div>
    </ExampleSection>
  );
}
