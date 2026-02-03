import { ExampleSection } from '../../../../components/common/example-section';

export function ZIndex() {
  return (
    <ExampleSection 
      title="Z-Index" 
      description="Control the stacking order of positioned elements."
    >
      <div className="relative h-40 bg-gray-100 rounded-lg p-4">
        <div className="absolute top-4 left-4 w-24 h-24 bg-blue-500 rounded-lg flex items-center justify-center text-white z-10">
          Z-10
        </div>
        <div className="absolute top-8 left-8 w-24 h-24 bg-green-500 rounded-lg flex items-center justify-center text-white z-20">
          Z-20
        </div>
        <div className="absolute top-12 left-12 w-24 h-24 bg-purple-500 rounded-lg flex items-center justify-center text-white z-30">
          Z-30
        </div>
        <div className="absolute top-16 left-16 w-24 h-24 bg-orange-500 rounded-lg flex items-center justify-center text-white z-40">
          Z-40
        </div>
      </div>
    </ExampleSection>
  );
}
