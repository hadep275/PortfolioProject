import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Element } from 'react-scroll';
import { useTheme } from './ThemeProvider';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import project1Image from '../assets/img/project1.png';
import palindromeImage from '../assets/img/palindrome.png';
import project2Image from '../assets/img/project2.png';
import project3Image from '../assets/img/project3.png';
import project4Image from '../assets/img/project4.png'
import '../css/Project.css';

const projects = [
  {
    title: 'Mortgage Calculator',
    // description: 'Description of Project 1.',
    image: project1Image,
    githubLink: 'https://github.com/hadep275/MortgageCalculator',
    demoLink: 'https://hadep275.github.io/MortgageCalculator/',
  },
  {
    title: 'Palindrome Checker',
    // description: 'Description of Palindrome.',
    image: palindromeImage,
    githubLink: 'https://github.com/hadep275/Palindrome-Checker',
    demoLink: 'https://hadep275.github.io/Palindrome-Checker/',
  },
  {
    title: 'Every Child Plays',
    // description: 'Description of Project 2.',
    image: project2Image,
    githubLink: 'https://github.com/hadep275/everychildplays',
    demoLink: 'https://demo.project1.com',
  },
  {
    title: 'Indeygo',
    // description: 'Description of Project 3.',
    image: project3Image,
    githubLink: 'https://github.com/hadep275/indeygo',
    demoLink: 'https://demo.project1.com',
  },
  {
    title: 'Contractor Database',
    // description: 'Description of Project 4.',
    image: project4Image,
    githubLink: 'https://github.com/new-idea-machine/os-contractor-database-system',
    demoLink: 'https://test.skape.space/',
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
