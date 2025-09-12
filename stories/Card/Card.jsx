import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

/**
 * Reshaped Design System Card Component
 */
export const Card = ({ 
  variant = 'default',
  padding = 'medium',
  shadow = 'medium',
  bordered = false,
  hoverable = false,
  children,
  onClick,
  ...props 
}) => {
  const baseClass = 'reshaped-card';
  const variantClass = `${baseClass}--${variant}`;
  const paddingClass = `${baseClass}--padding-${padding}`;
  const shadowClass = `${baseClass}--shadow-${shadow}`;
  const borderedClass = bordered ? `${baseClass}--bordered` : '';
  const hoverableClass = hoverable ? `${baseClass}--hoverable` : '';
  const clickableClass = onClick ? `${baseClass}--clickable` : '';

  const className = [
    baseClass,
    variantClass,
    paddingClass,
    shadowClass,
    borderedClass,
    hoverableClass,
    clickableClass
  ].filter(Boolean).join(' ');

  const CardElement = onClick ? 'button' : 'div';

  return (
    <CardElement
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </CardElement>
  );
};

Card.propTypes = {
  /**
   * Card variant
   */
  variant: PropTypes.oneOf(['default', 'elevated', 'outlined']),
  /**
   * Card padding
   */
  padding: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  /**
   * Card shadow
   */
  shadow: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  /**
   * Show border
   */
  bordered: PropTypes.bool,
  /**
   * Enable hover effects
   */
  hoverable: PropTypes.bool,
  /**
   * Card contents
   */
  children: PropTypes.node.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Card.defaultProps = {
  variant: 'default',
  padding: 'medium',
  shadow: 'medium',
  bordered: false,
  hoverable: false,
  onClick: undefined,
};
