import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import '../css/Bubble.css';

const AnimatedBubble = () => {
  const props = useSpring({
    loop: { reverse: true },
    to: [
      { transform: 'scale(1)', boxShadow: '0px 0px 12px 3px #6ac3d1', background: '#a8edf7' },
      { transform: 'scale(1.2)', boxShadow: '0px 0px 18px 5px #6ac3d1', background: '#ccf4fa' },
    ],
    from: { transform: 'scale(1)', boxShadow: '0px 0px 12px 3px #6ac3d1', background: '#a8edf7' },
  });

  return (
    <animated.div className="animated-bubble" 
    // style={props}
    >
      <p><br></br>Hikmah Adepoju</p>
      <div className="wave" data-aos="fade-up"
     data-aos-duration="3000"/>
    </animated.div>
  );
};

export default AnimatedBubble;