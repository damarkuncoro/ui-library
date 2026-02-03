import React from 'react';

export function GridColSpan() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="col-span-1 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">col-span-1</div>
        <div className="col-span-1 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">1</div>
        <div className="col-span-1 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">1</div>
      </div>
      <div className="grid grid-cols-3 gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="col-span-2 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">col-span-2</div>
        <div className="col-span-1 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">1</div>
      </div>
      <div className="grid grid-cols-3 gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="col-span-1 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">1</div>
        <div className="col-span-2 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">col-span-2</div>
      </div>
      <div className="grid grid-cols-3 gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="col-span-3 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">col-span-3</div>
      </div>
      <div className="grid grid-cols-4 gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="col-span-1 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">1</div>
        <div className="col-span-2 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">col-span-2</div>
        <div className="col-span-1 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">1</div>
      </div>
      <div className="grid grid-cols-6 gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="col-span-2 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">col-span-2</div>
        <div className="col-span-3 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">col-span-3</div>
        <div className="col-span-1 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">1</div>
      </div>
      <div className="grid grid-cols-6 gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="col-span-full h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">col-span-full</div>
      </div>
    </div>
  );
}