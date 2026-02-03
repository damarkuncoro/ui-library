import React from 'react';

export function BorderStyle() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">All Sides</p>
        <div className="space-y-2">
          <div className="border-2 border-solid border-gray-300 p-4 rounded">border-solid</div>
          <div className="border-2 border-dashed border-gray-300 p-4 rounded">border-dashed</div>
          <div className="border-2 border-dotted border-gray-300 p-4 rounded">border-dotted</div>
          <div className="border-2 border-double border-gray-300 p-4 rounded">border-double</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Individual Sides</p>
        <div className="space-y-2">
          <div className="border-2 border-t-solid border-gray-300 p-4 rounded">border-t-solid</div>
          <div className="border-2 border-r-dashed border-gray-300 p-4 rounded">border-r-dashed</div>
          <div className="border-2 border-b-dotted border-gray-300 p-4 rounded">border-b-dotted</div>
          <div className="border-2 border-l-double border-gray-300 p-4 rounded">border-l-double</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Horizontal & Vertical</p>
        <div className="space-y-2">
          <div className="border-2 border-x-solid border-gray-300 p-4 rounded">border-x-solid</div>
          <div className="border-2 border-y-dashed border-gray-300 p-4 rounded">border-y-dashed</div>
        </div>
      </div>
    </div>
  );
}