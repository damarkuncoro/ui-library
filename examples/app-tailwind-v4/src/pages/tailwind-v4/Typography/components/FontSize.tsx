import React from 'react';

export function FontSize() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Font Sizes</p>
        <div className="space-y-2">
          <div className="text-xs">text-xs - The quick brown fox</div>
          <div className="text-sm">text-sm - The quick brown fox</div>
          <div className="text-base">text-base - The quick brown fox</div>
          <div className="text-lg">text-lg - The quick brown fox</div>
          <div className="text-xl">text-xl - The quick brown fox</div>
          <div className="text-2xl">text-2xl - The quick brown fox</div>
          <div className="text-3xl">text-3xl - The quick brown fox</div>
          <div className="text-4xl">text-4xl - The quick brown fox</div>
          <div className="text-5xl">text-5xl - The quick brown fox</div>
          <div className="text-6xl">text-6xl - The quick brown fox</div>
          <div className="text-7xl">text-7xl - The quick brown fox</div>
          <div className="text-8xl">text-8xl - The quick brown fox</div>
          <div className="text-9xl">text-9xl - The quick brown fox</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Fluid Typography</p>
        <div className="space-y-2">
          <div className="text-sm md:text-base lg:text-lg">Responsive text - The quick brown fox</div>
          <div className="text-base md:text-lg lg:text-xl">Responsive text - The quick brown fox</div>
          <div className="text-lg md:text-xl lg:text-2xl">Responsive text - The quick brown fox</div>
        </div>
      </div>
    </div>
  );
}