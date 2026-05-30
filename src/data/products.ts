export interface Product {
  name: string
  domain: string
  href: string
  category: string
  tagline: string
  description: string
  /** Highlight chips (features or headline stats). */
  features: string[]
  tags: string[]
  image: string
  /** Accent tint behind the showcase shot. */
  accent: 'blue' | 'amber'
}

/** Products Bloomskill Tech has shipped — showcased on the Products page. */
export const PRODUCTS: Product[] = [
  {
    name: 'Trinity Network',
    domain: 'vpn.youngstorage.in',
    href: 'https://vpn.youngstorage.in',
    category: 'VPN · Network Security',
    tagline: 'Secure, private internet — from anywhere.',
    description:
      'A VPN server that encrypts your traffic, hides your IP address and lets you reach content safely from anywhere in the world — with a live dashboard to manage it all.',
    features: ['Encrypted tunnel', 'IP masking', 'Global access', 'Live dashboard'],
    tags: ['VPN', 'Privacy', 'Networking'],
    image: '/products/vpn.jpg',
    accent: 'blue',
  },
  {
    name: 'zerocode',
    domain: 'zerocode.dev.succeedex.in',
    href: 'https://zerocode.dev.succeedex.in',
    category: 'Developer Tooling · Code Sandbox',
    tagline: 'Run untrusted code. Without the prayer.',
    description:
      'A self-hosted code-execution sandbox written in Rust — eight kernel-enforced isolation layers, sub-5ms job pickup, REST + SSE streaming, and 20 languages out of the box.',
    features: ['8 isolation layers', '60 languages', '<5ms dispatch p99', '0 CVEs'],
    tags: ['Rust', 'Sandbox', 'REST + SSE'],
    image: '/products/zerocode.jpg',
    accent: 'amber',
  },
]
