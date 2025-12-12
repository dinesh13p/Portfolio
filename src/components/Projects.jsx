import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const MOCK = [
    {
        id: 'proj-1',
        title: 'Portfolio v1_dinesh13p',
        desc: 'My Personal Portfolio Website.',
        tech: ['React', 'Tailwind'],
        github: 'https://github.com/dinesh13p/Portfolio',
        live: 'https://dinesh-poudel.com.np'
    },
    {
        id: 'proj-2',
        title: 'GamesV1',
        desc: 'My personal growth project where I\'ve made various games.',
        tech: ['React', 'JavaScript'],
        github: 'https://github.com/dinesh13p/Games-V1',
        live: 'https://dinesh2004.com.np'
    },
    {
        id: 'proj-3',
        title: '4th semester project',
        desc: '4th Semester Project --> Development in Progress.',
        tech: ['Java', 'Spring Boot', 'Thymeleaf', 'pgAdmin4'],
        github: null,
        live: null
    },
    {
        id: 'proj-4',
        title: 'Self improvement project',
        desc: 'Academics related personal project',
        tech: ['Java', 'Spring Boot', 'pgAdmin4'],
        github: null,
        live: null
    },
    {
        id: 'proj-5',
        title: 'Portfolio_Website->Sandhya',
        desc: 'Portfolio website of Sandhya Paudel, built with React.js and Tailwind CSS with responsive design. Helped in designing. Developed entirely by myself.',
        tech: ['React', 'Tailwind'],
        github: 'https://github.com/paudelsandhya/Portfolio',
        live: 'https://paudelsandhya.github.io/Portfolio/'
    },
    {
        id: 'proj-6',
        title: 'Portfolio_Website->Sunil',
        desc: 'Portfolio website of Sunil Bhattarai, built with React.js and Tailwind CSS with responsive design. Helped in designing, building, hosting & deploying the website.',
        tech: ['React', 'Tailwind'],
        github: 'https://github.com/Sunil5566/Portfolio',
        live: 'https://sunil5566.github.io/Portfolio/'
    },
    {
        id: 'proj-7',
        title: 'Portfolio_Website->Bishal',
        desc: 'Portfolio website of Bishal Lamichhane, built with React.js and Tailwind CSS with responsive design. Helped in designing, building, hosting & deploying the website.',
        tech: ['React', 'Tailwind'],
        github: 'https://github.com/bixal127/Portfolio',
        live: 'https://bixal127.github.io/Portfolio/'
    },
    {
        id: 'proj-8',
        title: 'IoT & Robotics Projects',
        desc: 'Remote controlled car (Bluetooth Arduino) | Remote controlled car (ESP) | Smart Dustbin.',
        tech: ['IoT', 'Arduino IDE'],
        github: 'https://github.com/dinesh13p/IoT_Projects_Drogon',
        live: null
    },
    {
        id: 'proj-9',
        title: 'Marvel Copy Website',
        desc: 'Copy website of Marvel Entertainment. Made as the training project in first semester, built with html, css and bootstrap.',
        tech: ['HTML', 'CSS', 'Bootstrap'],
        github: 'https://github.com/dinesh13p/First-sem_Project',
        live: 'https://dinesh13p.github.io/First-sem_Project/'
    }
]

