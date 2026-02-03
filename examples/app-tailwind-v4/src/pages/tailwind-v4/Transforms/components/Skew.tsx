import React from 'react';

export function Skew() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Skew X</p>
        <div className="flex gap-3">
          <div className="w-16 h-16 bg-blue-500 rounded skew-x-0 flex items-center justify-center text-white text-xs">0°</div>
          <div className="w-16 h-16 bg-blue-500 rounded skew-x-1 flex items-center justify-center text-white text-xs">1°</div>
          <div className="w-16 h-16 bg-blue-500 rounded skew-x-2 flex items-center justify-center text-white text-xs">2°</div>
          <div className="w-16 h-16 bg-blue-500 rounded skew-x-3 flex items-center justify-center text-white text-xs">3°</div>
          <div className="w-16 h-16 bg-blue-500 rounded skew-x-6 flex items-center justify-center text-white text-xs">6°</div>
          <div className="w-16 h-16 bg-blue-500 rounded skew-x-12 flex items-center justify-center text-white text-xs">12°</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Skew Y</p>
        <div className="flex gap-3">
          <div className="w-16 h-16 bg-green-500 rounded skew-y-0 flex items-center justify-center text-white text-xs">0°</div>
          <div className="w-16 h-16 bg-green-500 rounded skew-y-1 flex items-center justify-center text-white text-xs">1°</div>
          <div className="w-16 h-16 bg-green-500 rounded skew-y-2 flex items-center justify-center text-white text-xs">2°</div>
          <div className="w-16 h-16 bg-green-500 rounded skew-y-3 flex items-center justify-center text-white text-xs">3°</div>
          <div className="w-16 h-16 bg-green-500 rounded skew-y-6 flex items-center justify-center text-white text-xs">6°</div>
          <div className="w-16 h-16 bg-green-500 rounded skew-y-12 flex items-center justify-center text-white text-xs">12°</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Negative Skew</p>
        <div className="flex gap-3">
          <div className="w-16 h-16 bg-purple-500 rounded -skew-x-0 flex items-center justify-center text-white text-xs">0°</div>
          <div className="w-16 h-16 bg-purple-500 rounded -skew-x-1 flex items-center justify-center text-white text-xs">-1°</div>
          <div className="w-16 h-16 bg-purple-500 rounded -skew-x-2 flex items-center justify-center text-white text-xs">-2°</div>
          <div className="w-16 h-16 bg-purple-500 rounded -skew-x-3 flex items-center justify-center text-white text-xs">-3°</div>
          <div className="w-16 h-16 bg-purple-500 rounded -skew-x-6 flex items-center justify-center text-white text-xs">-6°</div>
          <div className="w-16 h-16 bg-purple-500 rounded -skew-x-12 flex items-center justify-center text-white text-xs">-12°</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Combined Skew</p>
        <div className="flex gap-3">
          <div className="w-16 h-16 bg-orange-500 rounded skew-x-3 skew-y-3 flex items-center justify-center text-white text-xs">X3 Y3</div>
          <div className="w-16 h-16 bg-orange-500 rounded skew-x-6 skew-y-6 flex items-center justify-center text-white text-xs">X6 Y6</div>
          <div className="w-16 h-16 bg-orange-500 rounded skew-x-12 skew-y-12 flex items-center justify-center text-white text-xs">X12 Y12</div>
        </div>
      </div>
    </div>
  );
}