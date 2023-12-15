import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Element } from 'react-scroll';
import { useTheme } from './ThemeProvider';
import project1Image from '../assets/img/project1.png';
import project2Image from '../assets/img/project2.png';
import project3Image from '../assets/img/project3.png';
import project4Image from '../assets/img/project4.png'
import '../css/Project.css';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of Project 1.',
    image: project1Image,
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2.',
    image: project2Image,
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3.',
    image: project3Image,
  },
  {
    title: 'Project 4',
    description: 'Description of Project 4.',
    image: project4Image,
  },
];


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
        {projects.map((project, index) => (
          <div className="project-item" key={index} data-aos="fade-up" data-aos-delay="100">
            
            <h3>{project.title}</h3>
            <img src={project.image} alt={`Project ${index + 1}`} />
            <p>{project.description}</p>
          </div> ))}
        </div>
      </section>
    </Element>
  );
};

export default Project;
