import { useEffect, useState } from 'react'

/**
 * Tracks whether the page has scrolled past `threshold` pixels — used to give
 * the sticky nav its blurred, shadowed "scrolled" state.
 */
export function useScrolled(threshold = 12): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}
