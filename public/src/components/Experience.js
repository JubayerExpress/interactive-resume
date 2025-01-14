import React from 'react';
import styled from 'styled-components';

const Experience = () => {
  return (
    <ExperienceSection>
      <h2>Experience</h2>
      <ul>
        <li>
          <strong>Company XYZ</strong> – Full Stack Developer (2021 - Present)
        </li>
        <li>
          <strong>Company ABC</strong> – Frontend Developer (2019 - 2021)
        </li>
      </ul>
    </ExperienceSection>
  );
};

const ExperienceSection = styled.div`
  margin: 40px;
  h2 {
    font-size: 2rem;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 10px 0;
    font-size: 1.1rem;
  }
`;

export default Experience;
