import React from 'react';
import Navigation from './Navigation';
import '../css/header.css';
const Header = () => {
  return (
    <header>
      <Navigation/>
      <h1>My Name</h1>
      <p>Web Developer</p>
    </header>
  );
};

export default Header;
