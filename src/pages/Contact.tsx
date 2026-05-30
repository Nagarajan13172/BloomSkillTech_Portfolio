import { useState, type FormEvent } from 'react'
import { Orbs } from '../components/Orbs'
import { Socials } from '../components/Socials'

const SERVICES = [
  'Web design & development',
  'Cloud services',
  'Cybersecurity',
  'DevOps & automation',
  'Virtual lab development',
  'Something else',
]

function BriefForm() {
  const [ok, setOk] = useState('')

  // Front-end only — mirrors the prototype's friendly confirmation (no backend).
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const fullName = (data.get('name') as string) || 'there'
    const first = fullName.split(' ')[0]
    setOk(`> message queued. thanks, ${first} — we’ll reply within 24h.`)
    form.reset()
  }

  return (
    <div className="brief reveal d1">
      <div className="brief-bar">
        <span className="console-dot r" />
        <span className="console-dot y" />
        <span className="console-dot g" />
        <span className="console-title">new_project.sh</span>
      </div>
      <form className="brief-form" onSubmit={handleSubmit} noValidate>
        <p className="form-line">
          <span className="pmt">$</span> init project_brief
        </p>
        <label className="field">
          <span className="field-label">// your name</span>
          <input type="text" name="name" placeholder="Ada Lovelace" required />
        </label>
        <label className="field">
          <span className="field-label">// email</span>
          <input type="email" name="email" placeholder="you@company.com" required />
        </label>
        <label className="field">
          <span className="field-label">// what do you need</span>
          <select name="service" defaultValue={SERVICES[0]}>
            {SERVICES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="field">
          <span className="field-label">// project details</span>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about the problem you're solving..."
          />
        </label>
        <button className="btn" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
          Send brief ↗
        </button>
        <p className={`form-ok${ok ? ' show' : ''}`}>{ok}</p>
      </form>
    </div>
  )
}

export function Contact() {
  return (
    <>
      <Orbs
        orbs={[
          { style: { width: 480, height: 480, top: -120, right: -100, background: '#f897bf' } },
          { style: { width: 420, height: 420, top: 220, left: -150, background: '#90c0f1' } },
        ]}
      />

      {/* ===== HERO / FORM ===== */}
      <section className="page-hero" id="start" style={{ paddingBottom: 'clamp(40px,7vw,80px)' }}>
        <div className="wrap contact-grid">
          <div className="contact-info">
            <span className="eyebrow reveal">let’s engage</span>
            <h1 className="display reveal d1" style={{ maxWidth: '14ch', marginTop: 16 }}>
              Let’s build something <span className="grad">remarkable</span>.
            </h1>
            <p className="lede reveal d2" style={{ maxWidth: '48ch', marginTop: 24 }}>
              Keen to pioneer the future with a collaborative venture? Tell us what you’re working on
              — we typically reply within 24 hours.
            </p>

            <div className="contact-rows reveal d3">
              <a
                className="contact-row"
                href="https://anishkumar.cloud/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cr-label">founder</span>
                <span className="cr-value">
                  anishkumar.cloud <span className="muted">↗</span>
                </span>
              </a>
              <a
                className="contact-row"
                href="https://bloomskilltech.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cr-label">web</span>
                <span className="cr-value">
                  bloomskilltech.in <span className="muted">↗</span>
                </span>
              </a>
              <div className="contact-row">
                <span className="cr-label">based</span>
                <span className="cr-value">India · remote-first</span>
              </div>
            </div>

            <div className="socials-row reveal d4">
              <span className="mono muted" style={{ fontSize: '.74rem' }}>
                find us
              </span>
              <Socials />
            </div>
          </div>

          <BriefForm />
        </div>
      </section>

      {/* ===== QUICK BAND ===== */}
      <section className="sec sec--tight" style={{ paddingBottom: 'clamp(56px,9vw,110px)' }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2 className="h3" style={{ color: '#fff' }}>
                Not sure where to start?
              </h2>
              <p>Book a no-pressure chat — we’ll help you scope it.</p>
            </div>
            <a className="btn btn--white" href="mailto:hello@bloomskilltech.in">
              Email us directly ↗
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
