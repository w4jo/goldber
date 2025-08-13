import { Button } from '@voluspalabs/ui/button'
import Image from 'next/image'
import { TYPO } from '@/components/typography'

export default function SectionRealEstate() {
  return (
    <section
      aria-labelledby="real-estate-heading"
      className="wrapper animate-scale-in py-12 motion-reduce:animate-none sm:py-20"
      id="real-estate"
    >
      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <h2 className={TYPO.h2} id="real-estate-heading">
            Real Estate
          </h2>
          <p className={`mt-2 max-w-2xl text-foreground/80 ${TYPO.body}`}>
            Gradimo i investiramo u projekte koji povezuju svakodnevni život i
            posao. Fokus nam je na poslovno‑stambenim kompleksima, selektivnim
            rezidencijalnim projektima i prilagođenim rešenjima za dugoročnu
            vrednost.
          </p>
          <ul className={`mt-4 grid list-disc gap-2 pl-5 ${TYPO.small}`}>
            <li>Izgradnja i prodaja poslovno‑stambenih kompleksa</li>
            <li>Selektivna kupovina i aktivno upravljanje imovinom</li>
            <li>Ko‑investicije sa pouzdanim partnerima</li>
          </ul>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Button asChild className="rounded-full" variant="secondary">
              <a href="#projects">Pogledajte projekte</a>
            </Button>
            <Button asChild className="rounded-full">
              <a href="#contact">Kontaktirajte nas</a>
            </Button>
          </div>
          <dl className={`mt-8 grid grid-cols-2 gap-4 ${TYPO.small}`}>
            <div>
              <dt className="text-foreground/60">Poslednji projekat</dt>
              <dd className="mt-0.5 font-medium">
                <a className="underline" href="https://sakurapark.rs">
                  Sakura Park
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-foreground/60">Reference</dt>
              <dd className="mt-0.5 font-medium">
                <a
                  className="underline"
                  href="https://sakurapark.rs/reference/"
                >
                  sakurapark.rs/reference
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md">
            <Image
              alt="Modern mixed‑use building"
              className="object-cover"
              fill
              placeholder="empty"
              sizes="(min-width:1024px) 40rem, 100vw"
              src="/images/green-building.avif"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
