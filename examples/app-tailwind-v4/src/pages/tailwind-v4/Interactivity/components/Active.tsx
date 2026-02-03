import React from 'react';

export function Active() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Active Color Change</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded active:bg-blue-700">
            Click me
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded active:bg-green-700">
            Click me
          </button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded active:bg-purple-700">
            Click me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Active Scale</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded active:scale-95 transition-transform">
            Click me
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded active:scale-90 transition-transform">
            Click me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Active Shadow</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded active:shadow-inner transition-shadow">
            Click me
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded active:shadow-lg transition-shadow">
            Click me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Active Translate</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded active:translate-y-1 transition-transform">
            Click me
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded active:translate-x-1 transition-transform">
            Click me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Active Opacity</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded active:opacity-75 transition-opacity">
            Click me
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded active:opacity-50 transition-opacity">
            Click me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Active Border</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border-2 border-blue-500 text-blue-500 rounded active:border-blue-700 transition-colors">
            Click me
          </button>
          <button className="px-4 py-2 bg-white border-2 border-green-500 text-green-500 rounded active:border-green-700 transition-colors">
            Click me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Active Text Color</p>
        <div className="flex gap-3">
          <a href="#" className="text-blue-500 active:text-blue-700 transition-colors">
            Click Link
          </a>
          <a href="#" className="text-green-500 active:text-green-700 transition-colors">
            Click Link
          </a>
          <a href="#" className="text-purple-500 active:text-purple-700 transition-colors">
            Click Link
          </a>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Active Rotate</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded active:rotate-2 transition-transform">
            Click me
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded active:-rotate-2 transition-transform">
            Click me
          </button>
        </div>
      </div>
    </div>
  );
}