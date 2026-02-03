import { ExampleSection } from '../../../../components/common/example-section';

export function Visibility() {
  return (
    <ExampleSection 
      title="Visibility" 
      description="Control the visibility of elements."
    >
      <div className="flex gap-4">
        <div className="visible bg-blue-100 p-4 rounded">
          <p className="font-medium text-sm">Visible</p>
          <p className="text-xs">This element is visible</p>
        </div>
        <div className="invisible bg-green-100 p-4 rounded">
          <p className="font-medium text-sm">Invisible</p>
          <p className="text-xs">This element is invisible but takes up space</p>
        </div>
        <div className="hidden bg-purple-100 p-4 rounded">
          <p className="font-medium text-sm">Hidden</p>
          <p className="text-xs">This element is hidden and doesn't take up space</p>
        </div>
      </div>
    </ExampleSection>
  );
}
