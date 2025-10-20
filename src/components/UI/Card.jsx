import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = false,
  padding = 'md',
  ...props 
}) => {
  // Base card classes
  const baseClasses = 'card';
  
  // Variant classes
  const variantClasses = {
    default: '',
    service: 'card-service',
    feature: 'card-feature',
    project: 'card-project',
    dark: 'card-dark'
  };
  
  // Hover classes
  const hoverClasses = hover ? 'card-hover' : '';
  
  // Padding classes
  const paddingClasses = {
    none: 'card-padding-none',
    sm: 'card-padding-sm',
    md: 'card-padding-md',
    lg: 'card-padding-lg',
    xl: 'card-padding-xl'
  };
  
  // Combine all classes
  const classes = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${paddingClasses[padding]} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;