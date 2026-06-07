import { Link } from 'react-router-dom'
import { FinalCta } from '../components/FinalCta'

/**
 * Services — the 4D framework expanded (brand-and-content.md + pages-spec.md).
 * One service story, not five: cloud/security/DevOps fold in as capabilities
 * under Develop/Deliver. Anchors (#define …) are shareable.
 */

interface Stage {
  id: string
  no: string
  title: string
  who: string
  duration: string
  intro: string
  activities: string[]
  deliverable: string
}

const STAGES: Stage[] = [
  {
    id: 'define',
    no: '01',
    title: 'Define',
    who: 'A strategist and you',
    duration: '1–2 weeks',
    intro:
      'Before a single screen is designed, we define what wins — applied to your product, not a textbook.',
    activities: [
      'Market and competitor mapping',
      'User definition and jobs-to-be-done',
      'Scope, pricing and revenue logic',
      'A phased delivery roadmap',
    ],
    deliverable: 'A product strategy document and a fixed-scope SOW you own — whoever you build with.',
  },
  {
    id: 'design',
    no: '02',
    title: 'Design',
    who: 'Product designers',
    duration: '2–4 weeks',
    intro:
      'Research-led UX and interface design — not just pretty screens, but screens engineered to convert and built to be built.',
    activities: [
      'User flows and wireframes',
      'High-fidelity UI design',
      'A reusable design system',
      'Clickable, testable prototype',
    ],
    deliverable: 'A clickable prototype plus a complete design system in Figma.',
  },
  {
    id: 'develop',
    no: '03',
    title: 'Develop',
    who: 'Engineers',
    duration: '6–12 weeks',
    intro:
      'Proven, modern stacks with discipline baked in — FastAPI, PostgreSQL, React, and Rust where performance demands it. Cloud, security and DevOps live here, as capabilities, not separate products.',
    activities: [
      'Automated tests and code review on every commit',
      'Security hardening and dependency auditing',
      'Cloud infrastructure and CI/CD setup',
      'Documentation as you go',
    ],
    deliverable: 'Production code with 80%+ automated test coverage and CI checks on every commit.',
  },
  {
    id: 'deliver',
    no: '04',
    title: 'Deliver',
    who: 'The whole team',
    duration: 'Launch + ongoing',
    intro: 'Launch is a process, not a hope — and we stay after the launch.',
    activities: [
      'CI/CD pipelines and staged deployments',
      'Monitoring and performance budgets',
      'Training and handover documentation',
      'Post-launch support',
    ],
    deliverable: 'A live product, a runbook, and a team that picks up the phone.',
  },
]

interface Engagement {
  duration: string
  title: string
  copy: string
}

const ENGAGE: Engagement[] = [
  {
    duration: '2–3 weeks',
    title: 'Product Sprint',
    copy: 'The Define stage plus a clickable prototype. For validating an idea before you commit build budget.',
  },
  {
    duration: '8–12 weeks',
    title: 'MVP Build',
    copy: 'The full 4D cycle to a launched product. Fixed scope, milestone-billed.',
  },
  {
    duration: 'Monthly',
    title: 'Extended Team',
    copy: 'Our designers and engineers embedded alongside yours.',
  },
]

export function Services() {
  return (
    <>
      {/* ===== HERO ===== */}
      <header className="page-hero">
        <div className="wrap">
          <span className="eyebrow reveal">Services · the 4D framework</span>
          <h1 className="display reveal d1">
            One team, four disciplines, <span className="grad">one timeline</span>.
          </h1>
          <p className="lede reveal d2">
            Define, Design, Develop and Deliver under one roof — the same people, the same
            standups, accountable to one contract. Here is what each stage includes.
          </p>
          <div className="row cta-row reveal d3">
            <Link className="btn" to="/contact">
              Book a strategy call ↗
            </Link>
            <a className="btn btn--ghost" href="#engage">
              See engagement models ↓
            </a>
          </div>
        </div>
      </header>

      {/* ===== 4D STAGES ===== */}
      <section className="sec">
        <div className="wrap">
          {STAGES.map((s) => (
            <article id={s.id} key={s.id} className="dstage reveal">
              <div className="dstage-head">
                <span className="dstage-no">{s.no}</span>
                <div>
                  <h2 className="h2">{s.title}</h2>
                  <p className="dstage-who">
                    <span>Who’s in the room:</span> {s.who}
                  </p>
                </div>
                <span className="dstage-dur">{s.duration}</span>
              </div>
              <p className="dstage-lede">{s.intro}</p>
              <div className="dstage-meta">
                <div>
                  <h4>Activities</h4>
                  <ul>
                    {s.activities.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Deliverable</h4>
                  <p>{s.deliverable}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== ENGAGEMENT MODELS ===== */}
      <section className="sec sec--tint" id="engage">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">How to engage us</span>
            <h2 className="h2">Three ways to work with us.</h2>
          </div>
          <div className="engage-grid">
            {ENGAGE.map((e) => (
              <article key={e.title} className="engage-card reveal">
                <span className="engage-dur">{e.duration}</span>
                <h3 className="h3">{e.title}</h3>
                <p>{e.copy}</p>
              </article>
            ))}
          </div>
          <p className="engage-note">
            Milestone-based, GST invoiced, no surprises. SOWs are custom —{' '}
            <Link to="/contact">tell us what you’re building</Link>.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
