import { Link } from 'react-router-dom'
import { Target, PenTool, Code2, Rocket } from 'lucide-react'
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline'
import { FinalCta } from '../components/FinalCta'

/**
 * Home — rebuilt to the bloomskill-website skill (brand-and-content.md +
 * pages-spec.md). Order: hero → credibility strip → problem/turn → 4D framework
 * → proof → testimonials → final CTA. Copy is taken from the skill; do not
 * "improve" it ad hoc — change the reference file first.
 */

// Hero visual: the 4D framework as an interactive orbit around a "ship" core.
const FOURD_ORBIT = [
  {
    id: 1,
    title: 'Define',
    date: '01',
    category: 'Define what wins',
    icon: Target,
    relatedIds: [2],
    status: 'completed' as const,
    energy: 96,
    content:
      'Market and competitor mapping, scope, pricing and a phased roadmap — what wins, before a single screen is drawn.',
    deliverable: 'Product strategy doc + fixed-scope SOW you own.',
  },
  {
    id: 2,
    title: 'Design',
    date: '02',
    category: 'Make it usable',
    icon: PenTool,
    relatedIds: [1, 3],
    status: 'completed' as const,
    energy: 90,
    content:
      'Research-led UX, wireframes, high-fidelity UI and a reusable design system — built to convert and built to be built.',
    deliverable: 'Clickable prototype + design system in Figma.',
  },
  {
    id: 3,
    title: 'Develop',
    date: '03',
    category: 'Build it right',
    icon: Code2,
    relatedIds: [2, 4],
    status: 'completed' as const,
    energy: 94,
    content:
      'Proven stacks (FastAPI, PostgreSQL, React, Rust) with automated tests, code review and security hardening on every commit.',
    deliverable: 'Production code, 80%+ test coverage, CI checks.',
  },
  {
    id: 4,
    title: 'Deliver',
    date: '04',
    category: 'Launch & support',
    icon: Rocket,
    relatedIds: [3],
    status: 'in-progress' as const,
    energy: 88,
    content:
      'CI/CD, staged deploys, monitoring, performance budgets and handover docs — plus post-launch support so you’re never stranded.',
    deliverable: 'A live product, a runbook, and a team that answers.',
  },
]

// Institutes are named only as a collective team credential — never mapped to a
// stage, role or person (skill: brand-and-content.md institute mention rule).
const INSTITUTES = ['IIT Bombay', 'IIM Indore', 'NID Ahmedabad']

const FOURD = [
  {
    no: '01',
    title: 'Define',
    copy: 'Before a single screen is designed, we define what wins. Market and competitor mapping, user definition, scope, pricing and revenue logic, and a phased roadmap.',
    deliver: 'A product strategy document and fixed-scope SOW you own, whoever you build with.',
  },
  {
    no: '02',
    title: 'Design',
    copy: 'Research-led UX and interface design. User flows, wireframes, high-fidelity UI, and a reusable design system — not just pretty screens, but screens engineered to convert and built to be built.',
    deliver: 'Clickable prototype + complete design system in Figma.',
  },
  {
    no: '03',
    title: 'Develop',
    copy: 'Disciplined engineering with modern, proven stacks (FastAPI, PostgreSQL, React, Rust where performance demands it). Every build ships with automated tests, code review, security hardening, and documentation.',
    deliver: 'Production code with 80%+ automated test coverage and CI checks on every commit.',
  },
  {
    no: '04',
    title: 'Deliver',
    copy: 'Launch is a process, not a hope. CI/CD pipelines, staged deployments, monitoring, performance budgets, training and handover docs — plus post-launch support so you’re never stranded.',
    deliver: 'A live product, a runbook, and a team that picks up the phone.',
  },
]

const PROOF = [
  {
    name: 'Trainerr.in',
    copy: 'A two-sided marketplace for India’s training ecosystem: escrow payments, GST invoicing, Razorpay integration.',
  },
  {
    name: 'Secure exam platform',
    copy: 'Desktop anti-cheat examination system with camera proctoring and real-time risk scoring.',
  },
  {
    name: 'Commerce builds',
    copy: 'End-to-end e-commerce platforms with admin panels, courier API integrations and payment flows for Indian retail.',
  },
]

