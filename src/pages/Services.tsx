import { Link } from 'react-router-dom'
import { CtaCard } from '../components/CtaCard'
import { SERVICES } from '../data/services'

const STATS = [
  { value: '5', label: 'core practices' },
  { value: '2022', label: 'founded' },
  { value: '13th', label: "yukthi ctf '24" },
  { value: '6+', label: 'workshops led' },
]

const PROCESS = [
  {
    no: '01',
    title: 'Discover',
    copy: 'We map the problem, constraints and goals before a single line of code — so we build the right thing.',
  },
  {
    no: '02',
    title: 'Design',
    copy: 'Architecture and interface decisions made deliberately and validated early, not after launch.',
  },
  {
    no: '03',
    title: 'Build',
    copy: 'Tight iterations with CI/CD, code review and automated checks — momentum without the chaos.',
  },
  {
    no: '04',
    title: 'Launch',
    copy: 'Deploy, harden and measure — then keep improving. We treat shipping as the start, not the finish.',
  },
]

export function Services() {
  return (
    <>
      {/* ===== AURORA HERO (succeedex-inspired editorial gradient mesh) ===== */}
      <header className="svc-hero">
        <div className="aurora" aria-hidden="true" />
        <div className="wrap svc-hero-inner">
          <span className="eyebrow--rules">what we do · 2025 cycle</span>
          <h1 className="svc-hero-title">
            The full <span className="grad-on-dark">service menu</span>.
          </h1>
          <p className="svc-hero-sub">
            One studio for the whole stack — web, cloud, security, automation and virtual labs.
            Pick a practice below, or bring us the problem and we’ll scope it end to end.
          </p>
          <div className="row svc-hero-cta">
            <Link className="btn" to="/contact">
              Start a project ↗
            </Link>
            <a className="btn btn--glass" href="#menu">
              Browse the menu ↓
            </a>
          </div>

          <div className="glass-stats">
            {STATS.map((s, i) => (
              <div className="glass-card" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
                {i === 0 && (
                  <svg className="spark" viewBox="0 0 100 28" preserveAspectRatio="none" aria-hidden="true">
                    <polyline
                      points="0,24 16,18 32,20 48,10 64,13 80,5 100,7"
                      fill="none"
                      stroke="url(#sg)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient id="sg" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#90c0f1" />
                        <stop offset="1" stopColor="#f897bf" />
                      </linearGradient>
                    </defs>
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ===== SERVICE MENU (editorial list with hover image reveal) ===== */}
      <section className="sec" id="menu">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">01 / the menu</span>
            <h2 className="h2">Five practices, one team.</h2>
            <p className="lede">
              Hover a line to preview it. Every engagement is delivered by the same distributed crew —
              no hand-offs, no agency markup.
            </p>
          </div>

          <div className="menu">
            {SERVICES.map((s, i) => (
              <Link
                key={s.slug}
                to="/contact"
                className="menu-row reveal"
                aria-label={`${s.title} — start a project`}
              >
                <span className="menu-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="menu-main">
                  <h3 className="menu-title">{s.title}</h3>
                  <p className="menu-tagline">{s.tagline}</p>
                </div>
                <div className="menu-aside">
                  <div className="menu-tags">
                    {s.tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="menu-thumb">
                    <img src={s.img} alt="" loading="lazy" />
                  </span>
                </div>
                <span className="menu-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPROACH (glass step cards) ===== */}
      <section className="sec sec--tint">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">02 / how we work</span>
            <h2 className="h2">A calm path from idea to shipped.</h2>
          </div>
          <div className="process">
            {PROCESS.map((p, i) => (
              <div className={`step reveal${i ? ` d${i}` : ''}`} key={p.no}>
                <span className="step-no">{p.no}</span>
                <h3 className="h3">{p.title}</h3>
                <p className="muted">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaCard secondaryLabel="See our work" secondaryTo="/clients" />
    </>
  )
}
