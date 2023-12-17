/* Footer.jsx */

import React from 'react';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import resumePDF from '../assets/resume/YourResume.pdf';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">© 2023 Hikmah Adepoju. All rights reserved.</div>
      <div className="footer-icons">
        <a href="https://github.com/hadep275" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/hikmaha/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={resumePDF} download="Your_Name_Resume.pdf">
          <FaFilePdf />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
