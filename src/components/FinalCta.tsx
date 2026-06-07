import { Link } from 'react-router-dom'

interface FinalCtaProps {
  heading?: string
  sub?: string
}

/** Editorial ink-panel CTA used at the foot of pages (brand-and-content.md). */
export function FinalCta({
  heading = 'Tell us what you’re building.',
  sub = 'One 30-minute call. We’ll tell you honestly whether we’re the right team — and leave you with a sharper plan either way.',
}: FinalCtaProps) {
  return (
    <section className="final-cta">
      <div className="wrap">
        <div className="panel reveal">
          <h2 className="display">{heading}</h2>
          <p>{sub}</p>
          <Link className="btn btn--white" to="/contact">
            Book a strategy call ↗
          </Link>
        </div>
      </div>
    </section>
  )
}
