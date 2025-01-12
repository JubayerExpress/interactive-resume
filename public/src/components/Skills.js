import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';

const SkillsSection = styled.section`
  background-color: #f9f9f9;
  padding: 4rem 0;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SkillItem = styled.div`
  text-align: center;
  h3 {
    margin-bottom: 1rem;
  }
`;

const Skills = () => {
  useEffect(() => {
    gsap.from('.skill-item', { duration: 1, scale: 0.5, opacity: 0, stagger: 0.3 });
  }, []);

  return (
    <SkillsSection id="skills">
      <div className="container">
        <h2>Skills</h2>
        <SkillList>
          <SkillItem className="skill-item">
            <h3>HTML</h3>
          </SkillItem>
          <SkillItem className="skill-item">
            <h3>CSS</h3>
          </SkillItem>
          <SkillItem className="skill-item">
            <h3>JavaScript</h3>
          </SkillItem>
        </SkillList>
      </div>
    </SkillsSection>
  );
};

export default Skills;

