import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <h1>John Doe</h1>
      <p>Full Stack Developer | Designer | Engineer</p>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  text-align: center;
  margin: 20px;
  h1 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.2rem;
    color: #666;
  }
`;

export default Header;
