import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

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
          setStatus('Message sent successfully! ✅');
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus('Failed to send message. ❌ Please try again.');
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f3d] to-[#03001e] text-white px-6 pt-24 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white/5 backdrop-blur-md rounded-xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Contact Me
        </h2>

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
        </form>

        {status && (
          <p className="mt-4 text-center text-sm text-green-400">{status}</p>
        )}
      </div>
    </div>
  );
}

export default Contact;
