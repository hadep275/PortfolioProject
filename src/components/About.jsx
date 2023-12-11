import React from 'react';
import Bubble from './Bubble';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="about-container">

      <h2>About Me</h2>
      <Bubble/>
      <p>Your bio or description goes here.</p>
      </div>
    </section>
  );
};

export default About;
