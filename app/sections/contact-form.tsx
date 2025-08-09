'use client'

import { Button } from '@voluspalabs/ui/button'
import { Input } from '@voluspalabs/ui/input'
import { Textarea } from '@voluspalabs/ui/textarea'
import * as React from 'react'
import { TYPO } from '../typography'

interface FormState {
  readonly fullName: string
  readonly company: string
  readonly email: string
  readonly message: string
  readonly enquiry: 'Investment' | 'Partnership' | 'Fleet Rental' | 'Other'
}

const ENQUIRY_OPTIONS: readonly FormState['enquiry'][] = [
  'Investment',
  'Partnership',
  'Fleet Rental',
  'Other',
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [status, setStatus] = React.useState<'idle' | 'success' | 'error'>(
    'idle',
  )

  const formRef = React.useRef<HTMLFormElement>(null)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')
    try {
      const form = new FormData(event.currentTarget)
      const payload = Object.fromEntries(form.entries())
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        throw new Error('Failed')
      }
      setStatus('success')
      formRef.current?.reset()
    } catch {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      aria-labelledby="contact-heading"
      className="wrapper py-16 sm:py-24"
      id="contact"
    >
      <h2 className={TYPO.h2} id="contact-heading">
        Contact us
      </h2>
      <p className={`mt-2 max-w-2xl text-foreground/80 ${TYPO.body}`}>
        Tell us about your enquiry and timeline. We typically reply within two
        business days.
      </p>

      <form
        className="mt-6 grid grid-cols-1 gap-4 rounded-2xl border bg-card p-6 shadow md:grid-cols-2"
        onSubmit={onSubmit}
        ref={formRef}
      >
        <div className="md:col-span-1">
          <label className={`font-medium ${TYPO.small}`} htmlFor="fullName">
            Full name
          </label>
          <Input
            autoComplete="name"
            id="fullName"
            name="fullName"
            placeholder="Full name"
            required
          />
        </div>
        <div className="md:col-span-1">
          <label className={`font-medium ${TYPO.small}`} htmlFor="company">
            Company
          </label>
          <Input id="company" name="company" placeholder="Company" />
        </div>
        <div className="md:col-span-1">
          <label className={`font-medium ${TYPO.small}`} htmlFor="email">
            Work email
          </label>
          <Input
            autoComplete="email"
            id="email"
            name="email"
            placeholder="Work email"
            required
            type="email"
          />
        </div>
        <div className="md:col-span-1">
          <label className={`font-medium ${TYPO.small}`} htmlFor="enquiry">
            Type of enquiry
          </label>
          <select className={TYPO.small} id="enquiry" name="enquiry">
            {ENQUIRY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className={`font-medium ${TYPO.small}`} htmlFor="message">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Briefly describe your enquiry and timeline"
            rows={5}
          />
        </div>

        <div className="flex items-center justify-between gap-3 md:col-span-2">
          <p className={`text-foreground/60 ${TYPO.caption}`}>
            We use your information to respond to your enquiry.{' '}
            <a className="underline" href="#contact">
              Cookie settings
            </a>
          </p>
          <Button
            className="rounded-full"
            disabled={isSubmitting}
            size="sm"
            type="submit"
          >
            {isSubmitting ? 'Sending…' : 'Send enquiry'}
          </Button>
        </div>

        {status === 'success' && (
          <output
            className={`rounded-lg bg-emerald-50 p-3 text-emerald-800 ${TYPO.small} md:col-span-2`}
          >
            Your message has been sent.
          </output>
        )}
        {status === 'error' && (
          <output
            className={`rounded-lg bg-red-50 p-3 text-red-800 ${TYPO.small} md:col-span-2`}
          >
            We could not send your message. Please try again later.
          </output>
        )}
      </form>
    </section>
  )
}
