import React from 'react';

export function Padding() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <p className="text-sm font-medium text-neutral-text">All Sides</p>
        <div className="space-y-2">
          <div className="p-0 bg-blue-500 rounded flex items-center justify-center text-white text-xs">p-0</div>
          <div className="p-1 bg-blue-500 rounded flex items-center justify-center text-white text-xs">p-1</div>
          <div className="p-2 bg-blue-500 rounded flex items-center justify-center text-white text-xs">p-2</div>
          <div className="p-3 bg-blue-500 rounded flex items-center justify-center text-white text-xs">p-3</div>
          <div className="p-4 bg-blue-500 rounded flex items-center justify-center text-white text-xs">p-4</div>
          <div className="p-5 bg-blue-500 rounded flex items-center justify-center text-white text-xs">p-5</div>
          <div className="p-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs">p-6</div>
          <div className="p-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">p-8</div>
          <div className="p-10 bg-blue-500 rounded flex items-center justify-center text-white text-xs">p-10</div>
          <div className="p-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">p-12</div>
          <div className="p-16 bg-blue-500 rounded flex items-center justify-center text-white text-xs">p-16</div>
          <div className="p-20 bg-blue-500 rounded flex items-center justify-center text-white text-xs">p-20</div>
          <div className="p-24 bg-blue-500 rounded flex items-center justify-center text-white text-xs">p-24</div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm font-medium text-neutral-text">Horizontal & Vertical</p>
        <div className="space-y-2">
          <div className="px-4 py-2 bg-green-500 rounded flex items-center justify-center text-white text-xs">px-4 py-2</div>
          <div className="px-6 py-3 bg-green-500 rounded flex items-center justify-center text-white text-xs">px-6 py-3</div>
          <div className="px-8 py-4 bg-green-500 rounded flex items-center justify-center text-white text-xs">px-8 py-4</div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm font-medium text-neutral-text">Individual Sides</p>
        <div className="space-y-2">
          <div className="pt-4 bg-purple-500 rounded flex items-center justify-center text-white text-xs">pt-4</div>
          <div className="pr-4 bg-purple-500 rounded flex items-center justify-center text-white text-xs text-right">pr-4</div>
          <div className="pb-4 bg-purple-500 rounded flex items-center justify-center text-white text-xs">pb-4</div>
          <div className="pl-4 bg-purple-500 rounded flex items-center justify-center text-white text-xs text-left">pl-4</div>
        </div>
      </div>
    </div>
  );
}