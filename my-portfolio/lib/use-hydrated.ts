'use client'

import { useSyncExternalStore } from 'react'

const emptySubscribe = () => () => {}

/**
 * Returns false during the server render AND the very first client paint
 * (hydration), then true afterwards. Use this to defer reading any
 * browser-only state (localStorage, matchMedia) until after hydration so
 * server HTML and client HTML always match.
 */
export function useHydrated() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )
}
