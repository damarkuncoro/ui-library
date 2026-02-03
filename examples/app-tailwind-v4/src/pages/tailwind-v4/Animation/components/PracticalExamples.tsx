import React from 'react';

export function PracticalExamples() {
  return (
    <div className="space-y-6">
      {/* Loading States */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Loading States</p>
        <div className="flex gap-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
        </div>
      </div>

      {/* Notification Indicators */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Notification Indicators</p>
        <div className="flex gap-4">
          <div className="relative">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-600">🔔</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">3</div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
          </div>
          <div className="relative">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-600">💬</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">5</div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
          </div>
          <div className="relative">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-600">⚡</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">1</div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>

      {/* Status Indicators */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Status Indicators</p>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-neutral-text">Online</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-neutral-text">Away</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-neutral-text">Busy</span>
          </div>
        </div>
      </div>

      {/* Button Loading */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Button Loading</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Loading...
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Processing...
          </button>
        </div>
      </div>

      {/* Skeleton Loading */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Skeleton Loading</p>
        <div className="space-y-3">
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Progress Indicators</p>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm animate-bounce">1</div>
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full animate-pulse" style={{ width: '33%' }}></div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm animate-bounce">2</div>
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full animate-pulse" style={{ width: '66%' }}></div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm animate-bounce">3</div>
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full animate-pulse" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Attention Grabbers */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Attention Grabbers</p>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-red-500 text-white rounded-lg animate-bounce">
            New!
          </div>
          <div className="px-4 py-2 bg-yellow-500 text-white rounded-lg animate-pulse">
            Sale
          </div>
          <div className="px-4 py-2 bg-green-500 text-white rounded-lg animate-bounce">
            Limited
          </div>
        </div>
      </div>

      {/* Icon Animations */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Icon Animations</p>
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl animate-spin">
            ⚙️
          </div>
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white text-2xl animate-bounce">
            ⬆️
          </div>
          <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white text-2xl animate-pulse">
            ❤️
          </div>
          <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white text-2xl animate-bounce">
            ⭐
          </div>
        </div>
      </div>

      {/* Combined Animations */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Combined Animations</p>
        <div className="flex gap-4">
          <div className="animate-bounce">
            <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-500 rounded-lg animate-pulse"></div>
          </div>
          <div className="animate-pulse">
            <div className="w-12 h-12 bg-linear-to-br from-green-500 to-teal-500 rounded-lg animate-spin"></div>
          </div>
          <div className="animate-bounce">
            <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-red-500 rounded-lg animate-spin"></div>
          </div>
        </div>
      </div>
    </div>
  );
}