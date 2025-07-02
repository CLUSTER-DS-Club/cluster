import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <> 
      <style>
        {`
          @keyframes pulse-white {
            0% , 100% {
              box-shadow: 0 0 0 1px white, 0 0 4px white, 0 0 8px white;
            }
            50% {
              box-shadow: 0 0 0 2px white, 0 0 10px white, 0 0 16px white;
            }
          }


          .animate-white-glow {
            animation: pulse-white 2s ease-in-out infinite;
          }

          .gradient-bg {
            background: linear-gradient(to right, #00c6ff, #0072ff);
          }

          .transition-fade-scale {
            transition: opacity 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease;
          }

          .hover-lift-glow:hover {
            transform: scale(1.1) translateY(-2px);
            box-shadow: 0 0 15px white, 0 0 25px white;
          }
        `}
      </style>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-10 right-10 w-12 h-12 rounded-full text-white 
          flex items-center justify-center gradient-bg animate-white-glow
          transition-fade-scale hover-lift-glow transform ${
            isVisible
              ? 'opacity-100 scale-100 pointer-events-auto'
              : 'opacity-0 scale-75 pointer-events-none'
          }`}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </>
  );
};

export default ScrollToTop;
