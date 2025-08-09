import { cn } from '@voluspalabs/lib/utils/cn'
import Link from 'next/link'
import { TYPO } from '@/components/typography'
import { LEGAL, NAV_ITEMS, ORG } from './content'

export default function Footer() {
  return (
    <footer className="py-4 pt-0 sm:py-8">
      <div className="wrapper">
        <div className="grid grid-cols-1 gap-8 rounded-2xl border bg-card/80 p-6 shadow-card md:grid-cols-3 lg:p-8">
          <div>
            <div
              className={cn(
                'inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 font-semibold shadow',
                TYPO.small,
              )}
            >
              <span aria-hidden className="h-2 w-2 rounded-full bg-primary" />
              <span>Goldber</span>
            </div>
            <p className={cn('mt-3 max-w-sm text-foreground/80', TYPO.small)}>
              {ORG.tagline}
            </p>
            <p className={cn('mt-2 text-foreground/60', TYPO.caption)}>
              {LEGAL.investmentDisclaimer}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className={cn('grid grid-cols-2 gap-2', TYPO.small)}>
              {NAV_ITEMS.filter((n) => n.id !== 'faq').map((item) => (
                <li key={item.id}>
                  <Link className="hover:underline" href={`#${item.id}`}>
                    {item.label}
                  </Link>
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
                  <Link
                    className="underline"
                    href="mailto:hello@goldber.example"
                  >
                    {ORG.email}
                  </Link>
                </div>
                <div>{ORG.phone}</div>
              </div>
            </div>
            <div className={cn('mt-4 text-foreground/60', TYPO.caption)}>
              © {new Date().getFullYear()} {ORG.name}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
