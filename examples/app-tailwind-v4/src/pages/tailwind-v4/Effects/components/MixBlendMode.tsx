
import React from 'react';

export function MixBlendMode() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Mix Blend Modes</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="relative h-20 bg-blue-500 rounded overflow-hidden">
            <div className="absolute inset-0 bg-red-500 mix-blend-normal"></div>
            <span className="relative z-10 flex items-center justify-center h-full text-white text-xs">normal</span>
          </div>
          <div className="relative h-20 bg-blue-500 rounded overflow-hidden">
            <div className="absolute inset-0 bg-red-500 mix-blend-multiply"></div>
            <span className="relative z-10 flex items-center justify-center h-full text-white text-xs">multiply</span>
          </div>
          <div className="relative h-20 bg-blue-500 rounded overflow-hidden">
            <div className="absolute inset-0 bg-red-500 mix-blend-screen"></div>
            <span className="relative z-10 flex items-center justify-center h-full text-white text-xs">screen</span>
          </div>
          <div className="relative h-20 bg-blue-500 rounded overflow-hidden">
            <div className="absolute inset-0 bg-red-500 mix-blend-overlay"></div>
            <span className="relative z-10 flex items-center justify-center h-full text-white text-xs">overlay</span>
          </div>
          <div className="relative h-20 bg-blue-500 rounded overflow-hidden">
            <div className="absolute inset-0 bg-red-500 mix-blend-darken"></div>
            <span className="relative z-10 flex items-center justify-center h-full text-white text-xs">darken</span>
          </div>
          <div className="relative h-20 bg-blue-500 rounded overflow-hidden">
            <div className="absolute inset-0 bg-red-500 mix-blend-lighten"></div>
            <span className="relative z-10 flex items-center justify-center h-full text-white text-xs">lighten</span>
          </div>
        </div>
      </div>
    </div>
  );
}
