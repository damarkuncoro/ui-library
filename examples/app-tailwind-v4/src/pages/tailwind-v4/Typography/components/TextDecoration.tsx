import React from 'react';

export function TextDecoration() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Text Decoration</p>
        <div className="space-y-2">
          <div className="underline text-lg">underline - The quick brown fox</div>
          <div className="overline text-lg">overline - The quick brown fox</div>
          <div className="line-through text-lg">line-through - The quick brown fox</div>
          <div className="no-underline text-lg">no-underline - The quick brown fox</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Text Decoration Style</p>
        <div className="space-y-2">
          <div className="underline decoration-solid text-lg">decoration-solid - The quick brown fox</div>
          <div className="underline decoration-double text-lg">decoration-double - The quick brown fox</div>
          <div className="underline decoration-dotted text-lg">decoration-dotted - The quick brown fox</div>
          <div className="underline decoration-dashed text-lg">decoration-dashed - The quick brown fox</div>
          <div className="underline decoration-wavy text-lg">decoration-wavy - The quick brown fox</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Text Decoration Thickness</p>
        <div className="space-y-2">
          <div className="underline decoration-auto text-lg">decoration-auto - The quick brown fox</div>
          <div className="underline decoration-from-font text-lg">decoration-from-font - The quick brown fox</div>
          <div className="underline decoration-0 text-lg">decoration-0 - The quick brown fox</div>
          <div className="underline decoration-2 text-lg">decoration-2 - The quick brown fox</div>
          <div className="underline decoration-4 text-lg">decoration-4 - The quick brown fox</div>
          <div className="underline decoration-8 text-lg">decoration-8 - The quick brown fox</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Text Underline Offset</p>
        <div className="space-y-2">
          <div className="underline underline-offset-auto text-lg">underline-offset-auto - The quick brown fox</div>
          <div className="underline underline-offset-0 text-lg">underline-offset-0 - The quick brown fox</div>
          <div className="underline underline-offset-1 text-lg">underline-offset-1 - The quick brown fox</div>
          <div className="underline underline-offset-2 text-lg">underline-offset-2 - The quick brown fox</div>
          <div className="underline underline-offset-4 text-lg">underline-offset-4 - The quick brown fox</div>
          <div className="underline underline-offset-8 text-lg">underline-offset-8 - The quick brown fox</div>
        </div>
      </div>
    </div>
  );
}