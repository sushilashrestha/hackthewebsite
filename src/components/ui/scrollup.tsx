import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 100px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      <button
        onClick={scrollToTop}
        className={`
          fixed
          bottom-8
          left-8
          p-3
          bg-secondary
          hover:scale-105 
          hover:bg-primary 
          text-white
          rounded-full
          shadow-lg
          transition-colors
          focus:outline-none
          focus:ring-2
          focus:ring-blue-400
          ${isVisible ? 'block' : 'hidden'}
        `}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTopButton;