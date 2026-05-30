import { Orbs } from '../components/Orbs'
import { CtaCard } from '../components/CtaCard'
import { IMG } from '../data/images'

const STATS = [
  { value: '6+', label: 'workshops led' },
  { value: '250+', label: 'CTF teams faced' },
  { value: '2×', label: 'CTF titles' },
  { value: '1st', label: "Yukthi CTF '25" },
]

interface CtfResult {
  round: string
  place: string
  win?: boolean
}
interface Ctf {
  name: string
  year?: string
  org: string
  win?: boolean
  results: CtfResult[]
  note: string
}

const CTF: Ctf[] = [
  {
    name: 'Yukthi CTF',
    year: '2025',
    org: 'TN Police · Selfmade Ninja Academy',
    win: true,
    results: [
      { round: 'Prelims', place: '1st', win: true },
      { round: 'Finals', place: '3rd' },
    ],
    note: 'Topped the preliminary round outright, then finished on the podium in the grand finals.',
  },
  {
    name: 'Tom-CTF',
    year: '2025',
    org: 'Selfmade Ninja · TN Police',
    win: true,
    results: [{ round: 'Grand Finals', place: '1st', win: true }],
    note: 'Champions — a clean first-place finish in the grand finals.',
  },
  {
    name: 'Yukthi CTF',
    year: '2024',
    org: 'TN Police · Selfmade Ninja Academy',
    results: [
      { round: 'Prelims', place: '13th' },
      { round: 'Finals', place: '16th' },
    ],
    note: 'Our national debut — a top-25 finish among 250+ teams and 1,000+ participants.',
  },
]

interface Workshop {
  tag: string
  college: string
  title: string
  copy: string
  lead: string
  img: string
}

const WORKSHOPS: Workshop[] = [
  {
    tag: 'DevOps',
    college: 'AVS Arts & Science',
    title: 'Mastering Modern Development & Automation',
    copy: 'An engaging opening keynote on DevOps and emerging technologies — deep expertise and enthusiasm that resonated with the audience.',
    lead: 'Anish Kumar',
    img: IMG.wsDevopsKeynote,
  },
  {
    tag: 'Full Stack',
    college: 'M. Kumarasamy CoE',
    title: 'Mastering Full Stack Web Development',
    copy: 'A dynamic 4-day workshop with the Department of Electronics & Communication Engineering — from fundamentals to shipping real apps.',
    lead: 'Anish Kumar',
    img: IMG.wsFullstack,
  },
  {
    tag: 'DevOps',
    college: 'St. Joseph’s CoE',
    title: 'DevOps with Docker & Jenkins',
    copy: 'An immersive session covering key DevOps concepts and practical applications — CI/CD, containers and automation in the real world.',
    lead: 'Anish Kumar',
    img: IMG.wsDevops,
  },
  {
    tag: 'Networking',
    college: 'St. Joseph’s IT',
    title: 'CCNA — Cisco Certified Network Associate',
    copy: 'A comprehensive workshop on networking fundamentals and practical skills — tools like Wireshark and the foundations for the CCNA exam.',
    lead: 'Anish Kumar',
    img: IMG.wsNetworking,
  },
  {
    tag: 'Programming',
    college: 'KCG CoE',
    title: 'C & Python Programming Mastery',
    copy: 'Essential programming concepts and hands-on coding — building a strong foundation in both C and Python from the ground up.',
    lead: 'Bhadrinathan',
    img: IMG.wsProgramming,
  },
  {
    tag: 'Full Stack',
    college: 'M. Kumarasamy CoE',
    title: 'Full Stack Development Mastery',
    copy: 'A journey through HTML, CSS, Node.js, React, MongoDB, GitHub and MySQL — the complete toolkit for modern full-stack engineering.',
    lead: 'Bhadrinathan',
    img: IMG.wsFullstack2,
  },
]

interface Feedback {
  quote: string
  workshop: string
}

const FEEDBACK: Feedback[] = [
  {
    quote:
      'The Full Stack workshop was a game-changer. Bhadrinathan’s practical approach with HTML, CSS, Node.js, React, MongoDB and MySQL made everything click. I can’t wait to build my own projects now.',
    workshop: 'Full Stack workshop',
  },
  {
    quote:
      'This DevOps workshop was fantastic. Anish explained Docker, Jenkins and CI/CD pipelines so well — I now feel confident implementing DevOps practices in real-world scenarios.',
    workshop: 'DevOps workshop',
  },
  {
    quote:
      'Anish’s insights into network architecture and tools like Wireshark made learning fun. I feel thoroughly prepared for the CCNA certification thanks to this workshop.',
    workshop: 'CCNA workshop',
  },
  {
    quote:
      'The C and Python workshop was incredibly helpful. Bhadrinathan made complex topics easy, and the hands-on sessions were great — a crucial step in my programming journey.',
    workshop: 'C & Python workshop',
  },
]

