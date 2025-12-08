import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaEye, FaFileAlt } from 'react-icons/fa'

export default function Resume() {
  const [pdfLoading, setPdfLoading] = useState(false)
  const pdfIframeRef = useRef(null)
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Dinesh_Poudel_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewOnline = () => {
    setPdfLoading(true)
    // Open in new tab instead of embedding to save memory and improve performance
    window.open('/resume.pdf', '_blank')
    setTimeout(() => setPdfLoading(false), 500)
  }

  return (
    <div className="container flex items-center justify-center min-h-full relative" style={{
      paddingTop: 'clamp(16px, 4vh, 32px)',
      paddingBottom: 'clamp(16px, 4vh, 32px)'
    }}>
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
          className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8"
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
              className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6"
            >
              <motion.div
                className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-brand to-brand-dark rounded-xl sm:rounded-2xl flex items-center justify-center"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: '0 10px 25px rgba(255, 60, 60, 0.4)'
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaFileAlt className="text-xl sm:text-2xl text-white" />
              </motion.div>
              <div>
                <motion.h2
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
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
              className="text-sm sm:text-base md:text-lg text-gray-300 max-w-lg lg:mx-0 mx-auto leading-relaxed"
            >
              View or Download my <strong className="text-white">Resume</strong> to learn more about my skills, education, and experience.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <motion.button
              onClick={handleDownload}
              className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 btn-primary text-white rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base md:text-lg shadow-lg w-full sm:w-auto"
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
              onClick={(e) => {
                e.preventDefault()
                handleViewOnline()
              }}
              className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 btn-secondary rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base md:text-lg text-white w-full sm:w-auto disabled:opacity-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={pdfLoading ? {} : {
                scale: 1.05,
                y: -3,
                borderColor: '#ff3c3c'
              }}
              whileTap={pdfLoading ? {} : { scale: 0.95 }}
            >
              <motion.div
                animate={pdfLoading ? { rotate: 360 } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaEye />
              </motion.div>
              {pdfLoading ? 'Loading...' : 'View Online'}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ...existing code... */}
      </motion.div>
    </div>
  )
}