import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scroll-reveal behaviour ported from the prototype's site.js.
 *
 * Every element with the `.reveal` class starts hidden (see global.css) and is
 * animated in once it enters the viewport. Re-runs on route change so freshly
 * mounted pages get observed. Falls back to immediately showing everything if
 * IntersectionObserver is unavailable.
 */
export function useReveal(): void {
  const { pathname } = useLocation()

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    if (items.length === 0) return

    // Scroll to top on navigation so reveals play from a clean state.
    window.scrollTo(0, 0)

    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('in'))
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            obs.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    items.forEach((el) => observer.observe(el))

    // Safety net: never leave anything stuck hidden.
    const safety = window.setTimeout(() => {
      items.forEach((el) => el.classList.add('in'))
    }, 3200)

    return () => {
      observer.disconnect()
      window.clearTimeout(safety)
    }
  }, [pathname])
}
