import React from 'react';

export function FocusWithin() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Within Input Groups</p>
        <div className="space-y-3">
          <div className="flex items-center border border-neutral-border rounded focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:outline-none">
            <span className="pl-3 text-neutral-text-secondary">📧</span>
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-3 py-2 outline-none"
            />
          </div>
          <div className="flex items-center border border-neutral-border rounded focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 focus-within:outline-none">
            <span className="pl-3 text-neutral-text-secondary">🔒</span>
            <input
              type="password"
              placeholder="Password"
              className="flex-1 px-3 py-2 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Within Search Box</p>
        <div className="flex items-center border border-neutral-border rounded focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 focus-within:outline-none">
          <span className="pl-3 text-neutral-text-secondary">🔍</span>
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 px-3 py-2 outline-none"
          />
          <button className="px-4 py-2 bg-purple-500 text-white rounded-r">Search</button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Within Form Fields</p>
        <div className="space-y-3">
          <div className="border border-neutral-border rounded focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 focus-within:outline-none">
            <label className="block px-3 pt-2 text-sm font-medium text-neutral-text">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 pb-2 outline-none"
            />
          </div>
          <div className="border border-neutral-border rounded focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 focus-within:outline-none">
            <label className="block px-3 pt-2 text-sm font-medium text-neutral-text">Message</label>
            <textarea
              placeholder="Enter your message"
              className="w-full px-3 pb-2 outline-none resize-none"
              rows={3}
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Within with Label Highlight</p>
        <div className="space-y-3">
          <div className="border border-neutral-border rounded focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:outline-none">
            <label className="block px-3 pt-2 text-sm font-medium text-neutral-text focus-within:text-blue-500">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 pb-2 outline-none"
            />
          </div>
          <div className="border border-neutral-border rounded focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 focus-within:outline-none">
            <label className="block px-3 pt-2 text-sm font-medium text-neutral-text focus-within:text-green-500">Phone</label>
            <input
              type="tel"
              placeholder="Enter your phone"
              className="w-full px-3 pb-2 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Focus Within Card</p>
        <div className="p-4 border border-neutral-border rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:outline-none">
          <h3 className="font-medium text-neutral-text mb-2">Contact Form</h3>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-3 py-2 border border-neutral-border rounded mb-2 outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-3 py-2 border border-neutral-border rounded outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          />
        </div>
      </div>
    </div>
  );
}