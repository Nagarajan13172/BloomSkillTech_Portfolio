# BloomSkill Tech website — rebuild progress

Single source of truth for content/design/structure: `.claude/skills/bloomskill-website/`.
Update this file at the end of every session.

## Skill version
- Installed skill updated to **bloomskill-website1** (institute rule change). Key rule now:
  **institutes are a COLLECTIVE team credential only — never mapped to a stage, role, or person.**
  Applied across code: credibility strip redesigned to a collective institute strip; orbital stage
  labels neutralised ("Define what wins" etc.); Home 4D copy de-institutionalised; Services
  "who's in the room" = roles only; home `<meta>` updated.
- **Location is Salem** (user changed Chennai→Salem in both code and the installed skill — keep Salem).

## Key decisions
- **Approach:** Adapt the existing **React + Vite** app in place (NOT the Astro rebuild in the build plan). The user chose this knowingly.
  - **Consequence / open SEO debt:** pages stay client-side-rendered, so the skill's `curl`-HTML rule and Lighthouse/SEO gates are NOT met yet. Add prerendering later (e.g. `vite-react-ssg`) to satisfy SKILL.md rule #1. Flagged per page below.
- **Accent color:** deep green `#0E6B4F` (verdant palette).
- **Display font:** Space Grotesk (already loaded). Body: Inter.
- **Theme:** site default flipped to **light + verdant**; dark mode still available via the existing toggle.

## Status by area
| Area | State | Notes |
|---|---|---|
| Design tokens (light/verdant editorial palette) | ✅ done | warm paper `#FAFAF7`, ink `#101418`, muted `#5C6670`, accent `#0E6B4F` |
| Home page | ✅ rebuilt to skill (hero → credibility → problem/turn → 4D → proof → testimonials → CTA) | copy from brand-and-content.md |
| Hero orbital | ✅ reworked to light/ink + green, repurposed to the **4D framework** (Strategy/Design/Develop/Deliver), two-column hero | `radial-orbital-timeline.tsx` re-themed + card simplified |
| Services page | ✅ rebuilt: 4D expanded (activities/deliverable/duration/who's-in-the-room) + 3 engagement models + #anchors | "one service story, not five" — old 5-practice menu removed |
| About page | ✅ rebuilt: story + values + team (monogram avatars) | see honesty note below |
| Nav CTA | ✅ "Book a strategy call" | |
| Shared `FinalCta` component | ✅ used on Home/Services/About | |
| Products / Achievements / Clients / Contact | ⬜ not yet adapted | still old copy/structure (render in light mode) |
| Sitemap restructure (/work, /process; retire/merge Products·Achievements·Clients) | ⬜ TODO | pages-spec.md sitemap |
| SEO (per-page meta, JSON-LD, sitemap.xml, robots, OG) + SSR/prerender | ⬜ TODO | client-rendered SPA — biggest debt |
| Case studies (Trainerr.in, anti-cheat exam, e-commerce) | ⬜ TODO | needs real artifacts from Bhadri |

## Honesty / data to confirm with Bhadri
- **Per-person institute credentials**: the About team cards are tagged by *discipline* (Develop/Deliver/Design), NOT by institute, because we were not given which team member attended which school. The collective "alumni of IIT Bombay, IIM Indore, NID Ahmedabad" claim is used (skill-approved). Add real institute tags + real photos only once supplied.
- **Founder**: the old About listed "Anish Kumar, founder/CEO" — removed (unverified against the skill). Restore with confirmation if real.
- **Team roles**: professionalised from the old whimsical titles ("Tech Synthesizer" → "Engineering Lead"). Confirm exact titles.
- **Testimonials**: still company-name-only; collect name + role + metric + logo permission to upgrade.

## Next session
- Convert remaining pages (Products, Achievements→/work, Clients, Contact) + footer NAP/WhatsApp.
- Decide prerendering approach (e.g. vite-react-ssg) to close the SEO/SSR debt, then add per-page meta + JSON-LD + sitemap.xml/robots.txt.
- Build the 3 launch case studies once artifacts arrive.
