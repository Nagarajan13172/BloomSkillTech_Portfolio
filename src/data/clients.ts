import { IMG } from './images'

/**
 * Card images for Onfleek / Dofy / Vaikuntam are real screenshots of each
 * client's own homepage (saved under public/clients). Voxiloud keeps a stock
 * image — its site is a Play Store app listing we couldn't confidently identify
 * ("Voxiloud" vs the similarly named "Voxloud"); swap in once the link is known.
 */
export interface Client {
  name: string
  domain: string
  href: string
  initials: string
  /** What Bloomskill Tech delivered for them (short descriptor under the name). */
  service: string
  /** Capabilities delivered, rendered as chips on the spotlight card. */
  tags: string[]
  quote: string
  by: string
  /** Industry banner image for the spotlight card. */
  image: string
}

/**
 * Client spotlights scraped from bloomskilltech.in. Shared by the Home teaser
 * and the dedicated Client Spotlight page so the testimonials stay in one place.
 */
export const CLIENTS: Client[] = [
  {
    name: 'SucceedEx',
    domain: 'succeedex.in',
    href: 'https://succeedex.in',
    initials: 'Sx',
    service: 'B2B CMS · assessments & placement',
    tags: ['B2B CMS', 'Product management', 'Design', 'Development', 'Deployment'],
    quote:
      'Bloomskill Tech engineered the platform behind SucceedEx — AI-powered assessments, fraud-free proctoring and a transparent placement pipeline that now guides thousands of students from classroom to career. They turned an ambitious vision into reliable, daily-use infrastructure our colleges depend on.',
    by: 'SucceedEx Team',
    image: '/clients/succeedex.jpg',
  },
  {
    name: 'Onfleek',
    domain: 'onfleek.in',
    href: 'https://onfleek.in',
    initials: 'On',
    service: 'Web application · performance & security',
    tags: ['Web app', 'Performance', 'Security'],
    quote:
      'Bloomskill Tech enhanced our platform’s performance and security with their full-stack expertise. Their dedication and customer-centric approach are pivotal to our success.',
    by: 'Onfleek Team',
    image: '/clients/onfleek.jpg',
  },
  {
    name: 'Dofy',
    domain: 'dofy.in',
    href: 'https://dofy.in/in_en/india',
    initials: 'Do',
    service: 'Design components · UI development',
    tags: ['Design components', 'UI development'],
    quote:
      'Their cloud services and cybersecurity solutions revolutionised our operations. The proactive support and professionalism are invaluable.',
    by: 'Dofy Management',
    image: '/clients/dofy.jpg',
  },
  {
    name: 'Vaikuntam Realty',
    domain: 'vaikuntamrealty.com',
    href: 'https://vaikuntamrealty.com/aboutus',
    initials: 'Va',
    service: 'Real estate platform · design & development',
    tags: ['Real estate', 'Design', 'Development'],
    quote:
      'They modernised our digital infrastructure with a dynamic user experience. Their innovative solutions and exceptional service exceeded our expectations.',
    by: 'Vaikuntam Realty Group',
    image: '/clients/vaikuntam.jpg',
  },
  {
    name: 'Voxiloud',
    domain: 'play.google.com',
    href: 'https://play.google.com',
    initials: 'Vo',
    service: 'Mobile app · development',
    tags: ['Mobile app', 'Development'],
    quote:
      'Bloomskill Tech transformed our digital presence with innovative solutions and expertise. Their tailored approach and dedication are outstanding.',
    by: 'Voxiloud Team',
    image: IMG.clVoxiloud,
  },
  {
    // No client testimonial on file — this card carries a factual summary of the
    // engagement (strategy + design + product management + the EMS flow), not a quote.
    name: 'Kidipoo',
    domain: 'shop.kidipoo.com',
    href: 'https://shop.kidipoo.com',
    initials: 'Ki',
    service: 'D2C kids & family nightwear · design & EMS',
    tags: ['E-commerce', 'Design', 'EMS'],
    quote:
      'Bloomskill Tech led the product strategy, designed the storefront experience and managed the build for Kidipoo — a direct-to-consumer kids- and family-nightwear brand on Shopify. We also mapped and broke down the full Exchange Management System (EMS): the return-and-exchange flow behind the store’s “Easy Exchange” promise, from customer request through approval to restock.',
    by: 'Bloomskill Tech · project summary',
    image: '/clients/kidipoo.jpg',
  },
]
