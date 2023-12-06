import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from './ThemeToggle';
import '../css/Navigation.css';

const Navigation = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    console.log('Toggle nav called');
    setNavOpen(!isNavOpen);
  };
  

  return (
    <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={toggleNav}>
        {isNavOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </div>
      {isNavOpen && (
      <ul>
      <li>
          <Link to="about" smooth={true} duration={500} onClick={toggleNav}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} onClick={toggleNav}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={toggleNav}>
            Contact
          </Link>
        </li>
      </ul>
      )}
      <ThemeToggle/>

    </nav>
  );
};

export default Navigation;
