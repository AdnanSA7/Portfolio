'use client'

import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Sparkles, MapPin } from 'lucide-react'
import { personalInfo } from '@/config'
import { useReducedMotion } from '@/lib/use-reduced-motion'
import { Magnetic } from './magnetic'

const initials = personalInfo.name
  .split(' ')
  .map((part) => part.charAt(0))
  .join('')

export function HeroSection() {
  const reduceMotion = useReducedMotion()

  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24, filter: 'blur(8px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
          <div>
            <motion.div {...fadeUp(0)} className="mb-8 inline-flex">
              <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-muted-foreground">{personalInfo.heroBadge}</span>
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-balance text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
            >
              {personalInfo.hero.greeting}{' '}
              <span className="gradient-text">{personalInfo.hero.name}</span>.
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              {personalInfo.hero.focus}
            </motion.p>

            <motion.p
              {...fadeUp(0.3)}
              className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground"
            >
              {personalInfo.hero.description}
            </motion.p>

            <motion.div {...fadeUp(0.4)} className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault()
                    document
                      .querySelector('#projects')
                      ?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
                  }}
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-aurora-blue to-aurora-violet px-6 py-3.5 text-sm font-medium text-white shadow-glass-lg transition-shadow hover:shadow-[0_12px_40px_rgba(99,102,241,0.35)]"
                >
                  View selected work
                  <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
                </a>
              </Magnetic>
              <a
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center gap-2 rounded-full border border-glass-border px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:border-aurora-indigo/60"
              >
                Get in touch
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>

          {/* Right: profile + floating glass cards */}
          <motion.div
            {...fadeUp(0.3)}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="relative px-6 py-10">
              {/* Profile plate */}
              <div className="clay relative mx-auto flex aspect-[4/5] w-full max-w-[15rem] flex-col items-center justify-center overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-aurora-blue/25 via-transparent to-aurora-magenta/25 opacity-90" />
                <div
                  className="relative flex h-3/4 w-full items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="font-mono text-[5.5rem] font-bold leading-none gradient-text">
                    {initials}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="font-mono text-xs text-foreground">
                    {personalInfo.title}
                  </p>
                </div>
              </div>

              {/* Floating glass stat cards */}
              <motion.div
                animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="glass-strong absolute -left-4 top-16 rounded-xl px-4 py-3 text-center"
              >
                <p className="font-mono text-2xl font-semibold text-foreground">
                  {personalInfo.yearsOfExperience}+
                </p>
                <p className="text-[11px] text-muted-foreground">years</p>
              </motion.div>

              <motion.div
                animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="glass-strong absolute -right-4 top-1/2 rounded-xl px-4 py-3 text-center"
              >
                <p className="font-mono text-2xl font-semibold text-foreground">
                  {personalInfo.projectsCompleted}
                </p>
                <p className="text-[11px] text-muted-foreground">projects</p>
              </motion.div>

              <motion.div
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="glass-strong absolute bottom-10 -left-2 flex items-center gap-2 rounded-xl px-4 py-3"
              >
                <Sparkles size={16} className="text-aurora-violet" />
                <div>
                  <p className="text-sm font-medium text-foreground">Available</p>
                  <p className="text-[11px] text-muted-foreground">for work</p>
                </div>
              </motion.div>

              <motion.div
                animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                className="glass-strong absolute -bottom-2 right-8 flex items-center gap-2 rounded-xl px-4 py-3"
              >
                <MapPin size={15} className="text-aurora-cyan" />
                <span className="text-sm text-muted-foreground">{personalInfo.location}</span>
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-4 hidden items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground lg:flex"
            >
              <ArrowDown size={14} />
              Scroll
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
