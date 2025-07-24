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
    <section className="min-h-[130vh] py-36 bg-gradient-to-br from-[#0f0f3d] via-[#1a0f4d] to-[#03001e] text-white px-6">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-sans">
          EXPERIENCE
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
 

 
  <div className="absolute top-0 left-4 h-full w-[2px] bg-white/10"></div>

  <div className="flex flex-col space-y-16 pl-12">
    {experiences.map((exp, index) => (
      <div key={index} className="relative">
       


        <span className="absolute -left-10 top-5 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 ring-4 ring-white/20 shadow z-10" />


        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <p className="text-sm text-gray-400 mb-1">{exp.year}</p>
          <h3 className="text-xl font-semibold text-purple-300">{exp.title}</h3>
              <p className="text-md font-medium text-blue-300 mb-2">{exp.company}</p>
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
