import React from 'react';

export function MinWidth() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Fixed Min Widths</p>
        <div className="space-y-2">
          <div className="min-w-12 w-full h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">min-w-12</div>
          <div className="min-w-16 w-full h-8 bg-green-500 rounded flex items-center justify-center text-white text-xs">min-w-16</div>
          <div className="min-w-20 w-full h-8 bg-purple-500 rounded flex items-center justify-center text-white text-xs">min-w-20</div>
          <div className="min-w-24 w-full h-8 bg-orange-500 rounded flex items-center justify-center text-white text-xs">min-w-24</div>
          <div className="min-w-32 w-full h-8 bg-pink-500 rounded flex items-center justify-center text-white text-xs">min-w-32</div>
          <div className="min-w-40 w-full h-8 bg-teal-500 rounded flex items-center justify-center text-white text-xs">min-w-40</div>
          <div className="min-w-48 w-full h-8 bg-indigo-500 rounded flex items-center justify-center text-white text-xs">min-w-48</div>
          <div className="min-w-56 w-full h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs">min-w-56</div>
          <div className="min-w-64 w-full h-8 bg-cyan-500 rounded flex items-center justify-center text-white text-xs">min-w-64</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Special Min Widths</p>
        <div className="space-y-2">
          <div className="min-w-0 w-full h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">min-w-0</div>
          <div className="min-w-full w-full h-8 bg-green-500 rounded flex items-center justify-center text-white text-xs">min-w-full</div>
          <div className="min-w-min w-full h-8 bg-purple-500 rounded flex items-center justify-center text-white text-xs">min-w-min</div>
          <div className="min-w-max w-full h-8 bg-orange-500 rounded flex items-center justify-center text-white text-xs">min-w-max</div>
          <div className="min-w-fit w-full h-8 bg-pink-500 rounded flex items-center justify-center text-white text-xs">min-w-fit</div>
        </div>
      </div>
    </div>
  );
}