import React from 'react';

export function BorderWidth() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">All Sides</p>
        <div className="space-y-2">
          <div className="border-0 border-gray-300 p-4 rounded">border-0</div>
          <div className="border border-gray-300 p-4 rounded">border (default)</div>
          <div className="border-2 border-gray-300 p-4 rounded">border-2</div>
          <div className="border-4 border-gray-300 p-4 rounded">border-4</div>
          <div className="border-8 border-gray-300 p-4 rounded">border-8</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Individual Sides</p>
        <div className="space-y-2">
          <div className="border-t-4 border-gray-300 p-4 rounded">border-t-4</div>
          <div className="border-r-4 border-gray-300 p-4 rounded">border-r-4</div>
          <div className="border-b-4 border-gray-300 p-4 rounded">border-b-4</div>
          <div className="border-l-4 border-gray-300 p-4 rounded">border-l-4</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Horizontal & Vertical</p>
        <div className="space-y-2">
          <div className="border-x-4 border-gray-300 p-4 rounded">border-x-4</div>
          <div className="border-y-4 border-gray-300 p-4 rounded">border-y-4</div>
        </div>
      </div>
    </div>
  );
}