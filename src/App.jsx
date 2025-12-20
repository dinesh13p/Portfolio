import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

// Lazy load route components to reduce initial bundle size
const Hero = React.lazy(() => import('./components/Hero'))
const About = React.lazy(() => import('./components/About'))
const Showcase = React.lazy(() => import('./components/Showcase'))
const Resume = React.lazy(() => import('./components/Resume'))
const Contact = React.lazy(() => import('./components/Contact'))

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-full">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      className="w-8 h-8 border-2 border-brand border-t-transparent rounded-full"
    />
  </div>
)

function AppContent() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex bg-site-dark text-site-light">
      <Header />

      <main className="flex-1 lg:ml-80 lg:overflow-hidden">
        <Suspense fallback={<LoadingFallback />}>
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
                  <Route path="*" element={<NotFound />} />
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
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </div>
        </Suspense>
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