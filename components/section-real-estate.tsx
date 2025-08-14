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
            Real Estate Development & Investment
          </h2>
          <p className={`mt-2 max-w-2xl text-foreground/80 ${TYPO.body}`}>
            We transform landscapes and communities by developing high-quality
            residential and commercial properties. Our vision is to create
            spaces that are not only profitable investments but also landmarks
            of design and functionality.
          </p>
          <ul className={`mt-4 grid list-disc gap-2 pl-5 ${TYPO.small}`}>
            <li>Building the future of urban living and business.</li>
            <li>
              From land acquisition and planning to construction and sales.
            </li>
            <li>
              A proven track record of delivering superior returns for our
              partners.
            </li>
          </ul>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Button asChild className="rounded-full" variant="secondary">
              <a href="#projects">View projects</a>
            </Button>
            <Button asChild className="rounded-full">
              <a href="#contact">Discuss a site</a>
            </Button>
          </div>
          <dl className={`mt-8 grid grid-cols-2 gap-4 ${TYPO.small}`}>
            <div>
              <dt className="text-foreground/60">Latest project</dt>
              <dd className="mt-0.5 font-medium">
                <a className="underline" href="https://sakurapark.rs">
                  Sakura Park
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-foreground/60">References</dt>
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
              src="/images/real-estate.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
