import React from 'react';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';

const Blog = () => {
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
                Our <span className="text-primary-400">Blog</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary-300">
                Expert Insights & Window Solutions
              </h2>
              <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                Stay informed with our latest articles on window tinting, energy efficiency, 
                home improvement tips, and industry insights. Learn from our experts and 
                discover how to make the most of your window solutions.
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

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Transform Your Windows?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join our community of satisfied customers and experience the difference 
            that professional window tinting can make for your home or business.
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
              onClick={() => window.location.href = '/gallery'}
            >
              View Our Gallery
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Blog;
