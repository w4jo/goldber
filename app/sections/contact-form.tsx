'use client'

import * as React from 'react'

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
      <h2 className="font-semibold text-3xl sm:text-4xl" id="contact-heading">
        Contact us
      </h2>
      <p className="mt-2 max-w-2xl text-foreground/80">
        Tell us about your enquiry and timeline. We typically reply within two
        business days.
      </p>

      <form
        className="mt-6 grid grid-cols-1 gap-4 rounded-2xl border bg-card p-6 shadow md:grid-cols-2"
        onSubmit={onSubmit}
        ref={formRef}
      >
        <div className="md:col-span-1">
          <label className="font-medium text-sm" htmlFor="fullName">
            Full name
          </label>
          <input
            autoComplete="name"
            className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-primary"
            id="fullName"
            name="fullName"
            placeholder="Full name"
            required
          />
        </div>
        <div className="md:col-span-1">
          <label className="font-medium text-sm" htmlFor="company">
            Company
          </label>
          <input
            className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-primary"
            id="company"
            name="company"
            placeholder="Company"
          />
        </div>
        <div className="md:col-span-1">
          <label className="font-medium text-sm" htmlFor="email">
            Work email
          </label>
          <input
            autoComplete="email"
            className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-primary"
            id="email"
            name="email"
            placeholder="Work email"
            required
            type="email"
          />
        </div>
        <div className="md:col-span-1">
          <label className="font-medium text-sm" htmlFor="enquiry">
            Type of enquiry
          </label>
          <select
            className="mt-1 w-full rounded-lg border bg-background px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-primary"
            id="enquiry"
            name="enquiry"
          >
            {ENQUIRY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="font-medium text-sm" htmlFor="message">
            Message
          </label>
          <textarea
            className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-primary"
            id="message"
            name="message"
            placeholder="Briefly describe your enquiry and timeline"
            rows={5}
          />
        </div>

        <div className="flex items-center justify-between gap-3 md:col-span-2">
          <p className="text-foreground/60 text-xs">
            We use your information to respond to your enquiry.{' '}
            <a className="underline" href="#contact">
              Cookie settings
            </a>
          </p>
          <button
            className="inline-flex items-center rounded-full bg-foreground px-5 py-2.5 font-medium text-background text-sm shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? 'Sending…' : 'Send enquiry'}
          </button>
        </div>

        {status === 'success' && (
          <output className="rounded-lg bg-emerald-50 p-3 text-emerald-800 text-sm md:col-span-2">
            Your message has been sent.
          </output>
        )}
        {status === 'error' && (
          <output className="rounded-lg bg-red-50 p-3 text-red-800 text-sm md:col-span-2">
            We could not send your message. Please try again later.
          </output>
        )}
      </form>
    </section>
  )
}
