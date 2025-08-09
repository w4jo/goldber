'use client'
import { useLocalStorage } from '@voluspalabs/lib/hooks/use-local-storage'
import { Button } from '@voluspalabs/ui/button'
import { TYPO } from '../typography'
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
        <p className={`text-foreground/80 ${TYPO.small}`}>
          {LEGAL.cookieNotice}
        </p>
        <div className="mt-3 flex items-center gap-2">
          <Button
            className="rounded-full"
            onClick={() => setConsent('accepted')}
            type="button"
          >
            Accept all
          </Button>
          <Button
            className="rounded-full"
            onClick={() => setConsent('dismissed')}
            type="button"
            variant="secondary"
          >
            Dismiss
          </Button>
        </div>
      </div>
    </div>
  )
}
