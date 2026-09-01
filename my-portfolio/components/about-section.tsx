'use client'

import { Reveal, SectionLabel } from './reveal'
import { personalInfo } from '@/config'
import { MapPin, Server, Smartphone, Layers, Sparkles } from 'lucide-react'

const focusAreas = [
  {
    title: 'Backend Systems',
    icon: Server,
    description:
      'RESTful APIs, data modeling, and enterprise workflows with Spring Boot and Java.',
    tag: 'Java · Spring Boot · SQL',
  },
  {
    title: 'Cross-Platform Mobile',
    icon: Smartphone,
    description:
      'Native-quality Flutter apps that share a single backend with their web counterparts.',
    tag: 'Flutter · Dart',
  },
  {
    title: 'Interface Engineering',
    icon: Layers,
    description:
      'Responsive, accessible interfaces from Angular dashboards to modern React and Next.js.',
    tag: 'Angular · React · Next.js',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="02">About</SectionLabel>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <Reveal delay={0.05}>
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                I build <span className="gradient-text">reliable</span> software across the
                full stack.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {personalInfo.bio}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                I care deeply about writing code that is readable, maintainable, and — above
                all — dependable in production. My engineering philosophy is simple: solve
                real problems with the right amount of complexity, no more, no less.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={15} className="text-aurora-cyan" aria-hidden="true" />
                Based in {personalInfo.location}
              </div>
            </Reveal>
          </div>

          <div className="space-y-5">
            {focusAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <Reveal key={area.title} delay={0.1 + index * 0.1}>
                  <div className="clay group flex gap-4 p-5 transition-transform duration-300 hover:-translate-y-1">
                    <div className="neumorph flex h-12 w-12 shrink-0 items-center justify-center text-aurora-indigo">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="flex items-center gap-2 text-base font-medium text-foreground">
                        {area.title}
                        {index === 0 && (
                          <Sparkles size={14} className="text-aurora-violet" />
                        )}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {area.description}
                      </p>
                      <p className="mt-2.5 font-mono text-xs text-aurora-cyan">
                        {area.tag}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
