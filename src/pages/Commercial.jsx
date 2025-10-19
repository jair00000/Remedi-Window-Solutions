import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const Commercial = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('energy-efficiency');

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
            backgroundImage: `url('/images/commercial-solutions/hero-commercial.webp')`,
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
                Commercial Window Solutions
              </h1>
              <p className="text-sm md:text-base mb-8 text-white max-w-3xl mx-auto">
                Enhance your business with professional window films that improve energy efficiency, 
                security, and employee comfort while reducing operational costs.
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

      {/* Commercial Solutions Section */}
      <Section background="gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Commercial Window Film Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Discover our comprehensive range of commercial window films designed to enhance your business operations, 
              reduce costs, and create a more comfortable and productive work environment.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: 'energy-efficiency', name: 'Energy Efficiency' },
              { id: 'employee-comfort', name: 'Employee Comfort' },
              { id: 'security-safety', name: 'Security & Safety' },
              { id: 'branding-aesthetics', name: 'Branding & Aesthetics' }
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
            {/* Energy Efficiency */}
            {activeTab === 'energy-efficiency' && (
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                    Energy Efficiency Solutions
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Reduce operational costs and improve building efficiency with our advanced solar control films. 
                    Significant energy savings while maintaining professional appearance and natural light.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      Cost Savings
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Reduce HVAC costs by up to 40% while improving building energy efficiency ratings and sustainability.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Reduce cooling costs by 25-40%</li>
                      <li>• Lower heating costs in winter months</li>
                      <li>• Improve LEED certification scores</li>
                      <li>• Qualify for energy efficiency rebates</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      Performance Benefits
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Advanced films provide superior heat rejection while maintaining optimal light transmission for productivity.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Block up to 99% of UV radiation</li>
                      <li>• Reduce solar heat gain by 60-80%</li>
                      <li>• Maintain high visible light transmission</li>
                      <li>• Long-term durability and performance</li>
                    </ul>
                  </Card>
                </div>

                <Card className="p-6">
                  <h4 className="text-xl font-heading font-bold text-gray-900 text-center mb-6">
                    Commercial Film Options
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Spectrally Selective
                      </div>
                      <p className="text-gray-600 text-sm">Maximum light transmission with superior heat rejection</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Dual Reflective
                      </div>
                      <p className="text-gray-600 text-sm">High performance with professional appearance</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Ceramic Films
                      </div>
                      <p className="text-gray-600 text-sm">Premium performance with clear visibility</p>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Employee Comfort */}
            {activeTab === 'employee-comfort' && (
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                    Employee Comfort & Productivity
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Create a more comfortable work environment that enhances employee productivity, reduces eye strain, 
                    and eliminates hot spots and glare issues.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      Glare Reduction
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Eliminate screen glare and hot spots to create a more comfortable workspace for your employees.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Reduce eye strain and fatigue</li>
                      <li>• Improve computer screen visibility</li>
                      <li>• Eliminate hot spots and uneven lighting</li>
                      <li>• Create more consistent work environment</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      Temperature Control
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Maintain consistent indoor temperatures and reduce the need for constant HVAC adjustments.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• More even temperature distribution</li>
                      <li>• Reduced HVAC cycling and wear</li>
                      <li>• Improved air quality and circulation</li>
                      <li>• Enhanced employee comfort levels</li>
                    </ul>
                  </Card>
                </div>

                <Card className="p-6">
                  <h4 className="text-xl font-heading font-bold text-gray-900 text-center mb-6">
                    Comfort Benefits
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
                        Reduced Glare
                      </div>
                      <p className="text-gray-600 text-xs">Eliminate screen glare and eye strain</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
                        Even Temperature
                      </div>
                      <p className="text-gray-600 text-xs">Consistent climate control</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
                        Natural Light
                      </div>
                      <p className="text-gray-600 text-xs">Maintain daylight and views</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
                        Productivity
                      </div>
                      <p className="text-gray-600 text-xs">Enhanced work performance</p>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Security & Safety */}
            {activeTab === 'security-safety' && (
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                    Security & Safety Solutions
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Protect your business, employees, and assets with our security window films. 
                    Deter break-ins, protect against storms, and ensure workplace safety.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      Break-In Protection
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Deter criminals and protect your business with films that make windows much harder to break through.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Delay forced entry attempts by minutes</li>
                      <li>• Reduce risk of theft and vandalism</li>
                      <li>• Lower insurance premiums</li>
                      <li>• Provide employee peace of mind</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      Storm Protection
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Protect your business from severe weather with films that prevent dangerous glass projectiles.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Hold glass together during storms</li>
                      <li>• Reduce wind and debris damage</li>
                      <li>• Protect against flying glass shards</li>
                      <li>• Meet hurricane safety standards</li>
                    </ul>
                  </Card>
                </div>

                <Card className="p-6">
                  <h4 className="text-xl font-heading font-bold text-gray-900 text-center mb-6">
                    Security Film Options
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        4 Mil Security
                      </div>
                      <p className="text-gray-600 text-sm">Basic protection for standard windows</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        7 Mil Security
                      </div>
                      <p className="text-gray-600 text-sm">Enhanced protection for high-risk areas</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        14 Mil Security
                      </div>
                      <p className="text-gray-600 text-sm">Maximum protection for vulnerable locations</p>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Branding & Aesthetics */}
            {activeTab === 'branding-aesthetics' && (
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                    Branding & Aesthetic Solutions
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Enhance your business image and brand presence with decorative and privacy films. 
                    Create professional spaces that reflect your company's values and aesthetic.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      Brand Enhancement
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Showcase your brand and create professional spaces that impress clients and visitors.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Custom logos and graphics</li>
                      <li>• Professional meeting room privacy</li>
                      <li>• Enhanced curb appeal</li>
                      <li>• Coordinated interior design</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      Privacy Solutions
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Create private spaces for meetings, interviews, and confidential discussions.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Conference room privacy</li>
                      <li>• Executive office confidentiality</li>
                      <li>• Reception area aesthetics</li>
                      <li>• Break room comfort</li>
                    </ul>
                  </Card>
                </div>

                <Card className="p-6">
                  <h4 className="text-xl font-heading font-bold text-gray-900 text-center mb-6">
                    Aesthetic Options
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
                        Frosted
                      </div>
                      <p className="text-gray-600 text-xs">Clean, professional privacy</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
                        Custom Graphics
                      </div>
                      <p className="text-gray-600 text-xs">Brand logos and designs</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
                        Patterned
                      </div>
                      <p className="text-gray-600 text-xs">Decorative patterns and textures</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
                        One-Way Vision
                      </div>
                      <p className="text-gray-600 text-xs">Professional appearance</p>
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
              Why Choose Commercial Window Films?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Our commercial window film solutions provide measurable benefits that improve your bottom line, 
              enhance employee satisfaction, and protect your business investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#fecaca'}}>
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                Cost Savings
              </h3>
              <p className="text-black">
                Reduce energy costs by up to 40% with our advanced solar control films, providing significant ROI.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#dbeafe'}}>
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                Energy Efficiency
              </h3>
              <p className="text-black">
                Improve building efficiency ratings and qualify for energy rebates and LEED certification points.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#dcfce7'}}>
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                Employee Comfort
              </h3>
              <p className="text-black">
                Create comfortable work environments that reduce eye strain and improve employee productivity.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#e9d5ff'}}>
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                Enhanced Security
              </h3>
              <p className="text-black">
                Protect your business with security films that deter break-ins and provide storm protection.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#fef3c7'}}>
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                Professional Appearance
              </h3>
              <p className="text-black">
                Enhance your business image with professional window treatments that impress clients and visitors.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#e0e7ff'}}>
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                Quick ROI
              </h3>
              <p className="text-black">
                See return on investment within 2-3 years through energy savings and reduced maintenance costs.
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
              Ready to Enhance Your Business?
            </h2>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Get a free commercial consultation and quote for your business. Our experts will help you 
              choose the perfect solution to reduce costs, improve comfort, and enhance security.
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
                e.target.style.boxShadow = '0 6px 20px rgba(213,0,0,0.3)';
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
                <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '16px', textAlign: 'center'}}>Professional assessment for your business needs</p>
              </div>
              
              <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '30px 20px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.2)'}}>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>
                  <svg style={{width: '40px', height: '40px', color: 'white'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 style={{color: 'white', fontSize: '20px', fontWeight: '600', marginBottom: '10px', textAlign: 'center'}}>Cost Savings</h3>
                <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '16px', textAlign: 'center'}}>Reduce energy costs and improve efficiency</p>
              </div>
              
              <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '30px 20px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.2)'}}>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>
                  <svg style={{width: '40px', height: '40px', color: 'white'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 style={{color: 'white', fontSize: '20px', fontWeight: '600', marginBottom: '10px', textAlign: 'center'}}>Enhanced Productivity</h3>
                <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '16px', textAlign: 'center'}}>Improve employee comfort and performance</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Commercial;
