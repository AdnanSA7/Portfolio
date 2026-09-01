'use client'

import { useReducedMotion } from '@/lib/use-reduced-motion'

export function AuroraBackground() {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return (
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(79,124,255,0.12),transparent_70%)]" />
      </div>
    )
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(79,124,255,0.14),transparent_70%)]" />
      <div
        className="aurora-blob aurora-blob--1 left-[-15%] top-[-10%] h-[42rem] w-[42rem]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(79,124,255,0.28), transparent 65%)',
        }}
      />
      <div
        className="aurora-blob aurora-blob--2 right-[-12%] top-[8%] h-[38rem] w-[38rem]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(139,92,246,0.24), transparent 65%)',
        }}
      />
      <div
        className="aurora-blob aurora-blob--3 bottom-[-18%] left-[18%] h-[40rem] w-[40rem]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(34,211,238,0.16), transparent 62%)',
        }}
      />
      <div
        className="absolute bottom-[10%] right-[8%] h-[24rem] w-[24rem] opacity-70"
        style={{
          background:
            'radial-gradient(circle at center, rgba(217,70,239,0.12), transparent 60%)',
          filter: 'blur(80px)',
        }}
      />
    </div>
  )
}
