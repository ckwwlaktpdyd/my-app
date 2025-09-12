import React from 'react';
import './Badge.css';

export const Badge = ({ 
  variant = 'default',
  size = 'medium',
  children,
  ...props 
}) => {
  const baseClass = 'reshaped-badge';
  const variantClass = `${baseClass}--${variant}`;
  const sizeClass = `${baseClass}--${size}`;

  return (
    <span
      className={`${baseClass} ${variantClass} ${sizeClass}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
};
