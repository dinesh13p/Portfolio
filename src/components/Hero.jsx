import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import profileImage from '../assets/profile.jpg'

// Typewriter Effect Component
const TypewriterText = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = [
    'Student',
    'Full Stack Developer',
    'IoT and Robotics Enthusiast',
    'UI/UX Enthusiast'
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex]
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts])

  return (
    <div className="h-10 md:h-12 flex items-center justify-center md:justify-start">
      <span className="text-white font-semibold text-lg sm:text-xl md:text-2xl lg:text-2xl">
        {currentText}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  )
}

// Animated Network Background Component
const NetworkBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []
    let mouse = { x: 0, y: 0, isMoving: false }
    let clickZones = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      particles = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 12000)
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
          originalVx: (Math.random() - 0.5) * 1.2,
          originalVy: (Math.random() - 0.5) * 1.2,
          radius: Math.random() * 2 + 1,
          isActive: true,
          repositionTimer: 0
        })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const BASE_R = 120
      ctx.lineWidth = 1

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          let alphaBase = 0
          if (dist < BASE_R) {
            alphaBase = ((BASE_R - dist) / BASE_R) * 0.4
          }

          let alphaBoost = 0
          for (let z = 0; z < clickZones.length; z++) {
            const zone = clickZones[z]
            const zx = zone.x, zy = zone.y
            const d1 = Math.hypot(p1.x - zx, p1.y - zy)
            const d2 = Math.hypot(p2.x - zx, p2.y - zy)

            if (Math.min(d1, d2) <= zone.radius) {
              const life = 1 - zone.age / zone.maxAge
              const effectiveR = BASE_R + zone.boost * life
              if (dist < effectiveR) {
                const localAlpha = ((effectiveR - dist) / effectiveR) * 0.4 * life
                if (localAlpha > alphaBoost) alphaBoost = localAlpha
              }
            }
          }

          const alpha = Math.max(alphaBase, alphaBoost)
          if (alpha > 0) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      if (mouse.isMoving) {
        for (let particle of particles) {
          const dx = particle.x - mouse.x
          const dy = particle.y - mouse.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 150) {
            const opacity = (150 - distance) / 150 * 0.6
            ctx.strokeStyle = `rgba(255, 60, 60, ${opacity})`
            ctx.lineWidth = 2
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
          }
        }
      }

      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
      for (let particle of particles) {
        if (particle.isActive) {
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    const updateParticles = () => {
      for (let particle of particles) {
        if (mouse.isMoving) {
          const dx = mouse.x - particle.x
          const dy = mouse.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 200) {
            const force = (200 - distance) / 200 * 0.02
            particle.vx += (dx / distance) * force
            particle.vy += (dy / distance) * force
          }
        }

        particle.x += particle.vx
        particle.y += particle.vy
        
        const margin = 50
        
        if (particle.x < -margin) {
          particle.x = canvas.width + margin
          particle.vx = Math.abs(particle.vx) * -0.5
        } else if (particle.x > canvas.width + margin) {
          particle.x = -margin
          particle.vx = Math.abs(particle.vx) * 0.5
        }
        
        if (particle.y < -margin) {
          particle.y = canvas.height + margin
          particle.vy = Math.abs(particle.vy) * -0.5
        } else if (particle.y > canvas.height + margin) {
          particle.y = -margin
          particle.vy = Math.abs(particle.vy) * 0.5
        }

        const dampening = 0.995
        const restoration = 0.005
        
        particle.vx = particle.vx * dampening + particle.originalVx * restoration
        particle.vy = particle.vy * dampening + particle.originalVy * restoration

        if (Math.random() < 0.001) {
          particle.vx += (Math.random() - 0.5) * 0.3
          particle.vy += (Math.random() - 0.5) * 0.3
        }

        const isNearEdge = particle.x < 100 || particle.x > canvas.width - 100 || 
                          particle.y < 100 || particle.y > canvas.height - 100
        
        if (isNearEdge) {
          particle.repositionTimer++
          if (particle.repositionTimer > 300) {
            particle.x = canvas.width * 0.2 + Math.random() * canvas.width * 0.6
            particle.y = canvas.height * 0.2 + Math.random() * canvas.height * 0.6
            particle.vx = (Math.random() - 0.5) * 1.2
            particle.vy = (Math.random() - 0.5) * 1.2
            particle.originalVx = particle.vx
            particle.originalVy = particle.vy
            particle.repositionTimer = 0
          }
        } else {
          particle.repositionTimer = Math.max(0, particle.repositionTimer - 1)
        }
      }

      clickZones = clickZones.filter(zone => {
        zone.age++
        return zone.age < zone.maxAge
      })

      const minParticles = Math.floor((canvas.width * canvas.height) / 15000)
      if (particles.length < minParticles) {
        for (let i = particles.length; i < minParticles; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 1.2,
            vy: (Math.random() - 0.5) * 1.2,
            originalVx: (Math.random() - 0.5) * 1.2,
            originalVy: (Math.random() - 0.5) * 1.2,
            radius: Math.random() * 2 + 1,
            isActive: true,
            repositionTimer: 0
          })
        }
      }
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.isMoving = true
      
      clearTimeout(mouse.timeout)
      mouse.timeout = setTimeout(() => {
        mouse.isMoving = false
      }, 100)
    }

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const clickY = e.clientY - rect.top

      clickZones.push({
        x: clickX,
        y: clickY,
        age: 0,
        maxAge: 180,
        radius: 220,
        boost: 140
      })
    }

    const animate = () => {
      updateParticles()
      drawParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createParticles()
    animate()

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('click', handleClick)
    window.addEventListener('resize', handleResize)

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('click', handleClick)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      clearTimeout(mouse.timeout)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full cursor-crosshair"
      style={{ background: 'transparent' }}
    />
  )
}

