import React from 'react';
import CircularText from "../images/ring.png";

const HireMe = () => {
  return (
    <div 
      className='fixed left-4 bottom-4 
        flex items-center justify-center overflow-hidden
        md:right-9 md:left-auto md:top-0 md:bottom-auto md:absolute
        z-50 sm:mx-[-20px] sm:right-0// Ensure this is high enough
      '
    >
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24 ">
        <img 
          src={CircularText} 
          alt="text" 
          className={"fill-dark dark:fill-light animate-spin-slow sm:hidden" }
        />
        
        <a
          href="mailto:Nishant94chouhan@gmail.com"
          className='flex items-center justify-center absolute 
            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark
            text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full 
            font-semibold hover:bg-light hover:text-dark

            dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
            
            md:w-11 md:h-11 md:text-[10px]'
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default HireMe;
