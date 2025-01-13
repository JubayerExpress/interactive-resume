import React, { useEffect } from 'react';
import gsap from 'gsap';

const Contact = () => {
  useEffect(() => {
    gsap.from('.contact', { duration: 1, y: 100, opacity: 0, delay: 2 });
  }, []);

  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>Email: your.email@example.com</p>
    </section>
  );
};

export default Contact;
