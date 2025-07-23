import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass =
    'text-white hover:text-cyan-400 transition-colors duration-300';
  const navLinkMobile =
    'block text-white text-lg hover:text-cyan-400 transition-colors duration-300';

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-[#0f0f3d]/80 via-[#1a0f4d]/80 to-[#03001e]/80 border-b border-white/10 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        <NavLink to="/"
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 tracking-wide hover:opacity-80 transition">
          HH
        </NavLink>

      
        <ul className="hidden md:flex space-x-8 text-sm font-sans">
          <li><NavLink to="/about" className={navLinkClass}>ABOUT ME</NavLink></li>
          <li><NavLink to="/skills" className={navLinkClass}>SKILLS</NavLink></li>
          <li><NavLink to="/projects" className={navLinkClass}>PROJECTS</NavLink></li>
          <li><NavLink to="/experiences" className={navLinkClass}>EXPERIENCE</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass}>CONTACT</NavLink></li>
        </ul>

      
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>


      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0f0f3d]/90 backdrop-blur-md px-6 pt-4 pb-6 space-y-4 text-center font-sans shadow-lg z-40">
          <NavLink to="/about" className={navLinkMobile} onClick={() => setIsOpen(false)}>ABOUT ME</NavLink>
          <NavLink to="/skills" className={navLinkMobile} onClick={() => setIsOpen(false)}>SKILLS</NavLink>
          <NavLink to="/projects" className={navLinkMobile} onClick={() => setIsOpen(false)}>PROJECTS</NavLink>
          <NavLink to="/experiences" className={navLinkMobile} onClick={() => setIsOpen(false)}>EXPERIENCE</NavLink>
          <NavLink to="/contact" className={navLinkMobile} onClick={() => setIsOpen(false)}>CONTACT</NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
