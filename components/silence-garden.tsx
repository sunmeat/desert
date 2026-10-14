'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Bird, CloudRain, Leaf, RefreshCw, Wind, X } from 'lucide-react'

type Locale = 'pt' | 'ru' | 'en'
type SoundKey = 'rain' | 'birds' | 'wind' | 'garden'

const quotes: Record<Locale, string[]> = {
  ru: [
    'Тишина не всегда означает пустоту. Иногда в ней наконец слышно себя.',
    'Забота начинается там, где заканчивается желание переделать другого.',
    'Не всякое одиночество просит спасения. Иногда оно просит пространства.',
    'Время не лечит само по себе. Оно даёт нам место, чтобы научиться жить иначе.',
    'Близость измеряется не количеством слов, а тем, сколько правды можно выдержать рядом.',
    'Цветок не опаздывает. Он живёт в собственном времени.',
    'Быть добрым не значит быть удобным. У доброты тоже должны быть корни.',
    'Некоторые ответы приходят лишь тогда, когда перестаёшь преследовать вопрос.',
    'Не каждый, кто ушёл, перестал любить. Не каждый, кто остался, умеет быть рядом.',
    'Терпение это забота, которой не нужен немедленный результат.',
    'Мы не обязаны цвести круглый год. Отдых тоже часть жизни.',
    'Порой человеку нужен не совет, а место, где его не будут чинить.',
    'Уважать чужой путь значит не требовать, чтобы он был похож на твой.',
    'Самое тихое присутствие иногда поддерживает сильнее самых красивых обещаний.',
    'Корни становятся крепкими там, где их никто не видит.',
    'Не всякая пауза является расстоянием. Иногда это способ остаться бережным.',
    'Отпустить не значит обесценить. Иногда это последняя форма уважения.',
    'Сад растёт не от тревоги садовника, а от внимания к тому, что ему нужно.',
    'Нежность не отменяет правду. Она помогает сказать её без жестокости.',
    'Человек расцветает не под давлением, а там, где ему безопасно быть собой.',
    'Есть встречи, после которых мир не меняется, но дышать становится легче.',
    'Не путай медленный рост с отсутствием движения.',
    'Иногда граница это не стена, а калитка, которую ты открываешь сам.',
    'Мы узнаём любовь не по обещанию навсегда, а по заботе сегодня.',
    'Даже в покое жизнь продолжает делать свою незаметную работу.',
    'Не нужно заслуживать право на отдых.',
    'Пусть твоя доброта будет выбором, а не ценой за принятие.',
    'Слушать по-настоящему значит оставить место для ответа, которого ты не ожидал.',
    'Некоторые вещи можно сохранить только перестав сжимать их в руках.',
    'Свет не отменяет тень. Он помогает увидеть форму целиком.',
    'Время показывает не только то, что ушло, но и то, что осталось.',
    'Там, где нет спешки, вниманию легче стать любовью.',
    'Одиночество становится мягче, когда перестаёшь считать себя покинутым за то, что ты один.',
    'Не все перемены заметны снаружи. Иногда целый лес начинается под землёй.',
    'Не проси цветения от того, что ещё учится держать корни.',
    'Чужая тишина не всегда направлена против тебя.',
    'Сильные отношения выдерживают не только близость, но и отдельность.',
    'Иногда забота это полить. Иногда это не трогать землю.',
    'Надежда не обещает лёгкой дороги. Она оставляет дверь открытой.',
    'Пусть домом станет место, где не приходится уменьшать себя.',
    'Мы взрослеем, когда учимся отличать любовь от попытки удержать.',
    'Дождь не спрашивает у сада, заслужил ли он воду.',
    'Не каждое семя должно стать деревом, чтобы его жизнь имела смысл.',
    'Спокойствие не означает, что ничего не болит. Оно означает, что боль не одна во всей комнате.',
    'Слова могут открыть окно, но присутствие помогает остаться в комнате.',
    'То, что растёт медленно, часто учит нас замечать сам процесс.',
    'Не торопи прощение. Даже почве нужно время, чтобы снова стать мягкой.',
    'Мы не можем прожить чужую зиму за другого, но можем оставить свет у окна.',
    'Бережность начинается с простого вопроса: что сейчас действительно нужно?',
    'Пусть в твоей жизни будет сад, в котором ничего не нужно доказывать.'
  ],
  pt: [
    'O silêncio nem sempre é vazio. Às vezes, é nele que voltamos a nos ouvir.',
    'O cuidado começa quando termina a vontade de transformar o outro.',
    'Nem toda solidão pede resgate. Às vezes, ela só precisa de espaço.',
    'O tempo não cura sozinho. Ele nos oferece lugar para aprender a viver de outro modo.',
    'A intimidade se mede pela verdade que conseguimos sustentar juntos.',
    'Uma flor não se atrasa. Ela vive no próprio tempo.',
    'Ser gentil não é ser conveniente. A bondade também precisa de raízes.',
    'Algumas respostas chegam quando deixamos de perseguir a pergunta.',
    'Nem todo mundo que parte deixou de amar. Nem todo mundo que fica sabe estar presente.',
    'Paciência é cuidado que não exige resultado imediato.',
    'Não precisamos florescer o ano inteiro. O descanso também faz parte da vida.',
    'Às vezes, alguém não precisa de conselho, mas de um lugar onde não tentem consertá-lo.',
    'Respeitar o caminho de alguém é não exigir que ele se pareça com o nosso.',
    'Uma presença silenciosa pode sustentar mais do que as promessas mais bonitas.',
    'As raízes ficam fortes onde ninguém as vê.',
    'Nem toda pausa é distância. Às vezes, é uma forma de continuar com delicadeza.',
    'Deixar ir não é desvalorizar. Às vezes, é a última forma de respeito.',
    'O jardim cresce não com a ansiedade de quem cuida, mas com atenção ao que precisa.',
    'A delicadeza não apaga a verdade. Ajuda a dizê-la sem crueldade.',
    'As pessoas florescem não sob pressão, mas onde se sentem seguras para ser quem são.',
    'Há encontros que não mudam o mundo, mas tornam a respiração mais leve.',
    'Não confunda crescimento lento com ausência de movimento.',
    'Às vezes, um limite não é um muro, mas um portão que você decide abrir.',
    'Reconhecemos o amor não pela promessa de sempre, mas pelo cuidado de hoje.',
    'Mesmo em repouso, a vida continua seu trabalho invisível.',
    'Você não precisa merecer o direito de descansar.',
    'Que sua bondade seja uma escolha, não o preço para ser aceito.',
    'Escutar de verdade é deixar espaço para uma resposta inesperada.',
    'Algumas coisas só permanecem quando deixamos de apertá-las nas mãos.',
    'A luz não elimina a sombra. Ela nos ajuda a ver a forma inteira.',
    'O tempo revela não apenas o que partiu, mas também o que permaneceu.',
    'Onde não há pressa, a atenção encontra espaço para se tornar amor.',
    'A solidão fica mais suave quando deixamos de nos sentir abandonados por estarmos sós.',
    'Nem toda mudança aparece por fora. Às vezes, uma floresta inteira começa sob a terra.',
    'Não exija flores de algo que ainda está aprendendo a criar raízes.',
    'O silêncio de alguém nem sempre é dirigido contra você.',
    'Relações fortes suportam tanto a proximidade quanto a individualidade.',
    'Às vezes, cuidar é regar. Às vezes, é não mexer na terra.',
    'A esperança não promete um caminho fácil. Ela mantém uma porta aberta.',
    'Que lar seja o lugar onde você não precise se diminuir.',
    'Amadurecemos quando aprendemos a distinguir amor de tentativa de posse.',
    'A chuva não pergunta ao jardim se ele merece água.',
    'Nem toda semente precisa virar árvore para que sua vida tenha sentido.',
    'Serenidade não significa ausência de dor. Significa que a dor não ocupa o cômodo inteiro.',
    'As palavras podem abrir uma janela, mas a presença ajuda a permanecer no quarto.',
    'O que cresce devagar nos ensina a perceber o próprio processo.',
    'Não apresse o perdão. Até a terra precisa de tempo para voltar a ficar macia.',
    'Não podemos atravessar o inverno de outra pessoa por ela, mas podemos deixar uma luz na janela.',
    'A delicadeza começa com uma pergunta simples: do que realmente precisamos agora?',
    'Que exista na sua vida um jardim onde nada precise ser provado.'
  ],
  en: [
    'Silence is not always empty. Sometimes it is where we finally hear ourselves.',
    'Care begins where the urge to remake another person ends.',
    'Not every loneliness asks to be rescued. Sometimes it asks for room.',
    'Time does not heal by itself. It gives us space to learn another way to live.',
    'Intimacy is measured by how much truth we can bear beside one another.',
    'A flower is not late. It lives in its own time.',
    'Being kind does not mean being convenient. Kindness needs roots, too.',
    'Some answers arrive only after we stop chasing the question.',
    'Not everyone who leaves has stopped loving. Not everyone who stays knows how to be present.',
    'Patience is care that does not demand an immediate result.',
    'We do not have to bloom all year. Rest belongs to life, too.',
    'Sometimes a person needs no advice, only a place where nobody tries to fix them.',
    'Respecting another path means not demanding that it resemble your own.',
    'A quiet presence can hold us more firmly than the most beautiful promises.',
    'Roots grow strong where nobody sees them.',
    'Not every pause is distance. Sometimes it is a gentler way to stay.',
    'Letting go does not mean it mattered less. Sometimes it is the final form of respect.',
    'A garden grows not from a gardener’s worry, but from attention to what it needs.',
    'Gentleness does not erase truth. It helps us speak it without cruelty.',
    'People bloom not under pressure, but where they feel safe being themselves.',
    'Some meetings do not change the world, yet make breathing easier.',
    'Do not mistake slow growth for no movement.',
    'Sometimes a boundary is not a wall, but a gate you choose to open.',
    'We recognize love not by promises of forever, but by the care offered today.',
    'Even at rest, life continues its quiet work.',
    'You do not have to earn the right to rest.',
    'Let kindness be your choice, not the price of being accepted.',
    'To truly listen is to leave room for an answer you did not expect.',
    'Some things can be kept only when we stop gripping them.',
    'Light does not erase shadow. It helps us see the whole shape.',
    'Time reveals not only what has left, but also what remained.',
    'Where there is no hurry, attention has room to become love.',
    'Loneliness softens when being alone no longer feels like being abandoned.',
    'Not every change is visible outside. Sometimes a whole forest begins underground.',
    'Do not demand flowers from what is still learning to grow roots.',
    'Another person’s silence is not always directed against you.',
    'Strong relationships can hold both closeness and separateness.',
    'Sometimes care means watering. Sometimes it means leaving the soil alone.',
    'Hope does not promise an easy road. It keeps a door open.',
    'Let home be the place where you do not have to make yourself smaller.',
    'We grow when we learn to tell love apart from the urge to hold on.',
    'Rain does not ask the garden whether it deserves water.',
    'Not every seed must become a tree for its life to have meaning.',
    'Calm does not mean nothing hurts. It means pain is not the only thing in the room.',
    'Words can open a window, but presence helps us stay in the room.',
    'What grows slowly teaches us to notice the process itself.',
    'Do not rush forgiveness. Even soil needs time to soften again.',
    'We cannot live another person’s winter for them, but we can leave a light in the window.',
    'Gentleness begins with a simple question: what is truly needed right now?',
    'May your life hold a garden where nothing needs to be proven.'
  ]
}

