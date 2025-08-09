import { cn } from '@voluspalabs/lib/utils/cn'
import { Button } from '@voluspalabs/ui/button'
import Image from 'next/image'
import { TYPO } from '../typography'

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
          <h2 className={cn(TYPO.cardTitle)} id="cta-heading">
            Make a Difference: Embrace Solutions, Fight Against Pollution
          </h2>
          <p className={cn('mt-2 text-foreground/80', TYPO.body)}>
            Partner with us on resilient, practical initiatives that move
            communities toward a cleaner energy future.
          </p>
          <Button asChild className="mt-4 rounded-full" size="sm">
            <a href="#contact">Work with us</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
