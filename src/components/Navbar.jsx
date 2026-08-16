import { useLocation } from 'next/router';

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleDownload = () => {
    // GA Event: Download CV
    if (window.gtag) {
      window.gtag('event', 'download_cv', {
        'event_category': 'Engagement',
        'event_label': 'Navbar Download Button'
      });
    }
  };

  const handleNavLinkClick = (linkName) => {
    if (window.gtag) {
      window.gtag('event', 'navbar_click', {
        'event_category': 'Navigation',
        'event_label': linkName
      });
    }
  };

  return (
    <nav>
      {/* Your existing code here */}
    </nav>
  );
}

export default Navbar;
