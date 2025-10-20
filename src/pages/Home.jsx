import React from 'react';
import { BoltIcon, SunIcon, SparklesIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import Section from '../components/UI/Section';
import Container from '../components/UI/Container';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const Home = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      title: 'Residential Solutions',
      description: 'Your home deserves the best protection from heat, glare, and harmful UV rays.',
      image: `${import.meta.env.BASE_URL}images/home/home-services-resdiential.webp`,
      features: ['Energy Efficiency', 'UV Protection', 'Privacy Enhancement'],
      link: '/residential'
    },
    {
      title: 'Commercial Solutions',
      description: 'A productive business environment starts with comfort and efficiency.',
      image: `${import.meta.env.BASE_URL}images/home/home-services-commercial.webp`,
      features: ['Professional Results', 'Cost Savings', 'Enhanced Security'],
      link: '/commercial'
    },
    {
      title: 'Government & Schools Solutions',
      description: 'Safety, comfort, and efficiency are essential for public buildings.',
      image: `${import.meta.env.BASE_URL}images/home/home-services-government&schools.webp`,
      features: ['Safety & Security', 'Compliance', 'Long-term Performance'],
      link: '/institutional'
    }
  ];

  const features = [
    {
      title: 'Energy Efficiency',
      description: 'Cut energy costs by up to 30% with our premium window films.',
      icon: BoltIcon
    },
    {
      title: 'UV & Glare Protection',
      description: 'Block 99% of harmful rays and reduce glare.',
      icon: SunIcon
    },
    {
      title: 'Aesthetic Appeal',
      description: 'Improve property value and appearance.',
      icon: SparklesIcon
    },
    {
      title: 'Certified Installer',
      description: 'Professional results every time with certified installation.',
      icon: WrenchScrewdriverIcon
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/home/hero-home.webp)`,
            backgroundPosition: 'center right'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        
        <Container className="relative z-10 text-center text-white flex items-center justify-center h-full px-4 sm:px-6 pt-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 animate-fade-in leading-tight">
              <span className="text-primary-500 block xs:inline">NORTH MISSISSIPPI'S</span>
              <span className="block text-white mt-1 xs:mt-0 xs:ml-2">WINDOW TINTING EXPERTS</span>
            </h1>
            <p className="text-sm md:text-base mb-8 text-white animate-slide-up max-w-3xl mx-auto leading-relaxed px-2">
              Remedi Window Solutions provides professional window tinting services for residential, commercial, and institutional clients across Starkville, Columbus, Tupelo, Oxford, and Tuscaloosa.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-up px-4">
              <Button 
                size="lg" 
                className="bg-primary-500 hover:bg-primary-600 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                onClick={() => navigate('/contact')}
              >
                FREE QUOTATION
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <Section id="services-section" className="services-section bg-white dark:bg-gray-900 transition-colors duration-300 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8 lg:gap-16 mb-12 sm:mb-16 px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 w-full lg:w-auto">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-white leading-tight">
              <span className="block">EXPLORE</span>
              <span className="block">OUR SERVICES</span>
            </h2>
          </div>
          <div className="flex-1 w-full">
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              At Remedi, we don't just tint windows — we transform environments. Our mission is to create spaces that feel cooler, safer, and more efficient, using the industry's most advanced films and installation techniques.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <Card key={index} hover className="text-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-900 dark:border-gray-100">
              <div className="h-40 sm:h-48 mb-3 sm:mb-4 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-black mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3"
                  onClick={() => navigate(service.link)}
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* About Section */}
      <div className="relative min-h-[500px] sm:min-h-[600px] overflow-hidden w-full bg-white dark:bg-gray-900 transition-colors duration-300">
          {/* Full Width Background Image */}
          <img 
            src={`${import.meta.env.BASE_URL}images/home/home-about-section.webp`} 
            alt="About Remedi Window Solutions"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Mobile: Full Width Overlay, Desktop: Left Side Only with Diagonal Cut */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-black/80 flex items-center lg:[clip-path:polygon(0_0,85%_0,100%_100%,0_100%)]">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16">
              <div className="max-w-lg mx-auto lg:mx-0">
                <h3 className="text-primary-500 text-sm sm:text-base lg:text-lg font-semibold mb-3 sm:mb-4 tracking-wide">
                  ABOUT REMEDI
                </h3>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6 leading-tight text-white">
                  Professional Window Glass
                  <span className="block">Tinting for Homes & Businesses</span>
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  Transforming Glass into Comfort and Efficiency
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  Remedi is a locally owned window tint company serving North Mississippi. We help homeowners, businesses, and institutions enhance comfort, security, and energy efficiency with high-performance window films. Our skilled team combines local expertise with cutting-edge technology - ensuring every installation is flawless, durable, and beautiful.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button 
                    size="sm"
                    className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-xs sm:text-sm w-full sm:w-auto"
                    onClick={() => navigate('/about')}
                  >
                    LEARN MORE
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-white text-white hover:bg-primary-500 hover:text-white font-semibold px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-xs sm:text-sm w-full sm:w-auto"
                    onClick={() => navigate('/services')}
                  >
                    VIEW FILMS
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Our Projects Section */}
      <Section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-6">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            SOME OF OUR PROJECTS
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We serve in North Mississippi across Starkville, Columbus, Tupelo, Oxford, and Tuscaloosa. 
            Our professional window tinting projects showcase our commitment to quality, energy efficiency, 
            and customer satisfaction throughout the region.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 px-4 sm:px-6">
          {/* Project 1 - Large */}
          <div className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <img 
              src={`${import.meta.env.BASE_URL}images/home/home-projects1.webp`} 
              alt="Security Window Film Installation & Anchoring1"
              className="w-full h-48 sm:h-64 md:h-80 lg:h-full object-cover brightness-50 group-hover:brightness-100 group-hover:scale-105 transition-all duration-300"
              loading="lazy"
              decoding="async"
              style={{ 
                imageRendering: '-webkit-optimize-contrast'
              }}
            />
          </div>

          {/* Project 2 - Medium */}
          <div className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <img 
              src={`${import.meta.env.BASE_URL}images/home/home-projects2.webp`} 
              alt="Security Window Film Installation & Anchoring2"
              className="w-full h-48 sm:h-64 object-cover brightness-50 group-hover:brightness-100 group-hover:scale-105 transition-all duration-300"
              loading="lazy"
              decoding="async"
              style={{ 
                imageRendering: '-webkit-optimize-contrast'
              }}
            />
          </div>

          {/* Project 3 - Medium */}
          <div className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <img 
              src={`${import.meta.env.BASE_URL}images/home/home-projects3.webp`} 
              alt="Security Window Film Installation & Anchoring3"
              className="w-full h-48 sm:h-64 object-cover brightness-50 group-hover:brightness-100 group-hover:scale-105 transition-all duration-300"
              loading="lazy"
              decoding="async"
              style={{ 
                imageRendering: '-webkit-optimize-contrast'
              }}
            />
          </div>

          {/* Project 4 - Wide */}
          <div className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 sm:col-span-2">
            <img 
              src={`${import.meta.env.BASE_URL}images/home/home-projects4.webp`} 
              alt="Security Window Film Installation & Anchoring4"
              className="w-full h-48 sm:h-64 object-cover brightness-50 group-hover:brightness-100 group-hover:scale-105 transition-all duration-300"
              loading="lazy"
              decoding="async"
              style={{ 
                imageRendering: '-webkit-optimize-contrast'
              }}
            />
          </div>
        </div>

        {/* Project Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center px-4 sm:px-6">
          <Card className="p-4 sm:p-6 lg:p-8 text-center border border-gray-900 dark:border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-500 mb-2">Security</h3>
            <p className="text-black font-medium text-sm sm:text-base">Enhanced Protection</p>
            <p className="text-xs sm:text-sm text-black mt-2">Advanced security films for your safety</p>
          </Card>
          <Card className="p-4 sm:p-6 lg:p-8 text-center border border-gray-900 dark:border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-500 mb-2">5</h3>
            <p className="text-black font-medium text-sm sm:text-base">Cities Served</p>
            <p className="text-xs sm:text-sm text-black mt-2">Starkville, Columbus, Tupelo, Oxford, Tuscaloosa</p>
          </Card>
          <Card className="p-4 sm:p-6 lg:p-8 text-center border border-gray-900 dark:border-gray-100 sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-500 mb-2">Expert Installation</h3>
            <p className="text-black font-medium text-sm sm:text-base">Professional Results</p>
            <p className="text-xs sm:text-sm text-black mt-2">Certified installers with precision techniques</p>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12 px-4 sm:px-6">
          <Button 
            size="lg" 
            className="bg-primary-500 hover:bg-primary-600 text-white text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            onClick={() => navigate('/projects')}
          >
            View All Projects
          </Button>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-6">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            WHY CHOOSE REMEDI?
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're committed to delivering exceptional service and quality workmanship on every project across North Mississippi and West Alabama.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 px-4 sm:px-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-900 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-900 dark:border-gray-100">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-500/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </Section>

      {/* Cities We Serve - Full Width Background with Overlay */}
      <div className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] overflow-hidden w-full">
        {/* Full Width Background Image */}
        <img 
          src={`${import.meta.env.BASE_URL}images/home/Mississippi-map.webp`}
          alt="Mississippi and Alabama Service Areas Map"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Mobile: Full Width Overlay, Desktop: Left Side Only with Diagonal Cut */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-black/80 flex items-center lg:[clip-path:polygon(0_0,85%_0,100%_100%,0_100%)]">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h3 className="text-primary-500 text-sm sm:text-base lg:text-lg font-semibold mb-3 sm:mb-4 tracking-wide">
                 CITIES WE PROUDLY SERVE
               </h3>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6 leading-tight text-white">
                Serving North Mississippi
                <span className="block">& West Alabama</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Professional window tinting services across our region, bringing quality and expertise to your local community.
              </p>
              
              {/* Modern City Cards Grid */}
              <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
               {/* Starkville */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 hover:bg-white/15 transition-all duration-300 hover:shadow-lg">
                  <h4 className="text-white font-semibold text-base sm:text-lg mb-1">Starkville</h4>
                 <p className="text-white/80 text-xs sm:text-sm">Mississippi State University</p>
               </div>

               {/* Columbus */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 hover:bg-white/15 transition-all duration-300 hover:shadow-lg">
                  <h4 className="text-white font-semibold text-base sm:text-lg mb-1">Columbus</h4>
                 <p className="text-white/80 text-xs sm:text-sm">The Possum Town</p>
               </div>

               {/* Tupelo */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 hover:bg-white/15 transition-all duration-300 hover:shadow-lg">
                  <h4 className="text-white font-semibold text-base sm:text-lg mb-1">Tupelo</h4>
                 <p className="text-white/80 text-xs sm:text-sm">Elvis Presley's birthplace</p>
               </div>

               {/* Oxford */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 hover:bg-white/15 transition-all duration-300 hover:shadow-lg">
                  <h4 className="text-white font-semibold text-base sm:text-lg mb-1">Oxford</h4>
                 <p className="text-white/80 text-xs sm:text-sm">Ole Miss</p>
                </div>
               </div>

              {/* Tuscaloosa - Full Width */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 hover:bg-white/15 transition-all duration-300 hover:shadow-lg mb-6 sm:mb-8">
                <h4 className="text-white font-semibold text-base sm:text-lg mb-1">Tuscaloosa</h4>
                 <p className="text-white/80 text-xs sm:text-sm">West-central Alabama</p>
               </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  size="sm"
                  className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-xs sm:text-sm w-full sm:w-auto"
                >
                  GET FREE QUOTE
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-white text-white hover:bg-black/20 hover:text-white font-semibold px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-xs sm:text-sm w-full sm:w-auto"
                  onClick={() => {
                    const servicesSection = document.querySelector('.services-section');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  LEARN MORE
                </Button>
               </div>
             </div>
               </div>
             </div>
           </div>

      {/* Testimonials Section */}
      <Section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-6">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6">
            Don't just take our word for it. Here's what our satisfied customers across North Mississippi and West Alabama have to say about their experience with Remedi Window Solutions.
          </p>
          <div className="bg-yellow-100 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-3 sm:p-4 max-w-4xl mx-auto transition-colors duration-300">
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 italic">
              <strong>Note:</strong> These testimonials were collected before our website launch to ensure Google recognizes them as authentic customer reviews and doesn't flag them as malicious or fake.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6">
          {/* Sarah Johnson */}
          <Card className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300 border border-gray-900 dark:border-gray-100">
            <div className="p-4 sm:p-6">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-primary-600 font-bold text-sm sm:text-lg">SJ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Sarah Johnson</h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Residential Customer</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                "Remedi Window Solutions did a fantastic job on our home windows. The crew arrived on time, walked me through the entire process, and made sure every detail was perfect. They were polite and easy to work with from start to finish. The results look amazing — our house feels cooler and much more private. Highly recommended!"
              </p>
            </div>
          </Card>

          {/* Michael Rodriguez */}
          <Card className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300 border border-gray-900 dark:border-gray-100">
            <div className="p-4 sm:p-6">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-primary-600 font-bold text-sm sm:text-lg">MR</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Michael Rodriguez</h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Residential Customer</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                "We had our home windows tinted by Remedi Window Solutions, and the whole experience went smoothly. They explained the options clearly before starting and kept us informed throughout the job. The team was professional, fast, and neat. You can really tell they care about their work. Definitely worth it."
              </p>
            </div>
          </Card>

          {/* Andrew Thompson */}
          <Card className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300 border border-gray-900 dark:border-gray-100">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-bold text-lg">AT</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white dark:text-white">Andrew Thompson</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 dark:text-gray-300">Commercial Customer</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                "Our company hired Remedi Window Solutions for a commercial tinting project, and we couldn't be happier. The team was very knowledgeable about different glass types and helped us choose the right tint for our office. Everything was finished on schedule, and the quality exceeded expectations."
              </p>
            </div>
          </Card>

          {/* Samantha Wilson */}
          <Card className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300 border border-gray-900 dark:border-gray-100">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-bold text-lg">SW</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white dark:text-white">Samantha Wilson</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 dark:text-gray-300">Residential Customer</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                "I'm beyond pleased with the results of our home tinting project. The Remedi team was organized and respectful of our space. They cleaned up after themselves and made sure the finish was flawless. You can tell they take pride in their work — I'll be using them again for future projects."
              </p>
            </div>
          </Card>

          {/* Steven Mitchell */}
          <Card className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300 border border-gray-900 dark:border-gray-100">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-bold text-lg">SM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Steven Mitchell</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Residential Customer</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                "Outstanding service from start to finish. Communication was clear the whole way through, and any questions I had were answered right away. The installers were professional and worked efficiently. I'd recommend Remedi Window Solutions to anyone who wants reliable and high-quality window tinting."
              </p>
            </div>
          </Card>

          {/* Mark Anderson */}
          <Card className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300 border border-gray-900 dark:border-gray-100">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-bold text-lg">MA</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Mark Anderson</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Commercial Customer</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                "We've used Remedi Window Solutions twice now for two different business locations. Both times, the work was excellent — consistent quality, great communication, and zero hassle. It's hard to find companies that maintain this level of service every time. Highly recommended."
              </p>
            </div>
          </Card>

          {/* Alexander Davis */}
          <Card className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300 border border-gray-900 dark:border-gray-100">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-bold text-lg">AD</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Alexander Davis</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Residential & Commercial</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                "Remedi Window Solutions is one of those companies you can trust right away. They handled our residential and commercial tinting projects with total professionalism. The staff gave great advice and delivered exactly what they promised. The tint looks sharp and helps a lot with heat control."
              </p>
            </div>
          </Card>

          {/* Matthew Brown */}
          <Card className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300 border border-gray-900 dark:border-gray-100">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-bold text-lg">MB</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Matthew Brown</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Residential Customer</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                "Very happy with our window tinting results. The team was friendly, efficient, and careful with our home. They paid attention to every small detail, which I really appreciated. Remedi Window Solutions is definitely a company I'll call again in the future."
              </p>
            </div>
          </Card>

          {/* Nicole Garcia */}
          <Card className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300 border border-gray-900 dark:border-gray-100">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-bold text-lg">NG</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Nicole Garcia</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Residential Customer</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                "Such a great experience overall. The booking process was simple, and the team arrived on time. They were respectful of our home, explained what they were doing, and made sure we were happy before leaving. You can tell they truly care about customer satisfaction. Highly recommended."
              </p>
            </div>
          </Card>
         </div>
      </Section>

      {/* Professional CTA Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 text-center w-full">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            TRANSFORM YOUR WINDOWS TODAY
          </h1>
          
          {/* Subheading */}
          <p className="text-sm sm:text-base lg:text-xl xl:text-2xl text-white/90 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed">
            Professional Window Tinting Solutions for Homes, Businesses & Institutions
          </p>
          
          {/* Cities We Serve */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 sm:mb-6">
              SERVING NORTH MISSISSIPPI & WEST ALABAMA
            </h2>
            <div className="hidden sm:flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8">
              <div className="bg-white/15 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full text-white text-xs sm:text-sm lg:text-base font-medium">
                Starkville
              </div>
              <div className="bg-white/15 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full text-white text-xs sm:text-sm lg:text-base font-medium">
                Columbus
              </div>
              <div className="bg-white/15 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full text-white text-xs sm:text-sm lg:text-base font-medium">
                Tupelo
              </div>
              <div className="bg-white/15 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full text-white text-xs sm:text-sm lg:text-base font-medium">
                Oxford
              </div>
              <div className="bg-white/15 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full text-white text-xs sm:text-sm lg:text-base font-medium">
                Tuscaloosa
              </div>
            </div>
          </div>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 max-w-5xl mx-auto">
            <div className="bg-white/10 p-4 sm:p-6 lg:p-8 rounded-xl border border-white/20">
              <div className="flex justify-center mb-3 sm:mb-4">
                <BoltIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <h3 className="text-white text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">Energy Savings</h3>
              <p className="text-white/80 text-xs sm:text-sm lg:text-base">Up to 30% reduction in cooling costs</p>
            </div>
            <div className="bg-white/10 p-4 sm:p-6 lg:p-8 rounded-xl border border-white/20">
              <div className="flex justify-center mb-3 sm:mb-4">
                <SunIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <h3 className="text-white text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">UV Protection</h3>
              <p className="text-white/80 text-xs sm:text-sm lg:text-base">Block 99% of harmful UV rays</p>
            </div>
            <div className="bg-white/10 p-4 sm:p-6 lg:p-8 rounded-xl border border-white/20 sm:col-span-2 lg:col-span-1">
              <div className="flex justify-center mb-3 sm:mb-4">
                <SparklesIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <h3 className="text-white text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">Enhanced Comfort</h3>
              <p className="text-white/80 text-xs sm:text-sm lg:text-base">Create comfortable living and working environments</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12">
            <button
              className="bg-white text-primary-600 hover:bg-gray-100 hover:text-primary-700 font-bold px-6 sm:px-8 lg:px-12 py-3 sm:py-4 text-sm sm:text-base lg:text-lg w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg border-0 cursor-pointer"
              onClick={() => window.location.href = '/contact'}
            >
              GET FREE QUOTE NOW
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold px-6 sm:px-8 lg:px-12 py-3 sm:py-4 text-sm sm:text-base lg:text-lg w-full sm:w-auto transition-all duration-300 rounded-lg bg-transparent cursor-pointer"
              onClick={() => window.location.href = '/services'}
            >
              VIEW FILMS
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="border-t border-white/20 pt-6 sm:pt-8">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-white/80 text-xs sm:text-sm lg:text-base">
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-sm sm:text-base lg:text-lg">✓</span>
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-sm sm:text-base lg:text-lg">✓</span>
                <span>Free Estimates</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-sm sm:text-base lg:text-lg">✓</span>
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-sm sm:text-base lg:text-lg">✓</span>
                <span>Same Day Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
