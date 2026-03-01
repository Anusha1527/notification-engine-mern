import React from 'react';
import { FaBell } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="h-16 bg-[#1f2937] flex items-center justify-between px-6 ml-64">
      <div className="text-lg font-semibold text-white">Notification Engine</div>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <FaBell className="text-white" />
          {/* notification count badge could go here */}
        </button>
        {/* additional header items */}
      </div>
    </header>
  );
}
