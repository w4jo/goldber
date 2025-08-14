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
    id: 'novy-jenstejn',
    number: 2,
    title: 'Novy Jenstejn',
    description:
      'So far, 250 houses have been built and sold, while 50 houses are under construction in phase III. The total number of houses planned for construction is 600.',
    meta: [
      { label: 'Location', value: 'Prague, Czech Republic' },
      // { label: 'Date', value: 'Latest project' },
      {
        label: 'Website',
        value: 'https://rd-jenstejn.cz',
      },
    ],
    image: '/images/projects/novy-jenstejn/novy-jenstejn.jpg',
  },
  {
    id: 'sakura-park',
    number: 2,
    title: 'Sakura Park',
    description:
      'Selective residential and light‑industrial assets across resilient European locations. We pursue durable cash flows, disciplined leverage, and active asset management that compounds over time.',
    meta: [
      { label: 'Location', value: 'Belgrade, Serbia' },
      { label: 'Date', value: 'Latest project' },
      {
        label: 'Website',
        value: 'https://sakurapark.rs',
      },
    ],
    image: '/images/projects/sakura-park/sakura-park.jpg',
  },
  {
    id: 'kloboucnicka',
    number: 3,
    title: 'Kloboucnicka',
    description:
      'Selective residential and light‑industrial assets across resilient European locations. We pursue durable cash flows, disciplined leverage, and active asset management that compounds over time.',
    meta: [
      { label: 'Location', value: 'Prague, Czech Republic' },
      // { label: 'Date', value: 'Latest project' },
      {
        label: 'Website',
        value: 'https://rezidence-kloboucnicka.cz/',
      },
    ],
    image: '/images/projects/kloboucnicka/kloboucnicka.jpg',
  },
  {
    id: 'pula-croatia',
    number: 4,
    title: 'Pula Croatia',
    description:
      'Limited‑run performance vehicles curated for resilience and value retention. Focused on provenance, condition, and long‑term collectability within a balanced portfolio.',
    meta: [
      { label: 'Location', value: 'Pula, Croatia' },
      { label: 'Date', value: 'Coming Soon' },
    ],
    image: '/placeholder.svg',
  },
]

// 4 items grid
export const SERVICES: readonly {
  readonly id: string
  readonly title: string
  readonly blurb: string
  readonly href: string
  readonly tone: 'mint' | 'lime' | 'coral' | 'charcoal'
}[] = [
  {
    id: 'real-estate',
    title: 'Shaping Skylines',
    blurb:
      'Developing iconic properties and creating value through strategic real estate investments.',
    href: '#contact',
    tone: 'mint',
  },
  {
    id: 'wind-parks',
    title: 'Powering the Future',
    blurb:
      'Investing in sustainable energy sources to build a cleaner, more profitable tomorrow.',
    href: '#contact',
    tone: 'lime',
  },
  {
    id: 'batteries',
    title: 'Navigating Opportunity',
    blurb:
      'Expert financial management and commodity trading for robust portfolio growth.',
    href: '#contact',
    tone: 'coral',
  },
  {
    id: 'solar',
    title: 'Driving Excellence',
    blurb:
      "Curating and providing access to the world's most prestigious vehicles.",
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
