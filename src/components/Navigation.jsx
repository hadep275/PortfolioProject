import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from './ThemeToggle';
import logoR from '../assets/img/logoR.png';
import '../css/Navigation.css';

const Navigation = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleNav = () => {
    // console.log('Toggle nav called');
    setNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setNavOpen(true);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });})
  
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const handleNavLinkClick = () => {
    if (isSmallScreen) {
      closeNav();
    }
  };
   

  return (
    <nav className={`nav ${isNavOpen ? '' : 'open'}`}>
      <div className="menu-toggle" onClick={toggleNav}>
      <FontAwesomeIcon 
      icon={isNavOpen ?  faTimes: faBars }
      className={`fa-flip-${isNavOpen ? 'horizontal' : 'vertical'}`} />
      </div>
      
      <div className="logo-container-nav">
            <img src={logoR} alt="Logo" />
      </div>
      <ul className={isNavOpen ? 'show' : ''}>
      <li>
          <ScrollLink to="about" smooth={true} duration={500} onClick={handleNavLinkClick}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="skills" smooth={true} duration={500} onClick={handleNavLinkClick}>
            Skills
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="projects" smooth={true} duration={500} onClick={handleNavLinkClick}>
            Projects
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} duration={500} onClick={handleNavLinkClick}>
            Contact
          </ScrollLink>
        </li>
        {/* <li>
          <ScrollLink to="blog" smooth={true} duration={500} onClick={handleNavLinkClick}>
            Blog
          </ScrollLink>
        </li> */}
      </ul>
      <ThemeToggle/>

    </nav>
  );
};

export default Navigation;
