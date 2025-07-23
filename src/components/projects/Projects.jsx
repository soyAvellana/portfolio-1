import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import tacoMockup from '../../assets/img/taco-mockup.png';

const projects = [
  {
    title: 'Taco Shop',
    image: tacoMockup,
    description:
      'A fictional taco shop website built with HTML, CSS & JavaScript. Fully responsive and styled with clean layout focus.',
    tech: ['React', 'Tailwind CSS'],
    live: 'https://soyavellana.github.io/taco-shop/',
    github: 'https://github.com/soyavellana/taco-shop',
  },

];

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-[#0f0f3d] via-[#1a0f4d] to-[#03001e] text-white px-6 flex flex-col items-center justify-center relative overflow-hidden"
    >

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-4xl w-full text-center relative z-10 mb-14">
<h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent" style={{ lineHeight: '1.2', paddingBottom: '0.2em' }} > Projects </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto my-4" />
        <p className="text-gray-300 text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
          Some projects I've built to apply and expand my frontend skills. <br></br>
          Clean, responsive and focused on user interface.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full relative z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition duration-300 shadow-lg" >


            <img
              src={project.image}
              alt={`${project.title} Mockup`}
              className="rounded-lg mb-4 border border-white/10 object-cover"
            />

            <h3 className="text-xl font-semibold text-purple-300">{project.title}</h3>
            <p className="text-gray-300 text-sm mt-2">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-3 text-xs">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-white/10 text-purple-200 px-2 py-1 rounded-md border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>


            <div className="flex justify-between items-center mt-4 text-sm">
              <a href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-300 hover:underline"
              >
                
        <FaExternalLinkAlt /> Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-400 hover:underline"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
