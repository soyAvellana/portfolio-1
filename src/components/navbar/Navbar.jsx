import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-[#0f0f3d]/80 via-[#1a0f4d]/80 to-[#03001e]/80 border-b border-white/10 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 tracking-wide">
          HH
        </span>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-sm font-sans">
          <li>
            <a href="/" className="text-white hover:text-cyan-400 transition-colors duration-300">
              HOME
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-cyan-400 transition-colors duration-300">
              ABOUT ME
            </a>
          </li>
          <li>
            <a href="/skills" className="text-white hover:text-cyan-400 transition-colors duration-300">
              SKILLS
            </a>
          </li>
          <li>
            <a href="/projects" className="text-white hover:text-cyan-400 transition-colors duration-300">
              PROJECTS
            </a>
          </li>
          <li>
            <a href="/experience" className="text-white hover:text-cyan-400 transition-colors duration-300">
              EXPERIENCE
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-cyan-400 transition-colors duration-300">
              CONTACT
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

    {isOpen && (
  <div className="md:hidden bg-[#0f0f3d]/90 backdrop-blur-md px-6 pt-4 pb-6 space-y-4 text-center font-sans">
    <a href="/" className="block text-white text-lg hover:text-cyan-400" onClick={() => setIsOpen(false)}>HOME</a>
    <a href="/about" className="block text-white text-lg hover:text-cyan-400" onClick={() => setIsOpen(false)}>ABOUT ME</a>
    <a href="/skills" className="block text-white text-lg hover:text-cyan-400" onClick={() => setIsOpen(false)}>SKILLS</a>
    <a href="/projects" className="block text-white text-lg hover:text-cyan-400" onClick={() => setIsOpen(false)}>PROJECTS</a>
    <a href="/experience" className="block text-white text-lg hover:text-cyan-400" onClick={() => setIsOpen(false)}>EXPERIENCE</a>
    <a href="/contact" className="block text-white text-lg hover:text-cyan-400" onClick={() => setIsOpen(false)}>CONTACT</a>
  </div>

      )}
    </nav>
  );
}

export default Navbar;
