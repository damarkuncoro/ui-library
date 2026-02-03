import React from 'react';

export function GridAutoRows() {
  return (
    <div className="space-y-4">
      <div className="grid grid-flow-row auto-rows-max gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">auto-rows-max</div>
        <div className="h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
        <div className="h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
      </div>
      <div className="grid grid-flow-row auto-rows-min gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">auto-rows-min</div>
        <div className="h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
        <div className="h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
      </div>
      <div className="grid grid-flow-row auto-rows-fr gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">auto-rows-fr</div>
        <div className="h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
        <div className="h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
      </div>
    </div>
  );
}