import { cn } from '@voluspalabs/lib/utils/cn'
import { Button } from '@voluspalabs/ui/button'
import Image from 'next/image'
import { TYPO } from '@/components/typography'

export default function CTABanner() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative isolate mb-6 animate-scale-in motion-reduce:animate-none"
    >
      <div className="-z-10 wrapper absolute inset-0">
        <Image
          alt="Gold gradient background"
          className="object-cover opacity-75 md:rounded-3xl"
          fill
          placeholder="empty"
          sizes="100vw"
          src="/images/green-building.avif"
        />
      </div>

      <div className="wrapper py-24">
        <div className="relative ml-auto max-w-lg animate-delay-100 animate-slide-up-sm rounded-2xl bg-background/90 p-6 text-primary-foreground shadow motion-reduce:animate-none lg:mr-8">
          <h2
            className={cn('text-foreground', TYPO.cardTitle)}
            id="cta-heading"
          >
            Ready to Build Your Future?
          </h2>
          <p className={cn('mt-2 text-foreground/80', TYPO.body)}>
            Join Goldberg in pioneering new opportunities and creating lasting
            value. Let's start the conversation about your next venture.
          </p>
          <Button asChild className="mt-4" size="sm">
            <a href="#contact">Let's Get Started</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
