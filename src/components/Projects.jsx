import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Element } from 'react-scroll';
import { useTheme } from './ThemeProvider';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
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
    githubLink: 'https://github.com/your-username/project1',
    demoLink: 'https://demo.project1.com',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2.',
    image: project2Image,
    githubLink: 'https://github.com/your-username/project1',
    demoLink: 'https://demo.project1.com',
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3.',
    image: project3Image,
    githubLink: 'https://github.com/your-username/project1',
    demoLink: 'https://demo.project1.com',
  },
  {
    title: 'Project 4',
    description: 'Description of Project 4.',
    image: project4Image,
    githubLink: 'https://github.com/your-username/project1',
    demoLink: 'https://demo.project1.com',
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
            <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> 
                </a>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> 
                </a>
              </div>
          </div> ))}
        </div>
      </section>
    </Element>
  );
};

export default Project;
