import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#0a0a23] text-white py-12 px-6 border-t border-white/10">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center space-y-6 text-center">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Hazel Hamurcu — All rights reserved.
        </p>

        <div className="flex space-x-6 text-xl text-white/50">
          <a
            href="https://github.com/soyAvellana"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          
          <a
            href="https://www.linkedin.com/in/hazel-hamurcu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
