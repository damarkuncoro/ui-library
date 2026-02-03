import React from 'react';

export function Pulse() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Pulse Animation</p>
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-lg animate-pulse"></div>
          <div className="w-12 h-12 bg-green-500 rounded-lg animate-pulse"></div>
          <div className="w-12 h-12 bg-purple-500 rounded-lg animate-pulse"></div>
          <div className="w-12 h-12 bg-orange-500 rounded-lg animate-pulse"></div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Pulse with Different Shapes</p>
        <div className="flex gap-4 items-center">
          <div className="w-12 h-12 bg-blue-500 rounded-none animate-pulse"></div>
          <div className="w-12 h-12 bg-green-500 rounded-sm animate-pulse"></div>
          <div className="w-12 h-12 bg-purple-500 rounded-md animate-pulse"></div>
          <div className="w-12 h-12 bg-orange-500 rounded-lg animate-pulse"></div>
          <div className="w-12 h-12 bg-red-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Pulse with Different Sizes</p>
        <div className="flex gap-4 items-center">
          <div className="w-8 h-8 bg-blue-500 rounded-lg animate-pulse"></div>
          <div className="w-12 h-12 bg-green-500 rounded-lg animate-pulse"></div>
          <div className="w-16 h-16 bg-purple-500 rounded-lg animate-pulse"></div>
          <div className="w-20 h-20 bg-orange-500 rounded-lg animate-pulse"></div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Pulse with Different Colors</p>
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-red-500 rounded-lg animate-pulse"></div>
          <div className="w-12 h-12 bg-yellow-500 rounded-lg animate-pulse"></div>
          <div className="w-12 h-12 bg-green-500 rounded-lg animate-pulse"></div>
          <div className="w-12 h-12 bg-blue-500 rounded-lg animate-pulse"></div>
          <div className="w-12 h-12 bg-indigo-500 rounded-lg animate-pulse"></div>
          <div className="w-12 h-12 bg-purple-500 rounded-lg animate-pulse"></div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Pulse with Different Durations</p>
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-lg animate-pulse" style={{ animationDuration: '1s' }}></div>
          <div className="w-12 h-12 bg-green-500 rounded-lg animate-pulse" style={{ animationDuration: '2s' }}></div>
          <div className="w-12 h-12 bg-purple-500 rounded-lg animate-pulse" style={{ animationDuration: '3s' }}></div>
          <div className="w-12 h-12 bg-orange-500 rounded-lg animate-pulse" style={{ animationDuration: '4s' }}></div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Pulse with Opacity</p>
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-blue-500/50 rounded-lg animate-pulse"></div>
          <div className="w-12 h-12 bg-green-500/75 rounded-lg animate-pulse"></div>
          <div className="w-12 h-12 bg-purple-500/25 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}