
import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import BottomSection from './components/BottomSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Track traffic source on mount
    if (window.gtag) {
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get('utm_source');
      const referrer = document.referrer;

      let detectedSource = null;
      let detectedMedium = null;

      // 1. Check for UTM Source (Best for CV/Resume)
      if (utmSource) {
        detectedSource = utmSource;
        detectedMedium = urlParams.get('utm_medium') || 'direct';
      } 
      // 2. Fallback to Referrer (Best for LinkedIn/GitHub)
      else if (referrer) {
        if (referrer.includes('linkedin.com')) {
          detectedSource = 'linkedin';
          detectedMedium = 'social';
        } else if (referrer.includes('github.com')) {
          detectedSource = 'github';
          detectedMedium = 'social';
        }
      }

      if (detectedSource) {
        window.gtag('event', 'traffic_source_identified', {
          'source': detectedSource,
          'medium': detectedMedium,
          'full_referrer': referrer || 'none'
        });
      }
    }
  }, []);

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Bottom Section - Achievements, Certifications, Tools */}
      <BottomSection />

      {/* Footer / Contact */}
      <Footer />
    </div>
  );
}

export default App;
