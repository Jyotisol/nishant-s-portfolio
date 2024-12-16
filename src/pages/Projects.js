import React from 'react';
import Layout from './components/Layout'; // Adjust path as necessary
import Animated from './components/Animated'; // Adjust path as necessary
import { Link } from 'react-router-dom'; // Make sure to install react-router-dom
import Image from './components/Image'; // Use a suitable image component or <img> tag
import { GithubIcon } from './components/Icon'; // Adjust path as necessary

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article>
      <Link to={link} target="_blank">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div>
        <span>{type}</span>
        <Link to={link} target="_blank">
          <h2>{title}</h2>
        </Link>
        <p>{summary}</p>
      </div>
      <Link to={github} target="_blank"><GithubIcon /></Link>
      <Link to={link} target="_blank">Visit Project</Link>
    </article>
  );
};

const Projects = () => {
  return (
    <div>
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <Animated text="Imagination trumps knowledge" />

          <div className='grid grid-cols-12 gap-24'>
            <div className='col-span-12'>
              <FeaturedProject 
                title="Your Project Title"
                img="path/to/your/image.jpg" // Provide the image path
                summary="Your project summary"
                link="http://example.com" // Provide the project link
                type="Project Type"
                github="http://github.com/example" // Provide the GitHub link
              />
            </div>
            <div className='col-span-6'>
              Project -1
            </div>
            <div className='col-span-6'>
              Project -2
            </div>
            <div className='col-span-12'>
              Featured Project
            </div>
            <div className='col-span-6'>
              Project -3
            </div>
            <div className='col-span-6'>
              Project -4
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default Projects;
