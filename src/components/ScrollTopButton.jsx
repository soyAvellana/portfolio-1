import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:shadow-purple-400/40 hover:scale-110 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-5 h-5 text-white" />
      </button>
    )
  );
}

export default ScrollTopButton;
