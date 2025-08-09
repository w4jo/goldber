'use client'
import { useLocalStorage } from '@voluspalabs/lib/hooks/use-local-storage'
import { LEGAL } from './content'

export default function CookieConsent() {
  const [consent, setConsent] = useLocalStorage<
    'accepted' | 'dismissed' | null
  >('cookie-consent', null)
  const isVisible = consent === null
  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div className="mx-auto max-w-3xl rounded-2xl border bg-card p-4 shadow">
        <p className="text-foreground/80 text-sm">{LEGAL.cookieNotice}</p>
        <div className="mt-3 flex items-center gap-2">
          <button
            className="inline-flex items-center rounded-full bg-foreground px-4 py-2 font-medium text-background text-sm shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setConsent('accepted')}
            type="button"
          >
            Accept all
          </button>
          <button
            className="inline-flex items-center rounded-full border border-foreground/10 px-4 py-2 font-medium text-sm hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setConsent('dismissed')}
            type="button"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  )
}
