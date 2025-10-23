import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const Residential = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('solar-control');

  const handleGetQuote = () => {
    navigate('/contact', { state: { activeTab: 'quote' } });
  };

  const handleContactUs = () => {
    navigate('/contact', { state: { activeTab: 'contact' } });
  };

  return (
    <>
      <Helmet>
        <title>Residential Window Tinting | Remedi Window Solutions in North Mississippi and West Alabama</title>
        <meta
          name="description"
          content="Enhance comfort, privacy, and energy efficiency with professional residential window tinting by Remedi Window Solutions. We offer solar control, security, privacy, and decorative window films using Avery Dennison's premium materials for homes across North Mississippi and West Alabama."
        />
        <meta
          name="keywords"
          content="residential window tinting, home window tinting, window film installation, Avery Dennison window films, solar control films, privacy window films, security window films, decorative window films, UV protection window tint, house window film, North Mississippi, West Alabama, Starkville, Columbus, Tupelo, Oxford, Tuscaloosa"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Residential Window Tinting | Remedi Window Solutions in North Mississippi and West Alabama"
        />
        <meta
          property="og:description"
          content="Remedi Window Solutions provides residential window tinting for privacy, solar control, and UV protection. Serving homes across North Mississippi and West Alabama with high-quality Avery Dennison window films."
        />
        <meta property="og:url" content="https://remediwindowsolutions.com/residential" />
        <meta property="og:site_name" content="Remedi Window Solutions" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={`${import.meta.env.BASE_URL}images/icons-logo/remedi-logo.svg`} />
      </Helmet>
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/residential-solutions/hero-residential.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full pt-20">
          <div className="container-custom">
            <div className="text-center">
               <h1 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-white animate-fade-in">
                 Residential Window Solutions
               </h1>
               <p className="text-sm md:text-base mb-8 text-white max-w-3xl mx-auto animate-slide-up">
                 Transform your home with residential window tinting that enhances comfort, privacy, and energy efficiency. Our home window film solutions provide UV protection, solar control, and lasting performance while helping you achieve significant energy savings.
               </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="md" 
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={handleGetQuote}
                >
                  Get Free Quote
                </Button>
                <button 
                  style={{
                    backgroundColor: 'transparent',
                    color: 'white',
                    padding: '12px 24px',
                    fontSize: '16px',
                    fontWeight: '500',
                    border: '2px solid white',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.color = '#dc2626';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = 'white';
                  }}
                  onClick={handleContactUs}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Residential Solutions Section */}
      <Section background="gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Residential Window Film Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Every home has its own needs for comfort, privacy, and energy efficiency. Our residential window films help create a safer and more comfortable living space while keeping your home bright and welcoming. Explore our available options to see how each film can improve your home and fit your lifestyle.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: 'solar-control', name: 'Solar Control Films' },
              { id: 'privacy', name: 'Privacy Films' },
              { id: 'security', name: 'Security Films' },
              { id: 'decorative', name: 'Decorative Films' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md ${
                  activeTab === tab.id
                    ? ''
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600'
                }`}
                style={activeTab === tab.id ? {
                  backgroundColor: '#dc2626',
                  color: 'white',
                  border: '2px solid #dc2626',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                } : {}}
                onMouseOver={(e) => {
                  if (activeTab === tab.id) {
                    e.target.style.backgroundColor = '#b91c1c';
                    e.target.style.color = 'white';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeTab === tab.id) {
                    e.target.style.backgroundColor = '#dc2626';
                    e.target.style.color = 'white';
                  }
                }}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {/* Solar Control Films */}
            {activeTab === 'solar-control' && (
              <div>
                 <div className="mb-8">
                   <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                     Solar Control Films
                   </h3>
                   <Card className="p-6 mb-8">
                     <div className="w-full">
                       <p className="text-gray-600 mb-4">
                         Experience the benefits of residential window tinting that keeps your home cooler, safer, and more energy efficient. Our solar control window films for homes reduce heat, glare, and UV exposure while maintaining natural light and outdoor visibility. These films are ideal for home window tinting projects with large windows or sun-facing rooms, creating a comfortable indoor environment throughout the year.
                       </p>
                       <p className="text-gray-600">
                         These advanced house window films provide reliable UV protection window tint that safeguards furniture, flooring, and interiors from fading while providing lasting comfort, clarity, and balance.
                       </p>
                     </div>
                   </Card>
                 </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                   <Card className="p-6">
                     <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                       Energy Efficiency
                     </h4>
                     <p className="text-gray-600 mb-4">
                       Our solar control films help reduce cooling costs and improve comfort year-round.
                     </p>
                     <ul className="space-y-2 text-sm text-gray-600">
                       <li>• Blocks up to 99 percent of harmful UV rays</li>
                       <li>• Reduces solar heat gain by 60 to 80 percent</li>
                       <li>• Minimizes glare and hot spots</li>
                       <li>• Maintains natural light and visibility</li>
                     </ul>
                   </Card>

                   <Card className="p-6">
                     <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                       Comfort and Protection
                     </h4>
                     <p className="text-gray-600 mb-4">
                       Protect your family and interiors with high-performance UV protection window tint that improves indoor comfort.
                     </p>
                     <ul className="space-y-2 text-sm text-gray-600">
                       <li>• Prevents fading of furniture and flooring</li>
                       <li>• Reduces glare from screens and surfaces</li>
                       <li>• Balances indoor temperature consistently</li>
                       <li>• Enhances overall comfort and air quality</li>
                     </ul>
                   </Card>
                </div>

                 <Card className="p-6">
                   <h4 className="text-xl font-heading font-bold text-gray-900 text-center mb-6">
                     Popular Solar Control Options
                   </h4>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                     <div className="text-center">
                       <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                         Clear Films
                       </div>
                       <p className="text-black text-sm">Invisible protection that maintains natural light and clear views</p>
                     </div>
                     <div className="text-center">
                       <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                         Tinted Films
                       </div>
                       <p className="text-black text-sm">Subtle tone with effective heat rejection for comfort and efficiency</p>
                     </div>
                     <div className="text-center">
                       <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                         Reflective Films
                       </div>
                       <p className="text-black text-sm">Enhanced privacy and high-level heat control for modern homes</p>
                     </div>
                   </div>
                   <p className="text-gray-600 text-center">
                     All films use Avery Dennison's trusted materials, ensuring lasting performance and clarity for residential and house window film applications across North Mississippi and West Alabama.
                   </p>
                 </Card>
              </div>
            )}

            {/* Privacy Films */}
            {activeTab === 'privacy' && (
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                    Privacy Films
                  </h3>
                  <Card className="p-6 mb-8">
                    <div className="w-full">
                      <p className="text-gray-600 mb-4">
                        Enhance your privacy while keeping your interiors bright and comfortable. Our privacy window films for homes maintain natural light while adding comfort, protection, and style. Choose from several designs that match your home's aesthetic while improving security and energy control.
                      </p>
                      <p className="text-gray-600">
                        These residential privacy films are ideal for bathrooms, bedrooms, and street-facing windows. They provide a practical home window tinting solution that balances visibility and privacy throughout the day.
                      </p>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      Frosted Glass Effect
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Create a soft frosted appearance that offers privacy while allowing natural light to pass through.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Suitable for bathrooms, offices, and bedrooms</li>
                      <li>• Maintains consistent natural light transmission</li>
                      <li>• Simple to clean and maintain</li>
                      <li>• Available in multiple frosted window film styles and finishes</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      One Way Vision
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Enjoy clear indoor visibility while limiting outside view during daylight hours.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Ideal for street-facing windows and open areas</li>
                      <li>• Maintains outward visibility and brightness</li>
                      <li>• Provides daytime privacy and light control</li>
                      <li>• Reduces glare and heat buildup indoors</li>
                    </ul>
                  </Card>
                </div>

                <Card className="p-6">
                  <h4 className="text-xl font-heading font-bold text-gray-900 text-center mb-6">
                    Privacy Film Options
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                    <div className="text-center">
                      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Frosted
                      </div>
                      <p className="text-black text-sm">Complete privacy with light diffusion</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Etched
                      </div>
                      <p className="text-black text-sm">Decorative patterns and textures</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Mirrored
                      </div>
                      <p className="text-black text-sm">One-way vision with reflective surface</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Patterned
                      </div>
                      <p className="text-black text-sm">Custom designs and logos</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-center">
                    All films use Avery Dennison's trusted materials, ensuring lasting quality and visual clarity for residential and house window film applications across North Mississippi and West Alabama.
                  </p>
                </Card>
              </div>
            )}

            {/* Security Films */}
            {activeTab === 'security' && (
              <div>
                 <div className="mb-8">
                   <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                     Security Films
                   </h3>
                   <Card className="p-6 mb-8">
                     <div className="w-full">
                       <p className="text-gray-600 mb-4">
                         Enhance your safety and peace of mind with security window films designed to strengthen glass and provide protection during break-ins, storms, and accidental impacts. Our residential window tinting solutions improve home safety by holding glass together when shattered while maintaining clear visibility and style.
                       </p>
                       <p className="text-gray-600">
                         These advanced security films provide reliable protection for your home, reducing risks from forced entry, severe weather, and everyday accidents while preserving comfort and clarity.
                       </p>
                     </div>
                   </Card>
                 </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                   <Card className="p-6">
                     <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                       Break-In Protection
                     </h4>
                     <p className="text-gray-600 mb-4">
                       Keep your family and property secure with durable security window films for homes that make glass harder to penetrate.
                     </p>
                     <ul className="space-y-2 text-sm text-gray-600">
                       <li>• Holds glass firmly in place when broken</li>
                       <li>• Delays and discourages forced entry</li>
                       <li>• Minimizes injury from shattered glass</li>
                       <li>• Strengthens weak entry points</li>
                     </ul>
                   </Card>

                   <Card className="p-6">
                     <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                       Storm Protection
                     </h4>
                     <p className="text-gray-600 mb-4">
                       Reduce damage and danger during severe weather with strong safety window films that prevent glass from turning into projectiles.
                     </p>
                     <ul className="space-y-2 text-sm text-gray-600">
                       <li>• Keeps glass bonded during strong winds and impacts</li>
                       <li>• Protects interiors from debris and water damage</li>
                       <li>• Reduces risk of flying glass</li>
                       <li>• Meets residential storm safety requirements</li>
                     </ul>
                   </Card>
                </div>

                 <Card className="p-6">
                   <h4 className="text-xl font-heading font-bold text-gray-900 text-center mb-6">
                     Security Film Thickness Options
                   </h4>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                     <div className="text-center">
                       <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                         4 Mil
                       </div>
                       <p className="text-gray-600 text-sm">Standard protection for residential windows and low-risk areas</p>
                     </div>
                     <div className="text-center">
                       <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                         7 Mil
                       </div>
                       <p className="text-gray-600 text-sm">Enhanced safety for homes with increased exposure or higher security needs</p>
                     </div>
                     <div className="text-center">
                       <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                         14 Mil
                       </div>
                       <p className="text-gray-600 text-sm">Maximum protection for vulnerable windows and severe weather-prone regions</p>
                     </div>
                   </div>
                   <p className="text-gray-600 text-center">
                     All films are made using Avery Dennison's trusted materials, providing long-lasting durability and clear visibility for residential and house window film installations throughout North Mississippi and West Alabama.
                   </p>
                 </Card>
              </div>
            )}

            {/* Decorative Films */}
            {activeTab === 'decorative' && (
              <div>
                 <div className="mb-8">
                   <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                     Decorative Films
                   </h3>
                   <Card className="p-6 mb-8">
                     <div className="w-full">
                       <p className="text-gray-600 mb-4">
                         Add personality and style to your home with decorative window films that combine function and design. Our films provide privacy, light control, and visual appeal for any room while complementing your interior decor.
                       </p>
                       <p className="text-gray-600">
                         These residential window tinting solutions help create unique designs and enhance your home's overall aesthetic without replacing glass. These high-quality decorative films help you achieve a custom look that reflects your personal taste with lasting performance and clarity.
                       </p>
                     </div>
                   </Card>
                 </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                   <Card className="p-6">
                     <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                       Custom Designs
                     </h4>
                     <p className="text-gray-600 mb-4">
                       Create unique window treatments with personalized graphics, logos, or artistic patterns.
                     </p>
                     <ul className="space-y-2 text-sm text-gray-600">
                       <li>• Custom patterns and layouts</li>
                       <li>• Company logos and branding elements</li>
                       <li>• Artistic or abstract designs</li>
                       <li>• Complements any home or office style</li>
                     </ul>
                   </Card>

                   <Card className="p-6">
                     <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                       Pattern Options
                     </h4>
                     <p className="text-gray-600 mb-4">
                       Select from a broad range of decorative window film patterns and textures designed to fit your space.
                     </p>
                     <ul className="space-y-2 text-sm text-gray-600">
                       <li>• Geometric and structural shapes</li>
                       <li>• Nature-inspired and organic designs</li>
                       <li>• Modern and contemporary finishes</li>
                       <li>• Classic and timeless patterns</li>
                     </ul>
                   </Card>
                </div>

                 <Card className="p-6">
                   <h4 className="text-xl font-heading font-bold text-gray-900 text-center mb-6">
                     Popular Decorative Styles
                   </h4>
                   <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                     <div className="text-center">
                       <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                         Geometric
                       </div>
                       <p className="text-black text-sm">Modern lines and structural designs</p>
                     </div>
                     <div className="text-center">
                       <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                         Nature
                       </div>
                       <p className="text-black text-sm">Leaf-inspired and organic patterns</p>
                     </div>
                     <div className="text-center">
                       <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                         Abstract
                       </div>
                       <p className="text-black text-sm">Artistic visuals with creative forms</p>
                     </div>
                     <div className="text-center">
                       <div className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                         Custom
                       </div>
                       <p className="text-black text-sm">Tailored designs made specifically for your home</p>
                     </div>
                   </div>
                   <p className="text-gray-600 text-center">
                     All films use Avery Dennison's trusted materials, ensuring visual clarity, quality, and long-lasting beauty for residential and house window film applications across North Mississippi and West Alabama.
                   </p>
                 </Card>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Residential Window Films?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Our residential window film solutions provide numerous benefits that enhance your home's comfort, 
              security, and energy efficiency while protecting your investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#fecaca'}}>
                <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                Energy Savings
              </h3>
              <p className="text-black">
                Reduce cooling costs by up to 30% and improve your home's energy efficiency with our premium solar control films.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#dbeafe'}}>
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                UV Protection
              </h3>
              <p className="text-black">
                Block up to 99% of harmful UV rays to protect your family's health and prevent fading of furnishings.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#dcfce7'}}>
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                Enhanced Security
              </h3>
              <p className="text-black">
                Improve your home's security with films that hold glass together when broken, deterring break-ins.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#e9d5ff'}}>
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                Privacy Control
              </h3>
              <p className="text-black">
                Enjoy privacy without sacrificing natural light with our variety of privacy film options.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#fef3c7'}}>
                <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                Enhanced Comfort
              </h3>
              <p className="text-black">
                Reduce glare, eliminate hot spots, and create more comfortable living spaces year-round.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#e0e7ff'}}>
                <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                Aesthetic Appeal
              </h3>
              <p className="text-black">
                Enhance your home's appearance with decorative films and improve your property's curb appeal.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Get a free consultation and quote for your residential window film project. Our experts will help you 
              choose the perfect solution for your home's needs and budget.
            </p>
            
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginBottom: '40px'}}>
              <button style={{
                backgroundColor: 'white',
                color: '#dc2626',
                padding: '18px 40px',
                fontSize: '20px',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#f3f4f6';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
              }}
              onClick={handleGetQuote}
              >
                GET FREE QUOTE NOW
              </button>
              <button style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '18px 40px',
                fontSize: '20px',
                fontWeight: 'bold',
                border: '2px solid white',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#dc2626';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'white';
              }}
              onClick={handleContactUs}
              >
                CONTACT OUR EXPERTS
              </button>
            </div>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '50px', maxWidth: '900px', margin: '30px auto 50px'}}>
              <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '30px 20px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.2)'}}>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>
                  <svg style={{width: '40px', height: '40px', color: 'white'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 style={{color: 'white', fontSize: '20px', fontWeight: '600', marginBottom: '10px', textAlign: 'center'}}>Free Consultation</h3>
                <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '16px', textAlign: 'center'}}>Professional assessment to find the perfect solution for your home</p>
              </div>
              
              <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '30px 20px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.2)'}}>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>
                  <svg style={{width: '40px', height: '40px', color: 'white'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 style={{color: 'white', fontSize: '20px', fontWeight: '600', marginBottom: '10px', textAlign: 'center'}}>Energy Savings</h3>
                <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '16px', textAlign: 'center'}}>Reduce cooling costs and improve energy efficiency</p>
              </div>
              
              <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '30px 20px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.2)'}}>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>
                  <svg style={{width: '40px', height: '40px', color: 'white'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 style={{color: 'white', fontSize: '20px', fontWeight: '600', marginBottom: '10px', textAlign: 'center'}}>Enhanced Comfort</h3>
                <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '16px', textAlign: 'center'}}>Enjoy better privacy, UV protection, and comfort</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Residential;
