import { cn } from '@voluspalabs/lib/utils/cn'
import { TYPO } from '../typography'
import { SERVICES } from './content'

const toneToClass: Record<(typeof SERVICES)[number]['tone'], string> = {
  mint: 'bg-[var(--brand-bg-soft)] text-background/95',
  lime: 'bg-[var(--brand-lime)]',
  coral: 'bg-[var(--brand-coral)] ',
  charcoal: 'bg-[var(--brand-charcoal)] text-white',
}

export default function ServicesGrid() {
  return (
    <section
      aria-labelledby="services-heading"
      className="wrapper py-16 sm:py-24"
      id="services"
    >
      <h2 className={TYPO.h2} id="services-heading">
        We partner to fast‑track a sustainable future
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {SERVICES.map((s) => (
          <a
            className={cn('group rounded-2xl p-6 shadow', toneToClass[s.tone])}
            href={s.href}
            key={s.id}
          >
            <div className="flex items-start justify-between">
              <h3 className={TYPO.cardTitle}>{s.title}</h3>
              <span
                aria-hidden
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-foreground transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1"
              >
                →
              </span>
            </div>
            <p
              className={cn(
                'mt-2 text-foreground/80',
                `${TYPO.small}/6`,
                toneToClass[s.tone],
              )}
            >
              {s.blurb}
            </p>
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
