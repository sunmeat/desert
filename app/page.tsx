'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowDown, ArrowLeft, ArrowRight, Camera, Menu, Pause, Play, X } from 'lucide-react'

type Locale = 'pt' | 'ru' | 'en'

const content = {
  instagram: '@natan_ferreira002',
  instagramUrl: 'https://www.instagram.com/natan_ferreira002/',
  whatsapp: '+55 82 98211 0203',
  whatsappUrl: 'https://wa.me/5582982110203',
}

const translations = {
  ru: {
    languageName: 'Русский',
    brand: <>Розы<br /><i>пустыни</i></>,
    nav: ['Коллекция', 'О Натаниэле', 'Контакты'],
    heroEyebrow: 'Личная коллекция · Бразилия',
    heroTitle: <>Выращены<br /><em>под солнцем.</em></>,
    heroSubtitle: 'Коллекция роз пустыни, выращенных в Бразилии с терпением, заботой и любовью.',
    collectionButton: 'Открыть коллекцию',
    galleryLink: 'Смотреть галерею',
    heroFooter: 'Красота, которая растёт не спеша.',
    play: 'Включить атмосферу',
    pause: 'Поставить на паузу',
    introKicker: 'В чём особенность',
    introTitle: <>Больше,<br /><em>чем цветок.</em></>,
    introLead: 'Роза пустыни — растение с характером. Редкая встреча силы земли и нежности цветка.',
    introText: 'Каудекс, открытые корни, ветви и цветы складываются в живую скульптуру. Каждая неповторима, ведь у каждого растения свой путь роста.',
    introLink: 'О Натаниэле',
    collectionKicker: 'Коллекция',
    collectionTitle: <>Формы,<br /><em>которые не повторяются.</em></>,
    collectionText: 'Одни цветы появляются тихо. Другие расцветают с размахом тех, кто научился ждать.',
    galleryHint: 'Нажмите на фотографию, чтобы заглянуть в сад',
    storyKicker: 'Время каждого растения',
    storyTitle: <>У каждого своя<br /><em>история.</em></>,
    storyText1: 'Форму розы пустыни нельзя торопить. Она рождается под утренним солнцем, благодаря точному поливу и многим дням заботы.',
    storyText2: 'Эти растения напоминают: расти значит обретать форму. Медленно, вдумчиво, пока не превратишься в миниатюрный пейзаж.',
    storySign: 'Жизнь в процессе роста',
    aboutKicker: 'Об авторе коллекции',
    aboutEyebrow: 'Натаниэль Феррейра · Алагоас, Бразилия',
    aboutTitle: <>Натаниэль<br /><em>Феррейра.</em></>,
    aboutLead: 'Преподаватель философии · Любитель пустынных роз',
    aboutText: 'Натаниэль живёт в бразильском штате Алагоас. Его профиль объединяет две стороны личности: интерес к философии и увлечение пустынными розами. Этот сайт посвящён растениям, внимательному наблюдению за природой и терпению, которого требует выращивание.',
    quote: '«Не осмеливайся отнимать моё одиночество, если не способен составить мне настоящую компанию».',
    quoteSource: 'Цитата из био Натаниэля в Instagram',
    sunTitle: <>Созданы<br /><em>для солнца.</em></>,
    sunText: 'Тепло, свет и земля. Возможно, поэтому в Бразилии розы пустыни находят такое прекрасное место для цветения.',
    futureEyebrow: 'Сад продолжает расти',
    futureTitle: <>Возможно, одна из них<br /><em>станет вашей.</em></>,
    futureText: 'Коллекция пополняется. Чтобы узнать о растениях или обсудить выращивание, свяжитесь с Натаниэлем через Instagram.',
    contactButton: 'Связаться со мной',
    instagramKicker: 'Следите за коллекцией',
    instagramTitle: <>Больше цветов<br /><em>каждый день.</em></>,
    instagramButton: 'Открыть Instagram',
    footerEyebrow: 'Давайте познакомимся поближе',
    footerTitle: <>Хотите узнать<br /><em>больше?</em></>,
    footerText: 'Следить за коллекцией, обсудить выращивание или просто поздороваться.',
    footerSign: 'Создано с терпением и заботой',
    altHero: 'Адениум, роза пустыни, в золотистом свете',
    gallery: ['Форма, созданная временем', 'Между землёй, солнцем и тишиной', 'Живые маленькие скульптуры', 'Сад, который постоянно меняется', 'Цветение с собственным характером', 'Красота в каждой детали', 'Форма, которой не повторить', 'Ещё одна история цветения'],
    galleryAlt: ['Адениум в золотистом свете', 'Коллекция роз пустыни в глиняных горшках', 'Крупный план каудекса и цветка адениума', 'Розы пустыни в залитом солнцем саду', 'Роза пустыни из коллекции', 'Адениум из личной коллекции', 'Роза пустыни в саду', 'Цветок адениума'],
    portraitAlt: 'Коллекция пустынных роз',
    portraitCaption: <>Внимательный взгляд<br />на всё, что растёт</>,
    lightboxLabel: 'Галерея фотографий',
    close: 'Закрыть галерею',
    previous: 'Предыдущее изображение',
    next: 'Следующее изображение',
    menu: 'Основная навигация',
  },
  pt: {
    languageName: 'Português',
    brand: <>Rosas<br /><i>do deserto</i></>,
    nav: ['Coleção', 'Sobre Natanael', 'Contato'],
    heroEyebrow: 'Coleção pessoal · Brasil',
    heroTitle: <>Cultivadas<br /><em>sob o sol.</em></>,
    heroSubtitle: 'Rosas do deserto cultivadas no Brasil com paciência, cuidado e carinho.',
    collectionButton: 'Conheça a coleção',
    galleryLink: 'Explorar a galeria',
    heroFooter: 'A beleza cresce sem pressa.',
    play: 'Ouvir a atmosfera',
    pause: 'Pausar a música',
    introKicker: 'A beleza do adenium',
    introTitle: <>Muito<br /><em>além da flor.</em></>,
    introLead: 'A rosa do deserto tem personalidade: a força das raízes encontra a delicadeza das flores.',
    introText: 'Caudex, raízes, galhos e flores formam uma escultura viva. Cada planta tem seu próprio ritmo e uma forma única de crescer.',
    introLink: 'Sobre Natanael',
    collectionKicker: 'A coleção',
    collectionTitle: <>Formas<br /><em>que não se repetem.</em></>,
    collectionText: 'Algumas flores chegam discretamente. Outras florescem com a beleza de quem sabe esperar.',
    galleryHint: 'Clique em uma foto para conhecer o jardim',
    storyKicker: 'O tempo de cada planta',
    storyTitle: <>Cada planta tem<br /><em>sua história.</em></>,
    storyText1: 'Não se apressa a forma de uma rosa do deserto. Ela se revela com a luz, os cuidados e o passar dos dias.',
    storyText2: 'Essas plantas nos lembram que crescer é ganhar forma, pouco a pouco, até se tornar uma pequena paisagem viva.',
    storySign: 'A vida em processo de crescimento',
    aboutKicker: 'Quem está por trás da coleção',
    aboutEyebrow: 'Natanael Ferreira · Alagoas, Brasil',
    aboutTitle: <>Natanael<br /><em>Ferreira.</em></>,
    aboutLead: 'Professor de Filosofia · Admirador das rosas do deserto',
    aboutText: 'Natanael vive no estado brasileiro de Alagoas. Seu perfil reúne dois interesses: a filosofia e as rosas do deserto. Este espaço é dedicado às plantas, à observação atenta da natureza e à paciência que o cultivo exige.',
    quote: '“Não ouse roubar minha solidão, se não fores capaz de me fazer real companhia.”',
    quoteSource: 'Frase presente na bio do Instagram de Natanael',
    sunTitle: <>Feitas<br /><em>para o sol.</em></>,
    sunText: 'Luz, calor e terra. Em Alagoas, a natureza brasileira compõe o cenário desta coleção de rosas do deserto.',
    futureEyebrow: 'O jardim continua crescendo',
    futureTitle: <>Quem sabe uma delas<br /><em>encontre um novo lar.</em></>,
    futureText: 'Para saber mais sobre a coleção ou conversar sobre as plantas, entre em contato com Natanael pelo Instagram.',
    contactButton: 'Fale comigo',
    instagramKicker: 'Acompanhe a coleção',
    instagramTitle: <>Mais flores<br /><em>e descobertas.</em></>,
    instagramButton: 'Abrir Instagram',
    footerEyebrow: 'Vamos nos conectar',
    footerTitle: <>Vamos conversar<br /><em>sobre plantas?</em></>,
    footerText: 'Acompanhe a coleção, compartilhe experiências de cultivo ou simplesmente diga olá.',
    footerSign: 'Cultivadas com paciência e carinho',
    altHero: 'Adenium, rosa do deserto, sob uma luz dourada',
    gallery: ['Formas moldadas pelo tempo', 'Entre a terra, o sol e o silêncio', 'Pequenas esculturas vivas', 'Um jardim em constante transformação', 'Flores que têm personalidade', 'Beleza em cada detalhe', 'Uma forma impossível de repetir', 'Mais uma história de floração'],
    galleryAlt: ['Adenium sob luz dourada', 'Coleção de rosas do deserto em vasos de barro', 'Detalhe do caudex e da flor de adenium', 'Rosas do deserto em um jardim ensolarado', 'Rosa do deserto da coleção', 'Adenium da coleção pessoal', 'Rosa do deserto no jardim', 'Flor de adenium'],
    portraitAlt: 'Coleção de rosas do deserto',
    portraitCaption: <>Um olhar atento<br />para tudo que cresce</>,
    lightboxLabel: 'Galeria de fotos',
    close: 'Fechar galeria',
    previous: 'Imagem anterior',
    next: 'Próxima imagem',
    menu: 'Navegação principal',
  },
  en: {
    languageName: 'English',
    brand: <>Desert<br /><i>roses</i></>,
    nav: ['Collection', 'About Natanael', 'Contact'],
    heroEyebrow: 'Personal collection · Brazil',
    heroTitle: <>Grown<br /><em>under the sun.</em></>,
    heroSubtitle: 'Desert roses grown in Brazil with patience, care, and love.',
    collectionButton: 'Explore the collection',
    galleryLink: 'View the gallery',
    heroFooter: 'Beauty grows at its own pace.',
    play: 'Play atmosphere',
    pause: 'Pause music',
    introKicker: 'What makes them special',
    introTitle: <>More<br /><em>than a flower.</em></>,
    introLead: 'The desert rose has a character of its own, where the strength of its roots meets the delicacy of its blooms.',
    introText: 'Caudex, exposed roots, branches, and flowers come together as a living sculpture. Each plant follows its own path and grows into a unique form.',
    introLink: 'About Natanael',
    collectionKicker: 'The collection',
    collectionTitle: <>Forms<br /><em>that never repeat.</em></>,
    collectionText: 'Some flowers arrive quietly. Others bloom with the confidence of those who have learned to wait.',
    galleryHint: 'Select a photo to step into the garden',
    storyKicker: 'Every plant has its own time',
    storyTitle: <>Every plant has<br /><em>a story.</em></>,
    storyText1: 'The shape of a desert rose cannot be rushed. It emerges through sunlight, careful watering, and days of attention.',
    storyText2: 'These plants remind us that growth is a process of finding form, slowly and thoughtfully, until a small living landscape takes shape.',
    storySign: 'Life in the process of growing',
    aboutKicker: 'The person behind the collection',
    aboutEyebrow: 'Natanael Ferreira · Alagoas, Brazil',
    aboutTitle: <>Natanael<br /><em>Ferreira.</em></>,
    aboutLead: 'Philosophy teacher · Desert rose enthusiast',
    aboutText: 'Natanael lives in the Brazilian state of Alagoas. His profile brings together two interests: philosophy and desert roses. This space celebrates plants, thoughtful observation of nature, and the patience that growing them requires.',
    quote: '“Do not dare to steal my solitude if you cannot offer me true companionship.”',
    quoteSource: 'Quote from Natanael’s Instagram bio',
    sunTitle: <>Made<br /><em>for the sun.</em></>,
    sunText: 'Light, warmth, and soil. In Alagoas, the Brazilian landscape provides the setting for this collection of desert roses.',
    futureEyebrow: 'The garden keeps growing',
    futureTitle: <>Perhaps one of them<br /><em>will find a new home.</em></>,
    futureText: 'To learn more about the collection or talk about the plants, contact Natanael through Instagram.',
    contactButton: 'Get in touch',
    instagramKicker: 'Follow the collection',
    instagramTitle: <>More flowers<br /><em>and discoveries.</em></>,
    instagramButton: 'Open Instagram',
    footerEyebrow: 'Let’s connect',
    footerTitle: <>Want to know<br /><em>more?</em></>,
    footerText: 'Follow the collection, talk about growing, or simply stop by to say hello.',
    footerSign: 'Grown with patience and care',
    altHero: 'Desert rose adenium in golden light',
    gallery: ['Shaped by time', 'Between earth, sun, and silence', 'Small living sculptures', 'A garden in constant change', 'Blooms with character', 'Beauty in every detail', 'A one-of-a-kind form', 'Another story of blooming'],
    galleryAlt: ['Adenium in golden light', 'Desert rose collection in clay pots', 'Close-up of an adenium caudex and flower', 'Desert roses in a sunlit garden', 'Desert rose from the collection', 'Adenium from the personal collection', 'Desert rose in the garden', 'Adenium flower'],
    portraitAlt: 'Desert rose collection',
    portraitCaption: <>A thoughtful eye<br />for everything that grows</>,
    lightboxLabel: 'Photo gallery',
    close: 'Close gallery',
    previous: 'Previous image',
    next: 'Next image',
    menu: 'Main navigation',
  },
}

