import React from 'react';

export function Gradient() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Linear Gradients</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-16 bg-linear-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center text-white text-sm">
            to-r
          </div>
          <div className="h-16 bg-linear-to-l from-blue-500 to-purple-500 rounded flex items-center justify-center text-white text-sm">
            to-l
          </div>
          <div className="h-16 bg-linear-to-t from-blue-500 to-purple-500 rounded flex items-center justify-center text-white text-sm">
            to-t
          </div>
          <div className="h-16 bg-linear-to-b from-blue-500 to-purple-500 rounded flex items-center justify-center text-white text-sm">
            to-b
          </div>
          <div className="h-16 bg-linear-to-tr from-blue-500 to-purple-500 rounded flex items-center justify-center text-white text-sm">
            to-tr
          </div>
          <div className="h-16 bg-linear-to-tl from-blue-500 to-purple-500 rounded flex items-center justify-center text-white text-sm">
            to-tl
          </div>
          <div className="h-16 bg-linear-to-br from-blue-500 to-purple-500 rounded flex items-center justify-center text-white text-sm">
            to-br
          </div>
          <div className="h-16 bg-linear-to-bl from-blue-500 to-purple-500 rounded flex items-center justify-center text-white text-sm">
            to-bl
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Multi-Color Gradients</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-16 bg-linear-to-r from-red-500 via-green-500 to-blue-500 rounded flex items-center justify-center text-white text-sm">
            3 colors
          </div>
          <div className="h-16 bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 rounded flex items-center justify-center text-white text-sm">
            3 colors
          </div>
          <div className="h-16 bg-linear-to-r from-yellow-400 via-orange-500 to-red-500 rounded flex items-center justify-center text-white text-sm">
            3 colors
          </div>
          <div className="h-16 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 rounded flex items-center justify-center text-white text-sm">
            3 colors
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Gradient Stops</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-16 bg-linear-to-r from-blue-500 from-10% to-purple-500 to-90% rounded flex items-center justify-center text-white text-sm">
            10% - 90%
          </div>
          <div className="h-16 bg-linear-to-r from-blue-500 from-25% to-purple-500 to-75% rounded flex items-center justify-center text-white text-sm">
            25% - 75%
          </div>
          <div className="h-16 bg-linear-to-r from-blue-500 from-0% via-purple-500 via-50% to-pink-500 to-100% rounded flex items-center justify-center text-white text-sm">
            0% - 50% - 100%
          </div>
          <div className="h-16 bg-[linear-gradient(to_right,var(--color-blue-500)_0%,var(--color-green-500)_33%,var(--color-yellow-500)_66%,var(--color-red-500)_100%)] rounded flex items-center justify-center text-white text-sm">
            4 stops
          </div>
        </div>
      </div>
    </div>
  );
}
