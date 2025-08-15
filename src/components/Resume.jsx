import React from 'react'

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
    <section id="resume" className="bg-site-mid py-4 mt-12">
      <div className="container flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-bold">Resume</h2>
          <p className="mt-2 text-gray-300">View or Download my resume to learn more about me.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleDownload}
            className="px-4 py-2 bg-brand rounded-full text-white hover:bg-brand-dark transition"
          >
            Download PDF
          </button>
          {/* ✅ Correct path for public folder */}
          <a 
            href="/resume.pdf"
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