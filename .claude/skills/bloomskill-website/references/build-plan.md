# Build Plan — execute in Claude Code, phase by phase

Run one phase per session/branch. Each phase has a verification gate — do not start the next phase until the gate passes. Commit per task, PR per phase.

## Phase 0 — Repo & scaffold (½ day)
- Init Astro + Tailwind project (`npm create astro@latest`, strict TS), repo `bloomskill-website`.
- Set up content collections: `work` (case studies), `blog`.
- Configure fonts (Fontshare/Google), Tailwind theme tokens from design-system.md (colors, type scale, spacing).
- GitHub Actions: build + Lighthouse CI (mobile, thresholds: perf 90 / seo 95 / a11y 90) on every PR.
- **Gate:** `npm run build` passes; CI green on a hello-world page; `curl` of built page shows full HTML.

## Phase 1 — Design system components (1–2 days)
- Build global layout: header (sticky, mobile drawer), footer (NAP, links), CTA band, WhatsApp float.
- Build components: Hero, CredibilityStrip, FourDStepper, CaseStudyCard, TestimonialCard, TeamCard, StatBlock, ContactForm (island).
- Storybook not needed — build a `/dev/components` preview page (excluded from sitemap) to review everything at 375px and 1440px.
- **Gate:** components page reviewed visually at both breakpoints; zero layout shift; reduced-motion respected.

## Phase 2 — Core pages (2–3 days)
- Home, Services, About, Process, Contact, 404, privacy, terms — copy strictly from brand-and-content.md, structure from pages-spec.md.
- Contact form wired to backend endpoint (FastAPI on VPS) or Formspree; honeypot + server validation; success state.
- **Gate:** every page passes the Definition of Done in SKILL.md (curl test, Lighthouse, meta/JSON-LD, mobile, CTA, no buzzwords).

## Phase 3 — Case studies (1–2 days + content gathering)
- Implement /work index + detail layout per the 8-part template.
- Write 3 launch case studies as markdown: Trainerr.in, anti-cheat exam platform, e-commerce build (anonymize if contractually required).
- Insert Design Lead's real artifacts (export from Figma as compressed WebP; caption prior-employer work honestly).
- **Gate:** 3 case studies live; each shows at least one real design artifact and one technical depth detail; Article JSON-LD validates.

## Phase 4 — SEO, analytics, launch (1 day)
- sitemap.xml, robots.txt, canonical URLs, OG share image (1200×630 branded card), favicon set.
- Plausible or GA4; Google Search Console + submit sitemap; Bing Webmaster.
- Deploy to Cloudflare Pages (or Hostinger static); point bloomskilltech.in DNS; 301 any old indexed URLs; verify HTTPS.
- Off-site same week: Google Business Profile, LinkedIn page copy aligned to new positioning.
- **Gate:** site live; Search Console fetch-as-Google shows full content; all Lighthouse scores hold on production URL.

## Phase 5 — Post-launch loop (ongoing)
- 1 case study or technical post per month (anti-cheat architecture, Razorpay escrow patterns, CI/CD for FastAPI+React — content already exists in BloomSkill's work).
- Collect upgraded testimonials (name + role + metric + logo permission).
- Add real team photos replacing monograms.
- Quarterly: review Search Console queries, expand pages for terms that show impressions.

## Claude Code usage notes
- Install this skill, then per phase prompt e.g.: "Using the bloomskill-website skill, execute Phase 2. Follow brand-and-content.md copy exactly. Stop at the gate and show me the checklist results."
- Keep a `PROGRESS.md` in the repo root; update it at the end of every session so parallel/future sessions have state.
- Never let a session "improve" the copy or palette ad hoc — changes to brand/design go into this skill's reference files first, then into code.
