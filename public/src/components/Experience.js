import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  padding: 4rem 0;
`;

const ExperienceList = styled.ul`
  list-style: none;
`;

const ExperienceItem = styled.li`
  margin-bottom: 2rem;
  h3 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1.2rem;
    color: #666;
  }
`;

const Experience = () => {
  useEffect(() => {
    gsap.from('.experience-item', { duration: 1, y: 50, opacity: 0, stagger: 0.3 });
  }, []);

  return (
    <ExperienceSection id="experience">
      <div className="container">
        <h2>Experience</h2>
        <ExperienceList>
          <ExperienceItem className="experience-item">
            <h3>Frontend Developer - XYZ Corp</h3>
            <p>January 2020 - Present</p>
          </ExperienceItem>
          <ExperienceItem className="experience-item">
            <h3>Junior Web Developer - ABC Tech</h3>
            <p>June 2018 - December 2019</p>
          </ExperienceItem>
        </ExperienceList>
      </div>
    </ExperienceSection>
  );
};

export default Experience;

