import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const Institutional = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('government-buildings');

  const handleGetQuote = () => {
    navigate('/contact', { state: { activeTab: 'quote' } });
  };

  const handleContactUs = () => {
    navigate('/contact', { state: { activeTab: 'contact' } });
  };

  return (
    <>
      <Helmet>
        <title>Government and School Window Tinting | Remedi Window Solutions in North Mississippi and West Alabama</title>
        <meta
          name="description"
          content="Remedi Window Solutions provides professional window film installations for government buildings, schools, and public institutions. Enhance security, safety, and energy efficiency with Avery Dennison's certified window films across North Mississippi and West Alabama."
        />
        <meta
          name="keywords"
          content="government window tinting, school window tinting, government and school window film, window film installations for government buildings, security window film for schools, safety window tint, shatterproof window film, heat control window film, anti glare window film, Avery Dennison window films, North Mississippi, West Alabama, Starkville, Columbus, Tupelo, Oxford, Tuscaloosa"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Government and School Window Tinting | Remedi Window Solutions in North Mississippi and West Alabama"
        />
        <meta
          property="og:description"
          content="Professional government and school window film installations by Remedi Window Solutions. Improve security, energy efficiency, and safety with Avery Dennison window films in North Mississippi and West Alabama."
        />
        <meta property="og:url" content="https://remediwindowsolutions.com/government-and-schools" />
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
            backgroundImage: `url(${import.meta.env.BASE_URL}images/government-schools/hero-institution.jpg)`,
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
                Government & Schools Window Solutions
              </h1>
              <p className="text-sm md:text-base mb-8 text-white max-w-3xl mx-auto animate-slide-up">
                Professional window film solutions for government buildings, schools, and public institutions that enhance security, energy efficiency, and safety while meeting strict compliance and performance requirements. Our government and school window tinting improves comfort, protection, and sustainability for every facility.
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

      {/* Institutional Solutions Section */}
      <Section background="gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Government & Schools Window Film Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Public buildings and educational facilities face strict standards for safety, security, and efficiency. Our window film solutions help meet these requirements while creating safer, more comfortable, and energy-efficient spaces for staff, students, and visitors. Each film is designed for long-term reliability and easy maintenance, ensuring consistent performance for years to come.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mt-4">
              Explore our specialized options below to learn how window films can strengthen protection, improve comfort, and support compliance across your facility.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: 'government-buildings', name: 'Government Buildings' },
              { id: 'schools-education', name: 'Schools & Education' },
              { id: 'security-compliance', name: 'Security & Compliance' },
              { id: 'energy-efficiency', name: 'Energy Efficiency' }
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
            {/* Government Buildings */}
            {activeTab === 'government-buildings' && (
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                    Government Building Solutions
                  </h3>
                  <Card className="p-6 mb-8">
                    <div className="w-full">
                      <p className="text-gray-600 mb-4">
                        Enhance security, comfort, and energy efficiency in public facilities with government and school window tinting designed for performance and compliance. Our window film installations for schools and municipal buildings provide long-lasting protection, privacy, and energy savings while maintaining professional appearance and natural light.
                      </p>
                      <p className="text-gray-600">
                        Using certified safety and solar control films, we help meet federal and state requirements for security window films for schools, offering durable solutions that improve safety, sustainability, and comfort in every public environment.
                      </p>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      Security and Safety
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Protect public buildings, classrooms, and offices with shatterproof and safety window films that meet government and institutional standards.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Blast-resistant options for added protection</li>
                      <li>• Delays and deters forced entry attempts</li>
                      <li>• Reduces hazards from glass breakage</li>
                      <li>• Meets national safety and security certifications</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      Energy Cost Reduction
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Lower utility expenses and improve building efficiency with heat control window films that regulate indoor temperature while preserving visibility.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Reduces cooling costs by 25 to 40 percent</li>
                      <li>• Improves energy performance ratings</li>
                      <li>• Qualifies for local and federal rebate programs</li>
                      <li>• Provides sustainable, long-term energy management</li>
                    </ul>
                  </Card>
                </div>

                <Card className="p-6">
                  <h4 className="text-xl font-heading font-bold text-gray-900 text-center mb-6">
                    Government Building Applications
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Courthouses
                      </div>
                      <p className="text-gray-600 text-sm">Enhanced privacy and security for judicial facilities</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        City Halls
                      </div>
                      <p className="text-gray-600 text-sm">Professional appearance and improved energy performance</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Police Stations
                      </div>
                      <p className="text-gray-600 text-sm">Added protection with security window films for schools and government offices</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Public Libraries
                      </div>
                      <p className="text-gray-600 text-sm">Comfort and anti glare window films for a productive environment</p>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-gray-600 text-sm">
                      All films are made with Avery Dennison's trusted materials, ensuring durability, safety, and clarity for government and school window film installations throughout North Mississippi and West Alabama, including Starkville, Columbus, Tupelo, Oxford, and Tuscaloosa.
                    </p>
                  </div>
                </Card>
              </div>
            )}

            {/* Schools & Education */}
            {activeTab === 'schools-education' && (
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                    Schools & Education Facilities
                  </h3>
                  <Card className="p-6 mb-8">
                    <div className="w-full">
                      <p className="text-gray-600 mb-4">
                        Create safer, more comfortable learning environments with school window tinting designed for classrooms, libraries, and administrative buildings. Our school window film installations improve comfort, security, and energy efficiency while maintaining natural daylight and a professional appearance.
                      </p>
                      <p className="text-gray-600">
                        Using certified safety and heat control window films, we provide long-lasting protection that meets institutional standards and supports a productive educational environment for both students and staff.
                      </p>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      Student Safety
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Protect students and staff with durable security window films for schools that keep glass intact during impact or forced entry.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Prevents injuries from shattered glass</li>
                      <li>• Deters vandalism and break-ins</li>
                      <li>• Meets federal and local school safety guidelines</li>
                      <li>• Creates a safer learning environment</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      Learning Environment
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Improve classroom comfort and focus with anti glare window films and UV protection tint that reduce distractions and protect school property.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Reduces glare on whiteboards, screens, and devices</li>
                      <li>• Prevents heat buildup and hot spots</li>
                      <li>• Protects equipment and furnishings from UV damage</li>
                      <li>• Maintains balanced daylight and indoor brightness</li>
                    </ul>
                  </Card>
                </div>

                <Card className="p-6">
                  <h4 className="text-xl font-heading font-bold text-gray-900 text-center mb-6">
                    Educational Facility Applications
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Classrooms
                      </div>
                      <p className="text-gray-600 text-sm">Comfort, glare reduction, and safety for students and teachers</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Gymnasiums
                      </div>
                      <p className="text-gray-600 text-sm">Improved cooling and UV protection for high-activity areas</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Libraries
                      </div>
                      <p className="text-gray-600 text-sm">Consistent lighting and anti glare window tint for reading comfort</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Administration
                      </div>
                      <p className="text-gray-600 text-sm">Professional appearance with energy savings and temperature control</p>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-gray-600 text-sm">
                      All films are made with Avery Dennison's trusted materials, ensuring clarity, strength, and efficiency for school window tinting and safety window film installations across North Mississippi and West Alabama, including Starkville, Columbus, Tupelo, Oxford, and Tuscaloosa.
                    </p>
                  </div>
                </Card>
              </div>
            )}

            {/* Security & Compliance */}
            {activeTab === 'security-compliance' && (
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                    Security & Compliance Solutions
                  </h3>
                  <Card className="p-6 mb-8">
                    <div className="w-full">
                      <p className="text-gray-600 mb-4">
                        Meet strict federal and institutional standards with government and school window film solutions designed for safety, security, and compliance. Our security window films for government buildings and schools provide proven protection against impacts, storms, and unauthorized entry while maintaining clear visibility and architectural aesthetics.
                      </p>
                      <p className="text-gray-600">
                        With certified shatterproof window films, your facilities benefit from professional-grade materials, precise installation, and full compliance documentation for both safety and performance.
                      </p>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      Compliance Standards
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Our safety window tints are tested and approved under multiple government and institutional compliance codes.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• ASTM E1996-17 compliant materials</li>
                      <li>• Meets hurricane and severe weather protection standards</li>
                      <li>• Fire and building safety code compliance</li>
                      <li>• Supports ADA and accessibility requirements</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      Professional Documentation
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Ensure transparency and accountability with complete project documentation and certifications.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Installation and compliance certificates included</li>
                      <li>• Manufacturer and installer warranty documentation</li>
                      <li>• Verification and inspection reporting</li>
                      <li>• Maintenance and care instructions for long-term performance</li>
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
                        7 Mil Security
                      </div>
                      <p className="text-gray-600 text-sm">Standard safety and security for most public facilities</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        14 Mil Security
                      </div>
                      <p className="text-gray-600 text-sm">Enhanced protection for high-risk and sensitive locations</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Blast Resistant
                      </div>
                      <p className="text-gray-600 text-sm">Maximum strength and performance for critical infrastructure</p>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-gray-600 text-sm">
                      All films are produced using Avery Dennison's trusted materials, offering durability, clarity, and verified compliance for government and school window film installations across North Mississippi and West Alabama, including Starkville, Columbus, Tupelo, Oxford, and Tuscaloosa.
                    </p>
                  </div>
                </Card>
              </div>
            )}

            {/* Energy Efficiency */}
            {activeTab === 'energy-efficiency' && (
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                    Energy Efficiency Solutions
                  </h3>
                  <Card className="p-6 mb-8">
                    <div className="w-full">
                      <p className="text-gray-600 mb-4">
                        Reduce operational costs and improve building efficiency with government and school window tinting designed for performance and sustainability. Our heat control window films help regulate indoor temperatures, reduce strain on HVAC systems, and maintain bright, comfortable environments for students, staff, and public employees.
                      </p>
                      <p className="text-gray-600">
                        With high-performance solar control films, facilities benefit from measurable energy savings, reduced glare, and long-term durability while supporting institutional energy goals.
                      </p>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      Cost Savings
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Significant energy cost reduction for government and educational facilities with tight operational budgets.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Reduce HVAC costs by 25 to 40 percent</li>
                      <li>• Lower maintenance and replacement expenses</li>
                      <li>• Qualify for energy efficiency rebate programs</li>
                      <li>• Improve building energy performance ratings</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      Environmental Benefits
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Support sustainability goals and reduce environmental impact with certified energy saving window tint solutions.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Reduce carbon footprint for public facilities</li>
                      <li>• Lower total energy consumption</li>
                      <li>• Support green building initiatives</li>
                      <li>• Contribute toward LEED certification credits</li>
                    </ul>
                  </Card>
                </div>

                <Card className="p-6">
                  <h4 className="text-xl font-heading font-bold text-gray-900 text-center mb-6">
                    Energy Efficiency Film Options
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Spectrally Selective
                      </div>
                      <p className="text-gray-600 text-sm">Maximum natural light with superior heat rejection</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Ceramic Films
                      </div>
                      <p className="text-gray-600 text-sm">Premium performance with clear visibility and durability</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Dual Reflective
                      </div>
                      <p className="text-gray-600 text-sm">Balanced performance with reduced glare and professional appearance</p>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-gray-600 text-sm">
                      All films use Avery Dennison's trusted materials, providing long-term clarity, energy savings, and performance for government and school window film installations across North Mississippi and West Alabama, including Starkville, Columbus, Tupelo, Oxford, and Tuscaloosa.
                    </p>
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
              Why Choose Institutional Window Films?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Our institutional window film solutions provide measurable benefits for government buildings, 
              schools, and public facilities while meeting strict compliance and safety requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#fecaca'}}>
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                Enhanced Security
              </h3>
              <p className="text-black">
                Protect government facilities and schools with security films that meet strict safety standards.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#dbeafe'}}>
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                Cost Reduction
              </h3>
              <p className="text-black">
                Reduce energy costs by up to 40% and improve building efficiency with measurable ROI.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#dcfce7'}}>
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                Energy Efficiency
              </h3>
              <p className="text-black">
                Improve building performance and qualify for energy rebates and green building certifications.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#e9d5ff'}}>
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                Compliance Ready
              </h3>
              <p className="text-black">
                Meet federal, state, and local government requirements with certified installation and documentation.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#fef3c7'}}>
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                Safety First
              </h3>
              <p className="text-black">
                Protect students, staff, and visitors with films that prevent glass shard injuries and enhance security.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#e0e7ff'}}>
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                Long-term Value
              </h3>
              <p className="text-black">
                Durable solutions that provide lasting benefits with minimal maintenance requirements.
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
              Ready to Enhance Your Institution?
            </h2>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Get a free institutional consultation and quote for your government building or school. Our experts will help you 
              choose the perfect solution to meet compliance requirements, improve security, and reduce costs.
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
                boxShadow: '0 4px 15px rgba tahoma,0,0,0,0.2)'
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
                <h3 style={{color: 'white', fontSize: '20px', fontWeight: '600', marginBottom: '10px', textAlign: 'center'}}>Compliance Ready</h3>
                <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '16px', textAlign: 'center'}}>Meet government and institutional requirements</p>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 style={{color: 'white', fontSize: '20px', fontWeight: '600', marginBottom: '10px', textAlign: 'center'}}>Enhanced Security</h3>
                <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '16px', textAlign: 'center'}}>Protect facilities and improve safety</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Institutional;
