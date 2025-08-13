import { Button } from '@voluspalabs/ui/button'
import Image from 'next/image'
import { TYPO } from '@/components/typography'

export default function SectionFinance() {
  return (
    <section
      aria-labelledby="finance-heading"
      className="wrapper animate-scale-in py-12 motion-reduce:animate-none sm:py-20"
      id="finance"
    >
      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <h2 className={TYPO.h2} id="finance-heading">
            Finance & Trading
          </h2>
          <p className={`mt-2 max-w-2xl text-foreground/80 ${TYPO.body}`}>
            Finansijski menadžment, investiranje u akcije i trgovanje robama
            (bakar, aluminijum, nikl). Bavimo se i otkupom potraživanja u
            saradnji sa proverеним partnerima — uz jasne procese upravljanja
            rizikom.
          </p>
          <ul className={`mt-4 grid list-disc gap-2 pl-5 ${TYPO.small}`}>
            <li>Diskretno upravljanje portfoliom i izveštavanje</li>
            <li>Fizičko i finansijsko trgovanje commodity tržištima</li>
            <li>Strukturiranje i otkup potraživanja</li>
          </ul>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Button asChild className="rounded-full" variant="secondary">
              <a href="#contact">Razgovarajte sa timom</a>
            </Button>
            <Button asChild className="rounded-full">
              <a href="#contact">Pošaljite upit</a>
            </Button>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md">
            <Image
              alt="Global markets and trading visualization"
              className="bg-card object-contain"
              fill
              placeholder="empty"
              sizes="(min-width:1024px) 40rem, 100vw"
              src="/globe.svg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
