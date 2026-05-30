import { Link } from 'react-router-dom'
import { CtaCard } from '../components/CtaCard'
import { PRODUCTS } from '../data/products'

const STATS = [
  { value: '2', label: 'live products' },
  { value: 'Rust', label: 'systems-grade' },
  { value: '100%', label: 'built in-house' },
  { value: '0', label: 'CVEs shipped' },
]

export function Products() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="page-hero">
        <div className="orb" style={{ width: 460, height: 460, top: -140, right: -120, background: '#90c0f1' }} />
        <div className="orb" style={{ width: 420, height: 420, top: 220, left: -150, background: '#f897bf' }} />
        <div className="wrap">
          <span className="eyebrow reveal">our products</span>
          <h1 className="display reveal d1" style={{ maxWidth: '17ch' }}>
            Software we <span className="grad">ship</span> — not just sites.
          </h1>
          <p className="lede reveal d2" style={{ maxWidth: 640 }}>
            Beyond client work, we build and run our own products — from network security to
            developer infrastructure. Here’s what’s live right now.
          </p>
          <div className="hstats reveal d3">
            {STATS.map((s) => (
              <div key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCT SHOWCASES ===== */}
      <section className="sec sec--tight">
        <div className="wrap">
          <div className="showcases">
            {PRODUCTS.map((p) => (
              <article key={p.name} className={`showcase reveal acc-${p.accent}`}>
                <div className="showcase-shot">
                  <span className="showcase-glow" aria-hidden="true" />
                  <div className="browser">
                    <div className="browser-bar">
                      <span className="bdot r" />
                      <span className="bdot y" />
                      <span className="bdot g" />
                      <span className="browser-url mono">{p.domain}</span>
                    </div>
                    <a href={p.href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.name}`}>
                      <img src={p.image} alt={`${p.name} — screenshot`} loading="lazy" />
                    </a>
                  </div>
                </div>

                <div className="showcase-info">
                  <div className="showcase-top">
                    <span className="badge-num">{p.category}</span>
                    <span className="live-pill mono">
                      <span className="live-dot" /> live
                    </span>
                  </div>
                  <h2 className="h2">{p.name}</h2>
                  <p className="showcase-tagline">{p.tagline}</p>
                  <p className="muted">{p.description}</p>
                  <div className="chips">
                    {p.features.map((f) => (
                      <span className="chip" key={f}>
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="row showcase-cta">
                    <a className="btn" href={p.href} target="_blank" rel="noopener noreferrer">
                      Visit {p.domain} ↗
                    </a>
                    <div className="tags">
                      {p.tags.map((t) => (
                        <span className="tag" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {/* more on the way */}
            <article className="showcase-soon reveal">
              <span className="eyebrow">next up</span>
              <h3 className="h3">More products are in the lab.</h3>
              <p className="muted">
                We’re always building. Have an idea that lives at the intersection of tech and
                imagination? Let’s turn it into the next one.
              </p>
              <Link className="btn btn--ghost" to="/contact">
                Pitch us an idea ↗
              </Link>
            </article>
          </div>
        </div>
      </section>

      <CtaCard secondaryLabel="See our services" secondaryTo="/services" />
    </>
  )
}
