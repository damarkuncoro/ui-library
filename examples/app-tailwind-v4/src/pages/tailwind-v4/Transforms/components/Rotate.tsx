import React from 'react';

export function Rotate() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Rotate Degrees</p>
        <div className="flex gap-3">
          <div className="w-16 h-16 bg-blue-500 rounded rotate-0 flex items-center justify-center text-white text-xs">0°</div>
          <div className="w-16 h-16 bg-blue-500 rounded rotate-1 flex items-center justify-center text-white text-xs">1°</div>
          <div className="w-16 h-16 bg-blue-500 rounded rotate-2 flex items-center justify-center text-white text-xs">2°</div>
          <div className="w-16 h-16 bg-blue-500 rounded rotate-3 flex items-center justify-center text-white text-xs">3°</div>
          <div className="w-16 h-16 bg-blue-500 rounded rotate-6 flex items-center justify-center text-white text-xs">6°</div>
          <div className="w-16 h-16 bg-blue-500 rounded rotate-12 flex items-center justify-center text-white text-xs">12°</div>
          <div className="w-16 h-16 bg-blue-500 rounded rotate-45 flex items-center justify-center text-white text-xs">45°</div>
          <div className="w-16 h-16 bg-blue-500 rounded rotate-90 flex items-center justify-center text-white text-xs">90°</div>
          <div className="w-16 h-16 bg-blue-500 rounded rotate-180 flex items-center justify-center text-white text-xs">180°</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Negative Rotate</p>
        <div className="flex gap-3">
          <div className="w-16 h-16 bg-green-500 rounded -rotate-0 flex items-center justify-center text-white text-xs">0°</div>
          <div className="w-16 h-16 bg-green-500 rounded -rotate-1 flex items-center justify-center text-white text-xs">-1°</div>
          <div className="w-16 h-16 bg-green-500 rounded -rotate-2 flex items-center justify-center text-white text-xs">-2°</div>
          <div className="w-16 h-16 bg-green-500 rounded -rotate-3 flex items-center justify-center text-white text-xs">-3°</div>
          <div className="w-16 h-16 bg-green-500 rounded -rotate-6 flex items-center justify-center text-white text-xs">-6°</div>
          <div className="w-16 h-16 bg-green-500 rounded -rotate-12 flex items-center justify-center text-white text-xs">-12°</div>
          <div className="w-16 h-16 bg-green-500 rounded -rotate-45 flex items-center justify-center text-white text-xs">-45°</div>
          <div className="w-16 h-16 bg-green-500 rounded -rotate-90 flex items-center justify-center text-white text-xs">-90°</div>
          <div className="w-16 h-16 bg-green-500 rounded -rotate-180 flex items-center justify-center text-white text-xs">-180°</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Rotate X (3D)</p>
        <div className="flex gap-3">
          <div className="w-16 h-16 bg-purple-500 rounded rotate-x-0 flex items-center justify-center text-white text-xs">0°</div>
          <div className="w-16 h-16 bg-purple-500 rounded rotate-x-12 flex items-center justify-center text-white text-xs">12°</div>
          <div className="w-16 h-16 bg-purple-500 rounded rotate-x-45 flex items-center justify-center text-white text-xs">45°</div>
          <div className="w-16 h-16 bg-purple-500 rounded rotate-x-90 flex items-center justify-center text-white text-xs">90°</div>
          <div className="w-16 h-16 bg-purple-500 rounded rotate-x-180 flex items-center justify-center text-white text-xs">180°</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Rotate Y (3D)</p>
        <div className="flex gap-3">
          <div className="w-16 h-16 bg-orange-500 rounded rotate-y-0 flex items-center justify-center text-white text-xs">0°</div>
          <div className="w-16 h-16 bg-orange-500 rounded rotate-y-12 flex items-center justify-center text-white text-xs">12°</div>
          <div className="w-16 h-16 bg-orange-500 rounded rotate-y-45 flex items-center justify-center text-white text-xs">45°</div>
          <div className="w-16 h-16 bg-orange-500 rounded rotate-y-90 flex items-center justify-center text-white text-xs">90°</div>
          <div className="w-16 h-16 bg-orange-500 rounded rotate-y-180 flex items-center justify-center text-white text-xs">180°</div>
        </div>
      </div>
    </div>
  );
}