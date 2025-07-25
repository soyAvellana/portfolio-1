import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaCode, FaPalette, FaLightbulb } from 'react-icons/fa';

function Hero() {
  return (
<div className="min-h-screen pt-24 bg-gradient-to-br from-[#0f0f3d] to-[#03001e] text-white flex flex-col lg:items-center justify-center">

      <div className="max-w-4xl px-6 text-center">
        


        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
  <span className="block text-gray-200 mb-4">Hello, I'm</span>

  <span className="block min-h-[48px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
    <TypeAnimation
      sequence={[
        'Hazel',
        2000,
        'Frontend Developer',
        2000,
        'React Lover',
        2000,
        'Creative Mind',
        2000,
      ]}
      speed={50}
      repeat={Infinity}
      cursor={false}
         style={{ display: 'inline-block' }}
    />
  </span>
</h1>

  
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed mb-6">
            I craft <span className="text-purple-300 font-medium"> intuitive</span> and <span className="text-blue-300 font-medium">elegant</span> web interfaces with <br></br>
            clean code and creative design.
          </p>

      
          <div className="flex justify-center gap-8 mb-8 text-gray-400">
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <FaCode className="text-2xl group-hover:text-purple-400 transition-colors duration-300" />
              <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Code</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <FaPalette className="text-2xl group-hover:text-pink-400 transition-colors duration-300" />
              <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Design</span>
            </div>
           
           
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <FaLightbulb className="text-2xl group-hover:text-blue-400 transition-colors duration-300" />
              <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Ideas</span>
            </div>
          </div>
        </div>

      

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="#contact"
            className="group px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold hover:bg-white/10 hover:border-white/30 hover:shadow-lg transition-all duration-300 transform 
            hover:-translate-y-1">
            <span className="flex items-center gap-2">Get In Touch</span>
          
          </a>
        </div>

   
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/soyAvellana"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group relative p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
            <FaGithub className="text-2xl text-gray-400 group-hover:text-purple-500 transition-colors duration-300" />
          </a>

          <a
            href="https://www.linkedin.com/in/hazel-hamurcu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group relative p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
            <FaLinkedin className="text-2xl text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
          
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
