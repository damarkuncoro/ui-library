import { ExampleSection } from '../../../../components/common/example-section';

export function AspectRatio() {
  return (
    <ExampleSection 
      title="Aspect Ratio" 
      description="Control the aspect ratio of an element."
    >
      <div className="grid grid-cols-3 gap-4">
        <div className="aspect-video bg-blue-500 rounded-lg flex items-center justify-center text-white font-medium">
          16:9
        </div>
        <div className="aspect-square bg-green-500 rounded-lg flex items-center justify-center text-white font-medium">
          1:1
        </div>
        <div className="aspect-4/3 bg-purple-500 rounded-lg flex items-center justify-center text-white font-medium">
          4:3
        </div>
      </div>
    </ExampleSection>
  );
}
