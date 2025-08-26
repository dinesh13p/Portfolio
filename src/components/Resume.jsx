import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaEye, FaFileAlt } from 'react-icons/fa'

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Dinesh_Poudel_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="container py-8 flex items-center justify-center min-h-full relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-6"
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-brand to-brand-dark rounded-2xl flex items-center justify-center"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  boxShadow: '0 10px 25px rgba(255, 60, 60, 0.4)'
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaFileAlt className="text-2xl text-white" />
              </motion.div>
              <div>
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  My Resume
                </motion.h2>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-300 max-w-lg lg:mx-0 mx-auto leading-relaxed"
            >
              View or download my resume to learn more about my experience, education, and skills.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button 
              onClick={handleDownload}
              className="flex items-center gap-3 px-6 py-4 btn-primary text-white rounded-2xl font-semibold text-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: '0 15px 30px rgba(255, 60, 60, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaDownload />
              </motion.div>
              Download PDF
            </motion.button>
            
            <motion.a 
              href="/resume.pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 btn-secondary rounded-2xl font-semibold text-lg text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                borderColor: '#ff3c3c'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEye />
              View Online
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute -top-4 -right-4 w-24 h-24 bg-brand/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-dark/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
    </div>
  )
}