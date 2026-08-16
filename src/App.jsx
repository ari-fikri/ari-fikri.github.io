import { useEffect } from 'react';
import { useRouter } from 'next/router';

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Track traffic source on mount
    if (window.gtag) {
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get('utm_source');
      const referrer = document.referrer;

      let detectedSource = null;
      let detectedMedium = null;

      // Your existing code here
    }
  }, [router]);

  return <Component {...pageProps} />;
}

export default App;
