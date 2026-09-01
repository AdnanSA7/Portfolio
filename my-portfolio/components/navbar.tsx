'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeToggle } from './theme-toggle'
import { personalInfo } from '@/config'
import { useReducedMotion } from '@/lib/use-reduced-motion'
import { ArrowUpRight } from 'lucide-react'
import { Magnetic } from './magnetic'

const navItems = [
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Journey', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href.slice(1)))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
    }
  }

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`glass flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-2 transition-all duration-300 ${
          isScrolled ? 'shadow-glass-lg' : 'shadow-glass'
        }`}
        aria-label="Primary"
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
            setIsMobileMenuOpen(false)
          }}
          className="flex items-center gap-2 font-mono text-sm font-medium tracking-tight text-foreground"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-aurora-blue to-aurora-violet text-[10px] font-bold text-white">
            {personalInfo.name.charAt(0)}
          </span>
          <span className="hidden sm:inline">{personalInfo.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = activeSection === item.href
            return (
              <Magnetic key={item.name} strength={0.15}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                    active
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.name}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-lg bg-white/10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </Magnetic>
            )
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-aurora-blue to-aurora-violet px-3.5 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            Resume
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-white/10"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative h-3.5 w-5">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="absolute left-0 top-0 h-0.5 w-5 bg-current"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="absolute left-0 top-1.5 h-0.5 w-5 bg-current"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="absolute left-0 top-3 h-0.5 w-5 bg-current"
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass-strong absolute left-4 right-4 top-[4.5rem] overflow-hidden rounded-2xl shadow-glass-lg md:hidden"
          >
            <div className="flex flex-col gap-1 p-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className="rounded-lg px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
                >
                  {item.name}
                </a>
              ))}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-aurora-blue to-aurora-violet px-3.5 py-3 text-sm font-medium text-white"
              >
                Resume
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
