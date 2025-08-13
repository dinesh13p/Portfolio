import React from 'react'

export default function Resume() {
  const handleDownload = () => {
    // Try to download, fallback to opening in new tab if download fails
    const link = document.createElement('a')
    link.href = '/src/assets/resume.pdf'
    link.download = 'Dinesh_Poudel_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="resume">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-bold">Resume</h2>
          <p className="mt-2 text-gray-300">Download my resume to learn more about my experience.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleDownload}
            className="px-4 py-2 bg-brand rounded-full text-white hover:bg-brand-dark transition"
          >
            Download PDF
          </button>
          <a 
            href="/src/assets/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-600 rounded-full hover:border-brand transition"
          >
            View Online
          </a>
        </div>
      </div>
    </section>
  )
}