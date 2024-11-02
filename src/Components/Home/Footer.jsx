import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-logo-holder">
        <div className="footer-section company-info">
          <h2 className="logo"><img src="/whitelogo.png" alt="" /></h2>
          <p>234 Olusegun Obasanjo Way, Gwagwalada</p>
          <p>Federal Capital Territory, Abuja</p>
          <p>peteradebunde@scupay.com</p>
          <p>997-887-9904</p>
        </div>
        </div>

        {/* Company Links */}
        <div className="footer-others">
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/demo">Request a demo</a></li>
          </ul>
        </div>

        {/* Accounts Links */}
        <div className="footer-section">
          <h3>Accounts</h3>
          <ul>
            <li><a href="/admin">Administrators</a></li>
            <li><a href="/students">Students</a></li>
          </ul>
        </div>

        {/* Help Links */}
        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li><a href="/support">Support</a></li>
            <li><a href="/community">Community</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-section socials">
          <h3>Socials</h3>
          <ul>
            <li><a href="/facebook">Facebook</a></li>
            <li><a href="/linkedin">LinkedIn</a></li>
            <li><a href="/instagram">Instagram</a></li>
            <li><a href="/twitter">Twitter</a></li>
          </ul>
        </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="icons-holder">
          <div className="socials-icon">
            <img src="/facebookicon.png" alt="" />
            <img src="/twittericon.png" alt="" />
            <img src="/linkednicon.png" alt="" />
            <img src="/igicon.png" alt="" />
          </div>
          <p className="copyright">© Scupay 2024</p>
          </div>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/disclosure">Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;