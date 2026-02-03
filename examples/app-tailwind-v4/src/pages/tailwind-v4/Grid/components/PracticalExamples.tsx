import React from 'react';

export function PracticalExamples() {
  return (
    <div className="space-y-6">
      {/* Dashboard Grid */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Dashboard Grid</p>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-4 bg-white p-4 rounded-lg shadow-sm">
            <div className="w-1/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
          </div>
          <div className="col-span-1 bg-white p-4 rounded-lg shadow-sm">
            <div className="w-full h-20 bg-blue-200 rounded mb-2"></div>
            <div className="w-3/4 h-3 bg-gray-300 rounded"></div>
          </div>
          <div className="col-span-1 bg-white p-4 rounded-lg shadow-sm">
            <div className="w-full h-20 bg-green-200 rounded mb-2"></div>
            <div className="w-3/4 h-3 bg-gray-300 rounded"></div>
          </div>
          <div className="col-span-1 bg-white p-4 rounded-lg shadow-sm">
            <div className="w-full h-20 bg-purple-200 rounded mb-2"></div>
            <div className="w-3/4 h-3 bg-gray-300 rounded"></div>
          </div>
          <div className="col-span-1 bg-white p-4 rounded-lg shadow-sm">
            <div className="w-full h-20 bg-orange-200 rounded mb-2"></div>
            <div className="w-3/4 h-3 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>

      {/* Card Grid */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Card Grid</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="w-full h-24 bg-blue-200 rounded mb-3"></div>
            <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="w-full h-24 bg-green-200 rounded mb-3"></div>
            <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="w-full h-24 bg-purple-200 rounded mb-3"></div>
            <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Masonry Layout */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Masonry Layout</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="row-span-2 bg-white p-4 rounded-lg shadow-sm">
            <div className="w-full h-32 bg-blue-200 rounded mb-3"></div>
            <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
            <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
            <div className="w-2/3 h-3 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="w-full h-20 bg-green-200 rounded mb-3"></div>
            <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="w-full h-24 bg-purple-200 rounded mb-3"></div>
            <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="w-full h-16 bg-orange-200 rounded mb-3"></div>
            <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="w-full h-28 bg-pink-200 rounded mb-3"></div>
            <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Photo Gallery</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="aspect-square bg-linear-to-br from-blue-400 to-blue-600 rounded-lg"></div>
          <div className="aspect-square bg-linear-to-br from-green-400 to-green-600 rounded-lg"></div>
          <div className="aspect-square bg-linear-to-br from-purple-400 to-purple-600 rounded-lg"></div>
          <div className="aspect-square bg-linear-to-br from-orange-400 to-orange-600 rounded-lg"></div>
          <div className="aspect-square bg-linear-to-br from-pink-400 to-pink-600 rounded-lg"></div>
          <div className="aspect-square bg-linear-to-br from-teal-400 to-teal-600 rounded-lg"></div>
          <div className="aspect-square bg-linear-to-br from-indigo-400 to-indigo-600 rounded-lg"></div>
          <div className="aspect-square bg-linear-to-br from-red-400 to-red-600 rounded-lg"></div>
        </div>
      </div>

      {/* Form Layout */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Form Layout</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 bg-white p-4 rounded-lg shadow-sm">
            <div className="w-1/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-full h-10 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="w-1/3 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-full h-10 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="w-1/3 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-full h-10 bg-gray-200 rounded"></div>
          </div>
          <div className="col-span-2 bg-white p-4 rounded-lg shadow-sm">
            <div className="w-1/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-full h-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Pricing Table</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <div className="w-1/2 h-6 bg-gray-300 rounded mx-auto mb-2"></div>
            <div className="w-3/4 h-4 bg-gray-200 rounded mx-auto mb-4"></div>
            <div className="space-y-2">
              <div className="w-full h-3 bg-gray-200 rounded"></div>
              <div className="w-full h-3 bg-gray-200 rounded"></div>
              <div className="w-full h-3 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-500 text-center">
            <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-4"></div>
            <div className="w-1/2 h-6 bg-blue-300 rounded mx-auto mb-2"></div>
            <div className="w-3/4 h-4 bg-gray-200 rounded mx-auto mb-4"></div>
            <div className="space-y-2">
              <div className="w-full h-3 bg-gray-200 rounded"></div>
              <div className="w-full h-3 bg-gray-200 rounded"></div>
              <div className="w-full h-3 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <div className="w-1/2 h-6 bg-gray-300 rounded mx-auto mb-2"></div>
            <div className="w-3/4 h-4 bg-gray-200 rounded mx-auto mb-4"></div>
            <div className="space-y-2">
              <div className="w-full h-3 bg-gray-200 rounded"></div>
              <div className="w-full h-3 bg-gray-200 rounded"></div>
              <div className="w-full h-3 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}