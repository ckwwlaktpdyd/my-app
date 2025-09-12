import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

/**
 * Reshaped Design System Button Component
 */
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

Button.propTypes = {
  /**
   * Button variant
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  /**
   * Button size
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Is button disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Button contents
   */
  children: PropTypes.node.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  onClick: undefined,
};
