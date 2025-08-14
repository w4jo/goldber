import { cn } from '@voluspalabs/lib/utils/cn'
import { Button } from '@voluspalabs/ui/button'
import Image from 'next/image'
import { TYPO } from '@/components/typography'
import { METRICS } from './content'

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate"
      id="top"
    >
      <div className="wrapper relative px-0! py-0 sm:py-24">
        {/* Hero card */}
        <div className="relative animate-scale-in overflow-hidden rounded-b-[1.6rem] bg-card/30 shadow-actions-primary ring-1 ring-white/5 motion-reduce:animate-none md:rounded-[1.6rem]">
          <Image
            alt="Gold and graphite abstract background"
            className="object-cover object-left-top md:object-top"
            fetchPriority="high"
            fill
            placeholder="empty"
            priority
            sizes="100vw"
            src="/images/skyscraper.jpg"
          />
          {/* Readability gradient */}
          <div
            aria-hidden
            className="absolute inset-0 animate-delay-100 animate-fade-in bg-[radial-gradient(circle_at_15%_25%,rgba(255,255,255,0.08),rgba(255,255,255,0)_60%)] motion-reduce:animate-none"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-tr from-black via-black/70 to-transparent opacity-90"
          />

          {/* Content */}
          <div className="relative animate-delay-200 animate-slide-up-sm px-6 pt-44 pb-56 motion-reduce:animate-none sm:px-20">
            <div className="max-w-2xl">
              <h1
                className={cn(
                  'animate-fade-in text-balance text-primary',
                  TYPO.h1,
                )}
                id="hero-heading"
              >
                We invest where life and work meet
              </h1>
              <p
                className={cn(
                  'mt-6 max-w-xl animate-fade-in text-balance text-primary/90',
                  TYPO.titleSm,
                  'font-medium',
                )}
              >
                We invest in European real estate, renewable energy and select
                financial markets. Disciplined, long‑term and designed for
                durable value.
              </p>
              <div className="mt-7 h-px w-28 bg-gradient-to-r from-primary/60 to-primary/0" />
              <div className="mt-8 flex animate-delay-300 animate-scale-in gap-3 motion-reduce:animate-none">
                <Button
                  asChild
                  className="bg-primary text-primary-foreground shadow-black/40 shadow-sm hover:bg-primary/90"
                >
                  <a href="#services">Explore opportunities</a>
                </Button>
                <Button
                  asChild
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                >
                  <a href="#contact">Contact us</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Stats strip: static on mobile, floating on md+ */}
        <div className="px-6 pb-4 sm:px-10 md:px-0">
          <div className="-mt-32 md:pointer-events-none md:inset-x-8 md:bottom-4 md:mx-auto md:max-w-4xl md:translate-y-1/3">
            <div className="pointer-events-auto mx-auto grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-secondary/70 p-4 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-secondary/50 sm:grid-cols-3">
              {METRICS.map((m, idx) => (
                <div
                  className={cn(
                    'flex animate-scale-in items-center justify-between rounded-xl bg-card/80 p-4 shadow-sm ring-1 ring-white/5 motion-reduce:animate-none',
                    idx === 0
                      ? 'animate-delay-100'
                      : idx === 1
                        ? 'animate-delay-200'
                        : 'animate-delay-300',
                  )}
                  key={m.label}
                >
                  <div>
                    <div className={cn('text-primary', TYPO.stat)}>
                      {m.value}
                    </div>
                    <div className={cn('text-foreground/80', TYPO.micro)}>
                      {m.label}
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className="h-2 w-2 rounded-full bg-primary shadow shadow-black/50"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Minimal spacer for md+ where stats float below card */}
      <div className="h-2 md:h-6" />
    </section>
  )
}
