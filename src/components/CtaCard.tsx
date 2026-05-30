import { Link } from 'react-router-dom'

interface CtaCardProps {
  secondaryLabel?: string
  secondaryTo?: string
}

/** The gradient "let's build" call-to-action used at the foot of content pages. */
export function CtaCard({
  secondaryLabel = 'See our work',
  secondaryTo = '/achievements',
}: CtaCardProps) {
  return (
    <section className="cta">
      <div className="wrap">
        <div className="cta-card reveal">
          <span className="eyebrow">let’s build</span>
          <h2 className="display">Keen to pioneer the future together?</h2>
          <div className="row">
            <Link className="btn btn--white" to="/contact">
              Let’s engage ↗
            </Link>
            <Link className="btn btn--outline-light" to={secondaryTo}>
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
