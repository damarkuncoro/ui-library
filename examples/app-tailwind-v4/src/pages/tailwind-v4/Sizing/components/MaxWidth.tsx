import React from 'react';

export function MaxWidth() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Fixed Max Widths</p>
        <div className="space-y-2">
          <div className="max-w-xs w-full h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">max-w-xs</div>
          <div className="max-w-sm w-full h-8 bg-green-500 rounded flex items-center justify-center text-white text-xs">max-w-sm</div>
          <div className="max-w-md w-full h-8 bg-purple-500 rounded flex items-center justify-center text-white text-xs">max-w-md</div>
          <div className="max-w-lg w-full h-8 bg-orange-500 rounded flex items-center justify-center text-white text-xs">max-w-lg</div>
          <div className="max-w-xl w-full h-8 bg-pink-500 rounded flex items-center justify-center text-white text-xs">max-w-xl</div>
          <div className="max-w-2xl w-full h-8 bg-teal-500 rounded flex items-center justify-center text-white text-xs">max-w-2xl</div>
          <div className="max-w-3xl w-full h-8 bg-indigo-500 rounded flex items-center justify-center text-white text-xs">max-w-3xl</div>
          <div className="max-w-4xl w-full h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs">max-w-4xl</div>
          <div className="max-w-5xl w-full h-8 bg-cyan-500 rounded flex items-center justify-center text-white text-xs">max-w-5xl</div>
          <div className="max-w-6xl w-full h-8 bg-yellow-500 rounded flex items-center justify-center text-white text-xs">max-w-6xl</div>
          <div className="max-w-7xl w-full h-8 bg-lime-500 rounded flex items-center justify-center text-white text-xs">max-w-7xl</div>
          <div className="max-w-full w-full h-8 bg-emerald-500 rounded flex items-center justify-center text-white text-xs">max-w-full</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Screen Max Widths</p>
        <div className="space-y-2">
          <div className="max-w-screen-sm w-full h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">max-w-screen-sm</div>
          <div className="max-w-3xl w-full h-8 bg-green-500 rounded flex items-center justify-center text-white text-xs">max-w-3xl</div>
          <div className="max-w-5xl w-full h-8 bg-purple-500 rounded flex items-center justify-center text-white text-xs">max-w-5xl</div>
          <div className="max-w-7xl w-full h-8 bg-orange-500 rounded flex items-center justify-center text-white text-xs">max-w-7xl</div>
          <div className="max-w-screen-2xl w-full h-8 bg-pink-500 rounded flex items-center justify-center text-white text-xs">max-w-screen-2xl</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Special Max Widths</p>
        <div className="space-y-2">
          <div className="max-w-none w-full h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">max-w-none</div>
          <div className="max-w-min w-full h-8 bg-green-500 rounded flex items-center justify-center text-white text-xs">max-w-min</div>
          <div className="max-w-max w-full h-8 bg-purple-500 rounded flex items-center justify-center text-white text-xs">max-w-max</div>
          <div className="max-w-fit w-full h-8 bg-orange-500 rounded flex items-center justify-center text-white text-xs">max-w-fit</div>
        </div>
      </div>
    </div>
  );
}