import React from 'react';
import { motion } from 'framer-motion';

const ScrollDownButton: React.FC = () => {
  const scrollBy = () => {
    const targetScroll = document.documentElement.scrollHeight * 0.2;
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  };

  // SVG for the down arrow
  const ArrowDownSVG = () => (
    <svg width="40" height="40" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          fill="currentColor"
          d="M21.85,7.16c0,0.309-0.118,0.617-0.353,0.853l-5.681,5.68c-0.471,0.471-1.233,0.471-1.704,0l-5.681-5.68
          c-0.47-0.471-0.47-1.233,0-1.704c0.471-0.47,1.234-0.47,1.704,0l4.828,4.828l4.828-4.828c0.472-0.47,1.234-0.47,1.704,0
          C21.731,6.543,21.85,6.852,21.85,7.16z"
        />
      </g>
    </svg>
  );

  return (
    <motion.div
      className="cursor-pointer w-8 h-20 relative"
      onClick={scrollBy}
    >
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="absolute left-0 w-full text-secondary"
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0, 1],
            y: [0, 20, 40]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.25,
            ease: "easeInOut"
          }}
        >
          <ArrowDownSVG />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ScrollDownButton;
