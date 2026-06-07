# Pages & UX Spec — bloomskilltech.in

## Sitemap

```
/                      Home
/services              The 4D framework expanded + engagement models
/work                  Case study index (filter by D: strategy/design/develop/deliver)
/work/[slug]           Case study detail (markdown content collection)
/about                 Team, story, values (institute credentials live here in full)
/process               "How we build" — the engineering discipline page
/contact               Form + booking embed + direct email/phone/WhatsApp
/blog (phase 2)        Technical & strategy posts, markdown collection
404                    Branded, links home + contact
```

Legal footer pages: /privacy, /terms (simple, required for credibility + ad platforms later).

## Per-page UX requirements

**Global:** sticky header (logo left, 5 links, CTA button right; hamburger drawer < 768px). Footer with full NAP (name/address/phone), email, WhatsApp link, LinkedIn, sitemap links. WhatsApp click-to-chat floating button (Indian B2B reality) — small, bottom-right, dismissible.

**Home:** order = hero → credibility strip → problem/turn → 4D stepper → proof (3 product cards) → testimonials → final CTA. Above the fold on mobile: H1 + sub + both CTAs + credibility strip start. No carousel/sliders anywhere.

**Services:** 4D vertical narrative; each D expandable with deliverables list, duration, "who's in the room". Engagement model cards at the end → CTA. Anchor links so /services#design is shareable.

**Work index:** card grid (image, client, one-line outcome, D-badges). Empty-state safe: looks intentional with only 3 entries.

**Case study detail:** follows the 8-part template in brand-and-content.md. Sticky "Book a strategy call" CTA on desktop sidebar / end-of-page on mobile. Next-case-study link at bottom (keep them in the loop).

**About:** team grid (photo, name, role, bio — no institute tags on individual cards); values; the founding story (3 short paragraphs max). Design Lead card links to case studies filtered by Design.

**Process:** the differentiator page most agencies don't have. Show: phase-gated delivery diagram, testing pyramid (pytest/Vitest/Playwright), CI/CD pipeline visual, sample SOW table of contents (not full SOW), security checklist summary. This page converts technical evaluators and CTOs.

**Contact:** 4-field form max (name, email/phone, what are you building?, budget range dropdown — optional). Submit → success state with expected response time ("within 1 business day") + WhatsApp alternative. Calendly/Cal.com embed for direct booking. Server-side validation + honeypot spam field.

## Things the current site is missing entirely (gap checklist)

- [ ] Case studies / portfolio (the single biggest gap)
- [ ] Team page with real people and credentials
- [ ] Process/engineering-practices page
- [ ] Working crawlable HTML (SSR/SSG)
- [ ] Per-page meta, OpenGraph, JSON-LD, sitemap.xml, robots.txt
- [ ] Clear primary CTA + booking mechanism
- [ ] WhatsApp contact path
- [ ] Google Business Profile (set up off-site; embeds NAP consistency)
- [ ] LinkedIn company page linkage + consistent positioning
- [ ] Analytics (GA4 or Plausible) + Search Console verification
- [ ] Favicon set / OG share image (the WhatsApp/LinkedIn link preview matters in India)
- [ ] Privacy/terms pages
- [ ] 404 page
- [ ] Performance budget & Lighthouse CI
- [ ] Accessibility pass (contrast, focus, labels)
