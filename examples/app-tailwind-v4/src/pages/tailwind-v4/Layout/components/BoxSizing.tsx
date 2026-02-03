import { ExampleSection } from '../../../../components/common/example-section';

export function BoxSizing() {
  return (
    <ExampleSection 
      title="Box Sizing" 
      description="Control how the total width and height of an element is calculated."
    >
      <div className="flex gap-4">
        <div className="box-border w-32 h-32 p-4 border-4 border-blue-500 bg-blue-100">
          <p className="font-medium text-sm">Box Border</p>
          <p className="text-xs">Border included in width</p>
        </div>
        <div className="box-content w-32 h-32 p-4 border-4 border-green-500 bg-green-100">
          <p className="font-medium text-sm">Box Content</p>
          <p className="text-xs">Border excluded from width</p>
        </div>
      </div>
    </ExampleSection>
  );
}
