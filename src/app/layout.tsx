"use client"
import "./globals.css";
import Link from "next/link";
import { motion } from "motion/react";




export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-white">

         <nav className="w-full h-[74px] bg-gradient-to-r from-purple-600 via-pink-500 to-red-500
 py-4 px-6 flex items-center justify-between relative">
      
      <div className="relative flex items-center justify-center  w-12 h-12">
        <h1 className=" animate-pulse text-xl font-bold text-white  z-10"><Link href="/">Baki</Link></h1>

        <span
          className="absolute w-2 h-2 -mt-10 bg-red-500 rounded-full"
          
        />
        <span
          className="absolute w-2 mt-14 h-2 bg-yellow-500 rounded-full"
          
        />
        <span
          className="absolute w-2 h-2 -left-3 top-5 bg-blue-500 rounded-full"
        
        />
        <span
          className="absolute left-13 top-5 w-2 h-2 bg-green-500 rounded-full"
          
        />
      </div>

      <ul className="flex gap-6 text-lg text-white">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Me</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

    </nav>

        <main className=" flex min-h-[79vh] items-center justify-center bg-gradient-to-r from-purple-800 via-violet-700 to-pink-600
  px-6 py-10">
          {children}
        </main>

        <footer className="bg-gradient-to-r h-[49px] from-blue-600 via-indigo-600 to-purple-700
 py-4 text-center">
          © {new Date().getFullYear()} Baki Portfolio. All rights reserved.
        </footer>

      </body>
    </html>
  );
}
