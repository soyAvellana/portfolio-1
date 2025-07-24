import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('Thanks for the message! ✅');
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus('Failed to send message. ❌ Please try again.');
        }
      );
  };

  return (
    <section
  id="contact"
  className="min-h-[120vh] py-32 bg-[#0f0f3d] text-white px-6 flex flex-col items-center justify-center relative overflow-hidden"
>
  <div className="max-w-4xl w-full text-center mb-16 z-10 relative">
    <h2 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
      CONTACT
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto my-4" />
    <p className="text-gray-300 text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
      Let’s collaborate on something creative, inspiring, or just fun.<br />
      I'm always open for exciting projects.
    </p>
  </div>

  <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md border border-purple-500/10 rounded-2xl p-10 shadow-2xl z-10 space-y-8">
    {/* FORM */}
    <form ref={form} onSubmit={sendEmail} className="space-y-4">
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="w-full p-3 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="w-full p-3 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        required
        className="w-full p-3 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-md hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
      >
        Send Message
      </button>
      {status && (
        <p className="text-center text-sm text-green-400 mt-2">{status}</p>
      )}
    </form>

    {/* EMAIL + SOCIALS */}
    <div className="text-center space-y-4">
      <a
        href="mailto:hazelhmurcu@live.de"
        className="inline-block bg-white/10 text-white px-6 py-3 rounded-md hover:bg-white/20 transition-all duration-300"
      >
        📧 hazelhmurcu@live.de
      </a>
      <div className="flex justify-center gap-6 text-2xl text-white/70 mt-2">
        <a
          href="https://github.com/soyAvellana"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/hazel-hamurcu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  </div>
</section>

  );
}

export default Contact;
