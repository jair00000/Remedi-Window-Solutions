import React from 'react';

const Typography = ({ 
  children, 
  variant = 'body',
  size = 'md',
  color = 'default',
  className = '',
  as = null,
  ...props 
}) => {
  // Variant classes
  const variantClasses = {
    hero: 'heading-hero',
    section: 'heading-section',
    card: 'heading-card',
    small: 'heading-small',
    body: 'text-section',
    card: 'text-card',
    hero: 'text-hero'
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };
  
  // Color classes
  const colorClasses = {
    default: '',
    primary: 'text-primary',
    secondary: 'text-secondary',
    muted: 'text-muted',
    gradient: 'text-gradient',
    white: 'text-white'
  };
  
  // Combine all classes
  const classes = `${variantClasses[variant]} ${sizeClasses[size]} ${colorClasses[color]} ${className}`;
  
  // Determine the HTML element
  const getElement = () => {
    if (as) return as;
    
    switch (variant) {
      case 'hero':
        return 'h1';
      case 'section':
        return 'h2';
      case 'card':
        return 'h3';
      case 'small':
        return 'h4';
      default:
        return 'p';
    }
  };
  
  const Element = getElement();
  
  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
};

export default Typography;
