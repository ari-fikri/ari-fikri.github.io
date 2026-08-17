'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AFIcon from '../../public/assets/icons/af.svg';

function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const handleDownload = () => {
    // GA Event: Download CV
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'download_cv', {
        'event_category': 'Engagement',
        'event_label': 'Navbar Download Button'
      });
    }
  };

  const handleNavLinkClick = (linkName) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'navbar_click', {
        'event_category': 'Navigation',
        'event_label': linkName
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-brand">
          <div className="logo-initial">
            <AFIcon style={{ width: '24px', height: '24px' }} />
          </div>
          <span className="logo-name">Ari Fikri</span>
        </Link>

        <div className="nav-links">
          <Link 
            href="/#about" 
            className="nav-link"
            onClick={() => handleNavLinkClick('About')}
          >
            About
          </Link>
          <Link 
            href="/#expertise" 
            className="nav-link"
            onClick={() => handleNavLinkClick('Expertise')}
          >
            Expertise
          </Link>
          <Link 
            href="/#experience" 
            className="nav-link"
            onClick={() => handleNavLinkClick('Experience')}
          >
            Experience
          </Link>
          <Link 
            href="/#certifications" 
            className="nav-link"
            onClick={() => handleNavLinkClick('Certifications')}
          >
            Certifications
          </Link>
          <Link 
            href="/#contact" 
            className="nav-link"
            onClick={() => handleNavLinkClick('Contact')}
          >
            Contact
          </Link>
          <Link 
            href="/blog" 
            className="nav-link"
            onClick={() => handleNavLinkClick('Blog')}
          >
            Blog
          </Link>
          <a 
            href="/cv_ari_fikri_project_mgr.pdf" 
            className="download-btn"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownload}
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
