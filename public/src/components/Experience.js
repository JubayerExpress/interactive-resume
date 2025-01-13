import React, { useEffect } from 'react';
import gsap from 'gsap';

const Experience = () => {
  useEffect(() => {
    gsap.from('.experience', { duration: 1, x: -200, opacity: 0, delay: 1 });
  }, []);

  return (
    <section className="experience">
      <h2>Experience</h2>
      <ul>
        <li>Software Developer at XYZ - 2020 to Present</li>
        <li>Front-end Developer at ABC - 2018 to 2020</li>
      </ul>
    </section>
  );
};

export default Experience;
