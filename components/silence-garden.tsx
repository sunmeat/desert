'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Bird, CloudRain, Leaf, RefreshCw, Wind, X, Flame, TreeDeciduous, Droplets, Waves, Music, Coffee, Drum, CircleDot, Flower2, Sprout, Bug, CloudLightning, Trees } from 'lucide-react'

type Locale = 'pt' | 'ru' | 'en'
type SoundKey = 'rain' | 'birds' | 'stream' | 'ocean' | 'chimes' | 'cicadas' | 'forest' | 'evening' | 'thunder' | 'meadow' | 'morning' | 'springForest' | 'springGarden' | 'rainforest' | 'forestDay' | 'garden' | 'summerGarden' | 'birdRelax' | 'springBirds' | 'windyForest' | 'rainBirds' | 'morningBirds' | 'gardenBirds' | 'cityPark' | 'blossomWind'

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
  ru: { rain:'Тихий дождь', birds:'Пение птиц в лесу', stream:'Лесной ручей', ocean:'Океанские волны', chimes:'Колокольчики ветра', cicadas:'Цикады', forest:'Ночной лес и ручей', evening:'Вечерние сверчки и птицы', thunder:'Дождь и далёкий гром', meadow:'Вечерний луг', morning:'Утро у лесного ручья', springForest:'Весенний лес', springGarden:'Весенний сад и пчёлы', rainforest:'Тропический лес Бразилии', forestDay:'Дневной лес', garden:'Летний сад', summerGarden:'Птицы в летнем саду', birdRelax:'Птичий хор в саду', springBirds:'Птицы ранней весной', windyForest:'Ветер в кронах и птицы', rainBirds:'Дождь и птицы в лесу', morningBirds:'Рассвет у ручья', gardenBirds:'Утренние птицы в саду', cityPark:'Зелёный городской парк', blossomWind:'Ветер среди цветущих деревьев' },
  pt: { rain:'Chuva tranquila', birds:'Pássaros na floresta', stream:'Riacho na floresta', ocean:'Ondas do oceano', chimes:'Sinos de vento', cicadas:'Cigarras', forest:'Floresta noturna e riacho', evening:'Grilos e pássaros ao entardecer', thunder:'Chuva e trovão distante', meadow:'Prado ao entardecer', morning:'Manhã junto ao riacho', springForest:'Floresta na primavera', springGarden:'Jardim florido e abelhas', rainforest:'Floresta tropical brasileira', forestDay:'Floresta durante o dia', garden:'Jardim de verão', summerGarden:'Pássaros no jardim de verão', birdRelax:'Coro de pássaros no jardim', springBirds:'Pássaros no início da primavera', windyForest:'Vento nas árvores e pássaros', rainBirds:'Chuva e pássaros na floresta', morningBirds:'Amanhecer junto ao riacho', gardenBirds:'Pássaros no jardim pela manhã', cityPark:'Parque urbano verde', blossomWind:'Brisa entre árvores floridas' },
  en: { rain:'Gentle rain', birds:'Forest birdsong', stream:'Forest stream', ocean:'Ocean waves', chimes:'Wind chimes', cicadas:'Cicadas', forest:'Night forest and stream', evening:'Evening crickets and birds', thunder:'Rain and distant thunder', meadow:'Evening meadow', morning:'Morning forest stream', springForest:'Spring forest', springGarden:'Spring garden and bees', rainforest:'Brazilian rainforest', forestDay:'Forest in daytime', garden:'Summer garden', summerGarden:'Birds in a summer garden', birdRelax:'Garden birdsong chorus', springBirds:'Early spring birds', windyForest:'Wind in the trees and birds', rainBirds:'Rain and birds in the forest', morningBirds:'Dawn by the stream', gardenBirds:'Morning garden birds', cityPark:'Green city park', blossomWind:'Breeze through blooming trees' }
}
const soundKeys: SoundKey[] = ['rain','birds','stream','ocean','chimes','cicadas','forest','evening','thunder','meadow','morning','springForest','springGarden','rainforest','forestDay','garden','summerGarden','birdRelax','springBirds','windyForest','rainBirds','morningBirds','gardenBirds','cityPark','blossomWind']
const soundIcons: Record<SoundKey, typeof CloudRain> = {
  rain:CloudRain, birds:Bird, stream:Waves, ocean:Waves, chimes:Music, cicadas:Bug, forest:Trees, evening:Bug, thunder:CloudLightning, meadow:Sprout, morning:Bird, springForest:Trees, springGarden:Flower2, rainforest:Trees, forestDay:Trees, garden:Flower2, summerGarden:Bird, birdRelax:Bird, springBirds:Bird, windyForest:Wind, rainBirds:CloudRain, morningBirds:Bird, gardenBirds:Flower2, cityPark:Trees, blossomWind:Flower2
}
const soundTracks: Record<SoundKey, { src: string; credit: string; creditUrl: string }> = {
  rain: { src:'https://orangefreesounds.com/wp-content/uploads/2026/05/Loopable-heavy-rain-ambience-sound-effect.mp3', credit:'Loopable Heavy Rain Ambience · Orange Free Sounds · CC BY-NC 4.0', creditUrl:'https://orangefreesounds.com/loopable-heavy-rain-ambience-sound-effect/' },
  birds: { src:'https://orangefreesounds.com/wp-content/uploads/2026/02/Relaxing-forest-sounds-with-birds.mp3', credit:'Relaxing Forest Sounds With Birds · Orange Free Sounds · CC BY-NC 4.0', creditUrl:'https://orangefreesounds.com/relaxing-forest-sounds-with-birds/' },
  stream: { src:'https://orangefreesounds.com/wp-content/uploads/2025/12/Forest-river-flow-sound-effect.mp3', credit:'Forest River Flow · Orange Free Sounds · CC BY-NC 4.0', creditUrl:'https://orangefreesounds.com/forest-river-flow-sound-effect/' },
  ocean: { src:'https://www.orangefreesounds.com/wp-content/uploads/2016/01/Waves-mp3.mp3', credit:'Waves MP3 · Orange Free Sounds · CC BY 4.0', creditUrl:'https://orangefreesounds.com/waves-mp3/' },
  chimes: { src:'https://www.orangefreesounds.com/wp-content/uploads/2016/08/Wind-chimes-sound.mp3', credit:'Wind Chimes · Orange Free Sounds · CC BY 4.0', creditUrl:'https://orangefreesounds.com/wind-chimes-sound/' },
  cicadas: { src:'https://www.orangefreesounds.com/wp-content/uploads/2016/07/Cicadas-noise.mp3', credit:'Cicadas Noise · Orange Free Sounds · CC BY 4.0', creditUrl:'https://orangefreesounds.com/cicadas-noise/' },
  forest: { src:'https://orangefreesounds.com/wp-content/uploads/2026/01/Relaxing-summer-forest-ambience.mp3', credit:'Relaxing Summer Forest Ambience · Orange Free Sounds · CC BY-NC 4.0', creditUrl:'https://orangefreesounds.com/relaxing-summer-forest-ambience/' },
  evening: { src:'https://orangefreesounds.com/wp-content/uploads/2026/06/Evening-nature-ambience-with-birds-singing-and-crickets-sound-effect.mp3', credit:'Evening Nature Ambience · Orange Free Sounds · CC BY-NC 4.0', creditUrl:'https://orangefreesounds.com/evening-nature-ambience-with-birds-singing-and-crickets-sound-effect/' },
  thunder: { src:'https://orangefreesounds.com/wp-content/uploads/2022/08/Rain-and-thunder-with-ocean-waves-sound-effect.mp3', credit:'Rain and Thunder with Ocean Waves · Orange Free Sounds · CC BY-NC 4.0', creditUrl:'https://orangefreesounds.com/rain-and-thunder-with-ocean-waves-sound-effect/' },
  meadow: { src:'https://orangefreesounds.com/wp-content/uploads/2026/05/Relaxing-evening-meadow-ambience-sound-effect.mp3', credit:'Relaxing Evening Meadow Ambience · Orange Free Sounds · CC BY-NC 4.0', creditUrl:'https://orangefreesounds.com/relaxing-evening-meadow-ambience-sound-effect/' },
  morning: { src:'https://orangefreesounds.com/wp-content/uploads/2026/06/Bird-singing-and-forest-stream-sound-effect.mp3', credit:'Bird Singing and Forest Stream · Orange Free Sounds · CC BY-NC 4.0', creditUrl:'https://orangefreesounds.com/bird-singing-and-forest-stream-sound-effect/' },
  springForest: { src:'https://orangefreesounds.com/wp-content/uploads/2020/03/Spring-forest-ambience.mp3', credit:'Spring Forest Ambience · Orange Free Sounds · CC BY-NC 4.0', creditUrl:'https://orangefreesounds.com/spring-forest-ambience/' },
  springGarden: { src:'https://orangefreesounds.com/wp-content/uploads/2026/05/Spring-garden-ambience-with-bees-birds-and-insects-sound-effect.mp3', credit:'Spring Garden Ambience With Bees, Birds And Insects · Orange Free Sounds · CC BY-NC 4.0', creditUrl:'https://orangefreesounds.com/spring-garden-ambience-with-bees-birds-and-insects-sound-effect/' },
  rainforest: { src:'https://orangefreesounds.com/wp-content/uploads/2016/04/Rainforest-sounds.mp3', credit:'Rainforest Sounds · Orange Free Sounds · CC BY 4.0', creditUrl:'https://orangefreesounds.com/rainforest-sounds/' },
  forestDay: { src:'https://orangefreesounds.com/wp-content/uploads/2019/04/Forest-daytime-ambience.mp3', credit:'Forest Daytime Ambience · Orange Free Sounds · CC BY-NC 4.0', creditUrl:'https://orangefreesounds.com/forest-daytime-ambience/' },
  garden: { src:'https://orangefreesounds.com/wp-content/uploads/2022/06/Garden-ambience-sound-effect.mp3', credit:'Garden Ambience · Orange Free Sounds · CC BY-NC 4.0', creditUrl:'https://orangefreesounds.com/garden-ambience-sound-effect/' },
  summerGarden: { src:'https://orangefreesounds.com/wp-content/uploads/2021/08/Bird-sounds-in-the-summer-garden.mp3', credit:'Bird Sounds in the Summer Garden · Orange Free Sounds · CC BY-NC 4.0', creditUrl:'https://orangefreesounds.com/bird-sounds-in-the-summer-garden/' },
  birdRelax: { src:'https://orangefreesounds.com/wp-content/uploads/2017/01/Birds-singing-relaxation.mp3', credit:'Birds Singing Relaxation · Orange Free Sounds · CC BY 4.0', creditUrl:'https://orangefreesounds.com/birds-singing-relaxation/' },
  springBirds: { src:'https://orangefreesounds.com/wp-content/uploads/2023/03/Spring-birds-chirping-sound-effect.mp3', credit:'Spring Birds Chirping · Orange Free Sounds · CC BY-NC 4.0', creditUrl:'https://orangefreesounds.com/spring-birds-chirping-sound-effect/' },
  windyForest: { src:'https://orangefreesounds.com/wp-content/uploads/2026/05/Birds-singing-in-windy-forest-sound-effect.mp3', credit:'Birds Singing in Windy Forest · Orange Free Sounds · CC BY-NC 4.0', creditUrl:'https://orangefreesounds.com/birds-singing-in-windy-forest-sound-effect/' },
  rainBirds: { src:'https://orangefreesounds.com/wp-content/uploads/2021/03/Nature-sounds-birds-and-rain.mp3', credit:'Nature Sounds Birds and Rain · Orange Free Sounds · CC BY-NC 4.0', creditUrl:'https://orangefreesounds.com/nature-sounds-birds-and-rain/' },
  morningBirds: { src:'https://orangefreesounds.com/wp-content/uploads/2024/04/Bird-song-sound-effect.mp3', credit:'Bird Song Sound Effect · Orange Free Sounds · CC BY-NC 4.0', creditUrl:'https://orangefreesounds.com/bird-song-sound-effect/' },
  gardenBirds: { src:'https://orangefreesounds.com/wp-content/uploads/2015/05/Birds-singing-in-my-garden.mp3', credit:'Birds Singing in My Garden · Orange Free Sounds · CC BY 4.0', creditUrl:'https://orangefreesounds.com/birds-singing-in-my-garden/' },
  cityPark: { src:'https://orangefreesounds.com/wp-content/uploads/2022/10/City-park-ambience.mp3', credit:'City Park Ambience · Orange Free Sounds · CC BY-NC 4.0', creditUrl:'https://orangefreesounds.com/city-park-ambience/' },
  blossomWind: { src:'https://orangefreesounds.com/wp-content/uploads/2021/10/Relaxing-garden-sounds.mp3', credit:'Relaxing Garden Sounds · Orange Free Sounds · CC BY-NC 4.0', creditUrl:'https://orangefreesounds.com/relaxing-garden-sounds/' }
}

