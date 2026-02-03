import React from 'react';

export function Focus() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Color Change</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus:bg-blue-600 outline-none">
            Focus me
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded focus:bg-green-600 outline-none">
            Focus me
          </button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded focus:bg-purple-600 outline-none">
            Focus me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Ring</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none">
            Focus me
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded focus:ring-2 focus:ring-green-500 focus:ring-offset-2 outline-none">
            Focus me
          </button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 outline-none">
            Focus me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Shadow</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus:shadow-lg outline-none">
            Focus me
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded focus:shadow-xl outline-none">
            Focus me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Scale</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus:scale-105 outline-none transition-transform">
            Focus me
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded focus:scale-95 outline-none transition-transform">
            Focus me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Border</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border-2 border-blue-500 text-blue-500 rounded focus:border-blue-600 outline-none">
            Focus me
          </button>
          <button className="px-4 py-2 bg-white border-2 border-green-500 text-green-500 rounded focus:border-green-600 outline-none">
            Focus me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Opacity</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus:opacity-90 outline-none transition-opacity">
            Focus me
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded focus:opacity-75 outline-none transition-opacity">
            Focus me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Inputs</p>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Focus me"
            className="w-full px-4 py-2 border border-neutral-border rounded focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none"
          />
          <input
            type="email"
            placeholder="Focus me"
            className="w-full px-4 py-2 border border-neutral-border rounded focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 outline-none"
          />
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Links</p>
        <div className="flex gap-3">
          <a href="#" className="px-4 py-2 bg-orange-500 text-white rounded focus:bg-orange-600 outline-none">
            Focus me
          </a>
          <a href="#" className="px-4 py-2 bg-red-500 text-white rounded focus:bg-red-600 outline-none">
            Focus me
          </a>
        </div>
      </div>
    </div>
  );
}