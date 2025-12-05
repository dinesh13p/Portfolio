import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Projects from './Projects'
import Achievements from './Achievements'

export default function Showcase() {
  const location = useLocation()
  const navigate = useNavigate()
  const initialTab = location.pathname.includes('Projects') ? 'Projects' : location.pathname.includes('Achievements') ? 'Achievements' : 'Projects'
  const [activeTab, setActiveTab] = useState(initialTab)

  React.useEffect(() => {
    if (location.pathname === '/Showcase') {
      navigate('/Showcase/Projects', { replace: true })
    }
  }, [])

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
                onClick={() => {
                  setActiveTab('Projects')
                  navigate('/Showcase/Projects')
                }}
                className={`text-2xl sm:text-3xl font-bold cursor-pointer transition-all ${activeTab === 'Projects' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
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
                onClick={() => {
                  setActiveTab('Achievements')
                  navigate('/Showcase/Achievements')
                }}
                className={`text-2xl sm:text-3xl font-bold cursor-pointer transition-all ${activeTab === 'Achievements' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                  }`}
              >
                Achievements
              </h2>
              {activeTab === 'Achievements' && (
                <p className="text-sm sm:text-base text-gray-300 mt-1">Certifications & Accomplishments</p>
              )}
            </div>
          </motion.div>
        </motion.div>

        <div className="flex-1 min-h-0">
          <div className="h-full overflow-y-auto" style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}>
            {activeTab === 'Projects' && <Projects />}
            {activeTab === 'Achievements' && <Achievements />}
          </div>
        </div>
      </motion.div>
    </div>
  )
}