export default function Hero({ setActiveTab }) {
  return (
    <div className="relative flex items-center justify-center min-h-full overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <NetworkBackground />
      </div>
      
      <div className="relative z-10 container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.6 }} 
            className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
          >
            Hi, it's me <span className="text-brand">Dinesh Poudel</span>
          </motion.h1>

          <motion.div 
            initial={{ y: 12, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2, duration: 0.6 }} 
            className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-xl max-w-xl text-gray-300 mx-auto md:mx-0"
          >
            <TypewriterText />
          </motion.div>

          <motion.div 
            initial={{ y: 12, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start max-w-md mx-auto md:mx-0"
          >
            <motion.button 
              onClick={() => setActiveTab('projects')}
              className="px-5 py-3 rounded-full btn-primary text-white font-semibold text-base md:text-base whitespace-nowrap"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button 
              onClick={() => setActiveTab('contact')}
              className="px-5 py-3 rounded-full btn-secondary text-base md:text-base whitespace-nowrap"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ scale: 0.8, opacity: 0, x: 50 }} 
          animate={{ scale: 1, opacity: 1, x: 0 }} 
          transition={{ delay: 0.3, duration: 0.8 }} 
          className="order-1 md:order-2 flex justify-center"
        >
          <motion.div 
            className="w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-88 md:h-88 lg:w-104 lg:h-104 xl:w-[28rem] xl:h-[28rem] rounded-full overflow-hidden border-4 border-white/10 relative z-10 flex-shrink-0"
            whileHover={{ scale: 1.05, borderColor: 'rgba(255, 60, 60, 0.3)' }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={profileImage} 
              alt="Dinesh Poudel" 
              className="object-cover w-full h-full"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZjNjM2M7c3RvcC1vcGFjaXR5OjAuOCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZTMzNjM2O3N0b3Atb3BhY2l0eToxIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9InVybCgjZ3JhZCkiLz4KICA8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxNjAiIHI9IjYwIiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45Ii8+CiAgPGVsbGlwc2UgY3g9IjIwMCIgY3k9IjI4MCIgcng9IjgwIiByeT0iNjAiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjkiLz4KICA8dGV4dCB4PSI1MCUiIHk9IjM0MCIgZm9udC1mYW1pbHk9IkludGVyLCBBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjYwMCI+RGluZXNoIFBvdWRlbDwvdGV4dD4KPC9zdmc+'
                console.log('Profile image failed to load, using placeholder')
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}