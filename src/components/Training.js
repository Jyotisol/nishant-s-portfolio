import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image_1 from "../components/assets/1721151145605.jpeg";
import Image_2 from "../components/assets/1721151152292.jpeg";
import Image_3 from "../components/assets/1722669024431.jpeg";
import Image_4 from "../components/assets/1722669024938.jpeg";

const Training = () => {
  // Training description
  const description = ` 
    I have conducted comprehensive digital marketing training sessions at Medicaps College, 
    Swami Vivekanand, and NIEM Indore. My training focused on key areas like Search Engine Optimization (SEO), 
    Meta Ads, and Facebook Ads, providing participants with practical skills and strategies to excel in the 
    dynamic field of digital marketing. Through these sessions, I emphasized hands-on learning, enabling attendees 
    to apply concepts effectively to real-world scenarios.
  `;

  const projects = [
    {
      id: 1,
      img: Image_1,
    },
    {
      id: 2,
      img: Image_2,
    },
    {
      id: 3,
      img: Image_3,
    },
    {
      id: 4,
      img: Image_4,
    },
  ];

  const ProjectCard = ({ id, img }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        className="bg-[#13162d] rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.img
          src={img}
          alt={`Training project ${id}`}
          className="w-full h-[200px] object-cover "
          initial={{ scale: 0.9 }}
          animate={{ scale: isInView ? 1 : 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </motion.div>
    );
  };

  return (
    <div className="py-20" id="training">
      <h1 className="font-bold text-4xl md:text-6xl mb-12 w-full text-center xs:text-4xl md:mb-16">
        Experience as a Trainer
      </h1>
      <p className="font-semibold text-center text-gray-700 px-4 md:px-8 lg:px-32 mb-10 dark:text-light/75">
        {description}
      </p>
      <div className="flex overflow-x-auto px-6 mt-10 sm:grid sm:grid-cols-1 sm:grid-cols-2 gap-6 py-[-4px] md:px-5 sm:ml-[-24px] lg:px-32 sm:w-[115%] smx:w-[50rem] ">
        {projects.map(({ id, img }) => (
          <ProjectCard key={id} id={id} img={img} />
        ))}
      </div>
    </div>
  );
};

export default Training;
