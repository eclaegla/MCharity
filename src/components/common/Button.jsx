// src/components/common/Button.jsx
import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  type = 'button',
  ...props 
}) {
  // Core structural classes for consistent size and interactive tap behaviors
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl px-5 py-2.5 transition-all duration-200 cursor-pointer text-sm sm:text-base tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98]';
  
  // Clean color themes tailored to a modern charity/fintech palette
  const variants = {
    primary: 'bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-cyan-500 shadow-sm shadow-cyan-500/10',
    secondary: 'bg-transparent text-slate-700 border border-slate-200 hover:bg-slate-50 focus:ring-slate-400'
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}