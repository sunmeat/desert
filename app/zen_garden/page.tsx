'use client'

import { useEffect, useState } from 'react'
import SilenceGarden from '@/components/silence-garden'

type Locale = 'pt' | 'ru' | 'en'

export default function ZenGardenPage() {
  const [locale, setLocale] = useState<Locale | null>(null)

  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get('lang')
    setLocale(value === 'ru' || value === 'en' || value === 'pt' ? value : 'pt')
  }, [])

  return (
    <main className="zen-garden-page" lang={locale === 'pt' ? 'pt-BR' : locale ?? undefined}>
      {locale && <SilenceGarden locale={locale} standalone />}
    </main>
  )
}
