import React from 'react'
import { motion } from 'framer-motion'
// ✅ PROPER WAY: Import the image
import profileImage from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container grid md:grid-cols-2 gap-8 items-center py-24">
        <div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.6 }} 
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Hi, I'm <span className="text-brand">Dinesh Poudel</span>
          </motion.h1>

          <motion.p 
            initial={{ y: 12, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2, duration: 0.6 }} 
            className="mt-4 text-lg md:text-xl max-w-xl text-gray-300"
          >
            I build responsive web applications using <strong className="text-white">React</strong> and modern tools. 
            Currently pursuing studies in backend development and system design, with emphasis on Java and Spring Boot.
          </motion.p>

          <motion.div 
            initial={{ y: 12, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 flex gap-4"
          >
            <a 
              href="#projects" 
              className="px-5 py-3 rounded-full bg-brand text-white font-semibold hover:bg-brand-dark transition"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-5 py-3 rounded-full border border-gray-600 hover:border-brand transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ delay: 0.3, duration: 0.6 }} 
          className="flex justify-center"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10">
            <img 
              src={profileImage} 
              alt="Dinesh Poudel" 
              className="object-cover w-full h-full"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9maWxlIEltYWdlPC90ZXh0Pjwvc3ZnPg=='
                console.log('Profile image failed to load, using placeholder')
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}