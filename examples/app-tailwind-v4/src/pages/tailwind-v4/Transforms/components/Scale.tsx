import React from 'react';

export function Scale() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Scale X</p>
        <div className="flex gap-3">
          <div className="w-16 h-16 bg-blue-500 rounded scale-x-50 flex items-center justify-center text-white text-xs">50%</div>
          <div className="w-16 h-16 bg-blue-500 rounded scale-x-75 flex items-center justify-center text-white text-xs">75%</div>
          <div className="w-16 h-16 bg-blue-500 rounded scale-x-90 flex items-center justify-center text-white text-xs">90%</div>
          <div className="w-16 h-16 bg-blue-500 rounded scale-x-95 flex items-center justify-center text-white text-xs">95%</div>
          <div className="w-16 h-16 bg-blue-500 rounded scale-x-100 flex items-center justify-center text-white text-xs">100%</div>
          <div className="w-16 h-16 bg-blue-500 rounded scale-x-105 flex items-center justify-center text-white text-xs">105%</div>
          <div className="w-16 h-16 bg-blue-500 rounded scale-x-110 flex items-center justify-center text-white text-xs">110%</div>
          <div className="w-16 h-16 bg-blue-500 rounded scale-x-125 flex items-center justify-center text-white text-xs">125%</div>
          <div className="w-16 h-16 bg-blue-500 rounded scale-x-150 flex items-center justify-center text-white text-xs">150%</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Scale Y</p>
        <div className="flex gap-3">
          <div className="w-16 h-16 bg-green-500 rounded scale-y-50 flex items-center justify-center text-white text-xs">50%</div>
          <div className="w-16 h-16 bg-green-500 rounded scale-y-75 flex items-center justify-center text-white text-xs">75%</div>
          <div className="w-16 h-16 bg-green-500 rounded scale-y-90 flex items-center justify-center text-white text-xs">90%</div>
          <div className="w-16 h-16 bg-green-500 rounded scale-y-95 flex items-center justify-center text-white text-xs">95%</div>
          <div className="w-16 h-16 bg-green-500 rounded scale-y-100 flex items-center justify-center text-white text-xs">100%</div>
          <div className="w-16 h-16 bg-green-500 rounded scale-y-105 flex items-center justify-center text-white text-xs">105%</div>
          <div className="w-16 h-16 bg-green-500 rounded scale-y-110 flex items-center justify-center text-white text-xs">110%</div>
          <div className="w-16 h-16 bg-green-500 rounded scale-y-125 flex items-center justify-center text-white text-xs">125%</div>
          <div className="w-16 h-16 bg-green-500 rounded scale-y-150 flex items-center justify-center text-white text-xs">150%</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Scale</p>
        <div className="flex gap-3">
          <div className="w-16 h-16 bg-purple-500 rounded scale-0 flex items-center justify-center text-white text-xs">0</div>
          <div className="w-16 h-16 bg-purple-500 rounded scale-50 flex items-center justify-center text-white text-xs">50%</div>
          <div className="w-16 h-16 bg-purple-500 rounded scale-75 flex items-center justify-center text-white text-xs">75%</div>
          <div className="w-16 h-16 bg-purple-500 rounded scale-90 flex items-center justify-center text-white text-xs">90%</div>
          <div className="w-16 h-16 bg-purple-500 rounded scale-95 flex items-center justify-center text-white text-xs">95%</div>
          <div className="w-16 h-16 bg-purple-500 rounded scale-100 flex items-center justify-center text-white text-xs">100%</div>
          <div className="w-16 h-16 bg-purple-500 rounded scale-105 flex items-center justify-center text-white text-xs">105%</div>
          <div className="w-16 h-16 bg-purple-500 rounded scale-110 flex items-center justify-center text-white text-xs">110%</div>
          <div className="w-16 h-16 bg-purple-500 rounded scale-125 flex items-center justify-center text-white text-xs">125%</div>
          <div className="w-16 h-16 bg-purple-500 rounded scale-150 flex items-center justify-center text-white text-xs">150%</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Negative Scale</p>
        <div className="flex gap-3">
          <div className="w-16 h-16 bg-orange-500 rounded scale-x-[-1] flex items-center justify-center text-white text-xs">-X</div>
          <div className="w-16 h-16 bg-orange-500 rounded scale-y-[-1] flex items-center justify-center text-white text-xs">-Y</div>
          <div className="w-16 h-16 bg-orange-500 rounded scale-[-1] flex items-center justify-center text-white text-xs">-1</div>
        </div>
      </div>
    </div>
  );
}