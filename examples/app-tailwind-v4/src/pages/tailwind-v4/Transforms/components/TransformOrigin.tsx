import React from 'react';

export function TransformOrigin() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Origin Center (Default)</p>
        <div className="flex gap-3">
          <div className="w-20 h-20 bg-blue-500 rounded origin-center rotate-45 flex items-center justify-center text-white text-xs">
            Center
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Origin Top</p>
        <div className="flex gap-3">
          <div className="w-20 h-20 bg-green-500 rounded origin-top rotate-45 flex items-center justify-center text-white text-xs">
            Top
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Origin Bottom</p>
        <div className="flex gap-3">
          <div className="w-20 h-20 bg-purple-500 rounded origin-bottom rotate-45 flex items-center justify-center text-white text-xs">
            Bottom
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Origin Left</p>
        <div className="flex gap-3">
          <div className="w-20 h-20 bg-orange-500 rounded origin-left rotate-45 flex items-center justify-center text-white text-xs">
            Left
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Origin Right</p>
        <div className="flex gap-3">
          <div className="w-20 h-20 bg-red-500 rounded origin-right rotate-45 flex items-center justify-center text-white text-xs">
            Right
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Origin Top Left</p>
        <div className="flex gap-3">
          <div className="w-20 h-20 bg-pink-500 rounded origin-top-left rotate-45 flex items-center justify-center text-white text-xs">
            Top Left
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Origin Top Right</p>
        <div className="flex gap-3">
          <div className="w-20 h-20 bg-indigo-500 rounded origin-top-right rotate-45 flex items-center justify-center text-white text-xs">
            Top Right
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Origin Bottom Left</p>
        <div className="flex gap-3">
          <div className="w-20 h-20 bg-teal-500 rounded origin-bottom-left rotate-45 flex items-center justify-center text-white text-xs">
            Bottom Left
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Origin Bottom Right</p>
        <div className="flex gap-3">
          <div className="w-20 h-20 bg-cyan-500 rounded origin-bottom-right rotate-45 flex items-center justify-center text-white text-xs">
            Bottom Right
          </div>
        </div>
      </div>
    </div>
  );
}