const copy = {
  ru: { soundEyebrow: 'ЗВУКИ ПРИРОДЫ', footerLine: 'ПАУЗА · ЗАБОТА · ПРИСУТСТВИЕ', brand: 'РОЗЫ ПУСТЫНИ', title: 'Сад мыслей', subtitle: 'Небольшое место, чтобы замедлиться.', invitation: 'Иногда достаточно просто побыть здесь.', day: 'Размышление дня', next: 'Другая мысль', sounds: 'Звуковой ландшафт', rain: 'Дождь', birds: 'Пение птиц', wind: 'Ветер', exit: 'Выйти из сада', hint: 'Настоящие записи природы. Звуки можно сочетать, каждый повторяется, пока включён.', open: 'Войти в сад мыслей', kicker: 'Место для паузы', intro: 'О терпении, заботе и времени' },
  pt: { soundEyebrow: 'SONS DA NATUREZA', footerLine: 'PAUSA · CUIDADO · PRESENÇA', brand: 'ROSAS DO DESERTO', title: 'Jardim de pensamentos', subtitle: 'Um pequeno lugar para desacelerar.', invitation: 'Às vezes, basta simplesmente estar aqui.', day: 'Reflexão do dia', next: 'Outra reflexão', sounds: 'Paisagem sonora', rain: 'Chuva', birds: 'Pássaros', wind: 'Vento', exit: 'Sair do jardim', hint: 'Você pode combinar os sons. Ative apenas o que deseja ouvir.', open: 'Entrar no jardim de pensamentos', kicker: 'Um lugar para pausar', intro: 'Sobre paciência, cuidado e tempo' },
  en: { soundEyebrow: 'SOUNDS OF NATURE', footerLine: 'PAUSE · CARE · PRESENCE', brand: 'DESERT ROSES', title: 'Garden of thoughts', subtitle: 'A small place to slow down.', invitation: 'Sometimes it is enough to simply be here.', day: 'Reflection of the day', next: 'Another reflection', sounds: 'Soundscape', rain: 'Rain', birds: 'Birdsong', wind: 'Wind', exit: 'Leave the garden', hint: 'Real nature recordings. Combine tracks and let each one loop while active.', open: 'Enter the garden of thoughts', kicker: 'A place to pause', intro: 'On patience, care, and time' }
}

