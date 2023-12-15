import React, {useEffect} from 'react';
import Bubble from './Bubble';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      anchorPlacement: 'top-bottom',
    });
    AOS.refresh();
  }, []);


  return (
    <section id="about" className="section">
      <div className="about-container">
      <h2 data-aos="zoom-out-right" data-aos-duration="3000">About Me</h2>
      <Bubble data-aos="zoom-out-right"/>
      <p>Your bio or description goes here.</p>
      </div>
    </section>
  );
};

export default About;
