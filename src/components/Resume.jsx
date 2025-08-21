import React from 'react'
import { motion } from 'framer-motion'

export default function Resume() {
  const handleDownload = () => {
    // Create download link for PDF in public folder
    const link = document.createElement('a')
    link.href = '/resume.pdf'  // ✅ Correct path for public folder
    link.download = 'Dinesh_Poudel_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="container py-8 flex items-center justify-center min-h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold">Resume</h2>
        <p className="mt-4 text-gray-300 max-w-lg mx-auto">
          View or Download my resume to learn more about my experience, education, and skills.
        </p>
        
        <div className="mt-8 flex gap-4 justify-center">
          <button 
            onClick={handleDownload}
            className="px-6 py-3 bg-brand rounded-full text-white hover:bg-brand-dark transition font-semibold"
          >
            Download PDF
          </button>
          {/* ✅ Correct path for public folder */}
          <a 
            href="/resume.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-600 rounded-full hover:border-brand transition font-semibold"
          >
            View Online
          </a>
        </div>
      </motion.div>
    </div>
  )
}