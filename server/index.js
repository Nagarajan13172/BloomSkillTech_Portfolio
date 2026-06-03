import 'dotenv/config'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import express from 'express'
import nodemailer from 'nodemailer'
import pinoHttp from 'pino-http'
import { logger } from './logger.js'

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
  logger.fatal('Missing SMTP_USER / SMTP_PASS. Copy .env.example to .env and fill them in.')
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
  .then(() => logger.info('[mailer] SMTP connection verified — ready to send.'))
  .catch((err) => logger.error({ err }, '[mailer] SMTP verify failed'))

const app = express()

// HTTP request logging. Each request gets an id; static-asset chatter and the
// container healthcheck are filtered out so the log reads as page views + API.
app.use(
  pinoHttp({
    logger,
    autoLogging: {
      ignore: (req) => {
        const url = (req.url || '').split('?')[0]
        if (url === '/api/health') return true
        return /\.(js|css|map|png|jpe?g|svg|ico|webp|woff2?|ttf)$/.test(url)
      },
    },
    // 5xx → error, 4xx → warn, everything else → info
    customLogLevel: (_req, res, err) => {
      if (err || res.statusCode >= 500) return 'error'
      if (res.statusCode >= 400) return 'warn'
      return 'info'
    },
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
    req.log.info({ email, service, messageLength: message.length }, 'contact: email sent')
    return res.json({ ok: true })
  } catch (err) {
    req.log.error({ err, email }, '[mailer] send failed')
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

app.listen(PORT, () => logger.info({ port: Number(PORT) }, `[api] listening on http://localhost:${PORT}`))
