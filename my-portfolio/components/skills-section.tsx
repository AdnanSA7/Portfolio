'use client'

import { skillGroups } from '@/config'
import { Reveal, SectionLabel } from './reveal'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/lib/use-reduced-motion'
import {
  Server, Monitor, Smartphone, Database, Wrench,
} from 'lucide-react'

const groupIcons: Record<string, typeof Server> = {
  Core: Wrench,
  Frontend: Monitor,
  Mobile: Smartphone,
  'Data & Storage': Database,
  'Backend & Tools': Server,
}

const barColors: Record<string, string> = {
  Core: 'from-aurora-blue to-aurora-indigo',
  Frontend: 'from-aurora-indigo to-aurora-violet',
  Mobile: 'from-aurora-cyan to-aurora-blue',
  'Data & Storage': 'from-aurora-violet to-aurora-magenta',
  'Backend & Tools': 'from-aurora-magenta to-aurora-blue',
}

export function SkillsSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="skills" className="relative border-t border-border px-6 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aurora-violet/40 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="04">Capabilities</SectionLabel>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            The tools I work <span className="gradient-text">with</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => {
            const Icon = groupIcons[group.label] || Server
            const barColor = barColors[group.label] || 'from-aurora-blue to-aurora-violet'
            return (
              <Reveal
                key={group.label}
                delay={0.06 * groupIndex}
                className="group"
              >
                <div className="glass h-full rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-glass-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="neumorph flex h-10 w-10 items-center justify-center text-aurora-indigo">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-foreground">{group.label}</h3>
                        <p className="text-xs text-muted-foreground">{group.description}</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      {group.skills.length}
                    </span>
                  </div>

                  <div className="mt-6 space-y-4">
                    {group.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="mb-1.5 flex items-center justify-between text-sm">
                          <span className="text-foreground">{skill.name}</span>
                          <span className="font-mono text-xs tabular-nums text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted/60">
                          <motion.div
                            initial={reduceMotion ? false : { width: 0 }}
                            whileInView={{
                              width: `${skill.level}%`,
                              transition: {
                                duration: 0.9,
                                delay: 0.15 + skillIndex * 0.06,
                                ease: [0.22, 1, 0.36, 1],
                              },
                            }}
                            viewport={{ once: true }}
                            className={`h-full rounded-full bg-gradient-to-r ${barColor}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
