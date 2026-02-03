import React from 'react';

export function FontFamily() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Font Families</p>
        <div className="space-y-3">
          <div className="font-sans text-lg">font-sans - The quick brown fox jumps over the lazy dog</div>
          <div className="font-serif text-lg">font-serif - The quick brown fox jumps over the lazy dog</div>
          <div className="font-mono text-lg">font-mono - The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Custom Font Families</p>
        <div className="space-y-3">
          <div className="text-lg">Default - The quick brown fox jumps over the lazy dog</div>
          <div className="text-lg" style={{ fontFamily: 'Georgia, serif' }}>Georgia - The quick brown fox jumps over the lazy dog</div>
          <div className="text-lg" style={{ fontFamily: 'Courier New, monospace' }}>Courier New - The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>
  );
}