import { Orbs } from '../components/Orbs'
import { CtaCard } from '../components/CtaCard'
import { CLIENTS } from '../data/clients'

export function Clients() {
  return (
    <>
      <Orbs
        orbs={[
          { style: { width: 480, height: 480, top: -150, left: -120, background: '#90c0f1' } },
          { style: { width: 440, height: 440, top: 260, right: -150, background: '#f897bf' } },
        ]}
      />

      {/* ===== HERO ===== */}
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow reveal">client spotlight</span>
          <h1 className="display reveal d1" style={{ maxWidth: '16ch' }}>
            What our clients <span className="grad">say</span>.
          </h1>
          <p className="lede reveal d2" style={{ maxWidth: 640 }}>
            We measure our work by the teams it moves forward. Here’s what partners across
            e-commerce, real estate and product say about building with Bloomskill Tech.
          </p>

          <div className="logos-row reveal d3">
            {CLIENTS.map((c) => (
              <a
                key={c.name}
                className="logo-chip"
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {c.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SPOTLIGHTS ===== */}
      <section className="sec sec--tight">
        <div className="wrap">
          <div className="spotlight-grid">
            {CLIENTS.map((c, i) => (
              <article key={c.name} className={`spot reveal${i % 2 ? ' d1' : ''}`}>
                <div className="card-media">
                  <img src={c.image} alt={`${c.name} — ${c.service}`} loading="lazy" />
                </div>
                <span className="spot-service">{c.service}</span>
                <p className="spot-quote">
                  <span className="spot-mark">“</span>
                  {c.quote}
                </p>
                <div className="spot-foot">
                  <span className="monogram">{c.initials}</span>
                  <div className="spot-id">
                    <strong>{c.name}</strong>
                    <span className="by">— {c.by}</span>
                  </div>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono"
                    style={{ marginLeft: 'auto', fontSize: '.72rem', color: 'var(--magenta)' }}
                  >
                    {c.domain} ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaCard secondaryLabel="Our story" secondaryTo="/about" />
    </>
  )
}
