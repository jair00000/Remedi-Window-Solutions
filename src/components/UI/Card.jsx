const Card = ({ 
  children, 
  className = '', 
  hover = false,
  padding = 'default',
  ...props 
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };
  
  const hoverClasses = hover ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-200' : '';
  const classes = `bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 ${paddingClasses[padding]} ${hoverClasses} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
