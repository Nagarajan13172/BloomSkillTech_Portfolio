# Design System — bloomskilltech.in

The visual job of this site: look like a studio that has NID-trained designers. Generic Bootstrap-style layouts would contradict the core claim. Aim for restrained, editorial, confident — closer to a design studio than an IT services company.

## Direction: "Studio Editorial"

- **Layout:** Generous whitespace, strong typographic hierarchy, asymmetric grids. 12-col grid, max-width 1200px, 24px gutters. Sections breathe — min 96px vertical padding desktop, 64px mobile.
- **Typography:**
  - Display/headings: a characterful grotesque — *Clash Display*, *Cabinet Grotesk*, or *Space Grotesk* (all free via Fontshare/Google). Tight letter-spacing (-0.02em), large scale jumps.
  - Body: *Inter* or *General Sans*, 16–18px, 1.6 line height.
  - Type scale: 14 / 16 / 18 / 24 / 32 / 48 / 72(hero desktop) — hero collapses to 36–40px on mobile.
- **Color:**
  - Base: near-black ink `#101418` on warm paper `#FAFAF7` (avoid pure white/black).
  - One confident accent: deep green `#0E6B4F` (growth/"bloom" without being literal) OR electric indigo `#3D3BF3`. Pick ONE; use for CTAs, links, and the 4D stage markers only.
  - Muted support: `#5C6670` for secondary text, `#E8E6E0` for hairline borders.
  - Dark sections (proof/case studies strip) may invert: ink background, paper text.
- **The 4D motif:** Strategy/Design/Develop/Deliver each get a numbered marker (01–04) in the accent color with a thin connecting line — a horizontal stepper on desktop, vertical timeline on mobile. This motif repeats on home, services, and inside every case study (highlighting which Ds were used).
- **Imagery:** NO generic stock photos of handshakes/laptops. Use: real product screenshots in browser/phone frames, real design artifacts (wireframes, Figma boards) from the Design Lead, simple abstract geometry, and (eventually) real team photos. Until team photos exist, use initials-based monogram avatars, not stock faces.
- **Institute credibility strip:** Text-set institute names in small caps, presented as a collective team credential ("Our team includes graduates of IIT BOMBAY · IIM INDORE · NID AHMEDABAD"). No role labels attached to institutes. Do not use institute logos unless legal clearance is confirmed — alumni status does not grant logo rights.
- **Motion:** Subtle only. Fade-up on scroll (CSS, 200–300ms, respects `prefers-reduced-motion`), accent underline grow on link hover. No parallax, no heavy JS animation libraries — the site must stay near zero-JS.
- **Components to build:** sticky header w/ mobile drawer · hero · credibility strip · 4D stepper · case study card · case study page layout · testimonial card · team card · stat block · CTA band · contact form · footer (NAP info, GST/CIN if applicable, social links).

## Accessibility & quality bars

- Contrast: all text ≥ 4.5:1 (accent-on-paper must be checked; darken accent for small text if needed).
- Focus states visible on all interactive elements; form fields with real labels (no placeholder-as-label).
- Touch targets ≥ 44px; hero CTA reachable without scroll on a 375×667 viewport.
- Images: explicit width/height (no CLS), AVIF/WebP with fallbacks, lazy-load below the fold.
- Performance budget: ≤ 150KB JS total, LCP < 2.0s on simulated 4G (Indian mobile reality).
