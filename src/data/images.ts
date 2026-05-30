/**
 * Verified Unsplash imagery used on content cards.
 * Every photo ID below was HEAD-checked to return 200 with these params.
 * Helper keeps the query string (quality / width / crop) consistent.
 */
const u = (id: string, w = 900): string =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`

export const IMG = {
  // services
  webdev: u('1461749280684-dccba630e2f6'),
  cloud: u('1451187580459-43490279c0fa'),
  security: u('1550751827-4bd374c3f58b'),
  devops: u('1518770660439-4636190af475'),
  virtuallab: u('1516321318423-f06f85e504b3'),

  // workshops
  wsDevopsKeynote: u('1522202176988-66273c2fd55f'),
  wsFullstack: u('1498050108023-c5249f4df085'),
  wsDevops: u('1667372393119-3d4c48d07fc9'),
  wsNetworking: u('1591808216268-ce0b82787efe'),
  wsProgramming: u('1526379095098-d400fd0bf935'),
  wsFullstack2: u('1517180102446-f3ece451e9d8'),

  // client industries
  clOnfleek: u('1556742049-0cfed4f6a45d'), // e-commerce
  clDofy: u('1563013544-824ae1b704d3'), // retail / e-commerce
  clVaikuntam: u('1560518883-ce09059eeffa'), // real estate
  clVoxiloud: u('1511671782779-c97d3d27a1d4'), // audio app

  // team workspace banners
  teamA: u('1522071820081-009f0129c71c'),
  teamB: u('1531973576160-7125cd663d86'),
  teamC: u('1600880292203-757bb62b4baf'),
} as const
