// src/components/common/Card.jsx
import React from 'react';

export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 ${className}`}>
      {children}
    </div>
  );
}