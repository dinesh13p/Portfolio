import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'
import { SiX } from 'react-icons/si'

export default function Footer(){
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/dinesh13p', name: 'Github' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/dinesh-poudel-3a4b10331/', name: 'LinkedIn' },
    { icon: FaInstagram, url: 'https://www.instagram.com/_d_nesh_/', name: 'Instagram' },
    { icon: SiX, url: 'https://x.com/Dinesh2061', name: 'X (Formerly Twitter)' },
    { icon: FaFacebook, url: 'https://www.facebook.com/dinesh.poudel.319452', name: 'Facebook' }
  ]

  return (
    <motion.footer 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed bottom-0 w-full backdrop-blur bg-black/60 border-t border-gray-800 z-20"
      style={{ 
        paddingTop: 'clamp(12px, 3vh, 24px)', 
        paddingBottom: 'clamp(12px, 3vh, 24px)' 
      }}
    >
      <div className="container flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
        <motion.div 
          className="text-xs sm:text-sm text-gray-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          © {new Date().getFullYear()} Dinesh Poudel
        </motion.div>
        <motion.div 
          className="flex gap-4 md:gap-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a 
              key={social.name}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={social.name}
              className="text-xl sm:text-2xl hover:text-brand transition-all duration-300"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: index * 0.1 + 0.6, 
                duration: 0.5,
                type: "spring",
                stiffness: 150
              }}
              whileHover={{ 
                scale: window.innerWidth <= 768 ? 1.1 : 1.2, 
                y: window.innerWidth <= 768 ? -1 : -3,
                color: '#ff3c3c',
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  )
}