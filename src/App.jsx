import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portal from './components/Portal'

export default function App() {
  const [activeTab, setActiveTab] = useState('home')

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Hero setActiveTab={setActiveTab} />
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      case 'resume':
        return <Resume />
      case 'contact':
        return <Contact />
      case 'portal':
        return <Portal />
      default:
        return <Hero setActiveTab={setActiveTab} />
    }
  }

  return (
    <div className="min-h-screen flex bg-site-dark text-site-light">
      {/* Vertical Sidebar for Desktop / Top Header for Mobile */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Main Content */}
      <main className="flex-1 lg:ml-80 lg:overflow-hidden">
        {/* Mobile: Account for top header height and include Footer */}
        <div className="lg:hidden h-screen flex flex-col overflow-hidden" style={{ 
          paddingTop: 'clamp(64px, 15vh, 80px)', 
          paddingBottom: 'clamp(64px, 12vh, 80px)' 
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
          
          {/* Footer only for mobile */}
          <Footer />
        </div>

        {/* Desktop: Full height content */}
        <div className="hidden lg:block h-screen overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
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
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}