const copy = {
  ru: { soundEyebrow: 'ЗВУКИ ПРИРОДЫ', footerLine: 'ПАУЗА · ЗАБОТА · ПРИСУТСТВИЕ', brand: 'РОЗЫ ПУСТЫНИ', title: 'Сад тишины', subtitle: 'Небольшое место, чтобы замедлиться.', invitation: 'Иногда достаточно просто побыть здесь.', day: 'Размышление дня', next: 'Другая мысль', sounds: 'Звуки сада', rain: 'Дождь', birds: 'Пение птиц', wind: 'Ветер', garden: 'Живой сад', exit: 'Выйти из сада', hint: 'Звуки можно сочетать. Включайте только то, что хочется услышать.', open: 'Войти в сад тишины', kicker: 'Место для паузы', intro: 'О терпении, заботе и времени' },
  pt: { soundEyebrow: 'SONS DA NATUREZA', footerLine: 'PAUSA · CUIDADO · PRESENÇA', brand: 'ROSAS DO DESERTO', title: 'Jardim do silêncio', subtitle: 'Um pequeno lugar para desacelerar.', invitation: 'Às vezes, basta simplesmente estar aqui.', day: 'Reflexão do dia', next: 'Outra reflexão', sounds: 'Sons do jardim', rain: 'Chuva', birds: 'Pássaros', wind: 'Vento', garden: 'Vida no jardim', exit: 'Sair do jardim', hint: 'Você pode combinar os sons. Ative apenas o que deseja ouvir.', open: 'Entrar no jardim do silêncio', kicker: 'Um lugar para pausar', intro: 'Sobre paciência, cuidado e tempo' },
  en: { soundEyebrow: 'SOUNDS OF NATURE', footerLine: 'PAUSE · CARE · PRESENCE', brand: 'DESERT ROSES', title: 'Garden of quiet', subtitle: 'A small place to slow down.', invitation: 'Sometimes it is enough to simply be here.', day: 'Reflection of the day', next: 'Another reflection', sounds: 'Garden sounds', rain: 'Rain', birds: 'Birdsong', wind: 'Wind', garden: 'Living garden', exit: 'Leave the garden', hint: 'Sounds can be combined. Turn on only what you feel like hearing.', open: 'Enter the garden of quiet', kicker: 'A place to pause', intro: 'On patience, care, and time' }
}

