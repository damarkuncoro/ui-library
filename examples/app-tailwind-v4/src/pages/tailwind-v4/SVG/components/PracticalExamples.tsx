import React from 'react';

export function PracticalExamples() {
  return (
    <div className="space-y-6">
      {/* Interactive Icons */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Interactive Icons</p>
        <div className="flex gap-4">
          <svg className="w-12 h-12 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" className="fill-blue-500 hover:fill-blue-600 transition-colors" />
          </svg>
          <svg className="w-12 h-12 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" className="fill-green-500 hover:fill-green-600 transition-colors" />
          </svg>
          <svg className="w-12 h-12 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" className="fill-purple-500 hover:fill-purple-600 transition-colors" />
          </svg>
          <svg className="w-12 h-12 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" className="fill-red-500 hover:fill-red-600 transition-colors" />
          </svg>
        </div>
      </div>

      {/* Outline Icons */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Outline Icons</p>
        <div className="flex gap-4">
          <svg className="w-12 h-12 cursor-pointer" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" className="stroke-blue-500 hover:stroke-blue-600 transition-colors" />
          </svg>
          <svg className="w-12 h-12 cursor-pointer" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" className="stroke-green-500 hover:stroke-green-600 transition-colors" />
          </svg>
          <svg className="w-12 h-12 cursor-pointer" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" className="stroke-purple-500 hover:stroke-purple-600 transition-colors" />
          </svg>
          <svg className="w-12 h-12 cursor-pointer" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" className="stroke-red-500 hover:stroke-red-600 transition-colors" />
          </svg>
        </div>
      </div>

      {/* Two-Tone Icons */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Two-Tone Icons</p>
        <div className="flex gap-4">
          <svg className="w-12 h-12 cursor-pointer" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" className="fill-blue-100 stroke-blue-500 hover:fill-blue-200 transition-colors" />
          </svg>
          <svg className="w-12 h-12 cursor-pointer" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" className="fill-green-100 stroke-green-500 hover:fill-green-200 transition-colors" />
          </svg>
          <svg className="w-12 h-12 cursor-pointer" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" className="fill-purple-100 stroke-purple-500 hover:fill-purple-200 transition-colors" />
          </svg>
        </div>
      </div>

      {/* Animated Icons */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Animated Icons</p>
        <div className="flex gap-4">
          <svg className="w-12 h-12 cursor-pointer animate-spin" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" className="stroke-blue-500" />
          </svg>
          <svg className="w-12 h-12 cursor-pointer animate-bounce" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" className="fill-green-500" />
          </svg>
          <svg className="w-12 h-12 cursor-pointer animate-pulse" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" className="fill-red-500" />
          </svg>
        </div>
      </div>

      {/* SVG with Text */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">SVG with Text</p>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" className="fill-blue-500" />
            </svg>
            <span className="text-sm text-neutral-text">World</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" className="fill-green-500" />
            </svg>
            <span className="text-sm text-neutral-text">User</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" className="fill-purple-500" />
            </svg>
            <span className="text-sm text-neutral-text">Settings</span>
          </div>
        </div>
      </div>

      {/* SVG Buttons */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">SVG Buttons</p>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
            <span>Button</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
            <span>Button</span>
          </button>
        </div>
      </div>

      {/* SVG Logo */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">SVG Logo</p>
        <div className="flex gap-4">
          <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" className="fill-blue-500" />
          </svg>
          <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" className="fill-green-500" />
          </svg>
        </div>
      </div>
    </div>
  );
}