import React from 'react';

const experiences = [
  {
    year: 'Apr – Jul 2025',
    title: 'Frontend Developer Trainee',
    company: 'DBE Academy',
    description:
      'Completed an intensive training program focused on frontend development and modern frameworks.',
  },
  {
    year: '2023 – 2024',
    title: 'Self-Taught Programming',
    company: 'FreeCodeCamp & Mimo',
    description:
      'Learned HTML, CSS, JavaScript and React through hands-on practice, challenges and projects.',
  },
  {
    year: '2020 – 2024',
    title: 'Youth & Residential Educator',
    company: 'Abenteuerspielplatz Feuerbach',
    description:
      'Worked with children and teens, and also handled creative and design tasks in the educational environment.',
  },
];



function ExperienceTimeline() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0f3d] via-[#1a0f4d] to-[#03001e] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-sans">
          Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
      </div>

      <div className="max-w-5xl mx-auto relative">

        <div className="absolute top-0 left-[20px] h-full w-[2px] bg-white/20"></div>

   

        <div className="flex flex-col space-y-12 ml-12">

          {experiences.map((exp, index) => (
            <div key={index} className="relative">
      
              <span className="absolute -left-[36px] top-8 w-4 h-4 rounded-full bg-purple-500 ring-2 ring-white/30 shadow" />

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <p className="text-sm text-gray-300 mb-1">{exp.year}</p>
                <h3 className="text-xl font-semibold text-purple-400">{exp.title}</h3>
                <p className="text-md font-medium text-blue-400 mb-2">{exp.company}</p>
                <p className="text-gray-200">{exp.description}</p>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceTimeline;