export default function SilenceGarden({ locale = 'pt' }: { locale?: Locale }) {
  const [isOpen, setIsOpen] = useState(false)
  const [quoteIndex, setQuoteIndex] = useState(() => Math.floor(Math.random() * 50))
  const [activeSounds, setActiveSounds] = useState<SoundKey[]>([])
  const [soundOrder, setSoundOrder] = useState<SoundKey[]>(soundKeys)
  const audioRef = useRef<Partial<Record<SoundKey, HTMLAudioElement>>>({})
  const t = copy[locale]

  const stopSound = useCallback((key: SoundKey) => {
    const audio = audioRef.current[key]
    if (audio) {
      audio.pause()
      audio.currentTime = 0
      delete audioRef.current[key]
    }
    setActiveSounds((current) => current.filter((sound) => sound !== key))
  }, [])

  const stopAllSounds = useCallback(() => {
    Object.values(audioRef.current).forEach((audio) => {
      if (audio) {
        audio.pause()
        audio.currentTime = 0
      }
    })
    audioRef.current = {}
    setActiveSounds([])
  }, [])

  const startSound = useCallback(async (key: SoundKey) => {
    const audio = new Audio(soundTracks[key].src)
    audio.loop = true
    audio.preload = 'none'
    audio.volume = 0.42
    audioRef.current[key] = audio
    try {
      await audio.play()
      setActiveSounds((current) => current.includes(key) ? current : [...current, key])
    } catch {
      delete audioRef.current[key]
    }
  }, [])

  const toggleSound = useCallback((key: SoundKey) => {
    if (audioRef.current[key]) stopSound(key)
    else void startSound(key)
  }, [startSound, stopSound])

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
    Object.values(audioRef.current).forEach((audio) => audio?.pause())
    audioRef.current = {}
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
            <a className="silence-modal-brand" href="#inicio" onClick={(event) => event.preventDefault()}><span className="brand-mark silence-modal-brand-mark" aria-hidden="true">🌺</span><span>{t.brand}</span></a>
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
                {soundOrder.map((sound) => { const Icon = soundIcons[sound]; const active = activeSounds.includes(sound); return <button key={sound} className={'silence-sound-button ' + (active ? 'is-active' : '')} type="button" aria-pressed={active} onMouseDown={(event) => event.preventDefault()} onClick={() => toggleSound(sound)}><span className="silence-sound-icon"><Icon /></span><span>{soundLabels[locale][sound]}</span><span className="silence-sound-state">{active ? '●' : '+'}</span></button> })}
              </div>
              <p className="silence-sound-hint">{t.hint}</p>
            </section>
            <p className="silence-footer-whisper">— {t.invitation}</p>
          </div>
          <div className="silence-modal-bottom"><span>✳</span><span>{t.footerLine}</span><span>✳</span></div>
          <nav className="silence-audio-credits" aria-label="Audio credits">
            {Object.entries(soundTracks).map(([key, track]) => <a key={key} href={track.creditUrl} target="_blank" rel="noreferrer">{track.credit}</a>)}
          </nav>
        </div>
      </div>}
    </>
  )
}
