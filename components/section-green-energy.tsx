import { Button } from '@voluspalabs/ui/button'
import Image from 'next/image'
import { TYPO } from '@/components/typography'

export default function SectionGreenEnergy() {
  return (
    <section
      aria-labelledby="green-energy-heading"
      className="wrapper animate-scale-in py-12 motion-reduce:animate-none sm:py-20"
      id="green-energy"
    >
      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <h2 className={TYPO.h2} id="green-energy-heading">
            Investing in a Sustainable Future
          </h2>
          <p className={`mt-2 max-w-2xl text-foreground/80 ${TYPO.body}`}>
            We are committed to driving the transition to clean energy. By
            investing in solar, wind, and hydro power, we generate not only
            clean electricity but also sustainable, long-term financial returns.
            It's an investment in our planet and our portfolio.
          </p>
          <ul className={`mt-4 grid list-disc gap-2 pl-5 ${TYPO.small}`}>
            <li>
              Strategic investments across solar, wind, and hydroelectric
              projects.
            </li>
            <li>
              Managing the full lifecycle from production to selling on the open
              market.
            </li>
            <li>
              Capitalizing on the rapidly expanding global demand for green
              energy.
            </li>
          </ul>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Button asChild className="rounded-full" variant="secondary">
              <a href="#contact">Explore Partnerships</a>
            </Button>
            <Button asChild className="rounded-full">
              <a href="#contact">Our Energy Strategy</a>
            </Button>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md">
            <Image
              alt="Wind turbines on rolling hills"
              className="object-cover"
              fill
              placeholder="empty"
              sizes="(min-width:1024px) 40rem, 100vw"
              src="/images/wind-turbines-1.avif"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
