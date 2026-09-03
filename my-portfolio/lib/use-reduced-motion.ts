'use client'

import { useSyncExternalStore } from 'react'
import { useHydrated } from './use-hydrated'

function subscribeMotion(callback: () => void) {
  if (typeof window === 'undefined') return () => {}
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  mq.addEventListener('change', callback)
  return () => mq.removeEventListener('change', callback)
}

function getMotionSnapshot() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function useReducedMotion() {
  const hydrated = useHydrated()
  const reduced = useSyncExternalStore(subscribeMotion, getMotionSnapshot, () => false)
  // Guard against hydration mismatch: never report "reduced" during the
  // server match / first client paint.
  return hydrated ? reduced : false
}
