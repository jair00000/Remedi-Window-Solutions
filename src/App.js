import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Components
import Layout from './components/Layout/Layout';
import ScrollToTop from './components/Common/ScrollToTop';
import { ThemeProvider } from './contexts/ThemeContext';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ServiceFilms from './pages/service-films';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

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
        <Route path="/gallery" element={
          <Layout 
            title="Gallery - Remedi Window Solution"
            description="View our portfolio of completed window projects including residential, commercial, repair, and replacement work. Quality craftsmanship in action."
            keywords="window project gallery, completed window installations, window repair examples, commercial window projects"
          >
            <Gallery />
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
