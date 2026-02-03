import React from 'react';

export function Peer() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Peer Hover - Input with Label</p>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-neutral-text mb-1 peer-hover:text-blue-500 transition-colors">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-neutral-border rounded peer-hover:border-blue-500 peer-hover:ring-2 peer-hover:ring-blue-500 peer-hover:ring-offset-2 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-text mb-1 peer-hover:text-green-500 transition-colors">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-neutral-border rounded peer-hover:border-green-500 peer-hover:ring-2 peer-hover:ring-green-500 peer-hover:ring-offset-2 outline-none transition-all"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Peer Focus - Input with Helper Text</p>
        <div className="space-y-3">
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-neutral-border rounded peer focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none transition-all"
            />
            <p className="mt-1 text-sm text-neutral-text-secondary peer-focus:text-blue-500 transition-colors">
              Your full name
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your phone"
              className="w-full px-4 py-2 border border-neutral-border rounded peer focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 outline-none transition-all"
            />
            <p className="mt-1 text-sm text-neutral-text-secondary peer-focus:text-green-500 transition-colors">
              Your phone number
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Peer Invalid - Input with Error Message</p>
        <div className="space-y-3">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-neutral-border rounded peer-invalid:border-red-500 peer-invalid:ring-2 peer-invalid:ring-red-500 peer-invalid:ring-offset-2 outline-none transition-all"
            />
            <p className="mt-1 text-sm text-neutral-text-secondary peer-invalid:text-red-500 transition-colors">
              Please enter a valid email
            </p>
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-neutral-border rounded peer-invalid:border-red-500 peer-invalid:ring-2 peer-invalid:ring-red-500 peer-invalid:ring-offset-2 outline-none transition-all"
            />
            <p className="mt-1 text-sm text-neutral-text-secondary peer-invalid:text-red-500 transition-colors">
              Password must be at least 8 characters
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Peer Checked - Checkbox with Label</p>
        <div className="space-y-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 peer-checked:bg-blue-500 peer-checked:border-blue-500"
            />
            <span className="text-sm text-neutral-text peer-checked:text-blue-500 transition-colors">
              Accept terms and conditions
            </span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 peer-checked:bg-green-500 peer-checked:border-green-500"
            />
            <span className="text-sm text-neutral-text peer-checked:text-green-500 transition-colors">
              Subscribe to newsletter
            </span>
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Peer Focus Within - Form Group</p>
        <div className="p-4 border border-neutral-border rounded-lg peer-focus-within:border-blue-500 peer-focus-within:ring-2 peer-focus-within:ring-blue-500 peer-focus-within:ring-offset-2 transition-all">
          <label className="block text-sm font-medium text-neutral-text mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-neutral-border rounded outline-none"
          />
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Peer Disabled - Input with Disabled State</p>
        <div className="space-y-3">
          <div>
            <input
              disabled
              type="text"
              placeholder="Disabled input"
              className="w-full px-4 py-2 border border-neutral-border rounded peer-disabled:bg-gray-100 peer-disabled:text-gray-500 peer-disabled:cursor-not-allowed"
            />
            <p className="mt-1 text-sm text-neutral-text-secondary peer-disabled:text-gray-400">
              This field is disabled
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Peer Required - Input with Required Indicator</p>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-neutral-text mb-1">
              Email <span className="peer-required:text-red-500">*</span>
            </label>
            <input
              required
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-neutral-border rounded peer-required:border-red-500 outline-none transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
}