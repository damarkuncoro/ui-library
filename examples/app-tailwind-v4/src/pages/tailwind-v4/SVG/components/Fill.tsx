import React from 'react';

export function Fill() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Fill Colors</p>
        <div className="flex gap-3">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" className="fill-red-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" className="fill-yellow-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" className="fill-green-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" className="fill-blue-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" className="fill-purple-500" />
          </svg>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Fill with Opacity</p>
        <div className="flex gap-3">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" className="fill-blue-500/25" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" className="fill-blue-500/50" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" className="fill-blue-500/75" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" className="fill-blue-500" />
          </svg>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Fill None</p>
        <div className="flex gap-3">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" className="stroke-blue-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="4" width="16" height="16" className="stroke-green-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 22h20L12 2z" className="stroke-purple-500" />
          </svg>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Fill Current Color</p>
        <div className="flex gap-3">
          <svg className="w-12 h-12 text-red-500" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
          </svg>
          <svg className="w-12 h-12 text-green-500" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
          </svg>
          <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Fill with Hover</p>
        <div className="flex gap-3">
          <svg className="w-12 h-12 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" className="fill-blue-500 hover:fill-blue-600 transition-colors" />
          </svg>
          <svg className="w-12 h-12 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" className="fill-green-500 hover:fill-green-600 transition-colors" />
          </svg>
          <svg className="w-12 h-12 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" className="fill-purple-500 hover:fill-purple-600 transition-colors" />
          </svg>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Fill Gradients</p>
        <div className="flex gap-3">
          <svg className="w-12 h-12" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <circle cx="12" cy="12" r="10" fill="url(#grad1)" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <circle cx="12" cy="12" r="10" fill="url(#grad2)" />
          </svg>
        </div>
      </div>
    </div>
  );
}