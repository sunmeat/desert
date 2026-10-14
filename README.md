# 🌹 Rosas do Deserto

### Uma coleção botânica digital sobre formas, cores e o tempo de florescer

[![Site](https://img.shields.io/badge/site-natadenium.vercel.app-20251f?style=for-the-badge&logo=vercel&logoColor=white)](https://natadenium.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-111111?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232a?style=for-the-badge&logo=react&logoColor=61dafb)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel Analytics](https://img.shields.io/badge/Analytics-Vercel-111111?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/analytics)

**Rosas do Deserto** é um site botânico feito sob medida para apresentar uma coleção particular de adeniums, conhecidos como rosas-do-deserto. O projeto combina fotografia, narrativa editorial e experiências interativas para transformar a visita em algo mais contemplativo do que uma galeria convencional.

A identidade visual usa fundos profundos, tons de rosa suave e verde-sálvia, tipografia editorial e movimento discreto. A experiência está disponível em português brasileiro, russo e inglês, com navegação adaptável a telas grandes e pequenas.

**Visite o site:** https://natadenium.vercel.app

## 🌺 O que o projeto oferece

- **Galeria principal:** fotografias da coleção com visualização ampliada.
- **Atlas da floração:** uma coleção visual independente com 20 referências de flores, filtros por cor, formato das pétalas e número de camadas.
- **Comparação de flores:** escolha até duas flores para observá-las lado a lado em uma área de comparação ampla.
- **Calendário de cuidados:** orientações sazonais sobre luz, rega, adubação, transplante e temperatura.
- **Animação de floração:** uma pequena narrativa SVG que percorre três etapas, do botão à flor aberta, com opção de repetir a animação.
- **Jardim de pensamentos:** uma experiência independente em [/zen_garden](https://natadenium.vercel.app/zen_garden), com 50 reflexões, botão para sortear outra mensagem e paisagens sonoras da natureza.
- **Áudio ambiente:** diferentes sons podem ser combinados; cada faixa ativa fica em repetição até ser desligada. Ao entrar no jardim independente, a música da página principal é pausada e pode ser retomada ao voltar.
- **Carta do jardim:** uma fotografia e uma reflexão mudam ao pedir outra carta.
- **Três idiomas:** português brasileiro (padrão), russo e inglês.
- **Interface responsiva:** navegação fixa, controles adaptados a telas pequenas e composição que respeita o conteúdo.
- **Atenção à acessibilidade:** textos alternativos, estados de foco visíveis e suporte à preferência por movimento reduzido.
- **Vercel Web Analytics:** métricas de uso na versão publicada.

## 🧭 Experiências em destaque

### Atlas da floração

O atlas é uma experiência própria, separada da galeria principal. Ele reúne referências visuais para explorar diferenças entre flores. Os filtros podem ser combinados para restringir a seleção por **cor**, **formato das pétalas** e **camadas**. A ferramenta de comparação permite selecionar até duas flores e observá-las lado a lado em tamanho ampliado.

### Jardim de pensamentos

O jardim também pode ser aberto diretamente, sem passar pela página principal: [natadenium.vercel.app/zen_garden](https://natadenium.vercel.app/zen_garden). As 50 reflexões abordam paciência, cuidado, natureza, limites e convivência. A paisagem sonora permite combinar gravações de chuva, pássaros, vento e outros ambientes naturais. Os créditos das gravações ficam disponíveis na própria página.

### Calendário de cuidados e floração

O calendário organiza recomendações por estação e apresenta tarefas práticas de cultivo. A animação de floração é uma peça visual complementar, feita com SVG e animações CSS, que mostra o desenvolvimento do botão em três momentos.

## 🎨 Direção visual

| Elemento | Objetivo |
| --- | --- |
| Preto e verde profundo | Criar profundidade e destacar as fotografias |
| Rosa suave e rosa empoeirado | Dialogar com as flores sem excesso de saturação |
| Verde-sálvia e tons de areia | Evocar folhas, solo e luz natural |
| Tipografia editorial | Combinar personalidade e legibilidade |
| Transparências e gradientes | Dar profundidade sem sobrecarregar a interface |
| Animações discretas | Acrescentar vida sem retirar a calma da experiência |

O objetivo não é imitar um catálogo genérico, mas criar uma pequena exposição botânica digital em que imagens, textos e ferramentas de exploração fazem parte da mesma narrativa.

## 🪴 Tecnologias

- [Next.js 16](https://nextjs.org/) — aplicação web e roteamento.
- [React 19](https://react.dev/) — componentes e interface interativa.
- [TypeScript](https://www.typescriptlang.org/) — tipagem estática.
- [Tailwind CSS 4](https://tailwindcss.com/) — base de estilos.
- [Lucide React](https://lucide.dev/) — ícones.
- [Vercel Analytics](https://vercel.com/analytics) — métricas da versão publicada.
- [pnpm](https://pnpm.io/) — gerenciamento de dependências.

## 🚀 Executar localmente

### Requisitos

- Node.js compatível com a versão do Next.js do projeto.
- pnpm.

```bash
git clone https://github.com/sunmeat/desert.git
cd desert
pnpm install
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000).

Para validar a versão de produção localmente:

```bash
pnpm build
pnpm start
```

## 🗂️ Estrutura principal

```text
app/
  page.tsx                 Página inicial, idiomas, galeria e integração dos recursos
  layout.tsx               Layout raiz, metadados e Vercel Analytics
  globals.css              Estilos globais
  flower-atlas.css         Estilos da galeria, atlas e experiências botânicas
  zen_garden/
    page.tsx               Página independente do Jardim de pensamentos
components/
  flower-atlas.tsx         Filtros e comparação de flores
  care-calendar.tsx        Calendário sazonal de cuidados
  flower-waiting.tsx       Animação de floração em SVG
  garden-letter.tsx        Carta visual com fotografia e reflexão
  silence-garden.tsx       Jardim de pensamentos e áudio ambiente
  ui/
    button.tsx             Componente de botão reutilizável
lib/
  utils.ts                 Funções utilitárias
public/
  images/                  Fotografias da coleção
  audio/                   Faixas de áudio utilizadas pelo site
  icon.svg                 Ícone do site
```

## 🌍 Idiomas

O português brasileiro é o idioma padrão. A interface também está disponível em russo e inglês.

| Código | Idioma |
| --- | --- |
| PT 🇧🇷 | Português brasileiro |
| RU 🇷🇺 | Русский |
| EN 🇺🇸 | English |

Ao adicionar ou alterar uma experiência, mantenha os textos sincronizados nas três versões.

## 📷 Atualizar fotografias e conteúdo

As fotografias locais da coleção ficam em `public/images/`. Para atualizar a galeria principal:

1. Adicione as imagens à pasta apropriada.
2. Atualize a lista de imagens, legendas e textos alternativos em `app/page.tsx`.
3. Revise os textos em português brasileiro, russo e inglês.
4. Teste a galeria e a navegação em telas grandes e pequenas.

Os exemplos visuais do Atlas da floração são definidos separadamente em `components/flower-atlas.tsx`; sua lista de imagens e metadados não depende da galeria principal. Ao atualizar o atlas, preserve os valores usados pelos filtros e confira a seleção para comparação.

Os arquivos de áudio usados no site ficam em `public/audio/`. Ao trocar uma faixa, verifique se o caminho está correto e mantenha os créditos das gravações na página do Jardim de pensamentos.

## ☁️ Publicação

O projeto está hospedado na Vercel. Para configurar uma nova implantação:

1. Importe o repositório do GitHub para um projeto Next.js na Vercel.
2. Use o gerenciador de pacotes pnpm.
3. Confira o comando de build `pnpm build`.
4. Publique a branch principal e valide a versão publicada.

**Site:** https://natadenium.vercel.app  
**Jardim de pensamentos:** https://natadenium.vercel.app/zen_garden

---

Feito para celebrar a beleza das rosas-do-deserto por meio de fotografia, cuidado e experiências digitais contemplativas.

---

# 🇷🇺 Русская версия

# 🌹 Пустынные розы

### Цифровая ботаническая коллекция о форме, цвете и времени цветения

[![Сайт](https://img.shields.io/badge/сайт-natadenium.vercel.app-20251f?style=for-the-badge&logo=vercel&logoColor=white)](https://natadenium.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-111111?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232a?style=for-the-badge&logo=react&logoColor=61dafb)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**«Пустынные розы»** — сайт, созданный на заказ для представления частной коллекции адениумов. Проект объединяет ботаническую фотографию, редакционный рассказ и интерактивные инструменты, превращая обычный просмотр изображений в спокойное исследование растений.

Визуальная система построена на глубоких тёмных оттенках, мягком розовом, шалфейном зелёном, выразительной типографике и сдержанной анимации. Сайт доступен на бразильском португальском, русском и английском языках и адаптируется к большим и маленьким экранам.

**Открыть сайт:** https://natadenium.vercel.app

## 🌺 Возможности проекта

- **Основная галерея:** фотографии коллекции с увеличенным просмотром.
- **Атлас цветения:** отдельная визуальная коллекция из 20 примеров цветов с фильтрами по цвету, форме лепестков и количеству слоёв.
- **Сравнение цветов:** выбор до двух цветов для крупного просмотра рядом друг с другом.
- **Календарь ухода:** сезонные рекомендации по освещению, поливу, подкормке, пересадке и температуре.
- **Анимация цветения:** SVG-история из трёх этапов, от бутона до раскрытого цветка, с возможностью запустить её повторно.
- **Сад мыслей:** самостоятельная страница [/zen_garden](https://natadenium.vercel.app/zen_garden) с 50 размышлениями, кнопкой для смены текста и звуковыми ландшафтами природы.
- **Фоновое аудио:** разные звуки природы можно сочетать; активные дорожки повторяются до отключения. При переходе в отдельный сад музыка главной страницы ставится на паузу и может продолжиться после возвращения.
- **Письмо из сада:** при запросе нового письма меняются фотография и размышление.
- **Три языка:** бразильский португальский по умолчанию, русский и английский.
- **Адаптивный интерфейс:** закреплённая навигация и элементы управления для небольших экранов.
- **Доступность:** альтернативные описания изображений, заметный фокус клавиатуры и поддержка настройки уменьшения анимации.
- **Vercel Web Analytics:** метрики использования опубликованной версии.

## 🧭 Главные интерактивные разделы

### Атлас цветения

Атлас существует отдельно от основной галереи и помогает изучать визуальные различия между цветами. Фильтры можно комбинировать: **цвет**, **форма лепестков** и **количество слоёв**. В режиме сравнения можно выбрать максимум два цветка и рассмотреть их рядом в крупном формате.

### Сад мыслей

Сад открывается напрямую по адресу [natadenium.vercel.app/zen_garden](https://natadenium.vercel.app/zen_garden). В нём собраны 50 размышлений о терпении, заботе, природе, личных границах и отношениях между людьми. Звуковая среда позволяет сочетать записи дождя, птиц, ветра и других природных явлений. Ссылки на источники аудио доступны внизу страницы.

### Календарь ухода и цветение

Календарь группирует рекомендации по сезонам и предлагает практические задачи по уходу за растениями. Отдельная анимация цветения создана на SVG и CSS и показывает три состояния: бутон, раскрытие и цветок.

## 🎨 Визуальная концепция

| Элемент | Задача |
| --- | --- |
| Почти чёрные и тёмно-зелёные оттенки | Создать глубину и выделить фотографии |
| Мягкий и пыльно-розовый | Поддержать тему цветов без чрезмерной насыщенности |
| Шалфейный зелёный и песочные тона | Передать природные ассоциации |
| Редакционная типографика | Сочетать характер и удобочитаемость |
| Прозрачность и градиенты | Добавить глубину, не перегружая интерфейс |
| Ненавязчивая анимация | Сохранить ощущение спокойствия и живого движения |

Это не типовой интернет-каталог, а небольшая цифровая ботаническая выставка, где фотографии, тексты и интерактивные инструменты складываются в единый рассказ.

## 🪴 Технологии

- [Next.js 16](https://nextjs.org/) — веб-приложение и маршрутизация.
- [React 19](https://react.dev/) — компоненты и интерактивный интерфейс.
- [TypeScript](https://www.typescriptlang.org/) — статическая типизация.
- [Tailwind CSS 4](https://tailwindcss.com/) — основа стилизации.
- [Lucide React](https://lucide.dev/) — иконки.
- [Vercel Analytics](https://vercel.com/analytics) — метрики опубликованного сайта.
- [pnpm](https://pnpm.io/) — управление зависимостями.

## 🚀 Локальный запуск

### Требования

- Node.js, совместимый с используемой версией Next.js.
- pnpm.

```bash
git clone https://github.com/sunmeat/desert.git
cd desert
pnpm install
pnpm dev
```

Откройте [http://localhost:3000](http://localhost:3000).

Проверка production-сборки:

```bash
pnpm build
pnpm start
```

## 🗂️ Основная структура

```text
app/
  page.tsx                 Главная страница, языки, галерея и интеграция функций
  layout.tsx               Корневой layout, метаданные и Vercel Analytics
  globals.css              Глобальные стили
  flower-atlas.css         Стили галереи, атласа и ботанических разделов
  zen_garden/
    page.tsx               Отдельная страница Сада мыслей
components/
  flower-atlas.tsx         Фильтры и сравнение цветов
  care-calendar.tsx        Сезонный календарь ухода
  flower-waiting.tsx       SVG-анимация цветения
  garden-letter.tsx        Письмо с фотографией и размышлением
  silence-garden.tsx       Сад мыслей и фоновое аудио
  ui/
    button.tsx             Переиспользуемая кнопка
lib/
  utils.ts                 Вспомогательные функции
public/
  images/                  Фотографии коллекции
  audio/                   Аудиодорожки сайта
  icon.svg                 Иконка сайта
```

## 🌍 Языки

Язык по умолчанию — бразильский португальский. Также доступны русский и английский.

| Код | Язык |
| --- | --- |
| PT 🇧🇷 | Бразильский португальский |
| RU 🇷🇺 | Русский |
| EN 🇺🇸 | Английский |

При изменении или добавлении функций обновляйте тексты во всех трёх версиях.

## 📷 Фотографии и контент

Локальные фотографии основной коллекции хранятся в `public/images/`. Чтобы обновить галерею:

1. Добавьте фотографии в соответствующую папку.
2. Обновите список изображений, подписи и альтернативные описания в `app/page.tsx`.
3. Проверьте тексты на бразильском португальском, русском и английском.
4. Протестируйте галерею и навигацию на больших и маленьких экранах.

Примеры для Атласа цветения определены отдельно в `components/flower-atlas.tsx`; они не зависят от основной галереи. При изменении атласа сохраняйте значения, используемые фильтрами, и проверяйте выбор для сравнения.

Аудиофайлы находятся в `public/audio/`. После замены дорожки проверьте её путь и не удаляйте ссылки на источники записей со страницы Сада мыслей.

## ☁️ Публикация

Проект размещён на Vercel. Для настройки нового развёртывания:

1. Импортируйте GitHub-репозиторий в Vercel как проект Next.js.
2. Используйте менеджер пакетов pnpm.
3. Проверьте команду сборки `pnpm build`.
4. Опубликуйте основную ветку и проверьте работающую версию сайта.

**Сайт:** https://natadenium.vercel.app  
**Сад мыслей:** https://natadenium.vercel.app/zen_garden

---

Проект создан, чтобы показать красоту пустынных роз через фотографию, заботу и спокойные цифровые впечатления.

---

# 🇺🇸 English version

# 🌹 Desert Roses

### A digital botanical collection about form, color, and the time it takes to bloom

[![Website](https://img.shields.io/badge/site-natadenium.vercel.app-20251f?style=for-the-badge&logo=vercel&logoColor=white)](https://natadenium.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-111111?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232a?style=for-the-badge&logo=react&logoColor=61dafb)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**Desert Roses** is a custom-built website for presenting a private collection of adeniums, commonly known as desert roses. It brings together botanical photography, editorial storytelling, and interactive tools to make browsing feel more like a quiet exploration than a conventional image gallery.

The visual identity combines deep backgrounds, muted pink and sage-green accents, editorial typography, and restrained motion. The experience is available in Brazilian Portuguese, Russian, and English, with layouts designed for both large and small screens.

**Visit the website:** https://natadenium.vercel.app

## 🌺 What the project includes

- **Main gallery:** collection photography with an enlarged image view.
- **Bloom Atlas:** an independent visual collection of 20 flower references, with filters for color, petal shape, and number of layers.
- **Flower comparison:** select up to two flowers and view them side by side in a spacious comparison area.
- **Care calendar:** seasonal guidance covering light, watering, feeding, repotting, and temperature.
- **Bloom animation:** a three-stage SVG story from bud to open flower, with a replay control.
- **Garden of Thoughts:** a standalone experience at [/zen_garden](https://natadenium.vercel.app/zen_garden), featuring 50 reflections, a button for another thought, and natural soundscapes.
- **Ambient audio:** multiple nature sounds can be combined, and each active track loops until turned off. Entering the standalone garden pauses the homepage music, which can resume when returning.
- **Garden letter:** request another letter to reveal a different photograph and reflection.
- **Three languages:** Brazilian Portuguese by default, Russian, and English.
- **Responsive interface:** sticky navigation and controls adapted for smaller screens.
- **Accessibility-minded details:** alternative image text, visible keyboard focus, and support for reduced-motion preferences.
- **Vercel Web Analytics:** usage metrics for the published website.

## 🧭 Featured experiences

### Bloom Atlas

The Atlas is a standalone feature, separate from the main gallery. It helps visitors explore visual differences between flowers. Filters can be combined across **color**, **petal shape**, and **number of layers**. The comparison tool supports up to two selected flowers and displays them side by side at a larger scale.

### Garden of Thoughts

The garden can be opened directly at [natadenium.vercel.app/zen_garden](https://natadenium.vercel.app/zen_garden), without first visiting the homepage. Its 50 reflections explore patience, care, nature, boundaries, and relationships. Visitors can layer recordings of rain, birds, wind, and other natural environments. Audio source credits are available at the bottom of the page.

### Care calendar and bloom story

The care calendar groups practical plant-care suggestions by season. A separate SVG and CSS animation presents the stages of a flower’s development: bud, opening, and bloom.

## 🎨 Visual direction

| Element | Purpose |
| --- | --- |
| Near-black and deep green | Create depth and give photography the spotlight |
| Soft and dusty pink | Echo the petals without oversaturating the interface |
| Sage green and sandy tones | Introduce subtle references to foliage, soil, and natural light |
| Editorial typography | Balance personality with readability |
| Transparency and gradients | Add depth without visual clutter |
| Restrained animation | Bring the interface to life while preserving a calm atmosphere |

Rather than looking like a generic catalog, the website aims to feel like a small digital botanical exhibition, where photographs, writing, and interactive tools belong to one visual story.

## 🪴 Technology stack

- [Next.js 16](https://nextjs.org/) — web application and routing.
- [React 19](https://react.dev/) — components and interactive UI.
- [TypeScript](https://www.typescriptlang.org/) — static typing.
- [Tailwind CSS 4](https://tailwindcss.com/) — styling foundation.
- [Lucide React](https://lucide.dev/) — icons.
- [Vercel Analytics](https://vercel.com/analytics) — production usage metrics.
- [pnpm](https://pnpm.io/) — dependency management.

## 🚀 Run locally

### Requirements

- Node.js compatible with the Next.js version used by the project.
- pnpm.

```bash
git clone https://github.com/sunmeat/desert.git
cd desert
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

To validate a production build locally:

```bash
pnpm build
pnpm start
```

## 🗂️ Project structure

```text
app/
  page.tsx                 Homepage, languages, gallery, and feature integration
  layout.tsx               Root layout, metadata, and Vercel Analytics
  globals.css              Global styles
  flower-atlas.css         Gallery, Atlas, and botanical experience styles
  zen_garden/
    page.tsx               Standalone Garden of Thoughts route
components/
  flower-atlas.tsx         Flower filters and comparison
  care-calendar.tsx        Seasonal care calendar
  flower-waiting.tsx       SVG bloom animation
  garden-letter.tsx        Photo and reflection card
  silence-garden.tsx       Garden of Thoughts and ambient audio
  ui/
    button.tsx             Reusable button component
lib/
  utils.ts                 Utility functions
public/
  images/                  Collection photography
  audio/                   Audio tracks used by the website
  icon.svg                 Website icon
```

## 🌍 Languages

Brazilian Portuguese is the default language. Russian and English are also available.

| Code | Language |
| --- | --- |
| PT 🇧🇷 | Brazilian Portuguese |
| RU 🇷🇺 | Russian |
| EN 🇺🇸 | English |

When adding or changing a feature, keep the interface copy aligned across all three languages.

## 📷 Updating images and content

Local photographs for the main collection live in `public/images/`. To update the main gallery:

1. Add the new images to the appropriate folder.
2. Update the image list, captions, and alternative text in `app/page.tsx`.
3. Review copy in Brazilian Portuguese, Russian, and English.
4. Test the gallery and navigation on large and small screens.

The Bloom Atlas examples are defined separately in `components/flower-atlas.tsx`; they are independent of the main gallery. When updating the Atlas, preserve the metadata used by the filters and test the two-flower comparison.

Audio files used by the website live in `public/audio/`. After replacing a track, check its path and preserve the recording credits on the Garden of Thoughts page.

## ☁️ Deployment

The project is hosted on Vercel. To set up a new deployment:

1. Import the GitHub repository into Vercel as a Next.js project.
2. Use pnpm as the package manager.
3. Verify the build command is `pnpm build`.
4. Deploy the main branch and check the published website.

**Website:** https://natadenium.vercel.app  
**Garden of Thoughts:** https://natadenium.vercel.app/zen_garden

---

Made to celebrate desert roses through photography, thoughtful care, and calm digital experiences.
