// src/components/common/SectionTitle.jsx
import React from 'react';

export default function SectionTitle({ 
  title, 
  subtitle, 
  center = false, 
  className = '' 
}) {
  return (
    <div className={`space-y-3 ${center ? 'text-center max-w-2xl mx-auto' : 'max-w-xl'} ${className}`}>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}