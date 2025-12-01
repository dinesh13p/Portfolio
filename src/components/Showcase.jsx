import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const MOCK = [
  {
    id: 'proj-1',
    title: 'Portfolio v1_dinesh13p',
    desc: 'My Personal Portfolio Website.',
    tech: ['React', 'Tailwind'],
    github: 'https://github.com/dinesh13p/Portfolio',
    live: 'https://dinesh-poudel.com.np'
  },
  {
    id: 'proj-2',
    title: 'GamesV1',
    desc: 'My personal growth project where I\'ve made various games.',
    tech: ['React', 'JavaScript'],
    github: 'https://github.com/dinesh13p/Games-V1',
    live: 'https://dinesh2004.com.np'
  },
  {
    id: 'proj-3',
    title: '4th semester project',
    desc: '4th Semester Project --> Development in Progress.',
    tech: ['Java', 'Spring Boot', 'Thymeleaf', 'pgAdmin4'],
    github: null,
    live: null
  },
  {
    id: 'proj-4',
    title: 'Self improvement project',
    desc: 'Academics related personal project',
    tech: ['Java', 'Spring Boot', 'pgAdmin4'],
    github: null,
    live: null
  },
  {
    id: 'proj-5',
    title: 'Portfolio_Website->Sandhya',
    desc: 'Portfolio website of Sandhya Paudel, built with React.js and Tailwind CSS with responsive design. Helped in designing. Developed entirely by myself.',
    tech: ['React', 'Tailwind'],
    github: 'https://github.com/paudelsandhya/Portfolio',
    live: 'https://paudelsandhya.github.io/Portfolio/'
  },
  {
    id: 'proj-6',
    title: 'Portfolio_Website->Sunil',
    desc: 'Portfolio website of Sunil Bhattarai, built with React.js and Tailwind CSS with responsive design. Helped in designing, building, hosting & deploying the website.',
    tech: ['React', 'Tailwind'],
    github: 'https://github.com/Sunil5566/Portfolio',
    live: 'https://sunil5566.github.io/Portfolio/'
  },
  {
    id: 'proj-7',
    title: 'Portfolio_Website->Bishal',
    desc: 'Portfolio website of Bishal Lamichhane, built with React.js and Tailwind CSS with responsive design. Helped in designing, building, hosting & deploying the website.',
    tech: ['React', 'Tailwind'],
    github: 'https://github.com/bixal127/Portfolio',
    live: 'https://bixal127.github.io/Portfolio/'
  },
  {
    id: 'proj-8',
    title: 'IoT & Robotics Projects',
    desc: 'Remote controlled car (Bluetooth Arduino) | Remote controlled car (ESP) | Smart Dustbin.',
    tech: ['IoT', 'Arduino IDE'],
    github: 'https://github.com/dinesh13p/IoT_Projects_Drogon',
    live: null
  },
  {
    id: 'proj-9',
    title: 'Marvel Copy Website',
    desc: 'Copy website of Marvel Entertainment. Made as the training project in first semester, built with html, css and bootstrap.',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    github: 'https://github.com/dinesh13p/First-sem_Project',
    live: 'https://dinesh13p.github.io/First-sem_Project/'
  }
]

