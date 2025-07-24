import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiWordpress,
  SiSass,
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, color: 'text-orange-500' },
  { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
  { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-sky-400' },
  { name: 'Sass', icon: <SiSass />, color: 'text-pink-500' },
  { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-400' },
  { name: 'WordPress', icon: <SiWordpress />, color: 'text-blue-600' },
];

function Skills() {
  return (
  <div
  id="skills"
  className="min-h-screen py-32 bg-gradient-to-br from-[#0f0f3d] via-[#1a0f4d] to-[#03001e] text-white px-6 flex items-center justify-center relative overflow-hidden"
>
  
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

<div className="max-w-5xl w-full relative z-10 text-center space-y-10">
  <div>
    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-sans">
      SKILLS
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6" />
  </div>

        <p className="text-gray-300 text-lg lg:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
          These are the technologies I use to build fast, responsive and beautiful user interfaces. I enjoy combining logic with design to create clean and user-friendly web applications.
        </p>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-5 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className={`text-4xl mb-2 ${skill.color}`}>{skill.icon}</div>
              <p className="text-sm text-gray-300 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
