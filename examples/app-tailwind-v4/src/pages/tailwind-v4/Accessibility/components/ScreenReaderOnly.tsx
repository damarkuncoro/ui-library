import React from 'react';

export function ScreenReaderOnly() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Screen Reader Only Text</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            <span className="sr-only">Close dialog</span>
            ✕
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            <span className="sr-only">Open menu</span>
            ☰
          </button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded">
            <span className="sr-only">Search</span>
            🔍
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Screen Reader Only with Visible Text</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            <span className="sr-only">Download file:</span>
            Download
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            <span className="sr-only">Submit form:</span>
            Submit
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Screen Reader Only Links</p>
        <div className="flex gap-3">
          <a href="#" className="px-4 py-2 bg-orange-500 text-white rounded">
            <span className="sr-only">Read more about</span>
            Article
          </a>
          <a href="#" className="px-4 py-2 bg-red-500 text-white rounded">
            <span className="sr-only">View profile of</span>
            User
          </a>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Screen Reader Only Icons</p>
        <div className="flex gap-4">
          <div className="relative">
            <span className="sr-only">Email address</span>
            <span className="text-2xl">📧</span>
          </div>
          <div className="relative">
            <span className="sr-only">Phone number</span>
            <span className="text-2xl">📞</span>
          </div>
          <div className="relative">
            <span className="sr-only">Location</span>
            <span className="text-2xl">📍</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Screen Reader Only Status</p>
        <div className="flex gap-3">
          <div className="px-4 py-2 bg-green-500 text-white rounded">
            <span className="sr-only">Status: </span>
            Online
          </div>
          <div className="px-4 py-2 bg-yellow-500 text-white rounded">
            <span className="sr-only">Status: </span>
            Away
          </div>
          <div className="px-4 py-2 bg-red-500 text-white rounded">
            <span className="sr-only">Status: </span>
            Offline
          </div>
        </div>
      </div>
    </div>
  );
}