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
          alt="Gold gradient background"
          className="rounded-3xl object-cover"
          fill
          placeholder="empty"
          sizes="100vw"
          src="/window.svg"
        />
      </div>

      <div className="wrapper py-24">
        <div className="relative ml-auto max-w-lg animate-delay-100 animate-slide-up-sm rounded-2xl bg-primary p-6 text-primary-foreground shadow motion-reduce:animate-none lg:mr-8">
          <h2
            className={cn('text-primary-foreground', TYPO.cardTitle)}
            id="cta-heading"
          >
            Build with Confidence
          </h2>
          <p className={cn('mt-2 text-foreground/80', TYPO.body)}>
            Partner with a team focused on real assets, clean energy and
            disciplined finance.
          </p>
          <Button
            asChild
            className="mt-4 rounded-full bg-secondary text-secondary-foreground hover:opacity-90"
            size="sm"
          >
            <a href="#contact">Work with us</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