// Real client quotes shown with company names only, per brand-and-content.md
// (upgrade to name + role + metric + logo once permission is collected).
// kiddipo: no testimonial supplied yet — shown as a client card, NOT an invented quote.
interface Testimonial {
  by: string
  quote?: string
  note?: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    by: 'SucceedEx',
    quote:
      'BloomSkill engineered the platform behind SucceedEx — AI-powered assessments, fraud-free proctoring and a placement pipeline that guides thousands of students from classroom to career.',
  },
  {
    by: 'kiddipo',
    note: 'An online store for kids’ and women’s wear — a full e-commerce build, from storefront and catalog to cart and checkout.',
  },
  {
    by: 'Onfleek',
    quote:
      'Bloomskill Tech enhanced our platform’s performance and security with their full-stack expertise. Their dedication and customer-centric approach are pivotal to our success.',
  },
]

export function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <header className="ehero">
        <div className="wrap ehero-grid">
          <div className="ehero-copy">
            <span className="eyebrow reveal">Digital product studio · Salem</span>
            <h1 className="display reveal d1">
              From idea to <span className="grad">shipped product</span>. One team.
            </h1>
            <p className="lede reveal d2">
              BloomSkill Tech is a digital product studio. We take you through Define, Design,
              Develop and Deliver — without the handoffs that kill most projects. Built by a
              team from IIT, IIM and NID.
            </p>
            <div className="row cta-row reveal d3">
              <Link className="btn" to="/contact">
                Book a strategy call ↗
              </Link>
              <Link className="btn btn--ghost" to="/achievements">
                See our work
              </Link>
            </div>
          </div>

          <div className="ehero-visual reveal d2">
            <div className="hero-orbit">
              <RadialOrbitalTimeline timelineData={FOURD_ORBIT} />
            </div>
            <p className="ehero-hint">The 4D framework — tap a stage</p>
          </div>
        </div>

        <div className="wrap">
          <div className="cred-strip reveal d4">
            <span className="cred-lead">Our team includes graduates of</span>
            <div className="cred-names">
              {INSTITUTES.map((i) => (
                <span className="cred-name" key={i}>
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ===== 4D FRAMEWORK ===== */}
      <section className="sec sec--tint">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">How we work</span>
            <h2 className="h2">The 4D framework.</h2>
          </div>
          <ol className="fourd">
            {FOURD.map((d) => (
              <li key={d.no} className="fourd-step reveal">
                <span className="fourd-no">{d.no}</span>
                <h3 className="h3">{d.title}</h3>
                <p>{d.copy}</p>
                <p className="fourd-deliver">
                  <strong>Deliverable:</strong> {d.deliver}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="sec">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">In their words</span>
            <h2 className="h2">Teams that shipped with us.</h2>
          </div>
          <div className="tlist">
            {TESTIMONIALS.map((t) => (
              <figure key={t.by} className="tcard reveal">
                {t.quote ? (
                  <>
                    <blockquote>“{t.quote}”</blockquote>
                    <figcaption>— {t.by}</figcaption>
                  </>
                ) : (
                  <>
                    <p className="tcard-name">{t.by}</p>
                    <p className="tcard-note">{t.note}</p>
                  </>
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROOF ===== */}
      <section className="sec sec--tint">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Proof</span>
            <h2 className="h2">We don’t just build for clients. We build for ourselves.</h2>
            <p className="lede">
              The same team, stack and standards run our own products — so we feel every shortcut
              we’d be tempted to take.
            </p>
          </div>
          <div className="proof-grid">
            {PROOF.map((p) => (
              <article key={p.name} className="proof-card reveal">
                <h3 className="h3">{p.name}</h3>
                <p>{p.copy}</p>
                <Link className="link-arrow" to="/achievements">
                  Read the case study →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <FinalCta />
    </>
  )
}
