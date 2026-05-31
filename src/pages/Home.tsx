import { Link } from 'react-router-dom'
import ShaderBackground from '@/components/ui/shader-background'
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline'
import { Rocket, FlaskConical, Cloud, Trophy, Boxes } from 'lucide-react'
import { Orbs } from '../components/Orbs'
import { Ticker } from '../components/Ticker'
import { CtaCard } from '../components/CtaCard'
import { CLIENTS } from '../data/clients'
import { SERVICES } from '../data/services'

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

const JOURNEY = [
  {
    id: 1,
    title: 'Founded',
    date: '2022',
    content: 'Bloomskill Tech is born — a digital engineering studio built to unlock potential through innovative solutions.',
    category: 'Origin',
    icon: Rocket,
    relatedIds: [2],
    status: 'completed' as const,
    energy: 100,
  },
  {
    id: 2,
    title: 'Virtual Labs',
    date: '2023',
    content: 'Launched interactive virtual laboratories for immersive, hands-on learning — our origin practice.',
    category: 'EdTech',
    icon: FlaskConical,
    relatedIds: [1, 3],
    status: 'completed' as const,
    energy: 88,
  },
  {
    id: 3,
    title: 'Web & Cloud',
    date: '2024',
    content: 'Expanded into full-stack web development and resilient cloud services for real businesses.',
    category: 'Engineering',
    icon: Cloud,
    relatedIds: [2, 4],
    status: 'completed' as const,
    energy: 82,
  },
  {
    id: 4,
    title: 'CTF Champions',
    date: '2025',
    content: '1st in Yukthi CTF prelims and 1st at Tom-CTF grand finals — proven in the security arena.',
    category: 'Security',
    icon: Trophy,
    relatedIds: [3, 5],
    status: 'completed' as const,
    energy: 96,
  },
  {
    id: 5,
    title: 'Products',
    date: '2025',
    content: 'Shipped our own products — Trinity Network (VPN) and zerocode, a Rust code-execution sandbox.',
    category: 'Products',
    icon: Boxes,
    relatedIds: [4],
    status: 'in-progress' as const,
    energy: 72,
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

      {/* ===== HERO (with 21st.dev WebGL shader background) ===== */}
      <header className="hero">
        <ShaderBackground className="hero-shader" />
        <div className="hero-scrim" />
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow reveal">digital engineering studio · est. 2022</span>
            <h1 className="display reveal d1">
              Engineering ideas into <span className="grad">scalable</span> products.
            </h1>
            <p className="lede reveal d2">
              Bloomskill Tech pairs engineering depth with creative craft — shipping web, cloud,
              cybersecurity and DevOps that move your business forward.
            </p>
            <div className="row cta-row reveal d3">
              <Link className="btn" to="/contact">
                Start a project ↗
              </Link>
              <Link className="btn btn--outline-light" to="/about">
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
                  1<sup>st</sup>
                </strong>
                <span>yukthi ctf '25</span>
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

          <div className="hero-orbit reveal d2">
            <RadialOrbitalTimeline timelineData={JOURNEY} />
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
                <div className="card-media">
                  <img src={s.img} alt={s.title} loading="lazy" />
                </div>
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
                <div className="card-media">
                  <img src={c.image} alt={`${c.name} — ${c.service}`} loading="lazy" />
                </div>
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
