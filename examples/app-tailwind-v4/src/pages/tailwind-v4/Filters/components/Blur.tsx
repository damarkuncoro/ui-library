import React from 'react';

export function Blur() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Blur Levels</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-20 bg-linear-to-br from-blue-400 to-blue-600 blur-none rounded flex items-center justify-center text-white text-sm">none</div>
          <div className="h-20 bg-linear-to-br from-green-400 to-green-600 blur-sm rounded flex items-center justify-center text-white text-sm">sm</div>
          <div className="h-20 bg-linear-to-br from-purple-400 to-purple-600 rounded flex items-center justify-center text-white text-sm">default</div>
          <div className="h-20 bg-linear-to-br from-orange-400 to-orange-600 blur-md rounded flex items-center justify-center text-white text-sm">md</div>
          <div className="h-20 bg-linear-to-br from-pink-400 to-pink-600 blur-lg rounded flex items-center justify-center text-white text-sm">lg</div>
          <div className="h-20 bg-linear-to-br from-teal-400 to-teal-600 blur-xl rounded flex items-center justify-center text-white text-sm">xl</div>
          <div className="h-20 bg-linear-to-br from-indigo-400 to-indigo-600 blur-2xl rounded flex items-center justify-center text-white text-sm">2xl</div>
          <div className="h-20 bg-linear-to-br from-red-400 to-red-600 blur-3xl rounded flex items-center justify-center text-white text-sm">3xl</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Backdrop Blur</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-20 bg-linear-to-br from-blue-400 to-blue-600 backdrop-blur-none rounded flex items-center justify-center text-white text-sm">none</div>
          <div className="h-20 bg-linear-to-br from-green-400 to-green-600 backdrop-blur-sm rounded flex items-center justify-center text-white text-sm">sm</div>
          <div className="h-20 bg-linear-to-br from-purple-400 to-purple-600 backdrop-blur-md rounded flex items-center justify-center text-white text-sm">md</div>
          <div className="h-20 bg-linear-to-br from-orange-400 to-orange-600 backdrop-blur-lg rounded flex items-center justify-center text-white text-sm">lg</div>
          <div className="h-20 bg-linear-to-br from-pink-400 to-pink-600 backdrop-blur-xl rounded flex items-center justify-center text-white text-sm">xl</div>
          <div className="h-20 bg-linear-to-br from-teal-400 to-teal-600 backdrop-blur-2xl rounded flex items-center justify-center text-white text-sm">2xl</div>
        </div>
      </div>
    </div>
  );
}