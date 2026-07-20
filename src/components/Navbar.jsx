import cvPdf from '../assets/CV Ari R Fikri - Project Manager.pdf';

function Navbar() {
  const handleDownload = () => {
    // GA Event: Download CV
    if (window.gtag) {
      window.gtag('event', 'download_cv', {
        'event_category': 'Engagement',
        'event_label': 'Navbar Download Button'
      });
    }

    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'CV Ari R Fikri - Project Manager.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="logo-initial">AF</span>
          <span className="logo-name">Ari R. Fikri</span>
        </div>
        <div className="nav-links">
          <a href="#about" className="nav-link" onClick={() => handleNavLinkClick('About')}>About</a>
          <a href="#expertise" className="nav-link" onClick={() => handleNavLinkClick('Expertise')}>Expertise</a>
          <a href="#experience" className="nav-link" onClick={() => handleNavLinkClick('Experience')}>Experience</a>
          <a href="#projects" className="nav-link" onClick={() => handleNavLinkClick('Projects')}>Projects</a>
          <a href="#certifications" className="nav-link" onClick={() => handleNavLinkClick('Certifications')}>Certifications</a>
          <a href="#contact" className="nav-link" onClick={() => handleNavLinkClick('Contact')}>Contact</a>
          <button className="download-btn" onClick={handleDownload}>Download CV</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
