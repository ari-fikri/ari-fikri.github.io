import { Link } from 'react-router-dom';
import BgImg from '../assets/pp_bg.jpg';

function NotFound() {
  return (
    <div className="not-found-page">
      <section 
        className="hero not-found-hero" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url(${BgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="hero-container centered">
          <h1 className="hero-title" style={{ fontSize: '8rem', marginBottom: '0' }}>404</h1>
          <h2 className="hero-subtitle" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Page Not Found</h2>
          <p style={{ color: '#94a3b8', marginBottom: '3rem', maxWidth: '600px', marginInline: 'auto' }}>
            Oops! The page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="download-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
