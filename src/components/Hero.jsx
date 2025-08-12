import React from 'react'
import { motion } from 'framer-motion'
import profile from '../assets/profile.jpg' // replace with your image

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container grid md:grid-cols-2 gap-8 items-center py-24">
        <div>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I’m <span className="text-brand">Dinesh Poudel</span>
          </motion.h1>

          <motion.p initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.12 }} className="mt-4 text-lg md:text-xl max-w-xl">
            I try to build responsive web apps using <strong>React</strong>, and modern tools. I am currently pursuing advanced studies in backend development and system design, with an emphasis on Java and Spring Boot.
          </motion.p>

          <div className="mt-6 flex gap-4">
            <a href="#projects" className="px-5 py-3 rounded-full bg-brand text-white font-semibold">View My Work</a>
            <a href="#contact" className="px-5 py-3 rounded-full border border-gray-600">Contact Me</a>
          </div>

          {/* <div className="mt-6 flex gap-4 flex-wrap text-sm text-gray-300">
            <span className="px-3 py-1 rounded bg-white/5">React</span>
            <span className="px-3 py-1 rounded bg-white/5">JavaScript</span>
            <span className="px-3 py-1 rounded bg-white/5">Node.js</span>
            <span className="px-3 py-1 rounded bg-white/5">Tailwind</span>
          </div> */}
        </div>

        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.12 }} className="flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10">
            <img src={profile} alt="Dinesh Poudel" className="object-cover w-full h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}