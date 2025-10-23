import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Components
import Layout from './components/Layout/Layout.jsx';
import ScrollToTop from './components/Common/ScrollToTop.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';

// Pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import ServiceFilms from './pages/service-films.jsx';
import Projects from './pages/Projects.jsx';
import Residential from './pages/Residential.jsx';
import Commercial from './pages/Commercial.jsx';
import Institutional from './pages/Institutional.jsx';
import Gallery from './pages/Gallery.jsx';
import Blog from './pages/Blog.jsx';
import FAQs from './pages/FAQs.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsOfService from './pages/TermsOfService.jsx';
import CookiePolicy from './pages/CookiePolicy.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <Helmet>
          <title>Remedi Window Solution - Professional Window Services</title>
          <meta name="description" content="Expert window installation, repair, and replacement services for residential and commercial properties. Quality craftsmanship you can trust." />
        </Helmet>
        
        <ScrollToTop />
        
        <Routes>
        <Route path="/" element={
          <Layout 
            title="Remedi Window Solution - North Mississippi's Window Tinting Experts"
            description="Professional window tinting for homes, businesses, and government buildings. Experience comfort, style, and energy efficiency with precision installation."
            keywords="window tinting, residential tinting, commercial tinting, public facilities, energy efficiency, UV protection, North Mississippi"
          >
            <Home />
          </Layout>
        } />
        <Route path="/about" element={
          <Layout 
            title="About Us - Remedi Window Solution"
            description="Learn about Remedi Window Solution's experienced team, company values, and commitment to quality window tinting services. North Mississippi's trusted tinting professionals."
            keywords="about remedi windows, window tinting team, experienced tinting installers, company history, North Mississippi"
          >
            <About />
          </Layout>
        } />
        <Route path="/services" element={
          <Layout 
            title="Our Services - Remedi Window Solution"
            description="Professional window tinting services for residential, commercial, and public facilities. Energy efficiency, UV protection, and security solutions."
            keywords="window tinting services, residential tinting, commercial tinting, public facilities, energy efficiency, UV protection"
          >
            <ServiceFilms />
          </Layout>
        } />
        <Route path="/projects" element={
          <Layout 
            title="Our Projects - Remedi Window Solution"
            description="View our portfolio of completed window tinting projects across North Mississippi and West Alabama. Residential, commercial, and institutional projects showcase our quality and expertise."
            keywords="window tinting projects, completed projects, portfolio, residential projects, commercial projects, institutional projects, North Mississippi, West Alabama"
          >
            <Projects />
          </Layout>
        } />
        <Route path="/residential" element={
          <Layout 
            title="Residential Window Solutions - Remedi Window Solution"
            description="Transform your home with premium residential window films. Solar control, privacy, security, and decorative solutions for enhanced comfort and energy efficiency."
            keywords="residential window films, home window tinting, solar control films, privacy films, security films, decorative window films"
          >
            <Residential />
          </Layout>
        } />
        <Route path="/commercial" element={
          <Layout 
            title="Commercial Window Solutions - Remedi Window Solution"
            description="Enhance your business with professional commercial window films. Energy efficiency, employee comfort, security, and branding solutions for improved productivity and cost savings."
            keywords="commercial window films, business window tinting, energy efficiency, office window films, security films, employee comfort"
          >
            <Commercial />
          </Layout>
        } />
        <Route path="/institutional" element={
          <Layout 
            title="Government & Schools Window Solutions - Remedi Window Solution"
            description="Professional window film solutions for government buildings, schools, and public institutions. Enhanced security, energy efficiency, and compliance-ready solutions."
            keywords="government window films, school window tinting, institutional window films, security films, energy efficiency, compliance"
          >
            <Institutional />
          </Layout>
        } />
        <Route path="/gallery" element={
          <Layout 
            title="Gallery - Remedi Window Solution"
            description="View our portfolio of completed window projects including residential, commercial, repair, and replacement work. Quality craftsmanship in action."
            keywords="window project gallery, completed window installations, window repair examples, commercial window projects"
          >
            <Gallery />
          </Layout>
        } />
        <Route path="/blog" element={
          <Layout 
            title="Blog - Remedi Window Solution"
            description="Read our latest articles on window tinting, energy efficiency, home improvement tips, and industry insights. Expert advice from North Mississippi's window tinting professionals."
            keywords="window tinting blog, energy efficiency tips, home improvement, window film articles, tinting insights, North Mississippi"
          >
            <Blog />
          </Layout>
        } />
        <Route path="/faqs" element={
          <Layout 
            title="FAQs - Remedi Window Solution"
            description="Find answers to frequently asked questions about window films, installation, and services. Expert insights on solar control, security, privacy, and decorative films."
            keywords="window film FAQs, solar control questions, security film questions, privacy film questions, window tinting installation, North Mississippi"
          >
            <FAQs />
          </Layout>
        } />
        <Route path="/privacy-policy" element={
          <Layout 
            title="Privacy Policy - Remedi Window Solution"
            description="Learn how Remedi Window Solution protects your privacy and personal information. Our comprehensive privacy policy covers data collection, usage, and protection practices."
            keywords="privacy policy, data protection, personal information, window tinting privacy, North Mississippi"
          >
            <PrivacyPolicy />
          </Layout>
        } />
        <Route path="/terms-of-service" element={
          <Layout 
            title="Terms of Service - Remedi Window Solution"
            description="Review our terms of service for professional window tinting services. Learn about our service agreements, warranties, and customer responsibilities."
            keywords="terms of service, service agreement, window tinting terms, warranties, customer responsibilities"
          >
            <TermsOfService />
          </Layout>
        } />
        <Route path="/cookie-policy" element={
          <Layout 
            title="Cookie Policy - Remedi Window Solution"
            description="Understand how we use cookies and similar technologies on our website. Learn about cookie types, management options, and your privacy choices."
            keywords="cookie policy, website cookies, privacy preferences, data tracking, user experience"
          >
            <CookiePolicy />
          </Layout>
        } />
        <Route path="/contact" element={
          <Layout 
            title="Contact Us - Remedi Window Solution"
            description="Contact Remedi Window Solution for professional window tinting services. Free estimates and expert consultation available in North Mississippi."
            keywords="contact window tinting, free tinting estimate, window tinting consultation, North Mississippi"
          >
            <Contact />
          </Layout>
        } />
        <Route path="*" element={
          <Layout 
            title="Page Not Found - Remedi Window Solution"
            description="The page you're looking for doesn't exist. Return to our homepage for professional window tinting services."
            keywords="page not found, 404 error"
          >
            <NotFound />
          </Layout>
        } />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
