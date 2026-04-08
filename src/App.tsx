import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ProblemSection from './components/ProblemSection';
import Methodology from './components/Methodology';
import Pricing from './components/Pricing';
import Langkah from './components/Langkah';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Bonus from './components/Bonus';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import FullGallery from './components/FullGallery';
import { useState, useEffect } from 'react';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'full-gallery'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#semua-galeri') {
        setCurrentView('full-gallery');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        if (currentView === 'full-gallery') {
          // Returning to home from gallery smoothly
          setCurrentView('home');
        }
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentView]);

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      {currentView === 'home' ? (
        <main>
          <Hero />
          <TrustStrip />
          <ProblemSection />
          <Methodology />
          <Pricing />
          <Langkah />
          <Gallery />
          <Testimonials />
          <Bonus />
          <FAQ />
          <CallToAction />
        </main>
      ) : (
        <main>
          <FullGallery />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
