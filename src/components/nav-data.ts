export interface NavItem {
  label: string
  to: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Achievements', to: '/achievements' },
  { label: 'Clients', to: '/clients' },
  { label: 'Contact', to: '/contact' },
]

export interface Social {
  label: string
  href: string
  aria: string
}

export const SOCIALS: Social[] = [
  { label: 'IG', href: '#', aria: 'Instagram' },
  { label: 'YT', href: '#', aria: 'YouTube' },
  { label: 'GL', href: '#', aria: 'GitLab' },
  { label: 'IN', href: '#', aria: 'LinkedIn' },
  { label: 'TG', href: '#', aria: 'Telegram' },
]
