import React from 'react';

export function SpaceBetween() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <p className="text-sm font-medium text-neutral-text">Space Between X (Horizontal)</p>
        <div className="space-y-2">
          <div className="flex space-x-0">
            <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">0</div>
            <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">1</div>
            <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">2</div>
          </div>
          <div className="flex space-x-2">
            <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
            <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">1</div>
            <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
          </div>
          <div className="flex space-x-4">
            <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">4</div>
            <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">1</div>
            <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">2</div>
          </div>
          <div className="flex space-x-6">
            <div className="w-12 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">6</div>
            <div className="w-12 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">1</div>
            <div className="w-12 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">2</div>
          </div>
          <div className="flex space-x-8">
            <div className="w-12 h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">8</div>
            <div className="w-12 h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">1</div>
            <div className="w-12 h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">2</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm font-medium text-neutral-text">Space Between Y (Vertical)</p>
        <div className="space-y-2">
          <div className="flex flex-col space-y-0">
            <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">0</div>
            <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">1</div>
            <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">2</div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
            <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">1</div>
            <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">4</div>
            <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">1</div>
            <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">2</div>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="w-12 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">6</div>
            <div className="w-12 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">1</div>
            <div className="w-12 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">2</div>
          </div>
          <div className="flex flex-col space-y-8">
            <div className="w-12 h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">8</div>
            <div className="w-12 h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">1</div>
            <div className="w-12 h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">2</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm font-medium text-neutral-text">Space Between Reverse</p>
        <div className="space-y-2">
          <div className="flex space-x-reverse space-x-4">
            <div className="w-12 h-12 bg-teal-500 rounded flex items-center justify-center text-white text-xs">1</div>
            <div className="w-12 h-12 bg-teal-500 rounded flex items-center justify-center text-white text-xs">2</div>
            <div className="w-12 h-12 bg-teal-500 rounded flex items-center justify-center text-white text-xs">3</div>
          </div>
          <div className="flex flex-col space-y-reverse space-y-4">
            <div className="w-12 h-12 bg-indigo-500 rounded flex items-center justify-center text-white text-xs">1</div>
            <div className="w-12 h-12 bg-indigo-500 rounded flex items-center justify-center text-white text-xs">2</div>
            <div className="w-12 h-12 bg-indigo-500 rounded flex items-center justify-center text-white text-xs">3</div>
          </div>
        </div>
      </div>
    </div>
  );
}