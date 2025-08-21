import React from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaReact, FaDatabase, FaJsSquare, FaJava, FaPython } from 'react-icons/fa'
import { SiC, SiTailwindcss, SiSpringboot } from 'react-icons/si'

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, level: 'Advanced' },
  { name: 'CSS', icon: <FaCss3Alt />, level: 'Advanced' },
  { name: 'JavaScript', icon: <FaJsSquare />, level: 'Intermediate' },
  { name: 'React', icon: <FaReact />, level: 'Intermediate' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 'Intermediate' },
  { name: 'C programming', icon: <SiC />, level: 'Intermediate' },
  { name: 'Java', icon: <FaJava />, level: 'Intermediate' },
  { name: 'Spring Boot', icon: <SiSpringboot />, level: 'Basic' },
  { name: 'Databases', icon: <FaDatabase />, level: 'Basic' },
  // { name: 'Python', icon: <FaPython />, level: 'Basic' }
]

export default function About() {
  return (
    <div className="container py-8 h-full flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 min-h-0 flex flex-col"
      >
        <div className="flex-shrink-0">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 max-w-2xl text-gray-300">
            I am a BCA student from Nepathya College (Tribhuvan University). I love building web applications and learning new technologies. 
            I have worked on front-end UI, small backend APIs, and IoT & robotics experiments as part of college projects.
          </p>
          <h3 className="mt-8 text-2xl font-semibold">Skills & Technologies</h3>
        </div>

        {/* Skills grid with mobile scrolling */}        
        <div className="mt-6 flex-1 min-h-0">
          <div className="h-full overflow-y-auto md:overflow-visible" style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-4">
              {skills.map((s, index) => (
                <motion.div 
                  key={s.name} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-4 bg-site-mid rounded-lg flex items-center gap-4 flex-shrink-0"
                >
                  <div className="text-2xl text-brand">{s.icon}</div>
                  <div>
                    <div className="font-semibold">{s.name}</div>
                    <div className="text-sm text-gray-400">{s.level}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}