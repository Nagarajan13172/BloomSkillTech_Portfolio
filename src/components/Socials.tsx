import { SOCIALS } from './nav-data'

/** Reusable social icon row used in the footer and contact page. */
export function Socials({ className = 'socs' }: { className?: string }) {
  return (
    <div className={className}>
      {SOCIALS.map((s) => (
        <a key={s.label} href={s.href} aria-label={s.aria}>
          {s.label}
        </a>
      ))}
    </div>
  )
}
