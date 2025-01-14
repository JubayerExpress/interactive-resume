import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactSection>
      <h2>Contact</h2>
      <p>Email: john.doe@example.com</p>
      <p>Phone: +123 456 7890</p>
    </ContactSection>
  );
};

const ContactSection = styled.div`
  margin: 40px;
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.1rem;
    margin: 5px 0;
  }
`;

export default Contact;
