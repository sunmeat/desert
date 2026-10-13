'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowDown, ArrowLeft, ArrowRight, Camera, Menu, Pause, Play, X } from 'lucide-react'

const content = {
  grower: 'Личная коллекция пустынных роз',
  instagram: '@natan_ferreira002',
  instagramUrl: 'https://www.instagram.com/natan_ferreira002/',
  whatsapp: '+55 82 98211 0203',
  whatsappUrl: 'https://wa.me/5582982110203',
}

const gallery = [
  { src: '/images/adenium-hero.png', alt: 'Адениум, роза пустыни, в золотистом свете', caption: 'Форма, созданная временем' },
  { src: '/images/adenium-collection-1.png', alt: 'Коллекция роз пустыни в глиняных горшках', caption: 'Между землёй, солнцем и тишиной' },
  { src: '/images/adenium-collection-2.png', alt: 'Крупный план каудекса и цветка розы пустыни', caption: 'Живые маленькие скульптуры' },
  { src: '/images/adenium-collection-3.png', alt: 'Розы пустыни в залитом солнцем саду', caption: 'Сад, который постоянно меняется' },
  { src: '/images/photo_2026-10-02_00-09-56%20(2).jpg', alt: 'Роза пустыни из личной коллекции', caption: 'Цветение с собственным характером' },
  { src: '/images/photo_2026-10-02_00-09-56.jpg', alt: 'Адениум из личной коллекции', caption: 'Красота в каждой детали' },
  { src: '/images/photo_2026-10-02_00-09-57%20(2).jpg', alt: 'Роза пустыни в коллекции садовода', caption: 'Форма, которой не повторить' },
  { src: '/images/photo_2026-10-02_00-09-57.jpg', alt: 'Цветок адениума из личной коллекции', caption: 'Ещё одна история цветения' },
]

