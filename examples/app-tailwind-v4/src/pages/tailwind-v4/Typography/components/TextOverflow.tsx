import React from 'react';

export function TextOverflow() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Text Overflow</p>
        <div className="space-y-2">
          <div className="truncate w-64 bg-gray-100 p-2 rounded">truncate - The quick brown fox jumps over the lazy dog</div>
          <div className="overflow-hidden text-ellipsis whitespace-nowrap w-64 bg-gray-100 p-2 rounded">ellipsis - The quick brown fox jumps over the lazy dog</div>
          <div className="overflow-clip w-64 bg-gray-100 p-2 rounded">clip - The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Whitespace</p>
        <div className="space-y-2">
          <div className="whitespace-normal w-64 bg-gray-100 p-2 rounded">whitespace-normal - The quick brown fox jumps over the lazy dog</div>
          <div className="whitespace-nowrap w-64 bg-gray-100 p-2 rounded">whitespace-nowrap - The quick brown fox jumps over the lazy dog</div>
          <div className="whitespace-pre w-64 bg-gray-100 p-2 rounded">whitespace-pre - The quick brown fox jumps over the lazy dog</div>
          <div className="whitespace-pre-wrap w-64 bg-gray-100 p-2 rounded">whitespace-pre-wrap - The quick brown fox jumps over the lazy dog</div>
          <div className="whitespace-pre-line w-64 bg-gray-100 p-2 rounded">whitespace-pre-line - The quick brown fox jumps over the lazy dog</div>
          <div className="whitespace-break-spaces w-64 bg-gray-100 p-2 rounded">whitespace-break-spaces - The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Word Break</p>
        <div className="space-y-2">
          <div className="break-normal w-48 bg-gray-100 p-2 rounded">break-normal - Supercalifragilisticexpialidocious</div>
          <div className="wrap-break-word w-48 bg-gray-100 p-2 rounded">wrap-break-word - Supercalifragilisticexpialidocious</div>
          <div className="break-all w-48 bg-gray-100 p-2 rounded">break-all - Supercalifragilisticexpialidocious</div>
          <div className="break-keep w-48 bg-gray-100 p-2 rounded">break-keep - Supercalifragilisticexpialidocious</div>
        </div>
      </div>
    </div>
  );
}