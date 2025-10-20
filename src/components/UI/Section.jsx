import React from 'react';
import Container from './Container';

const Section = ({ 
  children, 
  className = '', 
  padding = 'default',
  background = 'white',
  ...props 
}) => {
  const paddingClasses = {
    none: '',
    sm: 'py-8 md:py-12',
    default: 'py-16 md:py-24',
    lg: 'py-20 md:py-32',
    xl: 'py-24 md:py-40',
  };
  
  const backgroundClasses = {
    white: 'bg-white dark:bg-gray-900',
    gray: 'bg-gray-50 dark:bg-gray-800',
    primary: 'bg-primary-600 dark:bg-primary-700',
    secondary: 'bg-secondary-900 dark:bg-secondary-800',
    gradient: 'bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-700 dark:to-primary-900',
  };
  
  const classes = `${paddingClasses[padding]} ${backgroundClasses[background]} ${className}`;
  
  return (
    <section className={classes} {...props}>
      <Container>
        {children}
      </Container>
    </section>
  );
};

export default Section;