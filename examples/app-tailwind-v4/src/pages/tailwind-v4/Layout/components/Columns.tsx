import { ExampleSection } from '../../../../components/common/example-section';

export function Columns() {
  return (
    <ExampleSection 
      title="Columns" 
      description="Create multi-column layouts for text content."
    >
      <div className="columns-2 gap-4 text-sm text-neutral-text">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <p className="mb-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <p>
          Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
        </p>
      </div>
    </ExampleSection>
  );
}
