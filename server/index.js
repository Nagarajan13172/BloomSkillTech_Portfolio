import 'dotenv/config'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import express from 'express'
import nodemailer from 'nodemailer'
import morgan from 'morgan'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const {
  SMTP_USER,
  SMTP_PASS,
  MAIL_TO,
  PORT = 3001,
  NODE_ENV,
} = process.env

if (!SMTP_USER || !SMTP_PASS) {
  console.error(
    '\n[mailer] Missing SMTP_USER / SMTP_PASS. Copy .env.example to .env and fill them in.\n',
  )
  process.exit(1)
}

// Gmail App Passwords are shown with spaces but must be sent without them.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: SMTP_USER, pass: SMTP_PASS.replace(/\s+/g, '') },
})

// Confirm the credentials authenticate at boot (does NOT send mail).
transporter
  .verify()
  .then(() => console.log('[mailer] SMTP connection verified — ready to send.'))
  .catch((err) => console.error('[mailer] SMTP verify failed:', err.message))

const app = express()

// Behind Traefik the socket peer is the proxy, not the visitor. Trusting the
// proxy lets Express read the real client IP from the X-Forwarded-For header
// Traefik sets, exposing it as req.ip. One hop = just Traefik; bump
// TRUST_PROXY_HOPS if you add another proxy in front (Cloudflare → Traefik = 2).
app.set('trust proxy', Number(process.env.TRUST_PROXY_HOPS) || 1)

// HTTP access logging (morgan), in a compact aligned line that leads with the
// visitor's public IP:
//   2026-06-04T10:00:00.000Z  203.0.113.5      POST  201    12 ms     46b  /api/contact
// Colours the status in dev (TTY) only — production logs stay plain text.
// Set LOG_FORMAT to fall back to a morgan preset (combined | common | dev | tiny).
const isProd = NODE_ENV === 'production'
const paint = (code, s) => (isProd ? s : `\x1b[${code}m${s}\x1b[0m`)
const statusColour = (s) => (s >= 500 ? 31 : s >= 400 ? 33 : s >= 300 ? 36 : 32)

// The real public IP of the visitor (req.ip, resolved from X-Forwarded-For).
morgan.token('client-ip', (req) => req.ip || req.socket?.remoteAddress || '-')

const neatLog = (tokens, req, res) => {
  const status = Number(tokens.status(req, res)) || 0
  const ms = tokens['response-time'](req, res)
  const len = tokens.res(req, res, 'content-length') || '0'
  return [
    tokens.date(req, res, 'iso'),
    tokens['client-ip'](req, res).padEnd(15),
    tokens.method(req, res).padEnd(4),
    paint(statusColour(status), String(status)),
    `${ms ? `${ms} ms` : '-'}`.padStart(8),
    `${len}b`.padStart(7),
    tokens.url(req, res),
  ].join('  ')
}

app.use(
  morgan(process.env.LOG_FORMAT || neatLog, {
    skip: (req) => (req.url || '').split('?')[0] === '/api/health',
  }),
)

app.use(express.json({ limit: '32kb' }))

const isEmail = (v) => typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
const clean = (v) => (typeof v === 'string' ? v.trim() : '')
const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ))

app.post('/api/contact', async (req, res) => {
  const name = clean(req.body?.name)
  const email = clean(req.body?.email)
  const service = clean(req.body?.service) || 'Not specified'
  const message = clean(req.body?.message)

  // Validation
  if (name.length < 2) return res.status(400).json({ ok: false, error: 'Please enter your name.' })
  if (!isEmail(email)) return res.status(400).json({ ok: false, error: 'Please enter a valid email address.' })
  if (message.length < 10) {
    return res.status(400).json({ ok: false, error: 'Please add a few more details about your project.' })
  }

  const to = MAIL_TO || SMTP_USER
  const safe = { name: escapeHtml(name), email: escapeHtml(email), service: escapeHtml(service), message: escapeHtml(message) }

  try {
    await transporter.sendMail({
      from: `"Bloomskill Tech — Website" <${SMTP_USER}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: `New project brief from ${name}`,
      text:
        `New contact-form submission\n\n` +
        `Name:    ${name}\n` +
        `Email:   ${email}\n` +
        `Service: ${service}\n\n` +
        `Message:\n${message}\n`,
      html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px;margin:auto;color:#1b1733">
          <h2 style="margin:0 0 4px;font-size:18px">New project brief</h2>
          <p style="margin:0 0 18px;color:#6f6a8a;font-size:13px">Submitted via bloomskilltech.in contact form</p>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr><td style="padding:8px 0;color:#6f6a8a;width:90px">Name</td><td style="padding:8px 0;font-weight:600">${safe.name}</td></tr>
            <tr><td style="padding:8px 0;color:#6f6a8a">Email</td><td style="padding:8px 0"><a href="mailto:${safe.email}">${safe.email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#6f6a8a">Service</td><td style="padding:8px 0">${safe.service}</td></tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:#f7f7fc;border-radius:12px;border:1px solid #ece9f5">
            <div style="color:#6f6a8a;font-size:12px;margin-bottom:6px">Message</div>
            <div style="white-space:pre-wrap;line-height:1.55">${safe.message}</div>
          </div>
        </div>`,
    })
    console.log(`[contact] email sent — from ${email} (service: ${service})`)
    return res.json({ ok: true })
  } catch (err) {
    console.error('[mailer] send failed:', err.message)
    return res.status(502).json({ ok: false, error: 'Could not send your message right now. Please email us directly.' })
  }
})

// Health check
app.get('/api/health', (_req, res) => res.json({ ok: true }))

// In production, serve the built SPA from /dist (so `npm run build && npm start`
// gives a single self-contained server). Skipped in dev — Vite serves the app.
const distDir = path.join(ROOT, 'dist')
if (NODE_ENV === 'production' || fs.existsSync(distDir)) {
  app.use(express.static(distDir))
  app.get(/^\/(?!api\/).*/, (_req, res) => res.sendFile(path.join(distDir, 'index.html')))
}

app.listen(PORT, () => console.log(`[api] listening on http://localhost:${PORT}`))
