import React, { useState } from 'react';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';
import '../css/Navigation.css';

const Navigation = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };
  

  return (
    <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
      <div className={`menu-toggle ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
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
      <ThemeToggle/>

    </nav>
  );
};

export default Navigation;
