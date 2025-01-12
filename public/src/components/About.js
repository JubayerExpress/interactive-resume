import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';

const AboutSection = styled.section`
  background-color: #f9f9f9;
  padding: 4rem 0;
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: #333;
`;

const About = () => {
  useEffect(() => {
    gsap.from('.about-text', { duration: 1, x: -100, opacity: 0 });
  }, []);

  return (
    <AboutSection id="about">
      <AboutContent>
        <h2 className="about-text">About Me</h2>
        <p className="about-text">
          I am a passionate frontend developer with experience in building
          responsive web applications using modern technologies such as React,
          CSS, and JavaScript.
        </p>
      </AboutContent>
    </AboutSection>
  );
};

export default About;

