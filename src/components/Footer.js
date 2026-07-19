import { ReactComponent as PersonIcon } from '../assets/icons/person.svg';
import { ReactComponent as MailIcon } from '../assets/icons/mail.svg';
import { ReactComponent as VerifiedIcon } from '../assets/icons/verified.svg';
import { ReactComponent as WhatsAppIcon }  from '../assets/icons/wa_white.svg';

function Footer() {
  const phoneNumber = '6289656666148';
  const createWhatsAppUrl = () => {
    const message = encodeURIComponent(`Hi Ari! I came across your portfolio and would like to chat about a possible collaboration or opportunity.`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <h2 className="footer-title">Let's Work Together</h2>
            <p className="footer-text">
              I'm open to opportunities in Technical Program Management, 
              Digital Transformation, and Engineering Leadership roles.
            </p>
          </div>
          <div className="footer-right">
            <div className="contact-item">
              <span className="contact-icon">
                <PersonIcon style={{ width: '24px', height: '24px' }} />
              </span>
              <span className="contact-text">Ciwidey - Bandung, Indonesia</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <MailIcon style={{ width: '24px', height: '24px' }} />
              </span>
              <span className="contact-text"><a href="mailto:arirushan79@gmail.com">arirushan79@gmail.com</a></span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <VerifiedIcon style={{ width: '24px', height: '24px' }} />
              </span>
              <span className="contact-text"><a href="https://www.linkedin.com/in/ari-fikri">linkedin.com/in/ari-fikri</a></span>
            </div>
            
            <button className="contact-btn" onClick={() => window.open(createWhatsAppUrl(), '_blank')}>
              <WhatsAppIcon style={{ width: '35px', height: '35px' }} />
              WhatsApp Me
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
