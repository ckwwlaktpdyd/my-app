import React from 'react';
import './Card.css';

export const Card = ({ 
  variant = 'default',
  padding = 'medium',
  shadow = 'none',
  hoverable = false,
  clickable = false,
  children,
  onClick,
  ...props 
}) => {
  const baseClass = 'reshaped-card';
  const variantClass = `${baseClass}--${variant}`;
  const paddingClass = `${baseClass}--padding-${padding}`;
  const shadowClass = `${baseClass}--shadow-${shadow}`;
  const hoverableClass = hoverable ? `${baseClass}--hoverable` : '';
  const clickableClass = clickable ? `${baseClass}--clickable` : '';

  return (
    <div
      className={`${baseClass} ${variantClass} ${paddingClass} ${shadowClass} ${hoverableClass} ${clickableClass}`.trim()}
      onClick={clickable ? onClick : undefined}
      {...props}
    >
      {children}
    </div>
  );
};
