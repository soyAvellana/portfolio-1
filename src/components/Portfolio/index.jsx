import React, {useEffect} from 'react';
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


function Portfolio() {
  useEffect(()=>{
  document.title = "Portfolio - Hazel Hamurcu";
  }, []);

  return (
    <section
      id="projects"
      className="min-h-[130vh] py-36 bg-gradient-to-br from-[#0f0f3d] via-[#1a0f4d] to-[#03001e] text-white px-6 flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-6xl w-full relative z-10">
      

        <div className="text-center mb-20">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
  PORTFOLIO </h2>

          <div className="flex justify-center mb-8">
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full" />
          </div>

      <p className="text-gray-300 text-lg lg:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
            Projects I've built to apply and expand my frontend skills.
            <br/>
            <span className="text-purple-300 font-medium">Clean, responsive and user-focused.</span>
          </p>
        </div>

  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-500 shadow-2xl
               hover:shadow-purple-500/20 hover:bg-white/10 transform hover:-translate-y-2"
            >

              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video">
                  <img
                    src={project.image}
                    alt={`${project.title} Mockup`}
                     loading="lazy"
                  className="w-full h-full object-cover object-[10%_center] transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  
            
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-base leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm text-purple-200 px-3 py-1.5 rounded-full border border-purple-400/30 text-sm font-medium hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
    
    
    
          <a
            href={project.live}
             target="_blank"
              rel="noopener noreferrer"
                aria-label={`Live demo of ${project.title}`}
  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 group/link"
>


  <FaExternalLinkAlt className="group-hover/link:translate-x-1 transition-transform duration-300" />
  Live Demo
</a>

<a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={`Source code of ${project.title} on GitHub`}
  className="flex items-center gap-2 text-gray-400 hover:text-white font-medium transition-all duration-300 group/link"
>
  <FaGithub className="group-hover/link:rotate-12 transition-transform duration-300" />
  Code
</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Portfolio;
