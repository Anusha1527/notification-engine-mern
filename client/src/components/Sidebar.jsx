import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaPaperPlane, FaList, FaClipboardList, FaChartBar, FaServer } from 'react-icons/fa';

const links = [
  { to: '/', label: 'Dashboard', icon: <FaTachometerAlt /> },
  { to: '/send', label: 'Send', icon: <FaPaperPlane /> },
  { to: '/logs', label: 'Logs', icon: <FaList /> },
  { to: '/rules', label: 'Rules', icon: <FaClipboardList /> },
  { to: '/analytics', label: 'Analytics', icon: <FaChartBar /> },
  { to: '/status', label: 'Status', icon: <FaServer /> }
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#111827] min-h-screen text-gray-300 fixed">
      <div className="p-6 font-bold text-xl text-white">AI Notifications</div>
      <nav className="mt-6">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              `flex items-center py-2 px-6 hover:bg-[#1f2937] transition-colors ${
                isActive ? 'bg-[#1f2937] text-white' : ''
              }`
            }
          >
            <span className="mr-3">{l.icon}</span>
            <span>{l.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
