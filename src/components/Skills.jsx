import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Element } from 'react-scroll';
import '../css/Skills.css';

const Skills = () => {
  const [animated, setAnimated] = useState(false);

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
      <section className="skills">
        <h2>Skills</h2>
        <div className="skill-container">
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
  'HTML/CSS',
  'JavaScript',
  'React.js',
  'Google Cloud Services',
  'Agile Methodologies',
  'Cognos',
  'Figma',
  'Azure',
  'Git',
  'Express.js',
  'MongoDB',
  'Node.js',
];

const iconClassNames = [
  'fab fa-html5',
  'fab fa-js',
  'fab fa-react',
  'fab fa-google',
  'fas fa-tools',
  'fas fa-chart-bar',
  'fab fa-figma',
  'fab fa-microsoft',
  'fab fa-git',
  'fab fa-node',
  'fas fa-database',
  'fab fa-node',
];

export default Skills;
