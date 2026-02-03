import React from 'react';

export function PracticalExamples() {
  return (
    <div className="space-y-6">
      {/* Striped Table */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Striped Table</p>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-neutral-border">
              <th className="text-left py-2 px-3 font-medium text-neutral-text">Name</th>
              <th className="text-left py-2 px-3 font-medium text-neutral-text">Email</th>
              <th className="text-left py-2 px-3 font-medium text-neutral-text">Role</th>
              <th className="text-left py-2 px-3 font-medium text-neutral-text">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-border bg-neutral-bg/50">
              <td className="py-2 px-3">John Doe</td>
              <td className="py-2 px-3">john@example.com</td>
              <td className="py-2 px-3">Admin</td>
              <td className="py-2 px-3"><span className="px-2 py-1 bg-green-500/20 text-green-600 rounded text-xs">Active</span></td>
            </tr>
            <tr className="border-b border-neutral-border">
              <td className="py-2 px-3">Jane Smith</td>
              <td className="py-2 px-3">jane@example.com</td>
              <td className="py-2 px-3">User</td>
              <td className="py-2 px-3"><span className="px-2 py-1 bg-green-500/20 text-green-600 rounded text-xs">Active</span></td>
            </tr>
            <tr className="border-b border-neutral-border bg-neutral-bg/50">
              <td className="py-2 px-3">Bob Johnson</td>
              <td className="py-2 px-3">bob@example.com</td>
              <td className="py-2 px-3">User</td>
              <td className="py-2 px-3"><span className="px-2 py-1 bg-yellow-500/20 text-yellow-600 rounded text-xs">Pending</span></td>
            </tr>
            <tr>
              <td className="py-2 px-3">Alice Brown</td>
              <td className="py-2 px-3">alice@example.com</td>
              <td className="py-2 px-3">User</td>
              <td className="py-2 px-3"><span className="px-2 py-1 bg-red-500/20 text-red-600 rounded text-xs">Inactive</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Hoverable Table */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Hoverable Table</p>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-neutral-border">
              <th className="text-left py-2 px-3 font-medium text-neutral-text">Name</th>
              <th className="text-left py-2 px-3 font-medium text-neutral-text">Email</th>
              <th className="text-left py-2 px-3 font-medium text-neutral-text">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-border hover:bg-neutral-bg/50 transition-colors cursor-pointer">
              <td className="py-2 px-3">John Doe</td>
              <td className="py-2 px-3">john@example.com</td>
              <td className="py-2 px-3">Admin</td>
            </tr>
            <tr className="border-b border-neutral-border hover:bg-neutral-bg/50 transition-colors cursor-pointer">
              <td className="py-2 px-3">Jane Smith</td>
              <td className="py-2 px-3">jane@example.com</td>
              <td className="py-2 px-3">User</td>
            </tr>
            <tr className="border-b border-neutral-border hover:bg-neutral-bg/50 transition-colors cursor-pointer">
              <td className="py-2 px-3">Bob Johnson</td>
              <td className="py-2 px-3">bob@example.com</td>
              <td className="py-2 px-3">User</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Compact Table */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Compact Table</p>
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="border-b border-neutral-border">
              <th className="text-left py-1 px-2 font-medium text-neutral-text">Name</th>
              <th className="text-left py-1 px-2 font-medium text-neutral-text">Email</th>
              <th className="text-left py-1 px-2 font-medium text-neutral-text">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-border">
              <td className="py-1 px-2">John Doe</td>
              <td className="py-1 px-2">john@example.com</td>
              <td className="py-1 px-2">Admin</td>
            </tr>
            <tr className="border-b border-neutral-border">
              <td className="py-1 px-2">Jane Smith</td>
              <td className="py-1 px-2">jane@example.com</td>
              <td className="py-1 px-2">User</td>
            </tr>
            <tr className="border-b border-neutral-border">
              <td className="py-1 px-2">Bob Johnson</td>
              <td className="py-1 px-2">bob@example.com</td>
              <td className="py-1 px-2">User</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bordered Table */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Bordered Table</p>
        <table className="w-full text-sm border-collapse border border-neutral-border">
          <thead>
            <tr className="border-b border-neutral-border">
              <th className="text-left py-2 px-3 font-medium text-neutral-text border-r border-neutral-border">Name</th>
              <th className="text-left py-2 px-3 font-medium text-neutral-text border-r border-neutral-border">Email</th>
              <th className="text-left py-2 px-3 font-medium text-neutral-text">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-border">
              <td className="py-2 px-3 border-r border-neutral-border">John Doe</td>
              <td className="py-2 px-3 border-r border-neutral-border">john@example.com</td>
              <td className="py-2 px-3">Admin</td>
            </tr>
            <tr className="border-b border-neutral-border">
              <td className="py-2 px-3 border-r border-neutral-border">Jane Smith</td>
              <td className="py-2 px-3 border-r border-neutral-border">jane@example.com</td>
              <td className="py-2 px-3">User</td>
            </tr>
            <tr>
              <td className="py-2 px-3 border-r border-neutral-border">Bob Johnson</td>
              <td className="py-2 px-3 border-r border-neutral-border">bob@example.com</td>
              <td className="py-2 px-3">User</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Responsive Table */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Responsive Table with Overflow</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[500px]">
            <thead>
              <tr className="border-b border-neutral-border">
                <th className="text-left py-2 px-3 font-medium text-neutral-text">Name</th>
                <th className="text-left py-2 px-3 font-medium text-neutral-text">Email</th>
                <th className="text-left py-2 px-3 font-medium text-neutral-text">Role</th>
                <th className="text-left py-2 px-3 font-medium text-neutral-text">Department</th>
                <th className="text-left py-2 px-3 font-medium text-neutral-text">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-border">
                <td className="py-2 px-3">John Doe</td>
                <td className="py-2 px-3">john@example.com</td>
                <td className="py-2 px-3">Admin</td>
                <td className="py-2 px-3">Engineering</td>
                <td className="py-2 px-3">Active</td>
              </tr>
              <tr className="border-b border-neutral-border">
                <td className="py-2 px-3">Jane Smith</td>
                <td className="py-2 px-3">jane@example.com</td>
                <td className="py-2 px-3">User</td>
                <td className="py-2 px-3">Marketing</td>
                <td className="py-2 px-3">Active</td>
              </tr>
              <tr>
                <td className="py-2 px-3">Bob Johnson</td>
                <td className="py-2 px-3">bob@example.com</td>
                <td className="py-2 px-3">User</td>
                <td className="py-2 px-3">Sales</td>
                <td className="py-2 px-3">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Table with Actions */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-text">Table with Actions</p>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-neutral-border">
              <th className="text-left py-2 px-3 font-medium text-neutral-text">Name</th>
              <th className="text-left py-2 px-3 font-medium text-neutral-text">Email</th>
              <th className="text-left py-2 px-3 font-medium text-neutral-text">Role</th>
              <th className="text-right py-2 px-3 font-medium text-neutral-text">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-border">
              <td className="py-2 px-3">John Doe</td>
              <td className="py-2 px-3">john@example.com</td>
              <td className="py-2 px-3">Admin</td>
              <td className="py-2 px-3 text-right">
                <button className="text-blue-500 hover:text-blue-600 mr-2">Edit</button>
                <button className="text-red-500 hover:text-red-600">Delete</button>
              </td>
            </tr>
            <tr className="border-b border-neutral-border">
              <td className="py-2 px-3">Jane Smith</td>
              <td className="py-2 px-3">jane@example.com</td>
              <td className="py-2 px-3">User</td>
              <td className="py-2 px-3 text-right">
                <button className="text-blue-500 hover:text-blue-600 mr-2">Edit</button>
                <button className="text-red-500 hover:text-red-600">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}