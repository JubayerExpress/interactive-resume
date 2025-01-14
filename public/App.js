import React, { useEffect } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { gsap } from 'gsap';

function App() {
  useEffect(() => {
    gsap.from('h1', { duration: 1, y: -100, opacity: 0 });
    gsap.from('p', { duration: 1, x: -100, opacity: 0, delay: 0.5 });
    gsap.from('h2', { duration: 1, opacity: 0, delay: 1 });
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
