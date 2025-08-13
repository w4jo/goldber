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
            Green Energy
          </h2>
          <p className={`mt-2 max-w-2xl text-foreground/80 ${TYPO.body}`}>
            Ulažemo u proizvodne kapacitete iz obnovljivih izvora — solar, hidro
            i vetar — sa fokusom na dugoročne ugovore, stabilne prihode i
            sistemska poboljšanja.
          </p>
          <ul className={`mt-4 grid list-disc gap-2 pl-5 ${TYPO.small}`}>
            <li>Rooftop i ground‑mount solar portfolia</li>
            <li>Onshore vetro parkovi sa pristupom mreži</li>
            <li>Finansijska i operativna struktura za stabilne povrate</li>
          </ul>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Button asChild className="rounded-full" variant="secondary">
              <a href="#contact">Predložite lokaciju</a>
            </Button>
            <Button asChild className="rounded-full">
              <a href="#contact">Partnerstva i PPA</a>
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
              src="/images/wind-turbines-2.avif"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
