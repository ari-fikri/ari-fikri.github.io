import TrophyIcon from '../assets/icons/trophy.svg';
import VerifiedIcon from '../assets/icons/verified.svg';
import CodeIcon from '../assets/icons/code.svg';
import GoogleIcon from '../assets/icons/google.svg';
import PendoIcon from '../assets/icons/pendo.svg';
import SimplilearnIcon from '../assets/icons/simplilearn.svg';
import ScrumstudyIcon from '../assets/icons/scrumstudy.svg';

function BottomSection() {
  return (
    <section id="certifications" className="section bottom-section">
      <div className="section-container">
        <div className="bottom-grid">
          <div className="bottom-card certifications">
            <h2 className="bottom-title">
              <span className="title-icon">
                <VerifiedIcon style={{ width: '28px', height: '28px' }} />
              </span>
              Certifications
            </h2>
            <div className="certifications-list">
              
              {/* Google Project Management Professional */}
              <div className="cert-item">
                <div className="cert-logo">
                  <GoogleIcon style={{ width: '48px', height: '48px' }} />
                </div>
                <div className="cert-info">
                  <h4 className="cert-name">Google Project Management Professional</h4>
                  <p className="cert-details">Google - Professional Certificate I • 2024</p>
                </div>
              </div>

              {/* Scrum Fundamental Certified */}
              <div className="cert-item">
                <div className="cert-logo">
                  <ScrumstudyIcon style={{ width: '48px', height: '48px' }} />
                </div>
                <div className="cert-info">
                  <h4 className="cert-name">Scrum Fundamentals Certified (SFC)</h4>
                  <p className="cert-details">Scrum Study Italia</p>
                </div>
              </div>

              {/* Product Management Basics Certification */}
              <div className="cert-item">
                <div className="cert-logo">
                  <PendoIcon style={{ width: '48px', height: '48px' }} />
                </div>
                <div className="cert-info">
                  <h4 className="cert-name">Product Management Basics Certification</h4>
                  <p className="cert-details">Pendo</p>
                </div>
              </div>

              {/* Agile Scrum Master */}
              <div className="cert-item">
                <div className="cert-logo">
                  <SimplilearnIcon style={{ width: '48px', height: '48px' }} />
                </div>
                <div className="cert-info">
                  <h4 className="cert-name">Agile Scrum Master</h4>
                  <p className="cert-details">Simplilearn</p>
                </div>
              </div>

              <div className="view-more-certs">
                <a 
                  href="https://www.linkedin.com/in/ari-fikri/details/certifications/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="view-more-link"
                  onClick={() => {
                    if (window.gtag) {
                      window.gtag('event', 'view_full_certifications', {
                        'event_category': 'Engagement',
                        'event_label': 'Certifications Section'
                      });
                    }
                  }}
                >
                  View Full Certifications →
                </a>
              </div>
            </div>
          </div>

          <div className="bottom-card achievements">
            <h2 className="bottom-title">
              <span className="title-icon">
                <TrophyIcon style={{ width: '28px', height: '28px' }} />
              </span>
              Key Achievements
            </h2>
            <ul className="achievements-list">
              <li className="achievement-item">Resolved critical issues affecting 2-3 million OVO users.</li>
              <li className="achievement-item">Led Toyota's digital initiatives saving IDR 8 Billion annually.</li>
              <li className="achievement-item">Delivered 50+ projects across web, mobile, and enterprise platforms.</li>
              <li className="achievement-item">Improved team satisfaction to 85% and retention by 12%.</li>
              <li className="achievement-item">Built and mentored high-performing agile teams.</li>
            </ul>
          </div>

          <div className="bottom-card tools">
            <h2 className="bottom-title">
              <span className="title-icon">
                <span className="title-icon">
                  <CodeIcon style={{ width: '28px', height: '28px' }} />
                </span>
              </span>
              Tools & Technologies
            </h2>
            <div className="tools-grid">
              <span className="tool-tag">JIRA</span>
              <span className="tool-tag">Confluence</span>
              <span className="tool-tag">Figma</span>
              <span className="tool-tag">Docker</span>
              <span className="tool-tag">AWS (Basic)</span>
              <span className="tool-tag">Postman</span>
              <span className="tool-tag">SQL</span>
              <span className="tool-tag">Python (Basic)</span>
              <span className="tool-tag">GoLang</span>
              <span className="tool-tag">PHP</span>
              <span className="tool-tag">JavaScript</span>
              <span className="tool-tag">React</span>
              <span className="tool-tag">Agile / Scrum</span>
              <span className="tool-tag">CI/CD</span>
              <span className="tool-tag">Microservices</span>
              <span className="tool-tag">Linux</span>
              <span className="tool-tag">SDL</span>
              <span className="tool-tag">System Analysis</span>
              <span className="tool-tag">Business Process</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BottomSection;
