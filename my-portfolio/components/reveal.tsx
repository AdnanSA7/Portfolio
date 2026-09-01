'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/lib/use-reduced-motion'
import type { ReactNode } from 'react'

export function SectionLabel({ children, index }: { children: ReactNode; index?: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      {index && (
        <span className="font-mono text-xs text-aurora-indigo">{index}</span>
      )}
      <span className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
        {children}
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" aria-hidden="true" />
    </div>
  )
}

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 28, filter: 'blur(6px)' }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
