import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Element } from 'react-scroll';
import { useTheme } from './ThemeProvider';
import '../css/Project.css';

const Project = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      anchorPlacement: 'top-bottom',
    });
    AOS.refresh();
  }, []);

  return (
    <Element name="projects">
      <section className={`project ${isDarkMode ? 'dark-mode' : 'light-mode'}`} data-aos="fade-up">
        <h2 data-aos="fade-up">Projects</h2>
        <div className="project-container">
          {/* Add your project items here */}
          <div className="project-item" data-aos="fade-up" data-aos-delay="100">
            <h3>Project 1</h3>
            <p>Description of Project 1.</p>
          </div>

          <div className="project-item" data-aos="fade-up" data-aos-delay="200">
            <h3>Project 2</h3>
            <p>Description of Project 2.</p>
          </div>

        </div>
      </section>
    </Element>
  );
};

export default Project;
