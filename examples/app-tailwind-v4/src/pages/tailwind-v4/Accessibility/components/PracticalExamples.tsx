import React from 'react';

export function PracticalExamples() {
  return (
    <div className="space-y-6">
      {/* Accessible Button */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Accessible Button with Screen Reader Text</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none">
            <span className="sr-only">Close dialog</span>
            ✕
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:outline-none">
            <span className="sr-only">Open menu</span>
            ☰
          </button>
        </div>
      </div>

      {/* Accessible Form */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Accessible Form with Labels</p>
        <div className="space-y-3">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-text mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-neutral-border rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-neutral-text mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-neutral-border rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Accessible Links */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Accessible Links with Descriptive Text</p>
        <div className="flex gap-3">
          <a href="#" className="px-4 py-2 bg-orange-500 text-white rounded focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:outline-none">
            <span className="sr-only">Read more about</span>
            Article
          </a>
          <a href="#" className="px-4 py-2 bg-red-500 text-white rounded focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:outline-none">
            <span className="sr-only">View profile of</span>
            User
          </a>
        </div>
      </div>

      {/* Accessible Card */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Accessible Card with Focus Management</p>
        <div className="p-4 border border-neutral-border rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:outline-none">
          <h3 className="font-medium text-neutral-text mb-2">Product Card</h3>
          <p className="text-sm text-neutral-text-secondary mb-3">This is a product description that provides context for screen readers.</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Accessible Navigation */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Accessible Navigation</p>
        <nav className="flex gap-3" aria-label="Main navigation">
          <a href="#" className="px-4 py-2 bg-purple-500 text-white rounded focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:outline-none">
            Home
          </a>
          <a href="#" className="px-4 py-2 bg-purple-500 text-white rounded focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:outline-none">
            About
          </a>
          <a href="#" className="px-4 py-2 bg-purple-500 text-white rounded focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:outline-none">
            Contact
          </a>
        </nav>
      </div>

      {/* Accessible Icon Buttons */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Accessible Icon Buttons</p>
        <div className="flex gap-3">
          <button className="w-10 h-10 bg-blue-500 text-white rounded flex items-center justify-center focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none" aria-label="Search">
            🔍
          </button>
          <button className="w-10 h-10 bg-green-500 text-white rounded flex items-center justify-center focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:outline-none" aria-label="Settings">
            ⚙️
          </button>
          <button className="w-10 h-10 bg-red-500 text-white rounded flex items-center justify-center focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:outline-none" aria-label="Delete">
            🗑️
          </button>
        </div>
      </div>

      {/* Accessible Status */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Accessible Status Indicators</p>
        <div className="flex gap-3">
          <div className="flex items-center gap-2" role="status" aria-live="polite">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-neutral-text">Online</span>
          </div>
          <div className="flex items-center gap-2" role="status" aria-live="polite">
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-neutral-text">Away</span>
          </div>
          <div className="flex items-center gap-2" role="status" aria-live="polite">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-neutral-text">Offline</span>
          </div>
        </div>
      </div>

      {/* Accessible Alert */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Accessible Alert</p>
        <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg" role="alert" aria-live="assertive">
          <p className="text-sm text-red-600 font-medium">Error</p>
          <p className="text-sm text-red-600">This is an error message that will be announced to screen readers.</p>
        </div>
      </div>

      {/* Accessible Modal Trigger */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Accessible Modal Trigger</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none" aria-haspopup="dialog">
          Open Modal
        </button>
      </div>

      {/* Accessible Table */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Accessible Table</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-border">
              <th className="text-left py-2 px-3 font-medium text-neutral-text" scope="col">Name</th>
              <th className="text-left py-2 px-3 font-medium text-neutral-text" scope="col">Email</th>
              <th className="text-left py-2 px-3 font-medium text-neutral-text" scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-border">
              <td className="py-2 px-3" scope="row">John Doe</td>
              <td className="py-2 px-3">john@example.com</td>
              <td className="py-2 px-3">Admin</td>
            </tr>
            <tr className="border-b border-neutral-border">
              <td className="py-2 px-3" scope="row">Jane Smith</td>
              <td className="py-2 px-3">jane@example.com</td>
              <td className="py-2 px-3">User</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}