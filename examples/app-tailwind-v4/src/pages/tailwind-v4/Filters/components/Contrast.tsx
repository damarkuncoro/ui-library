import React from 'react';

export function Contrast() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Contrast Levels</p>
        <div className="grid grid-cols-5 gap-2">
          <div className="h-20 bg-blue-500 contrast-0 rounded flex items-center justify-center text-white text-xs">0</div>
          <div className="h-20 bg-blue-500 contrast-50 rounded flex items-center justify-center text-white text-xs">50</div>
          <div className="h-20 bg-blue-500 contrast-75 rounded flex items-center justify-center text-white text-xs">75</div>
          <div className="h-20 bg-blue-500 contrast-100 rounded flex items-center justify-center text-white text-xs">100</div>
          <div className="h-20 bg-blue-500 contrast-125 rounded flex items-center justify-center text-white text-xs">125</div>
          <div className="h-20 bg-blue-500 contrast-150 rounded flex items-center justify-center text-white text-xs">150</div>
          <div className="h-20 bg-blue-500 contrast-200 rounded flex items-center justify-center text-white text-xs">200</div>
        </div>
      </div>
    </div>
  );
}