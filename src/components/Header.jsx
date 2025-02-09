import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faBriefcase, faCogs, faEnvelope, faBars, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  

  return (
    <header>

      <div className="logo">WhatsUp!</div>
      <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>



      <div className='navbar'>
        <nav>
          <ul className={isOpen ? 'open' : ''}>
          <li>
  <a href="#home" onClick={closeMenu}>
    <FontAwesomeIcon icon={faHome} /> Home
  </a>
</li>
<li>
  <a href="#service" onClick={closeMenu}>
    <FontAwesomeIcon icon={faCogs} /> Service
  </a>
</li>
<li>
  <a href="#about" onClick={closeMenu}>
    <FontAwesomeIcon icon={faInfoCircle} /> About
  </a>
</li>
<li>
  <a href="#works" onClick={closeMenu}>
    <FontAwesomeIcon icon={faBriefcase} /> Works
  </a>
</li>
<li>
  <a href="#contact" onClick={closeMenu}>
    <FontAwesomeIcon icon={faEnvelope} /> Contact
  </a>
</li>
<li>
  <a href="#more" onClick={closeMenu}>
    <FontAwesomeIcon icon={faGlobe} /> More
  </a>
</li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
