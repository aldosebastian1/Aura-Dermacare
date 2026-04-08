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

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
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
      <Footer />
    </div>
  );
}

export default App;
