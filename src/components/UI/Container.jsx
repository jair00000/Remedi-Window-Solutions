import React from 'react';

const Container = ({ 
  children, 
  className = '', 
  size = 'md',
  ...props 
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'container-sm',
    md: 'container-md',
    lg: 'container-lg',
    full: 'container-full',
    responsive: 'container-responsive'
  };
  
  // Combine all classes
  const classes = `${sizeClasses[size]} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Container;