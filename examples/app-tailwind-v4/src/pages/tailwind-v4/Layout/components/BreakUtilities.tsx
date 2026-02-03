import { ExampleSection } from '../../../../components/common/example-section';

export function BreakUtilities() {
  return (
    <ExampleSection 
      title="Break After / Before / Inside" 
      description="Control how content breaks across pages or columns."
    >
      <div className="columns-2 gap-4 text-sm">
        <div className="break-after-column bg-blue-100 p-4 rounded mb-4">
          <p className="font-medium mb-2">Break After Column</p>
          <p>This content will force a column break after this element.</p>
        </div>
        <div className="break-before-column bg-green-100 p-4 rounded mb-4">
          <p className="font-medium mb-2">Break Before Column</p>
          <p>This content will force a column break before this element.</p>
        </div>
        <div className="break-inside-avoid bg-purple-100 p-4 rounded">
          <p className="font-medium mb-2">Break Inside Avoid</p>
          <p>This content will not be split across columns.</p>
        </div>
      </div>
    </ExampleSection>
  );
}
