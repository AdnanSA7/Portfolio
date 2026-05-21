'use client'

import { useTheme } from './theme-provider'
import { motion } from 'framer-motion'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-0.5 shadow-lg hover:shadow-xl transition-all duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{ x: theme === 'light' ? 0 : 28 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="relative w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center"
      >
        {theme === 'light' ? (
          <svg className="w-3.5 h-3.5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </motion.div>
    </motion.button>
  )
}