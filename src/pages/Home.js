import React from 'react';
import { BoltIcon, SunIcon, SparklesIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import Section from '../components/UI/Section';
import Container from '../components/UI/Container';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const Home = () => {
  const services = [
    {
      title: 'Residential Solutions',
      description: 'Your home deserves the best protection from heat, glare, and harmful UV rays.',
      image: '/images/home/home-services-resdiential.webp',
      features: ['Energy Efficiency', 'UV Protection', 'Privacy Enhancement']
    },
    {
      title: 'Commercial Solutions',
      description: 'A productive business environment starts with comfort and efficiency.',
      image: '/images/home/home-services-commercial.webp',
      features: ['Professional Results', 'Cost Savings', 'Enhanced Security']
    },
    {
      title: 'Government & Schools Solutions',
      description: 'Safety, comfort, and efficiency are essential for public buildings.',
      image: '/images/home/home-services-government&schools.webp',
      features: ['Safety & Security', 'Compliance', 'Long-term Performance']
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
      <section className="relative h-[70vh] overflow-hidden pt-48 lg:pt-52 bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/home/hero-home.webp)',
            backgroundPosition: 'center right'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        
        <Container className="relative z-10 text-center text-white flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 animate-fade-in">
              <span className="text-primary-500">NORTH MISSISSIPPI'S</span>
              <span className="block text-white">WINDOW TINTING EXPERTS</span>
            </h1>
            <p className="text-sm md:text-base mb-6 text-white animate-slide-up max-w-3xl mx-auto">
              Remedi Window Solutions provides professional window tinting services for residential, commercial, and institutional clients across Starkville, Columbus, Tupelo, Oxford, and Tuscaloosa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button size="md" className="bg-primary-500 hover:bg-primary-600 text-white">
                FREE QUOTATION
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <Section className="services-section bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 mb-16 px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white leading-tight">
              <span className="block">EXPLORE</span>
              <span className="block">OUR SERVICES</span>
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              At Remedi, we don't just tint windows — we transform environments. Our mission is to create spaces that feel cooler, safer, and more efficient, using the industry's most advanced films and installation techniques.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} hover className="text-center overflow-hidden">
              <div className="h-48 mb-4 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {service.description}
              </p>
              <Button variant="outline" className="w-full border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* About Section */}
      <div className="relative min-h-[600px] overflow-hidden w-full bg-white dark:bg-gray-900 transition-colors duration-300">
          {/* Full Width Background Image */}
          <img 
            src="/images/home/home-about-section.webp" 
            alt="About Remedi Window Solutions"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Black Tinted Card Overlay - Left Side Only with Diagonal Cut */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-black/80 flex items-center" style={{
            clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)'
          }}>
            <div className="w-full px-8 lg:px-16">
              <div className="max-w-lg">
                <h3 className="text-primary-500 text-lg font-semibold mb-4 tracking-wide">
                  ABOUT REMEDI
                </h3>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight text-white">
                  Professional Window Glass
                  <span className="block">Tinting for Homes & Businesses</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Transforming Glass into Comfort and Efficiency
                </p>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Remedi is a locally owned window tint company serving North Mississippi. We help homeowners, businesses, and institutions enhance comfort, security, and energy efficiency with high-performance window films. Our skilled team combines local expertise with cutting-edge technology - ensuring every installation is flawless, durable, and beautiful.
                </p>
                <Button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3">
                  LEARN MORE
                </Button>
              </div>
            </div>
          </div>
        </div>

      {/* Our Projects Section */}
      <Section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            SOME OF OUR PROJECTS
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We serve in North Mississippi across Starkville, Columbus, Tupelo, Oxford, and Tuscaloosa. 
            Our professional window tinting projects showcase our commitment to quality, energy efficiency, 
            and customer satisfaction throughout the region.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Project 1 - Large */}
          <div className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1 lg:row-span-2">
            <img 
              src="/images/home/home-projects1.webp" 
              alt="Security Window Film Installation & Anchoring1"
              className="w-full h-64 md:h-80 lg:h-full object-cover brightness-50 group-hover:brightness-100 group-hover:scale-105 transition-all duration-300"
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
              src="/images/home/home-projects2.webp" 
              alt="Security Window Film Installation & Anchoring2"
              className="w-full h-64 object-cover brightness-50 group-hover:brightness-100 group-hover:scale-105 transition-all duration-300"
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
              src="/images/home/home-projects3.webp" 
              alt="Security Window Film Installation & Anchoring3"
              className="w-full h-64 object-cover brightness-50 group-hover:brightness-100 group-hover:scale-105 transition-all duration-300"
              loading="lazy"
              decoding="async"
              style={{ 
                imageRendering: '-webkit-optimize-contrast'
              }}
            />
          </div>

          {/* Project 4 - Wide */}
          <div className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2">
            <img 
              src="/images/home/home-projects4.webp" 
              alt="Security Window Film Installation & Anchoring4"
              className="w-full h-64 object-cover brightness-50 group-hover:brightness-100 group-hover:scale-105 transition-all duration-300"
              loading="lazy"
              decoding="async"
              style={{ 
                imageRendering: '-webkit-optimize-contrast'
              }}
            />
          </div>
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg transition-colors duration-300">
            <h3 className="text-3xl font-bold text-primary-500 mb-2">500+</h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Projects Completed</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Across North Mississippi & West Alabama</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg transition-colors duration-300">
            <h3 className="text-3xl font-bold text-primary-500 mb-2">5</h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Cities Served</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Starkville, Columbus, Tupelo, Oxford, Tuscaloosa</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg transition-colors duration-300">
            <h3 className="text-3xl font-bold text-primary-500 mb-2">15+</h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Years Experience</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Professional Window Tinting Services</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-white">
            View All Projects
          </Button>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            WHY CHOOSE REMEDI?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're committed to delivering exceptional service and quality workmanship on every project across North Mississippi and West Alabama.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary-500" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white dark:text-white mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </Section>

      {/* Cities We Serve - Full Width Background with Overlay */}
      <div className="relative min-h-[700px] overflow-hidden w-full">
        {/* Full Width Background Image */}
        <img 
          src="/images/home/Mississippi-map.webp" 
          alt="Mississippi and Alabama Service Areas Map"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Modern Black Tinted Overlay - Left Side with Diagonal Cut */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-black/80 flex items-center" style={{
          clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)'
        }}>
          <div className="w-full px-8 lg:px-16">
            <div className="max-w-lg">
              <h3 className="text-primary-500 text-lg font-semibold mb-4 tracking-wide">
                 CITIES WE PROUDLY SERVE
               </h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight text-white">
                Serving North Mississippi
                <span className="block">& West Alabama</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Professional window tinting services across our region, bringing quality and expertise to your local community.
              </p>
              
              {/* Modern City Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
               {/* Starkville */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300 hover:shadow-lg">
                  <h4 className="text-white font-semibold text-lg mb-1">Starkville</h4>
                 <p className="text-white/80 text-sm">Mississippi State University</p>
               </div>

               {/* Columbus */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300 hover:shadow-lg">
                  <h4 className="text-white font-semibold text-lg mb-1">Columbus</h4>
                 <p className="text-white/80 text-sm">The Possum Town</p>
               </div>

               {/* Tupelo */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300 hover:shadow-lg">
                  <h4 className="text-white font-semibold text-lg mb-1">Tupelo</h4>
                 <p className="text-white/80 text-sm">Elvis Presley's birthplace</p>
               </div>

               {/* Oxford */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300 hover:shadow-lg">
                  <h4 className="text-white font-semibold text-lg mb-1">Oxford</h4>
                 <p className="text-white/80 text-sm">Ole Miss</p>
                </div>
               </div>

              {/* Tuscaloosa - Full Width */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300 hover:shadow-lg mb-8">
                <h4 className="text-white font-semibold text-lg mb-1">Tuscaloosa</h4>
                 <p className="text-white/80 text-sm">West-central Alabama</p>
               </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3">
                  GET FREE QUOTE
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-black/20 hover:text-white font-semibold px-8 py-3"
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
      <Section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
            Don't just take our word for it. Here's what our satisfied customers across North Mississippi and West Alabama have to say about their experience with Remedi Window Solutions.
          </p>
          <div className="bg-yellow-100 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 max-w-4xl mx-auto transition-colors duration-300">
            <p className="text-sm text-gray-700 dark:text-gray-300 italic">
              <strong>Note:</strong> These testimonials were collected before our website launch to ensure Google recognizes them as authentic customer reviews and doesn't flag them as malicious or fake.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sarah Johnson */}
          <Card className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-bold text-lg">SJ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white dark:text-white">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 dark:text-gray-300">Residential Customer</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                "Remedi Window Solutions did a fantastic job on our home windows. The crew arrived on time, walked me through the entire process, and made sure every detail was perfect. They were polite and easy to work with from start to finish. The results look amazing — our house feels cooler and much more private. Highly recommended!"
              </p>
            </div>
          </Card>

          {/* Michael Rodriguez */}
          <Card className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-bold text-lg">MR</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white dark:text-white">Michael Rodriguez</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 dark:text-gray-300">Residential Customer</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                "We had our home windows tinted by Remedi Window Solutions, and the whole experience went smoothly. They explained the options clearly before starting and kept us informed throughout the job. The team was professional, fast, and neat. You can really tell they care about their work. Definitely worth it."
              </p>
            </div>
          </Card>

          {/* Andrew Thompson */}
          <Card className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
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
          <Card className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
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
          <Card className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
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
          <Card className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
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
          <Card className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
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
          <Card className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
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
          <Card className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
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
      <div className="bg-gradient-to-br from-primary-600 to-primary-800" style={{padding: '100px 20px', textAlign: 'center', width: '100%'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          {/* Main Heading */}
          <h1 style={{color: 'white', fontSize: '56px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2'}}>
            TRANSFORM YOUR WINDOWS TODAY
          </h1>
          
          {/* Subheading */}
          <p style={{color: 'rgba(255,255,255,0.9)', fontSize: '28px', marginBottom: '40px', maxWidth: '900px', margin: '0 auto 40px', lineHeight: '1.4'}}>
            Professional Window Tinting Solutions for Homes, Businesses & Institutions
          </p>
          
          {/* Cities We Serve */}
          <div style={{marginBottom: '50px'}}>
            <h2 style={{color: 'white', fontSize: '24px', fontWeight: '600', marginBottom: '20px'}}>
              SERVING NORTH MISSISSIPPI & WEST ALABAMA
            </h2>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginBottom: '30px'}}>
              <div style={{backgroundColor: 'rgba(255,255,255,0.15)', padding: '12px 24px', borderRadius: '25px', color: 'white', fontSize: '16px', fontWeight: '500'}}>
                Starkville
              </div>
              <div style={{backgroundColor: 'rgba(255,255,255,0.15)', padding: '12px 24px', borderRadius: '25px', color: 'white', fontSize: '16px', fontWeight: '500'}}>
                Columbus
              </div>
              <div style={{backgroundColor: 'rgba(255,255,255,0.15)', padding: '12px 24px', borderRadius: '25px', color: 'white', fontSize: '16px', fontWeight: '500'}}>
                Tupelo
              </div>
              <div style={{backgroundColor: 'rgba(255,255,255,0.15)', padding: '12px 24px', borderRadius: '25px', color: 'white', fontSize: '16px', fontWeight: '500'}}>
                Oxford
              </div>
              <div style={{backgroundColor: 'rgba(255,255,255,0.15)', padding: '12px 24px', borderRadius: '25px', color: 'white', fontSize: '16px', fontWeight: '500'}}>
                Tuscaloosa
              </div>
            </div>
          </div>
          
          {/* Key Benefits */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '50px', maxWidth: '900px', margin: '0 auto 50px'}}>
            <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '30px 20px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.2)'}}>
              <div style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>
                <BoltIcon style={{width: '40px', height: '40px', color: 'white'}} />
              </div>
              <h3 style={{color: 'white', fontSize: '20px', fontWeight: '600', marginBottom: '10px'}}>Energy Savings</h3>
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '16px'}}>Up to 30% reduction in cooling costs</p>
            </div>
            <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '30px 20px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.2)'}}>
              <div style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>
                <SunIcon style={{width: '40px', height: '40px', color: 'white'}} />
              </div>
              <h3 style={{color: 'white', fontSize: '20px', fontWeight: '600', marginBottom: '10px'}}>UV Protection</h3>
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '16px'}}>Block 99% of harmful UV rays</p>
            </div>
            <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '30px 20px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.2)'}}>
              <div style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>
                <SparklesIcon style={{width: '40px', height: '40px', color: 'white'}} />
              </div>
              <h3 style={{color: 'white', fontSize: '20px', fontWeight: '600', marginBottom: '10px'}}>Expert Service</h3>
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '16px'}}>15+ years of professional experience</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginBottom: '40px'}}>
            <button style={{
              backgroundColor: 'white', 
              color: '#dc2626', 
              padding: '18px 40px', 
              fontSize: '20px', 
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '10px',
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
              borderRadius: '10px',
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
            >
              CALL (662) 123-4567
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div style={{borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '30px'}}>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', color: 'rgba(255,255,255,0.8)', fontSize: '16px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <span style={{color: '#10b981', fontSize: '20px'}}>✓</span>
                <span>Licensed & Insured</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <span style={{color: '#10b981', fontSize: '20px'}}>✓</span>
                <span>Free Estimates</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <span style={{color: '#10b981', fontSize: '20px'}}>✓</span>
                <span>15+ Years Experience</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <span style={{color: '#10b981', fontSize: '20px'}}>✓</span>
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
