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
    quotes: ['Забота о растении начинается с внимания. С человеком всё так же: прежде чем помочь ему расцвести, нужно научиться его замечать.','Цветок нельзя заставить раскрыться раньше времени. Иногда человеку нужны не советы, а терпение и немного света.','Поливать корни недостаточно, если забыть о свете. Любовь к людям тоже живёт в простом: быть рядом, слушать и поддерживать.','Каждое растение тянется к свету по-своему. Не стоит требовать от людей расти одинаково.','Мы ухаживаем за садом не ради благодарности цветов. Пусть и доброта к людям будет тихой, искренней и без условий.','Даже самый крепкий росток когда-то был маленьким семенем. Не обесценивайте первые шаги ни свои, ни чужие.','Сад учит не торопить жизнь: у каждого цветения есть свой час, а у каждого человека свой путь.','Иногда лучший уход заключается не в том, чтобы менять, а в том, чтобы создать условия для роста.','Корни растут в темноте, прежде чем появятся листья. Невидимый труд тоже заслуживает уважения.','Солнце не выбирает любимый цветок. Пусть и наша доброта не зависит от того, чем человек может быть полезен.','Не всякая пауза означает остановку. Растение отдыхает, чтобы однажды снова потянуться к свету.','Нежность не делает слабее. Именно бережный уход помогает хрупкому стать сильным.','У каждого цветка свой оттенок и время раскрытия. Мир был бы беднее, если бы все цвели одинаково.','Прежде чем судить о чужом росте, вспомните: вы не знаете, через какую засуху прошли его корни.','Доброта похожа на воду: ей не нужно шуметь, чтобы поддерживать жизнь.','Не требуйте цветов каждый день. Иногда достаточно того, что растение продолжает держаться за жизнь.','Терпение не означает бездействие. Это ежедневная забота без требования немедленного результата.','Листья тянутся к свету, а люди расцветают там, где их принимают без необходимости притворяться.','Можно дать растению землю и воду, но нельзя раскрыть его цветок за него. Поддерживайте людей, не проживая их жизнь вместо них.','Пусть после встречи с вами людям становится немного легче дышать, как растениям после дождя.'],
    quoteButton: 'Ещё цитата',
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
    gallery: ["Из личной коллекции","Из личной коллекции","Из личной коллекции","Из личной коллекции","Розовый цветок в солнечном свете","Белые лепестки с малиновым краем","Цветение на фоне зелени","Нежные оттенки адениума","Цветок с выразительной формой","Ботаническая деталь","Цветение в мягком свете","Контраст лепестков и листвы","Экзотическая красота","Розовый адениум крупным планом","Цветок в естественной среде","Свет и тень на лепестках","Живые оттенки сада","Цветение среди зелёных листьев","Форма, созданная природой","Тонкие линии лепестков","Солнечный акцент в саду","Пышное цветение","Цветок в естественном свете"],
    galleryAlt: ["Фотография розы пустыни из личной коллекции, снимок 1","Фотография розы пустыни из личной коллекции, снимок 2","Фотография розы пустыни из личной коллекции, снимок 3","Фотография розы пустыни из личной коллекции, снимок 4","Стоковая фотография адениума: розовый цветок в солнечном свете","Стоковая фотография адениума: белые лепестки с малиновым краем","Стоковая фотография адениума: цветение на фоне зелени","Стоковая фотография адениума: нежные оттенки адениума","Стоковая фотография адениума: цветок с выразительной формой","Стоковая фотография адениума: ботаническая деталь","Стоковая фотография адениума: цветение в мягком свете","Стоковая фотография адениума: контраст лепестков и листвы","Стоковая фотография адениума: экзотическая красота","Стоковая фотография адениума: розовый адениум крупным планом","Стоковая фотография адениума: цветок в естественной среде","Стоковая фотография адениума: свет и тень на лепестках","Стоковая фотография адениума: живые оттенки сада","Стоковая фотография адениума: цветение среди зелёных листьев","Стоковая фотография адениума: форма, созданная природой","Стоковая фотография адениума: тонкие линии лепестков","Стоковая фотография адениума: солнечный акцент в саду","Стоковая фотография адениума: пышное цветение","Стоковая фотография адениума: цветок в естественном свете"],
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
    quotes: ['Cuidar de uma planta começa com atenção. Com as pessoas é igual: antes de ajudá-las a florescer, é preciso aprender a enxergá-las.','Não se pode apressar uma flor. Às vezes, as pessoas também não precisam de conselhos, mas de paciência e um pouco de luz.','Não basta regar as raízes se esquecemos a luz. O amor pelas pessoas também vive nas coisas simples: estar presente, ouvir e apoiar.','Cada planta busca a luz à sua maneira. Não devemos exigir que todas as pessoas cresçam do mesmo jeito.','Cuidamos do jardim sem esperar gratidão das flores. Que a bondade com as pessoas seja assim: silenciosa, sincera e sem condições.','Até o broto mais forte já foi uma pequena semente. Não diminua os primeiros passos, nem os seus nem os de outra pessoa.','O jardim ensina a não apressar a vida: cada flor tem sua estação e cada pessoa tem seu caminho.','Às vezes, cuidar não é mudar algo, mas criar as condições para que cresça.','As raízes crescem no escuro antes de surgirem as folhas. O esforço invisível também merece respeito.','O sol não escolhe uma flor favorita. Que nossa bondade também não dependa da utilidade de alguém.','Nem toda pausa é uma parada. A planta descansa para um dia voltar a buscar a luz.','A delicadeza não enfraquece. É o cuidado que ajuda o frágil a se tornar forte.','Cada flor tem sua cor e seu tempo de abrir. O mundo seria mais pobre se todas florescessem iguais.','Antes de julgar o crescimento de alguém, lembre-se: você não conhece a seca que suas raízes enfrentaram.','A bondade é como a água: não precisa fazer barulho para sustentar a vida.','Não exija flores todos os dias. Às vezes, basta que a planta continue resistindo.','Paciência não é ficar parado. É cuidar todos os dias sem exigir resultados imediatos.','As folhas procuram a luz, e as pessoas florescem onde são aceitas sem precisar fingir.','Podemos oferecer terra e água, mas não abrir a flor por ela. Apoie as pessoas sem viver a vida em seu lugar.','Que as pessoas respirem um pouco mais leves depois de encontrar você, como plantas depois da chuva.'],
    quoteButton: 'Mais uma reflexão',
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
    gallery: ["Da coleção pessoal","Da coleção pessoal","Da coleção pessoal","Da coleção pessoal","Flor rosa sob a luz do sol","Pétalas brancas com bordas pink","Flores contra o verde do jardim","Tons delicados de adenium","Uma flor de forma marcante","Detalhe botânico","Flores sob luz suave","Contraste entre pétalas e folhas","Beleza exótica","Adenium rosa em destaque","Flor em seu ambiente natural","Luz e sombra nas pétalas","Cores vivas do jardim","Flores entre folhas verdes","Uma forma criada pela natureza","Linhas delicadas das pétalas","Um toque de sol no jardim","Floração exuberante","Flor sob luz natural"],
    galleryAlt: ["Foto 1 de rosa do deserto da coleção pessoal","Foto 2 de rosa do deserto da coleção pessoal","Foto 3 de rosa do deserto da coleção pessoal","Foto 4 de rosa do deserto da coleção pessoal","Foto de stock de adenium: flor rosa sob a luz do sol","Foto de stock de adenium: pétalas brancas com bordas pink","Foto de stock de adenium: flores contra o verde do jardim","Foto de stock de adenium: tons delicados de adenium","Foto de stock de adenium: uma flor de forma marcante","Foto de stock de adenium: detalhe botânico","Foto de stock de adenium: flores sob luz suave","Foto de stock de adenium: contraste entre pétalas e folhas","Foto de stock de adenium: beleza exótica","Foto de stock de adenium: adenium rosa em destaque","Foto de stock de adenium: flor em seu ambiente natural","Foto de stock de adenium: luz e sombra nas pétalas","Foto de stock de adenium: cores vivas do jardim","Foto de stock de adenium: flores entre folhas verdes","Foto de stock de adenium: uma forma criada pela natureza","Foto de stock de adenium: linhas delicadas das pétalas","Foto de stock de adenium: um toque de sol no jardim","Foto de stock de adenium: floração exuberante","Foto de stock de adenium: flor sob luz natural"],
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
    quotes: ['Caring for a plant begins with attention. With people, it is the same: before helping them bloom, we must learn to truly see them.','You cannot hurry a flower into opening. Sometimes people need no advice, only patience and a little light.','Watering the roots is not enough if we forget the light. Love for people also lives in simple things: showing up, listening, and supporting.','Every plant reaches for the light in its own way. We should never expect every person to grow alike.','We tend a garden without expecting gratitude from its flowers. May our kindness to people be just as quiet, sincere, and unconditional.','Even the strongest sprout began as a tiny seed. Never dismiss the first steps, yours or someone else’s.','A garden teaches us not to rush life: every bloom has its season, and every person has a path.','Sometimes care means not changing something, but creating the conditions in which it can grow.','Roots grow in darkness before leaves appear. Unseen effort deserves respect, too.','The sun does not choose a favorite flower. Let our kindness never depend on what someone can offer us.','Not every pause is a standstill. A plant rests so it can reach for the light again.','Gentleness is not weakness. Thoughtful care helps fragile things grow strong.','Every flower has its own color and time to open. The world would be poorer if they all bloomed alike.','Before judging someone’s growth, remember: you may not know the drought their roots survived.','Kindness is like water: it does not need to make noise to sustain life.','Do not demand flowers every day. Sometimes it is enough that a plant keeps holding on.','Patience is not doing nothing. It is daily care without demanding an immediate result.','Leaves turn toward the light, and people bloom where they are accepted without pretending.','You can offer soil and water, but you cannot open a flower for it. Support people without living their lives for them.','May people breathe a little easier after meeting you, like plants after the rain.'],
    quoteButton: 'Another quote',
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
    gallery: ["From the personal collection","From the personal collection","From the personal collection","From the personal collection","Pink bloom in sunlight","White petals with pink edges","Flowers against garden greenery","Delicate adenium shades","A flower with a striking shape","Botanical detail","Blooms in soft light","Petals contrasted with foliage","Exotic beauty","Pink adenium close-up","A flower in its natural setting","Light and shadow on petals","Garden colors in bloom","Flowers among green leaves","A shape created by nature","Delicate lines of petals","A sunny accent in the garden","Lush flowering","A bloom in natural light"],
    galleryAlt: ["Desert rose from the personal collection, photo 1","Desert rose from the personal collection, photo 2","Desert rose from the personal collection, photo 3","Desert rose from the personal collection, photo 4","Stock photo of adenium: pink bloom in sunlight","Stock photo of adenium: white petals with pink edges","Stock photo of adenium: flowers against garden greenery","Stock photo of adenium: delicate adenium shades","Stock photo of adenium: a flower with a striking shape","Stock photo of adenium: botanical detail","Stock photo of adenium: blooms in soft light","Stock photo of adenium: petals contrasted with foliage","Stock photo of adenium: exotic beauty","Stock photo of adenium: pink adenium close-up","Stock photo of adenium: a flower in its natural setting","Stock photo of adenium: light and shadow on petals","Stock photo of adenium: garden colors in bloom","Stock photo of adenium: flowers among green leaves","Stock photo of adenium: a shape created by nature","Stock photo of adenium: delicate lines of petals","Stock photo of adenium: a sunny accent in the garden","Stock photo of adenium: lush flowering","Stock photo of adenium: a bloom in natural light"],
    portraitAlt: 'Desert rose collection',
    portraitCaption: <>A thoughtful eye<br />for everything that grows</>,
    lightboxLabel: 'Photo gallery',
    close: 'Close gallery',
    previous: 'Previous image',
    next: 'Next image',
    menu: 'Main navigation',
  },
}

