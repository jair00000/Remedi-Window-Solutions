import React, { useState } from 'react';
import { 
  ChevronDownIcon, 
  ChevronUpIcon, 
  MagnifyingGlassIcon,
  SunIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';

const FAQs = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqSections = [
    {
      title: "General Window Film Questions",
      icon: MagnifyingGlassIcon,
      questions: [
        {
          question: "What is window film and how does it work?",
          answer: "Window film is a thin, multi-layered polyester material that's applied to the interior surface of glass windows. It works by reflecting, absorbing, or filtering solar energy, UV rays, and visible light to improve comfort, energy efficiency, and protection."
        },
        {
          question: "How long does window film last?",
          answer: "High-quality window films like Avery Dennison can last 10-15 years or more with proper installation and maintenance. The lifespan depends on the film type, quality, and environmental conditions."
        },
        {
          question: "Can window film be removed?",
          answer: "Yes, window film can be removed, but it's best done by professionals to avoid damaging the glass or leaving adhesive residue. We provide professional removal services when needed."
        },
        {
          question: "Will window film affect my view?",
          answer: "Modern window films are designed to maintain excellent visibility while providing protection. Some films may have a slight tint, but high-quality films offer clear views with minimal visual impact."
        }
      ]
    },
    {
      title: "Solar Control Films",
      icon: SunIcon,
      questions: [
        {
          question: "What are solar control films?",
          answer: "Solar control films are designed to reduce heat and glare from the sun while maintaining natural light. They help keep interiors cooler, reduce energy costs, and protect against UV damage."
        },
        {
          question: "How much can solar control films reduce heat?",
          answer: "Solar control films can reduce heat transmission by 30-80% depending on the film type. This can lead to significant energy savings, especially in hot climates like Mississippi."
        },
        {
          question: "Do solar control films work in winter?",
          answer: "Yes, solar control films work year-round. In winter, they help retain interior heat by reflecting it back inside, contributing to energy efficiency in both seasons."
        },
        {
          question: "Can solar control films prevent fading?",
          answer: "Absolutely! Solar control films block up to 99% of harmful UV rays, which are the primary cause of fading in furniture, carpets, artwork, and other interior items."
        }
      ]
    },
    {
      title: "Security Films",
      icon: ShieldCheckIcon,
      questions: [
        {
          question: "What are security films?",
          answer: "Security films are thick, multi-layered films that hold glass together when shattered, preventing dangerous glass fragments from flying and making it harder for intruders to break through."
        },
        {
          question: "How strong are security films?",
          answer: "Security films can make glass 2-4 times stronger than regular glass. They hold shattered glass in place, creating a barrier that's difficult to penetrate quickly."
        },
        {
          question: "Are security films visible?",
          answer: "High-quality security films are virtually invisible when properly installed. They maintain the appearance of your windows while providing enhanced protection."
        },
        {
          question: "Do security films provide privacy?",
          answer: "Some security films can be combined with privacy features, but their primary function is protection. For privacy, we recommend combining security films with privacy films."
        }
      ]
    },
    {
      title: "Privacy Films",
      icon: LockClosedIcon,
      questions: [
        {
          question: "What types of privacy films are available?",
          answer: "We offer various privacy films including frosted, etched, decorative patterns, and one-way mirror films. Each provides different levels of privacy while maintaining natural light."
        },
        {
          question: "Can privacy films be applied to existing windows?",
          answer: "Yes, privacy films are perfect for existing windows. They're a cost-effective alternative to replacing windows or installing blinds, providing immediate privacy enhancement."
        },
        {
          question: "Do privacy films block all visibility?",
          answer: "Privacy films range from complete opacity to partial visibility depending on the type. We can help you choose the right level of privacy for your specific needs."
        },
        {
          question: "Can privacy films be removed later?",
          answer: "Yes, privacy films can be removed if your needs change. However, some decorative films may require professional removal to avoid damage."
        }
      ]
    },
    {
      title: "Decorative Films",
      icon: PaintBrushIcon,
      questions: [
        {
          question: "What are decorative films?",
          answer: "Decorative films add aesthetic appeal to windows with various patterns, textures, and designs. They can mimic etched glass, stained glass, or create unique visual effects."
        },
        {
          question: "Can decorative films provide privacy too?",
          answer: "Yes, many decorative films offer both aesthetic appeal and privacy. They can obscure views while adding beautiful design elements to your space."
        },
        {
          question: "Are decorative films customizable?",
          answer: "Yes, we offer custom decorative films with various patterns, colors, and designs. We can help create unique solutions that match your interior design."
        },
        {
          question: "Where are decorative films commonly used?",
          answer: "Decorative films are popular in offices, restaurants, retail spaces, bathrooms, conference rooms, and residential areas where both privacy and aesthetics are desired."
        }
      ]
    },
    {
      title: "Installation & Service",
      icon: WrenchScrewdriverIcon,
      questions: [
        {
          question: "How long does installation take?",
          answer: "Installation time varies by project size and complexity. Residential projects typically take 2-4 hours, while commercial projects may take 1-3 days depending on the scope."
        },
        {
          question: "Do I need to prepare my windows before installation?",
          answer: "We handle all preparation work, but we recommend removing any window treatments and ensuring clear access to windows. We'll provide specific instructions before installation."
        },
        {
          question: "What areas do you serve?",
          answer: "We proudly serve Starkville, Columbus, Tupelo, Oxford, and Tuscaloosa. We provide professional window film installation throughout North Mississippi and West Alabama."
        },
        {
          question: "Do you offer warranties?",
          answer: "Yes, we provide comprehensive warranties on our installations and films. Avery Dennison films come with manufacturer warranties, and we stand behind our workmanship."
        },
        {
          question: "What if I'm not satisfied with the installation?",
          answer: "We're committed to 100% customer satisfaction. If you're not completely happy with our work, we'll make it right. Your satisfaction is our guarantee."
        }
      ]
    },
    {
      title: "Cost & Estimates",
      icon: CurrencyDollarIcon,
      questions: [
        {
          question: "How much does window film cost?",
          answer: "Cost varies based on film type, window size, and project complexity. We provide free, no-obligation estimates to give you accurate pricing for your specific needs."
        },
        {
          question: "Do you offer free estimates?",
          answer: "Yes, we provide completely free estimates with no hidden fees or obligations. Our estimates include detailed pricing and recommendations for your project."
        },
        {
          question: "Are there financing options available?",
          answer: "We offer flexible payment options and can discuss financing solutions for larger projects. Contact us to learn about available payment plans."
        },
        {
          question: "What factors affect the cost?",
          answer: "Cost factors include film type, window size and quantity, installation complexity, accessibility, and any special requirements. We'll explain all costs upfront."
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
                Frequently Asked <span className="text-primary-400">Questions</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary-300">
                Everything You Need to Know About Window Films
              </h2>
              <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                Find answers to common questions about window films, installation, and our services. 
                From solar control to security films, we've got you covered with expert insights.
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

      {/* FAQ Sections */}
      <Section className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Common Questions & Answers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our comprehensive FAQ sections to find answers to your questions about window films and our services.
            </p>
          </div>

          <div className="space-y-12">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-6">
                  <h3 className="text-2xl font-heading font-bold text-white flex items-center">
                    <section.icon className="w-8 h-8 mr-4 text-white" />
                    {section.title}
                  </h3>
                </div>
                
                <div className="p-8">
                  <div className="space-y-4">
                    {section.questions.map((item, itemIndex) => {
                      const globalIndex = `${sectionIndex}-${itemIndex}`;
                      const isOpen = openItems[globalIndex];
                      
                      return (
                        <div key={itemIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                          >
                            <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                            {isOpen ? (
                              <ChevronUpIcon className="w-5 h-5 text-primary-600 flex-shrink-0" />
                            ) : (
                              <ChevronDownIcon className="w-5 h-5 text-primary-600 flex-shrink-0" />
                            )}
                          </button>
                          
                          {isOpen && (
                            <div className="px-6 py-4 bg-white border-t border-gray-200">
                              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our expert team is here to help. 
            Contact us for personalized advice and free estimates.
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
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default FAQs;
