import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Experience from '../src/components/Experience';
import BottomSection from '../src/components/BottomSection';

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <BottomSection />
    </main>
  );
}
