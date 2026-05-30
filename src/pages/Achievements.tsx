import { Orbs } from '../components/Orbs'
import { CtaCard } from '../components/CtaCard'

const STATS = [
  { value: '6+', label: 'workshops led' },
  { value: '5', label: 'partner colleges' },
  { value: '250+', label: 'CTF teams faced' },
  { value: 'Top 25', label: "Yukthi CTF '24" },
]

interface Workshop {
  tag: string
  college: string
  title: string
  copy: string
  lead: string
}

const WORKSHOPS: Workshop[] = [
  {
    tag: 'DevOps',
    college: 'AVS Arts & Science',
    title: 'Mastering Modern Development & Automation',
    copy: 'An engaging opening keynote on DevOps and emerging technologies — deep expertise and enthusiasm that resonated with the audience.',
    lead: 'Anish Kumar',
  },
  {
    tag: 'Full Stack',
    college: 'M. Kumarasamy CoE',
    title: 'Mastering Full Stack Web Development',
    copy: 'A dynamic 4-day workshop with the Department of Electronics & Communication Engineering — from fundamentals to shipping real apps.',
    lead: 'Anish Kumar',
  },
  {
    tag: 'DevOps',
    college: 'St. Joseph’s CoE',
    title: 'DevOps with Docker & Jenkins',
    copy: 'An immersive session covering key DevOps concepts and practical applications — CI/CD, containers and automation in the real world.',
    lead: 'Anish Kumar',
  },
  {
    tag: 'Networking',
    college: 'St. Joseph’s IT',
    title: 'CCNA — Cisco Certified Network Associate',
    copy: 'A comprehensive workshop on networking fundamentals and practical skills — tools like Wireshark and the foundations for the CCNA exam.',
    lead: 'Anish Kumar',
  },
  {
    tag: 'Programming',
    college: 'KCG CoE',
    title: 'C & Python Programming Mastery',
    copy: 'Essential programming concepts and hands-on coding — building a strong foundation in both C and Python from the ground up.',
    lead: 'Bhadrinathan',
  },
  {
    tag: 'Full Stack',
    college: 'M. Kumarasamy CoE',
    title: 'Full Stack Development Mastery',
    copy: 'A journey through HTML, CSS, Node.js, React, MongoDB, GitHub and MySQL — the complete toolkit for modern full-stack engineering.',
    lead: 'Bhadrinathan',
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

      {/* ===== YUKTHI CTF ===== */}
      <section className="sec ctf">
        <div className="wrap ctf-grid">
          <div className="ctf-copy reveal">
            <span className="eyebrow">02 / yukthi ctf 2024</span>
            <h2 className="h2" style={{ marginTop: 14 }}>
              Shining in the cybersecurity arena.
            </h2>
            <p>
              Organised by the Tamil Nadu Police Department with Selfmade Ninja Academy, Yukthi CTF
              2024 drew over 250 teams and 1,000+ participants in the preliminary round alone.
            </p>
            <p>
              Against formidable competition, Bloomskill Tech secured <strong>13th place</strong> in
              the prelims — a coveted spot among the top 25 — then advanced to the finals at Saveetha
              Engineering College, finishing <strong>16th among the top 25 finalists</strong>.
            </p>
            <p className="ctf-team">team · Bhadrinathan A · Prithivi</p>
          </div>

          <div className="console reveal d1">
            <div className="console-bar">
              <span className="console-dot r" />
              <span className="console-dot y" />
              <span className="console-dot g" />
              <span className="console-title">yukthi_ctf_2024 — results</span>
            </div>
            <div className="console-body">
              <div>
                <span className="pmt">$</span> ./scoreboard --team bloomskill
              </div>
              <div className="dim">parsing 250+ teams · 1000+ participants</div>
              <div>&nbsp;</div>
              <div>
                <span className="key">round</span> prelims&nbsp;&nbsp;→ <span className="grn">rank 13</span>{' '}
                <span className="dim">(top 25)</span>
              </div>
              <div>
                <span className="key">round</span> finals&nbsp;&nbsp;&nbsp;→ <span className="grn">rank 16</span>{' '}
                <span className="dim">(top 25)</span>
              </div>
              <div>&nbsp;</div>
              <div>
                <span className="grn">✔ qualified to finals @ Saveetha Engg.</span>
              </div>
              <div>
                <span className="pmt">$</span> <span className="dim">status:</span>{' '}
                excellence_in_cybersecurity
                <span className="cursor" />
              </div>
            </div>
          </div>
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
