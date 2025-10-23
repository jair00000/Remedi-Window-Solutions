import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';
import { CheckCircleIcon, StarIcon, ShieldCheckIcon, MapPinIcon, MapIcon, HeartIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const About = () => {
  const stats = [
    { 
      number: '5', 
      label: 'Cities Served',
      icon: MapIcon,
      color: 'blue',
      description: 'Starkville, Columbus, Tupelo, Oxford, Tuscaloosa'
    },
    { 
      number: '100%', 
      label: 'Customer Satisfaction',
      icon: HeartIcon,
      color: 'green',
      description: 'Every project completed to perfection'
    },
    { 
      number: 'Premium', 
      label: 'Quality Products',
      icon: ClockIcon,
      color: 'purple',
      description: 'Avery Dennison films for lasting performance'
    },
    { 
      number: 'Free', 
      label: 'Estimates',
      icon: CurrencyDollarIcon,
      color: 'orange',
      description: 'No obligation, no hidden fees'
    }
  ];


  return (
    <>
      <Helmet>
        <title>About Remedi Window Solutions | Window Tinting in North Mississippi and West Alabama</title>
        <meta
          name="description"
          content="Learn about Remedi Window Solutions, a trusted window tinting company and window film installer based in Vardaman, Mississippi. We specialize in residential, commercial, and institutional window tinting using Avery Dennison Window Films for comfort, security, and energy efficiency across North Mississippi and West Alabama."
        />
        <meta
          name="keywords"
          content="about Remedi Window Solutions, window tinting company, window film installer, Avery Dennison Window Films, residential window tinting, commercial window tinting, security films, solar control films, decorative window films, energy efficient window solutions, Vardaman Mississippi, North Mississippi, West Alabama, Starkville, Columbus, Oxford, Tupelo, Tuscaloosa"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About Remedi Window Solutions | Window Tinting in North Mississippi and West Alabama"
        />
        <meta
          property="og:description"
          content="Remedi Window Solutions is a locally owned window tinting company and certified installer of Avery Dennison Window Films. Serving North Mississippi and West Alabama with professional window film installations for homes, businesses, and institutions."
        />
        <meta property="og:url" content="https://jair00000.github.io/Remedi-Window-Solutions/about" />
        <meta property="og:site_name" content="Remedi Window Solutions" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={`${import.meta.env.BASE_URL}images/icons-logo/remedi-logo.svg`} />
      </Helmet>
      
      {/* Hero Section */}
      <div className="relative min-h-[100vh] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/about/About-Hero-logo.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10 flex items-center justify-center min-h-[100vh] pt-28 sm:pt-32 lg:pt-36 px-4 sm:px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center justify-center w-full max-w-7xl">
            {/* Left Content */}
            <div className="text-white space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight animate-fade-in">
                  About <span className="text-primary-400">Remedi</span> Window Solutions
                </h1>
                <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-primary-300 animate-slide-up">
                  Professional Window Film Installation and Tinting Services
                </h2>
                <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-slide-up">
                  Remedi Window Solutions is a locally owned window film installer and window tinting company based in Vardaman, Mississippi, serving North Mississippi and West Alabama. We provide residential and commercial window tinting that enhances comfort, safety, and energy efficiency using Avery Dennison Window Films — known for their performance, durability, and clarity.
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-slide-up">
                  Our high-performance window films are designed for solar control, privacy, security, and decorative applications. Every installation reflects our commitment to precision, professionalism, and long-lasting protection for your home or business.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-primary-600 hover:bg-primary-700 text-white border-primary-600 hover:border-primary-700 text-sm sm:text-base px-4 sm:px-6 lg:px-8 py-3 sm:py-4 w-full sm:w-auto"
                  onClick={() => window.location.href = '/contact#quote-form'}
                >
                  Get Your Free Estimate
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-primary-600 hover:text-white text-sm sm:text-base px-4 sm:px-6 lg:px-8 py-3 sm:py-4 w-full sm:w-auto"
                  onClick={() => window.location.href = '/services'}
                >
                  View Films
                </Button>
              </div>
            </div>

            {/* Right Feature Boxes - Hidden on mobile, visible on tablet+ */}
            <div className="hidden md:block space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Feature Box 1 */}
                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mr-4">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      100% Satisfaction
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Guaranteed results and reliable service
                  </p>
                </div>

                {/* Feature Box 2 */}
                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mr-4">
                      <StarIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Best Quality Films
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Using trusted Avery Dennison Window Film materials
                  </p>
                </div>

                {/* Feature Box 3 */}
                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mr-4">
                      <ShieldCheckIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Expert Installation
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Certified and experienced professionals
                  </p>
                </div>

                {/* Feature Box 4 */}
                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{backgroundColor: '#fed7aa'}}>
                      <MapPinIcon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Local Service
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Serving North Mississippi and West Alabama
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Remedi Section */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-8">
              About <span className="text-primary-600">Remedi</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8 text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
              Remedi Window Solutions is a locally owned window tinting company and trusted window film installer serving <span className="font-semibold text-primary-600 dark:text-primary-400">North Mississippi and West Alabama</span>, with projects across <span className="font-semibold text-primary-600 dark:text-primary-400">Starkville, Columbus, Tupelo, Oxford, and Tuscaloosa</span>. We specialize in residential, commercial, and institutional window tinting designed to enhance comfort, energy efficiency, and privacy while maintaining a high standard of aesthetic quality and precision.
              </p>
            
              <p>
              As an <span className="font-semibold text-primary-600 dark:text-primary-400">Avery Dennison Window Films provider</span>, we use premium films known for their quality, durability, and reliable performance. Our product range includes <span className="font-semibold text-gray-900 dark:text-white">Solar Control Films</span>, <span className="font-semibold text-gray-900 dark:text-white">Security Films</span>, <span className="font-semibold text-gray-900 dark:text-white">Privacy Films</span>, and <span className="font-semibold text-gray-900 dark:text-white">Decorative Window Films</span>, each engineered to deliver superior performance for heat rejection, safety, and design flexibility. These high-performance window films allow us to provide long-lasting comfort, protection, and visual enhancement for homes, offices, and institutional properties throughout North Mississippi and West Alabama.
              </p>
            </div>
          
          <div className="mt-12">
            <Button 
              size="lg" 
              className="bg-primary-600 hover:bg-primary-700 text-white border-primary-600 hover:border-primary-700 px-8 py-4 text-lg"
              onClick={() => window.location.href = '/contact#quote-form'}
            >
              Get Your Free Estimate
            </Button>
            </div>
          </div>
      </Section>

      {/* Mission & Vision Section */}
      <Section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-2xl flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-heading font-bold text-gray-900 dark:text-white">
                  Our <span className="text-primary-600">Mission</span>
                </h3>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our mission is to deliver high-quality window film installations and professional window tinting solutions that enhance comfort, energy efficiency, and protection for residential, commercial, and institutional properties across North Mississippi and West Alabama.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                We use Avery Dennison Window Films, trusted for their durability, clarity, and performance, to provide long-lasting comfort, safety, and aesthetic value. Every project we complete reflects our commitment to craftsmanship, integrity, and reliable results that endures over time.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-heading font-bold text-gray-900 dark:text-white">
                  Our <span className="text-green-600">Vision</span>
              </h3>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our vision is to be recognized as North Mississippi's leading window tinting company and trusted window film installer, known for innovation, precision, and service excellence.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                We aim to build long-term relationships founded on professionalism, ethical service, and customer satisfaction, becoming the preferred choice for window tinting in North Mississippi and West Alabama.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Values Section */}
      <Section className="pb-8" style={{ marginBottom: '16px' }}>
        <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              Our Core <span className="text-primary-600">Values</span>
          </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that define who we are as a window tinting company and guide our dedication to excellence in every window film installation across North Mississippi and West Alabama.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Trust */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mr-5">
                  <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Trust
              </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We value transparency and honesty in every project, ensuring each residential, commercial, and institutional window tinting service meets the highest standards. Our reliability and consistent results help us build lasting relationships with clients across North Mississippi and West Alabama.
              </p>
        </div>

            {/* Safety */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mr-5">
                  <svg className="w-7 h-7 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Safety
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Every Avery Dennison Window Film installation is handled with precision and care to ensure both product safety and client confidence. We follow strict professional practices to deliver dependable comfort and protection.
          </p>
        </div>
        
            {/* Professionalism */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mr-5">
                  <svg className="w-7 h-7 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8" />
                  </svg>
              </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Professionalism
              </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                From consultation to completion, our team of skilled window film installers maintains the highest level of workmanship and attention to detail. We approach every home, business, and institution with respect and professionalism that reflects our company standards.
              </p>
            </div>

            {/* Work Ethics */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mr-5" style={{backgroundColor: '#fed7aa'}}>
                  <svg className="w-7 h-7 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Work Ethics
              </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Each installation represents our commitment to quality, responsibility, and consistency. These values define how we operate as a trusted window tinting company in North Mississippi and West Alabama, delivering results that meet performance expectations and endure over time.
              </p>
                  </div>
              </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="pt-8 pb-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const colorStyles = {
              blue: { backgroundColor: '#dbeafe', color: '#2563eb' },
              green: { backgroundColor: '#dcfce7', color: '#16a34a' },
              purple: { backgroundColor: '#e9d5ff', color: '#9333ea' },
              orange: { backgroundColor: '#fecaca', color: '#dc2626' }
            };
            
            return (
              <div 
                key={index} 
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={colorStyles[stat.color]}>
                  <IconComponent className="w-8 h-8" />
                </div>
                
                {/* Number */}
                <div className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {stat.number}
              </div>
                
                {/* Label */}
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {stat.label}
              </div>
                
                {/* Description */}
                <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {stat.description}
                </div>
                
                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary-200 dark:bg-primary-800 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            );
          })}
        </div>
      </Section>


      {/* Professional CTA Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800" style={{padding: '100px 20px', textAlign: 'center', width: '100%'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          {/* Main Heading */}
          <h1 style={{color: 'white', fontSize: '56px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2'}}>
            READY TO WORK WITH US?
          </h1>
          
          {/* Subheading */}
          <p style={{color: 'rgba(255,255,255,0.9)', fontSize: '28px', marginBottom: '40px', maxWidth: '900px', margin: '0 auto 40px', lineHeight: '1.4'}}>
            Experience the Difference of Professional Window Tinting Services
          </p>
          
          {/* Cities We Serve */}
          <div style={{marginBottom: '50px'}}>
            <h2 style={{color: 'white', fontSize: '24px', fontWeight: '600', marginBottom: '20px'}}>
              SERVING NORTH MISSISSIPPI & WEST ALABAMA
            </h2>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginBottom: '30px'}}>
              <div style={{backgroundColor: 'rgba(255,255,255,0.15)', padding: '12px 24px', borderRadius: '25px', color: 'white', fontSize: '16px', fontWeight: '500'}}>
                Starkville
              </div>
              <div style={{backgroundColor: 'rgba(255,255,255,0.15)', padding: '12px 24px', borderRadius: '25px', color: 'white', fontSize: '16px', fontWeight: '500'}}>
                Columbus
              </div>
              <div style={{backgroundColor: 'rgba(255,255,255,0.15)', padding: '12px 24px', borderRadius: '25px', color: 'white', fontSize: '16px', fontWeight: '500'}}>
                Tupelo
              </div>
              <div style={{backgroundColor: 'rgba(255,255,255,0.15)', padding: '12px 24px', borderRadius: '25px', color: 'white', fontSize: '16px', fontWeight: '500'}}>
                Oxford
              </div>
              <div style={{backgroundColor: 'rgba(255,255,255,0.15)', padding: '12px 24px', borderRadius: '25px', color: 'white', fontSize: '16px', fontWeight: '500'}}>
                Tuscaloosa
              </div>
            </div>
          </div>
          
          {/* Key Benefits */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '50px', maxWidth: '900px', margin: '0 auto 50px'}}>
            <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '30px 20px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.2)'}}>
              <div style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>
                <CheckCircleIcon style={{width: '40px', height: '40px', color: 'white'}} />
              </div>
              <h3 style={{color: 'white', fontSize: '20px', fontWeight: '600', marginBottom: '10px'}}>100% Satisfaction</h3>
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '16px'}}>Every project completed to perfection</p>
            </div>
            <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '30px 20px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.2)'}}>
              <div style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>
                <StarIcon style={{width: '40px', height: '40px', color: 'white'}} />
              </div>
              <h3 style={{color: 'white', fontSize: '20px', fontWeight: '600', marginBottom: '10px'}}>Best Quality Films</h3>
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '16px'}}>Avery Dennison premium window films</p>
            </div>
            <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '30px 20px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.2)'}}>
              <div style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>
                <ShieldCheckIcon style={{width: '40px', height: '40px', color: 'white'}} />
              </div>
              <h3 style={{color: 'white', fontSize: '20px', fontWeight: '600', marginBottom: '10px'}}>Expert Installation</h3>
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '16px'}}>Professional installation with care</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginBottom: '40px'}}>
            <button style={{
              backgroundColor: 'white',
              color: '#dc2626',
              padding: '18px 36px',
              fontSize: '18px',
              fontWeight: 'bold',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f3f4f6';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => window.location.href = '/contact#quote-form'}>
              Get Your Free Estimate
            </button>
            <button style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '18px 36px',
              fontSize: '18px',
              fontWeight: 'bold',
              borderRadius: '50px',
              border: '2px solid white',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#dc2626';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(0)';
            }}>
              View Our Gallery
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', flexWrap: 'wrap'}}>
            <div style={{textAlign: 'center'}}>
              <div style={{color: 'white', fontSize: '24px', fontWeight: 'bold'}}>100%</div>
              <div style={{color: 'rgba(255,255,255,0.8)', fontSize: '14px'}}>Satisfaction</div>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{color: 'white', fontSize: '24px', fontWeight: 'bold'}}>5</div>
              <div style={{color: 'rgba(255,255,255,0.8)', fontSize: '14px'}}>Cities Served</div>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{color: 'white', fontSize: '24px', fontWeight: 'bold'}}>Free</div>
              <div style={{color: 'rgba(255,255,255,0.8)', fontSize: '14px'}}>Estimates</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
