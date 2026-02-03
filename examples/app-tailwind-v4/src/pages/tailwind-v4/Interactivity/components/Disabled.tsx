import React from 'react';

export function Disabled() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Disabled Buttons</p>
        <div className="flex gap-3">
          <button disabled className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed">
            Disabled
          </button>
          <button disabled className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed">
            Disabled
          </button>
          <button disabled className="px-4 py-2 bg-purple-500 text-white rounded disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed">
            Disabled
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Disabled Inputs</p>
        <div className="space-y-3">
          <input
            disabled
            type="text"
            placeholder="Disabled input"
            className="w-full px-4 py-2 border border-neutral-border rounded disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
          />
          <input
            disabled
            type="email"
            placeholder="Disabled email"
            className="w-full px-4 py-2 border border-neutral-border rounded disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
          />
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Disabled Links</p>
        <div className="flex gap-3">
          <a href="#" className="px-4 py-2 bg-orange-500 text-white rounded disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed pointer-events-none opacity-50">
            Disabled
          </a>
          <a href="#" className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed pointer-events-none opacity-50">
            Disabled
          </a>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Disabled Opacity</p>
        <div className="flex gap-3">
          <button disabled className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed">
            Disabled
          </button>
          <button disabled className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-25 disabled:cursor-not-allowed">
            Disabled
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Disabled with Different Styles</p>
        <div className="flex gap-3">
          <button disabled className="px-4 py-2 bg-white border-2 border-blue-500 text-blue-500 rounded disabled:border-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed">
            Disabled
          </button>
          <button disabled className="px-4 py-2 bg-white border-2 border-green-500 text-green-500 rounded disabled:border-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed">
            Disabled
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Disabled Checkboxes</p>
        <div className="flex gap-3">
          <label className="flex items-center gap-2">
            <input disabled type="checkbox" className="w-4 h-4 disabled:cursor-not-allowed" />
            <span className="text-sm text-gray-500">Disabled option</span>
          </label>
          <label className="flex items-center gap-2">
            <input disabled type="checkbox" className="w-4 h-4 disabled:cursor-not-allowed" />
            <span className="text-sm text-gray-500">Disabled option</span>
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Disabled Radio Buttons</p>
        <div className="flex gap-3">
          <label className="flex items-center gap-2">
            <input disabled type="radio" name="disabled-radio" className="w-4 h-4 disabled:cursor-not-allowed" />
            <span className="text-sm text-gray-500">Disabled option</span>
          </label>
          <label className="flex items-center gap-2">
            <input disabled type="radio" name="disabled-radio" className="w-4 h-4 disabled:cursor-not-allowed" />
            <span className="text-sm text-gray-500">Disabled option</span>
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Disabled Select</p>
        <select disabled className="w-full px-4 py-2 border border-neutral-border rounded disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed">
          <option>Disabled select</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
    </div>
  );
}