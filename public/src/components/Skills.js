import React from 'react';
import styled from 'styled-components';

const Skills = () => {
  return (
    <SkillsSection>
      <h2>Skills</h2>
      <ul>
        <li>React</li>
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>CSS</li>
      </ul>
    </SkillsSection>
  );
};

const SkillsSection = styled.div`
  margin: 40px;
  h2 {
    font-size: 2rem;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    font-size: 1.1rem;
    margin: 5px 0;
  }
`;

export default Skills;
