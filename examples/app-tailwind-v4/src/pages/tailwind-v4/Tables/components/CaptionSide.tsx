import React from 'react';

export function CaptionSide() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Caption Top</p>
        <table className="w-full text-sm">
          <caption className="caption-top text-sm font-medium text-neutral-text mb-2">User Information</caption>
          <thead>
            <tr className="border-b border-neutral-border">
              <th className="text-left py-2 px-3 font-medium text-neutral-text">Name</th>
              <th className="text-left py-2 px-3 font-medium text-neutral-text">Email</th>
              <th className="text-left py-2 px-3 font-medium text-neutral-text">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-border">
              <td className="py-2 px-3">John Doe</td>
              <td className="py-2 px-3">john@example.com</td>
              <td className="py-2 px-3">Admin</td>
            </tr>
            <tr className="border-b border-neutral-border">
              <td className="py-2 px-3">Jane Smith</td>
              <td className="py-2 px-3">jane@example.com</td>
              <td className="py-2 px-3">User</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Caption Bottom</p>
        <table className="w-full text-sm">
          <caption className="caption-bottom text-sm font-medium text-neutral-text mt-2">User Information</caption>
          <thead>
            <tr className="border-b border-neutral-border">
              <th className="text-left py-2 px-3 font-medium text-neutral-text">Name</th>
              <th className="text-left py-2 px-3 font-medium text-neutral-text">Email</th>
              <th className="text-left py-2 px-3 font-medium text-neutral-text">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-border">
              <td className="py-2 px-3">John Doe</td>
              <td className="py-2 px-3">john@example.com</td>
              <td className="py-2 px-3">Admin</td>
            </tr>
            <tr className="border-b border-neutral-border">
              <td className="py-2 px-3">Jane Smith</td>
              <td className="py-2 px-3">jane@example.com</td>
              <td className="py-2 px-3">User</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}