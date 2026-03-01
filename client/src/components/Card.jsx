import React from 'react';

/**
 * Generic card container. Accepts children and custom className.
 */
export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-[#1e293b] p-6 rounded-lg shadow-lg ${className}`}>
      {children}
    </div>
  );
}
