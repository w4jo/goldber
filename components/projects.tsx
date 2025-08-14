import Image from 'next/image'
import { TYPO } from '@/components/typography'
import { PROJECTS } from './content'

export default function FeaturedProjects() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="wrapper animate-scale-in py-16 motion-reduce:animate-none sm:py-24"
      id="projects"
    >
      <h2 className={TYPO.h2} id="projects-heading">
        Featured Real Estate Projects
      </h2>
      <div className="mt-10 space-y-14">
        {PROJECTS.map((p, idx) => (
          <article
            className={`group relative grid animate-slide-up-sm grid-cols-1 items-stretch gap-10 overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-card/70 via-card/60 to-card/50 p-6 ring-1 ring-white/5 backdrop-blur-sm transition-colors duration-500 lg:grid-cols-2 lg:gap-14 lg:p-10 ${idx % 2 === 0 ? 'animate-delay-100' : 'animate-delay-200'}`}
            key={p.id}
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.06),rgba(255,255,255,0)_60%)]" />
            </div>
            <div className="order-2 flex min-h-full flex-col lg:order-1">
              <div className="relative pr-10">
                <span
                  className={`block font-semibold text-[10px] text-primary/80 tracking-widest ${TYPO.micro}`}
                >
                  PROJECT {String(p.number).padStart(2, '0')}
                </span>
                <h3 className={`mt-2 ${TYPO.h3} text-balance`}>{p.title}</h3>
                <span className="mt-4 block h-px w-20 bg-gradient-to-r from-primary/60 to-primary/0" />
              </div>
              <p
                className={`mt-8 max-w-prose flex-1 text-foreground/80 ${TYPO.body}`}
              >
                {p.description}
              </p>
              <dl
                className={`mt-8 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-3 ${TYPO.small}`}
              >
                {p.meta.map((m) => (
                  <div className="space-y-0.5" key={m.label}>
                    <dt className="text-foreground/50">{m.label}</dt>
                    <dd className="font-medium text-foreground/90">
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
                <Image
                  alt={p.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  fill
                  placeholder="empty"
                  sizes="(min-width:1024px) 40rem, 100vw"
                  src={p.image}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-black/0 to-transparent opacity-70 mix-blend-overlay" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
