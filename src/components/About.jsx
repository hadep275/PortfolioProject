import React, {useEffect} from 'react';
import { useTheme } from './ThemeProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import resumePDF from '../assets/resume/YourResume.pdf';
import logoR from '../assets/img/logoR.png';
import '../css/About.css';

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      anchorPlacement: 'top-bottom',
    });
    AOS.refresh();
  }, []);


  return (
    <section id="about" className="about-me">
      <h2 data-aos="zoom-out-right" data-aos-duration="3000">Hikmah Adepoju</h2>
      <div className="about-me-container">
          <div className="avatar-container-img">
            <img src={logoR} alt="avatar" />
          </div>
      <div className="about-container">
      <p data-aos="fade-up">
              Hi, I'm Hikmah Adepoju, a passionate and creative FullStack Developer. I love turning
              ideas into reality through coding and creating amazing software.
            </p>
            <p data-aos="fade-up">
              My skills include ..., and I have experience working on projects like React Projects.
              I'm always eager to learn new technologies and take on exciting challenges.
            </p>
            <div className="social-icons" data-aos="fade-up">
              <a href="https://github.com/hadep275" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />
              </a>
              <a href="https://www.linkedin.com/in/hikmaha/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
              </a>
              <a href={resumePDF} download="Your_Name_Resume.pdf" rel="noopener noreferrer">
          <FaFilePdf size={30}/>
        </a>
            </div>
      </div>
      </div>
    </section>
  );
};

export default About;
