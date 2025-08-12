import React, { useState } from 'react'

const MOCK = [
  {
    id: 'proj-1',
    title: 'Portfolio v1',
    desc: 'Personal portfolio built with React and Tailwind.',
    tech: ['React', 'Tailwind'],
    github: 'https://github.com/dinesh13p',
    live: '#'
  },
  {
    id: 'proj-2',
    title: 'Robo Car Controller',
    desc: 'IoT/Robotics project from college — remote controlled car and telemetry.',
    tech: ['Arduino', 'C'],
    github: '#',
    live: '#'
  }
]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const tags = ['All', 'React', 'IoT', 'C']

  const filtered = MOCK.filter((p) => filter === 'All' || p.tech.includes(filter))

  return (
    <section id="projects">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="mt-4 flex gap-2 items-center">
        {tags.map((t) => (
          <button key={t} onClick={() => setFilter(t)} className={`px-3 py-1 rounded ${filter === t ? 'bg-brand text-white' : 'bg-white/5'}`}>
            {t}
          </button>
        ))}
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        {filtered.map((p) => (
          <article key={p.id} className="p-4 bg-site-mid rounded-lg shadow-sm">
            <h3 className="font-semibold text-xl text-brand">{p.title}</h3>
            <p className="mt-2 text-gray-300">{p.desc}</p>
            <div className="mt-3 flex items-center gap-3 flex-wrap">
              {p.tech.map((t) => (
                <span key={t} className="text-sm bg-white/5 px-2 py-1 rounded">{t}</span>
              ))}
            </div>

            <div className="mt-4 flex gap-3">
              <a href={p.live} className="text-sm px-3 py-2 rounded border border-gray-600">Live</a>
              <a href={p.github} className="text-sm px-3 py-2 rounded bg-brand text-white">Source</a>
            </div>
          </article>
        ))}

        {filtered.length === 0 && <p className="text-gray-400">No projects in this category yet.</p>}
      </div>
    </section>
  )
}