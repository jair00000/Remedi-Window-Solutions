import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BoltIcon, SunIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Section from '../components/UI/Section';
import Container from '../components/UI/Container';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const Projects = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      id: 1,
      title: 'Calhoun County School District',
      category: 'Government & Schools',
      location: 'Calhoun City',
      image: `${import.meta.env.BASE_URL}images/projects/calhoun-county-school-window-tinting-calhoun-city-ms2.webp`,
      description: 'Installing Security films for enhanced safety and protection.',
      features: ['Security Films', 'Safety Compliance', 'Student Protection']
    },
    {
      id: 2,
      title: 'Chickasaw County School District',
      category: 'Government & Schools',
      location: 'Vardaman City',
      image: `${import.meta.env.BASE_URL}images/projects/chickasaw-county-school-window-tinting-vardaman-ms3.webp`,
      description: 'Installing Security Films for school safety and energy efficiency.',
      features: ['Security Films', 'Safety Enhancement', 'Energy Efficiency']
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Government & Schools'];

  const [selectedCategory, setSelectedCategory] = React.useState('Government & Schools');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Our Projects - Remedi Window Solutions | Window Tinting Portfolio</title>
        <meta name="description" content="Explore our portfolio of completed window tinting projects across North Mississippi and West Alabama. From residential homes to commercial buildings, see our quality workmanship." />
        <meta name="keywords" content="window tinting projects, portfolio, residential window tinting, commercial window tinting, government schools, North Mississippi, West Alabama, Starkville, Columbus, Tupelo, Oxford, Tuscaloosa" />
        <meta property="og:title" content="Our Projects - Remedi Window Solutions | Window Tinting Portfolio" />
        <meta property="og:description" content="Explore our portfolio of completed window tinting projects across North Mississippi and West Alabama. From residential homes to commercial buildings, see our quality workmanship." />
        <meta property="og:image" content={`${import.meta.env.BASE_URL}images/icons-logo/remedi-logo.svg`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Projects - Remedi Window Solutions | Window Tinting Portfolio" />
        <meta name="twitter:description" content="Explore our portfolio of completed window tinting projects across North Mississippi and West Alabama. From residential homes to commercial buildings, see our quality workmanship." />
        <meta name="twitter:image" content={`${import.meta.env.BASE_URL}images/icons-logo/remedi-logo.svg`} />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden pt-48 lg:pt-52 bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/projects/calhoun-county-school-window-tinting-calhoun-city-ms2.webp)`,
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        
        <Container className="relative z-10 text-center text-white flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 animate-fade-in">
              <span className="text-primary-500">OUR</span>
              <span className="block text-white">PROJECTS</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-white animate-slide-up max-w-3xl mx-auto">
              Explore our portfolio of completed window tinting projects across North Mississippi and West Alabama. 
              From residential homes to commercial buildings, see the quality and craftsmanship we deliver.
            </p>
          </div>
        </Container>
      </section>

      {/* Project Stats */}
      <Section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-16">
            <Card className="p-6 text-center border border-gray-900 dark:border-gray-100">
               <h3 className="text-3xl font-bold text-primary-500 mb-2">Trusted</h3>
               <p className="text-gray-900 dark:text-white font-medium">Service</p>
               <p className="text-sm text-gray-900 dark:text-gray-300 mt-2">Professional window film installation for homes and businesses</p>
            </Card>
            <Card className="p-6 text-center border border-gray-900 dark:border-gray-100">
              <h3 className="text-3xl font-bold text-primary-500 mb-2">Experienced</h3>
              <p className="text-gray-900 dark:text-white font-medium">Team</p>
              <p className="text-sm text-gray-900 dark:text-gray-300 mt-2">Skilled installers with proven expertise and attention to detail</p>
            </Card>
            <Card className="p-6 text-center border border-gray-900 dark:border-gray-100">
              <h3 className="text-3xl font-bold text-primary-500 mb-2">5</h3>
              <p className="text-gray-900 dark:text-white font-medium">Cities Served</p>
              <p className="text-sm text-gray-900 dark:text-gray-300 mt-2">Starkville, Columbus, Tupelo, Oxford, Tuscaloosa</p>
            </Card>
            <Card className="p-6 text-center border border-gray-900 dark:border-gray-100">
              <h3 className="text-3xl font-bold text-primary-500 mb-2">100%</h3>
              <p className="text-gray-900 dark:text-white font-medium">Customer Satisfaction</p>
              <p className="text-sm text-gray-900 dark:text-gray-300 mt-2">Quality workmanship guaranteed</p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Project Categories Filter */}
      <Section padding="none" className="bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              BROWSE BY CATEGORY
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Filter our projects by type to see specific examples of our work in different sectors.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`px-6 py-3 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white border-primary-500'
                    : 'border-gray-900 dark:border-gray-100 text-gray-900 dark:text-white hover:bg-primary-500 hover:text-white'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Projects Grid */}
      <Section padding="none" className="pb-16 md:pb-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <Container>
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
              <Card key={project.id} hover className="overflow-hidden border border-gray-900 dark:border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {project.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
            </div>
          ) : (
            <div className="text-center py-16">
              {selectedCategory === 'Residential' && (
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                    Residential Projects Coming Soon
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    We're helping homeowners across North Mississippi and West Alabama improve comfort, privacy, and energy efficiency with professional window films. Get in touch today and let your home be one of the first featured in our residential project gallery.
                  </p>
                  <Button 
                    onClick={() => navigate('/contact')}
                    className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3"
                  >
                    Start Your Project
                  </Button>
                </div>
              )}
              {selectedCategory === 'Commercial' && (
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                    Commercial Projects Coming Soon
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    We're partnering with local businesses to create energy-efficient, secure, and professional workspaces. Start your project today and have your building featured among our upcoming commercial installations.
                  </p>
                  <Button 
                    onClick={() => navigate('/contact')}
                    className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3"
                  >
                    Start Your Project
                  </Button>
                </div>
              )}
            </div>
          )}
        </Container>
      </Section>

      {/* Professional CTA Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800" style={{padding: '100px 20px', textAlign: 'center', width: '100%'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          {/* Main Heading */}
          <h1 style={{color: 'white', fontSize: '56px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2'}}>
            READY TO START YOUR PROJECT?
          </h1>
          
          {/* Subheading */}
          <p style={{color: 'rgba(255,255,255,0.9)', fontSize: '28px', marginBottom: '40px', maxWidth: '900px', margin: '0 auto 40px', lineHeight: '1.4'}}>
            Join hundreds of satisfied customers who have transformed their spaces with our professional window tinting services
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
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '16px'}}>Skilled installers with proven expertise and attention to detail</p>
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
            onClick={() => window.location.href = '/contact'}
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
            onClick={() => window.location.href = '/gallery'}
            >
              VIEW GALLERY
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

export default Projects;
