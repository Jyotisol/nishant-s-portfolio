import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Reusable Skill component
const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-2 px-6 shadow-dark cursor-pointer absolute custom:sm:p-3"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x, y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

// Main Skills component
const Skills = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const updatePositions = () => {
      if (window.innerWidth > 569) {
        // Mobile-friendly positions
        setPositions([
          {name :"SEO", x:"-20vw", y:"-1vw" },
          {name :"PPC", x:"-1vw", y:"-10.5vw" },
        {name :"Meta Ads", x:"19vw", y:"-1vw" },
        {name :"Google ADS", x:"0vw", y:"10vw" },

        {name :"Search Engine Marketing", x:"25vw", y:"10.5vw" },
       {name:"Content Writing", x:"-24vw", y:"-14vw" },
        {name :"Performance Marketing", x:"25vw", y:"-10vw" },
        {name :"Whatsapp Marketing", x:"2vw", y:"20vw" },
        {name :"Social Media Marketing", x:"-27vw", y:"10vw" },
        ]);
      } else {
        // Desktop positions
        setPositions([
          { name: "SEO", x: "-30vw", y: "-1vw" },
          { name: "Google ADS ", x: "1vw", y: "-28vw" },
          { name: " PPC ", x: "34vw", y: "-1vw" },
          { name: "Meta Ads", x: "0vw", y: "23vw" },
          { name: "Social Media Marketing", x: "-1vw", y: "55vw" },
          { name: "Content Writing", x: "1.5vw", y: "-49vw" },
          { name: "Performance Marketing", x: "3vw", y: "-66vw" },
          { name: "Search Engine Marketing ", x: "-1vw", y: "70vw" },
          { name: "Whatsapp Marketing", x: "-1vw", y: "39vw" },
        ]);
      }
    };

    updatePositions(); // Set initial positions
    window.addEventListener("resize", updatePositions); // Update positions on resize

    return () => window.removeEventListener("resize", updatePositions); // Cleanup listener
  }, []);

  return (
    <>
      <h2 className="font-bold text-6xl mt-12 mb-[2em] md:mt-64 w-full text-center xs:text-4xl xs:mt-[-16px] md:mt-[-16px] ">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight md:bg-circularDark lg:bg-circularLight sm:py-3 xs:mt-3">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer sm:ml-4 sm:w-30 sm:p-3"
          whileHover={{ scale: 1.2 }}
        >
          Digital Marketer
        </motion.div>

        {/* Render Skill components dynamically */}
        {positions.map((pos, index) => (
          <Skill key={index} name={pos.name} x={pos.x} y={pos.y} />
        ))}
      </div>
    </>
  );
};

export default Skills;

