import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, title, description, keywords }) => {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={`https://remediwindows.com${location.pathname}`} />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow bg-white dark:bg-gray-900 transition-colors duration-300">
        {children}
      </main>
      
      <Footer />
    </>
  );
};

export default Layout;
