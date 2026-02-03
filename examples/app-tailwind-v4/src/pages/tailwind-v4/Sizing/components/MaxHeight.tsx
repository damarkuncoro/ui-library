import React from 'react';

export function MaxHeight() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Fixed Max Heights</p>
        <div className="flex gap-2 items-end">
          <div className="w-12 max-h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">max-h-8</div>
          <div className="w-12 max-h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">max-h-12</div>
          <div className="w-12 max-h-16 bg-purple-500 rounded flex items-center justify-center text-white text-xs">max-h-16</div>
          <div className="w-12 max-h-20 bg-orange-500 rounded flex items-center justify-center text-white text-xs">max-h-20</div>
          <div className="w-12 max-h-24 bg-pink-500 rounded flex items-center justify-center text-white text-xs">max-h-24</div>
          <div className="w-12 max-h-32 bg-teal-500 rounded flex items-center justify-center text-white text-xs">max-h-32</div>
          <div className="w-12 max-h-40 bg-indigo-500 rounded flex items-center justify-center text-white text-xs">max-h-40</div>
          <div className="w-12 max-h-48 bg-red-500 rounded flex items-center justify-center text-white text-xs">max-h-48</div>
          <div className="w-12 max-h-56 bg-cyan-500 rounded flex items-center justify-center text-white text-xs">max-h-56</div>
          <div className="w-12 max-h-64 bg-yellow-500 rounded flex items-center justify-center text-white text-xs">max-h-64</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Screen Max Heights</p>
        <div className="flex gap-2 items-end">
          <div className="w-12 max-h-screen bg-blue-500 rounded flex items-center justify-center text-white text-xs">max-h-screen</div>
          <div className="w-12 max-h-[50vh] bg-green-500 rounded flex items-center justify-center text-white text-xs">50vh</div>
          <div className="w-12 max-h-[75vh] bg-purple-500 rounded flex items-center justify-center text-white text-xs">75vh</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Special Max Heights</p>
        <div className="flex gap-2 items-end">
          <div className="w-12 max-h-none bg-blue-500 rounded flex items-center justify-center text-white text-xs py-4">max-h-none</div>
          <div className="w-12 max-h-full bg-green-500 rounded flex items-center justify-center text-white text-xs py-4">max-h-full</div>
          <div className="w-12 max-h-min bg-purple-500 rounded flex items-center justify-center text-white text-xs py-4">max-h-min</div>
          <div className="w-12 max-h-max bg-orange-500 rounded flex items-center justify-center text-white text-xs py-4">max-h-max</div>
          <div className="w-12 max-h-fit bg-pink-500 rounded flex items-center justify-center text-white text-xs py-4">max-h-fit</div>
        </div>
      </div>
    </div>
  );
}