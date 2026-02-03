import React from 'react';

export function BackgroundImage() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Background Image</p>
        <div className="space-y-2">
          <div className="h-24 bg-cover bg-center rounded" style={{ backgroundImage: 'linear-gradient(to right, #3b82f6, #8b5cf6)' }}>
            <span className="flex items-center justify-center h-full text-white text-sm">bg-cover bg-center</span>
          </div>
          <div className="h-24 bg-cover bg-top rounded" style={{ backgroundImage: 'linear-gradient(to right, #10b981, #3b82f6)' }}>
            <span className="flex items-center justify-center h-full text-white text-sm">bg-cover bg-top</span>
          </div>
          <div className="h-24 bg-cover bg-bottom rounded" style={{ backgroundImage: 'linear-gradient(to right, #f59e0b, #ef4444)' }}>
            <span className="flex items-center justify-center h-full text-white text-sm">bg-cover bg-bottom</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Background Size</p>
        <div className="space-y-2">
          <div className="h-24 bg-cover bg-center rounded" style={{ backgroundImage: 'linear-gradient(45deg, #3b82f6, #8b5cf6)' }}>
            <span className="flex items-center justify-center h-full text-white text-sm">bg-cover (default)</span>
          </div>
          <div className="h-24 bg-contain bg-center rounded" style={{ backgroundImage: 'linear-gradient(45deg, #10b981, #3b82f6)' }}>
            <span className="flex items-center justify-center h-full text-white text-sm">bg-contain</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Background Repeat</p>
        <div className="space-y-2">
          <div className="h-24 bg-repeat bg-center rounded" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #3b82f6, #3b82f6 10px, #8b5cf6 10px, #8b5cf6 20px)' }}>
            <span className="flex items-center justify-center h-full text-white text-sm">bg-repeat</span>
          </div>
          <div className="h-24 bg-no-repeat bg-center rounded" style={{ backgroundImage: 'linear-gradient(to right, #10b981, #3b82f6)' }}>
            <span className="flex items-center justify-center h-full text-white text-sm">bg-no-repeat</span>
          </div>
          <div className="h-24 bg-repeat-x bg-center rounded" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #f59e0b, #f59e0b 10px, #ef4444 10px, #ef4444 20px)' }}>
            <span className="flex items-center justify-center h-full text-white text-sm">bg-repeat-x</span>
          </div>
          <div className="h-24 bg-repeat-y bg-center rounded" style={{ backgroundImage: 'repeating-linear-gradient(0deg, #ec4899, #ec4899 10px, #8b5cf6 10px, #8b5cf6 20px)' }}>
            <span className="flex items-center justify-center h-full text-white text-sm">bg-repeat-y</span>
          </div>
        </div>
      </div>
    </div>
  );
}