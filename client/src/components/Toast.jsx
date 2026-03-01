import React from 'react';
import classNames from 'classnames';

export default function Toast({ type = 'info', message }) {
  const base = 'px-4 py-2 rounded-md shadow-lg max-w-xs w-full text-sm flex items-center space-x-2';
  const variants = {
    success: 'bg-green-600 text-white',
    error: 'bg-red-600 text-white',
    info: 'bg-blue-600 text-white',
    warning: 'bg-yellow-500 text-black'
  };
  return (
    <div className={classNames(base, variants[type] || variants.info)}>
      <span>{message}</span>
    </div>
  );
}
