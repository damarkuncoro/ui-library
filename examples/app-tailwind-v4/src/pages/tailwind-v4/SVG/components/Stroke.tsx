import React from 'react';

export function Stroke() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Stroke Colors</p>
        <div className="flex gap-3">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <circle cx="12" cy="12" r="10" className="stroke-red-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <circle cx="12" cy="12" r="10" className="stroke-yellow-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <circle cx="12" cy="12" r="10" className="stroke-green-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <circle cx="12" cy="12" r="10" className="stroke-blue-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <circle cx="12" cy="12" r="10" className="stroke-purple-500" />
          </svg>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Stroke with Opacity</p>
        <div className="flex gap-3">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <circle cx="12" cy="12" r="10" className="stroke-blue-500/25" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <circle cx="12" cy="12" r="10" className="stroke-blue-500/50" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <circle cx="12" cy="12" r="10" className="stroke-blue-500/75" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <circle cx="12" cy="12" r="10" className="stroke-blue-500" />
          </svg>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Stroke Current Color</p>
        <div className="flex gap-3">
          <svg className="w-12 h-12 text-red-500" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor">
            <circle cx="12" cy="12" r="10" />
          </svg>
          <svg className="w-12 h-12 text-green-500" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor">
            <circle cx="12" cy="12" r="10" />
          </svg>
          <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor">
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Stroke with Hover</p>
        <div className="flex gap-3">
          <svg className="w-12 h-12 cursor-pointer" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <circle cx="12" cy="12" r="10" className="stroke-blue-500 hover:stroke-blue-600 transition-colors" />
          </svg>
          <svg className="w-12 h-12 cursor-pointer" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <circle cx="12" cy="12" r="10" className="stroke-green-500 hover:stroke-green-600 transition-colors" />
          </svg>
          <svg className="w-12 h-12 cursor-pointer" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <circle cx="12" cy="12" r="10" className="stroke-purple-500 hover:stroke-purple-600 transition-colors" />
          </svg>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Stroke with Fill</p>
        <div className="flex gap-3">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <circle cx="12" cy="12" r="10" className="fill-blue-100 stroke-blue-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <circle cx="12" cy="12" r="10" className="fill-green-100 stroke-green-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <circle cx="12" cy="12" r="10" className="fill-purple-100 stroke-purple-500" />
          </svg>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Stroke Different Shapes</p>
        <div className="flex gap-3">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <circle cx="12" cy="12" r="10" className="stroke-blue-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <rect x="4" y="4" width="16" height="16" className="stroke-green-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <path d="M12 2L2 22h20L12 2z" className="stroke-purple-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <path d="M12 2l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z" className="stroke-orange-500" />
          </svg>
        </div>
      </div>
    </div>
  );
}