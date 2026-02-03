import React from 'react';

export function Group() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Group Hover - Card</p>
        <div className="group p-4 border border-neutral-border rounded-lg hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer">
          <h3 className="font-medium text-neutral-text mb-2 group-hover:text-blue-500 transition-colors">
            Hover Card
          </h3>
          <p className="text-sm text-neutral-text-secondary mb-3">
            Hover over this card to see the group hover effect
          </p>
          <button className="px-3 py-1 bg-blue-500 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Action
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Group Hover - Image with Overlay</p>
        <div className="group relative h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg overflow-hidden cursor-pointer">
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-medium">View Image</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Group Hover - Button Group</p>
        <div className="group flex gap-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded group-hover:bg-blue-600 transition-colors">
            Button 1
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded group-hover:bg-green-600 transition-colors">
            Button 2
          </button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded group-hover:bg-purple-600 transition-colors">
            Button 3
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Group Hover - Icon Container</p>
        <div className="group flex gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all cursor-pointer">
            <span className="text-2xl">⚙️</span>
          </div>
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 group-hover:-translate-y-1 transition-all cursor-pointer">
            <span className="text-2xl">📧</span>
          </div>
          <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-[-12deg] transition-all cursor-pointer">
            <span className="text-2xl">🔔</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Group Hover - List Item</p>
        <div className="group p-3 border border-neutral-border rounded hover:bg-blue-50 hover:border-blue-500 transition-all cursor-pointer">
          <div className="flex items-center justify-between">
            <span className="font-medium text-neutral-text group-hover:text-blue-500 transition-colors">
              List Item
            </span>
            <span className="text-neutral-text-secondary group-hover:text-blue-500 transition-colors">
              →
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Group Hover - Navigation Item</p>
        <div className="group relative">
          <button className="px-4 py-2 bg-orange-500 text-white rounded group-hover:bg-orange-600 transition-colors">
            Menu
          </button>
          <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-neutral-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <div className="p-2">
              <a href="#" className="block px-3 py-2 text-sm text-neutral-text hover:bg-neutral-bg rounded">
                Option 1
              </a>
              <a href="#" className="block px-3 py-2 text-sm text-neutral-text hover:bg-neutral-bg rounded">
                Option 2
              </a>
              <a href="#" className="block px-3 py-2 text-sm text-neutral-text hover:bg-neutral-bg rounded">
                Option 3
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Group Hover - Product Card</p>
        <div className="group p-4 border border-neutral-border rounded-lg hover:shadow-xl transition-all cursor-pointer">
          <div className="h-24 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg mb-3 group-hover:scale-105 transition-transform"></div>
          <h3 className="font-medium text-neutral-text mb-1 group-hover:text-red-500 transition-colors">
            Product Name
          </h3>
          <p className="text-sm text-neutral-text-secondary mb-2">$99.99</p>
          <button className="w-full px-3 py-2 bg-red-500 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}