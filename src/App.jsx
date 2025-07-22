import React from 'react';
import './assets/fonts/fonts.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Experiences from './components/experiences/Experiences';
import Skills from './components/skills/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </>
  );
}

export default App;
