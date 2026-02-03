import React from 'react';

export function Invert() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Invert Levels</p>
        <div className="grid grid-cols-5 gap-2">
          <div className="h-20 bg-blue-500 invert-0 rounded flex items-center justify-center text-white text-xs">0</div>
          <div className="h-20 bg-blue-500 invert rounded flex items-center justify-center text-white text-xs">default</div>
          <div className="h-20 bg-blue-500 invert rounded flex items-center justify-center text-white text-xs">default</div>
          <div className="h-20 bg-blue-500 invert rounded flex items-center justify-center text-white text-xs">default</div>
          <div className="h-20 bg-blue-500 invert rounded flex items-center justify-center text-white text-xs">default</div>
        </div>
      </div>
    </div>
  );
}