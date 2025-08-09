import { cn } from '@voluspalabs/lib/utils/cn'
import { Button } from '@voluspalabs/ui/button'
import Image from 'next/image'
import { TYPO } from '@/components/typography'

export default function CTABanner() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative isolate mb-4 animate-scale-in motion-reduce:animate-none"
    >
      <div className="-z-10 wrapper absolute inset-0">
        <Image
          alt="Rolling hills with wind turbines"
          className="rounded-3xl object-cover"
          fill
          placeholder="empty"
          sizes="100vw"
          src="/images/green-building.avif"
        />
      </div>

      <div className="wrapper py-24">
        <div className="relative ml-auto max-w-lg animate-delay-100 animate-slide-up-sm rounded-2xl bg-[var(--brand-lime)] p-6 shadow motion-reduce:animate-none lg:mr-8">
          <h2
            className={cn('text-foreground', TYPO.cardTitle)}
            id="cta-heading"
          >
            Make a Difference: Embrace Solutions, Fight Against Pollution
          </h2>
          <p className={cn('mt-2 text-foreground/80', TYPO.body)}>
            Partner with us on resilient, practical initiatives that move
            communities toward a cleaner energy future.
          </p>
          <Button
            asChild
            className="mt-4 rounded-full bg-primary text-primary-foreground hover:opacity-90"
            size="sm"
          >
            <a href="#contact">Work with us</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
