import Image from 'next/image'
import { FLEET } from './content'

export default function FleetCarousel() {
  return (
    <section
      aria-labelledby="fleet-heading"
      className="wrapper py-16 sm:py-24"
      id="fleet"
    >
      <h2 className="font-semibold text-3xl sm:text-4xl" id="fleet-heading">
        Luxury Fleet
      </h2>
      <div className="no-scrollbar mt-6 overflow-x-auto">
        <div className="flex min-w-max gap-4">
          {FLEET.map((car) => (
            <article
              className="w-72 shrink-0 rounded-2xl bg-card p-3 shadow"
              key={car.model}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  alt={car.model}
                  className="object-cover"
                  fill
                  sizes="288px"
                  src={car.image}
                />
              </div>
              <div className="p-2">
                <h3 className="font-semibold text-lg">{car.model}</h3>
                <p className="text-foreground/70 text-sm">{car.specs}</p>
                <a
                  className="mt-3 inline-flex rounded-full border border-foreground/10 px-3 py-1.5 font-medium text-sm hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  href="#contact"
                >
                  Enquire about rental
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

