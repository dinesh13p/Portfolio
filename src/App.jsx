import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Showcase from './components/Showcase'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function AppContent() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex bg-site-dark text-site-light">
      <Header />
      
      <main className="flex-1 lg:ml-80 lg:overflow-hidden">
        <div className="lg:hidden h-screen flex flex-col overflow-hidden" style={{ 
          paddingTop: 'clamp(64px, 15vh, 80px)', 
          paddingBottom: 'clamp(64px, 12vh, 80px)' 
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <Routes location={location}>
                <Route path="/Home" element={<Hero />} />
                <Route path="/About" element={<About />} />
                <Route path="/Showcase" element={<Showcase />} />
                <Route path="/Showcase/Projects" element={<Showcase />} />
                <Route path="/Showcase/Achievements" element={<Showcase />} />
                <Route path="/Resume" element={<Resume />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/" element={<Hero />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
          
          <Footer />
        </div>

        <div className="hidden lg:block h-screen overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full"
              style={{ 
                paddingTop: 'clamp(16px, 4vh, 32px)', 
                paddingBottom: 'clamp(16px, 4vh, 32px)' 
              }}
            >
              <Routes location={location}>
                <Route path="/Home" element={<Hero />} />
                <Route path="/About" element={<About />} />
                <Route path="/Showcase" element={<Showcase />} />
                <Route path="/Showcase/Projects" element={<Showcase />} />
                <Route path="/Showcase/Achievements" element={<Showcase />} />
                <Route path="/Resume" element={<Resume />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/" element={<Hero />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  )
}