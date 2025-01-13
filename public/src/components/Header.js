import React, { useEffect } from 'react';
import gsap from 'gsap';

const Header = () => {
  useEffect(() => {
    gsap.from('.header', { duration: 1, y: -100, opacity: 0 });
  }, []);

  return (
    <header className="header">
      <h1>Interactive Resume</h1>
      <h2>Your Name</h2>
    </header>
  );
};

export default Header;
