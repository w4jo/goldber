import { cn } from '@voluspalabs/lib/utils/cn'
import { ArrowRight, Building2, Car, LineChart, Wind } from 'lucide-react'
import { TYPO } from '@/components/typography'
import { SERVICES } from './content'

// Tone mapping -> icon + accent gradient
interface ToneMeta {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  accent: string
  subtle: string
}

const toneMeta: Record<(typeof SERVICES)[number]['tone'], ToneMeta> = {
  mint: {
    Icon: Building2,
    accent:
      'bg-[linear-gradient(140deg,oklch(0.72_0.19_147/.3),oklch(0.24_0.008_250/0)_55%)]',
    subtle: 'from-brand-teal/25',
  },
  lime: {
    Icon: Wind,
    accent:
      'bg-[linear-gradient(140deg,oklch(0.78_0.12_80/.32),oklch(0.24_0.008_250/0)_55%)]',
    subtle: 'from-brand-lime/25',
  },
  coral: {
    Icon: LineChart,
    accent:
      'bg-[linear-gradient(140deg,oklch(0.68_0.16_80/.35),oklch(0.24_0.008_250/0)_55%)]',
    subtle: 'from-brand-coral/25',
  },
  charcoal: {
    Icon: Car,
    accent:
      'bg-[linear-gradient(140deg,oklch(0.16_0.01_250/.7),oklch(0.24_0.008_250/0)_60%)]',
    subtle: 'from-brand-charcoal/60',
  },
}

export default function ServicesGrid() {
  return (
    <section
      aria-labelledby="services-heading"
      className="wrapper animate-scale-in rounded-3xl motion-reduce:animate-none"
      id="services"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:gap-14">
        {SERVICES.map((s, idx) => (
          <a
            className={cn(
              'group relative isolate animate-slide-up-sm overflow-hidden rounded-3xl border-white/5 bg-gradient-to-br from-background/80 via-background/70 to-background/60 p-0.5 backdrop-blur-sm transition-colors duration-500 hover:border-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:animate-none',
              idx % 2 === 0 ? 'animate-delay-100' : 'animate-delay-200',
            )}
            href={s.href}
            key={s.id}
          >
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.3xl)-4px)] bg-background/70 p-8 md:p-12">
              {/* Accent wash */}
              <div
                aria-hidden
                className={cn(
                  'pointer-events-none absolute inset-0 opacity-60 mix-blend-screen blur-sm transition-opacity duration-700 group-hover:opacity-90',
                  toneMeta[s.tone].accent,
                )}
              />
              <div className="relative z-10 flex items-start gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.03] ring-1 ring-white/10 ring-inset backdrop-blur-sm transition duration-500 group-hover:bg-white/[0.06] group-hover:ring-white/25">
                  {(() => {
                    const IconComp = toneMeta[s.tone].Icon
                    return (
                      <IconComp aria-hidden className="h-7 w-7 text-primary" />
                    )
                  })()}
                </div>
                <div className="flex-1">
                  <h3
                    className={cn(
                      TYPO.cardTitle,
                      'text-balance tracking-tight',
                    )}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-prose text-muted-foreground text-sm/6">
                    {s.blurb}
                  </p>
                </div>
              </div>
              <div className="relative z-10 mt-10 flex items-center gap-4 md:mt-12">
                <span className="inline-flex items-center gap-2 font-semibold text-primary text-xs tracking-wide transition-colors duration-300 group-hover:text-primary/90">
                  Learn more
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 translate-x-0 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
              {/* Subtle bottom glow */}
              <div
                aria-hidden
                className={cn(
                  'pointer-events-none absolute inset-x-0 bottom-0 h-24 translate-y-10 bg-gradient-to-t opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100',
                  toneMeta[s.tone].subtle,
                  'to-transparent',
                )}
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
