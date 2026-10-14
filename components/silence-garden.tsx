'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Bird, CloudRain, Leaf, RefreshCw, Wind, X, Flame, TreeDeciduous, Droplets, Waves, Music, Coffee, Drum, CircleDot, Flower2, Sprout, Bug, CloudLightning, Trees } from 'lucide-react'

type Locale = 'pt' | 'ru' | 'en'
type SoundKey = 'rain' | 'birds' | 'wind' | 'cicadas' | 'fire' | 'wood' | 'irrigation' | 'chimes' | 'stream' | 'thunder' | 'bees' | 'tribal' | 'bowls' | 'crickets' | 'bumblebees' | 'frogs' | 'dawnBirds' | 'leafDrops' | 'meadow' | 'wetGarden' | 'roseStems' | 'forest' | 'jungle' | 'ocean' | 'guitarCafe' | 'rioCafe' | 'carnival' | 'atabaque' | 'iguazu' | 'brazilMorning'

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


const soundLabels: Record<Locale, Record<SoundKey, string>> = {
  ru: { rain:'Дождь', birds:'Пение птиц', wind:'Ветер', cicadas:'Цикады', fire:'Потрескивание костра', wood:'Скрип дерева', irrigation:'Капельный полив', chimes:'Колокольчики ветра', stream:'Маленький ручей', thunder:'Глухой гром в пустыне', bees:'Ленивые жужжащие пчёлы', tribal:'Этнический бубен-эмбиент', bowls:'Поющие чаши', crickets:'Вечерние сверчки', bumblebees:'Жужжание шмелей', frogs:'Лягушки у пруда', dawnBirds:'Утренний птичий гам', leafDrops:'Капли на листьях', meadow:'Луговые травы на ветру', wetGarden:'Влажная земля и сад', roseStems:'Шуршание стеблей роз', forest:'Глубокий лесной эмбиент', jungle:'Птицы джунглей', ocean:'Атлантический океан и прибой', guitarCafe:'Уличные музыканты с гитарой', rioCafe:'Уличное кафе в Рио', carnival:'Далёкий бразильский карнавал', atabaque:'Барабаны атабаке', iguazu:'Шум водопада Игуасу', brazilMorning:'Раннее бразильское утро' },
  pt: { rain:'Chuva', birds:'Canto dos pássaros', wind:'Vento', cicadas:'Cigarras', fire:'Estalos da fogueira', wood:'Madeira rangendo', irrigation:'Irrigação por gotejamento', chimes:'Sinos de vento', stream:'Pequeno riacho', thunder:'Trovão distante no deserto', bees:'Abelhas zumbindo devagar', tribal:'Tambor étnico ambiente', bowls:'Tigelas cantantes', crickets:'Grilos ao entardecer', bumblebees:'Zumbido dos mamangavas', frogs:'Rãs junto ao lago', dawnBirds:'Coro de pássaros ao amanhecer', leafDrops:'Gotas nas folhas', meadow:'Ervas do campo ao vento', wetGarden:'Terra úmida e jardim', roseStems:'Folhas e caules de rosas', forest:'Ambiente de floresta profunda', jungle:'Pássaros exóticos da selva', ocean:'Atlântico e ondas na praia', guitarCafe:'Músicos de rua com violão', rioCafe:'Café de rua no Rio', carnival:'Carnaval brasileiro ao longe', atabaque:'Ritmo de atabaque', iguazu:'Cataratas do Iguaçu', brazilMorning:'Amanhecer brasileiro' },
  en: { rain:'Rain', birds:'Birdsong', wind:'Wind', cicadas:'Cicadas', fire:'Crackling campfire', wood:'Creaking wood', irrigation:'Drip irrigation', chimes:'Wind chimes', stream:'Little babbling stream', thunder:'Distant desert thunder', bees:'Lazy buzzing bees', tribal:'Tribal hand-drum ambience', bowls:'Singing bowls', crickets:'Evening crickets', bumblebees:'Bumblebee hum', frogs:'Frogs by the pond', dawnBirds:'Morning birdsong', leafDrops:'Drops on leaves', meadow:'Meadow grasses in the wind', wetGarden:'Wet soil and garden', roseStems:'Rustling rose stems', forest:'Deep forest ambience', jungle:'Exotic jungle birds', ocean:'Atlantic surf', guitarCafe:'Street guitar musicians', rioCafe:'A quiet Rio street café', carnival:'Distant Brazilian carnival', atabaque:'Atabaque drum rhythm', iguazu:'Iguazu Falls', brazilMorning:'Early Brazilian morning' }
}
const soundKeys: SoundKey[] = ['rain','birds','wind','cicadas','fire','wood','irrigation','chimes','stream','thunder','bees','tribal','bowls','crickets','bumblebees','frogs','dawnBirds','leafDrops','meadow','wetGarden','roseStems','forest','jungle','ocean','guitarCafe','rioCafe','carnival','atabaque','iguazu','brazilMorning']
const soundIcons: Record<SoundKey, typeof CloudRain> = {
  rain:CloudRain, birds:Bird, wind:Wind, cicadas:Bug, fire:Flame, wood:TreeDeciduous, irrigation:Droplets, chimes:Music, stream:Waves, thunder:CloudLightning, bees:Bug, tribal:Drum, bowls:CircleDot, crickets:Bug, bumblebees:Bug, frogs:Droplets, dawnBirds:Bird, leafDrops:Droplets, meadow:Sprout, wetGarden:Flower2, roseStems:Flower2, forest:Trees, jungle:Bird, ocean:Waves, guitarCafe:Music, rioCafe:Coffee, carnival:Music, atabaque:Drum, iguazu:Waves, brazilMorning:Sprout
}

