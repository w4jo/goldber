import Image from 'next/image'
import { PROJECTS } from './content'

export default function FeaturedProjects() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="wrapper py-16 sm:py-24"
      id="projects"
    >
      <h2 className="font-semibold text-3xl sm:text-4xl" id="projects-heading">
        Featured Projects
      </h2>
      <div className="mt-8 space-y-10">
        {PROJECTS.map((p) => (
          <article
            className="grid grid-cols-1 gap-6 rounded-2xl bg-card p-4 shadow lg:grid-cols-2 lg:gap-10 lg:p-6"
            key={p.id}
          >
            <div className="order-2 lg:order-1">
              <div className="text-foreground/60 text-xs uppercase tracking-wide">
                Project {p.number}
              </div>
              <h3 className="mt-1 font-semibold text-2xl">{p.title}</h3>
              <p className="mt-3 text-foreground/80">{p.description}</p>
              <dl className="mt-4 grid grid-cols-3 gap-2 text-sm">
                {p.meta.map((m) => (
                  <div className="rounded-lg bg-muted px-3 py-2" key={m.label}>
                    <dt className="text-foreground/60">{m.label}</dt>
                    <dd className="font-medium">{m.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-4">
                <button
                  className="rounded-full border border-foreground/10 px-4 py-2 font-medium text-sm hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  type="button"
                >
                  View details
                </button>
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

