'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowDown, ArrowLeft, ArrowRight, Camera, Mail, Menu, Pause, Play, X } from 'lucide-react'

const content = {
  grower: 'Um cultivo íntimo, feito à mão',
  instagram: '@SEU_INSTAGRAM',
  whatsapp: '+55 (00) 00000-0000',
  email: 'seuemail@exemplo.com',
}

const gallery = [
  { src: '/images/adenium-hero.png', alt: 'Rosa-do-deserto em luz dourada', caption: 'A forma que o tempo desenhou' },
  { src: '/images/adenium-collection-1.png', alt: 'Coleção de rosas-do-deserto em vasos de barro', caption: 'Entre terra, sol e silêncio' },
  { src: '/images/adenium-collection-2.png', alt: 'Detalhe do caudex e da flor de uma rosa-do-deserto', caption: 'Pequenas esculturas vivas' },
  { src: '/images/adenium-collection-3.png', alt: 'Rosas-do-deserto em um jardim ensolarado', caption: 'Um jardim em constante transformação' },
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
      <audio ref={audioRef} loop src="/audio/atmosfera-placeholder.wav" aria-label="Atmosfera sonora" />
      <section className="hero" id="inicio">
        <Image className="hero-image" src={gallery[0].src} alt={gallery[0].alt} fill priority sizes="100vw" />
        <div className="hero-shade" />
        <header className="site-header">
          <a className="brand" href="#inicio"><span className="brand-mark">R</span><span>Rosas<br /><i>do deserto</i></span></a>
          <nav className="desktop-nav" aria-label="Navegação principal"><a href="#colecao">A coleção</a><a href="#cultivo">O cultivo</a><a href="#contato">Contato</a></nav>
          <button className="menu-button" aria-label="Abrir menu"><Menu /></button>
        </header>
        <div className="hero-content">
          <p className="eyebrow light">Coleção particular · Brasil</p>
          <h1>Cultivadas<br /><em>sob o sol.</em></h1>
          <p className="hero-subtitle">Uma coleção de rosas-do-deserto cultivadas com tempo, cuidado e paixão no Brasil.</p>
          <div className="hero-actions"><a className="button button-light" href="#colecao">Conheça a coleção <ArrowDown /></a><a className="text-link light" href="#galeria">Veja a galeria <span>↗</span></a></div>
        </div>
        <div className="hero-bottom"><span>Beleza que cresce devagar.</span><button className="audio-button" onClick={toggleAudio} aria-pressed={isPlaying}>{isPlaying ? <Pause /> : <Play />} {isPlaying ? 'Pausar atmosfera' : 'Ouvir a atmosfera'}</button></div>
      </section>

      <section className="intro section-pad"><div className="section-kicker"><span>01</span><span>O que torna especial</span></div><div className="intro-grid"><h2>Mais do que<br /><em>uma flor.</em></h2><div className="intro-copy"><p className="lead">A rosa-do-deserto é uma presença. Um encontro raro entre a força da terra e a delicadeza da flor.</p><p>Seu caudex, as raízes expostas, os galhos e as flores formam uma escultura viva — única, porque cada planta encontra o seu próprio jeito de crescer.</p><a className="text-link dark" href="#cultivo">Descubra o cultivo <span>↗</span></a></div></div></section>

      <section className="collection section-pad" id="colecao"><div className="section-kicker"><span>02</span><span>A coleção</span></div><div className="collection-heading"><h2>Formas que<br /><em>não se repetem.</em></h2><p>Algumas flores chegam em silêncio. Outras, com a exuberância de quem aprendeu a esperar.</p></div><div className="editorial-gallery" id="galeria">{gallery.slice(1).map((item, index) => <button key={item.src} className={`gallery-tile tile-${index + 1}`} onClick={() => setLightboxIndex(index + 1)}><Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 50vw" /><span>{item.caption}</span></button>)}</div><div className="gallery-note">Clique nas imagens para entrar no jardim <span>↗</span></div></section>

      <section className="story dark-section"><div className="story-image"><Image src={gallery[2].src} alt="Detalhe de uma rosa-do-deserto" fill sizes="50vw" /></div><div className="story-copy"><div className="section-kicker light"><span>03</span><span>O tempo de cada uma</span></div><h2>Cada uma conta<br /><em>uma história.</em></h2><p>O desenho de uma rosa-do-deserto não pode ser apressado. Ele nasce do sol de cada manhã, da água na medida certa e de muitos dias de cuidado.</p><p>São plantas que lembram que crescer também é ganhar forma. Devagar, com presença, até se tornarem paisagens em miniatura.</p><span className="story-sign">— Vidas em cultivo</span></div></section>

      <section className="cultivo section-pad" id="cultivo"><div className="section-kicker"><span>04</span><span>Quem cultiva</span></div><div className="cultivo-grid"><div className="portrait"><Image src={gallery[3].src} alt="Retrato do cultivador entre suas plantas" fill sizes="(max-width: 700px) 100vw, 40vw" /><span>Um olhar atento<br />para o que cresce</span></div><div className="cultivo-copy"><p className="eyebrow">{content.grower}</p><h2>Cultivar é<br /><em>aprender a esperar.</em></h2><p>Este é um espaço de paixão. De mãos na terra, de observação e de respeito pelo ritmo de cada planta. Aqui, a coleção cresce sem pressa — guiada pela curiosidade e pela alegria de cuidar.</p><p className="faith">Há beleza em cuidar daquilo que Deus nos confiou.</p></div></div></section>

      <section className="sun-section"><div><span className="sun-symbol">✳</span><h2>Feitas<br /><em>para o sol.</em></h2><p>Calor, luz e terra. Talvez seja por isso que as rosas-do-deserto encontrem no Brasil um lugar tão bonito para florescer.</p></div></section>

      <section className="future section-pad"><div className="future-inner"><p className="eyebrow">Um jardim que continua</p><h2>Alguma delas<br /><em>pode ser sua.</em></h2><p>A coleção está crescendo. No futuro, algumas plantas poderão estar disponíveis para novos lares.</p><a className="button button-dark" href="#contato">Fale comigo <span>↗</span></a></div></section>

      <section className="instagram section-pad"><div className="section-kicker"><span>05</span><span>Acompanhe o cultivo</span></div><div className="instagram-heading"><h2>Mais flores,<br /><em>todos os dias.</em></h2><a className="text-link dark" href="#contato"><Camera /> {content.instagram}</a></div><div className="social-grid">{gallery.map((item, index) => <button key={item.src} onClick={() => setLightboxIndex(index)}><Image src={item.src} alt={item.alt} fill sizes="25vw" /></button>)}</div><a className="button button-outline" href="#contato">Ver no Instagram <span>↗</span></a></section>

      <footer className="footer section-pad" id="contato"><div className="footer-top"><div><p className="eyebrow">Um convite para chegar mais perto</p><h2>Quer conhecer<br /><em>mais?</em></h2></div><p className="footer-intro">Para acompanhar a coleção, trocar uma ideia sobre cultivo ou simplesmente dizer oi.</p></div><div className="contact-links"><a href="#contato"><Camera /><span>Instagram<small>{content.instagram}</small></span></a><a href="#contato"><span className="contact-icon">◌</span><span>WhatsApp<small>{content.whatsapp}</small></span></a><a href={`mailto:${content.email}`}><Mail /><span>E-mail<small>{content.email}</small></span></a></div><div className="footer-bottom"><span>Rosas do deserto · Brasil</span><span>Feito com tempo e carinho <b>✳</b></span></div></footer>

      {lightboxIndex !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galeria de fotografias" onClick={() => setLightboxIndex(null)}><button className="lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Fechar galeria"><X /></button><button className="lightbox-arrow left" onClick={(event) => { event.stopPropagation(); moveLightbox(-1) }} aria-label="Imagem anterior"><ArrowLeft /></button><div className="lightbox-image" onClick={(event) => event.stopPropagation()}><Image src={gallery[lightboxIndex].src} alt={gallery[lightboxIndex].alt} fill sizes="90vw" /><p>{gallery[lightboxIndex].caption}</p></div><button className="lightbox-arrow right" onClick={(event) => { event.stopPropagation(); moveLightbox(1) }} aria-label="Próxima imagem"><ArrowRight /></button></div>}
    </main>
  )
}
