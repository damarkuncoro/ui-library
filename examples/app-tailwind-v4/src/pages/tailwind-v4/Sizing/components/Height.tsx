import React from 'react';

export function Height() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Fixed Heights</p>
        <div className="flex gap-2 items-end">
          <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">h-8</div>
          <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">h-12</div>
          <div className="w-12 h-16 bg-purple-500 rounded flex items-center justify-center text-white text-xs">h-16</div>
          <div className="w-12 h-20 bg-orange-500 rounded flex items-center justify-center text-white text-xs">h-20</div>
          <div className="w-12 h-24 bg-pink-500 rounded flex items-center justify-center text-white text-xs">h-24</div>
          <div className="w-12 h-32 bg-teal-500 rounded flex items-center justify-center text-white text-xs">h-32</div>
          <div className="w-12 h-40 bg-indigo-500 rounded flex items-center justify-center text-white text-xs">h-40</div>
          <div className="w-12 h-48 bg-red-500 rounded flex items-center justify-center text-white text-xs">h-48</div>
          <div className="w-12 h-56 bg-cyan-500 rounded flex items-center justify-center text-white text-xs">h-56</div>
          <div className="w-12 h-64 bg-yellow-500 rounded flex items-center justify-center text-white text-xs">h-64</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Percentage Heights</p>
        <div className="flex gap-2 items-end h-48 bg-gray-100 rounded p-2">
          <div className="w-12 h-1/2 bg-blue-500 rounded flex items-center justify-center text-white text-xs">h-1/2</div>
          <div className="w-12 h-1/3 bg-green-500 rounded flex items-center justify-center text-white text-xs">h-1/3</div>
          <div className="w-12 h-2/3 bg-purple-500 rounded flex items-center justify-center text-white text-xs">h-2/3</div>
          <div className="w-12 h-1/4 bg-orange-500 rounded flex items-center justify-center text-white text-xs">h-1/4</div>
          <div className="w-12 h-3/4 bg-pink-500 rounded flex items-center justify-center text-white text-xs">h-3/4</div>
          <div className="w-12 h-full bg-teal-500 rounded flex items-center justify-center text-white text-xs">h-full</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Special Heights</p>
        <div className="flex gap-2 items-end">
          <div className="w-12 h-auto bg-blue-500 rounded flex items-center justify-center text-white text-xs py-4">h-auto</div>
          <div className="w-12 h-screen bg-green-500 rounded flex items-center justify-center text-white text-xs">h-screen</div>
          <div className="w-12 h-min bg-purple-500 rounded flex items-center justify-center text-white text-xs py-4">h-min</div>
          <div className="w-12 h-max bg-orange-500 rounded flex items-center justify-center text-white text-xs py-4">h-max</div>
          <div className="w-12 h-fit bg-pink-500 rounded flex items-center justify-center text-white text-xs py-4">h-fit</div>
        </div>
      </div>
    </div>
  );
}