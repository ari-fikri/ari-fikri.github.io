
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import PostDetail from './components/PostDetail';
import NotFound from './components/NotFound';
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
    <Router>
      <div className="portfolio-container">
        {/* Navigation */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<PostDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer / Contact */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
