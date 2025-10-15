import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'default', 
  onClick, 
  disabled = false,
  className = '',
  type = 'button',
  ...props 
}) => {
  // Base classes
  const baseClasses = 'font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-50';
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-pink-500 text-white hover:bg-pink-600 shadow-md hover:shadow-lg',
    secondary: 'bg-white text-pink-500 border-2 border-pink-500 hover:bg-pink-50',
    tertiary: 'bg-transparent text-pink-500 hover:text-pink-600'
  };
  
  // Size classes
  const sizeClasses = {
    small: 'px-4 py-2 text-sm rounded-lg',
    default: 'px-6 py-3 rounded-lg',
    large: 'px-8 py-4 text-lg rounded-xl'
  };
  
  // Combine all classes
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer transform hover:scale-105'
  }`;
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;