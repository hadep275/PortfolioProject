import React, {useEffect} from 'react';
import Bubble from './Bubble';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import logoR from '../assets/img/logoR.png';

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
      <div className="about-me-container">
          <div className="logo-container">
            <img src={logoR} alt="Logo" />
          </div>
      <div className="about-container">
      <h2 data-aos="zoom-out-right" data-aos-duration="3000">Hikmah Adepoju</h2>
      {/* <Bubble data-aos="zoom-out-right"/> */}
      <p>Your bio or description goes here.</p>
      <p data-aos="fade-up">
              Hi, I'm Hikmah Adepoju, a passionate and creative FullStack Developer. I love turning
              ideas into reality through coding and creating amazing software.
            </p>
            <p data-aos="fade-up">
              My skills include [Your Skills], and I have experience working on projects like React Projects.
              I'm always eager to learn new technologies and take on exciting challenges.
            </p>
            <div className="social-icons" data-aos="fade-up">
              <a href="https://github.com/hadep275" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />
              </a>
              <a href="[Link to Demo]" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt size={30} />
              </a>
            </div>
      </div>
      </div>
    </section>
  );
};

export default About;
