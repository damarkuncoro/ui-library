import React from 'react';

export function TransitionTimingFunction() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Linear</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-300 ease-linear hover:bg-blue-600 hover:scale-105">
            Hover me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">In</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-300 ease-in hover:bg-blue-600 hover:scale-105">
            Hover me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Out</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-300 ease-out hover:bg-blue-600 hover:scale-105">
            Hover me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">In-Out (Default)</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-300 ease-in-out hover:bg-blue-600 hover:scale-105">
            Hover me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Easing Functions</p>
        <div className="grid grid-cols-3 gap-3">
          <button className="px-3 py-2 bg-blue-500 text-white rounded text-sm transition-all duration-300 ease-linear hover:bg-blue-600">
            Linear
          </button>
          <button className="px-3 py-2 bg-blue-500 text-white rounded text-sm transition-all duration-300 ease-out hover:bg-blue-600">
            Ease
          </button>
          <button className="px-3 py-2 bg-blue-500 text-white rounded text-sm transition-all duration-300 ease-in hover:bg-blue-600">
            Ease In
          </button>
          <button className="px-3 py-2 bg-blue-500 text-white rounded text-sm transition-all duration-300 ease-out hover:bg-blue-600">
            Ease Out
          </button>
          <button className="px-3 py-2 bg-blue-500 text-white rounded text-sm transition-all duration-300 ease-in-out hover:bg-blue-600">
            Ease In-Out
          </button>
          <button className="px-3 py-2 bg-blue-500 text-white rounded text-sm transition-all duration-300 ease-in-out hover:bg-blue-600">
            Cubic
          </button>
        </div>
      </div>
    </div>
  );
}
