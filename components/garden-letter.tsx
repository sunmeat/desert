'use client'

import { useState } from 'react'
import Image from 'next/image'

type Locale = 'pt' | 'ru' | 'en'

const copy = {
  pt: {
    kicker: 'Obrigado pela visita!',
    title: <>Uma carta<br /><em>do jardim.</em></>,
    note: 'Que esta pequena pausa lembre: tudo o que vive merece espaço, tempo e cuidado.',
    button: 'Mais uma carta',
    imageAlt: 'Uma flor da coleção de rosas do deserto',
    photoLabel: 'Um instante de beleza',
  },
  ru: {
    kicker: 'Спасибо за визит!',
    title: <>Письмо<br /><em>из сада.</em></>,
    note: 'Пусть эта маленькая пауза напомнит: всё живое заслуживает пространства, времени и бережного отношения.',
    button: 'Ещё одно письмо',
    imageAlt: 'Цветок из коллекции пустынных роз',
    photoLabel: 'Мгновение красоты',
  },
  en: {
    kicker: 'Thank you for visiting!',
    title: <>A letter<br /><em>from the garden.</em></>,
    note: 'May this small pause remind us that every living thing deserves room, time, and gentle care.',
    button: 'Another letter',
    imageAlt: 'A flower from the desert rose collection',
    photoLabel: 'A quiet moment of beauty',
  },
}

export default function GardenLetter({
  locale,
  quotes,
  photos,
  photoAlt,
  instagram,
  instagramUrl,
  whatsapp,
  whatsappUrl,
}: {
  locale: Locale
  quotes: string[]
  photos: string[]
  photoAlt: string[]
  instagram: string
  instagramUrl: string
  whatsapp: string
  whatsappUrl: string
}) {
  const t = copy[locale]
  const [letter, setLetter] = useState(() => ({
    quote: Math.floor(Math.random() * quotes.length),
    photo: Math.floor(Math.random() * photos.length),
  }))

  const anotherLetter = () => {
    setLetter(current => {
      let quote = Math.floor(Math.random() * quotes.length)
      let photo = Math.floor(Math.random() * photos.length)
      if (quotes.length > 1 && quote === current.quote) quote = (quote + 1) % quotes.length
      if (photos.length > 1 && photo === current.photo) photo = (photo + 1) % photos.length
      return { quote, photo }
    })
  }

  return (
    <section className="garden-letter" aria-labelledby="garden-letter-title" aria-live="polite">
      <div className="garden-letter-photo">
        <Image src={photos[letter.photo]} alt={photoAlt[letter.photo] || t.imageAlt} fill sizes="(max-width: 700px) 100vw, 45vw" />
        <span className="garden-letter-photo-mark">{t.photoLabel}</span>
      </div>
      <div className="garden-letter-copy">
        <p className="garden-letter-kicker">{t.kicker}</p>
        <h3 id="garden-letter-title">{t.title}</h3>
        <blockquote className="garden-letter-thought">{quotes[letter.quote]}</blockquote>
        <p className="garden-letter-note">{t.note}</p>
        <div className="garden-letter-actions">
          <button className="garden-letter-replay" type="button" onClick={anotherLetter}><span aria-hidden="true">↻</span>{t.button}</button>
          <a className="garden-letter-contact" href={instagramUrl} target="_blank" rel="noreferrer"><span aria-hidden="true">◎</span><span>Instagram<small>{instagram}</small></span><span className="garden-letter-external" aria-hidden="true">↗</span></a>
          <a className="garden-letter-contact" href={whatsappUrl} target="_blank" rel="noreferrer"><span aria-hidden="true">◌</span><span>WhatsApp<small>{whatsapp}</small></span><span className="garden-letter-external" aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}
