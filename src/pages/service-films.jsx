import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

// Capability bar component with 7 consistent bars - FORCE REFRESH 2024
const CapabilityBarForce = ({ level, text }) => {
    return (
      <div className="flex flex-col h-20 text-left items-start">
        <div className="flex-1 flex items-center">
          <p className="text-xs text-gray-700 dark:text-white leading-tight">{text}</p>
        </div>
        <div className="flex space-x-0.5 justify-start items-start" style={{width: 'fit-content'}}>
          {level === 'none' && (
            <>
              <div className="w-2 h-2 rounded-sm bg-gray-300 dark:bg-gray-500"></div>
              <div className="w-2 h-2 rounded-sm bg-gray-300 dark:bg-gray-500"></div>
              <div className="w-2 h-2 rounded-sm bg-gray-300 dark:bg-gray-500"></div>
              <div className="w-2 h-2 rounded-sm bg-gray-300 dark:bg-gray-500"></div>
              <div className="w-2 h-2 rounded-sm bg-gray-300 dark:bg-gray-500"></div>
              <div className="w-2 h-2 rounded-sm bg-gray-300 dark:bg-gray-500"></div>
              <div className="w-2 h-2 rounded-sm bg-gray-300 dark:bg-gray-500"></div>
            </>
          )}
          {level === 'low' && (
            <>
              <div className="w-2 h-2 rounded-sm bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-sm bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-sm bg-green-500"></div>
              <div className="w-2 h-2 rounded-sm bg-green-500"></div>
              <div className="w-2 h-2 rounded-sm bg-green-500"></div>
              <div className="w-2 h-2 rounded-sm bg-green-500"></div>
              <div className="w-2 h-2 rounded-sm bg-green-500"></div>
            </>
          )}
          {level === 'medium' && (
            <>
              <div className="w-2 h-2 rounded-sm bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-sm bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-sm bg-green-500"></div>
              <div className="w-2 h-2 rounded-sm bg-green-500"></div>
              <div className="w-2 h-2 rounded-sm bg-green-500"></div>
              <div className="w-2 h-2 rounded-sm bg-green-500"></div>
              <div className="w-2 h-2 rounded-sm bg-green-500"></div>
            </>
          )}
          {level === 'high' && (
            <>
              <div className="w-2 h-2 rounded-sm bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-sm bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-sm bg-green-500"></div>
              <div className="w-2 h-2 rounded-sm bg-green-500"></div>
              <div className="w-2 h-2 rounded-sm bg-green-500"></div>
              <div className="w-2 h-2 rounded-sm bg-green-500"></div>
              <div className="w-2 h-2 rounded-sm bg-green-500"></div>
            </>
          )}
          {level === 'partial' && (
            <>
              <div className="w-2 h-2 rounded-sm bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-sm bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-sm bg-green-500"></div>
              <div className="w-2 h-2 rounded-sm bg-green-500"></div>
              <div className="w-2 h-2 rounded-sm bg-gray-300 dark:bg-gray-500"></div>
              <div className="w-2 h-2 rounded-sm bg-gray-300 dark:bg-gray-500"></div>
              <div className="w-2 h-2 rounded-sm bg-gray-300 dark:bg-gray-500"></div>
            </>
          )}
        </div>
        {/* FORCE REFRESH TIMESTAMP: 2024-12-19-FINAL */}
      </div>
    );
  };

