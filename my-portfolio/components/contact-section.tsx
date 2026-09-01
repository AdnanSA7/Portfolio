'use client'

import { personalInfo, socialLinks } from '@/config'
import { Reveal, SectionLabel } from './reveal'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Magnetic } from './magnetic'

const socialIcons: Record<string, typeof FaGithub> = {
  FaGithub,
  FaLinkedin,
  FaTwitter,
}

export function ContactSection() {
  return (
    <section id="contact" className="relative border-t border-border px-6 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aurora-magenta/40 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <div className="glass-strong relative overflow-hidden rounded-3xl px-8 py-16 sm:px-16 sm:py-24">
          {/* Aurora glow inside panel */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
            <div className="absolute -right-16 -top-20 h-80 w-80 rounded-full bg-aurora-violet/20 blur-[100px]" />
            <div className="absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-aurora-blue/20 blur-[100px]" />
          </div>

          <Reveal>
            <SectionLabel index="06">Contact</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s build something{' '}
              <span className="gradient-text">remarkable</span> together.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              {personalInfo.availability}. I&apos;m happy to talk about full-stack
              opportunities, mobile development, or engineering challenges you&apos;re
              working through.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Magnetic>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-aurora-blue to-aurora-violet px-7 py-4 text-sm font-medium text-white shadow-glass-lg transition-shadow hover:shadow-[0_16px_48px_rgba(99,102,241,0.35)]"
                >
                  <Mail size={17} />
                  {personalInfo.email}
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-glass-border px-7 py-4 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:border-aurora-indigo/50"
              >
                Download resume
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-14 flex flex-wrap items-center gap-6 border-t border-glass-border pt-8">
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={15} className="text-aurora-cyan" aria-hidden="true" />
                {personalInfo.location}
              </span>
              <div className="flex items-center gap-3">
                {Object.entries(socialLinks).map(([key, link]) => {
                  const Icon = socialIcons[link.icon]
                  if (!Icon) return null
                  return (
                    <a
                      key={key}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="glass flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:-translate-y-0.5 hover:text-foreground hover:shadow-glass"
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
