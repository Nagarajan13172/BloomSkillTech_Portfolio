import type { CSSProperties } from 'react'

interface OrbSpec {
  style: CSSProperties
}

/** Soft blurred brand-colour orbs that float behind the page content. */
export function Orbs({ orbs }: { orbs: OrbSpec[] }) {
  return (
    <>
      {orbs.map((orb, i) => (
        <div key={i} className="orb" style={orb.style} />
      ))}
    </>
  )
}
