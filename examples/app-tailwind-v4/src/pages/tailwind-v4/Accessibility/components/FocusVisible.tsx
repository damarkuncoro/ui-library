import React from 'react';

export function FocusVisible() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Visible Buttons</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none">
            Focus me
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:outline-none">
            Focus me
          </button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:outline-none">
            Focus me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Visible Links</p>
        <div className="flex gap-3">
          <a href="#" className="px-4 py-2 bg-orange-500 text-white rounded focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:outline-none">
            Focus me
          </a>
          <a href="#" className="px-4 py-2 bg-red-500 text-white rounded focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:outline-none">
            Focus me
          </a>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Visible Inputs</p>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Focus me"
            className="w-full px-4 py-2 border border-neutral-border rounded focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none"
          />
          <input
            type="email"
            placeholder="Focus me"
            className="w-full px-4 py-2 border border-neutral-border rounded focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:outline-none"
          />
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Visible with Different Ring Colors</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-neutral-border text-neutral-text rounded focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:outline-none">
            Red Ring
          </button>
          <button className="px-4 py-2 bg-white border border-neutral-border text-neutral-text rounded focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:outline-none">
            Yellow Ring
          </button>
          <button className="px-4 py-2 bg-white border border-neutral-border text-neutral-text rounded focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:outline-none">
            Green Ring
          </button>
          <button className="px-4 py-2 bg-white border border-neutral-border text-neutral-text rounded focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none">
            Blue Ring
          </button>
          <button className="px-4 py-2 bg-white border border-neutral-border text-neutral-text rounded focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:outline-none">
            Purple Ring
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Visible with Different Ring Sizes</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none">
            Ring 1
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none">
            Ring 2
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus-visible:ring-4 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none">
            Ring 4
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus-visible:ring-8 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none">
            Ring 8
          </button>
        </div>
      </div>
    </div>
  );
}