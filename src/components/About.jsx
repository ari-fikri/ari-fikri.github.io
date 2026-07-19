import RocketIcon from '../assets/icons/rocket_24px.svg';
import CycleIcon from '../assets/icons/cycle_24px.svg';
import DeployedIcon from '../assets/icons/deployed_24px.svg';
import ChartIcon from '../assets/icons/chart_24px.svg';
import GroupsIcon from '../assets/icons/groups_24px.svg';
import PersonIcon from '../assets/icons/person.svg';
import LocationIcon from '../assets/icons/location.svg';
import MailIcon from '../assets/icons/mail.svg';
import StarIcon from '../assets/icons/star.svg';
import LinkedinIcon from '../assets/icons/linkedin.svg';

function About() {
  return (
    <section id="about" className="section">
      <div className="section-container">
        <div className="about-section">
          <div className="about-content">
            <h2 className="section-title">
              <span className="title-icon">
                <PersonIcon style={{ width: '28px', height: '28px' }} />
              </span>
              About Me
            </h2>
            <p className="about-text">
              Results-driven leader with a strong background in software delivery, product management, 
              and digital transformation. Experienced in overseeing the entire product lifecycle 
              from concept to delivery, with a focus on time-to-market, improving product quality, 
              and driving business goals. Passionate about solving complex problems, budget forecasting, 
              and building high-performing teams.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-icon">
                  <LocationIcon style={{ width: '20px', height: '20px' }} />
                </span>
                <span className="detail-text">Ciwidey - Bandung, Indonesia</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">
                  <MailIcon style={{ width: '20px', height: '20px' }} />
                </span>
                <span className="detail-text">arirushan79@gmail.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">
                  <LinkedinIcon style={{ width: '20px', height: '20px' }} />
                </span>
                <span className="detail-text"><a href="https://www.linkedin.com/in/ari-fikri">linkedin.com/in/ari-fikri</a></span>
              </div>
            </div>
          </div>
          <section id="expertise">
             <div className="skills-content">
              <h2 className="section-title">
                <span className="title-icon">
                  <StarIcon style={{ width: '28px', height: '28px' }} />
                </span>
                What I Do
              </h2>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-icon"><RocketIcon style={{ width: '24px', height: '24px' }} /></div>
                  <h3 className="skill-title">Technical Program & Project Management</h3>
                  <p className="skill-desc">End-to-end delivery, planning, estimation, risk management, and stakeholder alignment.</p>
                </div>
                <div className="skill-card">
                  <div className="skill-icon"><CycleIcon style={{ width: '24px', height: '24px' }} /></div>
                  <h3 className="skill-title">Agile Leadership</h3>
                  <p className="skill-desc">Scrum, JIRA, sprint planning, retrospectives, and agile transformation.</p>
                </div>
                <div className="skill-card">
                  <div className="skill-icon"><DeployedIcon style={{ width: '24px', height: '24px' }} /></div>
                  <h3 className="skill-title">Product & Engineering Leadership</h3>
                  <p className="skill-desc">Product strategy, OKRs, leadership, prioritization, and go-to-market.</p>
                </div>
                <div className="skill-card">
                  <div className="skill-icon"><ChartIcon style={{ width: '24px', height: '24px' }} /></div>
                  <h3 className="skill-title">Digital Transformation</h3>
                  <p className="skill-desc">Driving digital initiatives, process optimization, and technology adoption.</p>
                </div>
                <div className="skill-card">
                  <div className="skill-icon"><GroupsIcon style={{ width: '24px', height: '24px' }} /></div>
                  <h3 className="skill-title">People Leadership</h3>
                  <p className="skill-desc">Building high-performing teams, coaching, and talent development.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default About;
