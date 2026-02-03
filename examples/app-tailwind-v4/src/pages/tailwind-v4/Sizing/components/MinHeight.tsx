import React from 'react';

export function MinHeight() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Fixed Min Heights</p>
        <div className="flex gap-2 items-end">
          <div className="w-12 min-h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">min-h-8</div>
          <div className="w-12 min-h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">min-h-12</div>
          <div className="w-12 min-h-16 bg-purple-500 rounded flex items-center justify-center text-white text-xs">min-h-16</div>
          <div className="w-12 min-h-20 bg-orange-500 rounded flex items-center justify-center text-white text-xs">min-h-20</div>
          <div className="w-12 min-h-24 bg-pink-500 rounded flex items-center justify-center text-white text-xs">min-h-24</div>
          <div className="w-12 min-h-32 bg-teal-500 rounded flex items-center justify-center text-white text-xs">min-h-32</div>
          <div className="w-12 min-h-40 bg-indigo-500 rounded flex items-center justify-center text-white text-xs">min-h-40</div>
          <div className="w-12 min-h-48 bg-red-500 rounded flex items-center justify-center text-white text-xs">min-h-48</div>
          <div className="w-12 min-h-56 bg-cyan-500 rounded flex items-center justify-center text-white text-xs">min-h-56</div>
          <div className="w-12 min-h-64 bg-yellow-500 rounded flex items-center justify-center text-white text-xs">min-h-64</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Screen Min Heights</p>
        <div className="flex gap-2 items-end">
          <div className="w-12 min-h-screen bg-blue-500 rounded flex items-center justify-center text-white text-xs">min-h-screen</div>
          <div className="w-12 min-h-[50vh] bg-green-500 rounded flex items-center justify-center text-white text-xs">50vh</div>
          <div className="w-12 min-h-[75vh] bg-purple-500 rounded flex items-center justify-center text-white text-xs">75vh</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Special Min Heights</p>
        <div className="flex gap-2 items-end">
          <div className="w-12 min-h-0 bg-blue-500 rounded flex items-center justify-center text-white text-xs py-4">min-h-0</div>
          <div className="w-12 min-h-full bg-green-500 rounded flex items-center justify-center text-white text-xs py-4">min-h-full</div>
          <div className="w-12 min-h-min bg-purple-500 rounded flex items-center justify-center text-white text-xs py-4">min-h-min</div>
          <div className="w-12 min-h-max bg-orange-500 rounded flex items-center justify-center text-white text-xs py-4">min-h-max</div>
          <div className="w-12 min-h-fit bg-pink-500 rounded flex items-center justify-center text-white text-xs py-4">min-h-fit</div>
        </div>
      </div>
    </div>
  );
}