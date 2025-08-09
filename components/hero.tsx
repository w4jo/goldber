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
      <div className="wrapper relative px-0! py-0 sm:py-20">
        {/* Hero card */}
        <div className="relative animate-scale-in overflow-hidden rounded-b-[1.25rem] border bg-card/40 shadow-xl motion-reduce:animate-none md:rounded-[1.25rem]">
          <Image
            alt="Green landscape background"
            className="object-cover"
            fill
            placeholder="empty"
            priority
            sizes="100vw"
            src="/images/wind-turbines-1.avif"
          />
          {/* Readability gradient */}
          <div
            aria-hidden
            className="absolute inset-0 animate-delay-100 animate-fade-in bg-gradient-to-tr from-black/80 via-black/40 to-transparent motion-reduce:animate-none"
          />

          {/* Content */}
          <div className="relative animate-delay-200 animate-slide-up-sm px-6 pt-30 pb-40 motion-reduce:animate-none">
            <div className="max-w-2xl">
              <h1
                className={cn(
                  'animate-fade-in text-balance text-white',
                  TYPO.h1,
                )}
                id="hero-heading"
              >
                We invest where life and work meet
              </h1>
              <p
                className={cn(
                  'mt-4 max-w-xl animate-fade-in text-balance text-white/90',
                  TYPO.body,
                )}
              >
                Selective opportunities across European real estate and green
                energy. Built for durability, designed for long-term value.
              </p>
              <div className="mt-8 flex animate-delay-300 animate-scale-in gap-3 motion-reduce:animate-none">
                <Button
                  asChild
                  className="rounded-full bg-white text-foreground hover:bg-white/90"
                >
                  <a href="#services">Explore opportunities</a>
                </Button>
                <Button
                  asChild
                  className="rounded-full bg-primary text-primary-foreground hover:opacity-90"
                >
                  <a href="#contact">Contact us</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Stats strip: static on mobile, floating on md+ */}
        <div className="px-6 pb-4 sm:px-10 md:px-0">
          <div className="-mt-28 md:pointer-events-none md:inset-x-8 md:bottom-4 md:mx-auto md:max-w-4xl md:translate-y-1/3">
            <div className="pointer-events-auto mx-auto grid grid-cols-1 gap-4 rounded-2xl bg-white/85 p-4 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/70 sm:grid-cols-3">
              {METRICS.map((m, idx) => (
                <div
                  className={cn(
                    'flex animate-scale-in items-center justify-between rounded-xl bg-white p-4 shadow-sm motion-reduce:animate-none',
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
                    <div className={cn('text-foreground/60', TYPO.micro)}>
                      {m.label}
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className="h-2 w-2 rounded-full bg-primary"
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
