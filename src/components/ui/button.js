import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-2xl font-medium transition-all shadow-md hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
