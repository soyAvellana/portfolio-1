import React from 'react';

const timeline = [
  {
    year: '2018',
    title: 'Meine Reise beginnt',
    description: 'Ich schrieb meine erste Zeile HTML – sofort war ich fasziniert von Webentwicklung.',
  },
  {
    year: '2020',
    title: 'Erste echte Projekte',
    description: 'Ich gestaltete erste Webseiten für Freunde und lokale Initiativen – Design & Struktur wurden meine Leidenschaft.',
  },
  {
    year: '2022',
    title: 'React & UI Design',
    description: 'Ich verliebte mich in Komponenten, Props und Tailwind. Sauberes Design trifft auf sauberen Code.',
  },
  {
    year: '2024',
    title: 'Portfolio & Freelance',
    description: 'Ich baue moderne, performante Frontends – mit Fokus auf Nutzererlebnis, Klarheit & Kreativität.',
  },
];

function Experiences() {
  return (
    <section id="experiences" className="bg-white dark:bg-[#0f0f3d] py-20 px-6 text-black dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            EXPERIENCE
          </span>
        </h2>
        <div className="relative border-l-2 border-purple-400 dark:border-purple-500 ml-4">
          {timeline.map((item, index) => (
            <div key={index} className="mb-10 ml-6 relative">
              <div className="absolute -left-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full border-4 border-white dark:border-[#0f0f3d]"></div>
              <p className="text-sm text-gray-500 dark:text-gray-300">{item.year}</p>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-1 text-gray-700 dark:text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
