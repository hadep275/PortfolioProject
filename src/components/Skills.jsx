import React, {useState, useEffect} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link as ScrollLink, Element } from 'react-scroll';
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
    <section id="skills"  className={`skills ${animated ? 'slide-in' : ''}`}>
      <h2>Skills</h2>
      <div className="skill-container">
        <div className="skill">
          <i className="fab fa-html5"></i>
          <span>HTML/CSS</span>
        </div>
        <div className="skill">
          <i className="fab fa-js"></i>
          <span>JavaScript</span>
        </div>
        <div className="skill">
          <i className="fab fa-react"></i>
          <span>React.js</span>
        </div>
        <div className="skill">
          <i className="fab fa-google"></i>
          <span>Google Cloud Services</span>
        </div>
        <div className="skill">
          <i className="fas fa-tools"></i>
          <span>Agile Methodologies</span>
        </div>
        <div className="skill">
          <i className="fas fa-chart-bar"></i>
          <span>Cognos</span>
        </div>
        <div className="skill">
          <i className="fab fa-figma"></i>
          <span>Figma</span>
        </div>
        <div className="skill">
          <i className="fab fa-microsoft"></i>
          <span>Azure</span>
        </div>
        <div className="skill">
          <i className="fab fa-git"></i>
          <span>Git</span>
        </div>
        <div className="skill">
          <i className="fab fa-node"></i>
          <span>Node.js</span>
        </div>
        <div className="skill">
          <i className="fas fa-database"></i>
          <span>MongoDB</span>
        </div>
        <div className="skill">
          <i className="fab fa-node"></i>
          <span>Express.js</span>
        </div>
        {/* Add more skills with icons as needed */}
      </div>
    </section>
  );
}

export default Skills;
