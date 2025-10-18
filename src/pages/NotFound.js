import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { HomeIcon, WrenchScrewdriverIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Section from '../components/UI/Section';
import Container from '../components/UI/Container';
import Button from '../components/UI/Button';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Remedi Window Solution</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Remedi Window Solution homepage for professional window services." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Section className="pt-48 lg:pt-52 min-h-screen flex items-center">
        <Container>
          <div className="text-center">
            <div className="text-9xl font-bold text-primary-600 mb-8">404</div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Sorry, the page you're looking for doesn't exist. It might have been moved, 
              deleted, or you entered the wrong URL.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/">
                <Button size="lg">
                  Go Home
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <HomeIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Home</h3>
                <p className="text-gray-600 mb-4">Return to our homepage</p>
                <Link to="/" className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300">
                  Go to Home →
                </Link>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <WrenchScrewdriverIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">View Films</h3>
                <p className="text-gray-600 mb-4">View our window films</p>
                <Link to="/services" className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300">
                  View Films →
                </Link>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <PhoneIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact</h3>
                <p className="text-gray-600 mb-4">Get in touch with us</p>
                <Link to="/contact" className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300">
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default NotFound;
