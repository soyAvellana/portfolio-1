import React from 'react';
import profileImg from '../../assets/img/Profile.jpg';

import {
  Globe,
  Code,
  Heart,
  Rocket,
  Palette,
  Users,
  GraduationCap,
} from 'lucide-react';
import { FaLanguage } from 'react-icons/fa'; 

function About() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-[#0f0f3d] via-[#1a0f4d] to-[#03001e] text-white px-6 flex items-center justify-center 
    relative overflow-hidden">
      
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

     
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
       
        <div className="text-center lg:text-left space-y-8">
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-sans">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto lg:mx-0 mb-6"></div>
          </div>
          
          <p className="text-gray-300 text-lg lg:text-xl font-medium leading-relaxed">
            Hi, I'm <span className="text-purple-400 font-semibold">Hazel</span> – a frontend developer with a passion for clean design, responsive interfaces,
            and user-centered development. I work with HTML, CSS/SCSS, JavaScript, React, and Tailwind CSS.
          </p>
          
          <p className="text-gray-300 text-lg lg:text-xl font-medium leading-relaxed">
            I love building web apps that are fast, accessible, and intuitive. With a background in education
            and a curious mindset, I transitioned into tech through self-learning and hands-on experience.
          </p>
          
          <p className="text-gray-300 text-lg lg:text-xl font-medium leading-relaxed">
            I enjoy working remotely, collaborating across cultures, and building meaningful digital products.
          </p>

         
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Rocket className="text-2xl text-purple-400 mb-2" />
              <span className="text-sm text-gray-300 font-medium">Fast & Modern</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Palette className="text-2xl text-pink-400 mb-2" />
              <span className="text-sm text-gray-300 font-medium">Clean Design</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Users className="text-2xl text-blue-400 mb-2" />
              <span className="text-sm text-gray-300 font-medium">User-Centered</span>
            </div>
          </div>
        </div>

        
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105">
          
        
        <div className="relative mb-6">
  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
  <img
    src={profileImg}
    alt="Profile picture"
    className="relative mx-auto rounded-full w-28 h-28 border-4 border-white/30 shadow-xl"
  />
</div>
          
          <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Hazel
          </h3>
          <p className="text-gray-400 mb-6 text-lg">Frontend Developer</p>
          
          <div className="text-left space-y-4">
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
              <Globe className="text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-200 font-medium">Based in Germany</p>
                <p className="text-gray-400 text-sm">Remote work available</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
              <FaLanguage className="text-pink-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-200 font-medium">Multilingual</p>
                <p className="text-gray-400 text-sm">German, English, Turkish, Spanish, German Sign Language, ISL</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
              <Code className="text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-200 font-medium">Tech Stack</p>
                <p className="text-gray-400 text-sm">HTML, SCSS, JavaScript, React</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
              <GraduationCap className="text-green-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-200 font-medium">Background</p>
                <p className="text-gray-400 text-sm">Education → Tech transition</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
