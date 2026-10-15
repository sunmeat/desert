'use client'

import { useEffect, useState } from 'react'
import SilenceGarden from '@/components/silence-garden'

type Locale = 'pt' | 'ru' | 'en'

export default function ZenGardenPage() {
  const [locale, setLocale] = useState<Locale>('pt')

  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get('lang')
    if (value === 'ru' || value === 'en' || value === 'pt') setLocale(value)
  }, [])

  return (
    <main className="zen-garden-page" lang={locale === 'pt' ? 'pt-BR' : locale}>
      <SilenceGarden locale={locale} standalone />
    </main>
  )
}
