import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Commercial Window Tinting | Remedi Window Solutions in North Mississippi and West Alabama</title>
        <meta
          name="description"
          content="Remedi Window Solutions provides professional commercial window tinting and building window film installations that improve energy efficiency, security, and employee comfort. Serving businesses across North Mississippi and West Alabama with premium Avery Dennison window films."
        />
        <meta
          name="keywords"
          content="commercial window tinting, office window tinting, building window film installation, Avery Dennison window films, energy saving window tint, decorative window films, security window films, reflective window films, privacy window films, solar control films, commercial glass film, North Mississippi, West Alabama, Starkville, Columbus, Tupelo, Oxford, Tuscaloosa"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Commercial Window Tinting | Remedi Window Solutions in North Mississippi and West Alabama"
        />
        <meta
          property="og:description"
          content="Enhance your business with professional commercial window tinting by Remedi Window Solutions. Improve energy efficiency, privacy, and safety with Avery Dennison window films across North Mississippi and West Alabama."
        />
        <meta property="og:url" content="https://remediwindowsolutions.com/commercial" />
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
            backgroundImage: `url(${import.meta.env.BASE_URL}images/commercial-solutions/hero-commercial.webp)`,
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
                Commercial Window Solutions
              </h1>
              <p className="text-sm md:text-base mb-8 text-white max-w-3xl mx-auto animate-slide-up">
                Enhance your business with commercial window tinting that improves energy efficiency, security, and employee comfort while reducing operational costs. Our building window film installations provide long-lasting performance, professional appearance, and reliable protection for every workspace.
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
            <p className="text-lg text-gray-600 dark:text-gray-300 dark:text-gray-300 max-w-4xl mx-auto">
              The right window film can make a big difference in how a business operates. From improving workplace comfort to lowering utility expenses, our commercial window films are designed to support both performance and appearance. Browse our film options to discover solutions that help your business save energy, protect interiors, and maintain a professional image.
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
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                    Energy Efficiency Solutions
                  </h3>
                  <Card className="p-6 mb-8">
                    <div className="w-full">
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Enhance building performance and reduce operational costs with commercial window tinting that improves comfort, appearance, and sustainability. Our energy saving window films help control heat and glare while maintaining clear visibility and a professional look.
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        These office window tinting solutions provide effective insulation for year-round energy savings and greater occupant comfort. Using advanced reflective and ceramic films, we ensure reliable performance, efficiency, and aesthetics for modern commercial spaces.
                      </p>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                      Cost Savings
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Lower energy use and operating expenses with durable energy saving films designed for performance.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li>• Reduce cooling costs by 25 to 40 percent</li>
                      <li>• Lower heating expenses during colder months</li>
                      <li>• Improve building energy ratings and sustainability</li>
                      <li>• Help qualify for energy efficiency rebate programs</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                      Performance Benefits
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Achieve comfort and clarity with advanced building window film installation that balances light transmission and heat rejection.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li>• Blocks up to 99 percent of UV rays</li>
                      <li>• Reduces solar heat gain by 60 to 80 percent</li>
                      <li>• Maintains natural light and productivity levels</li>
                      <li>• Delivers long-lasting durability and professional appearance</li>
                    </ul>
                  </Card>
                </div>

                <Card className="p-6">
                  <h4 className="text-xl font-heading font-bold text-gray-900 dark:text-white text-center mb-6">
                    Commercial Film Options
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-blue-100 text-blue-800 dark:bg-blue-500 dark:text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Spectrally Selective
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Maximum light transmission with superior heat rejection</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-100 text-blue-800 dark:bg-blue-500 dark:text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Dual Reflective
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Balanced performance with clear visibility and reduced glare</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-100 text-blue-800 dark:bg-blue-500 dark:text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Ceramic Films
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Premium heat control with a neutral, professional finish</p>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      All films are made with Avery Dennison's trusted materials, providing dependable quality and clarity for commercial glass film and building window tinting applications across North Mississippi and West Alabama, including Starkville, Columbus, Tupelo, Oxford, and Tuscaloosa.
                    </p>
                  </div>
                </Card>
              </div>
            )}

            {/* Employee Comfort */}
            {activeTab === 'employee-comfort' && (
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                    Employee Comfort & Productivity
                  </h3>
                  <Card className="p-6 mb-8">
                    <div className="w-full">
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Improve your workspace with commercial window tinting that enhances comfort, reduces glare, and creates a balanced indoor environment. Our office window tinting solutions help minimize eye strain and improve overall employee productivity while maintaining natural light and clear outdoor views.
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        With high-performance reflective films, your office gains better temperature balance, glare reduction, and a more consistent working atmosphere that supports focus and efficiency.
                      </p>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                      Glare Reduction
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Eliminate discomfort from direct sunlight and reflections with advanced building window films designed for visual comfort.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li>• Reduce eye strain and fatigue</li>
                      <li>• Improve computer screen visibility</li>
                      <li>• Minimize glare and uneven lighting</li>
                      <li>• Maintain comfortable work conditions</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                      Temperature Control
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Maintain consistent indoor temperatures across the office with energy-efficient commercial glass window tinting.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li>• Distributes temperature evenly throughout the space</li>
                      <li>• Reduces HVAC strain and energy use</li>
                      <li>• Improves indoor air quality and comfort</li>
                      <li>• Enhances overall workplace satisfaction</li>
                    </ul>
                  </Card>
                </div>

                <Card className="p-6">
                  <h4 className="text-xl font-heading font-bold text-gray-900 dark:text-white text-center mb-6">
                    Comfort Benefits
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="bg-blue-100 text-blue-800 dark:bg-blue-500 dark:text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Reduced Glare
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Eliminates glare and visual strain for clearer screens</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-100 text-green-800 dark:bg-green-500 dark:text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Even Temperature
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Balances indoor climate and reduces hot spots</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 text-purple-800 dark:bg-purple-500 dark:text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Natural Light
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Maintains brightness and clear outdoor visibility</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-800 text-white dark:bg-gray-400 dark:text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Productivity
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Creates a comfortable environment that supports better focus and performance</p>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      All films are made with Avery Dennison's trusted materials, offering long-term durability, clarity, and performance for commercial window tinting and office window film installations across North Mississippi and West Alabama, including Starkville, Columbus, Tupelo, Oxford, and Tuscaloosa.
                    </p>
                  </div>
                </Card>
              </div>
            )}

            {/* Security & Safety */}
            {activeTab === 'security-safety' && (
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                    Security & Safety Solutions
                  </h3>
                  <Card className="p-6 mb-8">
                    <div className="w-full">
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Protect your business, employees, and assets with advanced security window films designed for strength, safety, and reliability. Our commercial window tinting solutions reinforce glass to help deter break-ins, reduce storm damage, and maintain workplace security without sacrificing visibility or appearance.
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        With high-performance security films, your building gains added protection against theft, vandalism, and natural disasters while ensuring a safer environment for everyone inside.
                      </p>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                      Break-In Protection
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Strengthen your property with durable security films for commercial glass that delay forced entry and reduce damage.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li>• Delays intrusion attempts by several minutes</li>
                      <li>• Reduces the risk of theft and vandalism</li>
                      <li>• Helps lower insurance costs for your business</li>
                      <li>• Increases confidence and peace of mind for staff</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                      Storm Protection
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Reduce storm-related damage with safety window films that keep glass bonded even under high impact.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li>• Keeps glass intact during high winds and debris impact</li>
                      <li>• Minimizes damage from flying glass</li>
                      <li>• Reduces water and wind infiltration</li>
                      <li>• Meets safety standards for severe weather protection</li>
                    </ul>
                  </Card>
                </div>

                <Card className="p-6">
                  <h4 className="text-xl font-heading font-bold text-gray-900 dark:text-white text-center mb-6">
                    Security Film Options
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-blue-100 text-blue-800 dark:bg-blue-500 dark:text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        4 Mil Security
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Standard safety for everyday protection</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-100 text-green-800 dark:bg-green-500 dark:text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        7 Mil Security
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Enhanced protection for high-risk areas and large windows</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 text-purple-800 dark:bg-purple-500 dark:text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        14 Mil Security
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Maximum defense for critical and vulnerable locations</p>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      All security films use Avery Dennison's trusted materials, ensuring clear visibility, strength, and lasting durability for commercial window tinting and building window film installations across North Mississippi and West Alabama, including Starkville, Columbus, Tupelo, Oxford, and Tuscaloosa.
                    </p>
                  </div>
                </Card>
              </div>
            )}

            {/* Branding & Aesthetics */}
            {activeTab === 'branding-aesthetics' && (
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                    Branding & Aesthetic Solutions
                  </h3>
                  <Card className="p-6 mb-8">
                    <div className="w-full">
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Enhance your business identity with decorative window films that elevate professional appearance and brand presence. Our commercial window tinting and privacy film solutions create attractive, functional workspaces that reflect your company's values while improving privacy and comfort.
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        With premium decorative and privacy films, your business gains a polished image that blends performance, design, and clarity for both clients and employees.
                      </p>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                      Brand Enhancement
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Highlight your brand and create inviting environments that leave a lasting impression.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li>• Custom logos and graphic applications</li>
                      <li>• Professional privacy for meeting spaces</li>
                      <li>• Improved visual appeal and exterior presentation</li>
                      <li>• Consistent branding across offices and storefronts</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                      Privacy Solutions
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Design private and productive spaces with privacy window films for offices that balance visibility and discretion.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li>• Conference room and meeting privacy</li>
                      <li>• Executive and managerial office confidentiality</li>
                      <li>• Reception and waiting area aesthetics</li>
                      <li>• Comfortable and visually pleasing break areas</li>
                    </ul>
                  </Card>
                </div>

                <Card className="p-6">
                  <h4 className="text-xl font-heading font-bold text-gray-900 dark:text-white text-center mb-6">
                    Aesthetic Options
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="bg-blue-100 text-blue-800 dark:bg-blue-500 dark:text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Frosted
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Clean and modern privacy with diffused light</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-100 text-green-800 dark:bg-green-500 dark:text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Custom Graphics
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Logos, designs, and branding details</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 text-purple-800 dark:bg-purple-500 dark:text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        Patterned
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Decorative surface textures for visual impact</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-800 text-white dark:bg-gray-400 dark:text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block">
                        One Way Vision
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Professional look with interior clarity and exterior privacy</p>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      All films are crafted with Avery Dennison's trusted materials, ensuring durability, visual consistency, and long-term clarity for commercial decorative window film and office branding applications throughout North Mississippi and West Alabama, including Starkville, Columbus, Tupelo, Oxford, and Tuscaloosa.
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
              Why Choose Commercial Window Films?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 dark:text-gray-300 max-w-4xl mx-auto">
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
              <h3 className="text-xl font-heading font-bold text-black dark:text-white mb-3">
                Cost Savings
              </h3>
              <p className="text-black dark:text-white">
                Reduce energy costs by up to 40% with our advanced solar control films, providing significant ROI.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#dbeafe'}}>
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-black dark:text-white mb-3">
                Energy Efficiency
              </h3>
              <p className="text-black dark:text-white">
                Improve building efficiency ratings and qualify for energy rebates and LEED certification points.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#dcfce7'}}>
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-black dark:text-white mb-3">
                Employee Comfort
              </h3>
              <p className="text-black dark:text-white">
                Create comfortable work environments that reduce eye strain and improve employee productivity.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#e9d5ff'}}>
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-black dark:text-white mb-3">
                Enhanced Security
              </h3>
              <p className="text-black dark:text-white">
                Protect your business with security films that deter break-ins and provide storm protection.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#fef3c7'}}>
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-black dark:text-white mb-3">
                Professional Appearance
              </h3>
              <p className="text-black dark:text-white">
                Enhance your business image with professional window treatments that impress clients and visitors.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#e0e7ff'}}>
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-black dark:text-white mb-3">
                Quick ROI
              </h3>
              <p className="text-black dark:text-white">
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
