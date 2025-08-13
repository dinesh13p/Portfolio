import React, { useState } from 'react'

const MOCK = [
  {
    id: 'proj-1',
    title: 'Portfolio v1',
    desc: 'Personal portfolio built with React and Tailwind CSS with responsive design.',
    tech: ['React', 'Tailwind'],
    github: 'https://github.com/dinesh13p/Portfolio',
    live: 'https://dinesh2004.com.np'
  },
  {
    id: 'proj-2',
    title: 'Robo Car Controller',
    desc: 'IoT/Robotics project from college — remote controlled car with telemetry data.',
    tech: ['Arduino', 'C', 'IoT'],
    github: null, // No link available
    live: null // No live demo
  }
]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const tags = ['All', 'React', 'IoT', 'C', 'Arduino']

  const filtered = MOCK.filter((p) => 
    filter === 'All' || p.tech.some(tech => tech.includes(filter))
  )

  return (
    <section id="projects">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="mt-4 flex gap-2 items-center flex-wrap">
        {tags.map((t) => (
          <button 
            key={t} 
            onClick={() => setFilter(t)} 
            className={`px-3 py-1 rounded transition ${
              filter === t 
                ? 'bg-brand text-white' 
                : 'bg-white/5 hover:bg-white/10'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        {filtered.map((p) => (
          <article key={p.id} className="p-4 bg-site-mid rounded-lg shadow-sm hover:bg-site-mid/80 transition">
            <h3 className="font-semibold text-xl text-brand">{p.title}</h3>
            <p className="mt-2 text-gray-300">{p.desc}</p>
            <div className="mt-3 flex items-center gap-2 flex-wrap">
              {p.tech.map((t) => (
                <span key={t} className="text-sm bg-white/5 px-2 py-1 rounded">{t}</span>
              ))}
            </div>

            <div className="mt-4 flex gap-3">
              {p.live ? (
                <a 
                  href={p.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-2 rounded border border-gray-600 hover:border-brand transition"
                >
                  Live Demo
                </a>
              ) : (
                <span className="text-sm px-3 py-2 rounded border border-gray-600 opacity-50 cursor-not-allowed">
                  No Demo
                </span>
              )}
              
              {p.github ? (
                <a 
                  href={p.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-2 rounded bg-brand text-white hover:bg-brand-dark transition"
                >
                  Source Code
                </a>
              ) : (
                <span className="text-sm px-3 py-2 rounded bg-gray-600 text-white opacity-50 cursor-not-allowed">
                  Private
                </span>
              )}
            </div>
          </article>
        ))}

        {filtered.length === 0 && (
          <p className="text-gray-400 col-span-2">No projects found for this filter.</p>
        )}
      </div>
    </section>
  )
}