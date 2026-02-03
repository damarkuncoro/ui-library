import React from 'react';

export function Grayscale() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Grayscale Levels</p>
        <div className="grid grid-cols-5 gap-2">
          <div className="h-20 bg-linear-to-br from-blue-400 to-blue-600 grayscale-0 rounded flex items-center justify-center text-white text-xs">0</div>
          <div className="h-20 bg-linear-to-br from-green-400 to-green-600 rounded flex items-center justify-center text-white text-xs">default</div>
          <div className="h-20 bg-linear-to-br from-purple-400 to-purple-600 rounded flex items-center justify-center text-white text-xs">default</div>
          <div className="h-20 bg-linear-to-br from-orange-400 to-orange-600 rounded flex items-center justify-center text-white text-xs">default</div>
          <div className="h-20 bg-linear-to-br from-pink-400 to-pink-600 rounded flex items-center justify-center text-white text-xs">default</div>
        </div>
      </div>
    </div>
  );
}