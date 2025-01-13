import React, { useEffect } from 'react';
import gsap from 'gsap';

const About = () => {
  useEffect(() => {
    gsap.from('.about', { duration: 1, opacity: 0, delay: 0.5 });
  }, []);

  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
        I am a passionate developer with experience in building modern web applications using React, GSAP, and Styled Components.
      </p>
    </section>
  );
};

export default About;
