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
      <h2 className="abouth2" data-aos="zoom-out-right" data-aos-duration="3000">Hikmah Adepoju</h2>
      <div className="about-me-container">
          <div className="avatar-container-img">
            <img src={logoR} alt="avatar" data-aos="zoom-in-left" data-aos-duration="3000"/>
          </div>
      <div className="about-container">
            <p data-aos="fade-up">
              As a seasoned Full Stack Developer with a solid background in Fintech and Business, 
              complemented by over 3 years of customer service experience and a year of financial crime investigation, 
              I'm actively seeking employment opportunities to contribute my wealth of experience. 
              My journey in the tech world has been shaped by real-world challenges and hands-on experience.
            </p>
            <p data-aos="fade-up">
              I have a strong foundation in Business Administration, 
              holding a Bachelor of Business Administration from Mount Royal University. 
            </p>
            <p data-aos="fade-up">
              My professional journey has included a role as a Financial Crime Specialist at Neo Financial, 
              providing me with invaluable insights into financial systems and risk management. 
              Presently, as a Full Stack Developer at New Idea Machine, 
              I am driving innovation and crafting dynamic solutions.
            </p>
            <p data-aos="fade-up">
              With my proven track record and a commitment to continuous growth, 
              I am ready to integrate seamlessly into any team, 
              bringing my open-minded and personable nature to create positive and efficient collaborations. 
              I'm excited to apply my expertise and enthusiasm to a dynamic organization in need of a confident and seasoned Full Stack Developer.
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
