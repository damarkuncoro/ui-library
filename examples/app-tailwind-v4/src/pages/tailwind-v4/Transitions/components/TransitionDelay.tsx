import React from 'react';

export function TransitionDelay() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Delay 75ms</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-300 delay-75 hover:bg-blue-600 hover:scale-105">
            Hover me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Delay 100ms</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-300 delay-100 hover:bg-blue-600 hover:scale-105">
            Hover me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Delay 150ms</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-300 delay-150 hover:bg-blue-600 hover:scale-105">
            Hover me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Delay 200ms</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-300 delay-200 hover:bg-blue-600 hover:scale-105">
            Hover me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Delay 300ms</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-300 delay-300 hover:bg-blue-600 hover:scale-105">
            Hover me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Delay 500ms</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-300 delay-500 hover:bg-blue-600 hover:scale-105">
            Hover me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Delay 700ms</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-300 delay-700 hover:bg-blue-600 hover:scale-105">
            Hover me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Delay 1000ms</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-300 delay-1000 hover:bg-blue-600 hover:scale-105">
            Hover me
          </button>
        </div>
      </div>
    </div>
  );
}