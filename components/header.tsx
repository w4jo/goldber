import { cn } from '@voluspalabs/lib/utils/cn'
import { Button } from '@voluspalabs/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@voluspalabs/ui/drawer'
import Image from 'next/image'
import { TYPO } from '@/components/typography'
import { NAV_ITEMS, ORG } from './content'

export default function Header() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <div
        aria-hidden="true"
        className="mask-[linear-gradient(to_bottom,black_65%,rgba(0,0,0,0.88)_75%,transparent_100%)] pointer-events-none absolute top-0 z-0 h-20 w-full animate-fade-in bg-[linear-gradient(180deg,#07080a_0%,rgba(7,8,10,0)_100%)] backdrop-blur-2xl motion-reduce:animate-none"
      />
      <div className="wrapper z-10 flex animate-scale-in items-center justify-between px-4! py-2 motion-reduce:animate-none md:px-6!">
        <a aria-label={ORG.name} className="pointer-events-auto" href="#top">
          <Image
            alt="Goldberg Real Estate logo"
            className="h-8 w-auto"
            height={32}
            priority
            src="/logo.png"
            width={112}
          />
        </a>

        <nav
          aria-label="Primary"
          className="pointer-events-auto z-10 mx-auto hidden rounded-full bg-secondary/70 px-3 py-1.5 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-secondary/50 motion-reduce:animate-none md:block md:animate-scale-in"
        >
          <ul className={cn('flex items-center gap-3', TYPO.small)}>
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
          <Button asChild className="rounded-full" size="sm">
            <a href="#contact">Contact</a>
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="pointer-events-auto md:hidden">
          <Drawer direction="bottom">
            <DrawerTrigger asChild>
              <Button
                aria-label="Open menu"
                className="rounded-full bg-secondary text-secondary-foreground hover:opacity-90"
                size="sm"
                type="button"
                variant="secondary"
              >
                Menu
              </Button>
            </DrawerTrigger>
            <DrawerContent showCloseButton>
              <DrawerHeader className="text-center">
                <DrawerTitle className={TYPO.cardTitle}>Menu</DrawerTitle>
              </DrawerHeader>
              <div className="p-4">
                <div className="grid gap-3 rounded-2xl border bg-card/80 p-4 shadow-card">
                  {NAV_ITEMS.filter((n) => n.id !== 'contact').map((item) => (
                    <DrawerClose asChild key={item.id}>
                      <a
                        className="flex items-center justify-between rounded-xl px-3 py-3 hover:bg-foreground/5"
                        href={`#${item.id}`}
                      >
                        <span className={TYPO.titleSm}>{item.label}</span>
                        <span aria-hidden className="text-foreground/60">
                          →
                        </span>
                      </a>
                    </DrawerClose>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl border bg-card/80 p-4 shadow-card">
                  <div className={cn('text-foreground/60', TYPO.micro)}>
                    Get in touch
                  </div>
                  <div className={TYPO.cardTitle}>
                    Let&apos;s talk opportunities
                  </div>
                  <DrawerClose asChild>
                    <a
                      className="mt-3 block rounded-xl bg-primary px-3 py-3 text-center text-primary-foreground"
                      href="#contact"
                    >
                      Contact
                    </a>
                  </DrawerClose>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  )
}
