/**
 * @fileoverview Footer component
 * @author Maxwell Jones
 */

import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; {currentYear} Maxwell Jones. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:john.doe@example.com">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
