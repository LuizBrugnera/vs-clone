import React from "react";

export default function TopBar() {
  return (
    <div className="flex items-center px-4 py-2 bg-gray-800">
      <div className="flex space-x-2">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Run</span>
        <span>Terminal</span>
        <span>Help</span>
      </div>
    </div>
  );
}
