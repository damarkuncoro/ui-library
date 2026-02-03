import React from 'react';

export function PracticalExamples() {
  return (
    <div className="space-y-6">
      {/* Button Hover Effects */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Button Hover Effects</p>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-lg">
            Scale + Shadow
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded transition-all duration-300 hover:bg-green-600 hover:-translate-y-1">
            Lift Up
          </button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded transition-all duration-300 hover:bg-purple-600 hover:rotate-2">
            Rotate
          </button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded transition-all duration-300 hover:bg-orange-600 hover:opacity-90">
            Fade
          </button>
        </div>
      </div>

      {/* Card Hover Effects */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Card Hover Effects</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-white border border-neutral-border rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
            <h3 className="font-medium text-neutral-text mb-2">Scale Card</h3>
            <p className="text-sm text-neutral-text-secondary">Hover to scale</p>
          </div>
          <div className="p-4 bg-white border border-neutral-border rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
            <h3 className="font-medium text-neutral-text mb-2">Lift Card</h3>
            <p className="text-sm text-neutral-text-secondary">Hover to lift</p>
          </div>
          <div className="p-4 bg-white border border-neutral-border rounded-lg transition-all duration-300 hover:border-blue-500 hover:shadow-lg cursor-pointer">
            <h3 className="font-medium text-neutral-text mb-2">Border Card</h3>
            <p className="text-sm text-neutral-text-secondary">Hover to highlight</p>
          </div>
        </div>
      </div>

      {/* Link Hover Effects */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Link Hover Effects</p>
        <div className="space-y-2">
          <a href="#" className="text-blue-500 transition-colors duration-300 hover:text-blue-600 hover:underline">
            Color + Underline
          </a>
          <a href="#" className="text-green-500 transition-all duration-300 hover:text-green-600 hover:pl-2">
            Slide Right
          </a>
          <a href="#" className="text-purple-500 transition-all duration-300 hover:text-purple-600 hover:tracking-wider">
            Letter Spacing
          </a>
        </div>
      </div>

      {/* Input Focus Effects */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Input Focus Effects</p>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Focus me"
            className="w-full px-4 py-2 border border-neutral-border rounded transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Focus me"
            className="w-full px-4 py-2 border border-neutral-border rounded transition-all duration-300 focus:border-green-500 focus:shadow-lg focus:outline-none"
          />
        </div>
      </div>

      {/* Modal/Dialog Transitions */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Modal/Dialog Transitions</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-white border border-neutral-border rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-110">
            <h3 className="font-medium text-neutral-text mb-2">Scale In</h3>
            <p className="text-sm text-neutral-text-secondary">Modal scale effect</p>
          </div>
          <div className="p-4 bg-white border border-neutral-border rounded-lg transition-all duration-300 hover:shadow-2xl hover:opacity-100 opacity-75">
            <h3 className="font-medium text-neutral-text mb-2">Fade In</h3>
            <p className="text-sm text-neutral-text-secondary">Modal fade effect</p>
          </div>
        </div>
      </div>

      {/* Staggered Animations */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Staggered Animations</p>
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded transition-all duration-300 hover:scale-125 delay-0"></div>
          <div className="w-8 h-8 bg-blue-500 rounded transition-all duration-300 hover:scale-125 delay-75"></div>
          <div className="w-8 h-8 bg-blue-500 rounded transition-all duration-300 hover:scale-125 delay-150"></div>
          <div className="w-8 h-8 bg-blue-500 rounded transition-all duration-300 hover:scale-125 delay-200"></div>
          <div className="w-8 h-8 bg-blue-500 rounded transition-all duration-300 hover:scale-125 delay-300"></div>
        </div>
      </div>

      {/* Complex Transitions */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Complex Transitions</p>
        <div className="grid grid-cols-2 gap-4">
          <button className="px-4 py-3 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-lg transition-all duration-500 hover:from-blue-600 hover:to-purple-600 hover:scale-105 hover:shadow-xl hover:-translate-y-1">
            Gradient Button
          </button>
          <button className="px-4 py-3 bg-white border-2 border-blue-500 text-blue-500 rounded-lg transition-all duration-500 hover:bg-blue-500 hover:text-white hover:scale-105 hover:shadow-xl">
            Outline Button
          </button>
        </div>
      </div>

      {/* Tooltip Transitions */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Tooltip Transitions</p>
        <div className="flex gap-4">
          <div className="relative group">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Hover me</button>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Tooltip
            </div>
          </div>
          <div className="relative group">
            <button className="px-4 py-2 bg-green-500 text-white rounded">Hover me</button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Tooltip
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
