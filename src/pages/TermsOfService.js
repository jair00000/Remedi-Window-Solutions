import React from 'react';
import { DocumentTextIcon, ScaleIcon, ShieldCheckIcon, ExclamationTriangleIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';

const TermsOfService = () => {
  const termsSections = [
    {
      icon: DocumentTextIcon,
      title: "Service Agreement",
      content: [
        {
          subtitle: "Acceptance of Terms",
          details: [
            "By engaging our services, you agree to be bound by these Terms of Service",
            "These terms apply to all window tinting services provided by Remedi Window Solution",
            "We reserve the right to modify these terms at any time with notice",
            "Continued use of our services constitutes acceptance of any changes"
          ]
        },
        {
          subtitle: "Service Description",
          details: [
            "Professional window film installation for residential, commercial, and institutional properties",
            "Solar control, security, privacy, and decorative window film solutions",
            "Free estimates, consultation, and project management services",
            "Warranty coverage on materials and workmanship as specified"
          ]
        },
        {
          subtitle: "Service Area",
          details: [
            "We provide services in Starkville, Columbus, Tupelo, Oxford, and Tuscaloosa",
            "Additional areas may be served with prior agreement and additional fees",
            "Service availability subject to scheduling and weather conditions",
            "Remote consultations available for planning and estimates"
          ]
        }
      ]
    },
    {
      icon: ScaleIcon,
      title: "Pricing and Payment",
      content: [
        {
          subtitle: "Estimates and Quotes",
          details: [
            "All estimates are provided free of charge with no obligation",
            "Quotes are valid for 30 days from the date of issue",
            "Final pricing may vary based on actual measurements and conditions",
            "Additional charges may apply for complex installations or special requirements"
          ]
        },
        {
          subtitle: "Payment Terms",
          details: [
            "Payment is due upon completion of services unless other arrangements are made",
            "We accept cash, check, and major credit cards",
            "Commercial accounts may be eligible for net payment terms",
            "Late payment fees may apply to overdue accounts"
          ]
        },
        {
          subtitle: "Pricing Changes",
          details: [
            "We reserve the right to adjust pricing for materials and labor",
            "Price changes will be communicated before work begins",
            "Existing contracts will be honored at agreed-upon rates",
            "Market conditions may affect material costs and availability"
          ]
        }
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: "Warranties and Guarantees",
      content: [
        {
          subtitle: "Material Warranty",
          details: [
            "Avery Dennison window films come with manufacturer warranties",
            "Warranty coverage varies by film type and application",
            "Warranty claims must be submitted through our company",
            "Normal wear and tear and improper maintenance are not covered"
          ]
        },
        {
          subtitle: "Workmanship Guarantee",
          details: [
            "We guarantee our installation work for the duration of the material warranty",
            "Defects in installation will be corrected at no charge",
            "Customer satisfaction is our priority - we stand behind our work",
            "Warranty service requires reasonable access to the installation site"
          ]
        },
        {
          subtitle: "Limitations",
          details: [
            "Warranties do not cover damage from misuse, accidents, or natural disasters",
            "Glass breakage is not covered unless caused by installation defects",
            "Warranty claims must be reported within reasonable timeframes",
            "Some exclusions may apply based on specific circumstances"
          ]
        }
      ]
    },
    {
      icon: ExclamationTriangleIcon,
      title: "Limitations and Disclaimers",
      content: [
        {
          subtitle: "Service Limitations",
          details: [
            "Installation success depends on proper surface preparation and conditions",
            "Some windows may not be suitable for film application",
            "Weather conditions may affect installation schedules and quality",
            "Customer cooperation is required for successful project completion"
          ]
        },
        {
          subtitle: "Liability Limitations",
          details: [
            "Our liability is limited to the cost of services provided",
            "We are not responsible for pre-existing window or glass issues",
            "Customer assumes responsibility for property access and safety",
            "Force majeure events may affect service delivery"
          ]
        },
        {
          subtitle: "Performance Expectations",
          details: [
            "Film performance may vary based on environmental conditions",
            "Energy savings estimates are based on typical conditions",
            "Visual appearance may vary slightly from samples or photos",
            "Customer expectations should be realistic and communicated clearly"
          ]
        }
      ]
    },
    {
      icon: ClockIcon,
      title: "Scheduling and Cancellation",
      content: [
        {
          subtitle: "Appointment Scheduling",
          details: [
            "Installation dates are scheduled based on availability and weather",
            "We will provide advance notice of scheduled appointments",
            "Customer confirmation is required before work begins",
            "Rescheduling may be necessary due to weather or other factors"
          ]
        },
        {
          subtitle: "Cancellation Policy",
          details: [
            "Cancellations must be made at least 24 hours in advance",
            "Same-day cancellations may incur a service fee",
            "Weather-related cancellations are rescheduled at no charge",
            "Deposits may be forfeited for no-show appointments"
          ]
        },
        {
          subtitle: "Project Timeline",
          details: [
            "Project completion times vary based on scope and complexity",
            "We will provide realistic timelines during the estimate process",
            "Delays may occur due to weather, material availability, or site conditions",
            "Communication will be maintained throughout the project"
          ]
        }
      ]
    },
    {
      icon: UserGroupIcon,
      title: "Customer Responsibilities",
      content: [
        {
          subtitle: "Site Preparation",
          details: [
            "Clear access to windows and work areas must be provided",
            "Remove or secure valuable items near installation areas",
            "Ensure safe working conditions for our installation team",
            "Provide access to electrical outlets and water if needed"
          ]
        },
        {
          subtitle: "Communication",
          details: [
            "Provide accurate contact information and availability",
            "Communicate any special requirements or concerns",
            "Be available for questions during the installation process",
            "Report any issues promptly after installation completion"
          ]
        },
        {
          subtitle: "Post-Installation Care",
          details: [
            "Follow care instructions provided with your installation",
            "Allow proper curing time before cleaning or touching films",
            "Use recommended cleaning products and methods",
            "Contact us immediately if problems are noticed"
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
            backgroundImage: `url('/images/about/About-Hero-logo.webp')`,
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
                Terms of <span className="text-primary-400">Service</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary-300">
                Professional Service Agreement
              </h2>
              <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                These terms outline our commitment to providing professional window tinting services 
                and establish the framework for our business relationship with you.
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

      {/* Terms Sections */}
      <Section className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Service Terms and Conditions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please review these terms carefully. By engaging our services, you agree to be bound 
              by these terms and conditions.
            </p>
          </div>

          <div className="space-y-12">
            {termsSections.map((section, sectionIndex) => (
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
                Questions About Our Terms?
              </h3>
              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                If you have any questions about these Terms of Service or need clarification 
                on any aspect of our service agreement, please contact us.
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
              These Terms of Service may be updated from time to time. We will notify you of any significant changes.
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
            Contact us today for a free estimate and let us provide you with professional 
            window tinting services you can trust.
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

export default TermsOfService;
