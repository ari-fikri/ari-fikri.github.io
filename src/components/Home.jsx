import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import BottomSection from './BottomSection';
import SEO from './SEO.jsx';

function Home() {
  return (
    <>
      <SEO 
        fallbackTitle="Ari Fikri | Digital Transformation & Strategy Leader" 
        seoData={{
          metaDescription: "Personal website of Ari Fikri, showcasing experience in digital transformation, strategy, and technology leadership."
        }}
      />
      <Hero />
      <About />
      <Experience />
      <BottomSection />
    </>
  );
}

export default Home;
