import React, { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' }
]

export default function Header({ activeTab, setActiveTab }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (tabId) => {
    setActiveTab(tabId)
    setOpen(false)
  }

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-30 transition-all duration-500 ${
          scrolled 
            ? 'navbar-blur shadow-2xl border-b border-brand/20' 
            : 'backdrop-blur bg-black/60'
        } border-b border-gray-800`}
      >
        <div className="container flex items-center justify-between py-6">
          <motion.button 
            onClick={() => setActiveTab('home')} 
            className="text-2xl font-extrabold text-brand hover:text-brand-dark transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            dinesh2004.com.np
          </motion.button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n, i) => (
              <motion.button 
                key={n.id} 
                onClick={() => handleNavClick(n.id)}
                className={`relative hover:text-brand transition-colors text-lg font-medium ${
                  activeTab === n.id ? 'text-brand font-semibold' : ''
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                {n.label}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-brand"
                  initial={{ width: 0 }}
                  animate={{ width: activeTab === n.id ? '100%' : 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          <motion.button 
            className="md:hidden p-3 text-brand hover:text-brand-dark transition-colors" 
            onClick={() => setOpen((s) => !s)} 
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {open ? <HiX size={32} /> : <HiMenu size={32} />}
            </motion.div>
          </motion.button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden navbar-blur border-t border-brand/20"
            >
              <div className="container py-6 flex flex-col gap-4">
                {NAV.map((n, i) => (
                  <motion.button 
                    key={n.id}
                    onClick={() => handleNavClick(n.id)}
                    className={`text-left block py-3 hover:text-brand transition-colors text-lg font-medium border-b border-gray-800 last:border-0 ${
                      activeTab === n.id ? 'text-brand font-semibold' : ''
                    }`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    whileHover={{ x: 10 }}
                  >
                    {n.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}