import posthog from 'posthog-js'

// PostHog: page views and autocaptured clicks, plus a named `cta_click` for anything tagged
// with data-cta="…". Does nothing until VITE_POSTHOG_KEY is set (locally in .env, on Vercel
// under Settings → Environment Variables).
export function initAnalytics() {
  const key = import.meta.env.VITE_POSTHOG_KEY
  if (!key) return

  posthog.init(key, {
    api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com',
    person_profiles: 'identified_only',
  })

  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-cta]')
    if (el) posthog.capture('cta_click', { cta: el.dataset.cta, href: el.getAttribute('href') ?? undefined })
  })
}
