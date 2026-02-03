import React from 'react';

export function LineHeight() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Line Heights</p>
        <div className="space-y-2">
          <div className="leading-none text-lg">leading-none - The quick brown fox jumps over the lazy dog</div>
          <div className="leading-tight text-lg">leading-tight - The quick brown fox jumps over the lazy dog</div>
          <div className="leading-snug text-lg">leading-snug - The quick brown fox jumps over the lazy dog</div>
          <div className="leading-normal text-lg">leading-normal - The quick brown fox jumps over the lazy dog</div>
          <div className="leading-relaxed text-lg">leading-relaxed - The quick brown fox jumps over the lazy dog</div>
          <div className="leading-loose text-lg">leading-loose - The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Numeric Line Heights</p>
        <div className="space-y-2">
          <div className="leading-3 text-lg">leading-3 - The quick brown fox jumps over the lazy dog</div>
          <div className="leading-4 text-lg">leading-4 - The quick brown fox jumps over the lazy dog</div>
          <div className="leading-5 text-lg">leading-5 - The quick brown fox jumps over the lazy dog</div>
          <div className="leading-6 text-lg">leading-6 - The quick brown fox jumps over the lazy dog</div>
          <div className="leading-7 text-lg">leading-7 - The quick brown fox jumps over the lazy dog</div>
          <div className="leading-8 text-lg">leading-8 - The quick brown fox jumps over the lazy dog</div>
          <div className="leading-9 text-lg">leading-9 - The quick brown fox jumps over the lazy dog</div>
          <div className="leading-10 text-lg">leading-10 - The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>
  );
}