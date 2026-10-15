'use client'

import { useState } from 'react'
import SilenceGarden from '@/components/silence-garden'

type Locale = 'pt' | 'ru' | 'en'

export default function ZenGardenPage() {
  const [locale] = useState<Locale>(() => {
    if (typeof window === 'undefined') return 'pt'
    const value = new URLSearchParams(window.location.search).get('lang')
    return value === 'ru' || value === 'en' ? value : 'pt'
  })

  return (
    <main className="zen-garden-page" lang={locale === 'pt' ? 'pt-BR' : locale}>
      <SilenceGarden locale={locale} standalone />
    </main>
  )
}
