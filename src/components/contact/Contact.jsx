import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log(result.text);
        setStatus('success');
        form.current.reset();
        setIsLoading(false);
        // Status nach 5 Sekunden ausblenden
        setTimeout(() => setStatus(''), 5000);
      },
      (error) => {
        console.error(error.text);
        setStatus('error');
        setIsLoading(false);
        // Status nach 5 Sekunden ausblenden
        setTimeout(() => setStatus(''), 5000);
      }
    );
  };

  return (
    <section
      id="contact"
      className="min-h-screen pt-32 pb-20 bg-[#0f0f3d] text-white px-6 flex flex-col items-center lg:justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-4xl w-full text-center mb-16 z-10 relative">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          CONTACT
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto my-4" />
        <p className="text-gray-300 text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
          Let's collaborate on something creative, inspiring, or just fun.<br />
          I'm always open for exciting projects.
        </p>
      </div>

      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md border border-purple-500/10 rounded-2xl p-10 shadow-2xl z-10 space-y-8 relative">
        
        {/* Success/Error Notification */}
        {status && (
          <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg backdrop-blur-md border transition-all duration-500 ${
            status === 'success' 
              ? 'bg-green-500/20 border-green-400/30 text-green-300' 
              : 'bg-red-500/20 border-red-400/30 text-red-300'
          }`}>
            <div className="flex items-center gap-2">
              {status === 'success' ? (
                <>
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Message sent successfully!</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Failed to send. Please try again.</span>
                </>
              )}
            </div>
          </div>
        )}

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 border border-transparent hover:border-purple-500/30"
            />
          </div>
          
          <div className="relative">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 border border-transparent hover:border-purple-500/30"
            />
          </div>
          
          <div className="relative">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 border border-transparent hover:border-purple-500/30 resize-none"
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Sending...</span>
              </div>
            ) : (
              <>
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </>
            )}
          </button>
        </form>

        <div className="text-center space-y-6 pt-4 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hazelhmurcu@live.de"
              className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-purple-500/30"
            >
              <span className="text-lg">📧</span>
              <span>hazelhmurcu@live.de</span>
            </a>
          </div>
          
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/soyAvellana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub className="text-2xl text-white/70 group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/hazel-hamurcu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin className="text-2xl text-white/70 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;