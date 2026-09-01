'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { useReducedMotion } from '@/lib/use-reduced-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  const reduceMotion = useReducedMotion()

  if (reduceMotion) return null

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-aurora-blue via-aurora-violet to-aurora-cyan"
      aria-hidden="true"
    />
  )
}
