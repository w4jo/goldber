'use client'

import { cn } from '@voluspalabs/lib/utils/cn'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@voluspalabs/ui/accordion'
import { TYPO } from '../typography'
import { FAQS } from './content'

export default function FAQ() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="wrapper py-16 sm:py-24"
      id="faq"
    >
      <h2 className={TYPO.h2} id="faq-heading">
        Frequently asked questions
      </h2>
      <Accordion
        className="mt-6 rounded-2xl border bg-card shadow"
        collapsible
        defaultValue="faq-0"
        type="single"
      >
        {FAQS.map((item, idx) => (
          <AccordionItem className="px-2" key={item.q} value={`faq-${idx}`}>
            <AccordionTrigger className={cn('px-4 py-4 text-left', TYPO.body)}>
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-foreground/80">
              <p>{item.a}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
