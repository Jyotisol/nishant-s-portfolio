import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col justify-between md:w-[80%]'>
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {position}&nbsp;
          <a 
          href={companyLink} 
          target='_blank' 
          rel='noopener noreferrer' 
          className='text-primary dark:text-primaryDark capitalize'>
            @{company}
          </a>
        </h3>
        <span className='capitalize dark:text-light/75 font-medium  text-dark/75 xs:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium w-full md:text-sm'>
          {work}
        </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start']
  });

  return (
    <div className='my-20' id="Experience">
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>

      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=' absolute left-9 top-0 
          w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[30px]'
        />

        <ul className='w-full flex flex-col items-start justify-between md:w-[90%] ml-4  xs:ml-5'>
          <Details
            position='Team Lead'
            company='10XDigitals'
            companyLink=''
            time='Oct 2023 - Present'
            address='Indore, India'
            work=''
          />
           <Details
            position='Search Engine Optimization Specialist'
            company='10XDigitals'
            companyLink=''
            time='Oct 2021 - Oct 2023'
            address='Indore, India'
            work=''
          />
          
           <Details
            position='Digital Marketing Intern'
            company='10XDigitals'
            companyLink=''
            time='May 2021 - Oct 2021'
            address='Indore, India'
            work=''
          />
          
          
        </ul>
      </div>
    </div>
  );
};

export default Experience;