const copy = {
  ru: { soundEyebrow: 'ЗВУКИ ПРИРОДЫ', footerLine: 'ПАУЗА · ЗАБОТА · ПРИСУТСТВИЕ', brand: 'РОЗЫ ПУСТЫНИ', title: 'Сад мыслей', subtitle: 'Небольшое место, чтобы замедлиться.', invitation: 'Иногда достаточно просто побыть здесь.', day: 'Размышление дня', next: 'Другая мысль', sounds: 'Звуковой ландшафт', rain: 'Дождь', birds: 'Пение птиц', wind: 'Ветер', exit: 'Выйти из сада', hint: 'Звуки можно сочетать. Включайте только то, что хочется услышать.', open: 'Войти в сад мыслей', kicker: 'Место для паузы', intro: 'О терпении, заботе и времени' },
  pt: { soundEyebrow: 'SONS DA NATUREZA', footerLine: 'PAUSA · CUIDADO · PRESENÇA', brand: 'ROSAS DO DESERTO', title: 'Jardim de pensamentos', subtitle: 'Um pequeno lugar para desacelerar.', invitation: 'Às vezes, basta simplesmente estar aqui.', day: 'Reflexão do dia', next: 'Outra reflexão', sounds: 'Paisagem sonora', rain: 'Chuva', birds: 'Pássaros', wind: 'Vento', exit: 'Sair do jardim', hint: 'Você pode combinar os sons. Ative apenas o que deseja ouvir.', open: 'Entrar no jardim de pensamentos', kicker: 'Um lugar para pausar', intro: 'Sobre paciência, cuidado e tempo' },
  en: { soundEyebrow: 'SOUNDS OF NATURE', footerLine: 'PAUSE · CARE · PRESENCE', brand: 'DESERT ROSES', title: 'Garden of thoughts', subtitle: 'A small place to slow down.', invitation: 'Sometimes it is enough to simply be here.', day: 'Reflection of the day', next: 'Another reflection', sounds: 'Soundscape', rain: 'Rain', birds: 'Birdsong', wind: 'Wind', exit: 'Leave the garden', hint: 'Sounds can be combined. Turn on only what you feel like hearing.', open: 'Enter the garden of thoughts', kicker: 'A place to pause', intro: 'On patience, care, and time' }
}