type AudioContextWindow = Window & { webkitAudioContext?: typeof AudioContext }

export default function SilenceGarden({ locale = 'pt' }: { locale?: Locale }) {
  const [isOpen, setIsOpen] = useState(false)
  const [quoteIndex, setQuoteIndex] = useState(() => Math.floor(Math.random() * 50))
  const [activeSounds, setActiveSounds] = useState<SoundKey[]>([])
  const contextRef = useRef<AudioContext | null>(null)
  const stopsRef = useRef<Partial<Record<SoundKey, () => void>>>({})
  const t = copy[locale]

  const stopAllSounds = useCallback(() => {
    Object.values(stopsRef.current).forEach((stop) => stop?.())
    stopsRef.current = {}
    setActiveSounds([])
  }, [])

  const stopSound = useCallback((key: SoundKey) => {
    stopsRef.current[key]?.()
    delete stopsRef.current[key]
    setActiveSounds((current) => current.filter((sound) => sound !== key))
  }, [])

  const startSound = useCallback(async (key: SoundKey) => {
    const AudioContextClass = window.AudioContext || (window as AudioContextWindow).webkitAudioContext
    if (!AudioContextClass) return
    const context = contextRef.current ?? new AudioContextClass()
    contextRef.current = context
    if (context.state === 'suspended') await context.resume()
    const master = context.createGain()
    master.gain.value = key === 'birds' ? 0.14 : key === 'garden' ? 0.09 : 0.2
    master.connect(context.destination)
    const nodes: AudioNode[] = []
    let interval: number | undefined
    let disposed = false
    const addNoise = (frequency: number, type: BiquadFilterType, volume: number) => {
      const buffer = context.createBuffer(1, context.sampleRate * 3, context.sampleRate)
      const data = buffer.getChannelData(0)
      for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1
      const source = context.createBufferSource()
      source.buffer = buffer
      source.loop = true
      const filter = context.createBiquadFilter()
      filter.type = type
      filter.frequency.value = frequency
      filter.Q.value = 0.55
      const gain = context.createGain()
      gain.gain.value = volume
      source.connect(filter).connect(gain).connect(master)
      source.start()
      nodes.push(source, filter, gain)
    }
    const chirp = (frequency: number, duration: number, delay = 0) => {
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      oscillator.type = 'sine'
      oscillator.frequency.setValueAtTime(frequency, context.currentTime + delay)
      oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.23, context.currentTime + delay + duration * 0.45)
      oscillator.frequency.exponentialRampToValueAtTime(frequency * 0.92, context.currentTime + delay + duration)
      gain.gain.setValueAtTime(0.0001, context.currentTime + delay)
      gain.gain.exponentialRampToValueAtTime(key === 'birds' ? 0.11 : 0.045, context.currentTime + delay + 0.035)
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + delay + duration)
      oscillator.connect(gain).connect(master)
      oscillator.start(context.currentTime + delay)
      oscillator.stop(context.currentTime + delay + duration + 0.02)
      nodes.push(oscillator, gain)
    }

    if (key === 'rain') {
      addNoise(1150, 'lowpass', 0.22)
      addNoise(4200, 'highpass', 0.035)
    } else if (key === 'wind') {
      addNoise(260, 'lowpass', 0.42)
      const lfo = context.createOscillator()
      const depth = context.createGain()
      const gain = nodes.find((node) => node instanceof GainNode) as GainNode | undefined
      lfo.frequency.value = 0.12
      depth.gain.value = 0.11
      if (gain) lfo.connect(depth).connect(gain.gain)
      lfo.start()
      nodes.push(lfo, depth)
    } else if (key === 'birds') {
      const playBirds = () => {
        if (disposed) return
        chirp(1800 + Math.random() * 1000, 0.16)
        if (Math.random() > 0.42) chirp(2300 + Math.random() * 1200, 0.12, 0.22)
        if (Math.random() > 0.65) chirp(1500 + Math.random() * 900, 0.18, 0.48)
      }
      playBirds()
      interval = window.setInterval(playBirds, 1900 + Math.random() * 1400)
    } else {
      const playGarden = () => {
        if (disposed) return
        const notes = [659.25, 783.99, 987.77, 1174.66, 880]
        const note = notes[Math.floor(Math.random() * notes.length)]
        chirp(note, 1.6)
      }
      playGarden()
      interval = window.setInterval(playGarden, 2800 + Math.random() * 1800)
      addNoise(7000, 'highpass', 0.012)
    }

    stopsRef.current[key] = () => {
      disposed = true
      if (interval !== undefined) window.clearInterval(interval)
      nodes.forEach((node) => {
        try {
          if ('stop' in node && typeof node.stop === 'function') node.stop()
          node.disconnect()
        } catch {}
      })
      master.disconnect()
    }
    setActiveSounds((current) => current.includes(key) ? current : [...current, key])
  }, [])

  const toggleSound = useCallback((key: SoundKey) => {
    if (activeSounds.includes(key)) stopSound(key)
    else void startSound(key)
  }, [activeSounds, startSound, stopSound])

  const closeGarden = useCallback(() => {
    stopAllSounds()
    setIsOpen(false)
  }, [stopAllSounds])

  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeGarden()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, closeGarden])

  useEffect(() => () => {
    Object.values(stopsRef.current).forEach((stop) => stop?.())
    void contextRef.current?.close()
  }, [])

  const nextQuote = () => setQuoteIndex((current) => {
    const offset = 1 + Math.floor(Math.random() * 49)
    return (current + offset) % quotes[locale].length
  })

  const SoundButton = ({ sound, icon: Icon, label }: { sound: SoundKey; icon: typeof CloudRain; label: string }) => {
    const active = activeSounds.includes(sound)
    return <button className={`silence-sound-button ${active ? 'is-active' : ''}`} type="button" aria-pressed={active} onClick={() => toggleSound(sound)}><span className="silence-sound-icon"><Icon /></span><span>{label}</span><span className="silence-sound-state">{active ? '●' : '+'}</span></button>
  }

  return (
    <>
      <section className="silence-invitation section-pad" aria-labelledby="silence-invitation-title">
        <div className="silence-invitation-inner">
          <span className="silence-orbit" aria-hidden="true"><Leaf /></span>
          <p className="eyebrow">{t.kicker}</p>
          <h2 id="silence-invitation-title">{t.title}</h2>
          <p>{t.intro}</p>
          <button type="button" className="silence-enter-button" onClick={() => { setQuoteIndex(Math.floor(Math.random() * 50)); setIsOpen(true) }}>{t.open}<span aria-hidden="true">↗</span></button>
        </div>
      </section>
      {isOpen && <div className="silence-modal" role="dialog" aria-modal="true" aria-labelledby="silence-title">
        <div className="silence-modal-backdrop" aria-hidden="true" />
        <div className="silence-modal-content">
          <header className="silence-modal-header">
            <a className="silence-modal-brand" href="#inicio" onClick={(event) => event.preventDefault()}><Leaf /><span>{t.brand}</span></a>
            <span className="silence-live-mark"><span /> {t.invitation}</span>
            <button className="silence-exit" type="button" onClick={closeGarden}><X /><span>{t.exit}</span></button>
          </header>
          <div className="silence-main">
            <div className="silence-title-block"><p className="eyebrow"><span>✳</span> 07 · {t.kicker}</p><h2 id="silence-title">{t.title.split(' ').slice(0, -1).join(' ')} <em>{t.title.split(' ').slice(-1)}</em></h2><p>{t.subtitle}</p></div>
            <section className="silence-quote-panel" aria-live="polite">
              <span className="silence-quote-mark">“</span>
              <p className="silence-quote-label">{t.day} · {String(quoteIndex + 1).padStart(2, '0')} / 50</p>
              <blockquote key={quoteIndex}>{quotes[locale][quoteIndex]}</blockquote>
              <button className="silence-next-quote" type="button" onClick={nextQuote}><RefreshCw /> {t.next}</button>
              <span className="silence-quote-rule" />
            </section>
            <section className="silence-sounds" aria-labelledby="silence-sounds-title">
              <div className="silence-sounds-heading"><div><p className="eyebrow">{t.soundEyebrow}</p><h3 id="silence-sounds-title">{t.sounds}</h3></div><span className="silence-sounds-count">{activeSounds.length} / 4</span></div>
              <div className="silence-sound-grid">
                <SoundButton sound="rain" icon={CloudRain} label={t.rain} />
                <SoundButton sound="birds" icon={Bird} label={t.birds} />
                <SoundButton sound="wind" icon={Wind} label={t.wind} />
                <SoundButton sound="garden" icon={Leaf} label={t.garden} />
              </div>
              <p className="silence-sound-hint">{t.hint}</p>
            </section>
            <p className="silence-footer-whisper">— {t.invitation}</p>
          </div>
          <div className="silence-modal-bottom"><span>✳</span><span>{t.footerLine}</span><span>✳</span></div>
        </div>
      </div>}
    </>
  )
}
