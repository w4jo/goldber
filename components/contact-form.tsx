'use client'

import { cn } from '@voluspalabs/lib/utils/cn'
import { Button } from '@voluspalabs/ui/button'
import { Input } from '@voluspalabs/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@voluspalabs/ui/select'
import { Textarea } from '@voluspalabs/ui/textarea'
import * as React from 'react'
import { TYPO } from '@/components/typography'

interface FormState {
  readonly fullName: string
  readonly company: string
  readonly email: string
  readonly message: string
  readonly enquiry:
    | 'Real Estate'
    | 'Green Energy'
    | 'Finance & Trading'
    | 'Luxury Cars'
    | 'Partnership'
    | 'Other'
}

const ENQUIRY_OPTIONS: readonly FormState['enquiry'][] = [
  'Real Estate',
  'Green Energy',
  'Finance & Trading',
  'Luxury Cars',
  'Partnership',
  'Other',
]

// Regex literals should be declared at the top level for performance
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [status, setStatus] = React.useState<'idle' | 'success' | 'error'>(
    'idle',
  )

  const [form, setForm] = React.useState<FormState>({
    fullName: '',
    company: '',
    email: '',
    message: '',
    enquiry: 'Real Estate',
  })
  const [touched, setTouched] = React.useState<
    Record<keyof FormState, boolean>
  >({
    fullName: false,
    company: false,
    email: false,
    message: false,
    enquiry: false,
  })

  const errors = React.useMemo(() => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (form.fullName.trim().length < 2) {
      next.fullName = 'Please enter your full name.'
    }
    if (!EMAIL_RE.test(form.email)) {
      next.email = 'Enter a valid work email.'
    }
    if (form.message.trim().length < 10) {
      next.message = 'Add a short message (10+ characters).'
    }
    return next
  }, [form])

  const isValid = Object.keys(errors).length === 0

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setTouched({
      fullName: true,
      company: true,
      email: true,
      message: true,
      enquiry: true,
    })
    if (!isValid) {
      return
    }
    setIsSubmitting(true)
    setStatus('idle')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        throw new Error('Failed')
      }
      setStatus('success')
      setForm({
        fullName: '',
        company: '',
        email: '',
        message: '',
        enquiry: 'Real Estate',
      })
      setTouched({
        fullName: false,
        company: false,
        email: false,
        message: false,
        enquiry: false,
      })
    } catch {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      aria-labelledby="contact-heading"
      className="wrapper animate-scale-in py-16 motion-reduce:animate-none sm:py-24"
      id="contact"
    >
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
        {/* Left: intro and details */}
        <div className="flex h-full animate-delay-100 animate-slide-up-sm flex-col justify-between motion-reduce:animate-none">
          <div>
            <h2 className={TYPO.h2} id="contact-heading">
              Contact us
            </h2>
            <p className={cn('mt-2 max-w-xl text-foreground/80', TYPO.body)}>
              Choose your enquiry type and share a few details. We typically
              respond within two business days.
            </p>
          </div>

          <div className="mt-6 max-w-md animate-delay-200 animate-slide-up-sm rounded-2xl border bg-card/80 p-4 shadow-card motion-reduce:animate-none">
            <div className={cn('font-medium', TYPO.small)}>Direct contact</div>
            <div className={cn('mt-1 text-foreground/80', TYPO.small)}>
              <div>
                <a className="underline" href="mailto:hello@goldber.example">
                  hello@goldber.example
                </a>
              </div>
              <div>+420 000 000 000</div>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <form
          aria-busy={isSubmitting}
          className="grid animate-delay-100 animate-slide-up-sm grid-cols-1 gap-4 rounded-2xl border bg-card/80 p-6 shadow-card motion-reduce:animate-none md:grid-cols-2"
          noValidate
          onSubmit={onSubmit}
        >
          <div className="md:col-span-1">
            <label className={cn('font-medium', TYPO.small)} htmlFor="fullName">
              Full name
            </label>
            <Input
              aria-describedby={
                touched.fullName && errors.fullName
                  ? 'fullName-error'
                  : undefined
              }
              aria-invalid={touched.fullName && Boolean(errors.fullName)}
              autoComplete="name"
              className="bg-card"
              id="fullName"
              name="fullName"
              onBlur={() => setTouched((t) => ({ ...t, fullName: true }))}
              onChange={(e) =>
                setForm((f) => ({ ...f, fullName: e.target.value }))
              }
              placeholder="Full name"
              required
              value={form.fullName}
            />
            {touched.fullName && errors.fullName && (
              <p
                className={cn('mt-1 text-red-600', TYPO.caption)}
                id="fullName-error"
              >
                {errors.fullName}
              </p>
            )}
          </div>
          <div className="md:col-span-1">
            <label className={cn('font-medium', TYPO.small)} htmlFor="company">
              Company
            </label>
            <Input
              className="bg-card"
              id="company"
              name="company"
              onChange={(e) =>
                setForm((f) => ({ ...f, company: e.target.value }))
              }
              placeholder="Company (optional)"
              value={form.company}
            />
          </div>
          <div className="md:col-span-1">
            <label className={cn('font-medium', TYPO.small)} htmlFor="email">
              Work email
            </label>
            <Input
              aria-describedby={
                touched.email && errors.email ? 'email-error' : undefined
              }
              aria-invalid={touched.email && Boolean(errors.email)}
              autoComplete="email"
              className="bg-card"
              id="email"
              name="email"
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
              placeholder="Work email"
              required
              type="email"
              value={form.email}
            />
            {touched.email && errors.email && (
              <p
                className={cn('mt-1 text-red-600', TYPO.caption)}
                id="email-error"
              >
                {errors.email}
              </p>
            )}
          </div>
          <div className="md:col-span-1">
            <label className={cn('font-medium', TYPO.small)} htmlFor="enquiry">
              Type of enquiry
            </label>
            <Select
              onValueChange={(v) =>
                setForm((f) => ({ ...f, enquiry: v as FormState['enquiry'] }))
              }
              value={form.enquiry}
            >
              <SelectTrigger className={TYPO.small} id="enquiry">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {ENQUIRY_OPTIONS.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="md:col-span-2">
            <label className={cn('font-medium', TYPO.small)} htmlFor="message">
              Message
            </label>
            <Textarea
              aria-describedby={
                touched.message && errors.message ? 'message-error' : undefined
              }
              aria-invalid={touched.message && Boolean(errors.message)}
              id="message"
              name="message"
              onBlur={() => setTouched((t) => ({ ...t, message: true }))}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
              placeholder="Briefly describe your enquiry and timeline"
              rows={6}
              value={form.message}
            />
            {touched.message && errors.message && (
              <p
                className={cn('mt-1 text-red-600', TYPO.caption)}
                id="message-error"
              >
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between gap-3 md:col-span-2">
            <p className={cn('text-foreground/60', TYPO.caption)}>
              We use your information to respond to your enquiry.
            </p>
            <Button
              className="rounded-full bg-primary text-primary-foreground hover:opacity-90"
              disabled={isSubmitting || !isValid}
              size="sm"
              type="submit"
            >
              {isSubmitting ? 'Sending…' : 'Send enquiry'}
            </Button>
          </div>
          {status === 'success' && (
            <output
              aria-live="polite"
              className={cn(
                'rounded-lg bg-[--brand-bg-soft] p-3 text-foreground md:col-span-2',
                TYPO.small,
              )}
            >
              Your message has been sent.
            </output>
          )}
          {status === 'error' && (
            <output
              aria-live="polite"
              className={cn(
                'rounded-lg bg-red-50 p-3 text-red-800 md:col-span-2',
                TYPO.small,
              )}
            >
              We could not send your message. Please try again later.
            </output>
          )}
        </form>
      </div>
    </section>
  )
}
