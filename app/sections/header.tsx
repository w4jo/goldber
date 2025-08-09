import Link from 'next/link'
import { NAV_ITEMS, ORG } from './content'

export default function Header() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <div className="wrapper flex items-start justify-between px-12! py-8">
        <Link
          aria-label={ORG.name}
          className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 font-medium text-foreground text-sm shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/50"
          href="#top"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span>Goldber</span>
        </Link>

        <nav className="pointer-events-auto mx-auto hidden rounded-full bg-white/70 px-3 py-1.5 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/50 md:block">
          <ul className="flex items-center gap-3 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  className="inline-flex rounded-full px-3 py-2 text-foreground/80 hover:bg-foreground/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  href={`#${item.id}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="pointer-events-auto hidden md:block">
          <a
            className="inline-flex items-center rounded-full bg-foreground px-4 py-2 font-medium text-background text-sm shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}

