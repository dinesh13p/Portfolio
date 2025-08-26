import React, { useState } from 'react'
import { motion } from 'framer-motion'

const MOCK = [
  {
    id: 'proj-1',
    title: 'Portfolio v1',
    desc: 'Personal portfolio built with React.js and Tailwind CSS with responsive design.',
    tech: ['React', 'Tailwind'],
    github: 'https://github.com/dinesh13p/Portfolio',
    live: 'https://dinesh2004.com.np'
  },
  {
    id: 'proj-2',
    title: 'Portfolio Website',
    desc: 'Portfolio website for Sandhya Paudel, built with React.js and Tailwind CSS with responsive design.',
    tech: ['React', 'Tailwind'],
    github: 'https://github.com/paudelsandhya/Portfolio',
    live: 'https://paudelsandhya.github.io/Portfolio/'
  },
  {
    id: 'proj-3',
    title: 'Portfolio Website',
    desc: 'Portfolio website for Sunil Bhattarai, built with React.js and Tailwind CSS with responsive design. Helped to build and host & deploy the website.',
    tech: ['React', 'Tailwind'],
    github: 'https://github.com/Sunil5566/Portfolio',
    live: 'https://sunil5566.github.io/Portfolio/'
  },
  {
    id: 'proj-4',
    title: 'Portfolio Website',
    desc: 'Portfolio website for Bishal Lamichhane, built with React.js and Tailwind CSS with responsive design. Helped to build and host & deploy the website.',
    tech: ['React', 'Tailwind'],
    github: 'https://github.com/bixal127/Portfolio',
    live: 'https://bixal127.github.io/Portfolio/'
  },
  {
    id: 'proj-5',
    title: 'Robo Car Controller',
    desc: 'Remote controlled car via Bluetooth and wifi with telemetry data',
    tech: ['IoT'],
    github: null,
    live: null
  },
  {
    id: 'proj-6',
    title: 'Smart Dustbin',
    desc: 'Project for IoT and Robotics phase I training',
    tech: ['IoT'],
    github: null,
    live: null
  },
  {
    id: 'proj-7',
    title: '4th semester project',
    desc: 'Project for 4th semester',
    tech: ['Java', 'Spring Boot'],
    github: null,
    live: null
  }
]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const tags = ['All', 'React', 'IoT', 'Java']

  const filtered = MOCK.filter((p) => 
    filter === 'All' || (p.tech && p.tech.some(tech => tech.includes(filter)))
  )

  return (
    <div className="container py-8 h-full flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 min-h-0 flex flex-col"
      >
        <motion.div 
          className="flex-shrink-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.h2 
            className="text-3xl font-bold"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Projects
          </motion.h2>
          <p>Projects I've worked on</p>
          <motion.div 
            className="mt-4 flex gap-2 items-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {tags.map((t, index) => (
              <motion.button 
                key={t} 
                onClick={() => setFilter(t)} 
                className={`px-4 py-2 rounded-full transition-all ${
                  filter === t 
                    ? 'bg-brand text-white shadow-lg' 
                    : 'bg-white/5 hover:bg-white/10'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: index * 0.1 + 0.4, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 150
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <div className="mt-6 flex-1 min-h-0">
          <div className="h-full overflow-y-auto" style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}>
            <div className="grid sm:grid-cols-2 gap-6 pb-4">
              {filtered.map((p, index) => (
                <motion.article 
                  key={p.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: index * 0.15 + 0.5, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="project-card p-6 rounded-2xl shadow-sm flex-shrink-0 relative overflow-hidden group"
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-brand-dark"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  <motion.h3 
                    className="font-semibold text-xl text-brand"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {p.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="mt-3 text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.7 }}
                  >
                    {p.desc}
                  </motion.p>
                  
                  <motion.div 
                    className="mt-4 flex items-center gap-2 flex-wrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 + 0.8 }}
                  >
                    {p.tech && p.tech.map((t, techIndex) => (
                      <motion.span 
                        key={t} 
                        className="text-sm bg-white/10 px-3 py-1 rounded-full border border-white/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.15 + 0.8 + techIndex * 0.1 }}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 60, 60, 0.1)' }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div 
                    className="mt-6 flex gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 + 0.9 }}
                  >
                    {p.live ? (
                      <motion.a 
                        href={p.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm px-4 py-2 rounded-full btn-secondary font-medium"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo
                      </motion.a>
                    ) : (
                      <span className="text-sm px-4 py-2 rounded-full border border-gray-600 opacity-50 cursor-not-allowed font-medium">
                        No Demo
                      </span>
                    )}
                    
                    {p.github ? (
                      <motion.a 
                        href={p.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm px-4 py-2 rounded-full btn-primary text-white font-medium"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Source Code
                      </motion.a>
                    ) : (
                      <span className="text-sm px-4 py-2 rounded-full bg-gray-600 text-white opacity-50 cursor-not-allowed font-medium">
                        Private
                      </span>
                    )}
                  </motion.div>
                </motion.article>
              ))}

              {filtered.length === 0 && (
                <motion.p 
                  className="text-gray-400 col-span-2 text-center py-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  No projects found for this filter.
                </motion.p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}