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
    // NEW: zones that temporarily boost the normal white-line connection radius
    let clickZones = []  // { x, y, age, maxAge, radius, boost }

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
          radius: Math.random() * 2 + 1
        })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // --- Normal moving connections (unchanged look) ---
      const BASE_R = 120 // original connection radius
      ctx.lineWidth = 1

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          // Base alpha using the original rule
          let alphaBase = 0
          if (dist < BASE_R) {
            alphaBase = ((BASE_R - dist) / BASE_R) * 0.4
          }

          // Extra alpha contributed by any active click zone nearby
          // This makes lines appear "like normal ones" but only around clicks, and they fade out.
          let alphaBoost = 0
          for (let z = 0; z < clickZones.length; z++) {
            const zone = clickZones[z]
            const zx = zone.x, zy = zone.y
            const d1 = Math.hypot(p1.x - zx, p1.y - zy)
            const d2 = Math.hypot(p2.x - zx, p2.y - zy)

            // Only affect pairs that are inside the zone's influence
            if (Math.min(d1, d2) <= zone.radius) {
              const life = 1 - zone.age / zone.maxAge // 1 -> 0 as it ages (fade)
              const effectiveR = BASE_R + zone.boost * life // temporarily larger radius
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

      // Mouse connections (kept as-is)
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

      // Draw particles (unchanged)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
      for (let particle of particles) {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const updateParticles = () => {
      for (let particle of particles) {
        // Mouse magnetic effect (unchanged)
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

        // Apply velocity
        particle.x += particle.vx
        particle.y += particle.vy
        
        // Boundary collisions
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8
          particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8
          particle.y = Math.max(0, Math.min(canvas.height, particle.y))
        }

        // Damping - gradually return to original velocity
        particle.vx = particle.vx * 0.99 + particle.originalVx * 0.01
        particle.vy = particle.vy * 0.99 + particle.originalVy * 0.01
      }

      // Age out click zones (this controls fade-out of extra lines)
      clickZones = clickZones.filter(zone => {
        zone.age++
        return zone.age < zone.maxAge
      })
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

    // CLICK now: add a fading influence zone (NO red starburst, NO permanent lines)
    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const clickY = e.clientY - rect.top

      // Each click spawns a zone where the normal white-line radius is boosted,
      // so you see *the same* white lines appear there, then fade away.
      clickZones.push({
        x: clickX,
        y: clickY,
        age: 0,
        maxAge: 180,  // ~3 seconds at 60fps; increase for longer
        radius: 220,  // area around click affected
        boost: 140    // how much to expand the connection radius temporarily
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
      {/* Animated Network Background */}
      <div className="absolute inset-0 z-0">
        <NetworkBackground />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container grid md:grid-cols-2 gap-8 items-center">
        <div>
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
            <button 
              onClick={() => setActiveTab('projects')}
              className="px-5 py-3 rounded-full bg-brand text-white font-semibold hover:bg-brand-dark transition"
            >
              View My Work
            </button>
            <button 
              onClick={() => setActiveTab('contact')}
              className="px-5 py-3 rounded-full border border-gray-600 hover:border-brand transition"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ delay: 0.3, duration: 0.6 }} 
          className="flex justify-center"
        >
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 relative z-10">
            <img 
              src={profileImage} 
              alt="Dinesh Poudel" 
              className="object-cover w-full h-full"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9maWxlIEltYWdlPC90ZXh0Pjwvc3ZnPg=='
                console.log('Profile image failed to load, using placeholder')
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
