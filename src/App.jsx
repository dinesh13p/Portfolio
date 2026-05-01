import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

const Hero = React.lazy(() => import('./components/Hero'))
const About = React.lazy(() => import('./components/About'))
const Projects = React.lazy(() => import('./components/Projects'))
const Showcase = React.lazy(() => import('./components/Showcase'))
const Resume = React.lazy(() => import('./components/Resume'))
const Contact = React.lazy(() => import('./components/Contact'))

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-full">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      className="w-8 h-8 border-2 border-brand border-t-transparent rounded-full"
    />
  </div>
)

const pageTransition = {
  initial: { opacity: 0, x: 12 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -12 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
}

function AppContent() {
  const location = useLocation()
  const navigate = useNavigate()

  function SwipeWrapper({ children, onSwipeLeft, onSwipeRight }) {
    const touchStartX = React.useRef(null)

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e) => {
      if (touchStartX.current == null) return
      const endX = e.changedTouches[0].clientX
      const diff = touchStartX.current - endX
      const threshold = 50
      if (diff > threshold && typeof onSwipeLeft === 'function') {
        onSwipeLeft()
      } else if (diff < -threshold && typeof onSwipeRight === 'function') {
        onSwipeRight()
      }
      touchStartX.current = null
    }

    return (
      <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} className="h-full">
        {children}
      </div>
    )
  }

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
              initial={pageTransition.initial}
              animate={pageTransition.animate}
              exit={pageTransition.exit}
              transition={pageTransition.transition}
              className="h-full page-transition"
            >
              <Suspense fallback={<LoadingFallback />}>
                <Routes location={location}>
                  <Route path="/Home" element={<Hero />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Showcase" element={<Showcase />} />
                  <Route
                    path="/Projects"
                    element={
                      <SwipeWrapper
                        onSwipeLeft={() => navigate('/Showcase')}
                        onSwipeRight={() => navigate('/About')}
                      >
                        <Projects />
                      </SwipeWrapper>
                    }
                  />
                  <Route path="/Resume" element={<Resume />} />
                  <Route path="/Contact" element={<Contact />} />
                  <Route path="/" element={<Hero />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </motion.div>
          </AnimatePresence>

          <Footer />
        </div>

        <div className="hidden lg:block h-screen overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={pageTransition.initial}
              animate={pageTransition.animate}
              exit={pageTransition.exit}
              transition={pageTransition.transition}
              className="h-full page-transition"
              style={{
                paddingTop: 'clamp(16px, 4vh, 32px)',
                paddingBottom: 'clamp(16px, 4vh, 32px)'
              }}
            >
              <Suspense fallback={<LoadingFallback />}>
                <Routes location={location}>
                  <Route path="/Home" element={<Hero />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Showcase" element={<Showcase />} />
                  <Route
                    path="/Projects"
                    element={
                      <SwipeWrapper
                        onSwipeLeft={() => navigate('/Showcase')}
                        onSwipeRight={() => navigate('/About')}
                      >
                        <Projects />
                      </SwipeWrapper>
                    }
                  />
                  <Route path="/Resume" element={<Resume />} />
                  <Route path="/Contact" element={<Contact />} />
                  <Route path="/" element={<Hero />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
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