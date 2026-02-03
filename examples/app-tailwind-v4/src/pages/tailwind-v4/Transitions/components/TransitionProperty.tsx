import React from 'react';

export function TransitionProperty() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">All Properties</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-300 hover:bg-blue-600 hover:scale-105">
            Hover me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Color Only</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-colors duration-300 hover:bg-blue-600">
            Hover me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Opacity Only</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-opacity duration-300 hover:opacity-75">
            Hover me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Shadow Only</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-shadow duration-300 hover:shadow-lg">
            Hover me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Transform Only</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-transform duration-300 hover:scale-105">
            Hover me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">None</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-none duration-300 hover:bg-blue-600">
            Hover me
          </button>
        </div>
      </div>
    </div>
  );
}