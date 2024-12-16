import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo = () => {
  // Using motion with react-router-dom's Link component
  const MotionLink = motion(Link);

  return (
    <div className='flex justify-center items-center'>
      <MotionLink to='/'
        className='w-16 h-16 bg-dark text-light flex items-center justify-center
        rounded-full text-2xl font-bold border border-light dark:border-light sm:hidden ' //sm:w-13 m:h-13 sm:mt-2
        whileHover={{
          backgroundColor: [
            "#121212", 
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)", 
            "rgba(252,176,69,1)", 
            "rgba(131,58,180,1)", 
            "#121212"
          ],
          transition: { duration: 1, repeat: Infinity }
        }}
      >
        NS
      </MotionLink>
    </div>
  );
}

export default Logo;
