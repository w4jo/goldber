export const ORG = {
  name: 'Goldber Real Estate s.r.o.',
  tagline:
    'Selective investments across real estate, green energy and luxury mobility.',
  email: 'hello@goldber.example',
  phone: '+420 000 000 000',
  address: 'Prague, Czech Republic',
} as const

export const NAV_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'fleet', label: 'Fleet' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
] as const

export const METRICS = [
  { label: 'Projects', value: '20+' },
  { label: 'AUM', value: '€4.8M' },
  { label: 'Partners', value: '60+' },
] as const

export interface ProjectItem {
  readonly id: string
  readonly number: number
  readonly title: string
  readonly description: string
  readonly meta: ReadonlyArray<{ label: string; value: string }>
  readonly image: string
}

export const PROJECTS: readonly ProjectItem[] = [
  {
    id: 'real-estate',
    number: 1,
    title: 'Real Estate',
    description:
      'Selective residential and light‑industrial assets across resilient European locations. We pursue durable cash flows, disciplined leverage, and active asset management that compounds over time.',
    meta: [
      { label: 'Location', value: 'Dalarnas, Sweden' },
      { label: 'Size', value: '250 m²' },
      { label: 'Materials', value: 'Oak, Ash, Copper' },
    ],
    image: '/images/real-estate-eu.avif',
  },
  {
    id: 'green-energy',
    number: 2,
    title: 'Green Energy',
    description:
      'Onshore wind and solar paired with storage to deliver stable, long‑term revenues. We favor high‑resource sites with grid access and pragmatic, low‑carbon construction.',
    meta: [
      { label: 'Location', value: 'Dalarnas, Sweden' },
      { label: 'Size', value: '320 m²' },
      { label: 'Materials', value: 'Oak, Ash, Wood-fibre' },
    ],
    image: '/images/wind-turbines-2.avif',
  },
  {
    id: 'luxury-cars',
    number: 3,
    title: 'Luxury Cars',
    description:
      'Limited‑run performance vehicles curated for resilience and value retention. Focused on provenance, condition, and long‑term collectability within a balanced portfolio.',
    meta: [
      { label: 'Location', value: 'Dalarnas, Sweden' },
      { label: 'Size', value: '180 m²' },
      { label: 'Materials', value: 'Ash, Copper, Wood fibre' },
    ],
    image: '/images/lux-cars.avif',
  },
]

export const SERVICES: readonly {
  readonly id: string
  readonly title: string
  readonly blurb: string
  readonly href: string
  readonly tone: 'mint' | 'lime' | 'coral' | 'charcoal'
}[] = [
  {
    id: 'real-estate',
    title: 'Real Estate',
    blurb:
      'Income-focused residential and light industrial assets in resilient European locations. Active asset management and selective co-investments.',
    href: '#contact',
    tone: 'mint',
  },
  {
    id: 'wind-parks',
    title: 'Wind Parks',
    blurb:
      'Partnering on onshore wind with strong resource profiles and grid accessibility. Structured to create a stable, long-term revenue layer.',
    href: '#contact',
    tone: 'lime',
  },
  {
    id: 'batteries',
    title: 'Batteries',
    blurb:
      'Storage to enhance grid reliability and monetize volatility across energy markets. Paired with renewables for balanced returns.',
    href: '#contact',
    tone: 'coral',
  },
  {
    id: 'solar',
    title: 'Solar Energy',
    blurb:
      'Rooftop and ground-mount PV portfolios with long-term PPAs. Scalable deployment to fast-track a sustainable future.',
    href: '#contact',
    tone: 'charcoal',
  },
]

export const FLEET: readonly {
  readonly model: string
  readonly image: string
  readonly specs: string
}[] = [
  {
    model: 'Ferrari F8 Tributo',
    image: '/placeholder.svg',
    specs: '3.9L V8 • 0–100km/h in 2.9s',
  },
  {
    model: 'McLaren 720S',
    image: '/placeholder.svg',
    specs: '4.0L V8 • 0–100km/h in 2.8s',
  },
  {
    model: 'Lamborghini Huracán',
    image: '/placeholder.svg',
    specs: '5.2L V10 • 0–100km/h in 2.9s',
  },
  {
    model: 'Mercedes-AMG GT',
    image: '/placeholder.svg',
    specs: '4.0L V8 • 0–100km/h in 3.6s',
  },
  {
    model: 'BMW M4',
    image: '/placeholder.svg',
    specs: '3.0L I6 • 0–100km/h in 3.7s',
  },
]

export const INSIGHTS: readonly {
  readonly category: string
  readonly title: string
  readonly date: string
  readonly author: string
  readonly image: string
}[] = [
  {
    category: 'Sustainability',
    title: 'Unlocking Hydropower: a baseline for clean returns',
    date: '2024-09-12',
    author: 'Editorial',
    image: '/placeholder.svg',
  },
  {
    category: 'Portfolio',
    title: 'Redefining Wind: parks that finance resilience',
    date: '2024-08-01',
    author: 'Editorial',
    image: '/placeholder.svg',
  },
  {
    category: 'Technology',
    title: 'From cells to stations: advancing solar for stability',
    date: '2024-06-04',
    author: 'Editorial',
    image: '/placeholder.svg',
  },
  {
    category: 'Energy',
    title: 'Illuminating the Future: the real value of clean energy',
    date: '2024-03-21',
    author: 'Editorial',
    image: '/placeholder.svg',
  },
]

export const FAQS: readonly {
  readonly q: string
  readonly a: string
}[] = [
  {
    q: 'How do I enquire about a project or partnership?',
    a: 'Use the contact form below and select your enquiry type. A member of our team will reply within two business days.',
  },
  {
    q: 'What is an international money transfer?',
    a: 'An international money transfer moves funds from one country to another. We only accept funds via regulated banking channels. For any financial instructions contact us directly to verify details.',
  },
  {
    q: 'How do I send money to a bank account?',
    a: 'Initiate a transfer from your bank or payment provider. Always verify the beneficiary details over an authenticated channel before sending funds.',
  },
  {
    q: 'How do I verify my identity?',
    a: 'For regulated transactions, we may require identity verification in accordance with AML/KYC requirements. We will provide secure instructions as needed.',
  },
]

export const LEGAL = {
  investmentDisclaimer:
    'Nothing on this site constitutes an offer or recommendation to invest. Past performance is not indicative of future results. For professional advice and full terms, contact us. (TO BE CONFIRMED BY LEGAL COUNSEL)',
  cookieNotice:
    'We use cookies to analyze traffic and improve your experience. Choose your preferences at any time. (TO BE CONFIRMED BY LEGAL COUNSEL)',
} as const
