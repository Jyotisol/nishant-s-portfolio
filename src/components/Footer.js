import React from 'react';
import Layout from './Layout';
import { Link } from 'react-router-dom'; // If you're using React Router for internal navigation

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark dark:border-light
    font-medium dark:text-light sm:text-base'>
      <Layout className=' py-8 flex items-center justify-between dark:text-light lg:flex-col lg:py-6 text-center'>
        <span className='lg:mb-2'>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        
        <div className='flex items-center lg:py-2'>
          Build With 
          <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
          by&nbsp;
          <Link to="https://portfolio-git-main-jyotisols-projects.vercel.app/" target="_blank" 
          className='underline underline-offset-2'>
          jyoti
          </Link>
        </div>
        
        <a href='/' target="_blank" 
        className='underline underline-offset-2'>say hello</a>
      </Layout>
    </footer>
  );
};

export default Footer;
