'use client'

import { createContext, useCallback, useContext, useLayoutEffect, useSyncExternalStore } from 'react'
import { useHydrated } from '@/lib/use-hydrated'

type Theme = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
const THEME_EVENT = 'portfolio-theme-change'

function getThemeSnapshot(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem('theme')
  return stored === 'light' ? 'light' : 'dark'
}

function subscribeTheme(callback: () => void) {
  if (typeof window === 'undefined') return () => {}
  window.addEventListener(THEME_EVENT, callback)
  return () => window.removeEventListener(THEME_EVENT, callback)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const hydrated = useHydrated()
  // Read the effective theme from the external store. While not yet hydrated
  // this is always 'dark' so the client's first paint matches the server.
  const rawTheme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, () => 'dark')
  const theme: Theme = hydrated ? (rawTheme === 'light' ? 'light' : 'dark') : 'dark'

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

  const toggleTheme = useCallback(() => {
    const current = window.localStorage.getItem('theme')
    const next = current === 'light' ? 'dark' : 'light'
    window.localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('light', next === 'light')
    window.dispatchEvent(new Event(THEME_EVENT))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
