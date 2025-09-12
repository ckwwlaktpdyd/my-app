import React from 'react';
import './Input.css';

export const Input = ({ 
  type = 'text',
  placeholder = '',
  disabled = false,
  error = false,
  size = 'medium',
  label = '',
  helperText = '',
  ...props 
}) => {
  const baseClass = 'reshaped-input';
  const sizeClass = `${baseClass}--${size}`;
  const errorClass = error ? `${baseClass}--error` : '';
  const disabledClass = disabled ? `${baseClass}--disabled` : '';

  return (
    <div className={`${baseClass}-wrapper`}>
      {label && <label className={`${baseClass}-label`}>{label}</label>}
      <input
        type={type}
        className={`${baseClass} ${sizeClass} ${errorClass} ${disabledClass}`.trim()}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      />
      {helperText && (
        <span className={`${baseClass}-helper ${error ? `${baseClass}-helper--error` : ''}`}>
          {helperText}
        </span>
      )}
    </div>
  );
};
