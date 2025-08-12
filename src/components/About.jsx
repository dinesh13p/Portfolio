import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaReact /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Databases', icon: <FaDatabase /> }
]

export default function About() {
  return (
    <section id="about">
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="mt-4 max-w-2xl text-gray-300">I am a BCA student from Nepathya College (Tribhuvan University). I love building web applications and learning new technologies. I have worked on front-end UI, small backend APIs, and IoT & robotics experiments as part of college projects.</p>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((s) => (
          <div key={s.name} className="p-4 bg-site-mid rounded-lg flex items-center gap-4">
            <div className="text-2xl text-brand">{s.icon}</div>
            <div>
              <div className="font-semibold">{s.name}</div>
              <div className="text-sm text-gray-400">Intermediate</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}