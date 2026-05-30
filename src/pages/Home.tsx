import { Link } from 'react-router-dom'
import { Orbs } from '../components/Orbs'
import { Ticker } from '../components/Ticker'
import { CtaCard } from '../components/CtaCard'
import { CLIENTS } from '../data/clients'

interface Service {
  num: string
  title: string
  copy: string
  tags: string[]
}

const SERVICES: Service[] = [
  {
    num: '001',
    title: 'Web Design & Development',
    copy: 'High-performance sites and full-stack apps — React, Node.js, MongoDB, MySQL — built for speed and longevity.',
    tags: ['React', 'Node.js', 'UI/UX'],
  },
  {
    num: '002',
    title: 'Cloud Services',
    copy: 'Resilient cloud infrastructure and deployment so your business runs leaner, faster and always-on.',
    tags: ['Infra', 'Scaling', 'Uptime'],
  },
  {
    num: '003',
    title: 'Cybersecurity',
    copy: 'Proactive hardening and CTF-grade expertise that keeps platforms and customer data protected.',
    tags: ['Hardening', 'Audits', 'CTF'],
  },
  {
    num: '004',
    title: 'DevOps & Automation',
    copy: 'CI/CD with Docker and Jenkins — turning release chaos into a calm, repeatable process.',
    tags: ['Docker', 'Jenkins', 'CI/CD'],
  },
  {
    num: '005',
    title: 'Virtual Lab Development',
    copy: 'Interactive virtual laboratories for immersive, hands-on learning — our origin practice.',
    tags: ['EdTech', 'Interactive'],
  },
]

interface Principle {
  no: string
  title: string
  copy: string
}

const PRINCIPLES: Principle[] = [
  {
    no: '/01',
    title: 'Ethical Design & Digital Wellbeing',
    copy: 'Technology that respects people’s time, attention and trust — designed responsibly from the first wireframe.',
  },
  {
    no: '/02',
    title: 'Continuous Improvement & Innovation',
    copy: 'We never stop iterating — pushing the boundaries of technology to unlock new possibilities.',
  },
  {
    no: '/03',
    title: 'Empowerment of a Remote Workforce',
    copy: 'A distributed, collaborative team — assembled around the problem, not the postcode.',
  },
  {
    no: '/04',
    title: 'Knowledge Sharing & Collaboration',
    copy: 'From college workshops to open collaboration, we grow the ecosystem we’re part of.',
  },
]

export function Home() {
  return (
    <>
      <Orbs
        orbs={[
          { style: { width: 520, height: 520, top: -140, left: -120, background: '#90c0f1' } },
          { style: { width: 460, height: 460, top: 180, right: -140, background: '#f897bf' } },
        ]}
      />

      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow reveal">digital engineering studio</span>
            <h1 className="display reveal d1">
              Unlocking potential through <span className="grad">innovative</span> solutions.
            </h1>
            <p className="lede reveal d2">
              We blend deep technical expertise with creative prowess — engineering web, cloud,
              security and automation that propel you forward.
            </p>
            <div className="row cta-row reveal d3">
              <Link className="btn" to="/contact">
                Start a project ↗
              </Link>
              <Link className="btn btn--ghost" to="/about">
                Our story
              </Link>
            </div>
            <div className="stats reveal d4">
              <div>
                <strong>2022</strong>
                <span>founded</span>
              </div>
              <div>
                <strong>
                  13<sup>th</sup>
                </strong>
                <span>yukthi ctf '24</span>
              </div>
              <div>
                <strong>6+</strong>
                <span>workshops</span>
              </div>
              <div>
                <strong>4</strong>
                <span>practices</span>
              </div>
            </div>
          </div>

          <div className="lens-stage reveal d2">
            <div className="float-chip chip1">
              <span className="d" style={{ background: 'var(--blue)' }} />
              web · cloud
            </div>
            <div className="float-chip chip2">
              <span className="d" style={{ background: 'var(--magenta)' }} />
              security · devops
            </div>
            <div className="lens-card">
              <div className="lens">
                <span className="blob blue" />
                <span className="blob pink" />
              </div>
              <img className="lens-logo" src="/bst-logo.png" alt="Bloomskill Tech logo" />
              <div className="lens-tag">// two halves · one spectrum</div>
            </div>
          </div>
        </div>
      </header>

      <Ticker />

      {/* ===== SERVICES ===== */}
      <section className="sec" id="services">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">01 / what we do</span>
            <h2 className="h2">Capabilities engineered to ship, scale and secure.</h2>
          </div>
          <div className="svc-grid">
            {SERVICES.map((s, i) => (
              <article key={s.num} className={`svc reveal${i % 3 === 1 ? ' d1' : i % 3 === 2 ? ' d2' : ''}`}>
                <span className="num">{s.num}</span>
                <h3 className="h3">{s.title}</h3>
                <p>{s.copy}</p>
                <div className="tags">
                  {s.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
            <article className="svc svc--cta reveal d2">
              <h3 className="h3">Have something else in mind?</h3>
              <p>If it lives at the intersection of tech and imagination, we want to build it.</p>
              <Link className="btn btn--white" to="/contact" style={{ alignSelf: 'flex-start' }}>
                Let’s scope it ↗
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="sec sec--tint">
        <div className="wrap why">
          <div className="shead" style={{ maxWidth: 380 }}>
            <span className="eyebrow reveal">02 / why choose us</span>
            <h2 className="h2 reveal d1">Principles we build by.</h2>
            <p className="lede reveal d2" style={{ fontSize: '1.05rem' }}>
              A partner that treats your platform, team and users with care.
            </p>
          </div>
          <div className="wlist">
            {PRINCIPLES.map((p, i) => (
              <div key={p.no} className={`witem reveal${i ? ` d${i}` : ''}`}>
                <span className="wno">{p.no}</span>
                <div>
                  <h3 className="h3">{p.title}</h3>
                  <p>{p.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLIENTS (teaser → full Client Spotlight page) ===== */}
      <section className="sec" id="clients">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">03 / client spotlights</span>
            <h2 className="h2">Trusted by teams shipping real products.</h2>
          </div>
          <div className="clients-grid">
            {CLIENTS.slice(0, 2).map((c, i) => (
              <figure key={c.name} className={`quote reveal${i % 2 ? ' d1' : ''}`}>
                <div className="row" style={{ gap: 14 }}>
                  <span className="monogram">{c.initials}</span>
                  <div>
                    <strong>{c.name}</strong>
                    <div className="mono muted" style={{ fontSize: '.74rem' }}>
                      {c.domain}
                    </div>
                  </div>
                </div>
                <blockquote>“{c.quote}”</blockquote>
                <figcaption className="mono muted">— {c.by}</figcaption>
              </figure>
            ))}
          </div>
          <div className="row see-all reveal">
            <Link className="btn" to="/clients">
              See all client stories ↗
            </Link>
            <span className="mono muted" style={{ fontSize: '.8rem' }}>
              {CLIENTS.length} partners · web · cloud · security
            </span>
          </div>
        </div>
      </section>

      <CtaCard secondaryLabel="See our work" secondaryTo="/achievements" />
    </>
  )
}
