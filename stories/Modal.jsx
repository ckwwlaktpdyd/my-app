import React from 'react';
import './Modal.css';

export const Modal = ({ 
  isOpen = false,
  onClose,
  title = '',
  size = 'medium',
  children,
  showCloseButton = true,
  ...props 
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  return (
    <div className="reshaped-modal-backdrop" onClick={handleBackdropClick}>
      <div className={`reshaped-modal reshaped-modal--${size}`} {...props}>
        <div className="reshaped-modal-header">
          {title && <h2 className="reshaped-modal-title">{title}</h2>}
          {showCloseButton && (
            <button 
              className="reshaped-modal-close" 
              onClick={onClose}
              aria-label="Close modal"
            >
              ×
            </button>
          )}
        </div>
        <div className="reshaped-modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};
