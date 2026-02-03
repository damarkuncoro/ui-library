import React from 'react';

export function PracticalExamples() {
  return (
    <div className="space-y-6">
      {/* Interactive Card */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Interactive Card</p>
        <div className="group p-4 border border-neutral-border rounded-lg hover:border-blue-500 hover:shadow-xl transition-all cursor-pointer">
          <div className="h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-3 group-hover:scale-105 transition-transform"></div>
          <h3 className="font-medium text-neutral-text mb-1 group-hover:text-blue-500 transition-colors">
            Interactive Card
          </h3>
          <p className="text-sm text-neutral-text-secondary mb-3">
            Hover over this card to see multiple interactive effects
          </p>
          <button className="w-full px-3 py-2 bg-blue-500 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-600 active:scale-95 transition-transform">
            Learn More
          </button>
        </div>
      </div>

      {/* Interactive Button Group */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Interactive Button Group</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none active:scale-95 transition-all">
            Primary
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none active:scale-95 transition-all">
            Success
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none active:scale-95 transition-all">
            Danger
          </button>
        </div>
      </div>

      {/* Interactive Form */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Interactive Form</p>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-neutral-text mb-1 peer-hover:text-blue-500 transition-colors">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-neutral-border rounded hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-text mb-1 peer-hover:text-green-500 transition-colors">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-neutral-border rounded hover:border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 outline-none transition-all"
            />
          </div>
          <button className="w-full px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none active:scale-95 transition-all">
            Submit
          </button>
        </div>
      </div>

      {/* Interactive Navigation */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Interactive Navigation</p>
        <nav className="flex gap-2">
          <a href="#" className="px-4 py-2 bg-white border border-neutral-border text-neutral-text rounded hover:bg-blue-500 hover:text-white hover:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none transition-all">
            Home
          </a>
          <a href="#" className="px-4 py-2 bg-white border border-neutral-border text-neutral-text rounded hover:bg-blue-500 hover:text-white hover:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none transition-all">
            About
          </a>
          <a href="#" className="px-4 py-2 bg-white border border-neutral-border text-neutral-text rounded hover:bg-blue-500 hover:text-white hover:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none transition-all">
            Contact
          </a>
        </nav>
      </div>

      {/* Interactive Icon Buttons */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Interactive Icon Buttons</p>
        <div className="flex gap-3">
          <button className="w-12 h-12 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:scale-110 hover:rotate-12 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none active:scale-95 transition-all flex items-center justify-center">
            <span className="text-2xl">⚙️</span>
          </button>
          <button className="w-12 h-12 bg-green-500 text-white rounded-lg hover:bg-green-600 hover:scale-110 hover:-translate-y-1 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none active:scale-95 transition-all flex items-center justify-center">
            <span className="text-2xl">📧</span>
          </button>
          <button className="w-12 h-12 bg-purple-500 text-white rounded-lg hover:bg-purple-600 hover:scale-110 hover:rotate-[-12deg] focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none active:scale-95 transition-all flex items-center justify-center">
            <span className="text-2xl">🔔</span>
          </button>
        </div>
      </div>

      {/* Interactive List */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Interactive List</p>
        <div className="space-y-2">
          <div className="group p-3 border border-neutral-border rounded hover:bg-blue-50 hover:border-blue-500 transition-all cursor-pointer">
            <div className="flex items-center justify-between">
              <span className="font-medium text-neutral-text group-hover:text-blue-500 transition-colors">
                List Item 1
              </span>
              <span className="text-neutral-text-secondary group-hover:text-blue-500 group-hover:translate-x-1 transition-all">
                →
              </span>
            </div>
          </div>
          <div className="group p-3 border border-neutral-border rounded hover:bg-green-50 hover:border-green-500 transition-all cursor-pointer">
            <div className="flex items-center justify-between">
              <span className="font-medium text-neutral-text group-hover:text-green-500 transition-colors">
                List Item 2
              </span>
              <span className="text-neutral-text-secondary group-hover:text-green-500 group-hover:translate-x-1 transition-all">
                →
              </span>
            </div>
          </div>
          <div className="group p-3 border border-neutral-border rounded hover:bg-purple-50 hover:border-purple-500 transition-all cursor-pointer">
            <div className="flex items-center justify-between">
              <span className="font-medium text-neutral-text group-hover:text-purple-500 transition-colors">
                List Item 3
              </span>
              <span className="text-neutral-text-secondary group-hover:text-purple-500 group-hover:translate-x-1 transition-all">
                →
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Toggle */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Interactive Toggle</p>
        <div className="flex gap-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 peer-checked:bg-blue-500 peer-checked:border-blue-500" />
            <span className="text-sm text-neutral-text peer-checked:text-blue-500 transition-colors">
              Option 1
            </span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 peer-checked:bg-green-500 peer-checked:border-green-500" />
            <span className="text-sm text-neutral-text peer-checked:text-green-500 transition-colors">
              Option 2
            </span>
          </label>
        </div>
      </div>

      {/* Interactive Dropdown */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Interactive Dropdown</p>
        <div className="group relative">
          <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none active:scale-95 transition-all">
            Select Option
          </button>
          <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-neutral-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
            <div className="p-2">
              <a href="#" className="block px-3 py-2 text-sm text-neutral-text hover:bg-neutral-bg rounded hover:text-blue-500 transition-colors">
                Option 1
              </a>
              <a href="#" className="block px-3 py-2 text-sm text-neutral-text hover:bg-neutral-bg rounded hover:text-blue-500 transition-colors">
                Option 2
              </a>
              <a href="#" className="block px-3 py-2 text-sm text-neutral-text hover:bg-neutral-bg rounded hover:text-blue-500 transition-colors">
                Option 3
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}