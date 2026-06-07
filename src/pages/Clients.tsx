import { Orbs } from '../components/Orbs'
import { CtaCard } from '../components/CtaCard'
import { CLIENTS } from '../data/clients'

const STATS = [
  { value: '5', label: 'clients shipped' },
  { value: '5.0', label: 'avg rating' },
  { value: '5', label: 'industries' },
  { value: '100%', label: 'delivered' },
]

function Tags({ items }: { items: string[] }) {
  const [type, ...work] = items
  return (
    <div className="tags">
      <span className="tag tag--type">{type}</span>
      {work.map((t) => (
        <span className="tag" key={t}>
          {t}
        </span>
      ))}
    </div>
  )
}

export function Clients() {
  const [featured, ...rest] = CLIENTS

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
            Loved by the teams we <span className="grad">build for</span>.
          </h1>
          <p className="lede reveal d2" style={{ maxWidth: 640 }}>
            We measure our work by the teams it moves forward. Here’s what partners across
            e-commerce, real estate and product say about building with Bloomskill Tech.
          </p>

          <div className="hstats reveal d3">
            {STATS.map((s) => (
              <div key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          <div className="logos-row reveal d4">
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

      {/* ===== TESTIMONIALS ===== */}
      <section className="sec sec--tight">
        <div className="wrap">
          {/* featured */}
          <article className="tfeatured reveal">
            <div className="tfeatured-body">
              <span className="badge-num">featured client</span>
              <Tags items={featured.tags} />
              <blockquote className="tquote tquote--lg">
                <span className="tquote-mark">“</span>
                {featured.quote}
              </blockquote>
              <div className="tfoot">
                <span className="monogram">{featured.initials}</span>
                <div className="tfoot-id">
                  <strong>{featured.name}</strong>
                  <span className="tservice mono">{featured.service}</span>
                </div>
                <a
                  className="tvisit mono"
                  href={featured.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {featured.domain} ↗
                </a>
              </div>
            </div>
            <a
              className="tfeatured-shot"
              href={featured.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${featured.name}`}
            >
              <span className="tshot-glow" aria-hidden="true" />
              <img src={featured.image} alt={`${featured.name} homepage`} loading="lazy" />
            </a>
          </article>

          {/* grid */}
          <div className="tgrid">
            {rest.map((c, i) => (
              <article key={c.name} className={`tcard reveal${i ? ` d${i}` : ''}`}>
                <a
                  className="tcard-shot"
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${c.name}`}
                >
                  <img src={c.image} alt={`${c.name} homepage`} loading="lazy" />
                  <span className="tcard-domain mono">{c.domain} ↗</span>
                </a>
                <Tags items={c.tags} />
                <blockquote className="tquote">
                  <span className="tquote-mark">“</span>
                  {c.quote}
                </blockquote>
                <div className="tfoot">
                  <span className="monogram">{c.initials}</span>
                  <div className="tfoot-id">
                    <strong>{c.name}</strong>
                    <span className="tservice mono">{c.service}</span>
                  </div>
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
