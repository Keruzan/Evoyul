import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="social-links">
      <a 
        href="https://www.facebook.com/share/1EYB1zvxNw/?mibextid=LQQJ4d" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebook className="social-icon" />
      </a>
      <a 
        href="https://x.com/evoyul2024" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter className="social-icon" />
      </a>
      <a 
        href="https://www.instagram.com/evoyul?igsh=MTN0OXUyeXZoMWJlNQ==" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram className="social-icon" />
      </a>
      <a 
        href="https://www.linkedin.com/company/evoyul/" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Linkedin"
      >
        <FaLinkedinIn className="social-icon" />
      </a>
    </div>
  );
}

export default SocialIcons;