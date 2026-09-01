'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/lib/use-reduced-motion'
import { useTheme } from './theme-provider'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  hue: number
}

const PALETTE_DARK = [
  { hue: 230, sat: 90, light: 70 }, // blue
  { hue: 250, sat: 88, light: 70 }, // violet
  { hue: 187, sat: 92, light: 66 }, // cyan
  { hue: 292, sat: 76, light: 68 }, // magenta
]

const PALETTE_LIGHT = [
  { hue: 230, sat: 70, light: 45 },
  { hue: 250, sat: 65, light: 45 },
  { hue: 187, sat: 80, light: 40 },
  { hue: 292, sat: 60, light: 45 },
]

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduceMotion = useReducedMotion()
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const isDark = theme === 'dark'
    const palette = isDark ? PALETTE_DARK : PALETTE_LIGHT
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const isTouch = !isFinePointer
    const DPR = Math.min(window.devicePixelRatio || 1, 2)

    let width = window.innerWidth
    let height = window.innerHeight
    let particles: Particle[] = []
    let raf = 0
    let running = true
    let lastTime = 0
    const mouse = { x: -9999, y: -9999, active: false }

    // Cap particle count based on screen size & device
    const maxParticles = () => {
      const area = width * height
      if (isTouch) return 40
      if (area > 1600 * 1000) return 90
      if (area > 900 * 700) return 70
      return 55
    }

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * DPR)
      canvas.height = Math.floor(height * DPR)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      seed()
    }

    const createParticle = (): Particle => {
      const color = palette[Math.floor(Math.random() * palette.length)]
      const size = 0.6 + Math.random() * 1.8
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size,
        opacity: 0.25 + Math.random() * 0.45,
        hue: color.hue,
      }
    }

    const seed = () => {
      const count = reduceMotion ? 0 : maxParticles()
      particles = Array.from({ length: count }, createParticle)
    }

    const linkDistance = 110
    const linkColor = (alpha: number) =>
      isDark
        ? `rgba(139,150,181,${alpha})`
        : `rgba(90,100,130,${alpha})`

    const draw = (time: number) => {
      if (!running) return
      const delta = Math.min(time - lastTime, 50) / 16.67
      lastTime = time

      ctx.clearRect(0, 0, width, height)

      // Links between nearby particles
      const max = Math.min(particles.length, 80)
      for (let i = 0; i < max; i++) {
        const p = particles[i]
        for (let j = i + 1; j < max; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = dx * dx + dy * dy
          if (dist < linkDistance * linkDistance) {
            const alpha = (1 - Math.sqrt(dist) / linkDistance) * 0.16
            ctx.strokeStyle = linkColor(alpha)
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      }

      // Particles + mouse interaction
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Mouse repulsion (soft)
        if (mouse.active) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist2 = dx * dx + dy * dy
          const radius = 120
          if (dist2 < radius * radius && dist2 > 0.01) {
            const dist = Math.sqrt(dist2)
            const force = ((radius - dist) / radius) * 0.6
            p.vx += (dx / dist) * force
            p.vy += (dy / dist) * force
          }
        }

        p.x += p.vx * delta
        p.y += p.vy * delta

        // Gentle drift
        p.vx *= 0.995
        p.vy *= 0.995
        p.vx += (Math.random() - 0.5) * 0.01
        p.vy += (Math.random() - 0.5) * 0.01

        // Wrap edges
        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20

        ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, ${p.opacity})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    const onPointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }
    const onPointerLeave = () => {
      mouse.active = false
      mouse.x = -9999
      mouse.y = -9999
    }
    const onVisibility = () => {
      running = document.visibilityState === 'visible'
      if (running) {
        lastTime = 0
        raf = requestAnimationFrame(draw)
      } else {
        cancelAnimationFrame(raf)
      }
    }

    resize()
    window.addEventListener('resize', resize, { passive: true })
    window.addEventListener('visibilitychange', onVisibility)
    if (isFinePointer) {
      window.addEventListener('pointermove', onPointerMove, { passive: true })
      document.addEventListener('pointerleave', onPointerLeave)
    }

    if (!reduceMotion) {
      lastTime = 0
      raf = requestAnimationFrame(draw)
    } else {
      // Static single frame for reduced motion
      ctx.clearRect(0, 0, width, height)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('visibilitychange', onVisibility)
      if (isFinePointer) {
        window.removeEventListener('pointermove', onPointerMove)
        document.removeEventListener('pointerleave', onPointerLeave)
      }
    }
  }, [reduceMotion, theme])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-[5]"
      aria-hidden="true"
    />
  )
}
