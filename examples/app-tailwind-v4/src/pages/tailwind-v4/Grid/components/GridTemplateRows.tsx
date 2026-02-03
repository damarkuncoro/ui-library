import React from 'react';

export function GridTemplateRows() {
  return (
    <div className="space-y-4">
      <div className="grid grid-rows-1 gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="h-12 bg-blue-500 rounded flex items-center justify-center text-white text-sm">1 Row</div>
      </div>
      <div className="grid grid-rows-2 gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="h-12 bg-blue-500 rounded flex items-center justify-center text-white text-sm">1</div>
        <div className="h-12 bg-green-500 rounded flex items-center justify-center text-white text-sm">2</div>
      </div>
      <div className="grid grid-rows-3 gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="h-12 bg-blue-500 rounded flex items-center justify-center text-white text-sm">1</div>
        <div className="h-12 bg-green-500 rounded flex items-center justify-center text-white text-sm">2</div>
        <div className="h-12 bg-purple-500 rounded flex items-center justify-center text-white text-sm">3</div>
      </div>
      <div className="grid grid-rows-4 gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="h-12 bg-blue-500 rounded flex items-center justify-center text-white text-sm">1</div>
        <div className="h-12 bg-green-500 rounded flex items-center justify-center text-white text-sm">2</div>
        <div className="h-12 bg-purple-500 rounded flex items-center justify-center text-white text-sm">3</div>
        <div className="h-12 bg-orange-500 rounded flex items-center justify-center text-white text-sm">4</div>
      </div>
      <div className="grid grid-rows-6 gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">1</div>
        <div className="h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
        <div className="h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
        <div className="h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">4</div>
        <div className="h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">5</div>
        <div className="h-12 bg-teal-500 rounded flex items-center justify-center text-white text-xs">6</div>
      </div>
    </div>
  );
}