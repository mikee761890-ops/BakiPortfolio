"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "../assets/about.jpeg";
import { BiLogoInstagram, BiLogoTelegram } from "react-icons/bi";
import { GoStarFill } from "react-icons/go";

export default function About() {
  return (
    <div className="h-[79vh] w-full bg-gradient-to-r from-purple-800 via-violet-700 to-pink-600 text-white flex items-center justify-center px-6">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            About Me
          </h1>

          <motion.p
            initial={{ translateX: -1100 }}
            animate={{ translateX: 0, transition: { duration: 1 } }}
            className="text-gray-300 text-lg leading-relaxed mb-8"
          >
            Hello! My name is Baki, and I am a passionate Frontend Developer
            focused on building modern, clean, and responsive web applications.
            I love working with technologies like React, Next.js, and Tailwind CSS
            to deliver high-quality digital experiences.
          </motion.p>

          <div className="mt-6 text-sm opacity-80">
            Creating beautiful digital experiences is what I love. ✨
          </div>
        </motion.div>

        <motion.div
          initial={{translateX:350 }}
          animate={{ translateX:0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src={aboutImg}
            alt="About section image"
            width={300}
            height={300}
            className="rounded-2xl object-cover"
          />

          <div className="flex text-3xl p-2 gap-4 justify-center">
            <BiLogoTelegram className="text-blue-400"/>
            <BiLogoInstagram className=" rounded-md bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 "/>  
            <GoStarFill className="text-amber-300"/>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