// Project card component with eager image loading
function ProjectCard({ project: p, index }) {
    const getBackgroundImage = () => {
        const imageMap = {
            'proj-1': '/Projects/Portfolio_v1.jpg',
            'proj-2': '/Projects/Personal_Project.jpg',
            'proj-3': '/Projects/4th_Sem_Project.jpg',
            'proj-4': '/Projects/School_Management_System.jpg',
            'proj-5': '/Projects/Portfolio_Sandhya.jpg',
            'proj-6': '/Projects/Portfolio_Sunil.jpg',
            'proj-7': '/Projects/Portfolio_Bishal.jpg',
            'proj-8': '/Projects/IoT_&_Robotics.jpg',
            'proj-9': '/Projects/Marvel_Copy_Website.jpg',
        }
        return imageMap[p.id] || undefined
    }

    return (
        <motion.article
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                delay: index * 0.15 + 0.5,
                duration: 0.6,
                type: "spring",
                stiffness: 100
            }}
            className="project-card p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm flex-shrink-0 relative overflow-hidden group"
            whileHover={{
                y: window.innerWidth <= 768 ? -4 : -8,
                transition: { duration: 0.3 }
            }}
            style={{
                backgroundImage: `url('${getBackgroundImage()}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(15, 15, 15, 0.82)',
                zIndex: 1,
                pointerEvents: 'none',
            }} />
            <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-brand-dark"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                style={{ zIndex: 2 }}
            />

            <div style={{ position: 'relative', zIndex: 3 }}>
                <motion.h3
                    className="font-semibold text-lg sm:text-xl text-brand"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                >
                    {p.title}
                </motion.h3>

                <motion.p
                    className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.7 }}
                >
                    {p.desc}
                </motion.p>

                <motion.div
                    className="mt-3 sm:mt-4 flex items-center gap-2 flex-wrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 + 0.8 }}
                >
                    {p.tech && p.tech.map((t, techIndex) => (
                        <motion.span
                            key={t}
                            className="text-xs sm:text-sm bg-white/10 px-2 sm:px-3 py-1 rounded-full border border-white/20"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.15 + 0.8 + techIndex * 0.1 }}
                        >
                            {t}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-4 sm:mt-6 flex gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 + 0.9 }}
                >
                    {p.github && (
                        <motion.a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${p.title} source code on GitHub`}
                            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Github size={16} />
                            Code
                        </motion.a>
                    )}

                    {p.live && (
                        <motion.a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${p.title} live demo`}
                            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm btn-primary text-white rounded-lg"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ExternalLink size={16} />
                            Live Demo
                        </motion.a>
                    )}
                </motion.div>
            </div>
        </motion.article>
    )
}

export default function Projects() {
    const [filter, setFilter] = useState('All')
    const tags = ['All', 'WebDev', 'WorkBench', 'Academics', 'Others']

    const filtered = MOCK.filter((p) => {
        if (p.id === 'proj-1') {
            return filter === 'All' || filter === 'WebDev';
        }
        if (p.id === 'proj-2') {
            return filter === 'All' || filter === "WebDev" || filter === 'WorkBench';
        }
        if (p.id === 'proj-3') {
            return filter === 'All' || filter === 'Academics' || filter === 'WorkBench';
        }
        if (p.id === 'proj-4') {
            return filter === 'All' || filter === 'WorkBench';
        }
        if (p.id === 'proj-5') {
            return filter === 'All' || filter === 'WebDev';
        }
        if (p.id === 'proj-6') {
            return filter === 'All' || filter === 'WebDev';
        }
        if (p.id === 'proj-7') {
            return filter === 'All' || filter === 'WebDev';
        }
        if (p.id === 'proj-8') {
            return filter === 'All' || filter === 'Others';
        }
        if (p.id === 'proj-9') {
            return filter === 'All' || filter === 'WebDev' || filter === 'Academics';
        }
        if (filter === 'All') return true;
        return p.tech && p.tech.some(tech => tech.includes(filter));
    })

    return (
        <>
            <motion.div
                className="mt-3 sm:mt-4 flex gap-2 items-center flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {tags.map((t, index) => (
                    <motion.button
                        key={t}
                        onClick={() => setFilter(t)}
                        className={`px-3 sm:px-4 py-2 rounded-full transition-all text-sm sm:text-base ${filter === t
                            ? 'bg-brand text-white shadow-lg'
                            : 'bg-white/5 hover:bg-white/10'
                            }`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: index * 0.1 + 0.4,
                            duration: 0.5,
                            type: "spring",
                            stiffness: 150
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t}
                    </motion.button>
                ))}
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pb-4 mt-6">
                {filtered.map((p, index) => (
                    <ProjectCard key={`${p.id}-${filter}`} project={p} index={index} />
                ))}
            </div>
        </>
    )
}