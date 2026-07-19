import cvPdf from '../assets/CV Ari R Fikri - Project Manager.pdf';

function Navbar() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'CV Ari R Fikri - Project Manager.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="logo-initial">AF</span>
          <span className="logo-name">Ari R. Fikri</span>
        </div>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#expertise" className="nav-link">Expertise</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#certifications" className="nav-link">Certifications</a>
          <a href="#contact" className="nav-link">Contact</a>
          <button className="download-btn" onClick={handleDownload}>Download CV</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
