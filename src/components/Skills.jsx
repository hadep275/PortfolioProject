import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Element } from 'react-scroll';
import '../css/Skills.css';

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      anchorPlacement: 'top-bottom',
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const offsetTop = skillsSection.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > offsetTop && !animated) {
          setAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animated]);

  return (
    <Element name="skills">
      <section className={`skills ${animated ? 'slide-in' : ''}`} data-aos="slide-up" >
      <h2 data-aos="flip-left">Skills</h2>
        <div className="skill-container" data-aos="zoom-out-right" data-aos-offset="500" data-aos-easing="ease-in-sine">
          {skills.map((skill, index) => (
            <div key={index} className="skill" style={{ animationDelay: `${index * 0.1}s` }}>
              <i className={iconClassNames[index]}></i>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'Java',
  'Firebase',
  'MongoDB',
  'SQLite',
  'Git',
  'GitHub',
  'VS Code',
  'NPM',
  'JWT',
  'AWS',
  'Expo',
  'Canva',
  'Figma',
  'Jira',
  'Postman',
  'Docker',
  'React Native',
  'AI Machine Learning',
  'Vercel',
  'Electron',
  'TailwindCSS',
];

const iconClassNames = [
  'fab fa-html5',
  'fab fa-css3',
  'fab fa-js',
  'fab fa-react',
  'fab fa-node',
  'fab fa-node-js',
  'fab fa-java',
  'fab fa-firefox-browser',
  'fas fa-database',
  'fas fa-database',
  'fab fa-git',
  'fab fa-github',
  'fas fa-code',
  'fab fa-npm',
  'fas fa-key',
  'fab fa-aws',
  'fas fa-paper-plane',
  'fas fa-paint-brush',
  'fab fa-figma',
  'fab fa-jira',
  'fas fa-share-alt',
  'fab fa-docker',
  'fab fa-react',
  'fas fa-robot',
  'fab fa-vercel',
  'fab fa-electron',
  'fab fa-tailwind',
];

export default Skills;
