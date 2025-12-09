"use client"

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">

        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white/10 w-[250px] backdrop-blur-lg p-4 rounded-2xl shadow-lg border border-white/20 hover:scale-105 hover:shadow-xl transition duration-300"
        >
          <div className="w-full h-40 relative rounded-xl overflow-hidden">
            <Image src="/rasm1.jpg" alt="Project 1" fill className="object-cover" />
          </div>
          <h1 className="text-xl mt-3 font-semibold text-white">Project Name</h1>
          <ul className="mt-2 text-gray-200 space-y-1 text-sm">
            <li>• ReactJS</li>
            <li>• JavaScript</li>
            <li>• TailwindCSS</li>
            <li>• API</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl shadow-lg border border-white/20 hover:scale-105 hover:shadow-xl transition duration-300"
        >
          <div className="w-full h-40 relative rounded-xl overflow-hidden">
            <Image src="/rasm2.jpg" alt="Project 2" fill className="object-cover" />
          </div>
          <h1 className="text-xl mt-3 font-semibold text-white">Project Name</h1>
          <ul className="mt-2 text-gray-200 space-y-1 text-sm">
            <li>• Next.js</li>
            <li>• TypeScript</li>
            <li>• TailwindCSS</li>
            <li>• EmailJS</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl shadow-lg border border-white/20 hover:scale-105 hover:shadow-xl transition duration-300"
        >
          <div className="w-full h-40 relative rounded-xl overflow-hidden">
            <Image src="/rasm3.jpg" alt="Project 3" fill className="object-cover" />
          </div>
          <h1 className="text-xl mt-3 font-semibold text-white">Project Name</h1>
          <ul className="mt-2 text-gray-200 space-y-1 text-sm">
            <li>• React</li>
            <li>• QR Library</li>
            <li>• TailwindCSS</li>
            <li>• TypeScript</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl shadow-lg border border-white/20 hover:scale-105 hover:shadow-xl transition duration-300"
        >
          <div className="w-full h-40 relative rounded-xl overflow-hidden">
            <Image src="/rasm4.jpg" alt="Project 4" fill className="object-cover" />
          </div>
          <h1 className="text-xl mt-3 font-semibold text-white">Project Name</h1>
          <ul className="mt-2 text-gray-200 space-y-1 text-sm">
            <li>• React</li>
            <li>• API</li>
            <li>• TailwindCSS</li>
            <li>• JavaScript</li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
};

export default Page;
