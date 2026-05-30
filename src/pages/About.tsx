import type { ReactNode } from 'react'
import { Orbs } from '../components/Orbs'
import { CtaCard } from '../components/CtaCard'
import { IMG } from '../data/images'

const MISSION = [
  {
    no: 'M.01',
    title: 'Empowering Businesses',
    copy: 'We help businesses of every size thrive in the digital age — with technology that’s genuinely useful, not just impressive.',
  },
  {
    no: 'M.02',
    title: 'Innovation at the Core',
    copy: 'Innovation sits at the heart of everything we do. We continually push the boundaries of technology to unlock new possibilities.',
  },
  {
    no: 'M.03',
    title: 'Transformative Solutions',
    copy: 'From web design to cybersecurity, we deliver solutions that drive growth, efficiency and sustainability.',
  },
]

const VISION = [
  {
    no: 'V.01',
    title: 'Building Bridges, Breaking Barriers',
    copy: 'We break barriers and build bridges, connecting businesses to thrive digitally with the tools, resources and expertise to succeed.',
  },
  {
    no: 'V.02',
    title: 'Sustainable Growth, Sustainable Future',
    copy: 'We’re dedicated to growth that benefits clients and communities alike — paving the way for a brighter, more inclusive future.',
  },
  {
    no: 'V.03',
    title: 'Join Us on the Journey',
    copy: 'Together we’ll empower the future of business, unlock new possibilities and shape a brighter future worldwide.',
  },
]

interface Milestone {
  year: string
  title: string
  copy: ReactNode
  next?: boolean
}

const TIMELINE: Milestone[] = [
  {
    year: '2022',
    title: 'Venturing into the digital realm',
    copy: 'Bloomskill Tech was born — fueled by a passion for innovation and a drive to make a difference. We began with humble beginnings and a bold vision for the future.',
  },
  {
    year: '2023',
    title: 'Exploring new frontiers',
    copy: 'We entered virtual laboratory development, introducing innovative solutions for interactive learning that revolutionised how people engage with technology.',
  },
  {
    year: '2024',
    title: 'Empowering businesses with technology',
    copy: 'We broadened our scope into web development and cloud services — delivering bespoke solutions that drive real business success in the digital realm.',
  },
  {
    year: 'next',
    title: 'Unleashing the power of learning',
    copy: (
      <>
        We’ll unveil three editions of our flagship product — <strong>Wise Plus</strong>,{' '}
        <strong>Pro</strong> and <strong>Ultra</strong> — pushing the boundaries of technology and
        empowering individuals to excel.
      </>
    ),
    next: true,
  },
]

const TEAM = [
  {
    initials: 'Bh',
    name: 'Bhadrinathan',
    role: 'Tech Synthesizer',
    copy: 'Architects systems end-to-end and leads full-stack training — turning complex stacks into shippable products.',
    img: IMG.teamA,
  },
  {
    initials: 'Pr',
    name: 'Prithiviraj',
    role: 'Automation Guru',
    copy: 'Lives in pipelines and scripts — automating the tedious so teams can focus on what actually moves the needle.',
    img: IMG.teamB,
  },
  {
    initials: 'Na',
    name: 'Nagarajan',
    role: 'Frontend Virtuoso',
    copy: 'Obsesses over the pixels and the interactions — crafting interfaces that feel as good as they look.',
    img: IMG.teamC,
  },
]

export function About() {
  return (
    <>
      <Orbs
        orbs={[
          { style: { width: 460, height: 460, top: -140, left: -120, background: '#90c0f1' } },
          { style: { width: 420, height: 420, top: 320, right: -150, background: '#f897bf' } },
        ]}
      />

      {/* ===== HERO ===== */}
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow reveal">about bloomskill tech</span>
          <h1 className="display reveal d1" style={{ maxWidth: '16ch' }}>
            Catalyzing growth through <span className="grad">ingenuity</span>.
          </h1>
          <p className="lede reveal d2" style={{ maxWidth: 620 }}>
            Bloomskill Tech pioneers transformative solutions at the intersection of technology and
            imagination — unlocking potential and sculpting digital landscapes with innovation at the
            core.
          </p>
        </div>
      </section>

      {/* ===== MISSION ===== */}
      <section className="sec sec--tight">
        <div className="wrap two-col">
          <div className="shead reveal">
            <span className="eyebrow">our mission</span>
            <h2 className="h2" style={{ marginTop: 14 }}>
              Empowering growth through innovative solutions.
            </h2>
          </div>
          <div className="col-list">
            {MISSION.map((m, i) => (
              <div key={m.no} className={`mv-item reveal${i ? ` d${i}` : ''}`}>
                <span className="mv-no">{m.no}</span>
                <div>
                  <h3 className="h3">{m.title}</h3>
                  <p>{m.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VISION ===== */}
      <section className="sec vision">
        <div className="wrap two-col">
          <div className="shead reveal">
            <span className="eyebrow">our vision</span>
            <h2 className="h2" style={{ marginTop: 14 }}>
              Catalyzing the future of business.
            </h2>
          </div>
          <div className="col-list">
            {VISION.map((v, i) => (
              <div key={v.no} className={`mv-item reveal${i ? ` d${i}` : ''}`}>
                <span className="mv-no">{v.no}</span>
                <div>
                  <h3 className="h3">{v.title}</h3>
                  <p>{v.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HISTORY ===== */}
      <section className="sec">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">our history</span>
            <h2 className="h2">Pioneering innovation, year by year.</h2>
          </div>
          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <div key={t.year} className={`tl-item reveal${i ? ` d${i}` : ''}`}>
                <div className="tl-year">{t.year}</div>
                <div className={`tl-body${t.next ? ' tl-body--next' : ''}`}>
                  <h3 className="h3">{t.title}</h3>
                  <p>{t.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOUNDER ===== */}
      <section className="sec sec--tint">
        <div className="wrap founder">
          <div className="founder-card reveal">
            <div className="founder-portrait">
              <span>AK</span>
            </div>
            <div className="founder-meta">
              <span className="badge-num">founder &amp; ceo</span>
              <a
                className="mono muted"
                href="https://anishkumar.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '.78rem' }}
              >
                anishkumar.cloud ↗
              </a>
            </div>
          </div>
          <div className="founder-copy reveal d1">
            <span className="eyebrow">at the helm</span>
            <h2 className="h2" style={{ marginTop: 12 }}>
              Anish Kumar
            </h2>
            <p className="lede" style={{ marginTop: 18 }}>
              A dynamic programmer with five years of experience, specialising in innovative web
              applications and problem-solving.
            </p>
            <p className="muted" style={{ marginTop: 16 }}>
              Committed to effective communication and teamwork, Anish believes collaboration is
              crucial for project success — fostering a positive, inclusive environment where ideas
              become products.
            </p>
            <a
              className="btn"
              href="https://anishkumar.cloud/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 26 }}
            >
              Get in touch ↗
            </a>
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="sec">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">the team</span>
            <h2 className="h2">Unveil our tech geniuses.</h2>
            <p className="lede">
              Meet the brilliant minds behind our solutions — driving technological excellence with
              passion and expertise.
            </p>
          </div>
          <div className="team-grid">
            {TEAM.map((member, i) => (
              <article key={member.name} className={`team reveal${i ? ` d${i}` : ''}`}>
                <div className="card-media">
                  <img src={member.img} alt={`${member.name} — ${member.role}`} loading="lazy" />
                </div>
                <div className="monogram">{member.initials}</div>
                <h3 className="h3">{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="muted">{member.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaCard secondaryLabel="See our work" secondaryTo="/achievements" />
    </>
  )
}
