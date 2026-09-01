'use client'

import { personalInfo, socialLinks } from '@/config'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { ArrowUp } from 'lucide-react'
import { useReducedMotion } from '@/lib/use-reduced-motion'

const socialIcons: Record<string, typeof FaGithub> = {
  FaGithub,
  FaLinkedin,
  FaTwitter,
}

export function Footer() {
  const reduceMotion = useReducedMotion()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <footer className="relative border-t border-border px-6 py-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aurora-indigo/30 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="flex items-center gap-2 font-mono text-sm text-foreground">
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-aurora-blue to-aurora-violet text-[8px] font-bold text-white">
              {personalInfo.name.charAt(0)}
            </span>
            {personalInfo.name}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Software Engineer · {personalInfo.location}
          </p>
        </div>

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
                className="glass flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:-translate-y-0.5 hover:text-foreground"
              >
                <Icon size={17} />
              </a>
            )
          })}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="glass flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:-translate-y-0.5 hover:text-foreground"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl items-center justify-center border-t border-border pt-8">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {personalInfo.name}. Designed &amp; built by me.
        </p>
      </div>
    </footer>
  )
}
