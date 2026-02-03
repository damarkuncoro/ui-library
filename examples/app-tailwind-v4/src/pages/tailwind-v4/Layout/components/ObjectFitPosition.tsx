import { ExampleSection } from '../../../../components/common/example-section';

export function ObjectFitPosition() {
  return (
    <ExampleSection 
      title="Object Fit & Position" 
      description="Control how replaced elements (images, videos) are sized and positioned."
    >
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <p className="text-sm font-medium">Cover</p>
          <div className="w-full h-24 bg-gray-200 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-linear-to-br from-blue-400 to-blue-600 object-cover"></div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">Contain</p>
          <div className="w-full h-24 bg-gray-200 rounded-lg overflow-hidden">
            <div className="w-16 h-16 mx-auto my-4 bg-linear-to-br from-green-400 to-green-600 object-contain"></div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">Fill</p>
          <div className="w-full h-24 bg-gray-200 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-linear-to-br from-purple-400 to-purple-600 object-fill"></div>
          </div>
        </div>
      </div>
    </ExampleSection>
  );
}
