import React from 'react';

export function TextTransform() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Text Transform</p>
        <div className="space-y-2">
          <div className="uppercase text-lg">uppercase - The quick brown fox jumps over the lazy dog</div>
          <div className="lowercase text-lg">LOWERCASE - THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG</div>
          <div className="capitalize text-lg">capitalize - the quick brown fox jumps over the lazy dog</div>
          <div className="normal-case text-lg">normal-case - The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>
  );
}