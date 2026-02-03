import React from 'react';

export function FocusRing() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Ring Buttons</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
            Focus me
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none">
            Focus me
          </button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none">
            Focus me
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Ring with Different Colors</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-neutral-border text-neutral-text rounded focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none">
            Red Ring
          </button>
          <button className="px-4 py-2 bg-white border border-neutral-border text-neutral-text rounded focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:outline-none">
            Yellow Ring
          </button>
          <button className="px-4 py-2 bg-white border border-neutral-border text-neutral-text rounded focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none">
            Green Ring
          </button>
          <button className="px-4 py-2 bg-white border border-neutral-border text-neutral-text rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
            Blue Ring
          </button>
          <button className="px-4 py-2 bg-white border border-neutral-border text-neutral-text rounded focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none">
            Purple Ring
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Ring with Different Sizes</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus:ring-1 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
            Ring 1
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
            Ring 2
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
            Ring 4
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus:ring-8 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
            Ring 8
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Ring with Different Offsets</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 focus:outline-none">
            Offset 0
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:outline-none">
            Offset 1
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
            Offset 2
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-4 focus:outline-none">
            Offset 4
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-8 focus:outline-none">
            Offset 8
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Ring with Opacity</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus:ring-2 focus:ring-blue-500/25 focus:ring-offset-2 focus:outline-none">
            25% Opacity
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:outline-none">
            50% Opacity
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-2 focus:outline-none">
            75% Opacity
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
            100% Opacity
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Ring Inputs</p>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Focus me"
            className="w-full px-4 py-2 border border-neutral-border rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Focus me"
            className="w-full px-4 py-2 border border-neutral-border rounded focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
          />
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Ring Links</p>
        <div className="flex gap-3">
          <a href="#" className="px-4 py-2 bg-orange-500 text-white rounded focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none">
            Focus me
          </a>
          <a href="#" className="px-4 py-2 bg-red-500 text-white rounded focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none">
            Focus me
          </a>
        </div>
      </div>
    </div>
  );
}