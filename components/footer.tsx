import { cn } from '@voluspalabs/lib/utils/cn'
import Image from 'next/image'
import { TYPO } from '@/components/typography'
import { NAV_ITEMS, ORG } from './content'

const LINK_ITEM_CLASS =
  'group flex items-center justify-between rounded-xl px-3 py-2 text-foreground/90 hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
const LINK_LABEL_CLASS = cn('font-medium', TYPO.small)
const LINK_ARROW_CLASS =
  'ml-2 text-foreground/50 transition-transform group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5'

export default function Footer() {
  return (
    <footer className="animate-scale-in py-6 pt-0 motion-reduce:animate-none sm:py-10">
      <div className="wrapper">
        <div className="relative grid animate-slide-up-sm grid-cols-1 gap-10 overflow-hidden rounded-3xl border border-white/5 bg-[color:var(--footer)] p-6 shadow-card ring-1 ring-white/10 motion-reduce:animate-none md:grid-cols-3 lg:gap-12 lg:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),rgba(255,255,255,0)_60%)] opacity-70"
          />
          <div>
            <div className="inline-flex items-center gap-2">
              <Image
                alt="Goldberg Real Estate logo"
                className="h-8 w-auto rounded-sm"
                height={32}
                src="/logo.png"
                width={112}
              />
            </div>
            <p className={cn('mt-3 max-w-sm text-foreground/80', TYPO.small)}>
              {ORG.tagline}
            </p>
            <div className="mt-4 grid gap-2 text-foreground/80">
              <a className={cn('underline', TYPO.small)} href="#projects">
                Explore projects →
              </a>
              <a className={cn('underline', TYPO.small)} href="#contact">
                Work with us →
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a className={LINK_ITEM_CLASS} href={`#${item.id}`}>
                    <span className={LINK_LABEL_CLASS}>{item.label}</span>
                    <span aria-hidden className={LINK_ARROW_CLASS}>
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={TYPO.small}>
            <div>
              <span className="font-medium">Contact</span>
              <div className="mt-1 text-foreground/80">
                <div>{ORG.address}</div>
                <div>
                  <a className="underline" href="mailto:hello@goldber.example">
                    {ORG.email}
                  </a>
                </div>
                <div>{ORG.phone}</div>
              </div>
            </div>
            <div className="mt-6 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
            <div className={cn('mt-4 text-foreground/60', TYPO.caption)}>
              © {new Date().getFullYear()} {ORG.name}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
