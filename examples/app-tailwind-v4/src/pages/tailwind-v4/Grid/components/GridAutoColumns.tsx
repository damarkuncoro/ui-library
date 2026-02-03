import React from 'react';

export function GridAutoColumns() {
  return (
    <div className="space-y-4">
      <div className="grid grid-flow-col auto-cols-max gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">auto-cols-max</div>
        <div className="h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
        <div className="h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
      </div>
      <div className="grid grid-flow-col auto-cols-min gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">auto-cols-min</div>
        <div className="h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
        <div className="h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
      </div>
      <div className="grid grid-flow-col auto-cols-fr gap-2 bg-gray-100 p-4 rounded-lg">
        <div className="h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">auto-cols-fr</div>
        <div className="h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
        <div className="h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
      </div>
    </div>
  );
}