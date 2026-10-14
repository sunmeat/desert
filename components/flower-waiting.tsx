'use client'

import { useEffect, useRef, useState } from 'react'

type Locale = 'pt' | 'ru' | 'en'

const copy = {
  pt: {
    eyebrow: 'O tempo de florescer',
    title: <>A espera<br /><em>da flor.</em></>,
    text: 'Uma pequena história visual: o botão nasce, as pétalas se abrem e a flor revela sua forma.',
    stages: ['Botão', 'Abertura', 'Floração'],
    button: 'Ver a flor desabrochar novamente',
  },
  ru: {
    eyebrow: 'Время расцветать',
    title: <>Ожидание<br /><em>цветка.</em></>,
    text: 'Небольшая визуальная история о том, как появляется бутон, раскрываются лепестки и меняется цветок.',
    stages: ['Бутон', 'Раскрытие', 'Цветение'],
    button: 'Увидеть цветение ещё раз',
  },
  en: {
    eyebrow: 'The time to bloom',
    title: <>Waiting<br /><em>for a flower.</em></>,
    text: 'A small visual story of a bud appearing, petals opening, and a flower changing into its full form.',
    stages: ['The bud', 'Unfolding', 'In bloom'],
    button: 'Watch the flower bloom again',
  },
}

export default function FlowerWaiting({ locale }: { locale: Locale }) {
  const sectionRef = useRef<HTMLElement>(null)
  const [hasBloomed, setHasBloomed] = useState(false)
  const [replay, setReplay] = useState(0)
  const t = copy[locale]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasBloomed(true)
        observer.disconnect()
      }
    }, { threshold: 0.3 })
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const replayBloom = () => {
    setHasBloomed(false)
    setReplay(value => value + 1)
    window.setTimeout(() => setHasBloomed(true), 60)
  }

  return (
    <section ref={sectionRef} className={`flower-waiting section-pad ${hasBloomed ? 'is-bloomed' : ''}`} aria-labelledby="flower-waiting-title">
      <div className="flower-waiting-heading">
        <div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 id="flower-waiting-title">{t.title}</h2>
        </div>
        <p>{t.text}</p>
      </div>
      <div className="flower-waiting-art" key={replay}>
        <div className="flower-stage flower-stage-bud">
          <svg viewBox="0 0 180 190" role="img" aria-label={t.stages[0]}>
            <path className="waiting-stem" d="M90 171 C88 139 93 114 90 85" />
            <path className="waiting-leaf waiting-leaf-left" d="M89 143 C57 145 43 126 43 110 C68 111 84 122 89 143Z" />
            <path className="waiting-leaf waiting-leaf-right" d="M91 126 C120 126 137 108 137 92 C111 94 96 108 91 126Z" />
            <path className="waiting-petal waiting-petal-outer" d="M90 92 C62 79 66 47 90 25 C114 47 118 79 90 92Z" />
            <path className="waiting-petal waiting-petal-inner" d="M90 89 C77 74 80 51 90 40 C101 53 103 74 90 89Z" />
          </svg>
          <span>{t.stages[0]}</span>
        </div>
        <div className="flower-stage flower-stage-opening">
          <svg viewBox="0 0 180 190" role="img" aria-label={t.stages[1]}>
            <path className="waiting-stem" d="M90 171 C88 139 93 114 90 85" />
            <path className="waiting-leaf waiting-leaf-left" d="M89 143 C57 145 43 126 43 110 C68 111 84 122 89 143Z" />
            <path className="waiting-leaf waiting-leaf-right" d="M91 126 C120 126 137 108 137 92 C111 94 96 108 91 126Z" />
            <g className="waiting-opening-petals">
              <path className="waiting-petal" d="M90 92 C53 83 42 55 60 35 C80 41 91 62 90 92Z" />
              <path className="waiting-petal" d="M90 92 C67 57 81 31 90 22 C103 40 111 67 90 92Z" />
              <path className="waiting-petal" d="M90 92 C127 83 138 55 120 35 C100 41 89 62 90 92Z" />
              <path className="waiting-petal" d="M90 92 C53 96 42 75 48 61 C69 61 83 74 90 92Z" />
              <path className="waiting-petal" d="M90 92 C127 96 138 75 132 61 C111 61 97 74 90 92Z" />
            </g>
            <circle className="waiting-center" cx="90" cy="77" r="10" />
          </svg>
          <span>{t.stages[1]}</span>
        </div>
        <div className="flower-stage flower-stage-open">
          <svg viewBox="0 0 180 190" role="img" aria-label={t.stages[2]}>
            <path className="waiting-stem" d="M90 171 C88 139 93 114 90 85" />
            <path className="waiting-leaf waiting-leaf-left" d="M89 143 C57 145 43 126 43 110 C68 111 84 122 89 143Z" />
            <path className="waiting-leaf waiting-leaf-right" d="M91 126 C120 126 137 108 137 92 C111 94 96 108 91 126Z" />
            <g className="waiting-bloom-petals">
              <path className="waiting-petal" d="M90 82 C57 69 51 44 69 30 C87 38 94 57 90 82Z" />
              <path className="waiting-petal" d="M90 82 C69 51 76 23 90 16 C105 31 109 56 90 82Z" />
              <path className="waiting-petal" d="M90 82 C112 51 105 23 90 16 C76 31 72 56 90 82Z" />
              <path className="waiting-petal" d="M90 82 C123 69 129 44 111 30 C93 38 86 57 90 82Z" />
              <path className="waiting-petal" d="M90 82 C53 89 34 70 42 52 C65 52 81 65 90 82Z" />
              <path className="waiting-petal" d="M90 82 C127 89 146 70 138 52 C115 52 99 65 90 82Z" />
            </g>
            <circle className="waiting-center" cx="90" cy="76" r="11" />
            <circle className="waiting-center-dot" cx="90" cy="76" r="4" />
          </svg>
          <span>{t.stages[2]}</span>
        </div>
      </div>
      <button className="flower-waiting-replay" type="button" onClick={replayBloom}><span aria-hidden="true">↻</span>{t.button}</button>
    </section>
  )
}
