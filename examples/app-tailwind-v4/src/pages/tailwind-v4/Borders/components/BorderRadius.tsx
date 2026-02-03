import React from 'react';

export function BorderRadius() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">All Corners</p>
        <div className="flex gap-4 flex-wrap">
          <div className="w-20 h-20 bg-blue-500 rounded-none flex items-center justify-center text-white text-xs">none</div>
          <div className="w-20 h-20 bg-blue-500 rounded-sm flex items-center justify-center text-white text-xs">sm</div>
          <div className="w-20 h-20 bg-blue-500 rounded flex items-center justify-center text-white text-xs">default</div>
          <div className="w-20 h-20 bg-blue-500 rounded-md flex items-center justify-center text-white text-xs">md</div>
          <div className="w-20 h-20 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs">lg</div>
          <div className="w-20 h-20 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xs">xl</div>
          <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-xs">2xl</div>
          <div className="w-20 h-20 bg-blue-500 rounded-3xl flex items-center justify-center text-white text-xs">3xl</div>
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">full</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Individual Corners</p>
        <div className="flex gap-4 flex-wrap">
          <div className="w-20 h-20 bg-green-500 rounded-t-lg flex items-center justify-center text-white text-xs">t-lg</div>
          <div className="w-20 h-20 bg-green-500 rounded-r-lg flex items-center justify-center text-white text-xs">r-lg</div>
          <div className="w-20 h-20 bg-green-500 rounded-b-lg flex items-center justify-center text-white text-xs">b-lg</div>
          <div className="w-20 h-20 bg-green-500 rounded-l-lg flex items-center justify-center text-white text-xs">l-lg</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Top & Bottom / Left & Right</p>
        <div className="flex gap-4 flex-wrap">
          <div className="w-20 h-20 bg-purple-500 rounded-tl-lg flex items-center justify-center text-white text-xs">tl-lg</div>
          <div className="w-20 h-20 bg-purple-500 rounded-tr-lg flex items-center justify-center text-white text-xs">tr-lg</div>
          <div className="w-20 h-20 bg-purple-500 rounded-br-lg flex items-center justify-center text-white text-xs">br-lg</div>
          <div className="w-20 h-20 bg-purple-500 rounded-bl-lg flex items-center justify-center text-white text-xs">bl-lg</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Numeric Values</p>
        <div className="flex gap-4 flex-wrap">
          <div className="w-20 h-20 bg-orange-500 rounded-[4px] flex items-center justify-center text-white text-xs">4px</div>
          <div className="w-20 h-20 bg-orange-500 rounded-[8px] flex items-center justify-center text-white text-xs">8px</div>
          <div className="w-20 h-20 bg-orange-500 rounded-[12px] flex items-center justify-center text-white text-xs">12px</div>
          <div className="w-20 h-20 bg-orange-500 rounded-[16px] flex items-center justify-center text-white text-xs">16px</div>
          <div className="w-20 h-20 bg-orange-500 rounded-[24px] flex items-center justify-center text-white text-xs">24px</div>
        </div>
      </div>
    </div>
  );
}