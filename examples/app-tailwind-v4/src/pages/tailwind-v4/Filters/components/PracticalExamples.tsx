import React from 'react';

export function PracticalExamples() {
  return (
    <div className="space-y-6">
      {/* Blurred Background Card */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Blurred Background Card</p>
        <div className="relative h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg overflow-hidden">
          <div className="absolute inset-0 backdrop-blur-md bg-white/10 flex items-center justify-center">
            <span className="text-white font-medium">Content with blurred backdrop</span>
          </div>
        </div>
      </div>

      {/* Image Filter Gallery */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Image Filter Gallery</p>
        <div className="grid grid-cols-4 gap-3">
          <div className="h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded flex items-center justify-center text-white text-xs">Original</div>
          <div className="h-24 bg-gradient-to-br from-blue-400 to-blue-600 grayscale rounded flex items-center justify-center text-white text-xs">Grayscale</div>
          <div className="h-24 bg-gradient-to-br from-blue-400 to-blue-600 sepia rounded flex items-center justify-center text-white text-xs">Sepia</div>
          <div className="h-24 bg-gradient-to-br from-blue-400 to-blue-600 invert rounded flex items-center justify-center text-white text-xs">Invert</div>
        </div>
      </div>

      {/* Hover Filter Effects */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Hover Filter Effects</p>
        <div className="grid grid-cols-3 gap-3">
          <div className="h-24 bg-gradient-to-br from-green-400 to-green-600 rounded flex items-center justify-center text-white text-sm transition-all duration-300 hover:brightness-110 cursor-pointer">
            Brighten on hover
          </div>
          <div className="h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded flex items-center justify-center text-white text-sm transition-all duration-300 hover:contrast-125 cursor-pointer">
            Contrast on hover
          </div>
          <div className="h-24 bg-gradient-to-br from-red-400 to-red-600 rounded flex items-center justify-center text-white text-sm transition-all duration-300 hover:saturate-150 cursor-pointer">
            Saturate on hover
          </div>
        </div>
      </div>

      {/* Artistic Effects */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Artistic Effects</p>
        <div className="grid grid-cols-3 gap-3">
          <div className="h-24 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded flex items-center justify-center text-white text-sm blur-sm">
            Soft blur
          </div>
          <div className="h-24 bg-gradient-to-br from-teal-400 to-teal-600 rounded flex items-center justify-center text-white text-sm hue-rotate-90">
            Hue rotate
          </div>
          <div className="h-24 bg-gradient-to-br from-rose-400 to-rose-600 rounded flex items-center justify-center text-white text-sm brightness-125 contrast-125">
            Vivid
          </div>
        </div>
      </div>

      {/* Glassmorphism Card */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Glassmorphism Card</p>
        <div className="relative h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg overflow-hidden">
          <div className="absolute inset-4 backdrop-blur-lg bg-white/20 border border-white/30 rounded-lg flex items-center justify-center">
            <span className="text-white font-medium">Glass effect</span>
          </div>
        </div>
      </div>

      {/* Focus Ring with Blur */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Ring with Blur</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:backdrop-blur-sm transition-all">
            Focus me
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded focus:outline-none focus:ring-4 focus:ring-green-500/50 focus:backdrop-blur-sm transition-all">
            Focus me
          </button>
        </div>
      </div>
    </div>
  );
}