import CalendarIcon from '../assets/icons/chart_24px.svg';
import GroupsIcon from '../assets/icons/groups_24px.svg';
import RocketIcon from '../assets/icons/rocket_24px.svg';
import PersonIcon from '../assets/icons/person.svg';
import HeroImg from '../assets/hero.png'
import BgImg from '../assets/pp_bg.jpg'

function Hero() {
  return (
    <section 
      className="hero" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.8)), url(${BgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Technical Program Manager</span>
            <span className="title-line highlight">Digital Transformation Leader</span>
          </h1>
          <p className="hero-description">
            I bridge business goals with technology execution to deliver impactful solutions 
            at scale. 20+ years of experience leading cross-functional teams, driving agile 
            delivery, and transforming organizations.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon">
                <CalendarIcon style={{ width: '28px', height: '28px' }} />
              </div>
              <div className="stat-value">20+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <GroupsIcon style={{ width: '28px', height: '28px' }} />
              </div>
              <div className="stat-value">30+</div>
              <div className="stat-label">Teams Led & Mentored</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <RocketIcon style={{ width: '28px', height: '28px' }} />
              </div>
              <div className="stat-value">50+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <PersonIcon style={{ width: '28px', height: '28px' }} />
              </div>
              <div className="stat-value">2M+</div>
              <div className="stat-label">Users Impacted</div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <img 
              src={HeroImg} 
              alt="Ari R Fikri" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                borderRadius: '24px' 
              }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
