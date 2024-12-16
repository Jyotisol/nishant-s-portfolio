import React from 'react';
import Layout from '../components/Layout';
import profilePic from '../components/assets/WhatsApp Image 2024-12-09 at 19.16.43_457a39fd.jpg';
import HireMe from '../components/HireMe';
import lightbulb from "../images/miscellaneous_icons_1.svg"
import { LinkArrow } from '../components/Icon'; 
import AnimetedText from '../components/AnimetedText';
import TransitionEffect from '../components/TransitionEffect';
import About from './About';

export default function Home() {
  return (
    <>
    <TransitionEffect />
      <main className="flex items-center text-dark w-full  dark:text-light ">
        <Layout className="pt-0 md:pt-16 sm:pt-8 ">
          <div className="flex items-center justufy-between text-dark w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <img src={profilePic} alt="Profile" className="w-[30em] h-[25em] rounded-[6em] mt-[30px] lg:hidden md:inline-block md:w-full " 
                 periority
                 sizes="(max-width:776px) 100vw, 
                 (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center dark:text-light lg:w-full lg:text-center">
              <AnimetedText text="Turning Vision into Digital marketing expert specializing " 
              className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl sm:!text-3xl"/>
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs ">
              Experienced digital marketing expert skilled in SEO, SEM, social media strategy, and data-driven campaigns to boost brand visibility and engagement
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center ">
                <a
                  href="/dummy.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg
                  text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                  
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                  md:p-2 md:px-4 md:text-base" 
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"}/>
                </a>
                <a
                  href="mailto:nishant94chouhan@gmail.com"
                  target="_blank"
                  className=" ml-4 text-lg font-medium capitalize text-dark dark:text-light underline
                  md:text-base" rel="noreferrer"
                >Contact</a>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <img src={lightbulb} alt="Lightbulb" className="w-full h-auto " />
        </div>
      </main>
        <About id="About"/>
    </>
  );
}
