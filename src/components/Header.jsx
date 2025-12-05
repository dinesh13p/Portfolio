import React, { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { 
  FaHome, FaUser, FaProjectDiagram, FaFileAlt, FaEnvelope,
  FaGithub, FaLinkedin, FaInstagram, FaFacebook, 
  FaGlobe
} from 'react-icons/fa'
import { SiX } from 'react-icons/si'

const NAV = [
  { id: 'home', label: 'Home', icon: <FaHome />, path: '/Home' },
  { id: 'about', label: 'About', icon: <FaUser />, path: '/About' },
  { id: 'showcase', label: 'Showcase', icon: <FaProjectDiagram />, path: '/Showcase' },
  { id: 'resume', label: 'Resume', icon: <FaFileAlt />, path: '/Resume' },
  { id: 'contact', label: 'Contact', icon: <FaEnvelope />, path: '/Contact' },
  // { id: 'portal', label: 'Portal', icon: <FaGlobe />, path: '/Portal' }
]

const socialLinks = [
  { icon: FaGithub, url: 'https://github.com/dinesh13p', name: 'Github' },
  { icon: FaInstagram, url: 'https://www.instagram.com/_d_nesh_/', name: 'Instagram' },
  { icon: SiX, url: 'https://x.com/Dinesh2061', name: 'X (formerly Twitter)' },
  { icon: FaFacebook, url: 'https://www.facebook.com/dinesh.poudel.319452', name: 'Facebook' },
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/dinesh-poudel-3a4b10331/', name: 'LinkedIn' }
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => {
    setOpen(false)
  }

  const isActive = (path) => {
    if (path === '/Home') {
      return location.pathname === '/Home' || location.pathname === '/'
    }
    return location.pathname === path
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside 
        initial={{ x: -320 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden lg:flex fixed left-0 top-0 w-80 h-screen bg-gradient-to-b from-site-dark via-site-mid to-site-dark border-r border-brand/20 flex-col z-50 overflow-y-auto backdrop-blur"
      >
        {/* Header */}
        <div className="p-6 text-center border-b border-brand/10">
          <motion.h1 
            className="text-xl font-bold text-brand mb-1 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate('/')}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            dinesh-poudel.com.np
          </motion.h1>
        </div>

        {/* Available for Hire Indicator */}
        <div className="px-6 pt-4 pb-2">
          <motion.div 
            className="flex items-center gap-3 group cursor-pointer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="w-3 h-3 bg-green-500 rounded-full relative shadow-lg"
              animate={{
                y: [0, -2, 0],
                boxShadow: [
                  '0 0 5px rgba(34, 197, 94, 0.4)',
                  '0 0 8px rgba(34, 197, 94, 0.6)',
                  '0 0 5px rgba(34, 197, 94, 0.4)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.2,
                boxShadow: '0 0 12px rgba(34, 197, 94, 0.8)',
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                className="absolute inset-0 bg-green-500 rounded-full"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.8, 0, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            <span className="text-white text-sm font-medium group-hover:text-green-100 transition-colors">
              Available for hire
            </span>
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6">
          <div className="space-y-3">
            {NAV.map((nav, i) => (
              <motion.div
                key={nav.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.5, duration: 0.6 }}
              >
                <Link
                  to={nav.path}
                  onClick={handleNavClick}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl font-medium transition-all relative overflow-hidden group ${
                    isActive(nav.path)
                      ? 'bg-gradient-to-r from-brand/20 to-brand-dark/20 text-brand border border-brand/30 shadow-lg' 
                      : 'text-site-light/70 hover:text-site-light hover:bg-site-light/5'
                  }`}
                >
                  <motion.span 
                    className="text-xl"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {nav.icon}
                  </motion.span>
                  <span>{nav.label}</span>
                  
                  {isActive(nav.path) && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-brand rounded-r"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </nav>

        {/* Social Links */}
        <div className="p-6 pt-8 border-t border-brand/10">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-site-mid/60 to-site-dark/80 border border-brand/20 flex items-center justify-center text-lg text-site-light/70 hover:text-brand hover:border-brand/40 transition-all"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 1.0, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -2,
                  boxShadow: '0 5px 15px rgba(255, 60, 60, 0.3)',
                  transition: { duration: 0.2 }
                }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
          <motion.p 
            className="text-xs text-site-light/40 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            © {new Date().getFullYear()} Dinesh Poudel
          </motion.p>
        </div>
      </motion.aside>

      {/* Mobile Top Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`lg:hidden fixed top-0 w-full z-30 transition-all duration-500 ${
          scrolled 
            ? 'navbar-blur shadow-2xl border-b border-brand/20' 
            : 'backdrop-blur bg-black/60'
        } border-b border-gray-800`}
      >
        <div className="container flex items-center justify-between" style={{ 
          paddingTop: 'clamp(12px, 3vh, 24px)', 
          paddingBottom: 'clamp(12px, 3vh, 24px)' 
        }}>
          <motion.button 
            onClick={() => navigate('/Home')} 
            className="text-lg sm:text-xl md:text-2xl font-extrabold text-brand hover:text-brand-dark transition-colors"
            aria-label="Go to home page"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            dinesh-poudel.com.np
          </motion.button>

          <motion.button 
            className="p-2 text-brand hover:text-brand-dark transition-colors" 
            onClick={() => setOpen((s) => !s)} 
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {open ? <HiX size={24} /> : <HiMenu size={24} />}
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
              className="navbar-blur border-t border-brand/20"
            >
              <div className="container py-4 flex flex-col gap-3">
                {/* Available for Hire Indicator for Mobile */}
                <motion.div 
                  className="flex items-center gap-2 pb-2 border-b border-gray-800"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-green-500 rounded-full relative shadow-lg"
                    animate={{
                      y: [0, -1, 0],
                      boxShadow: [
                        '0 0 3px rgba(34, 197, 94, 0.4)',
                        '0 0 5px rgba(34, 197, 94, 0.6)',
                        '0 0 3px rgba(34, 197, 94, 0.4)'
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{
                      scale: 1.2,
                      boxShadow: '0 0 8px rgba(34, 197, 94, 0.8)',
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-green-500 rounded-full"
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.8, 0, 0.8]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  <span className="text-white text-sm font-medium">
                    Available for hire
                  </span>
                </motion.div>

                {NAV.map((n, i) => (
                  <motion.div
                    key={n.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={n.path}
                      onClick={handleNavClick}
                      className={`text-left block py-2 hover:text-brand transition-colors font-medium border-b border-gray-800 last:border-0 ${
                        isActive(n.path) ? 'text-brand font-semibold' : ''
                      }`}
                    >
                      {n.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}