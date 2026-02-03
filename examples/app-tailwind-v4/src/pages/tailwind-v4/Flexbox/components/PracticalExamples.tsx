import { ExampleSection } from '../../../../components/common/example-section';

export function PracticalExamples() {
  return (
    <ExampleSection 
      title="Practical Examples" 
      description="Real-world flexbox layout patterns."
    >
      <div className="space-y-6">
        {/* Navigation Bar */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm font-medium mb-3 text-neutral-text">Navigation Bar</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded"></div>
              <span className="text-sm font-medium">Logo</span>
            </div>
            <div className="flex gap-4">
              <div className="w-16 h-6 bg-gray-300 rounded"></div>
              <div className="w-16 h-6 bg-gray-300 rounded"></div>
              <div className="w-16 h-6 bg-gray-300 rounded"></div>
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-green-500 rounded"></div>
              <div className="w-8 h-8 bg-purple-500 rounded"></div>
            </div>
          </div>
        </div>

        {/* Card Grid */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm font-medium mb-3 text-neutral-text">Card Grid</p>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow-sm">
              <div className="w-full h-20 bg-blue-200 rounded mb-3"></div>
              <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
              <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
            </div>
            <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow-sm">
              <div className="w-full h-20 bg-green-200 rounded mb-3"></div>
              <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
              <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
            </div>
            <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow-sm">
              <div className="w-full h-20 bg-purple-200 rounded mb-3"></div>
              <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
              <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>

        {/* Centered Content */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm font-medium mb-3 text-neutral-text">Centered Content</p>
          <div className="flex items-center justify-center h-24 bg-white rounded-lg">
            <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white">
              Centered
            </div>
          </div>
        </div>

        {/* Space Between */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm font-medium mb-3 text-neutral-text">Space Between Elements</p>
          <div className="flex justify-between items-center">
            <div className="w-12 h-12 bg-blue-500 rounded"></div>
            <div className="w-12 h-12 bg-green-500 rounded"></div>
            <div className="w-12 h-12 bg-purple-500 rounded"></div>
          </div>
        </div>
      </div>
    </ExampleSection>
  );
}
