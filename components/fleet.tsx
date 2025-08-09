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
        Luxury Fleet
      </h2>
      <div className="no-scrollbar mt-6 overflow-x-auto">
        <div className="flex min-w-max gap-4">
          {FLEET.map((car, idx) => (
            <article
              className={`w-72 shrink-0 animate-slide-up-sm rounded-2xl bg-card p-3 shadow motion-reduce:animate-none ${idx % 2 === 0 ? 'animate-delay-100' : 'animate-delay-200'}`}
              key={car.model}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  alt={car.model}
                  className="object-cover"
                  fill
                  placeholder="empty"
                  sizes="288px"
                  src={car.image}
                />
              </div>
              <div className="p-2">
                <h3 className={TYPO.titleSm}>{car.model}</h3>
                <p className={`text-foreground/70 ${TYPO.small}`}>
                  {car.specs}
                </p>
                <Button
                  asChild
                  className="mt-3 rounded-full"
                  size="sm"
                  variant="secondary"
                >
                  <a href="#contact">Enquire about rental</a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