const heroImage = '/images/adenium-hero.png'

const gallery = [
  '/images/photo_2026-10-02_00-09-56%20(2).jpg',
  '/images/photo_2026-10-02_00-09-56.jpg',
  '/images/photo_2026-10-02_00-09-57%20(2).jpg',
  '/images/photo_2026-10-02_00-09-57.jpg',
  'https://images.pexels.com/photos/36972747/pexels-photo-36972747.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/15507957/pexels-photo-15507957.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/36602431/pexels-photo-36602431.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/36602429/pexels-photo-36602429.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/31230149/pexels-photo-31230149.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/37037717/pexels-photo-37037717.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/31423183/pexels-photo-31423183.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/29357901/pexels-photo-29357901.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/35256058/pexels-photo-35256058.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/21283460/pexels-photo-21283460.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/29357905/pexels-photo-29357905.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/33971677/pexels-photo-33971677.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/26851060/pexels-photo-26851060.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/16251764/pexels-photo-16251764.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/32054697/pexels-photo-32054697.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/17800760/pexels-photo-17800760.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/19264236/pexels-photo-19264236.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/36590794/pexels-photo-36590794.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/34524697/pexels-photo-34524697.jpeg?auto=compress&cs=tinysrgb&w=1400',
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
  const [quoteIndex, setQuoteIndex] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const previousTrackRef = useRef<number>(-1)
  const t = translations[locale]

  const pageTitles: Record<Locale, string> = {
    pt: 'Rosas do Deserto | Coleção Botânica',
    ru: 'Розы пустыни | Ботаническая коллекция',
    en: 'Desert Roses | Botanical Collection',
  }

  useEffect(() => {
    setQuoteIndex(Math.floor(Math.random() * translations[locale].quotes.length))
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
        <Image className="hero-image" src={heroImage} alt={t.altHero} fill priority sizes="100vw" />
        <div className="hero-shade" />

        <div className="hero-content">
          <p className="eyebrow light">{t.heroEyebrow}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-subtitle">{t.heroSubtitle}</p>
          <div className="hero-actions"><a className="button button-light" href="#colecao">{t.collectionButton} <ArrowDown /></a></div>
        </div>
        <div className="hero-bottom"><span>{t.heroFooter}</span></div>
        <audio ref={audioRef} onEnded={() => { void playRandomTrack() }} onPause={() => setIsPlaying(false)} onPlay={() => setIsPlaying(true)} preload="none" />
      </section>

      <section className="intro section-pad"><div className="section-kicker"><span>01</span><span>{t.introKicker}</span></div><div className="intro-grid"><h2>{t.introTitle}</h2><div className="intro-copy"><p className="lead">{t.introLead}</p><p>{t.introText}</p><a className="text-link dark" href="#natanael">{t.introLink} <span>↗</span></a></div></div></section>

      <section className="collection section-pad" id="colecao"><div className="section-kicker"><span>02</span><span>{t.collectionKicker}</span></div><div className="collection-heading"><h2>{t.collectionTitle}</h2><p>{t.collectionText}</p></div><div className="editorial-gallery" id="galeria">{gallery.map((src, index) => <button key={src} className={`gallery-tile tile-${index + 1}`} onClick={() => setLightboxIndex(index)}><Image src={src} alt={t.galleryAlt[index]} fill sizes="(max-width: 700px) 100vw, 50vw" /><span>{t.gallery[index]}</span></button>)}</div><div className="gallery-note">{t.galleryHint} <span>↗</span></div></section>

      <section className="story dark-section"><div className="story-image"><Image src={gallery[2]} alt={t.galleryAlt[2]} fill sizes="50vw" /></div><div className="story-copy"><div className="section-kicker light"><span>03</span><span>{t.storyKicker}</span></div><h2>{t.storyTitle}</h2><p>{t.storyText1}</p><p>{t.storyText2}</p><span className="story-sign">— {t.storySign}</span></div></section>

      <section className="cultivo section-pad" id="natanael"><div className="section-kicker"><span>04</span><span>{t.aboutKicker}</span></div><div className="cultivo-grid"><div className="portrait"><Image src={gallery[3]} alt={t.portraitAlt} fill sizes="(max-width: 700px) 100vw, 40vw" /><span>{t.portraitCaption}</span></div><div className="cultivo-copy"><p className="eyebrow">{t.aboutEyebrow}</p><h2>{t.aboutTitle}</h2><p className="lead">{t.aboutLead}</p><p>{t.aboutText}</p><div className="quote-card"><blockquote className="faith">{t.quotes[quoteIndex]}</blockquote><button className="faith-more" type="button" onClick={() => setQuoteIndex((quoteIndex + 1) % t.quotes.length)}><span className="quote-button-icon">↻</span>{t.quoteButton}</button></div><a className="text-link dark" href={content.instagramUrl} target="_blank" rel="noreferrer"><Camera /> {content.instagram} <span>↗</span></a></div></div></section>

      <section className="sun-section"><div><span className="sun-symbol">✳</span><h2>{t.sunTitle}</h2><p>{t.sunText}</p></div></section>

      <section className="future section-pad"><div className="future-inner"><p className="eyebrow">{t.futureEyebrow}</p><h2>{t.futureTitle}</h2><p>{t.futureText}</p><a className="button button-dark" href="#contato">{t.contactButton} <span>↗</span></a></div></section>

      <footer className="footer section-pad" id="contato"><div className="footer-top"><div><p className="eyebrow">{t.footerEyebrow}</p><h2>{t.footerTitle}</h2></div><p className="footer-intro">{t.footerText}</p></div><div className="contact-links"><a href={content.instagramUrl} target="_blank" rel="noreferrer"><Camera /><span>Instagram<small>{content.instagram}</small></span></a><a href={content.whatsappUrl} target="_blank" rel="noreferrer"><span className="contact-icon">◌</span><span>WhatsApp<small>{content.whatsapp}</small></span></a></div><div className="footer-bottom"><span>{locale === 'pt' ? 'Rosas do deserto · Alagoas, Brasil' : locale === 'en' ? 'Desert roses · Alagoas, Brazil' : 'Розы пустыни · Алагоас, Бразилия'}</span><span>{t.footerSign} <b>✳</b></span></div></footer>

      {lightboxIndex !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={t.lightboxLabel} onClick={() => setLightboxIndex(null)}><button className="lightbox-close" onClick={() => setLightboxIndex(null)} aria-label={t.close}><X /></button><button className="lightbox-arrow left" onClick={(event) => { event.stopPropagation(); moveLightbox(-1) }} aria-label={t.previous}><ArrowLeft /></button><div className="lightbox-image" onClick={(event) => event.stopPropagation()}><Image src={gallery[lightboxIndex]} alt={t.galleryAlt[lightboxIndex]} fill sizes="90vw" /><p>{t.gallery[lightboxIndex]}</p></div><button className="lightbox-arrow right" onClick={(event) => { event.stopPropagation(); moveLightbox(1) }} aria-label={t.next}><ArrowRight /></button></div>}
    </main>
  )
}
