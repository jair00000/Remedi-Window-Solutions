import React from 'react';
import Container from './Container';

const Section = ({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'md',
  background = 'white',
  container = true,
  containerSize = 'md',
  ...props 
}) => {
  // Base section classes
  const baseClasses = '';
  
  // Variant classes
  const variantClasses = {
    default: '',
    hero: 'hero-section',
    content: 'section-content',
    features: 'section-features'
  };
  
  // Padding classes
  const paddingClasses = {
    none: 'section-padding-none',
    sm: 'section-padding-sm',
    md: 'section-padding-md',
    lg: 'section-padding-lg',
    xl: 'section-padding-xl'
  };
  
  // Background classes
  const backgroundClasses = {
    white: 'section-bg-white',
    gray: 'section-bg-gray',
    primary: 'section-bg-primary',
    secondary: 'section-bg-secondary',
    gradient: 'section-bg-gradient'
  };
  
  // Combine all classes
  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${backgroundClasses[background]} ${className}`;
  
  const content = container ? (
    <Container size={containerSize}>
      {children}
    </Container>
  ) : children;
  
  return (
    <section className={classes} {...props}>
      {content}
    </section>
  );
};

export default Section;