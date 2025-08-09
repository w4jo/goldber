import Image from 'next/image'
import { INSIGHTS } from './content'

export default function InsightsCarousel() {
  return (
    <section
      aria-labelledby="insights-heading"
      className="wrapper py-16 sm:py-24"
      id="insights"
    >
      <h2 className="font-semibold text-3xl sm:text-4xl" id="insights-heading">
        Insights and Innovations in Green Technology and Environmental Solutions
      </h2>
      <div className="no-scrollbar mt-6 overflow-x-auto">
        <div className="flex min-w-max gap-4">
          {INSIGHTS.map((i) => (
            <article
              className="w-72 shrink-0 rounded-2xl bg-card p-3 shadow"
              key={i.title}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  alt={i.title}
                  className="object-cover"
                  fill
                  sizes="288px"
                  src={i.image}
                />
              </div>
              <div className="p-2">
                <div className="text-foreground/60 text-xs uppercase tracking-wide">
                  {i.category}
                </div>
                <h3 className="font-semibold text-lg">{i.title}</h3>
                <p className="text-foreground/60 text-xs">
                  {new Date(i.date).toLocaleDateString()} · {i.author}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

