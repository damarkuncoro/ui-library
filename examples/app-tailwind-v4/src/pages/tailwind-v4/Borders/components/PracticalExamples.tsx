import React from 'react';

export function PracticalExamples() {
  return (
    <div className="space-y-6">
      {/* Card with Border */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Card with Border</p>
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="w-full h-32 bg-linear-to-br from-blue-400 to-blue-600 rounded-lg mb-4"></div>
          <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
          <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
          <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
          <div className="w-2/3 h-3 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Button with Border */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Button with Border</p>
        <div className="flex gap-2">
          <div className="px-4 py-2 border border-blue-500 rounded text-blue-500 text-sm">Primary</div>
          <div className="px-4 py-2 border border-green-500 rounded text-green-500 text-sm">Success</div>
          <div className="px-4 py-2 border border-red-500 rounded text-red-500 text-sm">Danger</div>
          <div className="px-4 py-2 border border-gray-500 rounded text-gray-500 text-sm">Secondary</div>
        </div>
      </div>

      {/* Input with Border */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Input with Border</p>
        <div className="space-y-2">
          <div className="w-full h-10 border border-gray-300 rounded"></div>
          <div className="w-full h-10 border-2 border-blue-500 rounded"></div>
          <div className="w-full h-10 border border-red-500 rounded"></div>
        </div>
      </div>

      {/* Alert with Border */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Alert with Border</p>
        <div className="space-y-2">
          <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
            <div className="w-1/2 h-4 bg-blue-300 rounded mb-2"></div>
            <div className="w-full h-3 bg-blue-200 rounded"></div>
          </div>
          <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded">
            <div className="w-1/2 h-4 bg-green-300 rounded mb-2"></div>
            <div className="w-full h-3 bg-green-200 rounded"></div>
          </div>
          <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
            <div className="w-1/2 h-4 bg-red-300 rounded mb-2"></div>
            <div className="w-full h-3 bg-red-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Badge with Border */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Badge with Border</p>
        <div className="flex gap-2">
          <div className="px-3 py-1 border border-blue-500 rounded-full text-blue-500 text-xs">New</div>
          <div className="px-3 py-1 border border-green-500 rounded-full text-green-500 text-xs">Active</div>
          <div className="px-3 py-1 border border-yellow-500 rounded-full text-yellow-500 text-xs">Pending</div>
          <div className="px-3 py-1 border border-red-500 rounded-full text-red-500 text-xs">Error</div>
        </div>
      </div>

      {/* Divider with Border */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Divider with Border</p>
        <div className="space-y-4">
          <div className="border-t border-gray-300"></div>
          <div className="border-t-2 border-gray-400"></div>
          <div className="border-t-4 border-gray-500"></div>
          <div className="border-b border-gray-300"></div>
        </div>
      </div>

      {/* Avatar with Border */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Avatar with Border</p>
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-blue-500 bg-blue-200"></div>
          <div className="w-12 h-12 rounded-full border-2 border-green-500 bg-green-200"></div>
          <div className="w-12 h-12 rounded-full border-2 border-purple-500 bg-purple-200"></div>
          <div className="w-12 h-12 rounded-full border-4 border-orange-500 bg-orange-200"></div>
        </div>
      </div>

      {/* Table with Border */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Table with Border</p>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="grid grid-cols-3 border-b border-gray-200">
            <div className="p-4 border-r border-gray-200 bg-gray-50">Header 1</div>
            <div className="p-4 border-r border-gray-200 bg-gray-50">Header 2</div>
            <div className="p-4 bg-gray-50">Header 3</div>
          </div>
          <div className="grid grid-cols-3 border-b border-gray-200">
            <div className="p-4 border-r border-gray-200">Cell 1</div>
            <div className="p-4 border-r border-gray-200">Cell 2</div>
            <div className="p-4">Cell 3</div>
          </div>
          <div className="grid grid-cols-3">
            <div className="p-4 border-r border-gray-200">Cell 4</div>
            <div className="p-4 border-r border-gray-200">Cell 5</div>
            <div className="p-4">Cell 6</div>
          </div>
        </div>
      </div>

      {/* Navigation with Border */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Navigation with Border</p>
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
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

      {/* Modal with Border */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Modal with Border</p>
        <div className="bg-white border-2 border-gray-300 rounded-lg p-6 shadow-lg">
          <div className="w-1/3 h-6 bg-gray-300 rounded mb-4"></div>
          <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
          <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
          <div className="w-3/4 h-4 bg-gray-200 rounded mb-6"></div>
          <div className="flex gap-2">
            <div className="flex-1 h-10 bg-blue-500 rounded"></div>
            <div className="flex-1 h-10 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}