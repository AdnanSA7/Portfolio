'use client'

import { experience } from '@/config'
import { Reveal, SectionLabel } from './reveal'
import { Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/lib/use-reduced-motion'

export function ExperienceSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="experience" className="relative border-t border-border px-6 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aurora-cyan/40 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="03">Journey</SectionLabel>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Where I&apos;ve made an <span className="gradient-text">impact</span>
          </h2>
        </Reveal>

        <div className="relative mt-14">
          {/* Glowing timeline line */}
          <div
            className="absolute left-[5px] top-0 hidden h-full w-px bg-gradient-to-b from-aurora-blue via-aurora-violet to-aurora-cyan sm:block"
            aria-hidden="true"
          />

          <div className="space-y-0">
            {experience.map((item, index) => (
              <div key={item.id} className="relative pl-8 sm:pl-12">
                {/* Glass timeline node */}
                <div
                  className="absolute left-0 top-3 flex h-[15px] w-[15px] items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="absolute h-[15px] w-[15px] rounded-full border border-aurora-indigo/40 bg-background" />
                  {index === 0 && (
                    <motion.span
                      animate={
                        reduceMotion
                          ? undefined
                          : { scale: [1, 1.6, 1], opacity: [0.8, 0, 0.8] }
                      }
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute h-[15px] w-[15px] rounded-full bg-aurora-indigo/30"
                    />
                  )}
                  <span className="relative h-[7px] w-[7px] rounded-full bg-aurora-indigo" />
                </div>

                <Reveal delay={0.05}>
                  <div className="glass ml-4 rounded-2xl p-6 transition-colors hover:border-glass-border/80 sm:ml-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="text-lg font-semibold text-foreground">
                          {item.role}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                          <Briefcase size={12} className="text-aurora-cyan" />
                          {item.type}
                        </span>
                      </div>
                    </div>

                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {item.company} · {item.period}
                    </p>

                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {item.summary}
                    </p>

                    <ul className="mt-4 max-w-2xl space-y-2">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-aurora-violet" aria-hidden="true" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-glass-border bg-white/5 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
