'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { personalInfo, socialLinks } from '@/config'

const iconMap = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaTwitter: FaTwitter,
  Mail: Mail
}

export function HeroSection() {
  const particleCanvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = particleCanvas.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let particles: { x: number; y: number; vx: number; vy: number; size: number }[] = []
    let mouseX = 0
    let mouseY = 0
    let animationId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      const particleCount = 80
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1
        })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      const isDark = document.documentElement.classList.contains('dark')
      
      ctx.fillStyle = isDark ? 'rgba(10, 10, 10, 0.05)' : 'rgba(248, 250, 252, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        
        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 150) {
          const angle = Math.atan2(dy, dx)
          const force = (150 - distance) / 150 * 0.2
          p.vx -= Math.cos(angle) * force
          p.vy -= Math.sin(angle) * force
        }
        
        p.vx *= 0.99
        p.vy *= 0.99
        p.x += p.vx
        p.y += p.vy
        
        const padding = 50
        if (p.x < -padding) p.x = canvas.width + padding
        if (p.x > canvas.width + padding) p.x = -padding
        if (p.y < -padding) p.y = canvas.height + padding
        if (p.y > canvas.height + padding) p.y = -padding
        
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3)
        if (isDark) {
          gradient.addColorStop(0, 'rgba(129, 140, 248, 0.6)')
          gradient.addColorStop(1, 'transparent')
        } else {
          gradient.addColorStop(0, 'rgba(99, 102, 241, 0.5)')
          gradient.addColorStop(1, 'transparent')
        }
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2)
        ctx.fill()
      }
      
      animationId = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  const socialLinksArray = Object.entries(socialLinks).map(([key, social]) => ({
    ...social,
    key
  }))

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <canvas
        ref={particleCanvas}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-1.5 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm text-sm font-medium border border-white/20">
              {personalInfo.heroBadge}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4"
          >
            {personalInfo.title}
          </motion.div>

          {/* Short Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6 px-4"
          >
            {personalInfo.bio.substring(0, 120)}...
          </motion.p>

          {/* Quick Stats - Clean and minimal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-8 mb-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">{personalInfo.yearsOfExperience}+</div>
              <div className="text-xs text-muted-foreground">Years</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">{personalInfo.projectsCompleted}+</div>
              <div className="text-xs text-muted-foreground">Projects</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">{personalInfo.technologies}+</div>
              <div className="text-xs text-muted-foreground">Technologies</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 justify-center mb-8"
          >
            <Button 
              size="default" 
              className="bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Work <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="default"
              asChild
            >
              <a href={personalInfo.resumeUrl} download>
                Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links - Smaller */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-5 justify-center"
          >
            {socialLinksArray.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap]
              return (
                <motion.a
                  key={social.key}
                  whileHover={{ y: -3 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-500 dark:text-gray-400 ${social.color} transition-all`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}