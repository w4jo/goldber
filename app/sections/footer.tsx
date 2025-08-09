import Link from 'next/link'
import { LEGAL, NAV_ITEMS, ORG } from './content'

export default function Footer() {
  return (
    <footer className="border-t bg-card py-12">
      <div className="wrapper grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 font-semibold text-sm shadow">
            <span aria-hidden className="h-2 w-2 rounded-full bg-emerald-600" />
            <span>Goldber</span>
          </div>
          <p className="mt-3 max-w-sm text-foreground/80 text-sm">
            {ORG.tagline}
          </p>
          <p className="mt-2 text-foreground/60 text-xs">
            {LEGAL.investmentDisclaimer}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a className="hover:underline" href={`#${item.id}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <div>
            <span className="font-medium">Contact</span>
            <div className="mt-1 text-foreground/80">
              <div>{ORG.address}</div>
              <div>
                <Link className="underline" href="mailto:hello@goldber.example">
                  {ORG.email}
                </Link>
              </div>
              <div>{ORG.phone}</div>
            </div>
          </div>
          <div className="mt-4 text-foreground/60 text-xs">
            © {new Date().getFullYear()} {ORG.name}
          </div>
        </div>
      </div>
    </footer>
  )
}

