import React from 'react';

export function PracticalExamples() {
  return (
    <div className="space-y-6">
      {/* Button Hover Transforms */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Button Hover Transforms</p>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-transform duration-300 hover:scale-105">
            Scale Up
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded transition-transform duration-300 hover:scale-95">
            Scale Down
          </button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded transition-transform duration-300 hover:-translate-y-1">
            Lift Up
          </button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded transition-transform duration-300 hover:rotate-2">
            Rotate
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded transition-transform duration-300 hover:skew-x-2">
            Skew
          </button>
        </div>
      </div>

      {/* Card Hover Effects */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Card Hover Effects</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-white border border-neutral-border rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
            <h3 className="font-medium text-neutral-text mb-2">Scale Card</h3>
            <p className="text-sm text-neutral-text-secondary">Hover to scale</p>
          </div>
          <div className="p-4 bg-white border border-neutral-border rounded-lg transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
            <h3 className="font-medium text-neutral-text mb-2">Lift Card</h3>
            <p className="text-sm text-neutral-text-secondary">Hover to lift</p>
          </div>
          <div className="p-4 bg-white border border-neutral-border rounded-lg transition-transform duration-300 hover:rotate-3 cursor-pointer">
            <h3 className="font-medium text-neutral-text mb-2">Rotate Card</h3>
            <p className="text-sm text-neutral-text-secondary">Hover to rotate</p>
          </div>
        </div>
      </div>

      {/* Icon Animations */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Icon Animations</p>
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white transition-transform duration-300 hover:rotate-180 cursor-pointer">
            <span>↻</span>
          </div>
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white transition-transform duration-300 hover:scale-125 cursor-pointer">
            <span>+</span>
          </div>
          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
            <span>↑</span>
          </div>
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white transition-transform duration-300 hover:skew-x-12 cursor-pointer">
            <span>↔</span>
          </div>
        </div>
      </div>

      {/* 3D Card Flip */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">3D Card Flip</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-linear-to-br from-blue-500 to-purple-500 rounded-lg transition-transform duration-500 hover:rotate-y-180 cursor-pointer">
            <h3 className="font-medium text-white mb-2">Front</h3>
            <p className="text-sm text-white/80">Hover to flip</p>
          </div>
          <div className="p-4 bg-linear-to-br from-green-500 to-teal-500 rounded-lg transition-transform duration-500 hover:rotate-x-180 cursor-pointer">
            <h3 className="font-medium text-white mb-2">Front</h3>
            <p className="text-sm text-white/80">Hover to flip</p>
          </div>
        </div>
      </div>

      {/* Image Hover Effects */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Image Hover Effects</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-32 bg-linear-to-br from-pink-400 to-red-500 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-110 cursor-pointer">
            <div className="h-full flex items-center justify-center text-white">Zoom</div>
          </div>
          <div className="h-32 bg-linear-to-br from-cyan-400 to-blue-500 rounded-lg overflow-hidden transition-transform duration-300 hover:rotate-6 cursor-pointer">
            <div className="h-full flex items-center justify-center text-white">Rotate</div>
          </div>
          <div className="h-32 bg-linear-to-br from-yellow-400 to-orange-500 rounded-lg overflow-hidden transition-transform duration-300 hover:skew-x-6 cursor-pointer">
            <div className="h-full flex items-center justify-center text-white">Skew</div>
          </div>
        </div>
      </div>

      {/* Loading Spinner */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Loading Spinner</p>
        <div className="flex gap-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
        </div>
      </div>

      {/* Combined Transforms */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Combined Transforms</p>
        <div className="grid grid-cols-2 gap-4">
          <button className="px-4 py-3 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-lg transition-all duration-500 hover:scale-110 hover:rotate-3 hover:-translate-y-2">
            Scale + Rotate + Lift
          </button>
          <button className="px-4 py-3 bg-white border-2 border-blue-500 text-blue-500 rounded-lg transition-all duration-500 hover:bg-blue-500 hover:text-white hover:scale-105 hover:skew-x-2">
            Scale + Skew + Color
          </button>
        </div>
      </div>

      {/* Perspective 3D */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Perspective 3D</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-white border border-neutral-border rounded-lg transition-transform duration-500 hover:rotate-x-12 hover:rotate-y-12 cursor-pointer">
            <h3 className="font-medium text-neutral-text mb-2">3D Tilt</h3>
            <p className="text-sm text-neutral-text-secondary">Hover to tilt</p>
          </div>
          <div className="p-4 bg-white border border-neutral-border rounded-lg transition-transform duration-500 hover:rotate-x-6 hover:rotate-y-6 cursor-pointer">
            <h3 className="font-medium text-neutral-text mb-2">3D Tilt</h3>
            <p className="text-sm text-neutral-text-secondary">Hover to tilt</p>
          </div>
          <div className="p-4 bg-white border border-neutral-border rounded-lg transition-transform duration-500 hover:rotate-x-3 hover:rotate-y-3 cursor-pointer">
            <h3 className="font-medium text-neutral-text mb-2">3D Tilt</h3>
            <p className="text-sm text-neutral-text-secondary">Hover to tilt</p>
          </div>
        </div>
      </div>
    </div>
  );
}
