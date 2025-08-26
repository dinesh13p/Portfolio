import React, { useEffect, useRef } from 'react' 
import { motion } from 'framer-motion'
import profileImage from '../assets/profile.jpg'

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
    <div className="relative flex items-center justify-center min-h-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <NetworkBackground />
      </div>
      
      <div className="relative z-10 container grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.6 }} 
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Hi, I'm <span className="text-brand">Dinesh Poudel</span>
          </motion.h1>

          <motion.p 
            initial={{ y: 12, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2, duration: 0.6 }} 
            className="mt-4 text-lg md:text-xl max-w-xl text-gray-300"
          >
            I build responsive web applications using <strong className="text-white">React</strong> and modern tools. 
            Currently pursuing studies in backend development and system design, with emphasis on Java and Spring Boot.
          </motion.p>

          <motion.div 
            initial={{ y: 12, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 flex gap-4"
          >
            <motion.button 
              onClick={() => setActiveTab('projects')}
              className="px-5 py-3 rounded-full btn-primary text-white font-semibold"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button 
              onClick={() => setActiveTab('contact')}
              className="px-5 py-3 rounded-full btn-secondary"
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
          className="flex justify-center"
        >
          <motion.div 
            className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 relative z-10"
            whileHover={{ scale: 1.05, borderColor: 'rgba(255, 60, 60, 0.3)' }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={profileImage} 
              alt="Dinesh Poudel" 
              className="object-cover w-full h-full"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9maWxlIEltYWdlPC90ZXh0Pjwvc3ZnPg=='
                console.log('Profile image failed to load, using placeholder')
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}