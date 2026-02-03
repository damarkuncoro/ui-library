import React from 'react';

export function PracticalExamples() {
  return (
    <div className="space-y-6">
      {/* Responsive Card */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Responsive Card</p>
        <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-sm">
          <div className="w-full h-32 bg-linear-to-br from-blue-400 to-blue-600 rounded-lg mb-4"></div>
          <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
          <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
          <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
          <div className="w-2/3 h-3 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Full Width Container */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Full Width Container</p>
        <div className="w-full bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-500 rounded-full"></div>
            <div className="flex-1">
              <div className="w-1/2 h-4 bg-gray-300 rounded mb-2"></div>
              <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Constrained Content */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Constrained Content</p>
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
          <div className="w-full h-4 bg-gray-300 rounded mb-3"></div>
          <div className="w-full h-3 bg-gray-200 rounded mb-2"></div>
          <div className="w-full h-3 bg-gray-200 rounded mb-2"></div>
          <div className="w-5/6 h-3 bg-gray-200 rounded mb-2"></div>
          <div className="w-full h-3 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Aspect Ratio Box */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Aspect Ratio Box</p>
        <div className="w-full aspect-video bg-linear-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-medium">16:9 Aspect Ratio</span>
        </div>
      </div>

      {/* Min/Max Width Container */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Min/Max Width Container</p>
        <div className="min-w-[200px] max-w-md w-full bg-white p-6 rounded-lg shadow-sm">
          <div className="w-full h-4 bg-gray-300 rounded mb-3"></div>
          <div className="w-full h-3 bg-gray-200 rounded mb-2"></div>
          <div className="w-full h-3 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Full Height Section */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Full Height Section</p>
        <div className="h-48 bg-white p-6 rounded-lg shadow-sm flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-3"></div>
            <div className="w-24 h-4 bg-gray-300 rounded mx-auto mb-2"></div>
            <div className="w-32 h-3 bg-gray-200 rounded mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Responsive Grid</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

      {/* Screen Height Hero */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Screen Height Hero (min-h-screen)</p>
        <div className="min-h-[200px] bg-linear-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-2xl font-bold mb-2">Hero Section</div>
            <div className="w-32 h-3 bg-white/30 rounded mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Auto Width Content */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Auto Width Content</p>
        <div className="flex justify-center">
          <div className="w-auto bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
              <div>
                <div className="w-24 h-4 bg-gray-300 rounded mb-1"></div>
                <div className="w-16 h-3 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fit Content */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Fit Content</p>
        <div className="flex gap-4">
          <div className="w-fit bg-white p-4 rounded-lg shadow-sm">
            <div className="w-20 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-16 h-3 bg-gray-200 rounded"></div>
          </div>
          <div className="w-fit bg-white p-4 rounded-lg shadow-sm">
            <div className="w-32 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-24 h-3 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}