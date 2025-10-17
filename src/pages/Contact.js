import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../components/UI/Container';
import Section from '../components/UI/Section';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { TrophyIcon, WrenchScrewdriverIcon, HomeIcon, HeartIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('contact');
  const [currentStep, setCurrentStep] = useState(1);

  // Handle navigation from other pages
  useEffect(() => {
    if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location.state]);
  
  // Contact form state
  const [contactData, setContactData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    services: [],
    message: ''
  });

  // Quote form state
  const [quoteData, setQuoteData] = useState({
    // Step 1: About You
    fullName: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    projectLocation: '',
    
    // Step 2: Project Details
    projectTypes: [],
    projectSummary: '',
    keyFeatures: [],
    currentCondition: [],
    preferredFilmType: '',
    
    // Step 3: Property & Measurement
    numberOfWindows: '',
    buildingType: '',
    accessibilityDetails: '',
    
    // Step 4: Budget & Timeline
    budgetRange: '',
    preferredStartDate: '',
    completionWindow: '',
    needsConsultation: '',
    
    // Step 5: Final
    howDidYouHear: '',
    agreeToContact: false
  });

  const handleContactInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setContactData(prev => ({
        ...prev,
        [name]: checked 
          ? [...prev[name], value]
          : prev[name].filter(item => item !== value)
      }));
    } else {
      setContactData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleQuoteInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name.includes('[]')) {
        const fieldName = name.replace('[]', '');
        setQuoteData(prev => ({
          ...prev,
          [fieldName]: checked 
            ? [...prev[fieldName], value]
            : prev[fieldName].filter(item => item !== value)
        }));
      } else {
        setQuoteData(prev => ({
          ...prev,
          [name]: checked
        }));
      }
    } else {
      setQuoteData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactData);
    alert('Thank you! We\'ll get back to you within 24 hours.');
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    console.log('Quote form submitted:', quoteData);
    alert('Thank you! We\'ll get back to you with a personalized quote within 24 hours.');
  };

  const services = [
    'Residential Window Tinting',
    'Commercial Window Tinting',
    'Government & Schools',
    'Decorative / Privacy Film',
    'Security Film Installation',
    'Other'
  ];

  const projectTypes = [
    'Residential Window Tinting',
    'Commercial Window Tinting',
    'Institutional / Government Building',
    'Security Film Installation',
    'Decorative / Privacy Film',
    'Other'
  ];

  const keyFeatures = [
    'Heat and Glare Reduction',
    'Privacy Improvement',
    'Energy Efficiency',
    'UV Protection',
    'Safety and Security',
    'Decorative Design',
    'Other'
  ];

  const currentConditions = [
    'Untinted Glass',
    'Old Tint Removal Needed',
    'New Construction Project',
    'Existing Tint Replacement',
    'Not Sure'
  ];

  const buildingTypes = [
    'Home',
    'Office',
    'Storefront',
    'School / Institution',
    'Other'
  ];

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    'Over $25,000'
  ];

  const completionWindows = [
    'ASAP / Emergency',
    'Within 1 week',
    'Within 2-4 weeks',
    'Within 1-2 months',
    'Flexible timing'
  ];

  const howDidYouHearOptions = [
    'Google Search',
    'Facebook',
    'Instagram',
    'Referral from friend/family',
    'Referral from business',
    'Previous customer',
    'Drive by / Saw our work',
    'Other'
  ];

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: ['+1 662-631-9254'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: ['hunter@remediwindowsolutions.com'],
      description: 'Send us an email anytime'
    },
    {
      icon: MapPinIcon,
      title: 'Service Areas',
      details: ['Starkville, Columbus, Tupelo', 'Oxford, and Tuscaloosa'],
      description: 'Serving North Mississippi and Alabama'
    },
    {
      icon: ClockIcon,
      title: 'Hours',
      details: ['Monday–Saturday', '8:00 AM – 6:00 PM'],
      description: 'Our business hours'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden pt-32 lg:pt-36 bg-gray-900 dark:bg-gray-900 transition-colors duration-300">
        {/* Three Column Diagonal Background */}
        <div className="absolute inset-0 flex">
          {/* Column 1 */}
          <div 
            className="flex-1 bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: `url('/images/contactUs/contact-hero1.webp')`,
              clipPath: 'polygon(0 0, 40% 0, 25% 100%, 0% 100%)'
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            {/* Diagonal Line Divider */}
            <div className="absolute top-0 right-0 w-1 h-full bg-black/40 transform origin-top" style={{
              transform: 'skewX(-30deg)',
              transformOrigin: 'top right'
            }}></div>
          </div>
          
          {/* Column 2 */}
          <div 
            className="flex-1 bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: `url('/images/contactUs/contact-hero2.webp')`,
              clipPath: 'polygon(40% 0, 80% 0, 65% 100%, 25% 100%)'
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            {/* Diagonal Line Divider */}
            <div className="absolute top-0 right-0 w-1 h-full bg-black/40 transform origin-top" style={{
              transform: 'skewX(-30deg)',
              transformOrigin: 'top right'
            }}></div>
          </div>
          
          {/* Column 3 */}
          <div 
            className="flex-1 bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: `url('/images/contactUs/contact-hero3.webp')`,
              clipPath: 'polygon(80% 0, 100% 0, 100% 100%, 65% 100%)'
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </div>
        
        <Container className="relative z-10 text-center text-white flex items-center justify-center h-full">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 animate-fade-in">
              <span className="text-primary-500">CONTACT</span>
              <span className="block text-white">REMEDI WINDOW SOLUTIONS</span>
            </h1>
            <p className="text-sm md:text-base mb-8 text-white animate-slide-up max-w-3xl mx-auto">
              Get in touch with North Mississippi's premier window tinting experts. We serve Starkville, Columbus, Tupelo, Oxford, and Tuscaloosa with professional window tinting services.
            </p>
            
            {/* 2x2 Grid of Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-4xl mx-auto animate-slide-up">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-lg flex items-center space-x-4">
                <TrophyIcon className="h-8 w-8 text-white flex-shrink-0" />
                <h3 className="text-lg font-semibold text-white">Best Quality Films</h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-lg flex items-center space-x-4">
                <WrenchScrewdriverIcon className="h-8 w-8 text-white flex-shrink-0" />
                <h3 className="text-lg font-semibold text-white">Professional Installation</h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-lg flex items-center space-x-4">
                <HomeIcon className="h-8 w-8 text-white flex-shrink-0" />
                <h3 className="text-lg font-semibold text-white">Local Expertise</h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-lg flex items-center space-x-4">
                <HeartIcon className="h-8 w-8 text-white flex-shrink-0" />
                <h3 className="text-lg font-semibold text-white">Customer-Focused</h3>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact & Quote Section */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                Contact <span className="dark:text-primary-600">Remedi</span> Window Solutions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We're here to help with your window tinting needs. Fill out the form below and our team will reach out within 24 hours.
              </p>
            </div>

            {/* Tab Buttons */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-1 flex">
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`px-8 py-3 rounded-md font-semibold transition-all duration-200 ${
                    activeTab === 'contact'
                      ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  Contact Us
                </button>
                <button
                  onClick={() => setActiveTab('quote')}
                  className={`px-8 py-3 rounded-md font-semibold transition-all duration-200 ${
                    activeTab === 'quote'
                      ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  Free Quote
                </button>
              </div>
            </div>

            {/* Contact Form */}
            {activeTab === 'contact' && (
              <Card className="max-w-4xl mx-auto">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={contactData.fullName}
                        onChange={handleContactInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company / Organization (optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={contactData.company}
                        onChange={handleContactInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Remedi Window Solutions or your company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={contactData.email}
                        onChange={handleContactInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone (optional, international)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={contactData.phone}
                        onChange={handleContactInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+1 662 631 9254"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Address or Location (optional)
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={contactData.location}
                      onChange={handleContactInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="e.g., Starkville, Columbus, Tupelo, Oxford, or Tuscaloosa"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      How can we help? *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {services.map((service) => (
                        <label key={service} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            name="services"
                            value={service}
                            checked={contactData.services.includes(service)}
                            onChange={handleContactInputChange}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          />
                          <span className="text-sm text-gray-700">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={contactData.message}
                      onChange={handleContactInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us about your project, your goals, or any specific concerns about your windows."
                    />
                    <p className="text-sm text-gray-500 mt-2">(300–800 characters)</p>
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                  <p className="text-center text-sm text-gray-600">
                    We'll get back to you with details and a personalized recommendation.
                  </p>
                </form>
              </Card>
            )}

            {/* Quote Form */}
            {activeTab === 'quote' && (
              <Card className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                    Remedi Window Solutions — Free Quote Form
                  </h3>
                  <div className="flex justify-center mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2 max-w-md">
                      <div 
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(currentStep / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">Step {currentStep} of 5</p>
                </div>

                <form onSubmit={handleQuoteSubmit}>
                  {/* Step 1: About You */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">1) About You</h4>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="quoteFullName" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="quoteFullName"
                            name="fullName"
                            value={quoteData.fullName}
                            onChange={handleQuoteInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="e.g., Hunter Davis"
                          />
                        </div>

                        <div>
                          <label htmlFor="quoteCompany" className="block text-sm font-medium text-gray-700 mb-2">
                            Company / Organization (optional)
                          </label>
                          <input
                            type="text"
                            id="quoteCompany"
                            name="company"
                            value={quoteData.company}
                            onChange={handleQuoteInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="e.g., Remedi Home Services"
                          />
                        </div>

                        <div>
                          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                            Role (optional)
                          </label>
                          <select
                            id="role"
                            name="role"
                            value={quoteData.role}
                            onChange={handleQuoteInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          >
                            <option value="">Select your role</option>
                            <option value="Homeowner">Homeowner</option>
                            <option value="Business Owner">Business Owner</option>
                            <option value="Property Manager">Property Manager</option>
                            <option value="Contractor">Contractor</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="quoteEmail" className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="quoteEmail"
                            name="email"
                            value={quoteData.email}
                            onChange={handleQuoteInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="e.g., hunter@remediwindowsolutions.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="quotePhone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone *
                          </label>
                          <input
                            type="tel"
                            id="quotePhone"
                            name="phone"
                            value={quoteData.phone}
                            onChange={handleQuoteInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="e.g., +1 662 631 9254"
                          />
                        </div>

                        <div>
                          <label htmlFor="projectLocation" className="block text-sm font-medium text-gray-700 mb-2">
                            Project Location (City/State) *
                          </label>
                          <input
                            type="text"
                            id="projectLocation"
                            name="projectLocation"
                            value={quoteData.projectLocation}
                            onChange={handleQuoteInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="e.g., Starkville, MS or Tuscaloosa, AL"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Project Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">2) Project Details</h4>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Project Type * (select all that apply)
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {projectTypes.map((type) => (
                            <label key={type} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                              <input
                                type="checkbox"
                                name="projectTypes[]"
                                value={type}
                                checked={quoteData.projectTypes.includes(type)}
                                onChange={handleQuoteInputChange}
                                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                              />
                              <span className="text-sm text-gray-700">{type}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="projectSummary" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Summary *
                        </label>
                        <textarea
                          id="projectSummary"
                          name="projectSummary"
                          value={quoteData.projectSummary}
                          onChange={handleQuoteInputChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Briefly describe your project, goals, and the type of property."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Key Features / Goals (select all that apply)
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {keyFeatures.map((feature) => (
                            <label key={feature} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                              <input
                                type="checkbox"
                                name="keyFeatures[]"
                                value={feature}
                                checked={quoteData.keyFeatures.includes(feature)}
                                onChange={handleQuoteInputChange}
                                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                              />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Current Condition (select all that apply)
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {currentConditions.map((condition) => (
                            <label key={condition} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                              <input
                                type="checkbox"
                                name="currentCondition[]"
                                value={condition}
                                checked={quoteData.currentCondition.includes(condition)}
                                onChange={handleQuoteInputChange}
                                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                              />
                              <span className="text-sm text-gray-700">{condition}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="preferredFilmType" className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Film Type (optional)
                        </label>
                        <input
                          type="text"
                          id="preferredFilmType"
                          name="preferredFilmType"
                          value={quoteData.preferredFilmType}
                          onChange={handleQuoteInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="e.g., Avery Dennison Solar Control, Security, Privacy, or Decorative Film"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Property & Measurement */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">3) Property & Measurement</h4>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="numberOfWindows" className="block text-sm font-medium text-gray-700 mb-2">
                            Number of Windows / Approximate Area (optional)
                          </label>
                          <input
                            type="text"
                            id="numberOfWindows"
                            name="numberOfWindows"
                            value={quoteData.numberOfWindows}
                            onChange={handleQuoteInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="e.g., 10 windows or 400 sq ft"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">
                            Building Type *
                          </label>
                          <div className="space-y-2">
                            {buildingTypes.map((type) => (
                              <label key={type} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                                <input
                                  type="radio"
                                  name="buildingType"
                                  value={type}
                                  checked={quoteData.buildingType === type}
                                  onChange={handleQuoteInputChange}
                                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                                />
                                <span className="text-sm text-gray-700">{type}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="accessibilityDetails" className="block text-sm font-medium text-gray-700 mb-2">
                          Accessibility Details (optional)
                        </label>
                        <input
                          type="text"
                          id="accessibilityDetails"
                          name="accessibilityDetails"
                          value={quoteData.accessibilityDetails}
                          onChange={handleQuoteInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="e.g., Ground floor, 2nd floor, or glass walls requiring ladder access"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 4: Budget & Timeline */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">4) Budget & Timeline</h4>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">
                            Estimated Budget Range (USD) *
                          </label>
                          <div className="space-y-2">
                            {budgetRanges.map((range) => (
                              <label key={range} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                                <input
                                  type="radio"
                                  name="budgetRange"
                                  value={range}
                                  checked={quoteData.budgetRange === range}
                                  onChange={handleQuoteInputChange}
                                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                                />
                                <span className="text-sm text-gray-700">{range}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <label htmlFor="preferredStartDate" className="block text-sm font-medium text-gray-700 mb-2">
                              Preferred Start Date (optional)
                            </label>
                            <input
                              type="date"
                              id="preferredStartDate"
                              name="preferredStartDate"
                              value={quoteData.preferredStartDate}
                              onChange={handleQuoteInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                              Ideal Completion Window *
                            </label>
                            <div className="space-y-2">
                              {completionWindows.map((window) => (
                                <label key={window} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                                  <input
                                    type="radio"
                                    name="completionWindow"
                                    value={window}
                                    checked={quoteData.completionWindow === window}
                                    onChange={handleQuoteInputChange}
                                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                                  />
                                  <span className="text-sm text-gray-700">{window}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                              Do you need on-site consultation? *
                            </label>
                            <div className="space-y-2">
                              {['Yes', 'No', 'Not Sure'].map((option) => (
                                <label key={option} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                                  <input
                                    type="radio"
                                    name="needsConsultation"
                                    value={option}
                                    checked={quoteData.needsConsultation === option}
                                    onChange={handleQuoteInputChange}
                                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                                  />
                                  <span className="text-sm text-gray-700">{option}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 5: Final */}
                  {currentStep === 5 && (
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">5) Attachments & Final</h4>
                      </div>

                      <div>
                        <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-700 mb-2">
                          Upload Photos or Measurements (optional)
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <input
                            type="file"
                            id="fileUpload"
                            multiple
                            accept="image/*,.pdf"
                            className="hidden"
                          />
                          <label htmlFor="fileUpload" className="cursor-pointer">
                            <div className="text-gray-500">
                              <p className="text-sm">No file chosen</p>
                              <p className="text-xs mt-1">JPG/PNG/PDF ≤20MB</p>
                            </div>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-700 mb-2">
                          How did you hear about us? (optional)
                        </label>
                        <select
                          id="howDidYouHear"
                          name="howDidYouHear"
                          value={quoteData.howDidYouHear}
                          onChange={handleQuoteInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Select an option</option>
                          {howDidYouHearOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            name="agreeToContact"
                            checked={quoteData.agreeToContact}
                            onChange={handleQuoteInputChange}
                            required
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded mt-1"
                          />
                          <span className="text-sm text-gray-700">
                            I agree to be contacted and accept the Privacy Policy. *
                          </span>
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                      disabled={currentStep === 1}
                      className="px-8"
                    >
                      Previous
                    </Button>
                    
                    {currentStep < 5 ? (
                      <Button
                        type="button"
                        onClick={() => setCurrentStep(prev => Math.min(5, prev + 1))}
                        className="px-8"
                      >
                        Next
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="px-8 bg-primary-600 hover:bg-primary-700"
                      >
                        Submit My Free Quote
                      </Button>
                    )}
                  </div>
                </form>
              </Card>
            )}
          </div>
        </Container>
      </Section>

      {/* Alternative Contact Options */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
              <PhoneIcon className="h-8 w-8 text-primary-600" />
              Alternative Contact Options
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary-100 rounded-full">
                    <info.icon className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-primary-600 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 dark:text-gray-900 text-sm break-words">{detail}</p>
                  ))}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-700">{info.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
