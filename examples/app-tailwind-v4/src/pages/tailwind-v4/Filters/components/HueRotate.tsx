import React from 'react';

export function HueRotate() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Hue Rotate Levels</p>
        <div className="grid grid-cols-5 gap-2">
          <div className="h-20 bg-blue-500 hue-rotate-0 rounded flex items-center justify-center text-white text-xs">0</div>
          <div className="h-20 bg-blue-500 hue-rotate-15 rounded flex items-center justify-center text-white text-xs">15</div>
          <div className="h-20 bg-blue-500 hue-rotate-30 rounded flex items-center justify-center text-white text-xs">30</div>
          <div className="h-20 bg-blue-500 hue-rotate-45 rounded flex items-center justify-center text-white text-xs">45</div>
          <div className="h-20 bg-blue-500 hue-rotate-60 rounded flex items-center justify-center text-white text-xs">60</div>
          <div className="h-20 bg-blue-500 hue-rotate-90 rounded flex items-center justify-center text-white text-xs">90</div>
          <div className="h-20 bg-blue-500 hue-rotate-120 rounded flex items-center justify-center text-white text-xs">120</div>
          <div className="h-20 bg-blue-500 hue-rotate-180 rounded flex items-center justify-center text-white text-xs">180</div>
          <div className="h-20 bg-blue-500 hue-rotate-270 rounded flex items-center justify-center text-white text-xs">270</div>
        </div>
      </div>
    </div>
  );
}