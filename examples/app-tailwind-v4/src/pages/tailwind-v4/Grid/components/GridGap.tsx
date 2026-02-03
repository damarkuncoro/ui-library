import React from 'react';

export function GridGap() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-0 bg-gray-100 p-4 rounded-lg">
        <div className="h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">gap-0</div>
        <div className="h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
        <div className="h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
      </div>
      <div className="grid grid-cols-3 gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">gap-2</div>
        <div className="h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
        <div className="h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
      </div>
      <div className="grid grid-cols-3 gap-4 bg-gray-100 p-4 rounded-lg">
        <div className="h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">gap-4</div>
        <div className="h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
        <div className="h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
      </div>
      <div className="grid grid-cols-3 gap-6 bg-gray-100 p-4 rounded-lg">
        <div className="h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">gap-6</div>
        <div className="h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
        <div className="h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
      </div>
      <div className="grid grid-cols-3 gap-8 bg-gray-100 p-4 rounded-lg">
        <div className="h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">gap-8</div>
        <div className="h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
        <div className="h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
      </div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-8 bg-gray-100 p-4 rounded-lg">
        <div className="h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">x-4 y-8</div>
        <div className="h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
        <div className="h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
        <div className="h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">4</div>
        <div className="h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">5</div>
        <div className="h-12 bg-teal-500 rounded flex items-center justify-center text-white text-xs">6</div>
      </div>
    </div>
  );
}