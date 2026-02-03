import { ExampleSection } from '../../../../components/common/example-section';

export function BoxDecorationBreak() {
  return (
    <ExampleSection 
      title="Box Decoration Break" 
      description="Control how box decorations (borders, padding, backgrounds) are rendered across fragment breaks."
    >
      <div className="columns-2 gap-4">
        <div className="box-decoration-clone bg-linear-to-r from-blue-500 to-purple-500 p-4 rounded text-white mb-4">
          <p className="font-medium">Clone</p>
          <p className="text-sm">Decorations clone across fragments</p>
        </div>
        <div className="box-decoration-slice bg-linear-to-r from-green-500 to-teal-500 p-4 rounded text-white">
          <p className="font-medium">Slice</p>
          <p className="text-sm">Decorations slice across fragments</p>
        </div>
      </div>
    </ExampleSection>
  );
}
