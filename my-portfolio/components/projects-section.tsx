'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projectsData, projectCategories } from '@/config'
import { useReducedMotion } from '@/lib/use-reduced-motion'
import { Reveal, SectionLabel } from './reveal'
import { ArrowUpRight, LayoutGrid } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { ProjectVisual } from './project-visual'

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const reduceMotion = useReducedMotion()

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="relative border-t border-border px-6 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aurora-violet/40 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionLabel index="01">Selected Work</SectionLabel>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Projects I&apos;ve <span className="gradient-text">shipped</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="glass flex flex-wrap gap-1 rounded-full p-1.5"
              role="tablist"
              aria-label="Filter projects by category"
            >
              {projectCategories.map((category) => (
                <button
                  key={category}
                  role="tab"
                  aria-selected={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                    activeCategory === category
                      ? 'bg-white/10 text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="mt-16 space-y-16"
          >
            {filteredProjects.map((project, index) => {
              const isFeatured = index === 0
              return (
                <article
                  key={project.id}
                  className={`grid items-center gap-10 lg:grid-cols-12 ${
                    isFeatured ? '' : 'lg:gap-14'
                  } ${index % 2 === 1 ? '' : ''}`}
                >
                  <div
                    className={`lg:col-span-7 ${
                      index % 2 === 1 ? 'lg:order-2' : ''
                    }`}
                  >
                    <Reveal>
                      <div className="group relative overflow-hidden rounded-2xl border border-glass-border bg-card shadow-glass-lg">
                        <div className="relative aspect-[16/10] w-full overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                          <ProjectVisual
                            title={project.title}
                            accent={project.accent}
                            category={project.category}
                            index={index}
                          />
                          {/* Glass overlay */}
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent" />
                          {/* Hover actions */}
                          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-strong flex h-12 w-12 items-center justify-center rounded-full text-foreground transition-transform hover:scale-110"
                                aria-label={`Open ${project.title} live site`}
                              >
                                <ArrowUpRight size={20} />
                              </a>
                            )}
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-strong flex h-12 w-12 items-center justify-center rounded-full text-foreground transition-transform hover:scale-110"
                                aria-label={`Open ${project.title} source`}
                              >
                                <FaGithub size={20} />
                              </a>
                            )}
                          </div>
                        </div>
                        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
                      </div>
                    </Reveal>
                  </div>

                  <div
                    className={`lg:col-span-5 ${
                      index % 2 === 1 ? 'lg:order-1' : ''
                    }`}
                  >
                    <Reveal delay={0.05}>
                      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        <span className={isFeatured ? 'text-aurora-indigo' : ''}>
                          {project.year}
                        </span>
                        <span className="h-px w-4 bg-border" aria-hidden="true" />
                        <span>{project.category}</span>
                      </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                      <h3
                        className={`mt-4 tracking-tight text-foreground ${
                          isFeatured ? 'text-3xl font-semibold' : 'text-2xl font-semibold'
                        }`}
                      >
                        {project.title}
                      </h3>
                    </Reveal>
                    <Reveal delay={0.15}>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                    </Reveal>

                    {isFeatured && project.role && (
                      <Reveal delay={0.18}>
                        <p className="mt-3 text-sm text-muted-foreground">
                          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                            Role —
                          </span>{' '}
                          {project.role}
                        </p>
                      </Reveal>
                    )}

                    <Reveal delay={0.2}>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-glass-border bg-white/5 px-2.5 py-1 font-mono text-xs text-muted-foreground backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Reveal>

                    <Reveal delay={0.25}>
                      <div className="mt-7 flex items-center justify-between gap-4 border-t border-border pt-5">
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                          <LayoutGrid size={13} className="text-aurora-cyan" />
                          {project.stats.scale}
                        </span>
                        <div className="flex items-center gap-5">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm font-medium text-foreground underline-offset-4 hover:underline"
                            >
                              Live
                              <ArrowUpRight size={14} />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm font-medium text-foreground underline-offset-4 hover:underline"
                            >
                              Source
                              <ArrowUpRight size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </article>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
