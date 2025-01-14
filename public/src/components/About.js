import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutSection>
      <h2>About Me</h2>
      <p>
        I am a full-stack developer with a passion for building interactive web applications and beautiful user interfaces. 
        I love working with the latest web technologies and constantly improving my skills.
      </p>
    </AboutSection>
  );
};

const AboutSection = styled.div`
  margin: 40px;
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.1rem;
    color: #444;
  }
`;

export default About;
