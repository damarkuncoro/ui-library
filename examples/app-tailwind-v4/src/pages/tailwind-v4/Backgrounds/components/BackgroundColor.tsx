import React from 'react';

export function BackgroundColor() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Gray Scale</p>
        <div className="grid grid-cols-6 gap-2">
          <div className="h-16 bg-gray-50 rounded flex items-center justify-center text-xs text-gray-700">50</div>
          <div className="h-16 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-700">100</div>
          <div className="h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-700">200</div>
          <div className="h-16 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-700">300</div>
          <div className="h-16 bg-gray-400 rounded flex items-center justify-center text-xs text-white">400</div>
          <div className="h-16 bg-gray-500 rounded flex items-center justify-center text-xs text-white">500</div>
          <div className="h-16 bg-gray-600 rounded flex items-center justify-center text-xs text-white">600</div>
          <div className="h-16 bg-gray-700 rounded flex items-center justify-center text-xs text-white">700</div>
          <div className="h-16 bg-gray-800 rounded flex items-center justify-center text-xs text-white">800</div>
          <div className="h-16 bg-gray-900 rounded flex items-center justify-center text-xs text-white">900</div>
          <div className="h-16 bg-gray-950 rounded flex items-center justify-center text-xs text-white">950</div>
          <div className="h-16 bg-white border border-gray-200 rounded flex items-center justify-center text-xs text-gray-700">white</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Color Palette</p>
        <div className="grid grid-cols-6 gap-2">
          <div className="h-16 bg-red-500 rounded flex items-center justify-center text-xs text-white">red</div>
          <div className="h-16 bg-orange-500 rounded flex items-center justify-center text-xs text-white">orange</div>
          <div className="h-16 bg-yellow-500 rounded flex items-center justify-center text-xs text-white">yellow</div>
          <div className="h-16 bg-green-500 rounded flex items-center justify-center text-xs text-white">green</div>
          <div className="h-16 bg-teal-500 rounded flex items-center justify-center text-xs text-white">teal</div>
          <div className="h-16 bg-blue-500 rounded flex items-center justify-center text-xs text-white">blue</div>
          <div className="h-16 bg-indigo-500 rounded flex items-center justify-center text-xs text-white">indigo</div>
          <div className="h-16 bg-purple-500 rounded flex items-center justify-center text-xs text-white">purple</div>
          <div className="h-16 bg-pink-500 rounded flex items-center justify-center text-xs text-white">pink</div>
          <div className="h-16 bg-rose-500 rounded flex items-center justify-center text-xs text-white">rose</div>
          <div className="h-16 bg-cyan-500 rounded flex items-center justify-center text-xs text-white">cyan</div>
          <div className="h-16 bg-lime-500 rounded flex items-center justify-center text-xs text-white">lime</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Opacity Variants</p>
        <div className="grid grid-cols-6 gap-2">
          <div className="h-16 bg-blue-500/10 rounded flex items-center justify-center text-xs text-blue-700">10%</div>
          <div className="h-16 bg-blue-500/20 rounded flex items-center justify-center text-xs text-blue-700">20%</div>
          <div className="h-16 bg-blue-500/30 rounded flex items-center justify-center text-xs text-blue-700">30%</div>
          <div className="h-16 bg-blue-500/40 rounded flex items-center justify-center text-xs text-white">40%</div>
          <div className="h-16 bg-blue-500/50 rounded flex items-center justify-center text-xs text-white">50%</div>
          <div className="h-16 bg-blue-500/60 rounded flex items-center justify-center text-xs text-white">60%</div>
          <div className="h-16 bg-blue-500/70 rounded flex items-center justify-center text-xs text-white">70%</div>
          <div className="h-16 bg-blue-500/80 rounded flex items-center justify-center text-xs text-white">80%</div>
          <div className="h-16 bg-blue-500/90 rounded flex items-center justify-center text-xs text-white">90%</div>
          <div className="h-16 bg-blue-500 rounded flex items-center justify-center text-xs text-white">100%</div>
        </div>
      </div>
    </div>
  );
}