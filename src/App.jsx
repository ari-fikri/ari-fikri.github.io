
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import BottomSection from './components/BottomSection';
import Footer from './components/Footer';

function App() {
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
