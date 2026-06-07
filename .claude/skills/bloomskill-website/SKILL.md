---
name: bloomskill-website
description: Complete brand, content, design, and build guide for bloomskilltech.in — BloomSkill Tech's company website. Use this skill whenever working on the BloomSkill Tech website in any way - rebuilding it, writing or editing page copy, adding pages or case studies, fixing SEO, adjusting design, or deploying. Triggers on "bloomskill website", "bloomskilltech.in", "company site", "agency website", "rebuild the site", "add a case study", "update homepage", or any task touching BloomSkill Tech's brand presence, positioning, or web content.
---

# BloomSkill Tech Website

This skill is the single source of truth for bloomskilltech.in. Every page, every line of copy, and every visual decision must follow the rules here. Read the relevant reference file BEFORE writing code or content:

| Task | Read first |
|---|---|
| Writing/editing any copy | `references/brand-and-content.md` |
| Building/styling any page or component | `references/design-system.md` |
| Creating a new page or changing structure/UX | `references/pages-spec.md` |
| Starting the rebuild or planning work | `references/build-plan.md` |

## The brand in one paragraph

BloomSkill Tech is a digital product studio in Salem that takes clients from idea to production with one team — no handoffs between freelance designers and dev shops. The service framework is **Define → Design → Develop → Deliver (the 4D framework)**, and the credibility engine is the team: graduates of **IIT Bombay, IIM Indore and NID Ahmedabad** work at BloomSkill. Mention the institutes as a collective team credential only — NEVER map a specific institute to a specific role, service stage, or person on any page. The proof points are real shipped products (Trainerr.in, anti-cheat exam platform, e-commerce builds) and a visible engineering process (CI/CD, automated testing, phased delivery, structured SOWs).

## Non-negotiable rules

1. **NEVER ship a client-side-only rendered page.** The current site's fatal flaw is empty server HTML. Every route must render full HTML at build time or on the server (Astro or Next.js SSG). Verify with `curl <url> | grep <h1 text>` — if the headline isn't in the raw HTML, the page is broken.
2. **No buzzword copy.** Banned words: "unlocking potential", "transformative", "innovative solutions", "catalyzing", "synergy", "cutting-edge", "world-class". Every claim must be concrete: a number, a named institute, a shipped product, or a process step.
3. **Credentials must be honest.** Say "our team includes alumni of IIT Bombay, IIM Indore and NID Ahmedabad" — never imply institutional partnership or that every member is from these schools. Never invent names, batch years, or credentials not provided by Bhadri.
4. **Every page ends in a CTA.** Primary CTA everywhere: "Book a strategy call" (Calendly or contact form). Secondary: "See our work".
5. **One service story, not five.** Cloud, cybersecurity, DevOps fold INTO the 4D framework as capabilities under Develop/Deliver. They are never presented as separate top-level services.
6. **SEO is structural.** Every page: unique title (<60 chars), meta description (<155 chars), one h1, OpenGraph + Twitter tags, JSON-LD (Organization on home, Service on services, Article on case studies). Sitemap.xml + robots.txt generated at build.
7. **Mobile-first.** Most Indian B2B prospects will open this on a phone from a WhatsApp/LinkedIn link. Test at 375px before desktop.

## Tech stack for the rebuild

- **Astro** (static output, zero-JS by default) + Tailwind CSS. React islands only where interactivity is genuinely needed (contact form, mobile nav).
- Content collections (markdown) for case studies and blog posts so new entries are just .md files.
- Forms: POST to a FastAPI endpoint on the existing Hostinger VPS (reuse BloomSkill's stack) or Formspree as fallback; send notification via existing Fast2SMS/email module.
- Deploy: static build to Hostinger (or Cloudflare Pages free tier — recommend it for speed in India via edge caching). GitHub Actions: build → Lighthouse CI check (fail under 90 performance) → deploy.

## Definition of done (per page)

- Raw HTML contains all content (curl test passes)
- Lighthouse: Performance ≥ 90, SEO ≥ 95, Accessibility ≥ 90 (mobile)
- Unique meta title/description + JSON-LD present
- Renders correctly at 375px and 1440px
- Has a visible CTA above the fold and at page end
- Zero banned buzzwords; all copy traceable to brand-and-content.md
