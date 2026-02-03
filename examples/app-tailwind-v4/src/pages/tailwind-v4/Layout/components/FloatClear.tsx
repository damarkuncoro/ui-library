import { ExampleSection } from '../../../../components/common/example-section';

export function FloatClear() {
  return (
    <ExampleSection 
      title="Float & Clear" 
      description="Control element floating and clearing behavior."
    >
      <div className="bg-neutral-bg-surface p-4 rounded border border-neutral-border">
        <div className="float-left w-24 h-24 bg-blue-500 rounded-lg mr-4 mb-4 flex items-center justify-center text-white">
          Float Left
        </div>
        <div className="float-right w-24 h-24 bg-green-500 rounded-lg ml-4 mb-4 flex items-center justify-center text-white">
          Float Right
        </div>
        <p className="text-sm text-neutral-text">
          This text wraps around the floated elements. Float allows elements to be positioned to the left or right of their container, with text and inline elements wrapping around them.
        </p>
        <div className="clear-both mt-4 pt-4 border-t border-neutral-border">
          <p className="text-sm text-neutral-text-secondary">Cleared content below floats</p>
        </div>
      </div>
    </ExampleSection>
  );
}
