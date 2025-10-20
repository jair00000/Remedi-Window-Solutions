import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import ThemeToggle from '../UI/ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);


  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const solutionsMenu = [
    { name: 'Residential', href: '/residential' },
    { name: 'Commercial', href: '/commercial' },
    { name: 'Government & Schools', href: '/institutional' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSolutionsOpen(false);
      }
    };

    const handleMobileClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileSolutionsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('mousedown', handleMobileClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mousedown', handleMobileClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Top Phone Banner - Always visible */}
      <div className="fixed top-0 w-full z-50 bg-primary-500 text-white py-2 h-12">
        <div className="container-custom text-center">
          <p className="text-lg font-heading font-semibold">CALL : +1 662-631-9254</p>
        </div>
      </div>

      {/* Main Navigation - Sticky below phone banner with no gap */}
      <header className="fixed w-full top-12 z-40 bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300">
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={`${import.meta.env.BASE_URL}images/icons&logo/remedi-logo.svg`} 
                alt="Remedi Window Solutions Logo" 
                className="w-20 h-20 object-contain dark:brightness-0 dark:invert"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Remedi Window Solutions
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">Professional Window Tinting Services</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-primary-500'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-500'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Solutions Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => {
                    console.log('Solutions dropdown clicked, current state:', isSolutionsOpen);
                    setIsSolutionsOpen(!isSolutionsOpen);
                  }}
                  className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                    location.pathname === '/services' || location.pathname === '/residential' || location.pathname === '/commercial' || location.pathname === '/institutional'
                      ? 'text-primary-500'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-500'
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDownIcon 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isSolutionsOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {/* Dropdown Menu */}
                {isSolutionsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50 transition-colors duration-300">
                    {solutionsMenu.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => {
                          // Close dropdown first
                          setIsSolutionsOpen(false);
                          // Navigate using React Router
                          navigate(item.href);
                        }}
                        className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-500 transition-colors duration-200 cursor-pointer"
                      >
                        {item.name}
                      </button>
                    ))}
                    <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                    <Link
                      to="/services"
                      onClick={() => setIsSolutionsOpen(false)}
                      className="block px-4 py-3 text-primary-500 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      View Types of Films
                    </Link>
                  </div>
                )}
              </div>
              
              <ThemeToggle />
              <Link
                to="/contact"
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile menu button and theme toggle */}
            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => {
                  console.log('Mobile menu button clicked, current state:', isMenuOpen);
                  setIsMenuOpen(!isMenuOpen);
                  // Close mobile solutions dropdown when main menu is closed
                  if (isMenuOpen) {
                    setIsMobileSolutionsOpen(false);
                  }
                }}
                className="p-2 rounded-md transition-colors duration-200 text-gray-700 dark:text-gray-300 hover:text-primary-500"
              >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden relative z-50 mobile-menu-container">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-2 transition-colors duration-300 relative z-50">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      location.pathname === item.href
                        ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Solutions Dropdown */}
                <div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('Mobile Solutions dropdown clicked, current state:', isMobileSolutionsOpen);
                      console.log('Setting mobile solutions open to:', !isMobileSolutionsOpen);
                      setIsMobileSolutionsOpen(!isMobileSolutionsOpen);
                    }}
                    className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      location.pathname === '/services' || location.pathname === '/residential' || location.pathname === '/commercial' || location.pathname === '/institutional'
                        ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span>Solutions</span>
                    <ChevronDownIcon 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isMobileSolutionsOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  {/* Mobile Dropdown Items */}
                  {isMobileSolutionsOpen && (
                    <div className="ml-4 mt-1 space-y-1 relative z-50">
                      {solutionsMenu.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => {
                            // Close menus first
                            setIsMenuOpen(false);
                            setIsMobileSolutionsOpen(false);
                            // Navigate using React Router
                            navigate(item.href);
                          }}
                          className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-500 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                        >
                          {item.name}
                        </button>
                      ))}
                      <Link
                        to="/services"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsMobileSolutionsOpen(false);
                        }}
                        className="block px-3 py-2 rounded-md text-sm font-medium text-primary-500 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        View Types of Films
                      </Link>
                    </div>
                  )}
                </div>
                
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 mt-4"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
