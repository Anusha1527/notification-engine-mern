import React from 'react';

/**
 * Badge component for statuses and decisions
 * variant: success, warning, danger, info
 */
export default function Badge({ children, variant = 'info', className = '' }) {
  const base = 'inline-block px-2 py-1 text-xs font-semibold rounded-full';
  const colors = {
    success: 'bg-green-500 text-green-900',
    warning: 'bg-yellow-500 text-yellow-900',
    danger: 'bg-red-500 text-red-900',
    info: 'bg-blue-500 text-blue-900'
  };
  return (
    <span className={`${base} ${colors[variant] || colors.info} ${className}`}> {children}</span>
  );
}
