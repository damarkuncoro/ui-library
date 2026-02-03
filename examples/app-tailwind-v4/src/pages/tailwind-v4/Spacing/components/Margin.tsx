import React from 'react';

export function Margin() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <p className="text-sm font-medium text-neutral-text">All Sides</p>
        <div className="space-y-2">
          <div className="m-0 bg-blue-500 rounded flex items-center justify-center text-white text-xs">m-0</div>
          <div className="m-1 bg-blue-500 rounded flex items-center justify-center text-white text-xs">m-1</div>
          <div className="m-2 bg-blue-500 rounded flex items-center justify-center text-white text-xs">m-2</div>
          <div className="m-3 bg-blue-500 rounded flex items-center justify-center text-white text-xs">m-3</div>
          <div className="m-4 bg-blue-500 rounded flex items-center justify-center text-white text-xs">m-4</div>
          <div className="m-5 bg-blue-500 rounded flex items-center justify-center text-white text-xs">m-5</div>
          <div className="m-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs">m-6</div>
          <div className="m-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">m-8</div>
          <div className="m-10 bg-blue-500 rounded flex items-center justify-center text-white text-xs">m-10</div>
          <div className="m-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">m-12</div>
          <div className="m-16 bg-blue-500 rounded flex items-center justify-center text-white text-xs">m-16</div>
          <div className="m-20 bg-blue-500 rounded flex items-center justify-center text-white text-xs">m-20</div>
          <div className="m-24 bg-blue-500 rounded flex items-center justify-center text-white text-xs">m-24</div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm font-medium text-neutral-text">Horizontal & Vertical</p>
        <div className="space-y-2">
          <div className="mx-4 my-2 bg-green-500 rounded flex items-center justify-center text-white text-xs">mx-4 my-2</div>
          <div className="mx-6 my-3 bg-green-500 rounded flex items-center justify-center text-white text-xs">mx-6 my-3</div>
          <div className="mx-8 my-4 bg-green-500 rounded flex items-center justify-center text-white text-xs">mx-8 my-4</div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm font-medium text-neutral-text">Individual Sides</p>
        <div className="space-y-2">
          <div className="mt-4 bg-purple-500 rounded flex items-center justify-center text-white text-xs">mt-4</div>
          <div className="mr-4 bg-purple-500 rounded flex items-center justify-center text-white text-xs text-right">mr-4</div>
          <div className="mb-4 bg-purple-500 rounded flex items-center justify-center text-white text-xs">mb-4</div>
          <div className="ml-4 bg-purple-500 rounded flex items-center justify-center text-white text-xs text-left">ml-4</div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm font-medium text-neutral-text">Negative Margins</p>
        <div className="space-y-2">
          <div className="-m-2 bg-orange-500 rounded flex items-center justify-center text-white text-xs">-m-2</div>
          <div className="-m-4 bg-orange-500 rounded flex items-center justify-center text-white text-xs">-m-4</div>
          <div className="-mx-4 bg-orange-500 rounded flex items-center justify-center text-white text-xs">-mx-4</div>
          <div className="-my-4 bg-orange-500 rounded flex items-center justify-center text-white text-xs">-my-4</div>
        </div>
      </div>
    </div>
  );
}