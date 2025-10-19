import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';

const Header = () => {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <link rel="canonical" href={`https://remediwindows.com${location.pathname}`} />
      </Helmet>
      
      <Navbar />
    </>
  );
};

export default Header;
