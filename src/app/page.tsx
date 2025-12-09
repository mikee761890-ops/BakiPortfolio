"use client"

import { motion } from "motion/react";


export default function Home() {
  return (
    <div  className=" h-[80vh] flex flex-col  justify-center gap-8 items-center text-center">
      <motion.h1
           initial={{translateY:-500}}
animate={{translateY:0, transition:{duration:1}}}
       className="text-5xl font-bold mb-4">
        Welcome to My Portfolio
      </motion.h1>

      <motion.p
      initial={{translateY:100}}
animate={{translateY:0, transition:{duration:1}}} className="text-gray-300  text-lg max-w-2xl">
        I'm a Frontend Developer specializing in modern, beautiful, and responsive web applications.
        Explore my projects and skills below.
      </motion.p>


      <motion.p
initial={{translateX:-1100}}
animate={{translateX:0, transition:{duration:1}}}

       className="text-gray-300 text-lg max-w-3xl leading-relaxed mb-8">
        Hello! My name is Baki, and I am a passionate Frontend Developer focused on
        building modern, clean, and responsive web applications. I love working with
        technologies like React, Next.js, and Tailwind CSS to deliver high-quality
        digital experiences.
      </motion.p>

      <motion.a
        initial={{ translateY:500 }}
        animate={{ translateY:0, transition: { duration: 1 } }}
        className="px-6 py-3   animate-pulse hover:cursor-pointer rounded-md text-lg font-medium bg-white text-black 
          hover:bg-gray-200 transition inline-block"
      >
        Download CV
      </motion.a>
    </div>
  );
}
