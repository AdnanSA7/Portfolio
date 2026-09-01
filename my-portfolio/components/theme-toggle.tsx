'use client'

import { useTheme } from './theme-provider'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/lib/use-reduced-motion'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const reduceMotion = useReducedMotion()

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={reduceMotion ? undefined : { scale: 0.9 }}
      className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </motion.button>
  )
}
