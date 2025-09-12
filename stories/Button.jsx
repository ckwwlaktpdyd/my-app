import React from 'react';
import './Button.css';

export const Button = ({ 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  children, 
  onClick,
  ...props 
}) => {
  const baseClass = 'reshaped-button';
  const variantClass = `${baseClass}--${variant}`;
  const sizeClass = `${baseClass}--${size}`;
  const disabledClass = disabled ? `${baseClass}--disabled` : '';

  return (
    <button
      type="button"
      className={`${baseClass} ${variantClass} ${sizeClass} ${disabledClass}`.trim()}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
