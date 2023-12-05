import React, { useState } from 'react';
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
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
