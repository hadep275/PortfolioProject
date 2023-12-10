import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from './ThemeToggle';
import '../css/Navigation.css';

const Navigation = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleNav = () => {
    console.log('Toggle nav called');
    setNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  
  
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Set initial screen size
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={toggleNav}>
      <FontAwesomeIcon 
      icon={isNavOpen ? faBars :faTimes  }
      className={`fa-flip-${isNavOpen ? 'horizontal' : 'vertical'}`} />
      </div>
      <ul className={isNavOpen ? '' : 'show'}>
      <li>
          <Link to="about" smooth={true} duration={500} onClick={isSmallScreen ? closeNav : undefined}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} onClick={isSmallScreen ? closeNav : undefined}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} onClick={isSmallScreen ? closeNav : undefined}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={isSmallScreen ? closeNav : undefined}>
            Contact
          </Link>
        </li>
        
        <li>
          <Link to="blog" smooth={true} duration={500} onClick={isSmallScreen ? closeNav : undefined}>
            Blog
          </Link>
        </li>
      </ul>
      <ThemeToggle/>

    </nav>
  );
};

export default Navigation;
