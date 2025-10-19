import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/residential-solutions/hero-residential.webp')`,
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
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-white">
                Residential Window Solutions
              </h1>
              <p className="text-sm md:text-base mb-8 text-white max-w-3xl mx-auto">
                Transform your home with premium window films that enhance comfort, security, and energy efficiency. 
                Our residential solutions provide privacy, UV protection, and significant energy savings.
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
              Discover our comprehensive range of residential window films designed to enhance your home's comfort, 
              security, and energy efficiency while maintaining your home's aesthetic appeal.
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
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                    Solar Control Films
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Reduce heat, glare, and UV damage while maintaining natural light and views. 
                    Perfect for homes with large windows or sun-facing rooms.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      Energy Efficiency
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Reduce cooling costs by up to 30% while maintaining comfortable indoor temperatures year-round.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Blocks up to 99% of harmful UV rays</li>
                      <li>• Reduces solar heat gain by 60-80%</li>
                      <li>• Eliminates hot spots and glare</li>
                      <li>• Maintains natural light transmission</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      Comfort & Protection
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Protect your family and furnishings while enhancing indoor comfort and reducing eye strain.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Prevents fading of furniture and flooring</li>
                      <li>• Reduces glare on TVs and computer screens</li>
                      <li>• Creates more even temperature distribution</li>
                      <li>• Improves overall indoor air quality</li>
                    </ul>
                  </Card>
                </div>

                <Card className="p-6">
                  <h4 className="text-xl font-heading font-bold text-gray-900 text-center mb-6">
                    Popular Solar Control Options
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Clear Films
                      </div>
                      <p className="text-black text-sm">Invisible protection that maintains crystal clear views</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Tinted Films
                      </div>
                      <p className="text-black text-sm">Enhanced heat rejection with subtle color options</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Reflective Films
                      </div>
                      <p className="text-black text-sm">Maximum heat rejection with privacy benefits</p>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Privacy Films */}
            {activeTab === 'privacy' && (
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                    Privacy Films
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Enhance your privacy without sacrificing natural light. Choose from various styles 
                    to match your home's aesthetic while maintaining daytime privacy.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      Frosted Glass Effect
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Create a frosted glass appearance that provides privacy while allowing light to pass through.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Perfect for bathrooms and bedrooms</li>
                      <li>• Maintains natural light transmission</li>
                      <li>• Easy to clean and maintain</li>
                      <li>• Various patterns and designs available</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      One-Way Vision
                    </h4>
                    <p className="text-gray-600 mb-4">
                      See out clearly while preventing others from seeing in during daylight hours.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Ideal for street-facing windows</li>
                      <li>• Maintains outward visibility</li>
                      <li>• Provides daytime privacy</li>
                      <li>• Reduces solar heat gain</li>
                    </ul>
                  </Card>
                </div>

                <Card className="p-6">
                  <h4 className="text-xl font-heading font-bold text-gray-900 text-center mb-6">
                    Privacy Film Options
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
                        Frosted
                      </div>
                      <p className="text-gray-600 text-xs">Complete privacy with light diffusion</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
                        Etched
                      </div>
                      <p className="text-gray-600 text-xs">Decorative patterns and textures</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
                        Mirrored
                      </div>
                      <p className="text-gray-600 text-xs">One-way vision with reflective surface</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
                        Patterned
                      </div>
                      <p className="text-gray-600 text-xs">Custom designs and logos</p>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Security Films */}
            {activeTab === 'security' && (
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                    Security Films
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Protect your home with security window films that hold glass together when broken, 
                    providing protection against break-ins, storms, and accidents.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      Break-In Protection
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Deter burglars and protect your family with films that make windows much harder to break through.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Holds glass together when shattered</li>
                      <li>• Delays forced entry attempts</li>
                      <li>• Reduces risk of injury from glass shards</li>
                      <li>• Provides peace of mind</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      Storm Protection
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Protect your home from severe weather with films that prevent glass from becoming dangerous projectiles.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Holds glass in place during storms</li>
                      <li>• Reduces wind and debris damage</li>
                      <li>• Protects against flying glass shards</li>
                      <li>• Meets hurricane safety standards</li>
                    </ul>
                  </Card>
                </div>

                <Card className="p-6">
                  <h4 className="text-xl font-heading font-bold text-gray-900 text-center mb-6">
                    Security Film Thickness Options
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        4 Mil
                      </div>
                      <p className="text-gray-600 text-sm">Basic security for residential windows</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        7 Mil
                      </div>
                      <p className="text-gray-600 text-sm">Enhanced protection for high-risk areas</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        14 Mil
                      </div>
                      <p className="text-gray-600 text-sm">Maximum security for vulnerable windows</p>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Decorative Films */}
            {activeTab === 'decorative' && (
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                    Decorative Films
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Add style and personality to your home with decorative window films. 
                    Create unique designs, add privacy, and enhance your home's aesthetic appeal.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      Custom Designs
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Create unique window treatments with custom patterns, logos, or artistic designs.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Personalized patterns and graphics</li>
                      <li>• Company logos and branding</li>
                      <li>• Artistic and abstract designs</li>
                      <li>• Coordinate with home decor</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      Pattern Options
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Choose from a wide variety of patterns and textures to match your style.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Geometric patterns and shapes</li>
                      <li>• Nature-inspired designs</li>
                      <li>• Modern and contemporary styles</li>
                      <li>• Traditional and classic patterns</li>
                    </ul>
                  </Card>
                </div>

                <Card className="p-6">
                  <h4 className="text-xl font-heading font-bold text-gray-900 text-center mb-6">
                    Popular Decorative Styles
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
                        Geometric
                      </div>
                      <p className="text-gray-600 text-xs">Modern lines and shapes</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
                        Nature
                      </div>
                      <p className="text-gray-600 text-xs">Leaf and organic patterns</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
                        Abstract
                      </div>
                      <p className="text-gray-600 text-xs">Artistic and creative designs</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
                        Custom
                      </div>
                      <p className="text-gray-600 text-xs">Your own unique design</p>
                    </div>
                  </div>
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
