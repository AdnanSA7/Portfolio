'use client'

import { useRef, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/lib/use-reduced-motion'

interface MagneticProps {
  children: ReactNode
  strength?: number
  className?: string
}

export function Magnetic({ children, strength = 0.3, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const onMouseMove = (e: React.MouseEvent) => {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    ref.current.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`
  }

  const onMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'translate(0px, 0px)'
    }
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{ transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)' }}
    >
      {children}
    </motion.div>
  )
}