const ServiceFilms = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dual-reflective');

  const handleGetQuote = () => {
    navigate('/contact', { state: { activeTab: 'quote' } });
  };

  const handleContactUs = () => {
    navigate('/contact', { state: { activeTab: 'contact' } });
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[100vh] sm:h-[70vh] flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/solutions/About-Hero-logo.webp')`,
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
              <div className="flex justify-center mb-8">
                <img 
                  src="/images/icons&logo/Avery-Dennsion-Logo.webp" 
                  alt="Avery Dennison Films Logo" 
                  className="h-24 object-contain"
                />
              </div>
              
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-white">
                Explore Trusted Film Solutions
              </h1>
              <p className="text-sm md:text-base mb-8 text-white max-w-3xl mx-auto">
                Explore our films for solar control, security and safety, privacy, and decorative solutions designed to enhance comfort, protection, and style for every space.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="md" 
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={handleGetQuote}
                >
                  Get Quote
                </Button>
                <button 
                  style={{
                    backgroundColor: 'transparent',
                    color: 'white',
                    padding: '12px 24px',
                    fontSize: '16px',
                    fontWeight: '600',
                    border: '2px solid white',
                    borderRadius: '6px',
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
                  onClick={() => window.location.href = '/#services-section'}
                >
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Film Types Section */}
      <Section background="gray">
        <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-12">
                    <img
                      src="/images/icons&logo/Avery-Dennsion-Logo.webp"
                      alt="Avery Dennison Films Logo"
                      className="h-16 mx-auto mb-6"
                    />
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                      Avery Dennison Film Types
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                      Explore our comprehensive range of window film solutions designed for every application.
                    </p>
                  </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: 'dual-reflective', name: 'Dual Reflective Interior Films' },
              { id: 'spectrally-selective', name: 'Spectrally Selective Interior Films' },
              { id: 'neutral-interior', name: 'Neutral Interior Films' },
              { id: 'decorative-specialty', name: 'Decorative / Specialty Interior Films' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {/* Dual Reflective Interior Films */}
            {activeTab === 'dual-reflective' && (
              <div>
                        <div className="text-center mb-8">
                          <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                            Dual Reflective Interior Films
                          </h3>
                          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            High heat rejection + daytime privacy with a neutral interior view (dual-reflective construction).
                            Technology noted: Nano technology / ceramic coating.
                          </p>
                        </div>

                {/* Film Lines */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* DR OptiTune i */}
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      DR OptiTune i
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Stylish reflective outer layer to cut heat and glare; lower-reflectance inner layer to preserve views.
                    </p>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">VLT Options:</h5>
                      <div className="flex flex-wrap gap-2">
                        {['05i', '15i', '20i', '30i', '40i'].map((vlt) => (
                          <span key={vlt} className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs font-medium">
                            {vlt}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>

                  {/* DR OptiShade i */}
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      DR OptiShade i
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Neutral earth tone, low interior reflectance; complements wood floors and furnishings.
                    </p>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">VLT Options:</h5>
                      <div className="flex flex-wrap gap-2">
                        {['15i', '25i', '35i'].map((vlt) => (
                          <span key={vlt} className="bg-accent-100 text-accent-800 px-2 py-1 rounded-full text-xs font-medium">
                            {vlt}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Key Benefits */}
                <Card className="p-6">
                  <h4 className="text-xl font-heading font-bold text-gray-900 text-center mb-6">
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Excellent solar protection and glare control',
                      '99+% UV block',
                      'High heat rejection for cooling-cost savings',
                      'Warm/neutral interior look with low reflectivity',
                      'Daytime privacy / bold, upgraded appearance',
                      'Preserves views with dual-reflective construction'
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-700 text-sm">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Performance Data */}
                <div className="py-8">
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 text-center mb-6">
                      Performance Data
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-base font-semibold text-gray-900 mb-3">Properties Measured:</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Visible Light Transmitted (VLT)</li>
                          <li>• Visible Light Reflected (Interior/Exterior)</li>
                          <li>• UV Block</li>
                          <li>• Total Solar Energy Reflected/Transmitted/Absorbed</li>
                          <li>• Emissivity (room side)</li>
                          <li>• Glare Reduction</li>
                          <li>• Selective Infrared Reduction (SIRR)</li>
                          <li>• Infrared Energy Rejection (IRER)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-base font-semibold text-gray-900 mb-3">Additional Metrics:</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Shading Coefficient</li>
                          <li>• Solar Heat Gain Coefficient (G-Value)</li>
                          <li>• U-Value Winter (IP & SI)</li>
                          <li>• Luminous Efficacy</li>
                          <li>• Total Solar Energy Rejected (TSER)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-primary-50 rounded-lg">
                      <p className="text-xs text-primary-800 text-center">
                        <strong>Note:</strong> Performance data may vary based on glass type, installation conditions, and environmental factors. 
                        Detailed specifications available upon request.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {/* Spectrally Selective Interior Films */}
            {activeTab === 'spectrally-selective' && (
              <div>
                        <div className="text-center mb-8">
                          <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                            Spectrally Selective Interior Films
                          </h3>
                          <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">
                            Series: SP e-Lite i
                          </h4>
                          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            High visible light transmission with low reflectivity while still reducing solar heat gain.
                          </p>
                        </div>

                {/* VLT Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="p-6 text-center">
                    <div className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      VLT 45i
                    </div>
                    <p className="text-gray-600 text-sm">
                      Moderate visible light transmission with excellent heat rejection
                    </p>
                  </Card>
                  <Card className="p-6 text-center">
                    <div className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      VLT 70i
                    </div>
                    <p className="text-gray-600 text-sm">
                      High visible light transmission with superior heat rejection
                    </p>
                  </Card>
                </div>

                {/* Key Benefits */}
                <Card className="p-6">
                  <h4 className="text-xl font-heading font-bold text-gray-900 text-center mb-6">
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'High VLT (barely discernible on glass) → lots of natural daylight',
                      'High heat rejection; lower cooling costs',
                      'Low reflectivity maintains views day and night',
                      '99+% UV block (fading & damage protection)',
                      'Preserves natural façade/appearance (good for historical/museum/commercial use)'
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-700 text-sm">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Performance Data */}
                <div className="py-8">
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 text-center mb-6">
                      Performance Data
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-base font-semibold text-gray-900 mb-3">Properties Measured:</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Visible Light Transmitted (VLT)</li>
                          <li>• Visible Light Reflected (Interior/Exterior)</li>
                          <li>• UV Block</li>
                          <li>• Total Solar Energy Reflected/Transmitted/Absorbed</li>
                          <li>• Emissivity (room side)</li>
                          <li>• Glare Reduction</li>
                          <li>• Selective Infrared Reduction (SIRR)</li>
                          <li>• Infrared Energy Rejection (IRER)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-base font-semibold text-gray-900 mb-3">Additional Metrics:</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Shading Coefficient</li>
                          <li>• Solar Heat Gain Coefficient (G-Value)</li>
                          <li>• U-Value Winter (IP & SI)</li>
                          <li>• Luminous Efficacy</li>
                          <li>• Total Solar Energy Rejected (TSER)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-primary-50 rounded-lg">
                      <p className="text-xs text-primary-800 text-center">
                        <strong>Note:</strong> Performance data may vary based on glass type, installation conditions, and environmental factors. 
                        Detailed specifications available upon request.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {/* Neutral Interior Films */}
            {activeTab === 'neutral-interior' && (
              <div>
                        <div className="text-center mb-8">
                          <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                            Neutral Interior Films
                          </h3>
                          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Low-reflectance, neutral-gray solar control families.
                          </p>
                        </div>

                {/* Film Lines */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* NT PerLite Ceramic i */}
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      NT PerLite Ceramic i
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Durable ceramic-based neutral gray; low reflectance, high heat rejection; preserves natural view.
                    </p>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">VLT Options:</h5>
                      <div className="grid grid-cols-4 gap-2">
                        {['20', '35', '50', '70'].map((vlt) => (
                          <div key={vlt} className="text-center p-2 bg-primary-50 rounded">
                            <div className="inline-block bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs font-semibold">
                              VLT {vlt}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Safety Variant */}
                    <div className="bg-accent-50 p-4 rounded-lg">
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">Safety Variant</h5>
                      <p className="text-gray-600 text-xs mb-2">NT PerLite Ceramic 35 for Safety</p>
                      <div className="flex justify-center space-x-2">
                        <div className="inline-block bg-accent-100 text-accent-800 px-2 py-1 rounded-full text-xs font-semibold">
                          6 mil
                        </div>
                        <div className="inline-block bg-accent-100 text-accent-800 px-2 py-1 rounded-full text-xs font-semibold">
                          10 mil
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2 text-center">
                        <strong>Safety Testing:</strong> AS/NZS 2208 compliant
                      </p>
                    </div>
                  </Card>

                  {/* NT Natura i */}
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      NT Natura i
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Low-reflectance neutral gray with high heat rejection, glare reduction, and privacy.
                    </p>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">VLT Options:</h5>
                      <div className="grid grid-cols-3 gap-2">
                        {['05i', '15i', '30i'].map((vlt) => (
                          <div key={vlt} className="text-center p-2 bg-primary-50 rounded">
                            <div className="inline-block bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs font-semibold">
                              VLT {vlt}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Shared Benefits */}
                <Card className="p-6">
                  <h4 className="text-xl font-heading font-bold text-gray-900 text-center mb-6">
                    Shared Benefits
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'High heat rejection → enhanced comfort and reduced cooling costs',
                      'High glare reduction → improved screen viewing/less eye strain',
                      'Neutral color, low reflectivity inside & out',
                      '99+% UV block'
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-700 text-sm">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Performance Data */}
                <div className="py-8">
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 text-center mb-6">
                      Performance Data
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-base font-semibold text-gray-900 mb-3">Properties Measured:</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Visible Light Transmitted (VLT)</li>
                          <li>• Visible Light Reflected (Interior/Exterior)</li>
                          <li>• UV Block</li>
                          <li>• Total Solar Energy Reflected/Transmitted/Absorbed</li>
                          <li>• Emissivity (room side)</li>
                          <li>• Glare Reduction</li>
                          <li>• Selective Infrared Reduction (SIRR)</li>
                          <li>• Infrared Energy Rejection (IRER)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-base font-semibold text-gray-900 mb-3">Additional Metrics:</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Shading Coefficient</li>
                          <li>• Solar Heat Gain Coefficient (G-Value)</li>
                          <li>• U-Value Winter (IP & SI)</li>
                          <li>• Luminous Efficacy</li>
                          <li>• Total Solar Energy Rejected (TSER)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-primary-50 rounded-lg">
                      <p className="text-xs text-primary-800 text-center">
                        <strong>Note:</strong> Performance data may vary based on glass type, installation conditions, and environmental factors. 
                        Detailed specifications available upon request.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {/* Decorative / Specialty Interior Films */}
            {activeTab === 'decorative-specialty' && (
              <div>
                        <div className="text-center mb-8">
                          <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                            Decorative / Specialty Interior Films
                          </h3>
                          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Specialized films for decorative applications and unique privacy solutions.
                          </p>
                        </div>

                {/* Film Series Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {/* DS Matte 2 mil */}
                  <Card className="p-4 text-center">
                    <div className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      DS Matte 2 mil
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Privacy/Frosted Look
                    </h4>
                    <p className="text-gray-600 text-xs">
                      Creates a frosted glass effect for privacy while maintaining light transmission
                    </p>
                  </Card>

                  {/* DS Black I */}
                  <Card className="p-4 text-center">
                    <div className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      DS Black I
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Blackout / Maximum Privacy
                    </h4>
                    <p className="text-gray-600 text-xs">
                      Complete blackout solution for maximum privacy and light control
                    </p>
                  </Card>

                  {/* DS White I */}
                  <Card className="p-4 text-center">
                    <div className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      DS White I
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Whiteout / Privacy
                    </h4>
                    <p className="text-gray-600 text-xs">
                      White privacy film providing clean, modern appearance with light diffusion
                    </p>
                  </Card>

                  {/* DS UV Filter I */}
                  <Card className="p-4 text-center">
                    <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      DS UV Filter I
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Clear UV Filtering
                    </h4>
                    <p className="text-gray-600 text-xs">
                      Invisible UV protection while maintaining crystal clear visibility
                    </p>
                  </Card>
                </div>

                {/* Key Features */}
                <Card className="p-6">
                  <h4 className="text-xl font-heading font-bold text-gray-900 text-center mb-6">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Versatile Applications - Suitable for residential, commercial, and specialty installations',
                      'Privacy Solutions - Multiple privacy levels from frosted to complete blackout',
                      'UV Protection - Advanced UV filtering to protect interiors from fading',
                      'Easy Installation - Professional installation with long-lasting results',
                      'Durable Performance - High-quality materials designed for long-term use',
                      'Custom Solutions - Tailored applications for specific design requirements'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-700 text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Performance Data */}
                <div className="py-8">
                  <Card className="p-6">
                    <h4 className="text-xl font-heading font-bold text-gray-900 text-center mb-6">
                      Performance Data
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-base font-semibold text-gray-900 mb-3">Properties Measured:</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Visible Light Transmitted (VLT)</li>
                          <li>• Visible Light Reflected (Interior/Exterior)</li>
                          <li>• UV Block</li>
                          <li>• Total Solar Energy Reflected/Transmitted/Absorbed</li>
                          <li>• Emissivity (room side)</li>
                          <li>• Glare Reduction</li>
                          <li>• Selective Infrared Reduction (SIRR)</li>
                          <li>• Infrared Energy Rejection (IRER)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-base font-semibold text-gray-900 mb-3">Additional Metrics:</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Shading Coefficient</li>
                          <li>• Solar Heat Gain Coefficient (G-Value)</li>
                          <li>• U-Value Winter (IP & SI)</li>
                          <li>• Luminous Efficacy</li>
                          <li>• Total Solar Energy Rejected (TSER)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-primary-50 rounded-lg">
                      <p className="text-xs text-primary-800 text-center">
                        <strong>Note:</strong> Performance data may vary based on glass type, installation conditions, and environmental factors. 
                        Detailed specifications available upon request.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Film Family Comparison Table */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Film Family Comparison
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Compare the capabilities and applications of our different film families to find the perfect solution for your needs.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
                    Film Family
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
                    Solar Control
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
                    Security / Safety
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
                    Privacy / Daytime Reflectivity
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
                    Decorative / Aesthetic
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">
                    Dual Reflective Interior Films<br/>
                    <span className="text-sm text-gray-600 dark:text-gray-400">(DR OptiTune / OptiShade)</span>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="high" text="High heat rejection" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="none" text="No dedicated safety version listed" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="high" text="Yes – daytime privacy, low-reflectance interior" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="none" text="Not primarily decorative" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">
                    Spectrally Selective Interior Films<br/>
                    <span className="text-sm text-gray-600 dark:text-gray-400">(SP e-Lite i)</span>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="high" text="Yes – efficient heat control with high VLT" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="none" text="No safety version" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="partial" text="Moderate privacy (clear)" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="none" text="Not decorative – maintains natural look" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">
                    Neutral Interior Films<br/>
                    <span className="text-sm text-gray-600 dark:text-gray-400">(NT PerLite Ceramic i / NT Natura i)</span>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="high" text="Yes – solar and glare reduction" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="high" text="Yes – PerLite Ceramic 35 Safety (6 & 10 mil)" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="partial" text="Partial privacy (depending on VLT)" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="none" text="Not decorative" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">
                    Reflective Interior Films<br/>
                    <span className="text-sm text-gray-600 dark:text-gray-400">(R Silver i, R Silver Low E, R Silver Safety)</span>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="high" text="Strong solar rejection" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="high" text="Yes – R Silver Safety (4 mil & 9 mil)" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="high" text="Excellent daytime privacy" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="none" text="Not decorative" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">
                    Decorative / Specialty Films<br/>
                    <span className="text-sm text-gray-600 dark:text-gray-400">(DS Matte, DS Black, DS White, DS UV Filter)</span>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="partial" text="Minimal solar effect (except UV Filter blocks UV)" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="none" text="Not safety-rated" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="high" text="Yes – frosted / blackout / whiteout privacy" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="high" text="Yes – decorative applications" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6">
            {/* Dual Reflective Films */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Dual Reflective Interior Films
                <span className="block text-sm font-normal text-gray-600 dark:text-white mt-1">
                  (DR OptiTune / OptiShade)
                </span>
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solar Control</h4>
                  <CapabilityBarForce level="high" text="High heat rejection" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Security / Safety</h4>
                  <CapabilityBarForce level="none" text="No dedicated safety version listed" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Privacy / Daytime Reflectivity</h4>
                  <CapabilityBarForce level="high" text="Yes – daytime privacy, low-reflectance interior" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Decorative / Aesthetic</h4>
                  <CapabilityBarForce level="none" text="Not primarily decorative" />
                </div>
              </div>
            </Card>

            {/* Spectrally Selective Films */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Spectrally Selective Interior Films
                <span className="block text-sm font-normal text-gray-600 dark:text-white mt-1">
                  (SP e-Lite i)
                </span>
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solar Control</h4>
                  <CapabilityBarForce level="high" text="Yes – efficient heat control with high VLT" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Security / Safety</h4>
                  <CapabilityBarForce level="none" text="No safety version" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Privacy / Daytime Reflectivity</h4>
                  <CapabilityBarForce level="partial" text="Moderate privacy (clear)" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Decorative / Aesthetic</h4>
                  <CapabilityBarForce level="none" text="Not decorative – maintains natural look" />
                </div>
              </div>
            </Card>

            {/* Neutral Films */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Neutral Interior Films
                <span className="block text-sm font-normal text-gray-600 dark:text-white mt-1">
                  (NT PerLite Ceramic i / NT Natura i)
                </span>
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solar Control</h4>
                  <CapabilityBarForce level="high" text="Yes – solar and glare reduction" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Security / Safety</h4>
                  <CapabilityBarForce level="high" text="Yes – PerLite Ceramic 35 Safety (6 & 10 mil)" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Privacy / Daytime Reflectivity</h4>
                  <CapabilityBarForce level="partial" text="Partial privacy (depending on VLT)" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Decorative / Aesthetic</h4>
                  <CapabilityBarForce level="none" text="Not decorative" />
                </div>
              </div>
            </Card>

            {/* Reflective Films */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Reflective Interior Films
                <span className="block text-sm font-normal text-gray-600 dark:text-white mt-1">
                  (R Silver i, R Silver Low E, R Silver Safety)
                </span>
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solar Control</h4>
                  <CapabilityBarForce level="high" text="Strong solar rejection" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Security / Safety</h4>
                  <CapabilityBarForce level="high" text="Yes – R Silver Safety (4 mil & 9 mil)" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Privacy / Daytime Reflectivity</h4>
                  <CapabilityBarForce level="high" text="Excellent daytime privacy" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Decorative / Aesthetic</h4>
                  <CapabilityBarForce level="none" text="Not decorative" />
                </div>
              </div>
            </Card>

            {/* Decorative Films */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Decorative / Specialty Films
                <span className="block text-sm font-normal text-gray-600 dark:text-white mt-1">
                  (DS Matte, DS Black, DS White, DS UV Filter)
                </span>
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solar Control</h4>
                  <CapabilityBarForce level="partial" text="Minimal solar effect (except UV Filter blocks UV)" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Security / Safety</h4>
                  <CapabilityBarForce level="none" text="Not safety-rated" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Privacy / Daytime Reflectivity</h4>
                  <CapabilityBarForce level="high" text="Yes – frosted / blackout / whiteout privacy" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Decorative / Aesthetic</h4>
                  <CapabilityBarForce level="high" text="Yes – decorative applications" />
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Application Type Comparison Table */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Application Type Comparison
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              See which film types work best for different applications and environments
            </p>
          </div>
          
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
                    Application Type
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
                    Dual Reflective
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
                    Spectrally Selective
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
                    Neutral Ceramic / Natura
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
                    Reflective Silver Series
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">
                    Decorative / Specialty (DS)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">
                    Residential Homes
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="high" text="Excellent – privacy + comfort" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="high" text="Ideal – clear glass aesthetic" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="high" text="Popular – neutral look + heat reduction" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="partial" text="Less common (aesthetic preference)" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="high" text="For bathrooms, partitions, design elements" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">
                    Commercial Buildings / Offices
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="high" text="Yes – privacy and cooling" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="high" text="Yes – high daylight and energy efficiency" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="high" text="Yes – balanced performance and aesthetics" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="high" text="Yes – energy efficiency and bold appearance" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="high" text="Used for branding / frosted glass / conference rooms" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-900 dark:text-white">
                    Government Facilities / Schools
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="high" text="Yes – energy savings + comfort" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="high" text="Yes – natural light with UV protection" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="high" text="Yes – durability and UV block" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="high" text="Yes – strong solar control and security with Safety films" />
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left align-bottom">
                    <CapabilityBarForce level="high" text="Yes – privacy partitions and design applications" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards for Application Comparison */}
          <div className="lg:hidden space-y-6">
            {/* Residential Homes */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Residential Homes
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Dual Reflective</h4>
                  <CapabilityBarForce level="high" text="Excellent – privacy + comfort" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Spectrally Selective</h4>
                  <CapabilityBarForce level="high" text="Ideal – clear glass aesthetic" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Neutral Ceramic / Natura</h4>
                  <CapabilityBarForce level="high" text="Popular – neutral look + heat reduction" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Reflective Silver Series</h4>
                  <CapabilityBarForce level="partial" text="Less common (aesthetic preference)" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Decorative / Specialty (DS)</h4>
                  <CapabilityBarForce level="high" text="For bathrooms, partitions, design elements" />
                </div>
              </div>
            </Card>

            {/* Commercial Buildings / Offices */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Commercial Buildings / Offices
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Dual Reflective</h4>
                  <CapabilityBarForce level="high" text="Yes – privacy and cooling" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Spectrally Selective</h4>
                  <CapabilityBarForce level="high" text="Yes – high daylight and energy efficiency" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Neutral Ceramic / Natura</h4>
                  <CapabilityBarForce level="high" text="Yes – balanced performance and aesthetics" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Reflective Silver Series</h4>
                  <CapabilityBarForce level="high" text="Yes – energy efficiency and bold appearance" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Decorative / Specialty (DS)</h4>
                  <CapabilityBarForce level="high" text="Used for branding / frosted glass / conference rooms" />
                </div>
              </div>
            </Card>

            {/* Government Facilities / Schools */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Government Facilities / Schools
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Dual Reflective</h4>
                  <CapabilityBarForce level="high" text="Yes – energy savings + comfort" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Spectrally Selective</h4>
                  <CapabilityBarForce level="high" text="Yes – natural light with UV protection" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Neutral Ceramic / Natura</h4>
                  <CapabilityBarForce level="high" text="Yes – durability and UV block" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Reflective Silver Series</h4>
                  <CapabilityBarForce level="high" text="Yes – strong solar control and security with Safety films" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Decorative / Specialty (DS)</h4>
                  <CapabilityBarForce level="high" text="Yes – privacy partitions and design applications" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Windows?
            </h2>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Choose the perfect window film solution for your space. From residential privacy to commercial energy efficiency, 
              we have the expertise to help you select and install the ideal film for your needs.
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
                <h3 style={{color: 'white', fontSize: '20px', fontWeight: '600', marginBottom: '10px', textAlign: 'center'}}>Expert Consultation</h3>
                <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '16px', textAlign: 'center'}}>Professional assessment to find the perfect film solution for your specific needs</p>
              </div>
              
              <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '30px 20px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.2)'}}>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>
                  <svg style={{width: '40px', height: '40px', color: 'white'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 style={{color: 'white', fontSize: '20px', fontWeight: '600', marginBottom: '10px', textAlign: 'center'}}>Energy Savings</h3>
                <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '16px', textAlign: 'center'}}>Reduce cooling costs and improve energy efficiency with our premium window films</p>
              </div>
              
              <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '30px 20px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.2)'}}>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>
                  <svg style={{width: '40px', height: '40px', color: 'white'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 style={{color: 'white', fontSize: '20px', fontWeight: '600', marginBottom: '10px', textAlign: 'center'}}>Enhanced Comfort</h3>
                <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '16px', textAlign: 'center'}}>Enjoy better privacy, glare reduction, and UV protection for a more comfortable space</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

    </>
  );
};

export default ServiceFilms;