const gallery = [
  '/images/adenium-hero.png',
  '/images/adenium-collection-1.png',
  '/images/adenium-collection-2.png',
  '/images/adenium-collection-3.png',
  '/images/photo_2026-10-02_00-09-56%20(2).jpg',
  '/images/photo_2026-10-02_00-09-56.jpg',
  '/images/photo_2026-10-02_00-09-57%20(2).jpg',
  '/images/photo_2026-10-02_00-09-57.jpg',
]


function FlagIcon({ code }: { code: Locale }) {
  if (code === 'pt') {
    return <svg className="language-flag" viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="16" rx="2" fill="#009739" /><path d="M12 2 21 8 12 14 3 8Z" fill="#FFDF00" /><circle cx="12" cy="8" r="3.2" fill="#002776" /></svg>
  }
  if (code === 'ru') {
    return <svg className="language-flag" viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="16" rx="2" fill="#fff" /><path d="M0 5.33H24V10.66H0Z" fill="#0039A6" /><path d="M0 10.66H24V16H0Z" fill="#D52B1E" /></svg>
  }
  return <svg className="language-flag" viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="16" rx="2" fill="#fff" /><path d="M0 0H24V2H0ZM0 4H24V6H0ZM0 8H24V10H0ZM0 12H24V14H0Z" fill="#B22234" /><rect width="10.5" height="8.5" rx="1" fill="#3C3B6E" /></svg>
}

