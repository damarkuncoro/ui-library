import React from 'react';

export function PracticalExamples() {
  return (
    <div className="space-y-6">
      {/* Article Typography */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Article Typography</p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h1 className="text-3xl font-bold mb-4">Article Title</h1>
          <p className="text-gray-600 mb-4">Published on January 1, 2024</p>
          <p className="text-lg leading-relaxed mb-4">
            This is an example of article typography. The quick brown fox jumps over the lazy dog. 
            This paragraph demonstrates how font size, line height, and color work together to create readable content.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h2 className="text-2xl font-semibold mb-3">Section Heading</h2>
          <p className="text-base leading-relaxed">
            This is a section with a heading. The typography hierarchy helps readers navigate through the content easily.
          </p>
        </div>
      </div>

      {/* Card Typography */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Card Typography</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-sm font-semibold text-gray-500 mb-2">CATEGORY</div>
            <h3 className="text-xl font-bold mb-2">Card Title</h3>
            <p className="text-sm text-gray-600">This is a card with proper typography hierarchy.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-sm font-semibold text-gray-500 mb-2">CATEGORY</div>
            <h3 className="text-xl font-bold mb-2">Card Title</h3>
            <p className="text-sm text-gray-600">This is a card with proper typography hierarchy.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-sm font-semibold text-gray-500 mb-2">CATEGORY</div>
            <h3 className="text-xl font-bold mb-2">Card Title</h3>
            <p className="text-sm text-gray-600">This is a card with proper typography hierarchy.</p>
          </div>
        </div>
      </div>

      {/* Navigation Typography */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Navigation Typography</p>
        <div className="bg-white px-6 py-4 rounded-lg shadow-sm flex items-center justify-between">
          <div className="text-xl font-bold">Brand</div>
          <div className="flex gap-6">
            <a className="text-sm font-medium text-gray-700 hover:text-blue-500">Home</a>
            <a className="text-sm font-medium text-gray-700 hover:text-blue-500">About</a>
            <a className="text-sm font-medium text-gray-700 hover:text-blue-500">Services</a>
            <a className="text-sm font-medium text-gray-700 hover:text-blue-500">Contact</a>
          </div>
        </div>
      </div>

      {/* Hero Typography */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Hero Typography</p>
        <div className="bg-linear-to-br from-blue-500 to-purple-600 p-8 rounded-lg text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hero Headline</h1>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            This is a hero section with large, bold typography that captures attention.
          </p>
          <div className="flex gap-4">
            <div className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg">Primary CTA</div>
            <div className="px-6 py-3 bg-transparent border-2 border-white font-semibold rounded-lg">Secondary CTA</div>
          </div>
        </div>
      </div>

      {/* Form Typography */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Form Typography</p>
        <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <div className="w-full h-10 bg-gray-200 rounded"></div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <div className="w-full h-10 bg-gray-200 rounded"></div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <div className="w-full h-24 bg-gray-200 rounded"></div>
          </div>
          <div className="pt-2">
            <div className="w-full h-10 bg-blue-500 rounded"></div>
          </div>
        </div>
      </div>

      {/* Badge Typography */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Badge Typography</p>
        <div className="flex gap-2 flex-wrap">
          <div className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">New</div>
          <div className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Active</div>
          <div className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">Pending</div>
          <div className="px-3 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">Error</div>
          <div className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">Featured</div>
        </div>
      </div>

      {/* Code Typography */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Code Typography</p>
        <div className="bg-gray-900 p-4 rounded-lg">
          <code className="text-sm text-green-400 font-mono">
            <span className="text-purple-400">const</span> greeting = <span className="text-yellow-400">"Hello, World!"</span>;<br />
            <span className="text-purple-400">console</span>.<span className="text-blue-400">log</span>(greeting);
          </code>
        </div>
      </div>

      {/* Blockquote Typography */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">Blockquote Typography</p>
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
          <p className="text-lg italic text-gray-700 mb-2">
            "The quick brown fox jumps over the lazy dog. This is a blockquote example."
          </p>
          <p className="text-sm text-gray-500">— Author Name</p>
        </div>
      </div>

      {/* List Typography */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm font-medium mb-3 text-neutral-text">List Typography</p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-3">Unordered List</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li className="text-gray-700">First item in the list</li>
            <li className="text-gray-700">Second item in the list</li>
            <li className="text-gray-700">Third item in the list</li>
          </ul>
          <h3 className="text-lg font-semibold mb-3">Ordered List</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li className="text-gray-700">First step in the process</li>
            <li className="text-gray-700">Second step in the process</li>
            <li className="text-gray-700">Third step in the process</li>
          </ol>
        </div>
      </div>
    </div>
  );
}