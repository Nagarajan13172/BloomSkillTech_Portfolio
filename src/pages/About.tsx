import { FinalCta } from '../components/FinalCta'

/**
 * About — story, values, team (brand-and-content.md + pages-spec.md).
 * Honesty rule: the collective "alumni of IIT Bombay, IIM Indore, NID Ahmedabad"
 * claim is approved; per-person institute tags are NOT invented here — cards are
 * tagged by discipline until Bhadri supplies real credentials + photos.
 */

const VALUES = [
  {
    title: 'We show our work',
    copy: 'Open SOWs, visible test coverage, documented decisions. You can see how the product is being built.',
  },
  {
    title: 'We say no',
    copy: 'Fixed scope means we’d rather decline than overpromise. A clear no beats a missed deadline.',
  },
  {
    title: 'We ship',
    copy: 'A launched product beats a perfect plan. Delivery is the point — everything else serves it.',
  },
]

interface Member {
  initials: string
  name: string
  role: string
  disc: string
  bio: string
  /** Optional link to the member's portfolio / selected work. */
  href?: string
}

const TEAM: Member[] = [
  {
    initials: 'An',
    name: 'AnishKumar',
    role: 'CEO & Cloud Engineer',
    disc: 'Deliver',
    bio: 'Owns end-to-end cloud deployments — provisioning, releases and the infrastructure that gets products live and keeps them running.',
    href: 'https://anishkumar.cloud',
  },
  {
    initials: 'Bh',
    name: 'Bhadrinathan',
    role: 'Engineering Lead',
    disc: 'Develop',
    bio: 'Architects systems end to end and leads full-stack builds — turning complex stacks into shippable products.',
  },
  {
    initials: 'Na',
    name: 'Nagarajan',
    role: 'Frontend Engineer',
    disc: 'Design',
    bio: 'Builds the interface layer — accessible, fast, and faithful to the design system down to the interaction.',
  },
  {
    initials: 'Pr',
    name: 'Prithiviraj',
    role: 'Backend Engineer',
    disc: 'Develop',
    bio: 'Builds the server side — APIs, data models and the business logic the product runs on, with reliability built in.',
  },
  {
    initials: 'Ud',
    name: 'Udhay',
    role: 'Product Designer',
    disc: 'Design',
    bio: 'Leads product and interface design — research and flows turned into high-fidelity UI and a usable design system.',
    href: 'https://udhayindesign.com',
  },
]

export function About() {
  return (
    <>
      {/* ===== HERO ===== */}
      <header className="page-hero">
        <div className="wrap">
          <span className="eyebrow reveal">About BloomSkill Tech</span>
          <h1 className="display reveal d1">
            A small team from India’s best schools, building like it’s <span className="grad">our own</span>.
          </h1>
        </div>
      </header>

      {/* ===== STORY ===== */}
      <section className="sec">
        <div className="wrap">
          <div className="story reveal">
            <p>
              BloomSkill Tech was founded in Salem on a simple observation: great products fail
              when strategy, design and engineering live in different companies. So we put them on
              one team.
            </p>
            <p>
              Our team includes alumni of IIT Bombay, IIM Indore and NID Ahmedabad — people who
              trained at India’s best business, design and engineering schools, and then chose to
              build products instead of decks. The result is one crew that takes you from a market
              question to a launched, monitored product.
            </p>
            <p>
              We build for ourselves too. Our own products run on the same stack and standards we
              sell — so we feel every shortcut we’d be tempted to take.
            </p>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="sec sec--tint">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">How we work</span>
            <h2 className="h2">Three things we won’t compromise.</h2>
          </div>
          <div className="values-grid">
            {VALUES.map((v) => (
              <article key={v.title} className="value-card reveal">
                <h3>{v.title}</h3>
                <p>{v.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="sec">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">The team</span>
            <h2 className="h2">The people who plan, design and build it.</h2>
            <p className="lede">
              One team across the 4D framework — no handoffs to other vendors.
            </p>
          </div>
          <div className="team-cards">
            {TEAM.map((m) => (
              <article key={m.name} className="tcard2 reveal">
                <span className="mono-av" aria-hidden="true">
                  {m.initials}
                </span>
                <h3>{m.name}</h3>
                <p className="role">{m.role}</p>
                <p className="bio">{m.bio}</p>
                <div className="tcard2-foot">
                  <span className="disc">{m.disc}</span>
                  {m.href && (
                    <a
                      className="tcard2-link"
                      href={m.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View work ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
