'use client'

import * as React from 'react'
import { FAQS } from './content'

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)
  return (
    <section
      aria-labelledby="faq-heading"
      className="wrapper py-16 sm:py-24"
      id="faq"
    >
      <h2 className="font-semibold text-3xl sm:text-4xl" id="faq-heading">
        Frequently asked questions
      </h2>
      <div className="mt-6 divide-y rounded-2xl border bg-card shadow">
        {FAQS.map((item, idx) => {
          const isOpen = openIndex === idx
          return (
            <div className="group" key={item.q}>
              <h3>
                <button
                  aria-controls={`faq-panel-${idx}`}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-4 py-4 text-left font-medium text-base hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  type="button"
                >
                  <span>{item.q}</span>
                  <span
                    aria-hidden
                    className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-foreground/80"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
              </h3>
              <div
                className="px-4 pb-4 text-foreground/80"
                hidden={!isOpen}
                id={`faq-panel-${idx}`}
              >
                <p>{item.a}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
