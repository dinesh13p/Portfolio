import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

// Certificate card component with eager image loading
function CertificateCard({ cert, index, onSelect }) {
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
                background: 'linear-gradient(135deg, rgba(80, 80, 80, 0.4) 0%, rgba(30, 30, 30, 0.4) 100%)',
                border: '1px solid rgba(100, 100, 100, 0.3)'
            }}
        >
            <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-700"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
            />

            <div className="relative">
                {cert.image && (
                    <div className="mb-4 rounded-lg overflow-hidden bg-white/5 h-32">
                        <motion.img
                            src={cert.image}
                            alt={`${cert.title} certificate from ${cert.institution}`}
                            className="w-full h-full object-cover"
                            loading="eager"
                            decoding="async"
                            fetchPriority="high"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            onError={(e) => {
                                e.target.onerror = null
                                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999"%3ECertificate%3C/text%3E%3C/svg%3E'
                            }}
                        />
                    </div>
                )}

                <div className="text-sm text-red-500 font-semibold mb-1">{cert.institution}</div>

                <motion.h3
                    className="font-semibold text-lg sm:text-xl text-white"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                >
                    {cert.title}
                </motion.h3>

                <div className="text-xs text-gray-400 mt-1">{cert.type}</div>

                <motion.p
                    className="mt-2 sm:mt-3 text-sm text-gray-300 leading-relaxed line-clamp-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.7 }}
                >
                    {cert.description}
                </motion.p>

                <motion.div
                    className="mt-4 flex gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 + 0.8 }}
                >
                    {!cert.lost && (
                        <motion.button
                            onClick={() => onSelect(cert)}
                            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm bg-red-600 hover:bg-red-700 rounded-lg transition-all text-white"
                            aria-label={`View ${cert.title} certificate from ${cert.institution}`}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Certificate
                        </motion.button>
                    )}

                    {cert.verify && (
                        <motion.a
                            href={cert.verify}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Verify ${cert.title} certificate`}
                            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ExternalLink size={16} />
                            Verify
                        </motion.a>
                    )}
                    {cert.lost && (
                        <div className="text-xs text-gray-400 italic">Certificate lost - Event verification available</div>
                    )}
                </motion.div>
            </div>
        </motion.article>
    )
}

const CERTIFICATES = [
    {
        id: 'cert-1',
        title: 'Frontend Developer (React)',
        institution: 'HackerRank',
        type: 'Role Certificate',
        description: 'Comprehensive certification testing React.js fundamentals, component architecture, state management, hooks, and modern frontend development practices.',
        category: 'HackerRank',
        image: '/Achievements/hackerrank-react.jpg',
        verify: 'https://www.hackerrank.com/certificates/9bf9d826441f'
    },
    {
        id: 'cert-2',
        title: 'The Cybersecurity Threat Landscape',
        institution: 'LinkedIn Learning',
        type: 'Professional Course',
        description: 'Comprehensive overview of modern cybersecurity threats, attack vectors, defensive strategies, and security best practices.',
        category: 'LinkedIn Learning',
        image: '/Achievements/linkedin-cyber.jpg',
        verify: 'https://www.linkedin.com/learning/certificates/e00d55f8bc647ae592279e7fefe118632f3271ffe1cdf3c33ca2de8a1ad15474?trk=share_certificate'
    },
    {
        id: 'cert-3',
        title: 'OOPs in Java',
        institution: 'SimpliLearn',
        type: '3+ hrs Course',
        description: 'In-depth exploration of Object-Oriented Programming principles in Java including inheritance, polymorphism, encapsulation, and abstraction.',
        category: 'SimpliLearn',
        image: '/Achievements/simplilearn-oop.jpg',
        verify: 'https://simpli-web.app.link/e/xsZXWZyrPYb'
    },
    {
        id: 'cert-4',
        title: 'Introduction to Frontend Development',
        institution: 'SimpliLearn',
        type: '12 hrs Course',
        description: 'Comprehensive introduction to modern frontend development covering HTML5, CSS3, responsive design, and JavaScript fundamentals.',
        category: 'SimpliLearn',
        image: '/Achievements/simplilearn-frontend.jpg',
        verify: 'https://simpli-web.app.link/e/2lLAxxFPOYb'
    },
    {
        id: 'cert-5',
        title: 'Business Analytics with Excel powered by Microsoft',
        institution: 'SimpliLearn & Microsoft',
        type: '3+ hrs Course',
        description: 'Practical business analytics skills using Microsoft Excel including data analysis, pivot tables, and visualization techniques.',
        category: 'SimpliLearn',
        image: '/Achievements/simplilearn-excel.jpg',
        verify: 'https://simpli-web.app.link/e/1EymVgBYRYb'
    },
    {
        id: 'cert-6',
        title: 'JavaScript (Intermediate)',
        institution: 'HackerRank',
        type: 'Skill Certificate',
        description: 'Skill-based certification testing ES6+, DOM manipulation, async programming, and algorithmic thinking.',
        category: 'HackerRank',
        image: '/Achievements/hackerrank-js.jpg',
        verify: 'https://www.hackerrank.com/certificates/2e457d5afc02'
    },
    {
        id: 'cert-7',
        title: 'Java (Basic)',
        institution: 'HackerRank',
        type: 'Skill Certificate',
        description: 'Foundational Java certification covering OOP principles, data structures, and core Java programming concepts.',
        category: 'HackerRank',
        image: '/Achievements/hackerrank-java.jpg',
        verify: 'https://www.hackerrank.com/certificates/621343d5193e'
    },
    {
        id: 'cert-8',
        title: 'Robo Race - 1st Runner Up',
        institution: 'Nepathya College',
        type: 'IoT & Robotics Competition',
        description: 'First runner-up award in robotics competition organized by Nepathya College IoT & Robotics Union, demonstrating excellence in autonomous robot design and control.',
        category: 'Others',
        image: '/Achievements/robo-race.jpg',
        verify: null
    },
    {
        id: 'cert-9',
        title: 'Robo Soccer - Participant',
        institution: 'Nepathya College',
        type: 'IoT & Robotics Competition',
        description: 'Participation in Robo Soccer competition by Nepathya College IoT & Robotics Union (Certificate lost – verification through college event records).',
        category: 'Others',
        image: null,
        verify: null,
        lost: true
    }
]

export default function Achievements() {
    const [filter, setFilter] = useState('All')
    const [selectedCert, setSelectedCert] = useState(null)
    const categories = ['All', 'HackerRank', 'LinkedIn Learning', 'SimpliLearn', 'Others']

    const filtered = CERTIFICATES.filter(cert =>
        filter === 'All' || cert.category === filter
    )

    const viewableCerts = filtered.filter(cert => !cert.lost)

    const handleNext = () => {
        const currentIndex = viewableCerts.findIndex(c => c.id === selectedCert.id)
        const nextIndex = (currentIndex + 1) % viewableCerts.length
        setSelectedCert(viewableCerts[nextIndex])
    }

    const handlePrev = () => {
        const currentIndex = viewableCerts.findIndex(c => c.id === selectedCert.id)
        const prevIndex = (currentIndex - 1 + viewableCerts.length) % viewableCerts.length
        setSelectedCert(viewableCerts[prevIndex])
    }

    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedCert) return
            if (e.key === 'ArrowRight') {
                handleNext()
            } else if (e.key === 'ArrowLeft') {
                handlePrev()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedCert])

    return (
        <>
            <motion.div
                className="mt-3 sm:mt-4 flex gap-2 items-center flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {categories.map((cat, index) => (
                    <motion.button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-3 sm:px-4 py-2 rounded-full transition-all text-sm sm:text-base ${filter === cat
                            ? 'bg-red-600 text-white shadow-lg'
                            : 'bg-white/5 hover:bg-white/10 text-white'
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
                        {cat}
                    </motion.button>
                ))}
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pb-4 mt-6">
                {filtered.map((cert, index) => (
                    <CertificateCard
                        key={`${cert.id}-${filter}`}
                        cert={cert}
                        index={index}
                        onSelect={setSelectedCert}
                    />
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
                            style={{ background: 'linear-gradient(135deg, rgba(80, 80, 80, 0.4) 0%, rgba(30, 30, 30, 0.4) 100%)' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-all"
                            >
                                <X size={24} className="text-white" />
                            </button>

                            <button
                                onClick={handlePrev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-all"
                            >
                                <ChevronLeft size={32} className="text-white" />
                            </button>

                            <button
                                onClick={handleNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-all"
                            >
                                <ChevronRight size={32} className="text-white" />
                            </button>

                            <div className="p-8" style={{ background: 'linear-gradient(135deg, rgba(80, 80, 80, 0.4) 0%, rgba(30, 30, 30, 0.4) 100%)' }}>
                                <div className="bg-white/5 rounded-lg overflow-hidden mb-6 h-96 flex items-center justify-center">
                                    {selectedCert.image && (
                                        <motion.img
                                            key={selectedCert.id}
                                            src={selectedCert.image}
                                            alt={`${selectedCert.title} certificate from ${selectedCert.institution}`}
                                            className="w-full h-full object-contain"
                                            loading="eager"
                                            decoding="async"
                                            fetchPriority="high"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            onError={(e) => {
                                                e.target.style.display = 'none'
                                            }}
                                        />
                                    )}
                                    {!selectedCert.image && <div className="text-gray-400">Certificate Image</div>}
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <div className="text-red-500 font-semibold">{selectedCert.institution}</div>
                                        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">{selectedCert.title}</h2>
                                        <div className="text-sm text-gray-400 mt-1">{selectedCert.type}</div>
                                    </div>

                                    <p className="text-gray-300 leading-relaxed">{selectedCert.description}</p>

                                    {selectedCert.verify && (
                                        <a
                                            href={selectedCert.verify}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all"
                                        >
                                            <ExternalLink size={18} />
                                            Verify Certificate
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}