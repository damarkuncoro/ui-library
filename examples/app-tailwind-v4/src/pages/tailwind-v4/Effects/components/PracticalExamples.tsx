import React from 'react';

export function PracticalExamples() {
  return (
    <div className="space-y-6">
      {/* Card with Shadow */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Card with Shadow</p>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="w-full h-32 bg-linear-to-br from-blue-400 to-blue-600 rounded-lg mb-4"></div>
          <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
          <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
          <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
          <div className="w-2/3 h-3 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Button with Shadow */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Button with Shadow</p>
        <div className="flex gap-2">
          <div className="px-4 py-2 bg-blue-500 shadow-md rounded text-white text-sm">Primary</div>
          <div className="px-4 py-2 bg-green-500 shadow-md rounded text-white text-sm">Success</div>
          <div className="px-4 py-2 bg-red-500 shadow-md rounded text-white text-sm">Danger</div>
          <div className="px-4 py-2 bg-gray-500 shadow-md rounded text-white text-sm">Secondary</div>
        </div>
      </div>

      {/* Floating Card */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Floating Card</p>
        <div className="bg-white p-6 rounded-lg shadow-2xl">
          <div className="w-16 h-16 bg-linear-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4"></div>
          <div className="w-1/2 h-4 bg-gray-300 rounded mx-auto mb-2"></div>
          <div className="w-3/4 h-3 bg-gray-200 rounded mx-auto"></div>
        </div>
      </div>

      {/* Hover Effects */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Hover Effects</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-full h-20 bg-blue-200 rounded mb-3"></div>
            <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-full h-20 bg-green-200 rounded mb-3"></div>
            <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-full h-20 bg-purple-200 rounded mb-3"></div>
            <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Glassmorphism */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Glassmorphism</p>
        <div className="bg-linear-to-br from-blue-500 to-purple-600 p-8 rounded-lg">
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg border border-white/30">
            <div className="w-1/2 h-4 bg-white/30 rounded mb-2"></div>
            <div className="w-full h-3 bg-white/20 rounded mb-1"></div>
            <div className="w-full h-3 bg-white/20 rounded"></div>
          </div>
        </div>
      </div>

      {/* Neumorphism */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Neumorphism</p>
        <div className="bg-gray-200 p-8 rounded-lg">
          <div className="bg-gray-200 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] p-6 rounded-xl">
            <div className="w-1/2 h-4 bg-gray-400 rounded mb-2"></div>
            <div className="w-full h-3 bg-gray-300 rounded mb-1"></div>
            <div className="w-full h-3 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>

      {/* Elevated Card */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Elevated Card</p>
        <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-blue-600 rounded-lg"></div>
            <div>
              <div className="w-24 h-4 bg-gray-300 rounded mb-1"></div>
              <div className="w-16 h-3 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="w-full h-3 bg-gray-200 rounded"></div>
            <div className="w-full h-3 bg-gray-200 rounded"></div>
            <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Soft Shadow Card */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Soft Shadow Card</p>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="w-full h-24 bg-linear-to-br from-green-400 to-green-600 rounded-lg mb-4"></div>
          <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
          <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
          <div className="w-full h-3 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Colored Shadow */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Colored Shadow</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-blue-500/50">
            <div className="w-full h-16 bg-blue-100 rounded mb-2"></div>
            <div className="w-1/2 h-4 bg-blue-300 rounded"></div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-green-500/50">
            <div className="w-full h-16 bg-green-100 rounded mb-2"></div>
            <div className="w-1/2 h-4 bg-green-300 rounded"></div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-purple-500/50">
            <div className="w-full h-16 bg-purple-100 rounded mb-2"></div>
            <div className="w-1/2 h-4 bg-purple-300 rounded"></div>
          </div>
        </div>
      </div>

      {/* Inner Shadow Input */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Inner Shadow Input</p>
        <div className="space-y-2">
          <div className="w-full h-10 bg-white shadow-inner rounded border border-gray-200"></div>
          <div className="w-full h-10 bg-gray-50 shadow-inner rounded border border-gray-200"></div>
          <div className="w-full h-10 bg-gray-100 shadow-inner rounded border border-gray-200"></div>
        </div>
      </div>
    </div>
  );
}