type AudioContextWindow = Window & { webkitAudioContext?: typeof AudioContext }

export default function SilenceGarden({ locale = 'pt' }: { locale?: Locale }) {
  const [isOpen, setIsOpen] = useState(false)
  const [quoteIndex, setQuoteIndex] = useState(() => Math.floor(Math.random() * 50))
  const [activeSounds, setActiveSounds] = useState<SoundKey[]>([])
  const [soundOrder, setSoundOrder] = useState<SoundKey[]>(soundKeys)
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
    master.gain.value = ['birds','dawnBirds','jungle'].includes(key) ? 0.12 : ['fire','chimes','bowls','atabaque'].includes(key) ? 0.1 : 0.16
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


    const randomChirp = (low: number, high: number, duration = 0.15, delay = 0) => chirp(low + Math.random() * (high - low), duration, delay)
    const repeat = (fn: () => void, min: number, max = min) => { fn(); interval = window.setInterval(fn, min + Math.random() * (max - min)) }
    const addLowDrone = (frequency: number, volume = 0.12) => {
      const oscillator = context.createOscillator(), gain = context.createGain(), lfo = context.createOscillator(), modulation = context.createGain()
      oscillator.type = 'sine'; oscillator.frequency.value = frequency; gain.gain.value = volume
      lfo.frequency.value = 0.07 + Math.random() * 0.12; modulation.gain.value = volume * 0.65
      lfo.connect(modulation).connect(gain.gain); oscillator.connect(gain).connect(master); oscillator.start(); lfo.start()
      nodes.push(oscillator, gain, lfo, modulation)
    }
    const addPulse = (frequency: number, duration = 0.12, volume = 0.1) => {
      const oscillator = context.createOscillator(), gain = context.createGain()
      oscillator.type = 'triangle'; oscillator.frequency.value = frequency
      gain.gain.setValueAtTime(0.0001, context.currentTime); gain.gain.exponentialRampToValueAtTime(volume, context.currentTime + 0.012); gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + duration)
      oscillator.connect(gain).connect(master); oscillator.start(); oscillator.stop(context.currentTime + duration + 0.02); nodes.push(oscillator, gain)
    }
    switch (key) {
      case 'rain': addNoise(1150,'lowpass',0.22); addNoise(4200,'highpass',0.035); break
      case 'wind': case 'meadow': case 'roseStems': addNoise(key === 'wind' ? 260 : 420,'lowpass',key === 'roseStems' ? 0.12 : 0.26); addLowDrone(58,0.035); break
      case 'birds': case 'dawnBirds': case 'jungle':
        repeat(() => { const count = key === 'birds' ? 2 : 4; for (let i=0;i<count;i++) randomChirp(key==='jungle'?800:1500,key==='jungle'?3200:3400,0.13+Math.random()*0.12,i*0.12) }, key==='birds'?1700:900, key==='birds'?3200:1700)
        if (key==='jungle') addNoise(900,'lowpass',0.045); break
      case 'cicadas': addNoise(5800,'highpass',0.055); addLowDrone(4200,0.025); repeat(()=>{randomChirp(3900,6500,0.8);randomChirp(4200,7000,0.65,0.2)},650,1500); break
      case 'fire': addNoise(950,'lowpass',0.09); repeat(()=>addPulse(180+Math.random()*500,0.025+Math.random()*0.06,0.05+Math.random()*0.08),90,420); break
      case 'wood': addLowDrone(74,0.018); repeat(()=>{addPulse(90+Math.random()*80,0.18,0.04);randomChirp(130,260,0.45,0.08)},2400,6000); break
      case 'irrigation': case 'leafDrops': addNoise(1300,'lowpass',0.035); repeat(()=>{randomChirp(900,1900,0.045);randomChirp(1200,2300,0.055,0.09)},260,950); break
      case 'chimes': repeat(()=>{const f=[523.25,659.25,783.99,987.77,1174.66][Math.floor(Math.random()*5)];chirp(f,1.8);if(Math.random()>0.45)chirp(f*1.5,1.4,0.16)},850,2600); break
      case 'stream': case 'wetGarden': addNoise(key==='stream'?1600:900,'lowpass',key==='stream'?0.16:0.06);addNoise(4500,'highpass',0.025);repeat(()=>randomChirp(500,1300,0.16),450,1100);break
      case 'thunder': addNoise(150,'lowpass',0.08); repeat(()=>{addPulse(45+Math.random()*20,1.5,0.035)},5000,12000);break
      case 'bees': case 'bumblebees': addLowDrone(key==='bees'?110:82,0.045);addNoise(360,'bandpass',0.045);repeat(()=>randomChirp(75,125,0.32),300,900);break
      case 'tribal': case 'atabaque': repeat(()=>{addPulse(key==='atabaque'?92:110,0.16,0.13);if(Math.random()>0.35)addPulse(180+Math.random()*60,0.07,0.08)},key==='atabaque'?510:850,key==='atabaque'?650:1250);addNoise(1200,'bandpass',0.025);break
      case 'bowls': repeat(()=>{const f=[174.61,220,261.63,329.63][Math.floor(Math.random()*4)];chirp(f,3.2);chirp(f*2.01,2.8,0.04)},2200,4200);break
      case 'crickets': case 'frogs': repeat(()=>{if(key==='frogs'){addPulse(115+Math.random()*35,0.23,0.07);addPulse(100+Math.random()*25,0.2,0.05)}else{randomChirp(2600,4200,0.09);randomChirp(2800,4300,0.08,0.13)}},key==='frogs'?1500:350,key==='frogs'?3200:900);if(key==='frogs')addNoise(500,'lowpass',0.025);break
      case 'ocean': case 'iguazu': addNoise(key==='ocean'?550:950,'lowpass',key==='ocean'?0.16:0.25);addNoise(2200,'highpass',0.045);addLowDrone(key==='ocean'?42:68,0.045);break
      case 'guitarCafe': addNoise(420,'lowpass',0.025);repeat(()=>{const f=[196,246.94,293.66,392][Math.floor(Math.random()*4)];chirp(f,0.5);chirp(f*1.25,0.42,0.025);chirp(f*1.5,0.4,0.05)},650,1500);break
      case 'rioCafe': addNoise(700,'bandpass',0.035);repeat(()=>{randomChirp(300,650,0.11);randomChirp(500,1100,0.09,0.18)},420,1200);break
      case 'carnival': addNoise(650,'bandpass',0.035);repeat(()=>{addPulse(95+Math.random()*90,0.12,0.08);randomChirp(400,1300,0.12,0.14)},260,580);break
      case 'forest': case 'brazilMorning': addNoise(420,'lowpass',0.075);addLowDrone(key==='forest'?55:82,0.025);repeat(()=>randomChirp(1100,2600,0.16),key==='forest'?2500:700,key==='forest'?5200:1600);break
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

  const enterGarden = () => {
    const shuffled = [...soundKeys]
    for (let i = shuffled.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]] }
    setSoundOrder(shuffled); setQuoteIndex(Math.floor(Math.random() * 50)); setIsOpen(true)
  }

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
          <button type="button" className="silence-enter-button" onClick={enterGarden}>{t.open}<span aria-hidden="true">↗</span></button>
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
              <div className="silence-sounds-heading"><div><p className="eyebrow">{t.soundEyebrow}</p><h3 id="silence-sounds-title">{t.sounds}</h3></div><span className="silence-sounds-count">{activeSounds.length} / {soundKeys.length}</span></div>
              <div className="silence-sound-grid">
                {soundOrder.map((sound) => { const Icon = soundIcons[sound]; return <SoundButton key={sound} sound={sound} icon={Icon} label={soundLabels[locale][sound]} /> })}
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
