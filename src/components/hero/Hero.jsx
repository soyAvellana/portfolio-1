import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Hero() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-[#0f0f3d] to-[#03001e] text-white flex items-center justify-center">
      <div className="max-w-2xl px-6 text-center">

<h1 className="text-5xl md:text-7xl font-bold leading-tight mb-12 text-center">
  Hello, I'm{' '}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
    <TypeAnimation
      sequence={[
        'Hazel',
        2000,
        'Frontend Developer',
        2000,
        'UI Designer',
        2000,
        'Creative Mind',
        2000,
      ]}
      speed={50}
      repeat={Infinity}
      cursor="|" 
    />
  </span>
</h1>



        <p className="mt-8 text-gray-300 text-lg md:text-xl font-medium">
          I craft intuitive and elegant web interfaces with clean code and creative design.
        </p>




       <div className="flex justify-center gap-4 mt-6 flex-wrap">
  <a
    href="#projects"
    className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
  >
    Projects ↗
  </a>
  <a
    href="#contact"
    className="px-6 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-semibold hover:bg-white/20 hover:shadow-md transition-all duration-300"
  >
    Contact ✉️
  </a>
</div>



        <div className="flex justify-center gap-6 mt-8 text-2xl text-white/60">
          <a
            href="https://github.com/soyAvellana"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-white transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/hazel-hamurcu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="hover:text-white transition" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
