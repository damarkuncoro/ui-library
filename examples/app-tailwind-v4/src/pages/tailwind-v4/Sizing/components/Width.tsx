import React from 'react';

export function Width() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Fixed Widths</p>
        <div className="space-y-2">
          <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">w-12</div>
          <div className="w-16 h-8 bg-green-500 rounded flex items-center justify-center text-white text-xs">w-16</div>
          <div className="w-20 h-8 bg-purple-500 rounded flex items-center justify-center text-white text-xs">w-20</div>
          <div className="w-24 h-8 bg-orange-500 rounded flex items-center justify-center text-white text-xs">w-24</div>
          <div className="w-32 h-8 bg-pink-500 rounded flex items-center justify-center text-white text-xs">w-32</div>
          <div className="w-40 h-8 bg-teal-500 rounded flex items-center justify-center text-white text-xs">w-40</div>
          <div className="w-48 h-8 bg-indigo-500 rounded flex items-center justify-center text-white text-xs">w-48</div>
          <div className="w-56 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs">w-56</div>
          <div className="w-64 h-8 bg-cyan-500 rounded flex items-center justify-center text-white text-xs">w-64</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Percentage Widths</p>
        <div className="space-y-2">
          <div className="w-1/2 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">w-1/2</div>
          <div className="w-1/3 h-8 bg-green-500 rounded flex items-center justify-center text-white text-xs">w-1/3</div>
          <div className="w-2/3 h-8 bg-purple-500 rounded flex items-center justify-center text-white text-xs">w-2/3</div>
          <div className="w-1/4 h-8 bg-orange-500 rounded flex items-center justify-center text-white text-xs">w-1/4</div>
          <div className="w-3/4 h-8 bg-pink-500 rounded flex items-center justify-center text-white text-xs">w-3/4</div>
          <div className="w-1/5 h-8 bg-teal-500 rounded flex items-center justify-center text-white text-xs">w-1/5</div>
          <div className="w-2/5 h-8 bg-indigo-500 rounded flex items-center justify-center text-white text-xs">w-2/5</div>
          <div className="w-3/5 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs">w-3/5</div>
          <div className="w-4/5 h-8 bg-cyan-500 rounded flex items-center justify-center text-white text-xs">w-4/5</div>
          <div className="w-1/6 h-8 bg-yellow-500 rounded flex items-center justify-center text-white text-xs">w-1/6</div>
          <div className="w-5/6 h-8 bg-lime-500 rounded flex items-center justify-center text-white text-xs">w-5/6</div>
          <div className="w-full h-8 bg-emerald-500 rounded flex items-center justify-center text-white text-xs">w-full</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Special Widths</p>
        <div className="space-y-2">
          <div className="w-auto h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs px-4">w-auto</div>
          <div className="w-screen h-8 bg-green-500 rounded flex items-center justify-center text-white text-xs">w-screen</div>
          <div className="w-min h-8 bg-purple-500 rounded flex items-center justify-center text-white text-xs px-4">w-min</div>
          <div className="w-max h-8 bg-orange-500 rounded flex items-center justify-center text-white text-xs px-4">w-max</div>
          <div className="w-fit h-8 bg-pink-500 rounded flex items-center justify-center text-white text-xs px-4">w-fit</div>
        </div>
      </div>
    </div>
  );
}