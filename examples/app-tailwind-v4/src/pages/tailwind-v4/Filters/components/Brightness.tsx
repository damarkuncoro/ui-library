import React from 'react';

export function Brightness() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Brightness Levels</p>
        <div className="grid grid-cols-5 gap-2">
          <div className="h-20 bg-blue-500 brightness-0 rounded flex items-center justify-center text-white text-xs">0</div>
          <div className="h-20 bg-blue-500 brightness-50 rounded flex items-center justify-center text-white text-xs">50</div>
          <div className="h-20 bg-blue-500 brightness-75 rounded flex items-center justify-center text-white text-xs">75</div>
          <div className="h-20 bg-blue-500 brightness-90 rounded flex items-center justify-center text-white text-xs">90</div>
          <div className="h-20 bg-blue-500 brightness-95 rounded flex items-center justify-center text-white text-xs">95</div>
          <div className="h-20 bg-blue-500 brightness-100 rounded flex items-center justify-center text-white text-xs">100</div>
          <div className="h-20 bg-blue-500 brightness-105 rounded flex items-center justify-center text-white text-xs">105</div>
          <div className="h-20 bg-blue-500 brightness-110 rounded flex items-center justify-center text-white text-xs">110</div>
          <div className="h-20 bg-blue-500 brightness-125 rounded flex items-center justify-center text-white text-xs">125</div>
          <div className="h-20 bg-blue-500 brightness-150 rounded flex items-center justify-center text-white text-xs">150</div>
          <div className="h-20 bg-blue-500 brightness-200 rounded flex items-center justify-center text-white text-xs">200</div>
        </div>
      </div>
    </div>
  );
}