export function Achievements() {
  return (
    <>
      <Orbs
        orbs={[
          { style: { width: 480, height: 480, top: -150, right: -120, background: '#f897bf' } },
          { style: { width: 420, height: 420, top: 300, left: -150, background: '#90c0f1' } },
        ]}
      />

      {/* ===== HERO ===== */}
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow reveal">our milestones</span>
          <h1 className="display reveal d1" style={{ maxWidth: '18ch' }}>
            Empowering the <span className="grad">next generation</span>.
          </h1>
          <p className="lede reveal d2" style={{ maxWidth: 620 }}>
            From hands-on college workshops in cutting-edge technology to a standout run at a national
            cybersecurity competition — here’s the work we’re proud of.
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

      {/* ===== WORKSHOPS ===== */}
      <section className="sec">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">01 / workshops</span>
            <h2 className="h2">Transformative, hands-on learning.</h2>
            <p className="lede">
              We host workshops across colleges, equipping students with practical, career-ready
              skills in modern technology.
            </p>
          </div>
          <div className="work-grid">
            {WORKSHOPS.map((w, i) => (
              <article key={w.title} className={`work reveal${i % 3 === 1 ? ' d1' : i % 3 === 2 ? ' d2' : ''}`}>
                <div className="card-media">
                  <img src={w.img} alt={`${w.title} — ${w.college}`} loading="lazy" />
                </div>
                <div className="work-top">
                  <span className="tag--pill">{w.tag}</span>
                  <span className="mono muted" style={{ fontSize: '.72rem' }}>
                    {w.college}
                  </span>
                </div>
                <h3 className="h3">{w.title}</h3>
                <p>{w.copy}</p>
                <div className="work-lead">lead · {w.lead}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTF / COMPETITIONS ===== */}
      <section className="sec ctf">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">02 / capture the flag</span>
            <h2 className="h2">From a top-25 debut to back-to-back titles.</h2>
            <p className="lede">
              Competitive cybersecurity is where we sharpen our edge — reverse engineering,
              exploitation, crypto and forensics under the clock. Lately, we’ve been winning.
            </p>
          </div>

          <div className="ctf-cards">
            {CTF.map((c, idx) => (
              <article
                key={c.name + (c.year ?? '')}
                className={`ctf-card reveal${idx ? ` d${idx}` : ''}${c.win ? ' ctf-card--win' : ''}`}
              >
                {c.win && <span className="ctf-champ">★ champions</span>}
                <div className="ctf-card-head">
                  <h3 className="h3">
                    {c.name}
                    {c.year && <span className="ctf-year"> {c.year}</span>}
                  </h3>
                  <span className="ctf-org mono">{c.org}</span>
                </div>
                <div className="ctf-results">
                  {c.results.map((r) => {
                    const podium = !r.win && ['1st', '2nd', '3rd'].includes(r.place)
                    return (
                      <div className="ctf-result" key={r.round}>
                        <span className="ctf-round mono">{r.round}</span>
                        <span
                          className={`ctf-rank${
                            r.win ? ' ctf-rank--gold' : podium ? ' ctf-rank--podium' : ''
                          }`}
                        >
                          {r.place}
                        </span>
                      </div>
                    )
                  })}
                </div>
                <p className="ctf-note">{c.note}</p>
              </article>
            ))}
          </div>

          <p className="ctf-team reveal">team · Bhadrinathan A · Prithivi</p>
        </div>
      </section>

      {/* ===== FEEDBACK ===== */}
      <section className="sec">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">03 / student feedback</span>
            <h2 className="h2">What the learners say.</h2>
          </div>
          <div className="fb-grid">
            {FEEDBACK.map((f, i) => (
              <figure key={f.workshop} className={`fb reveal${i % 2 ? ' d1' : ''}`}>
                <p>“{f.quote}”</p>
                <figcaption>
                  <span className="monogram">S</span>
                  <span>
                    <strong>Student</strong>
                    <br />
                    <span className="mono muted" style={{ fontSize: '.72rem' }}>
                      {f.workshop}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaCard secondaryLabel="Our story" secondaryTo="/about" />
    </>
  )
}
