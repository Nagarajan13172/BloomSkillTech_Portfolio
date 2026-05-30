import { useEffect, useState } from 'react'

/**
 * Global brand preloader, two acts on a dark backdrop:
 *   ACT 1 — the logo builds: light-blue LEFT half flies in from the left,
 *           light-pink RIGHT half from the right; as they meet the indigo
 *           CORE orb reunites at the seam and a glow blooms.
 *   ACT 2 — the wordmark assembles: "Bloom" from the left, "skill" from the
 *           top, "Tech" from the right — then it locks together.
 * Honours prefers-reduced-motion (shows the assembled mark, no flight).
 */
export function GlobalLoader() {
  const [phase, setPhase] = useState<'play' | 'exit' | 'done'>('play')

  useEffect(() => {
    document.getElementById('boot')?.remove()

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const holdMs = reduce ? 900 : 2300

    document.body.style.overflow = 'hidden'
    const toExit = window.setTimeout(() => setPhase('exit'), holdMs)
    const toDone = window.setTimeout(() => {
      setPhase('done')
      document.body.style.overflow = ''
    }, holdMs + 650)

    return () => {
      window.clearTimeout(toExit)
      window.clearTimeout(toDone)
      document.body.style.overflow = ''
    }
  }, [])

  if (phase === 'done') return null

  return (
    <div className={`gl${phase === 'exit' ? ' gl--exit' : ''}`} role="presentation">
      <span className="sr-only">Bloomskill Tech</span>
      <div className="gl-stack" aria-hidden="true">
        <div className="gl-logo">
          <img className="gl-logo-l" src="/logo-left.png" alt="" />
          <img className="gl-logo-r" src="/logo-right.png" alt="" />
        </div>
        <div className="gl-word">
          <span className="gl-bloom">Bloom</span>
          <span className="gl-skill">skill</span>
          <span className="gl-tech">Tech</span>
          <span className="gl-line" />
        </div>
      </div>
    </div>
  )
}
