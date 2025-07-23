import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import ProjectCard from './components/projects/Projects';
import Experiences from './components/experiences/Experiences';
import Contact from './components/contact/Contact';

function HomePage() {
  return (
    <>
      <Hero />

      <About />

      <Skills />
      <ProjectCard />
    </>
  );

}

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<ProjectCard />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

    </Router>
  );
}

export default App;
