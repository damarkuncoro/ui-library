import React from 'react';

export function PracticalExamples() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Hero Section</p>
        <div className="bg-linear-to-br from-blue-500 to-purple-600 p-8 rounded-lg">
          <h1 className="text-3xl font-bold text-white mb-2">Hero Title</h1>
          <p className="text-white/80">This is a hero section with gradient background</p>
        </div>
      </div>

      {/* Card with Gradient */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Card with Gradient</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-linear-to-br from-blue-400 to-blue-600 p-4 rounded-lg">
            <div className="w-full h-20 bg-white/20 rounded mb-3"></div>
            <div className="w-3/4 h-4 bg-white/30 rounded mb-2"></div>
            <div className="w-1/2 h-3 bg-white/20 rounded"></div>
          </div>
          <div className="bg-linear-to-br from-green-400 to-green-600 p-4 rounded-lg">
            <div className="w-full h-20 bg-white/20 rounded mb-3"></div>
            <div className="w-3/4 h-4 bg-white/30 rounded mb-2"></div>
            <div className="w-1/2 h-3 bg-white/20 rounded"></div>
          </div>
          <div className="bg-linear-to-br from-purple-400 to-purple-600 p-4 rounded-lg">
            <div className="w-full h-20 bg-white/20 rounded mb-3"></div>
            <div className="w-3/4 h-4 bg-white/30 rounded mb-2"></div>
            <div className="w-1/2 h-3 bg-white/20 rounded"></div>
          </div>
        </div>
      </div>

      {/* Status Badges */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Status Badges</p>
        <div className="flex gap-2 flex-wrap">
          <div className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Active</div>
          <div className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">Pending</div>
          <div className="px-3 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">Error</div>
          <div className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">Info</div>
          <div className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">New</div>
        </div>
      </div>

      {/* Alert Boxes */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Alert Boxes</p>
        <div className="space-y-2">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <div className="w-1/2 h-4 bg-blue-300 rounded mb-2"></div>
            <div className="w-full h-3 bg-blue-200 rounded"></div>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <div className="w-1/2 h-4 bg-green-300 rounded mb-2"></div>
            <div className="w-full h-3 bg-green-200 rounded"></div>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <div className="w-1/2 h-4 bg-red-300 rounded mb-2"></div>
            <div className="w-full h-3 bg-red-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Navigation Bar</p>
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-500 rounded"></div>
            <div className="w-20 h-4 bg-gray-300 rounded"></div>
          </div>
          <div className="flex gap-4">
            <div className="w-16 h-6 bg-gray-200 rounded"></div>
            <div className="w-16 h-6 bg-gray-200 rounded"></div>
            <div className="w-16 h-6 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Feature Cards</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4"></div>
            <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
            <div className="w-full h-3 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg mb-4"></div>
            <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
            <div className="w-full h-3 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-purple-100 rounded-lg mb-4"></div>
            <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
            <div className="w-full h-3 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Pricing Cards</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="w-1/2 h-6 bg-gray-300 rounded mb-4"></div>
            <div className="w-1/3 h-8 bg-gray-200 rounded mb-4"></div>
            <div className="space-y-2">
              <div className="w-full h-3 bg-gray-200 rounded"></div>
              <div className="w-full h-3 bg-gray-200 rounded"></div>
              <div className="w-full h-3 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="bg-linear-to-br from-blue-500 to-blue-600 p-6 rounded-lg shadow-lg">
            <div className="w-1/2 h-6 bg-white/30 rounded mb-4"></div>
            <div className="w-1/3 h-8 bg-white/20 rounded mb-4"></div>
            <div className="space-y-2">
              <div className="w-full h-3 bg-white/20 rounded"></div>
              <div className="w-full h-3 bg-white/20 rounded"></div>
              <div className="w-full h-3 bg-white/20 rounded"></div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="w-1/2 h-6 bg-gray-300 rounded mb-4"></div>
            <div className="w-1/3 h-8 bg-gray-200 rounded mb-4"></div>
            <div className="space-y-2">
              <div className="w-full h-3 bg-gray-200 rounded"></div>
              <div className="w-full h-3 bg-gray-200 rounded"></div>
              <div className="w-full h-3 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Card */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Testimonial Card</p>
        <div className="bg-linear-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-blue-600 rounded-full"></div>
            <div>
              <div className="w-24 h-4 bg-gray-300 rounded mb-1"></div>
              <div className="w-16 h-3 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="w-full h-3 bg-gray-300 rounded"></div>
            <div className="w-full h-3 bg-gray-300 rounded"></div>
            <div className="w-3/4 h-3 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Call to Action</p>
        <div className="bg-linear-to-r from-purple-500 to-pink-500 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-2">Get Started Today</h2>
          <p className="text-white/80 mb-4">Join thousands of users who are already using our platform</p>
          <div className="flex gap-4">
            <div className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-lg">Sign Up</div>
            <div className="px-6 py-2 bg-transparent border-2 border-white text-white font-semibold rounded-lg">Learn More</div>
          </div>
        </div>
      </div>
    </div>
  );
}