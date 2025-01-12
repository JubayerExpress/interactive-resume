import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 4rem 0;
  text-align: center;
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>Email: johndoe@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </ContactSection>
  );
};

export default Contact;

