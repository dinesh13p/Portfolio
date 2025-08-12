import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaDatabase, FaJsSquare, FaJava, FaPython } from 'react-icons/fa'
import { SiC } from 'react-icons/si'  // import C icon from react-icons/si

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, level: 'Advanced' },
  { name: 'CSS', icon: <FaCss3Alt />, level: 'Advanced' },
  { name: 'JavaScript', icon: <FaJsSquare />, level: 'Intermediate' },
  { name: 'React', icon: <FaReact />, level: 'Intermediate' },
  { name: 'C programming', icon: <SiC />, level: 'Intermediate' },
  { name: 'Java', icon: <FaJava />, level: 'Intermediate' },
  { name: 'Databases', icon: <FaDatabase />, level: 'Basic' },
  // { name: 'Python', icon: <FaPython />, level: 'Basic' }
]

export default function About() {
  return (
    <section id="about">
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="mt-4 max-w-2xl text-gray-300">
        I am a BCA student from Nepathya College (Tribhuvan University). I love building web applications and learning new technologies. 
        I have worked on front-end UI, small backend APIs, and IoT & robotics experiments as part of college projects.
      </p>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((s) => (
          <div key={s.name} className="p-4 bg-site-mid rounded-lg flex items-center gap-4">
            <div className="text-2xl text-brand">{s.icon}</div>
            <div>
              <div className="font-semibold">{s.name}</div>
              <div className="text-sm text-gray-400">{s.level}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
