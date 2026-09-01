'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/lib/use-reduced-motion'

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!finePointer || reduceMotion) return

    const ring = ringRef.current
    const dot = dotRef.current
    if (!ring || !dot) return

    document.body.classList.add('has-cursor')

    let mx = -100
    let my = -100
    let rx = -100
    let ry = -100
    let raf = 0
    let hovering = false

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.opacity = '1'
      ring.style.opacity = '1'
    }

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        'a, button, [data-cursor="hover"]'
      )
      const interactive = !!target || (e.target as HTMLElement).closest('[role="button"]')
      if (interactive && !hovering) {
        hovering = true
        ring.classList.add('is-hovering')
      } else if (!interactive && hovering) {
        hovering = false
        ring.classList.remove('is-hovering')
      }
    }

    const loop = () => {
      // Smoothly ease ring toward cursor
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    raf = requestAnimationFrame(loop)

    return () => {
      document.body.classList.remove('has-cursor')
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      ring.style.opacity = '0'
      dot.style.opacity = '0'
    }
  }, [reduceMotion])

  if (reduceMotion) return null

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
