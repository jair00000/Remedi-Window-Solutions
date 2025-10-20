import React from 'react';
import { ShieldCheckIcon, EyeIcon, LockClosedIcon, DocumentTextIcon, UserIcon, CogIcon } from '@heroicons/react/24/outline';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';

const PrivacyPolicy = () => {
  const policySections = [
    {
      icon: DocumentTextIcon,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          details: [
            "Name, email address, phone number, and mailing address when you request a quote or contact us",
            "Property address and details for service estimates and installations",
            "Payment information (processed securely through third-party payment processors)",
            "Communication preferences and service history"
          ]
        },
        {
          subtitle: "Technical Information",
          details: [
            "Website usage data, including pages visited, time spent, and navigation patterns",
            "Device information such as IP address, browser type, and operating system",
            "Cookies and similar tracking technologies to improve user experience",
            "Location data (if you choose to share it for service area verification)"
          ]
        },
        {
          subtitle: "Service-Related Information",
          details: [
            "Window measurements, film specifications, and installation requirements",
            "Before and after photos of completed projects (with your consent)",
            "Customer feedback, testimonials, and service reviews",
            "Warranty and maintenance records"
          ]
        }
      ]
    },
    {
      icon: EyeIcon,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery",
          details: [
            "Provide accurate quotes and estimates for window film installation",
            "Schedule and perform professional window tinting services",
            "Communicate about appointments, service updates, and project status",
            "Process payments and maintain service records"
          ]
        },
        {
          subtitle: "Business Operations",
          details: [
            "Improve our services and develop new offerings",
            "Analyze website performance and user experience",
            "Conduct market research and customer satisfaction surveys",
            "Maintain quality control and service standards"
          ]
        },
        {
          subtitle: "Marketing and Communications",
          details: [
            "Send promotional materials about our window film services (with your consent)",
            "Share educational content about energy efficiency and window solutions",
            "Notify you about special offers, new services, or seasonal promotions",
            "Request feedback and reviews to improve our services"
          ]
        }
      ]
    },
    {
      icon: LockClosedIcon,
      title: "Information Protection",
      content: [
        {
          subtitle: "Security Measures",
          details: [
            "Encrypted data transmission using SSL/TLS protocols",
            "Secure storage of personal information in protected databases",
            "Regular security audits and system updates",
            "Limited access to personal data on a need-to-know basis"
          ]
        },
        {
          subtitle: "Data Retention",
          details: [
            "Customer information is retained for the duration of our business relationship",
            "Service records are kept for warranty and maintenance purposes",
            "Marketing data is retained until you opt out or request deletion",
            "Legal and regulatory requirements may require longer retention periods"
          ]
        },
        {
          subtitle: "Third-Party Security",
          details: [
            "Payment processing through PCI-compliant service providers",
            "Email marketing through secure, reputable platforms",
            "Website hosting with industry-standard security measures",
            "Regular assessment of third-party security practices"
          ]
        }
      ]
    },
    {
      icon: UserIcon,
      title: "Your Privacy Rights",
      content: [
        {
          subtitle: "Access and Control",
          details: [
            "Request access to your personal information we have collected",
            "Update or correct inaccurate personal information",
            "Request deletion of your personal information (subject to legal requirements)",
            "Opt out of marketing communications at any time"
          ]
        },
        {
          subtitle: "Data Portability",
          details: [
            "Receive a copy of your personal data in a structured format",
            "Transfer your data to another service provider if requested",
            "Export your service history and project information",
            "Maintain control over your personal information"
          ]
        },
        {
          subtitle: "Consent Management",
          details: [
            "Withdraw consent for data processing at any time",
            "Choose which communications you wish to receive",
            "Control how your information is used for marketing purposes",
            "Request restrictions on certain data processing activities"
          ]
        }
      ]
    },
    {
      icon: CogIcon,
      title: "Cookies and Tracking",
      content: [
        {
          subtitle: "Types of Cookies",
          details: [
            "Essential cookies for website functionality and security",
            "Analytics cookies to understand website usage and performance",
            "Marketing cookies to deliver relevant advertisements",
            "Preference cookies to remember your settings and choices"
          ]
        },
        {
          subtitle: "Cookie Management",
          details: [
            "You can control cookies through your browser settings",
            "Disabling certain cookies may affect website functionality",
            "We provide clear information about cookie usage",
            "Regular updates to our cookie policy as needed"
          ]
        },
        {
          subtitle: "Third-Party Tracking",
          details: [
            "Google Analytics for website performance monitoring",
            "Social media tracking for engagement measurement",
            "Advertising networks for targeted marketing (with consent)",
            "Clear disclosure of all tracking technologies used"
          ]
        }
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: "Legal Compliance",
      content: [
        {
          subtitle: "Applicable Laws",
          details: [
            "Compliance with federal and state privacy laws",
            "Adherence to industry standards and best practices",
            "Regular review and updates of privacy practices",
            "Cooperation with regulatory authorities when required"
          ]
        },
        {
          subtitle: "Data Breach Response",
          details: [
            "Immediate investigation of any suspected data breaches",
            "Notification to affected individuals within required timeframes",
            "Cooperation with law enforcement and regulatory authorities",
            "Implementation of additional security measures as needed"
          ]
        },
        {
          subtitle: "International Transfers",
          details: [
            "Personal data may be processed in the United States",
            "Adequate protection measures for any international transfers",
            "Compliance with applicable international privacy laws",
            "Clear disclosure of data processing locations"
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
                Privacy <span className="text-primary-400">Policy</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary-300">
                Your Privacy Matters to Us
              </h2>
              <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                At Remedi Window Solution, we are committed to protecting your privacy and personal information. 
                This policy explains how we collect, use, and safeguard your data when you use our services.
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

      {/* Policy Sections */}
      <Section className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Privacy Commitment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in transparency and giving you control over your personal information. 
              This policy outlines our practices and your rights regarding data privacy.
            </p>
          </div>

          <div className="space-y-12">
            {policySections.map((section, sectionIndex) => (
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

          {/* Contact Information */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                Questions About Your Privacy?
              </h3>
              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                If you have any questions about this Privacy Policy or how we handle your personal information, 
                please don't hesitate to contact us. We're here to help and ensure your privacy is protected.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary-600 hover:bg-primary-700 text-white"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Us
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
                  onClick={() => window.location.href = 'mailto:hunter@remediwindowsolutions.com'}
                >
                  Email Us
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
              This Privacy Policy may be updated from time to time. We will notify you of any significant changes.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Trust us with your window tinting needs. We're committed to protecting your privacy 
            while delivering exceptional service and results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent-500 hover:bg-accent-600 text-white"
              onClick={() => window.location.href = '/contact#quote-form'}
            >
              Get Free Estimate
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

export default PrivacyPolicy;
