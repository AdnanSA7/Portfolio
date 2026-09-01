'use client'

import { personalInfo } from '@/config'
import { Reveal, SectionLabel } from './reveal'
import { BookOpen, Target, Compass } from 'lucide-react'

export function LearningSection() {
  return (
    <section className="relative border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="05">Growth</SectionLabel>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Always in the process of <span className="gradient-text">becoming</span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Engineering is a craft that rewards curiosity. I&apos;m steadily deepening my
            skills in the areas that matter most for building large, dependable systems.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Reveal delay={0.1}>
            <div className="glass flex h-full flex-col rounded-2xl p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-aurora-blue/15 text-aurora-blue">
                <BookOpen size={18} />
              </div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Currently learning
              </h3>
              <ul className="mt-4 space-y-3 flex-1">
                {personalInfo.currentlyLearning.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="h-1 w-1 rounded-full bg-aurora-cyan" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass flex h-full flex-col rounded-2xl p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-aurora-violet/15 text-aurora-violet">
                <Target size={18} />
              </div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Next on the horizon
              </h3>
              <ul className="mt-4 space-y-3 flex-1">
                {personalInfo.nextGoals.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="h-1 w-1 rounded-full bg-aurora-violet" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass flex h-full flex-col rounded-2xl p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-aurora-magenta/15 text-aurora-magenta">
                <Compass size={18} />
              </div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Looking for
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {personalInfo.lookingFor}
              </p>
              <p className="mt-4 font-mono text-xs text-muted-foreground">
                Work style: {personalInfo.workStyle}
              </p>
              <div className="mt-auto pt-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {personalInfo.availability}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
