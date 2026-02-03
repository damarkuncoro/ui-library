import React from 'react';

export function StrokeWidth() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Stroke Width 0</p>
        <div className="flex gap-3">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="0">
            <circle cx="12" cy="12" r="10" className="stroke-blue-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="0">
            <rect x="4" y="4" width="16" height="16" className="stroke-green-500" />
          </svg>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Stroke Width 1</p>
        <div className="flex gap-3">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="1">
            <circle cx="12" cy="12" r="10" className="stroke-blue-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="1">
            <rect x="4" y="4" width="16" height="16" className="stroke-green-500" />
          </svg>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Stroke Width 2</p>
        <div className="flex gap-3">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <circle cx="12" cy="12" r="10" className="stroke-blue-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <rect x="4" y="4" width="16" height="16" className="stroke-green-500" />
          </svg>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Stroke Width 3</p>
        <div className="flex gap-3">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="3">
            <circle cx="12" cy="12" r="10" className="stroke-blue-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="3">
            <rect x="4" y="4" width="16" height="16" className="stroke-green-500" />
          </svg>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Stroke Width 4</p>
        <div className="flex gap-3">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="4">
            <circle cx="12" cy="12" r="10" className="stroke-blue-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="4">
            <rect x="4" y="4" width="16" height="16" className="stroke-green-500" />
          </svg>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Stroke Width 6</p>
        <div className="flex gap-3">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="6">
            <circle cx="12" cy="12" r="10" className="stroke-blue-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="6">
            <rect x="4" y="4" width="16" height="16" className="stroke-green-500" />
          </svg>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Stroke Width 8</p>
        <div className="flex gap-3">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="8">
            <circle cx="12" cy="12" r="10" className="stroke-blue-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="8">
            <rect x="4" y="4" width="16" height="16" className="stroke-green-500" />
          </svg>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Stroke Width Comparison</p>
        <div className="flex gap-3 items-end">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="1">
            <circle cx="12" cy="12" r="10" className="stroke-blue-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <circle cx="12" cy="12" r="10" className="stroke-blue-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="4">
            <circle cx="12" cy="12" r="10" className="stroke-blue-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="6">
            <circle cx="12" cy="12" r="10" className="stroke-blue-500" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" strokeWidth="8">
            <circle cx="12" cy="12" r="10" className="stroke-blue-500" />
          </svg>
        </div>
      </div>
    </div>
  );
}