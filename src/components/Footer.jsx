import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer" id="more">
      <div className="footer-content">
        <div className="footer-socials">
          <a href="https://www.instagram.com/_d_nesh_/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
          <a href="https://www.facebook.com/dinesh.poudel.319452" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
          <a href="https://github.com/dinesh13p" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/dinesh-poudel-3a4b10331/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </div>
        <br/>
        <p className="footer-text2">-- This is a frontend-only website with no backend integration at the moment. --</p>
        <p className="footer-text1">2025</p>
      </div>
    </footer>
  );
};

export default Footer;
