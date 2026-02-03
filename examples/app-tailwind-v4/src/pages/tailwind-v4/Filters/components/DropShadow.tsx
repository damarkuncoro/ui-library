import React from 'react';

export function DropShadow() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Drop Shadow Levels</p>
        <div className="grid grid-cols-5 gap-4">
          <div className="h-20 bg-white drop-shadow-none rounded flex items-center justify-center text-neutral-text text-xs">none</div>
          <div className="h-20 bg-white drop-shadow-sm rounded flex items-center justify-center text-neutral-text text-xs">sm</div>
          <div className="h-20 bg-white drop-shadow rounded flex items-center justify-center text-neutral-text text-xs">default</div>
          <div className="h-20 bg-white drop-shadow-md rounded flex items-center justify-center text-neutral-text text-xs">md</div>
          <div className="h-20 bg-white drop-shadow-lg rounded flex items-center justify-center text-neutral-text text-xs">lg</div>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Drop Shadow XL</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-20 bg-white drop-shadow-xl rounded flex items-center justify-center text-neutral-text text-xs">xl</div>
          <div className="h-20 bg-white drop-shadow-2xl rounded flex items-center justify-center text-neutral-text text-xs">2xl</div>
          <div className="h-20 bg-white drop-shadow-none rounded flex items-center justify-center text-neutral-text text-xs">none</div>
        </div>
      </div>
    </div>
  );
}