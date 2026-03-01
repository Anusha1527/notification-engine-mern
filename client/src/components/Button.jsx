import React from 'react';

/**
 * Generic Button component with variants and loading state.
 * Props:
 *  - children: node
 *  - className: additional classes
 *  - variant: "primary" | "secondary" | "outline" | "danger"
 *  - loading: boolean
 *  - ...rest: other button props (onClick, type, etc.)
 */
export default function Button({
  children,
  className = '',
  variant = 'primary',
  loading = false,
  ...rest
}) {
  const base = 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none';
  const variants = {
    primary: 'bg-primary hover:bg-primary-dark text-white',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-white',
    outline: 'border border-gray-500 hover:bg-gray-800 text-white',
    danger: 'bg-red-600 hover:bg-red-500 text-white'
  };
  return (
    <button
      className={`${base} ${variants[variant] || variants.primary} ${className}`}
      disabled={loading || rest.disabled}
      {...rest}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4 mr-2 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
}
