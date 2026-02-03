import React from 'react';

export function TransitionDuration() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Duration 75ms</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-75 hover:bg-blue-600 hover:scale-105">
            Hover me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Duration 100ms</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-100 hover:bg-blue-600 hover:scale-105">
            Hover me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Duration 150ms</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-150 hover:bg-blue-600 hover:scale-105">
            Hover me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Duration 200ms</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-200 hover:bg-blue-600 hover:scale-105">
            Hover me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Duration 300ms (Default)</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-300 hover:bg-blue-600 hover:scale-105">
            Hover me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Duration 500ms</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-500 hover:bg-blue-600 hover:scale-105">
            Hover me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Duration 700ms</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-700 hover:bg-blue-600 hover:scale-105">
            Hover me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Duration 1000ms</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-1000 hover:bg-blue-600 hover:scale-105">
            Hover me
          </button>
        </div>
      </div>
    </div>
  );
}