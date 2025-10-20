import React from 'react';
import { ComputerDesktopIcon, EyeIcon, CogIcon, ShieldCheckIcon, InformationCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';

const CookiePolicy = () => {
  const cookieSections = [
    {
      icon: ComputerDesktopIcon,
      title: "What Are Cookies?",
      content: [
        {
          subtitle: "Cookie Definition",
          details: [
            "Cookies are small text files stored on your device when you visit our website",
            "They contain information about your browsing preferences and website interactions",
            "Cookies help websites remember your preferences and improve your experience",
            "They are widely used to make websites work more efficiently and provide information to website owners"
          ]
        },
        {
          subtitle: "How We Use Cookies",
          details: [
            "To remember your preferences and settings for future visits",
            "To analyze website traffic and understand how visitors use our site",
            "To improve website functionality and user experience",
            "To provide personalized content and relevant information about our services"
          ]
        },
        {
          subtitle: "Cookie Types",
          details: [
            "Session cookies that expire when you close your browser",
            "Persistent cookies that remain on your device for a set period",
            "First-party cookies set by our website directly",
            "Third-party cookies set by external services we use"
          ]
        }
      ]
    },
    {
      icon: EyeIcon,
      title: "Analytics and Performance Cookies",
      content: [
        {
          subtitle: "Google Analytics",
          details: [
            "We use Google Analytics to understand how visitors interact with our website",
            "This helps us improve our website design, content, and user experience",
            "Analytics cookies collect anonymous information about page views and user behavior",
            "No personally identifiable information is collected through analytics cookies"
          ]
        },
        {
          subtitle: "Website Performance",
          details: [
            "Cookies help us monitor website speed and performance",
            "They identify technical issues and areas for improvement",
            "Performance data helps us optimize our website for better user experience",
            "This information is used solely for website improvement purposes"
          ]
        },
        {
          subtitle: "User Behavior Analysis",
          details: [
            "We analyze which pages are most popular and how users navigate our site",
            "This helps us understand what content is most valuable to our visitors",
            "Behavior data informs our content strategy and website improvements",
            "All analysis is done on an anonymous, aggregated basis"
          ]
        }
      ]
    },
    {
      icon: CogIcon,
      title: "Functional Cookies",
      content: [
        {
          subtitle: "Website Functionality",
          details: [
            "Cookies enable essential website features and functionality",
            "They remember your language preferences and regional settings",
            "Functional cookies help maintain your session and login status",
            "They ensure the website works properly and securely"
          ]
        },
        {
          subtitle: "User Preferences",
          details: [
            "Remember your display preferences and accessibility settings",
            "Store your form data temporarily to prevent data loss",
            "Maintain your shopping cart or service selection preferences",
            "Remember your contact form information for convenience"
          ]
        },
        {
          subtitle: "Security Features",
          details: [
            "Cookies help protect against fraud and unauthorized access",
            "They maintain security tokens and authentication status",
            "Security cookies help prevent cross-site request forgery attacks",
            "They ensure secure communication between your browser and our servers"
          ]
        }
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: "Marketing and Advertising Cookies",
      content: [
        {
          subtitle: "Targeted Advertising",
          details: [
            "We may use cookies to show you relevant advertisements about our services",
            "Marketing cookies help us understand your interests and preferences",
            "They enable us to provide personalized content and offers",
            "You can opt out of targeted advertising at any time"
          ]
        },
        {
          subtitle: "Social Media Integration",
          details: [
            "Cookies from social media platforms when you share our content",
            "They enable social media features and sharing functionality",
            "Social media cookies may track your activity across websites",
            "You can control these through your social media account settings"
          ]
        },
        {
          subtitle: "Email Marketing",
          details: [
            "Cookies help us track email campaign effectiveness",
            "They enable us to provide relevant content based on your interests",
            "Email marketing cookies help us improve our communication",
            "You can unsubscribe from marketing emails at any time"
          ]
        }
      ]
    },
    {
      icon: InformationCircleIcon,
      title: "Cookie Management",
      content: [
        {
          subtitle: "Browser Settings",
          details: [
            "You can control cookies through your web browser settings",
            "Most browsers allow you to block, delete, or manage cookies",
            "You can set your browser to notify you when cookies are being set",
            "Disabling certain cookies may affect website functionality"
          ]
        },
        {
          subtitle: "Cookie Preferences",
          details: [
            "We provide options to manage your cookie preferences",
            "You can choose which types of cookies to accept or reject",
            "Cookie preference settings can be updated at any time",
            "Some cookies are essential and cannot be disabled"
          ]
        },
        {
          subtitle: "Third-Party Controls",
          details: [
            "Many third-party services provide their own cookie controls",
            "You can opt out of specific advertising networks and analytics",
            "Industry organizations provide tools to manage advertising cookies",
            "We respect your choices and honor opt-out requests"
          ]
        }
      ]
    },
    {
      icon: ExclamationTriangleIcon,
      title: "Important Information",
      content: [
        {
          subtitle: "Essential Cookies",
          details: [
            "Some cookies are essential for the website to function properly",
            "These cookies cannot be disabled without affecting website functionality",
            "Essential cookies include security, authentication, and basic functionality",
            "We use only the minimum necessary cookies for website operation"
          ]
        },
        {
          subtitle: "Data Protection",
          details: [
            "We are committed to protecting your privacy and personal information",
            "Cookie data is handled in accordance with our Privacy Policy",
            "We do not sell or share your personal information with third parties",
            "All cookie usage complies with applicable privacy laws and regulations"
          ]
        },
        {
          subtitle: "Policy Updates",
          details: [
            "This Cookie Policy may be updated from time to time",
            "We will notify you of any significant changes to our cookie practices",
            "Continued use of our website constitutes acceptance of any changes",
            "We encourage you to review this policy periodically"
          ]
        }
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
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

        <div className="container-custom relative z-10 pt-48 lg:pt-52 pb-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Cookie <span className="text-primary-400">Policy</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary-300">
                Understanding Our Cookie Usage
              </h2>
              <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                This policy explains how we use cookies and similar technologies on our website 
                to improve your experience and provide better services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button 
                  size="lg" 
                  className="bg-primary-600 hover:bg-primary-700 text-white border-primary-600 hover:border-primary-700"
                  onClick={() => window.location.href = '/contact#quote-form'}
                >
                  Get Your Free Estimate
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-primary-600 hover:text-white"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Us Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Sections */}
      <Section className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Cookie Practices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in transparency about how we use cookies and give you control 
              over your privacy preferences.
            </p>
          </div>

          <div className="space-y-12">
            {cookieSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-6">
                  <h3 className="text-2xl font-heading font-bold text-white flex items-center">
                    <section.icon className="w-8 h-8 mr-4 text-white" />
                    {section.title}
                  </h3>
                </div>
                
                <div className="p-8">
                  <div className="space-y-8">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">{item.subtitle}</h4>
                        <ul className="space-y-3">
                          {item.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700 leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cookie Management Tools */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                Manage Your Cookie Preferences
              </h3>
              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                You have control over your cookie preferences. Use the tools below to manage 
                how cookies are used on our website.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary-600 hover:bg-primary-700 text-white"
                  onClick={() => {
                    // This would typically open a cookie preference center
                    alert('Cookie preference center would open here');
                  }}
                >
                  Cookie Settings
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
                  onClick={() => window.location.href = '/privacy-policy'}
                >
                  Privacy Policy
                </Button>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              <strong>Last Updated:</strong> January 2025
            </p>
            <p className="text-gray-500 text-sm mt-2">
              This Cookie Policy may be updated from time to time. We will notify you of any significant changes.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Questions About Our Cookie Policy?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            If you have any questions about our use of cookies or need help managing 
            your preferences, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent-500 hover:bg-accent-600 text-white"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="!border-white !text-white hover:!bg-white hover:!text-primary-600 !border-2"
              onClick={() => window.location.href = '/services'}
            >
              View Our Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default CookiePolicy;
