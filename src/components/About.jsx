import React from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaReact, FaDatabase, FaJsSquare, FaJava, FaPython, FaGit, FaCloudflare } from 'react-icons/fa'
import { SiC, SiTailwindcss, SiSpringboot, SiBootstrap, SiGithub, SiFigma, SiPhp, SiMysql } from 'react-icons/si'

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
    name: 'PHP',
    icon: <SiPhp />,
    color: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-500'
  },
  {
    name: 'SQL',
    icon: <SiMysql />,
    color: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-500'
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
    name: 'Figma',
    icon: <SiFigma />,
    color: 'from-pink-500 to-pink-600',
    borderColor: 'border-pink-500/30',
    iconColor: 'text-pink-500'
  }
  // {
  //   name: 'Databases',
  //   icon: <FaDatabase />,
  //   color: 'from-green-500 to-green-600',
  //   borderColor: 'border-green-500/30',
  //   iconColor: 'text-green-500'
  // }
]

export default function About() {
  return (
    <div className="container h-full flex flex-col" style={{
      paddingTop: 'clamp(16px, 4vh, 32px)',
      paddingBottom: 'clamp(16px, 4vh, 32px)'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 min-h-0 flex flex-col"
      >
        <motion.div
          className="flex-shrink-0 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About me
          </motion.h2>
          <motion.p
            className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-gray-300 leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I am a BCA student from Tribhuvan University. I build responsive web applications using <strong className="text-white">React</strong> and modern tools.
            Currently pursuing studies in backend development and system design, with emphasis on <strong className="text-white">Java</strong> and <strong className="text-white"></strong>Spring Boot.
            I have worked on front-end UI, small backend APIs, and IoT & robotics experiments as my projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="mt-6 sm:mt-8 text-xl sm:text-2xl font-semibold">Skills / Expertise</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-400">Technologies I've worked with</p>
          </motion.div>
        </motion.div>

        <div className="flex-1 min-h-0">
          <div className="h-full overflow-y-auto" style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 pb-4">
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
                  className={`skill-card p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 h-20 sm:h-24 md:h-32 ${skill.borderColor} relative overflow-hidden group cursor-pointer`}
                  whileHover={{
                    y: window.innerWidth <= 768 ? -4 : -8,
                    scale: window.innerWidth <= 768 ? 1.02 : 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <motion.div
                    className={`text-xl sm:text-2xl md:text-4xl ${skill.iconColor} relative z-10`}
                    whileHover={{
                      scale: window.innerWidth <= 768 ? 1.1 : 1.2,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.4 }
                    }}
                  >
                    {skill.icon}
                  </motion.div>

                  <motion.div
                    className="font-semibold text-center relative z-10 text-xs sm:text-sm md:text-base"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                  >
                    {skill.name}
                  </motion.div>

                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r ${skill.color} origin-left`}
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