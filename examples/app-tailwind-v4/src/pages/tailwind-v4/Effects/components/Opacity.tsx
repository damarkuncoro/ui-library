import React from 'react';

export function Opacity() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Opacity Levels</p>
        <div className="grid grid-cols-5 gap-2">
          <div className="h-20 bg-blue-500 opacity-0 rounded flex items-center justify-center text-white text-xs">0</div>
          <div className="h-20 bg-blue-500 opacity-10 rounded flex items-center justify-center text-white text-xs">10</div>
          <div className="h-20 bg-blue-500 opacity-20 rounded flex items-center justify-center text-white text-xs">20</div>
          <div className="h-20 bg-blue-500 opacity-30 rounded flex items-center justify-center text-white text-xs">30</div>
          <div className="h-20 bg-blue-500 opacity-40 rounded flex items-center justify-center text-white text-xs">40</div>
          <div className="h-20 bg-blue-500 opacity-50 rounded flex items-center justify-center text-white text-xs">50</div>
          <div className="h-20 bg-blue-500 opacity-60 rounded flex items-center justify-center text-white text-xs">60</div>
          <div className="h-20 bg-blue-500 opacity-70 rounded flex items-center justify-center text-white text-xs">70</div>
          <div className="h-20 bg-blue-500 opacity-80 rounded flex items-center justify-center text-white text-xs">80</div>
          <div className="h-20 bg-blue-500 opacity-90 rounded flex items-center justify-center text-white text-xs">90</div>
          <div className="h-20 bg-blue-500 opacity-100 rounded flex items-center justify-center text-white text-xs">100</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Hover Opacity</p>
        <div className="grid grid-cols-5 gap-2">
          <div className="h-20 bg-green-500 opacity-50 hover:opacity-100 rounded flex items-center justify-center text-white text-xs transition-opacity">hover</div>
          <div className="h-20 bg-green-500 opacity-50 hover:opacity-100 rounded flex items-center justify-center text-white text-xs transition-opacity">hover</div>
          <div className="h-20 bg-green-500 opacity-50 hover:opacity-100 rounded flex items-center justify-center text-white text-xs transition-opacity">hover</div>
          <div className="h-20 bg-green-500 opacity-50 hover:opacity-100 rounded flex items-center justify-center text-white text-xs transition-opacity">hover</div>
          <div className="h-20 bg-green-500 opacity-50 hover:opacity-100 rounded flex items-center justify-center text-white text-xs transition-opacity">hover</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Opacity</p>
        <div className="grid grid-cols-5 gap-2">
          <div className="h-20 bg-purple-500 opacity-50 focus:opacity-100 rounded flex items-center justify-center text-white text-xs transition-opacity cursor-pointer">focus</div>
          <div className="h-20 bg-purple-500 opacity-50 focus:opacity-100 rounded flex items-center justify-center text-white text-xs transition-opacity cursor-pointer">focus</div>
          <div className="h-20 bg-purple-500 opacity-50 focus:opacity-100 rounded flex items-center justify-center text-white text-xs transition-opacity cursor-pointer">focus</div>
          <div className="h-20 bg-purple-500 opacity-50 focus:opacity-100 rounded flex items-center justify-center text-white text-xs transition-opacity cursor-pointer">focus</div>
          <div className="h-20 bg-purple-500 opacity-50 focus:opacity-100 rounded flex items-center justify-center text-white text-xs transition-opacity cursor-pointer">focus</div>
        </div>
      </div>
    </div>
  );
}