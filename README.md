# Bloomskill Tech — Spectrum

The Bloomskill Tech marketing site, built in **React + TypeScript + Vite** from
**Design Direction D · Spectrum** of the Claude Design handoff.

Spectrum is built from the company logo: the blue → indigo → magenta → pink
gradient is the signature throughout — headlines, buttons, accents and the
hero's overlapping-lens motif with the actual mark at its centre. The direction
has been rolled across all four pages.

## Pages

| Route            | Page         | Highlights                                                        |
| ---------------- | ------------ | ----------------------------------------------------------------- |
| `/`              | Home         | Lens-motif hero, capability cards, principles, client spotlights  |
| `/about`         | About        | Mission, vision, history timeline, founder, team                  |
| `/achievements`  | Achievements | College workshops, Yukthi CTF '24 results console, student voices |
| `/contact`       | Contact      | Pitch + details, terminal-flavoured project-brief form            |

## Design system

- **Palette** — `#4f7acf` blue · `#5949a6` indigo · `#b24d9b` magenta · `#f897bf`
  pink, on a soft lavender (`#f7f7fc`) base. Tokens live in
  [`src/styles/global.css`](src/styles/global.css).
- **Type** — Space Grotesk (display) + JetBrains Mono (labels / metadata).
- **Motion** — scroll-reveal on every `.reveal` element via `IntersectionObserver`,
  a sticky blurred nav, breathing hero blobs and a gradient capability ticker.
  All honour `prefers-reduced-motion`.

## Architecture

```
src/
  main.tsx            App bootstrap + BrowserRouter
  App.tsx             Routes (shared Layout + 4 pages)
  components/         Nav, Footer, Ticker, Orbs, CtaCard, Socials, Layout
  hooks/              useReveal (scroll animations), useScrolled (nav shadow)
  pages/              Home, About, Achievements, Contact
  styles/global.css   Full Spectrum design system
public/bst-logo.png   Brand mark (nav, footer, hero lens, favicon)
```

Page content is data-driven — services, principles, clients, workshops,
timeline, team and feedback are arrays at the top of each page component, so
copy edits never touch markup.

## Getting started

```bash
npm install
npm run dev      # local dev server (http://localhost:5173)
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build
```

> **Deploying:** this is a client-side-routed SPA. Configure your host to fall
> back to `index.html` for unknown paths (e.g. a rewrite to `/index.html`) so
> deep links like `/achievements` resolve.

## Notes

- The contact form is front-end only — it shows a friendly confirmation and
  resets. Wire `BriefForm` in [`src/pages/Contact.tsx`](src/pages/Contact.tsx) to
  a real endpoint or `mailto:` when a backend is ready.
- Social links are placeholders (`SOCIALS` in
  [`src/components/nav-data.ts`](src/components/nav-data.ts)).
