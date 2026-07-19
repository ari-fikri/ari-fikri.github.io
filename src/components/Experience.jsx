import BusinessCenterIcon from '../assets/icons/business_center.svg';
import TmminIcon from '../assets/icons/tmmin.svg';
import UgmIcon from '../assets/icons/ugm.svg';
import EvermosIcon from '../assets/icons/evermos.svg';
import OvoIcon from '../assets/icons/ovo.svg';
import RF123Icon from '../assets/icons/123rf.svg';
import BizzyIcon from '../assets/icons/bizzy.svg';
import WgsIcon from '../assets/icons/wgs.svg';

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-container">
        <h2 className="section-title centered">
          <span className="title-icon">
            <BusinessCenterIcon style={{ width: '28px', height: '28px' }} />
          </span>
          Professional Experience
        </h2>
        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-date">2022 - Present</div>
            <div className="experience-dot"></div>
            <div className="experience-card">
              <div className="company-header">
                <div className="company-logo">
                  <TmminIcon style={{ width: '112px', height: '112px' }} />
                </div>
                <div className="company-info">
                  <h3 className="job-title">System Analyst (Digital Transformation)</h3>
                  <p className="company-name">Toyota Astra Motor (TMMIN)</p>
                  <p className="job-description">
                    Leading digital transformation initiatives (EDI, & Parts Cost Calculation). Analyzed business 
                    processes, led requirement analysis, and worked closely with stakeholders and dev teams. 
                    Achieved annual savings of IDR 8 Billion.
                  </p>
                </div>
                <div className="job-location">📍 Jakarta, Indonesia</div>
              </div>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">May 2024 - Dec 2024</div>
            <div className="experience-dot"></div>
            <div className="experience-card">
              <div className="company-header">
                <div className="company-logo">
                  <UgmIcon style={{ width: '112px', height: '112px' }} />
                </div>
                <div className="company-info">
                  <h3 className="job-title">Data Analyst</h3>
                  <p className="company-name">Universitas Gadjah Mada (UGM) - Ministry of Energy & Mineral Resources</p>
                  <p className="job-description">
                    Aggregated mining databases, analyzed data structures, and created dashboards & reports 
                    to support data-driven decision making for MineralData app.
                  </p>
                </div>
                <div className="job-location">📍 Yogyakarta, Indonesia</div>
              </div>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">Dec 2021 - May 2024</div>
            <div className="experience-dot"></div>
            <div className="experience-card">
              <div className="company-header">
                <div className="company-logo">
                  <EvermosIcon style={{ width: '112px', height: '112px' }} />
                </div>
                <div className="company-info">
                  <h3 className="job-title">Engineering Manager</h3>
                  <p className="company-name">Evermos (PT Setiap hari dipakai)</p>
                  <p className="job-description">
                    Led 9 engineers (FE/BE/QA) for Back Office, Warehouse & Logistics platform using GoLang, PHP, React. 
                    Achieved monthly GMV of IDR 48B, increased team satisfaction to 85% and retained by 12%.
                  </p>
                </div>
                <div className="job-location">📍 Bandung, Indonesia</div>
              </div>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">Aug 2019 - May 2020</div>
            <div className="experience-dot"></div>
            <div className="experience-card">
              <div className="company-header">
                <div className="company-logo">
                  <BizzyIcon style={{ width: '112px', height: '112px' }} />
                </div>
                <div className="company-info">
                  <h3 className="job-title">Head of Product</h3>
                  <p className="company-name">Bizzy Indonesia</p>
                  <p className="job-description">
                    Owned product vision, strategy, roadmap and execution for B2B Etech platform. 
                    Scrum Master / Product Owner for 100+ POs users.
                  </p>
                </div>
                <div className="job-location">📍 Jakarta, Indonesia</div>
              </div>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">Mar 2016 - May 2018</div>
            <div className="experience-dot"></div>
            <div className="experience-card">
              <div className="company-header">
                <div className="company-logo">
                  <OvoIcon style={{ width: '112px', height: '112px' }} />
                </div>
                <div className="company-info">
                  <h3 className="job-title">Scrum Master / Product Owner</h3>
                  <p className="company-name">OVO</p>
                  <p className="job-description">
                    Led OVO Virtual payment. Investigated and resolved critical production issues affecting 
                    2-3 million users. Worked closely with business, ops, and engineering teams.
                  </p>
                </div>
                <div className="job-location">📍 Jakarta, Indonesia</div>
              </div>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">Feb 2015 - Jan 2016</div>
            <div className="experience-dot"></div>
            <div className="experience-card">
              <div className="company-header">
                <div className="company-logo">
                  <RF123Icon style={{ width: '112px', height: '112px' }} />
                </div>
                <div className="company-info">
                  <h3 className="job-title">Project Manager</h3>
                  <p className="company-name">I23RF</p>
                  <p className="job-description">
                    Managed 40+ engineers, delivered 3-6 web platforms. Increased 6-month deploy projects 
                    and delivered all projects successfully.
                  </p>
                </div>
                <div className="job-location">📍 Bandung, Indonesia</div>
              </div>

            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">Feb 2010 - Dec 2012</div>
            <div className="experience-dot"></div>
            <div className="experience-card">
              <div className="company-header">
                <div className="company-logo">
                  <WgsIcon style={{ width: '112px', height: '112px' }} />
                </div>
                <div className="company-info">
                  <h3 className="job-title">Mobile Apps & Web Development Project Manager</h3>
                  <p className="company-name">PT Walden Global Services</p>
                  <p className="job-description">
                    Managed multiple client projects (Ruby on Rails, PHP, Android, iOS, BlackBerry). 
                    Delivered 8 projects in 6 months with high client satisfaction.
                  </p>
                </div>
                <div className="job-location">📍 Bandung, Indonesia</div>
              </div>
            </div>
          </div>
        </div>
        <div className="view-more-container">
          <button 
            className="view-more-btn" 
            onClick={() => window.open('https://www.linkedin.com/in/ari-fikri/details/experience/', '_blank')}
          >
            View Full Experience
          </button>
        </div>
      </div>
    </section>
  );
}

export default Experience;
