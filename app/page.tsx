'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowDown, ArrowLeft, ArrowRight, Camera, Menu, Pause, Play, X } from 'lucide-react'

const content = {
  grower: 'Uma coleção pessoal de rosas do deserto',
  instagram: '@natan_ferreira002',
  instagramUrl: 'https://www.instagram.com/natan_ferreira002/',
  whatsapp: '+55 82 98211 0203',
  whatsappUrl: 'https://wa.me/5582982110203',
}

const gallery = [
  { src: '/images/adenium-hero.png', alt: 'Адениум, роза пустыни, в золотистом свете', caption: 'Formas moldadas pelo tempo' },
  { src: '/images/adenium-collection-1.png', alt: 'Коллекция роз пустыни в глиняных горшках', caption: 'Entre a terra, o sol e o silêncio' },
  { src: '/images/adenium-collection-2.png', alt: 'Крупный план каудекса и цветка розы пустыни', caption: 'Pequenas esculturas vivas' },
  { src: '/images/adenium-collection-3.png', alt: 'Розы пустыни в залитом солнцем саду', caption: 'Um jardim em constante transformação' },
  { src: '/images/photo_2026-10-02_00-09-56%20(2).jpg', alt: 'Роза пустыни из личной коллекции', caption: 'Flores que têm personalidade' },
  { src: '/images/photo_2026-10-02_00-09-56.jpg', alt: 'Адениум из личной коллекции', caption: 'Beleza em cada detalhe' },
  { src: '/images/photo_2026-10-02_00-09-57%20(2).jpg', alt: 'Роза пустыни в коллекции садовода', caption: 'Uma forma impossível de repetir' },
  { src: '/images/photo_2026-10-02_00-09-57.jpg', alt: 'Цветок адениума из личной коллекции', caption: 'Mais uma história de floração' },
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
          <a className="brand" href="#inicio"><span className="brand-mark">R</span><span>Rosas<br /><i>do deserto</i></span></a>
          <nav className="desktop-nav" aria-label="Основная навигация"><a href="#colecao">Coleção</a><a href="#cultivo">Cultivo</a><a href="#contato">Contato</a></nav>
          <button className="menu-button" aria-label="Abrir menu"><Menu /></button>
        </header>
        <div className="hero-content">
          <p className="eyebrow light">Coleção pessoal · Alagoas, Brasil</p>
          <h1>Cultivadas<br /><em>sob o sol.</em></h1>
          <p className="hero-subtitle">Rosas do deserto, natureza e contemplação em uma coleção pessoal cultivada com paciência e cuidado.</p>
          <div className="hero-actions"><a className="button button-light" href="#colecao">Conheça a coleção <ArrowDown /></a><a className="text-link light" href="#galeria">Explorar a galeria <span>↗</span></a></div>
        </div>
        <div className="hero-bottom"><span>A beleza cresce sem pressa.</span><button className="audio-button" onClick={toggleAudio} aria-pressed={isPlaying}>{isPlaying ? <Pause /> : <Play />} {isPlaying ? 'Pausar a música' : 'Ouvir a atmosfera'}</button></div>
      </section>

      <section className="intro section-pad"><div className="section-kicker"><span>01</span><span>A beleza do adenium</span></div><div className="intro-grid"><h2>Muito<br /><em>além da flor.</em></h2><div className="intro-copy"><p className="lead">A rosa do deserto tem personalidade: a força das raízes encontra a delicadeza das flores.</p><p>Caudex, raízes, galhos e flores formam uma escultura viva. Cada planta tem seu próprio ritmo e uma forma única de crescer.</p><a className="text-link dark" href="#cultivo">Conheça o cultivo <span>↗</span></a></div></div></section>

      <section className="collection section-pad" id="colecao"><div className="section-kicker"><span>02</span><span>A coleção</span></div><div className="collection-heading"><h2>Formas<br /><em>que não se repetem.</em></h2><p>Algumas flores chegam discretamente. Outras florescem com a beleza de quem sabe esperar.</p></div><div className="editorial-gallery" id="galeria">{gallery.slice(1).map((item, index) => <button key={item.src} className={`gallery-tile tile-${index + 1}`} onClick={() => setLightboxIndex(index + 1)}><Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 50vw" /><span>{item.caption}</span></button>)}</div><div className="gallery-note">Toque em uma foto para entrar no jardim <span>↗</span></div></section>

      <section className="story dark-section"><div className="story-image"><Image src={gallery[2].src} alt="Деталь розы пустыни" fill sizes="50vw" /></div><div className="story-copy"><div className="section-kicker light"><span>03</span><span>O tempo de cada planta</span></div><h2>Cada planta tem<br /><em>sua história.</em></h2><p>Não se apressa a forma de uma rosa do deserto. Ela se revela com a luz, os cuidados e o passar dos dias.</p><p>Essas plantas nos lembram que crescer é ganhar forma, pouco a pouco, até se tornar uma pequena paisagem viva.</p><span className="story-sign">— A vida em processo de crescimento</span></div></section>

      <section className="cultivo section-pad" id="cultivo"><div className="section-kicker"><span>04</span><span>Quem está por trás da coleção</span></div><div className="cultivo-grid"><div className="portrait"><Image src={gallery[3].src} alt="Садовод среди своих растений" fill sizes="(max-width: 700px) 100vw, 40vw" /><span>Um olhar atento<br />para tudo que cresce</span></div><div className="cultivo-copy"><p className="eyebrow">Professor de Filosofia · Alagoas, Brasil</p><h2>Cultivar é<br /><em>aprender a esperar.</em></h2><p>Natanael Ferreira é professor de Filosofia e admirador das rosas do deserto. Este espaço reúne natureza, observação e o prazer de acompanhar cada planta no seu próprio ritmo.</p><blockquote className="faith">“Não ouse roubar minha solidão, se não fores capaz de me fazer real companhia.”<small>— Frase presente na bio do Instagram de Natanael</small></blockquote></div></div></section>

      <section className="sun-section"><div><span className="sun-symbol">✳</span><h2>Feitas<br /><em>para o sol.</em></h2><p>Luz, calor e terra. Em Alagoas, a natureza brasileira compõe o cenário desta coleção de rosas do deserto.</p></div></section>

      <section className="future section-pad"><div className="future-inner"><p className="eyebrow">O jardim continua crescendo</p><h2>Quem sabe uma delas<br /><em>encontre um novo lar.</em></h2><p>Para saber mais sobre a coleção ou conversar sobre as plantas, entre em contato pelo Instagram.</p><a className="button button-dark" href="#contato">Fale comigo <span>↗</span></a></div></section>

      <section className="instagram section-pad"><div className="section-kicker"><span>05</span><span>Acompanhe a coleção</span></div><div className="instagram-heading"><h2>Mais flores<br /><em>e descobertas.</em></h2><a className="text-link dark" href={content.instagramUrl} target="_blank" rel="noreferrer"><Camera /> {content.instagram}</a></div><div className="social-grid">{gallery.map((item, index) => <button key={item.src} onClick={() => setLightboxIndex(index)}><Image src={item.src} alt={item.alt} fill sizes="25vw" /></button>)}</div><a className="button button-outline" href={content.instagramUrl} target="_blank" rel="noreferrer">Abrir Instagram <span>↗</span></a></section>

      <footer className="footer section-pad" id="contato"><div className="footer-top"><div><p className="eyebrow">Vamos nos conectar</p><h2>Vamos conversar<br /><em>sobre plantas?</em></h2></div><p className="footer-intro">Acompanhe a coleção, compartilhe experiências de cultivo ou simplesmente diga olá.</p></div><div className="contact-links"><a href={content.instagramUrl} target="_blank" rel="noreferrer"><Camera /><span>Instagram<small>{content.instagram}</small></span></a><a href={content.whatsappUrl} target="_blank" rel="noreferrer"><span className="contact-icon">◌</span><span>WhatsApp<small>{content.whatsapp}</small></span></a></div><div className="footer-bottom"><span>Rosas do deserto · Alagoas, Brasil</span><span>Cultivadas com paciência e cuidado <b>✳</b></span></div></footer>

      {lightboxIndex !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galeria de fotos" onClick={() => setLightboxIndex(null)}><button className="lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Fechar galeria"><X /></button><button className="lightbox-arrow left" onClick={(event) => { event.stopPropagation(); moveLightbox(-1) }} aria-label="Imagem anterior"><ArrowLeft /></button><div className="lightbox-image" onClick={(event) => event.stopPropagation()}><Image src={gallery[lightboxIndex].src} alt={gallery[lightboxIndex].alt} fill sizes="90vw" /><p>{gallery[lightboxIndex].caption}</p></div><button className="lightbox-arrow right" onClick={(event) => { event.stopPropagation(); moveLightbox(1) }} aria-label="Próxima imagem"><ArrowRight /></button></div>}
    </main>
  )
}
