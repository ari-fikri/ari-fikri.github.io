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
              <a 
                href="https://www.credly.com/badges/df5ec6c4-89eb-4824-9b8d-0c549efff1d9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cert-item"
                onClick={() => {
                  if (window.gtag) {
                    window.gtag('event', 'cert_click', {
                      'event_category': 'Engagement',
                      'event_label': 'Google Project Management Professional'
                    });
                  }
                }}
              >
                <div className="cert-logo">
                  <GoogleIcon style={{ width: '48px', height: '48px' }} />
                </div>
                <div className="cert-info">
                  <h4 className="cert-name">Google Project Management Professional</h4>
                  <p className="cert-details">Google - Professional Certificate I • 2024</p>
                </div>
              </a>

              {/* Scrum Fundamental Certified */}
              <a 
                href="https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-AriFikri-1145753.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cert-item"
                onClick={() => {
                  if (window.gtag) {
                    window.gtag('event', 'cert_click', {
                      'event_category': 'Engagement',
                      'event_label': 'Scrum Fundamentals Certified (SFC)'
                    });
                  }
                }}
              >
                <div className="cert-logo">
                  <ScrumstudyIcon style={{ width: '48px', height: '48px' }} />
                </div>
                <div className="cert-info">
                  <h4 className="cert-name">Scrum Fundamentals Certified (SFC)</h4>
                  <p className="cert-details">Scrum Study Italia</p>
                </div>
              </a>

              {/* Product Management Basics Certification */}
              <a 
                href="https://www.credly.com/badges/759eea80-2e32-42f4-b5c8-97a2f60b176d" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cert-item"
                onClick={() => {
                  if (window.gtag) {
                    window.gtag('event', 'cert_click', {
                      'event_category': 'Engagement',
                      'event_label': 'Product Management Basics Certification'
                    });
                  }
                }}
              >
                <div className="cert-logo">
                  <PendoIcon style={{ width: '48px', height: '48px' }} />
                </div>
                <div className="cert-info">
                  <h4 className="cert-name">Product Management Basics Certification</h4>
                  <p className="cert-details">Pendo</p>
                </div>
              </a>

              {/* Agile Scrum Master */}
              <a 
                href="https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0NDgzIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvNzc3MDM5NV83OTg0MTIzMTczNjc3NTM3NzMyNC5wbmciLCJ1c2VybmFtZSI6IkFyaSBSLiBGaWtyaSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F7411%2FAgile-Scrum-Master_SkillUp%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1466023715317668431&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FV97X08DdP8%2FY3D0iyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDACPJpGVBAAAA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cert-item"
                onClick={() => {
                  if (window.gtag) {
                    window.gtag('event', 'cert_click', {
                      'event_category': 'Engagement',
                      'event_label': 'Agile Scrum Master'
                    });
                  }
                }}
              >
                <div className="cert-logo">
                  <SimplilearnIcon style={{ width: '48px', height: '48px' }} />
                </div>
                <div className="cert-info">
                  <h4 className="cert-name">Agile Scrum Master</h4>
                  <p className="cert-details">Simplilearn</p>
                </div>
              </a>

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
              <span className="tool-tag">n8n</span>
              <span className="tool-tag">JIRA</span>
              <span className="tool-tag">Confluence</span>
              <span className="tool-tag">Figma</span>
              <span className="tool-tag">Docker</span>
              <span className="tool-tag">AWS</span>
              <span className="tool-tag">Postman</span>
              <span className="tool-tag">SQL</span>
              <span className="tool-tag">Python</span>
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
