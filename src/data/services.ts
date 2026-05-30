import { IMG } from './images'

export interface Service {
  num: string
  slug: string
  title: string
  /** One-line summary used in the editorial service menu. */
  tagline: string
  copy: string
  tags: string[]
  img: string
}

/**
 * Single source of truth for capabilities — used by the Home grid and the
 * Services page "menu". Mirrors the five practices on bloomskilltech.in.
 */
export const SERVICES: Service[] = [
  {
    num: '001',
    slug: 'web',
    title: 'Web Design & Development',
    tagline: 'High-performance sites and full-stack apps that ship fast and last.',
    copy: 'High-performance sites and full-stack apps — React, Node.js, MongoDB, MySQL — built for speed and longevity.',
    tags: ['React', 'Node.js', 'UI/UX'],
    img: IMG.webdev,
  },
  {
    num: '002',
    slug: 'cloud',
    title: 'Cloud Services',
    tagline: 'Resilient infrastructure so your business runs lean and always-on.',
    copy: 'Resilient cloud infrastructure and deployment so your business runs leaner, faster and always-on.',
    tags: ['Infra', 'Scaling', 'Uptime'],
    img: IMG.cloud,
  },
  {
    num: '003',
    slug: 'security',
    title: 'Cybersecurity',
    tagline: 'CTF-grade hardening that keeps platforms and customer data safe.',
    copy: 'Proactive hardening and CTF-grade expertise that keeps platforms and customer data protected.',
    tags: ['Hardening', 'Audits', 'CTF'],
    img: IMG.security,
  },
  {
    num: '004',
    slug: 'devops',
    title: 'DevOps & Automation',
    tagline: 'Turning release chaos into a calm, repeatable process.',
    copy: 'CI/CD with Docker and Jenkins — turning release chaos into a calm, repeatable process.',
    tags: ['Docker', 'Jenkins', 'CI/CD'],
    img: IMG.devops,
  },
  {
    num: '005',
    slug: 'labs',
    title: 'Virtual Lab Development',
    tagline: 'Immersive, hands-on virtual laboratories — our origin practice.',
    copy: 'Interactive virtual laboratories for immersive, hands-on learning — our origin practice.',
    tags: ['EdTech', 'Interactive'],
    img: IMG.virtuallab,
  },
]
