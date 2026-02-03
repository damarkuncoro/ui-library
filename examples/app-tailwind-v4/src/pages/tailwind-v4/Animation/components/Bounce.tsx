import React from 'react';

export function Bounce() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Bounce Animation</p>
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-lg animate-bounce"></div>
          <div className="w-12 h-12 bg-green-500 rounded-lg animate-bounce"></div>
          <div className="w-12 h-12 bg-purple-500 rounded-lg animate-bounce"></div>
          <div className="w-12 h-12 bg-orange-500 rounded-lg animate-bounce"></div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Bounce with Different Shapes</p>
        <div className="flex gap-4 items-center">
          <div className="w-12 h-12 bg-blue-500 rounded-none animate-bounce"></div>
          <div className="w-12 h-12 bg-green-500 rounded-sm animate-bounce"></div>
          <div className="w-12 h-12 bg-purple-500 rounded-md animate-bounce"></div>
          <div className="w-12 h-12 bg-orange-500 rounded-lg animate-bounce"></div>
          <div className="w-12 h-12 bg-red-500 rounded-full animate-bounce"></div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Bounce with Different Sizes</p>
        <div className="flex gap-4 items-center">
          <div className="w-8 h-8 bg-blue-500 rounded-lg animate-bounce"></div>
          <div className="w-12 h-12 bg-green-500 rounded-lg animate-bounce"></div>
          <div className="w-16 h-16 bg-purple-500 rounded-lg animate-bounce"></div>
          <div className="w-20 h-20 bg-orange-500 rounded-lg animate-bounce"></div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Bounce with Different Colors</p>
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-red-500 rounded-lg animate-bounce"></div>
          <div className="w-12 h-12 bg-yellow-500 rounded-lg animate-bounce"></div>
          <div className="w-12 h-12 bg-green-500 rounded-lg animate-bounce"></div>
          <div className="w-12 h-12 bg-blue-500 rounded-lg animate-bounce"></div>
          <div className="w-12 h-12 bg-indigo-500 rounded-lg animate-bounce"></div>
          <div className="w-12 h-12 bg-purple-500 rounded-lg animate-bounce"></div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Bounce with Different Durations</p>
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-lg animate-bounce" style={{ animationDuration: '0.5s' }}></div>
          <div className="w-12 h-12 bg-green-500 rounded-lg animate-bounce" style={{ animationDuration: '1s' }}></div>
          <div className="w-12 h-12 bg-purple-500 rounded-lg animate-bounce" style={{ animationDuration: '1.5s' }}></div>
          <div className="w-12 h-12 bg-orange-500 rounded-lg animate-bounce" style={{ animationDuration: '2s' }}></div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Bounce with Opacity</p>
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-blue-500/50 rounded-lg animate-bounce"></div>
          <div className="w-12 h-12 bg-green-500/75 rounded-lg animate-bounce"></div>
          <div className="w-12 h-12 bg-purple-500/25 rounded-lg animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}