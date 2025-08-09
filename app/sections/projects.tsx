import { Button } from '@voluspalabs/ui/button'
import Image from 'next/image'
import { TYPO } from '../typography'
import { PROJECTS } from './content'

export default function FeaturedProjects() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="wrapper py-16 sm:py-24"
      id="projects"
    >
      <h2 className={TYPO.h2} id="projects-heading">
        Featured Projects
      </h2>
      <div className="mt-8 space-y-10">
        {PROJECTS.map((p) => (
          <article
            className="grid grid-cols-1 gap-6 rounded-2xl bg-card p-4 shadow lg:grid-cols-2 lg:gap-10 lg:p-6"
            key={p.id}
          >
            <div className="order-2 lg:order-1">
              <div className={`text-foreground/60 ${TYPO.micro}`}>
                Project {p.number}
              </div>
              <h3 className={`mt-1 ${TYPO.h3}`}>{p.title}</h3>
              <p className={`mt-3 text-foreground/80 ${TYPO.body}`}>
                {p.description}
              </p>
              <dl className={`mt-4 grid grid-cols-3 gap-2 ${TYPO.small}`}>
                {p.meta.map((m) => (
                  <div className="rounded-lg bg-muted px-3 py-2" key={m.label}>
                    <dt className="text-foreground/60">{m.label}</dt>
                    <dd className="font-medium">{m.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-4">
                <Button
                  className="rounded-full"
                  size="sm"
                  type="button"
                  variant="secondary"
                >
                  View details
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-md">
                <Image
                  alt={p.title}
                  className="object-cover"
                  fill
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
