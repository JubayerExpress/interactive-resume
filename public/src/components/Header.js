import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  background-color: #333;
  color: white;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin-right: 1.5rem;
  }

  a {
    color: white;
    font-size: 1.2rem;
  }
`;

const Intro = styled.div`
  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
    color: #ccc;
  }
`;

const Header = () => {
  useEffect(() => {
    gsap.from('.nav-link', { duration: 1, y: -20, opacity: 0, stagger: 0.3 });
  }, []);

  return (
    <HeaderContainer>
      <Intro>
        <h1>John Doe</h1>
        <p>Frontend Developer</p>
      </Intro>
      <Nav>
        <ul>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#experience" className="nav-link">Experience</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

