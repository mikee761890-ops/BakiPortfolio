
"use client"

import React from 'react'
import Marquee from "react-fast-marquee";
import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaBootstrap } from "react-icons/fa";
import { SiFirebase, SiRedux, SiNextdotjs, SiJavascript, SiTypescript } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="fixed bottom-10 w-full z-50 ">
      <div className='grid px-6  grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 gap-4 mb-20'>
        <motion.div
        initial={{translateX:1500}}
        animate={{translateX:0,transition:{duration:2}}}
         className='flex items-center p-3 bg-white/10 rounded-xl backdrop-blur-md shadow-md'>
          <FaHtml5 className="text-orange-500 text-4xl hover:scale-110 transition-transform" />
          <p className='ml-3 w-100 text-end pr-2 rounded-2xl h-4 text-xs bg-green-500'>100%</p>
        </motion.div>
        <motion.div 
         initial={{translateY:1500}}
        animate={{translateY:0,transition:{duration:2}}}
         className='flex items-center p-3 bg-white/10 rounded-xl backdrop-blur-md shadow-md'>
          <FaCss3Alt className="text-blue-500 text-4xl hover:scale-110 transition-transform" />
          <p className='ml-3 w-70 text-end pr-2 rounded-2xl h-4 text-xs bg-green-500'>90%</p>
        </motion.div>
        <motion.div
         initial={{translateX:-1500}}
        animate={{translateX:0,transition:{duration:2}}}
         className='flex items-center p-3 bg-white/10 rounded-xl backdrop-blur-md shadow-md'>
          <SiJavascript className="text-yellow-400 text-4xl hover:scale-110 transition-transform" />
          <p className='ml-3 w-60 text-end pr-2 rounded-2xl h-4 text-xs bg-green-500'>85%</p>
        </motion.div>
        <motion.div 
         initial={{translateY:1500}}
        animate={{translateY:0,transition:{duration:2}}}
         className='flex items-center p-3 bg-white/10 rounded-xl backdrop-blur-md shadow-md'>
          <FaSass className="text-pink-500 text-4xl hover:scale-110 transition-transform" />
          <p className='ml-3 w-70 text-end pr-2 rounded-2xl h-4 text-xs bg-green-500'>90%</p>
        </motion.div>
        <motion.div 
         initial={{translateX:1500}}
        animate={{translateX:0,transition:{duration:2}}}
        className='flex items-center p-3 bg-white/10 rounded-xl backdrop-blur-md shadow-md'>
          <FaBootstrap className="text-purple-400 text-4xl hover:scale-110 transition-transform" />
          <p className='ml-3 w-52 text-end pr-2 rounded-2xl h-4 text-xs bg-green-500'>80%</p>
        </motion.div>
        <motion.div
         initial={{translateY:1500}}
        animate={{translateY:0,transition:{duration:2}}} className='flex items-center p-3 bg-white/10 rounded-xl backdrop-blur-md shadow-md'>
          <FaReact className="text-cyan-400 text-4xl hover:scale-110 transition-transform" />
          <p className='ml-3 w-60 text-end pr-2 rounded-2xl h-4 text-xs bg-green-500'>85%</p>
        </motion.div>
        <motion.div
         initial={{translateX:1500}}
        animate={{translateX:0,transition:{duration:2}}}
        className='flex items-center p-3 bg-white/10 rounded-xl backdrop-blur-md shadow-md'>
          <SiFirebase className="text-yellow-500 text-4xl hover:scale-110 transition-transform" />
          <p className='ml-3 w-52 text-end pr-2 rounded-2xl h-4 text-xs bg-green-500'>80%</p>
        </motion.div>
          <motion.div
           initial={{translateY:-1500}}
        animate={{translateY:0,transition:{duration:2}}}
          className='flex items-center p-3 bg-white/10 rounded-xl backdrop-blur-md shadow-md'>
          <SiRedux className="text-purple-500 text-4xl hover:scale-110 transition-transform" />
          <p className='ml-3 w-40 text-end pr-2 rounded-2xl h-4 text-xs bg-green-500'>70%</p>
        </motion.div>
        <motion.div 
         initial={{translateX:-1500}}
        animate={{translateX:0,transition:{duration:2}}}
        className='flex items-center p-3 bg-white/10 rounded-xl backdrop-blur-md shadow-md'>
          <SiTypescript className="text-blue-600 text-4xl hover:scale-110 transition-transform" />
          <p className='ml-3 w-100 text-end pr-2 rounded-2xl h-4 text-xs bg-green-500'>100%</p>
        </motion.div>
        <motion.div
         initial={{translateY:-1500}}
        animate={{translateY:0,transition:{duration:2}}}
        className='flex items-center p-3 bg-white/10 rounded-xl backdrop-blur-md shadow-md'>
          <MdEmail className="text-red-500 text-4xl hover:scale-110 transition-transform" />
          <p className='ml-3 w-52 text-end pr-2 rounded-2xl h-4 text-xs bg-green-500'>80%</p>
        </motion.div>
      
        <motion.div 
         initial={{translateX:-1500}}
        animate={{translateX:0,transition:{duration:2}}}
        className='flex items-center p-3 bg-white/10 rounded-xl backdrop-blur-md shadow-md'>
          <SiNextdotjs className="text-white text-4xl hover:scale-110 transition-transform" />
          <p className='ml-3 w-60 text-end pr-2 rounded-2xl h-4 text-xs bg-green-500'>85%</p>
        </motion.div>
        <motion.div 
         initial={{translateY:-1500}}
        animate={{translateY:0,transition:{duration:2}}}
        className='flex items-center p-3 bg-white/10 rounded-xl backdrop-blur-md shadow-md'>
          <RiTailwindCssFill className="text-blue-500 text-4xl hover:scale-110 transition-transform" />
          <p className='ml-3 w-60 text-end pr-2 rounded-2xl h-4 text-xs bg-green-500'>85%</p>
        </motion.div>
      </div>

      <div className='flex mb-2'>
        <Marquee speed={65} gradient={true} gradientWidth={20} pauseOnHover={true}>
          <div className="flex  items-center gap-[68px] text-5xl p-2 text-white">
            <FaHtml5 className="text-orange-500 hover:scale-110 transition-transform" />
            <FaCss3Alt className="text-blue-500 hover:scale-110 transition-transform" />
            <SiJavascript className="text-yellow-400 hover:scale-110 transition-transform" />
            <FaSass className="text-pink-500 hover:scale-110 transition-transform" />
            <FaBootstrap className="text-purple-600 hover:scale-110 transition-transform" />
            <FaReact className="text-cyan-400 hover:scale-110 transition-transform" />
            <SiFirebase className="text-yellow-500 hover:scale-110 transition-transform" />
            <SiTypescript className="text-blue-600 hover:scale-110 transition-transform" />
            <MdEmail className="text-red-500 hover:scale-110 transition-transform" />
            <SiRedux className="text-purple-500 hover:scale-110 transition-transform" />
            <SiNextdotjs className="text-white hover:scale-110 transition-transform" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
