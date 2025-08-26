import React from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaReact, FaDatabase, FaJsSquare, FaJava, FaPython, FaGit, FaCloudflare } from 'react-icons/fa'
import { SiC, SiTailwindcss, SiSpringboot, SiBootstrap, SiRedux, SiGithub } from 'react-icons/si'

const skills = [
  { 
    name: 'HTML', 
    icon: <FaHtml5 />, 
    color: 'from-orange-500 to-orange-600',
    borderColor: 'border-orange-500/30',
    iconColor: 'text-orange-500'
  },
  { 
    name: 'CSS', 
    icon: <FaCss3Alt />, 
    color: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-500'
  },
  { 
    name: 'Bootstrap', 
    icon: <SiBootstrap />, 
    color: 'from-purple-500 to-purple-600',
    borderColor: 'border-purple-500/30',
    iconColor: 'text-purple-500'
  },
  { 
    name: 'JavaScript', 
    icon: <FaJsSquare />, 
    color: 'from-yellow-500 to-yellow-600',
    borderColor: 'border-yellow-500/30',
    iconColor: 'text-yellow-500'
  },
  { 
    name: 'React.js', 
    icon: <FaReact />, 
    color: 'from-cyan-400 to-cyan-500',
    borderColor: 'border-cyan-400/30',
    iconColor: 'text-cyan-400'
  },
  { 
    name: 'Tailwind CSS', 
    icon: <SiTailwindcss />, 
    color: 'from-teal-400 to-teal-500',
    borderColor: 'border-teal-400/30',
    iconColor: 'text-teal-400'
  },
  {
    name: 'C Programming',
    icon: <SiC />,
    color: 'from-blue-600 to-blue-700',
    borderColor: 'border-blue-600/30',
    iconColor: 'text-blue-600'
  },
  {
    name: 'Java',
    icon: <FaJava />,
    color: 'from-red-500 to-red-600',
    borderColor: 'border-red-500/30',
    iconColor: 'text-red-500'
  },
  {
    name: 'Spring Boot',
    icon: <SiSpringboot />,
    color: 'from-green-500 to-green-600',
    borderColor: 'border-green-500/30',
    iconColor: 'text-green-500'
  },
  { 
    name: 'Git', 
    icon: <FaGit />, 
    color: 'from-gray-500 to-gray-600',
    borderColor: 'border-gray-500/30',
    iconColor: 'text-gray-500'
  },
  { 
    name: 'Github', 
    icon: <SiGithub />, 
    color: 'from-gray-600 to-gray-700',
    borderColor: 'border-gray-600/30',
    iconColor: 'text-gray-600'
  },
  {
    name: 'Cloudflare',
    icon: <FaCloudflare />,
    color: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-500'
  },
  {
    name: 'Databases',
    icon: <FaDatabase />,
    color: 'from-green-500 to-green-600',
    borderColor: 'border-green-500/30',
    iconColor: 'text-green-500'
  }
]

export default function About() {
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
            About Me
          </motion.h2>
          <motion.p 
            className="mt-4 max-w-2xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I am a BCA student from Nepathya College (Tribhuvan University). I love building web applications and learning new technologies. 
            I have worked on front-end UI, small backend APIs, and IoT & robotics experiments as part of college projects.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="mt-8 text-2xl font-semibold">Skills / Expertise</h3>
            <p className="mt-2 text-gray-400">Technologies I've worked with</p>
          </motion.div>
        </motion.div>

        <div className="mt-8 flex-1 min-h-0">
          <div className="h-full overflow-y-auto" style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-4">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: index * 0.1 + 0.5, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  className={`skill-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 h-32 ${skill.borderColor} relative overflow-hidden group cursor-pointer`}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  
                  <motion.div 
                    className={`text-4xl ${skill.iconColor} relative z-10`}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.4 }
                    }}
                  >
                    {skill.icon}
                  </motion.div>
                  
                  <motion.div 
                    className="font-semibold text-center relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                  >
                    {skill.name}
                  </motion.div>

                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.color} origin-left`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}