export default function Page() {
  const [locale, setLocale] = useState<Locale>('pt')
  const [isPlaying, setIsPlaying] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const previousTrackRef = useRef<number>(-1)
  const t = translations[locale]

  const pageTitles: Record<Locale, string> = {
    pt: 'Rosas do Deserto | Coleção Botânica',
    ru: 'Розы пустыни | Ботаническая коллекция',
    en: 'Desert Roses | Botanical Collection',
  }

  useEffect(() => {
    document.title = pageTitles[locale]
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : locale
  }, [locale])

  const tracks = [
    '/audio/21681844.mp3',
    '/audio/24456733.mp3',
    '/audio/59501523.mp3',
    '/audio/62439467.mp3',
    '/audio/151030555.mp3',
  ]

  const playRandomTrack = async () => {
    const audio = audioRef.current
    if (!audio) return

    let nextTrack = Math.floor(Math.random() * tracks.length)
    if (tracks.length > 1 && nextTrack === previousTrackRef.current) {
      nextTrack = (nextTrack + 1 + Math.floor(Math.random() * (tracks.length - 1))) % tracks.length
    }

    previousTrackRef.current = nextTrack
    audio.src = tracks[nextTrack]
    audio.load()

    try {
      await audio.play()
      setIsPlaying(true)
    } catch {
      setIsPlaying(false)
    }
  }

  const toggleAudio = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (!audio.paused) {
      audio.pause()
      setIsPlaying(false)
      return
    }

    await playRandomTrack()
  }

  const moveLightbox = (direction: number) => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + direction + gallery.length) % gallery.length)
  }

  return (
    <main className="site-shell" lang={locale === 'pt' ? 'pt-BR' : locale}>
      <title>{pageTitles[locale]}</title>
      <header className="site-header">
        <a className="brand" href="#inicio"><span className="brand-mark">R</span><span>{t.brand}</span></a>
        <nav className="desktop-nav" aria-label={t.menu}>
          <a href="#colecao">{t.nav[0]}</a><a href="#natanael">{t.nav[1]}</a><a href="#contato">{t.nav[2]}</a>
        </nav>
        <div className="header-tools">
          <button className="audio-button header-audio-button" onClick={toggleAudio} aria-label={isPlaying ? t.pause : t.play} title={isPlaying ? t.pause : t.play} aria-pressed={isPlaying}>{isPlaying ? <Pause /> : <Play />} <span>{isPlaying ? t.pause : t.play}</span></button>
          <div className="language-switch" aria-label="Choose language">
            {([{ code: 'pt', flag: '🇧🇷', label: 'Português brasileiro' }, { code: 'ru', flag: '🇷🇺', label: 'Русский' }, { code: 'en', flag: '🇺🇸', label: 'English (United States)' }] as { code: Locale; flag: string; label: string }[]).map(({ code, flag, label }) => <button key={code} type="button" className={locale === code ? 'active' : ''} aria-label={label} title={label} aria-pressed={locale === code} onClick={() => { setLocale(code); document.title = pageTitles[code]; document.documentElement.lang = code === 'pt' ? 'pt-BR' : code }}><FlagIcon code={code} /><span>{code.toUpperCase()}</span></button>)}
          </div>
          <button className="menu-button" aria-label={t.menu}><Menu /></button>
        </div>
      </header>
      <section className="hero" id="inicio">
        <Image className="hero-image" src={gallery[0]} alt={t.altHero} fill priority sizes="100vw" />
        <div className="hero-shade" />

        <div className="hero-content">
          <p className="eyebrow light">{t.heroEyebrow}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-subtitle">{t.heroSubtitle}</p>
          <div className="hero-actions"><a className="button button-light" href="#colecao">{t.collectionButton} <ArrowDown /></a><a className="text-link light" href="#galeria">{t.galleryLink} <span>↗</span></a></div>
        </div>
        <div className="hero-bottom"><span>{t.heroFooter}</span></div>
        <audio ref={audioRef} onEnded={() => { void playRandomTrack() }} onPause={() => setIsPlaying(false)} onPlay={() => setIsPlaying(true)} preload="none" />
      </section>

      <section className="intro section-pad"><div className="section-kicker"><span>01</span><span>{t.introKicker}</span></div><div className="intro-grid"><h2>{t.introTitle}</h2><div className="intro-copy"><p className="lead">{t.introLead}</p><p>{t.introText}</p><a className="text-link dark" href="#natanael">{t.introLink} <span>↗</span></a></div></div></section>

      <section className="collection section-pad" id="colecao"><div className="section-kicker"><span>02</span><span>{t.collectionKicker}</span></div><div className="collection-heading"><h2>{t.collectionTitle}</h2><p>{t.collectionText}</p></div><div className="editorial-gallery" id="galeria">{gallery.slice(1).map((src, index) => <button key={src} className={`gallery-tile tile-${index + 1}`} onClick={() => setLightboxIndex(index + 1)}><Image src={src} alt={t.galleryAlt[index]} fill sizes="(max-width: 700px) 100vw, 50vw" /><span>{t.gallery[index]}</span></button>)}</div><div className="gallery-note">{t.galleryHint} <span>↗</span></div></section>

      <section className="story dark-section"><div className="story-image"><Image src={gallery[2]} alt={t.galleryAlt[2]} fill sizes="50vw" /></div><div className="story-copy"><div className="section-kicker light"><span>03</span><span>{t.storyKicker}</span></div><h2>{t.storyTitle}</h2><p>{t.storyText1}</p><p>{t.storyText2}</p><span className="story-sign">— {t.storySign}</span></div></section>

      <section className="cultivo section-pad" id="natanael"><div className="section-kicker"><span>04</span><span>{t.aboutKicker}</span></div><div className="cultivo-grid"><div className="portrait"><Image src={gallery[3]} alt={t.portraitAlt} fill sizes="(max-width: 700px) 100vw, 40vw" /><span>{t.portraitCaption}</span></div><div className="cultivo-copy"><p className="eyebrow">{t.aboutEyebrow}</p><h2>{t.aboutTitle}</h2><p className="lead">{t.aboutLead}</p><p>{t.aboutText}</p><blockquote className="faith">{t.quote}<small>{t.quoteSource}</small></blockquote><a className="text-link dark" href={content.instagramUrl} target="_blank" rel="noreferrer"><Camera /> {content.instagram} <span>↗</span></a></div></div></section>

      <section className="sun-section"><div><span className="sun-symbol">✳</span><h2>{t.sunTitle}</h2><p>{t.sunText}</p></div></section>

      <section className="future section-pad"><div className="future-inner"><p className="eyebrow">{t.futureEyebrow}</p><h2>{t.futureTitle}</h2><p>{t.futureText}</p><a className="button button-dark" href="#contato">{t.contactButton} <span>↗</span></a></div></section>

      <section className="instagram section-pad"><div className="section-kicker"><span>05</span><span>{t.instagramKicker}</span></div><div className="instagram-heading"><h2>{t.instagramTitle}</h2><a className="text-link dark" href={content.instagramUrl} target="_blank" rel="noreferrer"><Camera /> {content.instagram}</a></div><div className="social-grid">{gallery.map((src, index) => <button key={src} onClick={() => setLightboxIndex(index)} aria-label={t.gallery[index]}><Image src={src} alt={t.galleryAlt[index]} fill sizes="25vw" /></button>)}</div><a className="button button-outline" href={content.instagramUrl} target="_blank" rel="noreferrer">{t.instagramButton} <span>↗</span></a></section>

      <footer className="footer section-pad" id="contato"><div className="footer-top"><div><p className="eyebrow">{t.footerEyebrow}</p><h2>{t.footerTitle}</h2></div><p className="footer-intro">{t.footerText}</p></div><div className="contact-links"><a href={content.instagramUrl} target="_blank" rel="noreferrer"><Camera /><span>Instagram<small>{content.instagram}</small></span></a><a href={content.whatsappUrl} target="_blank" rel="noreferrer"><span className="contact-icon">◌</span><span>WhatsApp<small>{content.whatsapp}</small></span></a></div><div className="footer-bottom"><span>{locale === 'pt' ? 'Rosas do deserto · Alagoas, Brasil' : locale === 'en' ? 'Desert roses · Alagoas, Brazil' : 'Розы пустыни · Алагоас, Бразилия'}</span><span>{t.footerSign} <b>✳</b></span></div></footer>

      {lightboxIndex !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={t.lightboxLabel} onClick={() => setLightboxIndex(null)}><button className="lightbox-close" onClick={() => setLightboxIndex(null)} aria-label={t.close}><X /></button><button className="lightbox-arrow left" onClick={(event) => { event.stopPropagation(); moveLightbox(-1) }} aria-label={t.previous}><ArrowLeft /></button><div className="lightbox-image" onClick={(event) => event.stopPropagation()}><Image src={gallery[lightboxIndex]} alt={t.galleryAlt[lightboxIndex]} fill sizes="90vw" /><p>{t.gallery[lightboxIndex]}</p></div><button className="lightbox-arrow right" onClick={(event) => { event.stopPropagation(); moveLightbox(1) }} aria-label={t.next}><ArrowRight /></button></div>}
    </main>
  )
}
