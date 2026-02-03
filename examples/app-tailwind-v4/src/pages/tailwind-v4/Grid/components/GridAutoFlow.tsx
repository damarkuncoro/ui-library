import React from 'react';

export function GridAutoFlow() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-2 grid-flow-row bg-gray-100 p-4 rounded-lg">
        <div className="h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">row</div>
        <div className="h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
        <div className="h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
        <div className="h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">4</div>
        <div className="h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">5</div>
      </div>
      <div className="grid grid-cols-3 gap-2 grid-flow-col bg-gray-100 p-4 rounded-lg">
        <div className="h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">col</div>
        <div className="h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
        <div className="h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
        <div className="h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">4</div>
        <div className="h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">5</div>
      </div>
      <div className="grid grid-cols-3 gap-2 grid-flow-row-dense bg-gray-100 p-4 rounded-lg">
        <div className="col-span-2 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">row-dense</div>
        <div className="h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
        <div className="h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
        <div className="h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">4</div>
        <div className="h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">5</div>
      </div>
      <div className="grid grid-cols-3 gap-2 grid-flow-col-dense bg-gray-100 p-4 rounded-lg">
        <div className="row-span-2 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">col-dense</div>
        <div className="h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
        <div className="h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
        <div className="h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">4</div>
        <div className="h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">5</div>
      </div>
    </div>
  );
}