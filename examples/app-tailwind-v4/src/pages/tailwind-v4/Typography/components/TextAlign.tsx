import React from 'react';

export function TextAlign() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Text Alignment</p>
        <div className="space-y-2">
          <div className="text-left bg-gray-100 p-4 rounded-lg">text-left - The quick brown fox jumps over the lazy dog</div>
          <div className="text-center bg-gray-100 p-4 rounded-lg">text-center - The quick brown fox jumps over the lazy dog</div>
          <div className="text-right bg-gray-100 p-4 rounded-lg">text-right - The quick brown fox jumps over the lazy dog</div>
          <div className="text-justify bg-gray-100 p-4 rounded-lg">text-justify - The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Responsive Text Alignment</p>
        <div className="space-y-2">
          <div className="text-left md:text-center lg:text-right bg-gray-100 p-4 rounded-lg">Responsive - Left on mobile, center on tablet, right on desktop</div>
        </div>
      </div>
    </div>
  );
}