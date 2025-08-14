import { Button } from '@voluspalabs/ui/button'
import Image from 'next/image'
import { TYPO } from '@/components/typography'
import { FLEET } from './content'

export default function FleetCarousel() {
  return (
    <section
      aria-labelledby="fleet-heading"
      className="wrapper animate-scale-in py-16 motion-reduce:animate-none sm:py-24"
      id="fleet"
    >
      <h2 className={TYPO.h2} id="fleet-heading">
        Luxury Cars
      </h2>
      <p className={`mt-2 max-w-2xl text-foreground/80 ${TYPO.body}`}>
        Sales and rental of luxury vehicles. For availability and reservations,
        use the contact form below — our team will reply promptly.
      </p>
      <div className="no-scrollbar mt-8 overflow-x-auto">
        <div className="flex min-w-max gap-6">
          {FLEET.map((car, idx) => (
            <article
              className={`group w-72 shrink-0 animate-slide-up-sm overflow-hidden rounded-2xl border border-white/5 bg-card/70 p-3 ring-1 ring-white/5 backdrop-blur-sm transition-colors duration-500 hover:border-white/15 motion-reduce:animate-none ${idx % 2 === 0 ? 'animate-delay-100' : 'animate-delay-200'}`}
              key={car.model}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-white/10">
                <Image
                  alt={car.model}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  fill
                  placeholder="empty"
                  sizes="288px"
                  src={car.image}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-black/0 to-transparent opacity-70 mix-blend-overlay" />
              </div>
              <div className="p-2">
                <h3 className={`${TYPO.titleSm} text-balance`}>{car.model}</h3>
                <p className={`mt-1 text-foreground/70 ${TYPO.small}`}>
                  {car.specs}
                </p>
                <Button asChild className="mt-3 rounded-full" size="sm">
                  <a href="#contact">Enquire</a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
