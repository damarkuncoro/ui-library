import React from 'react';

export function BorderColor() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">All Sides</p>
        <div className="space-y-2">
          <div className="border-2 border-gray-100 p-4 rounded">border-gray-100</div>
          <div className="border-2 border-gray-200 p-4 rounded">border-gray-200</div>
          <div className="border-2 border-gray-300 p-4 rounded">border-gray-300</div>
          <div className="border-2 border-gray-400 p-4 rounded">border-gray-400</div>
          <div className="border-2 border-gray-500 p-4 rounded">border-gray-500</div>
          <div className="border-2 border-red-500 p-4 rounded">border-red-500</div>
          <div className="border-2 border-orange-500 p-4 rounded">border-orange-500</div>
          <div className="border-2 border-yellow-500 p-4 rounded">border-yellow-500</div>
          <div className="border-2 border-green-500 p-4 rounded">border-green-500</div>
          <div className="border-2 border-blue-500 p-4 rounded">border-blue-500</div>
          <div className="border-2 border-indigo-500 p-4 rounded">border-indigo-500</div>
          <div className="border-2 border-purple-500 p-4 rounded">border-purple-500</div>
          <div className="border-2 border-pink-500 p-4 rounded">border-pink-500</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Individual Sides</p>
        <div className="space-y-2">
          <div className="border-2 border-t-red-500 border-gray-200 p-4 rounded">border-t-red-500</div>
          <div className="border-2 border-r-green-500 border-gray-200 p-4 rounded">border-r-green-500</div>
          <div className="border-2 border-b-blue-500 border-gray-200 p-4 rounded">border-b-blue-500</div>
          <div className="border-2 border-l-purple-500 border-gray-200 p-4 rounded">border-l-purple-500</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Horizontal & Vertical</p>
        <div className="space-y-2">
          <div className="border-2 border-x-red-500 border-gray-200 p-4 rounded">border-x-red-500</div>
          <div className="border-2 border-y-green-500 border-gray-200 p-4 rounded">border-y-green-500</div>
        </div>
      </div>
    </div>
  );
}