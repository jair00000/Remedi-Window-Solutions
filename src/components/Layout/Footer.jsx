import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PhoneIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Remedi Window Solution",
            "description": "Professional window tinting services for residential, commercial, and government buildings in North Mississippi",
            "url": "https://remediwindows.com",
            "telephone": "+1-662-631-9254",
            "email": "hunter@remediwindowsolutions.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "North Mississippi",
              "addressRegion": "MS",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "34.3665",
              "longitude": "-89.5192"
            },
            "openingHours": "Mo-Fr 08:00-17:00",
            "priceRange": "$$",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "34.3665",
                "longitude": "-89.5192"
              },
              "geoRadius": "50000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Window Tinting Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Residential Window Tinting",
                    "description": "Professional window tinting for homes and residential properties"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Window Tinting",
                    "description": "Window tinting solutions for offices, malls, and restaurants"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Public Facilities Window Tinting",
                    "description": "Window tinting for schools, hospitals, and government buildings"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <footer className="bg-dark dark:bg-gray-900 text-light relative overflow-hidden transition-colors duration-300">
        {/* Floating white background for logo and sections */}
        <div className="absolute top-16 left-0 w-full h-16 bg-white/10 backdrop-blur-sm z-5"></div>
        
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-dark to-neutral-800 opacity-50"></div>
        
         <div className="container-custom py-20 relative z-10">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
             {/* Vertical separators */}
             <div className="hidden lg:block absolute left-1/4 top-1/4 bottom-1/4 w-px bg-neutral-500/40"></div>
             <div className="hidden lg:block absolute left-2/4 top-1/4 bottom-1/4 w-px bg-neutral-500/40"></div>
             <div className="hidden lg:block absolute left-3/4 top-1/4 bottom-1/4 w-px bg-neutral-500/40"></div>
            {/* Column 1: Logo and Description */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <img 
                    src="/Remedi-Window-Solutions/images/icons&logo/remedi-logo.svg" 
                    alt="Remedi Window Solutions Logo" 
                    className="w-20 h-20 object-contain mr-4 -mt-6 filter brightness-0 invert"
                  />
                  <div>
                    <h3 className="text-sm font-heading font-bold text-light tracking-wide">Remedi Window</h3>
                    <p className="text-sm font-heading font-bold text-light tracking-wide">Solutions</p>
                  </div>
                </div>
              </div>
               <p className="text-neutral-300 mb-8 leading-relaxed text-sm italic">
                 Remedi Window Solutions provides professional window tinting services for residential, commercial, and institutional clients across Starkville, Columbus, Tupelo, Oxford, and Tuscaloosa.
               </p>
              <Link
                to="/contact"
                className="inline-block w-full sm:w-auto text-center bg-gradient-to-r from-red to-primary-600 hover:from-primary-600 hover:to-primary-700 text-light font-bold py-4 px-8 sm:px-8 md:px-12 rounded-xl transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                GET QUOTE
              </Link>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-xl font-heading font-bold mb-8 text-light relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-red to-orange rounded-full"></div>
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="text-neutral-300 hover:text-light transition-all duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-neutral-300 hover:text-light transition-all duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    About us
                  </Link>
                </li>
                 <li>
                   <Link to="/contact" className="text-neutral-300 hover:text-light transition-all duration-300 flex items-center group">
                     <span className="w-2 h-2 bg-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                     Contact Us
                   </Link>
                 </li>
                 <li>
                   <Link to="/blog" className="text-neutral-300 hover:text-light transition-all duration-300 flex items-center group">
                     <span className="w-2 h-2 bg-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                     Blog
                   </Link>
                 </li>
                 <li>
                   <Link to="/gallery" className="text-neutral-300 hover:text-light transition-all duration-300 flex items-center group">
                     <span className="w-2 h-2 bg-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                     Gallery
                   </Link>
                 </li>
               </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="text-xl font-heading font-bold mb-8 text-light relative">
                Services
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-red to-orange rounded-full"></div>
              </h4>
               <ul className="space-y-4">
                 <li>
                   <Link to="/residential" className="text-neutral-300 hover:text-light transition-all duration-300 flex items-center group">
                     <span className="w-2 h-2 bg-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                     Residential
                   </Link>
                 </li>
                 <li>
                   <Link to="/commercial" className="text-neutral-300 hover:text-light transition-all duration-300 flex items-center group">
                     <span className="w-2 h-2 bg-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                     Commercial
                   </Link>
                 </li>
                 <li>
                   <Link to="/institutional" className="text-neutral-300 hover:text-light transition-all duration-300 flex items-center group">
                     <span className="w-2 h-2 bg-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                     Government & Buildings
                   </Link>
                 </li>
               </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="text-xl font-heading font-bold mb-8 text-light relative">
                Contact
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-red to-orange rounded-full"></div>
              </h4>
               <div className="space-y-6">
                 <div className="flex items-center space-x-4 group">
                   <PhoneIcon className="w-6 h-6 text-light group-hover:text-red transition-colors duration-300" />
                   <span className="text-neutral-300 group-hover:text-light transition-colors duration-300 text-lg">+1 662-631-9254</span>
                 </div>
                 <div className="flex items-center space-x-4 group">
                   <div className="w-6 h-6 text-light group-hover:text-red transition-colors duration-300">
                     <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                     </svg>
                   </div>
                   <span className="text-neutral-300 group-hover:text-light transition-colors duration-300 text-lg">hunter@remediwindowsolutions.com</span>
                 </div>
                 <div className="flex items-start space-x-4 group">
                   <div className="w-6 h-6 text-light group-hover:text-red transition-colors duration-300 mt-0.5">
                     <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                   </div>
                   <div>
                     <p className="text-neutral-300 group-hover:text-light transition-colors duration-300 text-sm font-medium">Business Hours:</p>
                     <p className="text-neutral-300 group-hover:text-light transition-colors duration-300 text-lg">Mon–Fri, 9:00–18:00 (CST)</p>
                   </div>
                 </div>
               </div>

               {/* Legal & Support Section */}
               <div className="mt-8">
                 <h5 className="text-lg font-heading font-bold mb-6 text-light relative">
                   Legal & Support
                   <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-red to-orange rounded-full"></div>
                 </h5>
                 <ul className="space-y-3">
                   <li>
                     <Link to="/faqs" className="text-neutral-300 hover:text-light transition-all duration-300 flex items-center group">
                       <span className="w-2 h-2 bg-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                       FAQs
                     </Link>
                   </li>
                   <li>
                     <Link to="/privacy-policy" className="text-neutral-300 hover:text-light transition-all duration-300 flex items-center group">
                       <span className="w-2 h-2 bg-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                       Privacy Policy
                     </Link>
                   </li>
                   <li>
                     <Link to="/terms-of-service" className="text-neutral-300 hover:text-light transition-all duration-300 flex items-center group">
                       <span className="w-2 h-2 bg-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                       Terms of Service
                     </Link>
                   </li>
                   <li>
                     <Link to="/cookie-policy" className="text-neutral-300 hover:text-light transition-all duration-300 flex items-center group">
                       <span className="w-2 h-2 bg-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                       Cookie Policy
                     </Link>
                   </li>
                 </ul>
               </div>

               {/* Social Media Icons */}
               <div className="mt-12">
                 <h5 className="text-lg font-heading font-bold mb-4 text-light relative">
                   Socials
                   <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-red to-orange rounded-full"></div>
                 </h5>
                 <div className="flex space-x-4">
                   {/* Facebook */}
                   <a href="#" className="w-12 h-12 bg-gradient-to-br from-red to-orange rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group">
                     <svg className="w-6 h-6 text-light group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                     </svg>
                   </a>
                   
                   {/* Instagram */}
                   <a href="#" className="w-12 h-12 bg-gradient-to-br from-red to-orange rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group">
                     <svg className="w-6 h-6 text-light group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                     </svg>
                   </a>
                   
                   {/* LinkedIn */}
                   <a href="#" className="w-12 h-12 bg-gradient-to-br from-red to-orange rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group">
                     <svg className="w-6 h-6 text-light group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                     </svg>
                   </a>
                   
                   {/* TikTok */}
                   <a href="#" className="w-12 h-12 bg-gradient-to-br from-red to-orange rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group">
                     <svg className="w-6 h-6 text-light group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                     </svg>
                   </a>
                 </div>
               </div>
             </div>
           </div>
         </div>

        {/* Bottom Bar with modern styling */}
        <div className="border-t border-neutral-700 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-800 to-transparent opacity-50"></div>
          <div className="container-custom py-8 relative z-10">
            <div className="text-center">
              <p className="text-neutral-400 text-sm font-medium">
                © 2025 Remedi Window Solutions - Developed By Stratigo Software Development Services
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;