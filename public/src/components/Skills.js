import React, { useEffect } from 'react';
import gsap from 'gsap';

const Skills = () => {
  useEffect(() => {
    gsap.from('.skills', { duration: 1, x: 200, opacity: 0, delay: 1.5 });
  }, []);

  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>GSAP</li>
        <li>Styled Components</li>
      </ul>
    </section>
  );
};

export default Skills;
