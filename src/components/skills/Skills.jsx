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
  { name: 'Sass', icon: <SiSass />, color: 'text-pink-500' }, // SCSS ganz vorne
  { name: 'HTML', icon: <FaHtml5 />, color: 'text-orange-500' },
  { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
  { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-sky-400' },
  { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-400' },
  { name: 'WordPress', icon: <SiWordpress />, color: 'text-blue-600' }, // WordPress am Ende
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-[#0f0f3d] text-black dark:text-white px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            My Skills
          </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition-transform"
            >
              <div className={`text-4xl mb-3 ${skill.color}`}>
                {skill.icon}
              </div>
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
