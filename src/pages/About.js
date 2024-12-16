import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import profilePic from "../images/nishant_profile.jpeg"
import Education from '../components/Education';
import Experience from '../components/Experience'
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import AnimetedText from '../components/AnimetedText';
import TransitionEffect from '../components/TransitionEffect';
import Skills from '../components/Skills';
import Training from '../components/Training';

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
    <TransitionEffect />
      <main id="About" className='flex w-full flex-col items-center justify-center dark:text-light h-max '>
        <Layout className='pt-16'>
          <AnimetedText text='Passion ' className='mb-16 lg:!text-7xl sm!:6xl xs:!text:4xl sm:mb-8' />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start 
            xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
              <p className='font-medium'>
              I am Nishant Singh Chouhan, a passionate digital marketing specialist dedicated to leveraging online platforms for impactful business growth. With a proven track record in Google Ads, Meta Ads, SEO, content creation, social media marketing, and cutting-edge WhatsApp marketing, I excel in blending creativity with data-driven strategies to deliver exceptional results.
              </p><br></br>
              <p className='font-medium'>
              My expertise lies in crafting targeted campaigns that not only capture attention but also drive conversions and build lasting customer relationships. From optimizing websites for search engines to developing engaging content and staying ahead of digital advertising trends, I’m focused on creating measurable success.
              </p><br></br>
              <p className='font-medium'>
              Fueled by a commitment to innovation and excellence, I thrive in fast-paced environments where every campaign is an opportunity to deliver meaningful impact. Let's connect to explore how I can elevate your brand's digital presence and achieve new heights in this ever-evolving landscape.
              </p>
              </div>


            <div className='col-span-3 relative h-max rounded-2xl 
            border-2 border-solid border-dark bg-light p-8 dark:bg-dark 
            dark:border-light xl:col-span-4 md-order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2em] bg-dark dark:bg-light '></div>
              <img
                src={profilePic}
                alt='Profile'
                className='w-full h-auto rounded-2xl '
                periority
                 sizes="(max-width:776px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              

            </div>
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl-items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumber value={50} />+
                </span>
                <h2 className='dark:text-light/75 text-dark/75 text-xl font-medium capitalize xl:text-center md:text-lg sm:text-base xs:text-sm '>Satisfied Clients</h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumber value={40} />+
                </span>
                <h2 className='dark:text-light/75 text-dark/75 text-xl font-medium capitalize xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold capitalize md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumber value={4} />+
                </span>
                <h1 className='dark:text-light/75 text-dark/75 text-xl font-medium capitalize xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of Experience</h1>
              </div>
            </div>
          </div>
          <Education />
          <Experience />
          <Training />
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default About;
