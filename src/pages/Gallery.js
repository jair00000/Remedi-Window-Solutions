import React, { useState } from 'react';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'repair', name: 'Repairs' },
    { id: 'replacement', name: 'Replacements' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Home Window Installation',
      category: 'residential',
      description: 'Complete window replacement for a contemporary home',
      image: '/images/project-1.jpg',
      features: ['Energy Efficient', 'Double Pane', 'Custom Size']
    },
    {
      id: 2,
      title: 'Office Building Windows',
      category: 'commercial',
      description: 'Large-scale commercial window installation',
      image: '/images/project-2.jpg',
      features: ['Commercial Grade', 'Security Glass', 'Energy Efficient']
    },
    {
      id: 3,
      title: 'Historic Home Restoration',
      category: 'repair',
      description: 'Careful restoration of original windows',
      image: '/images/project-3.jpg',
      features: ['Historic Preservation', 'Custom Repair', 'Authentic Materials']
    },
    {
      id: 4,
      title: 'Luxury Condo Windows',
      category: 'residential',
      description: 'High-end window replacement project',
      image: '/images/project-4.jpg',
      features: ['Premium Materials', 'Sound Reduction', 'UV Protection']
    },
    {
      id: 5,
      title: 'Retail Store Front',
      category: 'commercial',
      description: 'Complete storefront window system',
      image: '/images/project-5.jpg',
      features: ['Impact Resistant', 'Custom Design', 'Security Features']
    },
    {
      id: 6,
      title: 'Family Home Upgrade',
      category: 'replacement',
      description: 'Full home window replacement',
      image: '/images/project-6.jpg',
      features: ['Energy Savings', 'Modern Design', 'Warranty Included']
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Downtown District',
      rating: 5,
      text: 'Remedi Window Solution transformed our home with beautiful, energy-efficient windows. The installation was professional and completed on time.',
      project: 'Residential Window Replacement'
    },
    {
      name: 'Mike Chen',
      location: 'Business District',
      rating: 5,
      text: 'Excellent work on our office building windows. The team was professional, clean, and delivered exactly what we needed.',
      project: 'Commercial Window Installation'
    },
    {
      name: 'Emily Rodriguez',
      location: 'Historic District',
      rating: 5,
      text: 'They carefully restored our historic home windows while maintaining the original character. Highly recommend their services.',
      project: 'Historic Window Restoration'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-48 lg:pt-52">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Our Work Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of completed projects and see the quality craftsmanship 
            that sets us apart from the competition.
          </p>
        </div>
      </Section>

      {/* Category Filter */}
      <Section background="gray">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} hover className="overflow-hidden">
              <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center text-primary-600">
                  <div className="text-6xl mb-2">🏠</div>
                  <p className="text-sm font-medium">Project Image</p>
                </div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say 
            about their experience with Remedi Window Solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
                <p className="text-sm text-primary-600 font-medium">{testimonial.project}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join our satisfied customers and experience the quality craftsmanship that 
            makes Remedi Window Solution the trusted choice for window services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-white">
              Get Free Estimate
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
              View More Projects
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Gallery;
