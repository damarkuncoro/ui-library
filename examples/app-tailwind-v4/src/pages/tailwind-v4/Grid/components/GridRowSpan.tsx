import React from 'react';

export function GridRowSpan() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="row-span-1 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">row-span-1</div>
        <div className="row-span-1 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">1</div>
        <div className="row-span-1 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">1</div>
      </div>
      <div className="grid grid-cols-3 gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="row-span-2 h-24 bg-blue-500 rounded flex items-center justify-center text-white text-xs">row-span-2</div>
        <div className="row-span-1 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">1</div>
        <div className="row-span-1 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">1</div>
        <div className="row-span-1 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">1</div>
        <div className="row-span-1 h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">1</div>
      </div>
      <div className="grid grid-cols-3 gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="row-span-1 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">1</div>
        <div className="row-span-2 h-24 bg-green-500 rounded flex items-center justify-center text-white text-xs">row-span-2</div>
        <div className="row-span-1 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">1</div>
        <div className="row-span-1 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">1</div>
        <div className="row-span-1 h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">1</div>
      </div>
      <div className="grid grid-cols-3 gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="row-span-3 h-36 bg-blue-500 rounded flex items-center justify-center text-white text-xs">row-span-3</div>
        <div className="row-span-1 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">1</div>
        <div className="row-span-1 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">1</div>
        <div className="row-span-1 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">1</div>
        <div className="row-span-1 h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">1</div>
        <div className="row-span-1 h-12 bg-teal-500 rounded flex items-center justify-center text-white text-xs">1</div>
      </div>
      <div className="grid grid-cols-4 gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="row-span-2 h-24 bg-blue-500 rounded flex items-center justify-center text-white text-xs">row-span-2</div>
        <div className="row-span-1 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">1</div>
        <div className="row-span-1 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">1</div>
        <div className="row-span-1 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">1</div>
        <div className="row-span-1 h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">1</div>
        <div className="row-span-1 h-12 bg-teal-500 rounded flex items-center justify-center text-white text-xs">1</div>
        <div className="row-span-1 h-12 bg-indigo-500 rounded flex items-center justify-center text-white text-xs">1</div>
      </div>
    </div>
  );
}