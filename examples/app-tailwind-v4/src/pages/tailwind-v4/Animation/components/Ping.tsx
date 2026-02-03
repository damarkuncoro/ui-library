import React from 'react';

export function Ping() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Ping Animation</p>
        <div className="flex gap-4">
          <div className="relative">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
          </div>
          <div className="relative">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
          </div>
          <div className="relative">
            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-4 h-4 bg-purple-500 rounded-full animate-ping"></div>
          </div>
          <div className="relative">
            <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-4 h-4 bg-orange-500 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Ping with Different Sizes</p>
        <div className="flex gap-4 items-center">
          <div className="relative">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
          </div>
          <div className="relative">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
          </div>
          <div className="relative">
            <div className="w-5 h-5 bg-purple-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-5 h-5 bg-purple-500 rounded-full animate-ping"></div>
          </div>
          <div className="relative">
            <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-6 h-6 bg-orange-500 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Ping with Different Colors</p>
        <div className="flex gap-4">
          <div className="relative">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
          </div>
          <div className="relative">
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-4 h-4 bg-yellow-500 rounded-full animate-ping"></div>
          </div>
          <div className="relative">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
          </div>
          <div className="relative">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
          </div>
          <div className="relative">
            <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-4 h-4 bg-indigo-500 rounded-full animate-ping"></div>
          </div>
          <div className="relative">
            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-4 h-4 bg-purple-500 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Ping with Different Durations</p>
        <div className="flex gap-4">
          <div className="relative">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-4 h-4 bg-blue-500 rounded-full animate-ping" style={{ animationDuration: '0.5s' }}></div>
          </div>
          <div className="relative">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-4 h-4 bg-green-500 rounded-full animate-ping" style={{ animationDuration: '1s' }}></div>
          </div>
          <div className="relative">
            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-4 h-4 bg-purple-500 rounded-full animate-ping" style={{ animationDuration: '1.5s' }}></div>
          </div>
          <div className="relative">
            <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-4 h-4 bg-orange-500 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Ping with Opacity</p>
        <div className="flex gap-4">
          <div className="relative">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-4 h-4 bg-blue-500/50 rounded-full animate-ping"></div>
          </div>
          <div className="relative">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-4 h-4 bg-green-500/75 rounded-full animate-ping"></div>
          </div>
          <div className="relative">
            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-4 h-4 bg-purple-500/25 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </div>
  );
}