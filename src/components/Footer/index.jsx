import React from 'react';
import { FaGavel } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

function Footer() {
  return (
    <footer className="bg-[#0a0a23] text-white py-8 px-6 border-t border-white/10">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center space-y-4 text-center">

        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Hazel Hamurcu — All rights reserved.
        </p>

        <Link
          to="/legal" 
          className="flex items-center space-x-2 text-sm text-white/50 hover:text-white transition"
        >
          <FaGavel className="text-xs" />
          <span>Impressum & Datenschutz</span>
        </Link>

      </div>
    </footer>
  );
}

export default Footer;
