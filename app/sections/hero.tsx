import { cn } from '@voluspalabs/lib/utils/cn'
import { Button } from '@voluspalabs/ui/button'
import Image from 'next/image'
import { TYPO } from '../typography'
import { METRICS } from './content'

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate"
      id="top"
    >
      <div className="wrapper relative py-2 sm:py-4">
        {/* Hero card */}
        <div className="relative overflow-hidden rounded-[1.25rem] border bg-card/40 shadow-xl">
          <Image
            alt="Green landscape background"
            className="object-cover"
            fill
            priority
            sizes="100vw"
            src="/placeholder.svg"
          />
          {/* Readability gradient */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-tr from-black/35 via-black/10 to-transparent"
          />

          {/* Content */}
          <div className="relative px-6 py-10 sm:px-10 sm:py-20 lg:py-40">
            <div className="max-w-2xl">
              <h1
                className={cn('animate-fade-in text-white', TYPO.h1)}
                id="hero-heading"
              >
                We invest where life and work meet
              </h1>
              <p
                className={cn(
                  'mt-4 max-w-xl animate-fade-in text-white/90',
                  TYPO.body,
                )}
              >
                Selective opportunities across European real estate and green
                energy. Built for durability, designed for long-term value.
              </p>
              <div className="mt-8 flex gap-3">
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
          <div className="md:pointer-events-none md:absolute md:inset-x-8 md:bottom-4 md:mx-auto md:max-w-4xl md:translate-y-1/3">
            <div className="pointer-events-auto mx-auto grid grid-cols-1 gap-4 rounded-2xl bg-white/85 p-4 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/70 sm:grid-cols-3">
              {METRICS.map((m) => (
                <div
                  className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm"
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
