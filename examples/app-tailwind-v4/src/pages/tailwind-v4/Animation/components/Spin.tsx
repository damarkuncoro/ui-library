import React from 'react';

export function Spin() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Spin Animation</p>
        <div className="flex gap-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Spin with Different Sizes</p>
        <div className="flex gap-4 items-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="w-20 h-20 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Spin with Different Border Widths</p>
        <div className="flex gap-4">
          <div className="w-12 h-12 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="w-12 h-12 border-6 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="w-12 h-12 border-8 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Spin with Different Colors</p>
        <div className="flex gap-4">
          <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Spin with Multiple Borders</p>
        <div className="flex gap-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-r-transparent rounded-full animate-spin"></div>
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent border-r-transparent border-b-transparent rounded-full animate-spin"></div>
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}