import React from 'react';

export function PracticalExamples() {
  return (
    <div className="space-y-6">
      {/* Card with Padding */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Card with Padding</p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="w-full h-32 bg-linear-to-br from-blue-400 to-blue-600 rounded-lg mb-4"></div>
          <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
          <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
          <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
          <div className="w-2/3 h-3 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Button Group with Margin */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Button Group with Margin</p>
        <div className="flex gap-2">
          <div className="px-4 py-2 bg-blue-500 rounded text-white text-sm">Button 1</div>
          <div className="px-4 py-2 bg-green-500 rounded text-white text-sm">Button 2</div>
          <div className="px-4 py-2 bg-purple-500 rounded text-white text-sm">Button 3</div>
        </div>
      </div>

      {/* List with Space Between */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">List with Space Between</p>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
            <div className="flex-1">
              <div className="w-1/2 h-4 bg-gray-300 rounded mb-1"></div>
              <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-full"></div>
            <div className="flex-1">
              <div className="w-1/2 h-4 bg-gray-300 rounded mb-1"></div>
              <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-500 rounded-full"></div>
            <div className="flex-1">
              <div className="w-1/2 h-4 bg-gray-300 rounded mb-1"></div>
              <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Section with Margin */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Section with Margin</p>
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="w-1/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
            <div className="w-full h-3 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="w-1/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
            <div className="w-full h-3 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Grid with Gap */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Grid with Gap</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="w-full h-20 bg-blue-200 rounded mb-3"></div>
            <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="w-full h-20 bg-green-200 rounded mb-3"></div>
            <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="w-full h-20 bg-purple-200 rounded mb-3"></div>
            <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Flex with Space Between */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Flex with Space Between</p>
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-blue-500 rounded"></div>
          <div className="w-12 h-12 bg-green-500 rounded"></div>
          <div className="w-12 h-12 bg-purple-500 rounded"></div>
        </div>
      </div>

      {/* Form with Spacing */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Form with Spacing</p>
        <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <div>
            <div className="w-1/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-full h-10 bg-gray-200 rounded"></div>
          </div>
          <div>
            <div className="w-1/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-full h-10 bg-gray-200 rounded"></div>
          </div>
          <div className="pt-2">
            <div className="w-full h-10 bg-blue-500 rounded"></div>
          </div>
        </div>
      </div>

      {/* Navigation with Padding */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Navigation with Padding</p>
        <div className="bg-white px-6 py-4 rounded-lg shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded"></div>
            <div className="w-20 h-4 bg-gray-300 rounded"></div>
          </div>
          <div className="flex gap-4">
            <div className="w-16 h-6 bg-gray-200 rounded"></div>
            <div className="w-16 h-6 bg-gray-200 rounded"></div>
            <div className="w-16 h-6 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Article with Spacing */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Article with Spacing</p>
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="w-1/2 h-6 bg-gray-300 rounded mb-4"></div>
          <div className="space-y-3 mb-6">
            <div className="w-full h-3 bg-gray-200 rounded"></div>
            <div className="w-full h-3 bg-gray-200 rounded"></div>
            <div className="w-5/6 h-3 bg-gray-200 rounded"></div>
          </div>
          <div className="w-1/3 h-4 bg-gray-300 rounded mb-3"></div>
          <div className="space-y-3">
            <div className="w-full h-3 bg-gray-200 rounded"></div>
            <div className="w-full h-3 bg-gray-200 rounded"></div>
            <div className="w-4/5 h-3 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Badge with Padding */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Badge with Padding</p>
        <div className="flex gap-2">
          <div className="px-3 py-1 bg-blue-500 rounded-full text-white text-xs">Badge 1</div>
          <div className="px-3 py-1 bg-green-500 rounded-full text-white text-xs">Badge 2</div>
          <div className="px-3 py-1 bg-purple-500 rounded-full text-white text-xs">Badge 3</div>
          <div className="px-3 py-1 bg-orange-500 rounded-full text-white text-xs">Badge 4</div>
        </div>
      </div>
    </div>
  );
}