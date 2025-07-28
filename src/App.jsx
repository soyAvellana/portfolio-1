import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Legal from './components/Impressum';
import ScrollTopButton from './components/ScrollTopButton';


function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
  
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

      
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </main>

        <Footer />
         <ScrollTopButton />
      </div>
    </Router>
  );
}

export default App;
