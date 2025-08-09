import Image from 'next/image'

export default function CTABanner() {
  return (
    <section aria-labelledby="cta-heading" className="relative isolate">
      <div className="-z-10 absolute inset-0">
        <Image
          alt="Rolling hills with wind turbines"
          className="object-cover"
          fill
          sizes="100vw"
          src="/placeholder.svg"
        />
      </div>

      <div className="wrapper py-24">
        <div className="relative ml-auto max-w-lg rounded-2xl bg-lime-200 p-6 shadow lg:mr-8">
          <h2 className="font-semibold text-2xl" id="cta-heading">
            Make a Difference: Embrace Solutions, Fight Against Pollution
          </h2>
          <p className="mt-2 text-foreground/80">
            Partner with us on resilient, practical initiatives that move
            communities toward a cleaner energy future.
          </p>
          <a
            className="mt-4 inline-flex items-center rounded-full bg-foreground px-4 py-2 font-medium text-background text-sm shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            href="#contact"
          >
            Work with us
          </a>
        </div>
      </div>
    </section>
  )
}

