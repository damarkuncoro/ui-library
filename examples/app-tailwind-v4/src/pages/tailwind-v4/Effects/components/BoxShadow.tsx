import React from 'react';

export function BoxShadow() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Shadow Sizes</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-20 bg-white shadow-sm rounded flex items-center justify-center text-sm">shadow-sm</div>
          <div className="h-20 bg-white shadow rounded flex items-center justify-center text-sm">shadow</div>
          <div className="h-20 bg-white shadow-md rounded flex items-center justify-center text-sm">shadow-md</div>
          <div className="h-20 bg-white shadow-lg rounded flex items-center justify-center text-sm">shadow-lg</div>
          <div className="h-20 bg-white shadow-xl rounded flex items-center justify-center text-sm">shadow-xl</div>
          <div className="h-20 bg-white shadow-2xl rounded flex items-center justify-center text-sm">shadow-2xl</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Shadow Colors</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-20 bg-white shadow-blue-500/50 rounded flex items-center justify-center text-sm">blue</div>
          <div className="h-20 bg-white shadow-green-500/50 rounded flex items-center justify-center text-sm">green</div>
          <div className="h-20 bg-white shadow-purple-500/50 rounded flex items-center justify-center text-sm">purple</div>
          <div className="h-20 bg-white shadow-red-500/50 rounded flex items-center justify-center text-sm">red</div>
          <div className="h-20 bg-white shadow-orange-500/50 rounded flex items-center justify-center text-sm">orange</div>
          <div className="h-20 bg-white shadow-pink-500/50 rounded flex items-center justify-center text-sm">pink</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Inner Shadow</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-20 bg-white shadow-inner rounded flex items-center justify-center text-sm">shadow-inner</div>
          <div className="h-20 bg-gray-100 shadow-inner rounded flex items-center justify-center text-sm">shadow-inner</div>
          <div className="h-20 bg-gray-200 shadow-inner rounded flex items-center justify-center text-sm">shadow-inner</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">No Shadow</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-20 bg-white shadow-none rounded flex items-center justify-center text-sm">shadow-none</div>
          <div className="h-20 bg-gray-100 shadow-none rounded flex items-center justify-center text-sm">shadow-none</div>
          <div className="h-20 bg-gray-200 shadow-none rounded flex items-center justify-center text-sm">shadow-none</div>
        </div>
      </div>
    </div>
  );
}