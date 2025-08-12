import React from 'react'

export default function Resume() {
  return (
    <section id="resume">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Resume</h2>
          <p className="mt-2 text-gray-300">Download the PDF.</p>
        </div>
        <div>
          <a href="src/assets/resume.pdf" className="px-4 py-2 bg-brand rounded-full text-white">Download PDF</a>
        </div>
      </div>

      {/* <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="p-4 bg-site-mid rounded">
          <h4 className="font-semibold">Education</h4>
          <p className="text-gray-300 mt-2">BCA — Tribhuvan University, Nepathya College</p>
        </div>

        <div className="p-4 bg-site-mid rounded">
          <h4 className="font-semibold">Experience & Projects</h4>
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            <li>Robo car race — First runner-up (college event)</li>
            <li>Portfolio website (this project)</li>
          </ul>
        </div>
      </div> */}
    </section>
  )
}