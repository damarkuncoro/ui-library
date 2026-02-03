import React from 'react';

export function NotSrOnly() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Not Screen Reader Only - Hidden by Default</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            <span className="sr-only">Close dialog</span>
            <span className="not-sr-only">✕</span>
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            <span className="sr-only">Open menu</span>
            <span className="not-sr-only">☰</span>
          </button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded">
            <span className="sr-only">Search</span>
            <span className="not-sr-only">🔍</span>
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Not Screen Reader Only - Conditional Visibility</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-orange-500 text-white rounded">
            <span className="sr-only">Download</span>
            <span className="not-sr-only">⬇️</span>
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded">
            <span className="sr-only">Upload</span>
            <span className="not-sr-only">⬆️</span>
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Not Screen Reader Only - Icon with Text</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded flex items-center gap-2">
            <span className="sr-only">Email</span>
            <span className="not-sr-only">📧</span>
            <span className="not-sr-only">Email</span>
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded flex items-center gap-2">
            <span className="sr-only">Phone</span>
            <span className="not-sr-only">📞</span>
            <span className="not-sr-only">Phone</span>
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Not Screen Reader Only - Status Indicators</p>
        <div className="flex gap-3">
          <div className="px-4 py-2 bg-green-500 text-white rounded flex items-center gap-2">
            <span className="sr-only">Status: Online</span>
            <span className="not-sr-only">●</span>
            <span className="not-sr-only">Online</span>
          </div>
          <div className="px-4 py-2 bg-yellow-500 text-white rounded flex items-center gap-2">
            <span className="sr-only">Status: Away</span>
            <span className="not-sr-only">●</span>
            <span className="not-sr-only">Away</span>
          </div>
          <div className="px-4 py-2 bg-red-500 text-white rounded flex items-center gap-2">
            <span className="sr-only">Status: Offline</span>
            <span className="not-sr-only">●</span>
            <span className="not-sr-only">Offline</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Not Screen Reader Only - Navigation</p>
        <div className="flex gap-3">
          <a href="#" className="px-4 py-2 bg-purple-500 text-white rounded flex items-center gap-2">
            <span className="sr-only">Navigate to</span>
            <span className="not-sr-only">→</span>
            <span className="not-sr-only">Next</span>
          </a>
          <a href="#" className="px-4 py-2 bg-purple-500 text-white rounded flex items-center gap-2">
            <span className="sr-only">Navigate to</span>
            <span className="not-sr-only">←</span>
            <span className="not-sr-only">Previous</span>
          </a>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Not Screen Reader Only - Action Buttons</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded flex items-center gap-2">
            <span className="sr-only">Action: </span>
            <span className="not-sr-only">✏️</span>
            <span className="not-sr-only">Edit</span>
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded flex items-center gap-2">
            <span className="sr-only">Action: </span>
            <span className="not-sr-only">✓</span>
            <span className="not-sr-only">Save</span>
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded flex items-center gap-2">
            <span className="sr-only">Action: </span>
            <span className="not-sr-only">🗑️</span>
            <span className="not-sr-only">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}