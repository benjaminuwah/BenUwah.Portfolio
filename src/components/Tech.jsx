import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";



const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Here are some of the technologies I employ when developing products and projects for my clients.</p> 
        <h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>        
      </motion.div>
      <div className='flex flex-row flex-wrap justify-left gap-10 mt-10'>
        {technologies.map((technology) => (
          <div className='w-20 h-20' key={technology.name}>
            <img src={technology.icon} className="bg-white rounded-full" />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");