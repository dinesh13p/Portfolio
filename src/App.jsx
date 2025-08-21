import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
      default:
        return <Hero setActiveTab={setActiveTab} />
    }
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-site-dark text-site-light">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 pt-20 pb-20 overflow-hidden">
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
      </main>
      
      <Footer />
    </div>
  )
}