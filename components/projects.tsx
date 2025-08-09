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
        Featured Projects
      </h2>
      <div className="mt-8 space-y-10">
        {PROJECTS.map((p, idx) => (
          <article
            className={`grid animate-slide-up-sm grid-cols-1 items-stretch gap-8 rounded-2xl border border-border bg-card/80 p-6 shadow-card motion-reduce:animate-none lg:grid-cols-2 lg:gap-12 lg:p-8 ${idx % 2 === 0 ? 'animate-delay-100' : 'animate-delay-200'}`}
            key={p.id}
          >
            <div className="order-2 flex min-h-full flex-col lg:order-1">
              <div>
                <div
                  className={`text-foreground/60 uppercase tracking-wider ${TYPO.micro}`}
                >
                  Project {p.number}
                </div>
                <h3 className={`mt-1 ${TYPO.h3}`}>{p.title}</h3>
              </div>
              <div className="flex flex-1 items-center">
                <p className={`text-foreground/80 ${TYPO.body}`}>
                  {p.description}
                </p>
              </div>
              <dl
                className={`mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-3 ${TYPO.small}`}
              >
                {p.meta.map((m) => (
                  <div key={m.label}>
                    <dt className="text-foreground/60">{m.label}</dt>
                    <dd className="mt-0.5 font-medium">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-md">
                <Image
                  alt={p.title}
                  className="object-cover"
                  fill
                  placeholder="empty"
                  sizes="(min-width:1024px) 40rem, 100vw"
                  src={p.image}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