export default function Page() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  const toggleAudio = () => {
    if (!audioRef.current) return
    if (isPlaying) audioRef.current.pause()
    else audioRef.current.play().catch(() => {})
    setIsPlaying(!isPlaying)
  }

  const moveLightbox = (direction: number) => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + direction + gallery.length) % gallery.length)
  }

  return (
    <main className="site-shell">
      <audio ref={audioRef} loop src="/audio/atmosfera-placeholder.wav" aria-label="Фоновая атмосфера" />
      <section className="hero" id="inicio">
        <Image className="hero-image" src={gallery[0].src} alt={gallery[0].alt} fill priority sizes="100vw" />
        <div className="hero-shade" />
        <header className="site-header">
          <a className="brand" href="#inicio"><span className="brand-mark">R</span><span>Розы<br /><i>пустыни</i></span></a>
          <nav className="desktop-nav" aria-label="Основная навигация"><a href="#colecao">Коллекция</a><a href="#natanael">О Натаниэле</a><a href="#cultivo">Выращивание</a><a href="#contato">Контакты</a></nav>
          <button className="menu-button" aria-label="Открыть меню"><Menu /></button>
        </header>
        <div className="hero-content">
          <p className="eyebrow light">Частная коллекция · Бразилия</p>
          <h1>Выращены<br /><em>под солнцем.</em></h1>
          <p className="hero-subtitle">Коллекция роз пустыни, выращенных в Бразилии с терпением, заботой и любовью.</p>
          <div className="hero-actions"><a className="button button-light" href="#colecao">Открыть коллекцию <ArrowDown /></a><a className="text-link light" href="#galeria">Смотреть галерею <span>↗</span></a></div>
        </div>
        <div className="hero-bottom"><span>Красота, которая растёт не спеша.</span><button className="audio-button" onClick={toggleAudio} aria-pressed={isPlaying}>{isPlaying ? <Pause /> : <Play />} {isPlaying ? 'Поставить на паузу' : 'Включить атмосферу'}</button></div>
      </section>

      <section className="intro section-pad"><div className="section-kicker"><span>01</span><span>В чём особенность</span></div><div className="intro-grid"><h2>Больше,<br /><em>чем цветок.</em></h2><div className="intro-copy"><p className="lead">Роза пустыни — растение с характером. Редкая встреча силы земли и нежности цветка.</p><p>Каудекс, открытые корни, ветви и цветы складываются в живую скульптуру. Каждая неповторима, ведь у каждого растения свой путь роста.</p><a className="text-link dark" href="#cultivo">Узнать о выращивании <span>↗</span></a></div></div></section>

      <section className="collection section-pad" id="colecao"><div className="section-kicker"><span>02</span><span>Коллекция</span></div><div className="collection-heading"><h2>Формы,<br /><em>которые не повторяются.</em></h2><p>Одни цветы появляются тихо. Другие расцветают с размахом тех, кто научился ждать.</p></div><div className="editorial-gallery" id="galeria">{gallery.slice(1).map((item, index) => <button key={item.src} className={`gallery-tile tile-${index + 1}`} onClick={() => setLightboxIndex(index + 1)}><Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 50vw" /><span>{item.caption}</span></button>)}</div><div className="gallery-note">Нажмите на фотографию, чтобы заглянуть в сад <span>↗</span></div></section>

      <section className="story dark-section"><div className="story-image"><Image src={gallery[2].src} alt="Деталь розы пустыни" fill sizes="50vw" /></div><div className="story-copy"><div className="section-kicker light"><span>03</span><span>Время каждого растения</span></div><h2>У каждого своя<br /><em>история.</em></h2><p>Форму розы пустыни нельзя торопить. Она рождается под утренним солнцем, благодаря точному поливу и многим дням заботы.</p><p>Эти растения напоминают: расти значит обретать форму. Медленно, вдумчиво, пока не превратишься в миниатюрный пейзаж.</p><span className="story-sign">— Жизнь в процессе роста</span></div></section>

      <section className="cultivo section-pad" id="natanael"><div className="section-kicker"><span>04</span><span>Об авторе коллекции</span></div><div className="cultivo-grid"><div className="portrait"><Image src={gallery[3].src} alt="Садовод среди своих растений" fill sizes="(max-width: 700px) 100vw, 40vw" /><span>Внимательный взгляд<br />на всё, что растёт</span></div><div className="cultivo-copy"><p className="eyebrow">О Натаниэле · Алагоас, Бразилия</p><h2>Натаниэль<br /><em>Феррейра.</em></h2><p className="lead">Преподаватель философии · Любитель пустынных роз</p><p>Натаниэль живёт в бразильском штате Алагоас. Его профиль объединяет две стороны личности: интерес к философии и увлечение пустынными розами. Этот сайт посвящён растениям, внимательному наблюдению за природой и терпению, которого требует выращивание.</p><blockquote className="faith">«Не осмеливайся отнимать моё одиночество, если не способен составить мне настоящую компанию».<small>Цитата из био Натаниэля в Instagram</small></blockquote><a className="text-link dark" href={content.instagramUrl} target="_blank" rel="noreferrer"><Camera /> {content.instagram} <span>↗</span></a></div></div></section>

      <section className="sun-section"><div><span className="sun-symbol">✳</span><h2>Созданы<br /><em>для солнца.</em></h2><p>Тепло, свет и земля. Возможно, поэтому в Бразилии розы пустыни находят такое прекрасное место для цветения.</p></div></section>

      <section className="future section-pad"><div className="future-inner"><p className="eyebrow">Сад продолжает расти</p><h2>Возможно, одна из них<br /><em>станет вашей.</em></h2><p>Коллекция пополняется. В будущем некоторые растения, возможно, будут искать новый дом.</p><a className="button button-dark" href="#contato">Связаться со мной <span>↗</span></a></div></section>

      <section className="instagram section-pad"><div className="section-kicker"><span>05</span><span>Следите за коллекцией</span></div><div className="instagram-heading"><h2>Больше цветов<br /><em>каждый день.</em></h2><a className="text-link dark" href={content.instagramUrl} target="_blank" rel="noreferrer"><Camera /> {content.instagram}</a></div><div className="social-grid">{gallery.map((item, index) => <button key={item.src} onClick={() => setLightboxIndex(index)}><Image src={item.src} alt={item.alt} fill sizes="25vw" /></button>)}</div><a className="button button-outline" href={content.instagramUrl} target="_blank" rel="noreferrer">Открыть Instagram <span>↗</span></a></section>

      <footer className="footer section-pad" id="contato"><div className="footer-top"><div><p className="eyebrow">Давайте познакомимся поближе</p><h2>Хотите узнать<br /><em>больше?</em></h2></div><p className="footer-intro">Следить за коллекцией, обсудить выращивание или просто поздороваться.</p></div><div className="contact-links"><a href={content.instagramUrl} target="_blank" rel="noreferrer"><Camera /><span>Instagram<small>{content.instagram}</small></span></a><a href={content.whatsappUrl} target="_blank" rel="noreferrer"><span className="contact-icon">◌</span><span>WhatsApp<small>{content.whatsapp}</small></span></a></div><div className="footer-bottom"><span>Розы пустыни · Бразилия</span><span>Создано с терпением и заботой <b>✳</b></span></div></footer>

      {lightboxIndex !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Галерея фотографий" onClick={() => setLightboxIndex(null)}><button className="lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Закрыть галерею"><X /></button><button className="lightbox-arrow left" onClick={(event) => { event.stopPropagation(); moveLightbox(-1) }} aria-label="Предыдущее изображение"><ArrowLeft /></button><div className="lightbox-image" onClick={(event) => event.stopPropagation()}><Image src={gallery[lightboxIndex].src} alt={gallery[lightboxIndex].alt} fill sizes="90vw" /><p>{gallery[lightboxIndex].caption}</p></div><button className="lightbox-arrow right" onClick={(event) => { event.stopPropagation(); moveLightbox(1) }} aria-label="Следующее изображение"><ArrowRight /></button></div>}
    </main>
  )
}
