import React from 'react';

export function Hover() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Hover Color Change</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Hover me
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Hover me
          </button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
            Hover me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Hover Scale</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:scale-105 transition-transform">
            Scale Up
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:scale-95 transition-transform">
            Scale Down
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Hover Shadow</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:shadow-lg transition-shadow">
            Shadow
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:shadow-xl transition-shadow">
            Large Shadow
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Hover Translate</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:-translate-y-1 transition-transform">
            Lift Up
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:translate-x-1 transition-transform">
            Move Right
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Hover Opacity</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:opacity-90 transition-opacity">
            Fade
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:opacity-75 transition-opacity">
            More Fade
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Hover Rotate</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:rotate-2 transition-transform">
            Rotate
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:-rotate-2 transition-transform">
            Rotate Back
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Hover Border</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border-2 border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors">
            Border
          </button>
          <button className="px-4 py-2 bg-white border-2 border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white transition-colors">
            Border
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Hover Text Color</p>
        <div className="flex gap-3">
          <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
            Hover Link
          </a>
          <a href="#" className="text-green-500 hover:text-green-600 transition-colors">
            Hover Link
          </a>
          <a href="#" className="text-purple-500 hover:text-purple-600 transition-colors">
            Hover Link
          </a>
        </div>
      </div>
    </div>
  );
}