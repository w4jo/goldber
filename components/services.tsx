import { cn } from '@voluspalabs/lib/utils/cn'
import { TYPO } from '@/components/typography'
import { SERVICES } from './content'

const toneToClass: Record<(typeof SERVICES)[number]['tone'], string> = {
  mint: 'bg-secondary/60',
  lime: 'bg-primary/30',
  coral: 'bg-primary/40',
  charcoal: 'bg-secondary text-foreground',
}

export default function ServicesGrid() {
  return (
    <section
      aria-labelledby="services-heading"
      className="wrapper animate-scale-in rounded-3xl motion-reduce:animate-none"
      id="services"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {SERVICES.map((s, idx) => (
          <a
            className={cn(
              'group animate-slide-up-sm rounded-2xl p-6 shadow motion-reduce:animate-none md:px-16 md:py-14',
              idx % 2 === 0 ? 'animate-delay-100' : 'animate-delay-200',
              toneToClass[s.tone],
            )}
            href={s.href}
            key={s.id}
          >
            <div className="flex items-start justify-between">
              <h3 className={TYPO.cardTitle}>{s.title}</h3>
              <span
                aria-hidden
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary/60 text-foreground transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1"
              >
                →
              </span>
            </div>
            <p className={cn('mt-2', `${TYPO.small}/6`)}>{s.blurb}</p>
            <span
              className={`mt-4 inline-flex items-center gap-1 font-medium underline underline-offset-4 ${TYPO.small}`}
            >
              Learn more
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