export default function Showcase() {
  const [activeTab, setActiveTab] = useState('Projects')
  const [filter, setFilter] = useState('All')
  const tags = ['All', 'WebDev', 'Academics', 'Personal', 'WorkBench', 'Others']

  const filtered = MOCK.filter((p) => {
    if (p.id === 'proj-1') {
      return filter === 'All' || filter === 'WebDev' || filter === 'Personal';
    }
    if (p.id === 'proj-2') {
      return filter === 'All' || filter==="WebDev" || filter === 'Personal' || filter === 'WorkBench';
    }
    if (p.id === 'proj-3') {
      return filter === 'All' || filter === 'Academics';
    }
    if (p.id === 'proj-4') {
      return filter === 'All' || filter === 'WorkBench' || filter === 'Personal';
    }
    if (p.id === 'proj-5') {
      return filter === 'All' || filter === 'WebDev';
    }
    if (p.id === 'proj-6') {
      return filter === 'All' || filter === 'WebDev';
    }
    if (p.id === 'proj-7') {
      return filter === 'All' || filter === 'WebDev';
    }
    if (p.id === 'proj-8') {
      return filter === 'All' || filter === 'Others';
    }
    if (p.id === 'proj-9') {
      return filter === 'All' || filter === 'WebDev';
    }
    if (filter === 'All') return true;
    return p.tech && p.tech.some(tech => tech.includes(filter));
  })

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
          <motion.div 
            className="flex justify-between items-start gap-4 mb-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h2 
                onClick={() => setActiveTab('Projects')}
                className={`text-2xl sm:text-3xl font-bold cursor-pointer transition-all ${
                  activeTab === 'Projects' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                Projects
              </h2>
              {activeTab === 'Projects' && (
                <p className="text-sm sm:text-base text-gray-300 mt-1">Featured Projects</p>
              )}
            </div>
            
            <div className="text-right">
              <h2 
                onClick={() => setActiveTab('Achievements')}
                className={`text-2xl sm:text-3xl font-bold cursor-pointer transition-all ${
                  activeTab === 'Achievements' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                Achievements
              </h2>
              {activeTab === 'Achievements' && (
                <p className="text-sm sm:text-base text-gray-300 mt-1">Certifications & Achievements</p>
              )}
            </div>
          </motion.div>

          {activeTab === 'Projects' && (
            <>
              <motion.div 
                className="mt-3 sm:mt-4 flex gap-2 items-center flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {tags.map((t, index) => (
                  <motion.button 
                    key={t} 
                    onClick={() => setFilter(t)} 
                    className={`px-3 sm:px-4 py-2 rounded-full transition-all text-sm sm:text-base ${
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
            </>
          )}
        </motion.div>

        <div className="flex-1 min-h-0">
          <div className="h-full overflow-y-auto" style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}>
            {activeTab === 'Projects' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pb-4">
                {filtered.map((p, index) => (
                  <motion.article 
                    key={`${p.id}-${filter}`}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      delay: index * 0.15 + 0.5, 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="project-card p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm flex-shrink-0 relative overflow-hidden group"
                    whileHover={{ 
                      y: window.innerWidth <= 768 ? -4 : -8,
                      transition: { duration: 0.3 }
                    }}
                    style={{
                      backgroundImage: (() => {
                        switch (p.id) {
                          case 'proj-1': return "url('/images/Portfolio_v1.jpg')";
                          case 'proj-2': return "url('/images/Personal_Project.jpg')";
                          case 'proj-3': return "url('/images/4th_Sem_Project.jpg')";
                          case 'proj-4': return "url('/images/School_Management_System.jpg')";
                          case 'proj-5': return "url('/images/Portfolio_Sandhya.jpg')";
                          case 'proj-6': return "url('/images/Portfolio_Sunil.jpg')";
                          case 'proj-7': return "url('/images/Portfolio_Bishal.jpg')";
                          case 'proj-8': return "url('/images/IoT_&_Robotics.jpg')";
                          case 'proj-9': return "url('/images/Marvel_Copy_Website.jpg')";
                          default: return undefined;
                        }
                      })(),
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(15, 15, 15, 0.82)',
                      zIndex: 1,
                      pointerEvents: 'none',
                    }} />
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-brand-dark"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4 }}
                      style={{ zIndex: 2 }}
                    />
                    
                    <div style={{ position: 'relative', zIndex: 3 }}>
                      <motion.h3 
                        className="font-semibold text-lg sm:text-xl text-brand"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {p.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-300 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.15 + 0.7 }}
                      >
                        {p.desc}
                      </motion.p>
                      
                      <motion.div 
                        className="mt-3 sm:mt-4 flex items-center gap-2 flex-wrap"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 + 0.8 }}
                      >
                        {p.tech && p.tech.map((t, techIndex) => (
                          <motion.span 
                            key={t} 
                            className="text-xs sm:text-sm bg-white/10 px-2 sm:px-3 py-1 rounded-full border border-white/20"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.15 + 0.8 + techIndex * 0.1 }}
                          >
                            {t}
                          </motion.span>
                        ))}
                      </motion.div>

                      <motion.div 
                        className="mt-4 sm:mt-6 flex gap-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 + 0.9 }}
                      >
                        {p.github && (
                          <motion.a 
                            href={p.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github size={16} />
                            Code
                          </motion.a>
                        )}
                        
                        {p.live && (
                          <motion.a 
                            href={p.live} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm btn-primary text-white rounded-lg"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </motion.a>
                        )}
                      </motion.div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}

            {activeTab === 'Achievements' && (
              <div className="flex items-center justify-center h-full pb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <motion.h2 
                    className="text-3xl sm:text-4xl font-bold text-brand mb-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    To be added soon ....
                  </motion.h2>
                  <motion.p 
                    className="text-base sm:text-lg text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    My certificates and awards will be listed here
                  </motion.p>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}