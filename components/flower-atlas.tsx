'use client'

import { useMemo, useState } from 'react'
import { Check, Flower2, SlidersHorizontal, X } from 'lucide-react'

type Locale = 'pt' | 'ru' | 'en'
type FlowerColor = 'white' | 'pink' | 'red' | 'crimson' | 'bicolor'
type PetalShape = 'rounded' | 'pointed' | 'ruffled'

type Flower = {
  id: number
  image: string
  color: FlowerColor
  shape: PetalShape
  layers: 1 | 2 | 3
  name: Record<Locale, string>
  description: Record<Locale, string>
}

const flowers: Flower[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/15507957/pexels-photo-15507957.jpeg?auto=compress&cs=tinysrgb&w=1000',
    color: 'bicolor',
    shape: 'rounded',
    layers: 2,
    name: { pt: 'Rosa com contraste', ru: 'Розовый контраст', en: 'Rose contrast' },
    description: { pt: 'Tons suaves com bordas marcantes', ru: 'Мягкие оттенки с выразительным краем', en: 'Soft tones with a defined edge' },
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/36972747/pexels-photo-36972747.jpeg?auto=compress&cs=tinysrgb&w=1000',
    color: 'pink',
    shape: 'rounded',
    layers: 1,
    name: { pt: 'Rosa delicado', ru: 'Нежно-розовый', en: 'Soft pink' },
    description: { pt: 'Pétalas abertas e contorno delicado', ru: 'Раскрытые лепестки с мягкими линиями', en: 'Open petals with gentle lines' },
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/36602431/pexels-photo-36602431.jpeg?auto=compress&cs=tinysrgb&w=1000',
    color: 'crimson',
    shape: 'pointed',
    layers: 2,
    name: { pt: 'Carmesim intenso', ru: 'Насыщенный малиновый', en: 'Deep crimson' },
    description: { pt: 'Cor profunda e desenho expressivo', ru: 'Глубокий цвет и выразительный рисунок', en: 'Deep color and expressive pattern' },
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/36602429/pexels-photo-36602429.jpeg?auto=compress&cs=tinysrgb&w=1000',
    color: 'white',
    shape: 'rounded',
    layers: 1,
    name: { pt: 'Branco luminoso', ru: 'Светлый белый', en: 'Luminous white' },
    description: { pt: 'Leveza, luz e simplicidade', ru: 'Лёгкость, свет и простота', en: 'Lightness, glow and simplicity' },
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/31230149/pexels-photo-31230149.jpeg?auto=compress&cs=tinysrgb&w=1000',
    color: 'red',
    shape: 'ruffled',
    layers: 3,
    name: { pt: 'Vermelho em camadas', ru: 'Красный многослойный', en: 'Layered red' },
    description: { pt: 'Volume e movimento nas pétalas', ru: 'Объём и движение лепестков', en: 'Volume and movement in the petals' },
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/37037717/pexels-photo-37037717.jpeg?auto=compress&cs=tinysrgb&w=1000',
    color: 'bicolor',
    shape: 'pointed',
    layers: 2,
    name: { pt: 'Duas cores', ru: 'Два оттенка', en: 'Two tones' },
    description: { pt: 'Um encontro de cores na mesma flor', ru: 'Сочетание двух оттенков в одном цветке', en: 'Two shades meeting in one bloom' },
  },
  {
    id: 7,
    image: 'https://images.pexels.com/photos/31423183/pexels-photo-31423183.jpeg?auto=compress&cs=tinysrgb&w=1000',
    color: 'pink',
    shape: 'ruffled',
    layers: 3,
    name: { pt: 'Rosa em movimento', ru: 'Розовый в движении', en: 'Pink in motion' },
    description: { pt: 'Pétalas cheias e contornos ondulados', ru: 'Пышные лепестки с волнистыми краями', en: 'Full petals with wavy edges' },
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/29357901/pexels-photo-29357901.jpeg?auto=compress&cs=tinysrgb&w=1000',
    color: 'red',
    shape: 'pointed',
    layers: 1,
    name: { pt: 'Vermelho escultural', ru: 'Скульптурный красный', en: 'Sculptural red' },
    description: { pt: 'Linhas definidas e presença marcante', ru: 'Чёткие линии и выразительный характер', en: 'Defined lines and a bold presence' },
  },
]

const copy = {
  pt: {
    kicker: '03 · Atlas botânico',
    title: 'Atlas da floração',
    intro: 'Cada flor guarda um desenho próprio. Explore as cores, observe as pétalas e compare os detalhes que tornam cada adenium singular.',
    color: 'Explore por cor',
    all: 'Todas',
    colors: { white: 'Branco', pink: 'Rosa', red: 'Vermelho', crimson: 'Carmesim', bicolor: 'Bicolor' },
    shape: 'Forma das pétalas',
    shapes: { all: 'Todas as formas', rounded: 'Arredondadas', pointed: 'Pontiagudas', ruffled: 'Onduladas' },
    layers: 'Camadas de pétalas',
    layerOptions: { all: 'Todas', 1: 'Simples', 2: 'Duplas', 3: 'Múltiplas' },
    compare: 'Comparar flores',
    compareHint: 'Escolha até duas flores para observar lado a lado.',
    selected: 'selecionadas',
    clear: 'Limpar seleção',
    details: 'Ver detalhes',
    empty: 'Nenhuma flor corresponde a estes filtros. Experimente outra combinação.',
    shapeLabel: 'Forma',
    layersLabel: 'Camadas',
    close: 'Fechar comparação',
    compareTitle: 'Duas flores, novos detalhes',
    footer: 'Um pequeno estudo de cor, forma e delicadeza.',
  },
  ru: {
    kicker: '03 · Ботанический атлас',
    title: 'Атлас цветения',
    intro: 'У каждого цветка свой рисунок. Исследуйте оттенки, форму лепестков и детали, которые делают каждый адениум неповторимым.',
    color: 'Выберите оттенок',
    all: 'Все',
    colors: { white: 'Белый', pink: 'Розовый', red: 'Красный', crimson: 'Малиновый', bicolor: 'Двухцветный' },
    shape: 'Форма лепестков',
    shapes: { all: 'Любая форма', rounded: 'Округлые', pointed: 'Заострённые', ruffled: 'Волнистые' },
    layers: 'Количество слоёв',
    layerOptions: { all: 'Любое', 1: 'Один', 2: 'Два', 3: 'Несколько' },
    compare: 'Сравнить цветы',
    compareHint: 'Выберите до двух цветов, чтобы рассмотреть их рядом.',
    selected: 'выбрано',
    clear: 'Сбросить выбор',
    details: 'Подробнее',
    empty: 'По этим фильтрам ничего не найдено. Попробуйте другую комбинацию.',
    shapeLabel: 'Форма',
    layersLabel: 'Слои',
    close: 'Закрыть сравнение',
    compareTitle: 'Два цветка, новые детали',
    footer: 'Небольшое исследование цвета, формы и нежности.',
  },
  en: {
    kicker: '03 · Botanical atlas',
    title: 'Atlas of blooms',
    intro: 'Every flower has its own pattern. Explore shades, examine petal shapes and compare the details that make each adenium unique.',
    color: 'Explore by color',
    all: 'All colors',
    colors: { white: 'White', pink: 'Pink', red: 'Red', crimson: 'Crimson', bicolor: 'Bicolor' },
    shape: 'Petal shape',
    shapes: { all: 'All shapes', rounded: 'Rounded', pointed: 'Pointed', ruffled: 'Ruffled' },
    layers: 'Petal layers',
    layerOptions: { all: 'Any number', 1: 'Single', 2: 'Double', 3: 'Multiple' },
    compare: 'Compare blooms',
    compareHint: 'Choose up to two flowers to view side by side.',
    selected: 'selected',
    clear: 'Clear selection',
    details: 'View details',
    empty: 'No blooms match these filters. Try another combination.',
    shapeLabel: 'Shape',
    layersLabel: 'Layers',
    close: 'Close comparison',
    compareTitle: 'Two blooms, new details',
    footer: 'A small study in color, form and delicacy.',
  },
}

const colorSwatches: Record<FlowerColor, string> = {
  white: '#f0e8d9',
  pink: '#d99ba9',
  red: '#a83d3f',
  crimson: '#a84970',
  bicolor: 'linear-gradient(135deg, #f0e8d9 0 48%, #b84e67 52% 100%)',
}

export default function FlowerAtlas({ locale = 'pt' }: { locale?: Locale }) {
  const t = copy[locale]
  const [color, setColor] = useState<FlowerColor | 'all'>('all')
  const [shape, setShape] = useState<PetalShape | 'all'>('all')
  const [layers, setLayers] = useState<'all' | '1' | '2' | '3'>('all')
  const [selected, setSelected] = useState<number[]>([])
  const [detailId, setDetailId] = useState<number | null>(null)

  const filteredFlowers = useMemo(
    () => flowers.filter((flower) =>
      (color === 'all' || flower.color === color) &&
      (shape === 'all' || flower.shape === shape) &&
      (layers === 'all' || String(flower.layers) === layers),
    ),
    [color, shape, layers],
  )

  const selectedFlowers = flowers.filter((flower) => selected.includes(flower.id))
  const detailFlower = flowers.find((flower) => flower.id === detailId)

  const toggleSelected = (id: number) => {
    setSelected((current) => current.includes(id)
      ? current.filter((item) => item !== id)
      : current.length < 2 ? [...current, id] : [current[1], id])
  }

  return (
    <section className="atlas-section section-pad" id="atlas-floracao" aria-labelledby="atlas-title">
      <div className="section-kicker atlas-kicker"><span>{t.kicker.split(' · ')[0]}</span><span>{t.kicker.split(' · ')[1]}</span></div>
      <div className="atlas-heading">
        <div>
          <p className="atlas-eyebrow"><Flower2 size={15} strokeWidth={1.5} /> Adenium · Estudo visual</p>
          <h2 id="atlas-title">{t.title.split(' ').slice(0, -1).join(' ')}<br /><em>{t.title.split(' ').slice(-1)}</em></h2>
        </div>
        <p className="atlas-intro">{t.intro}</p>
      </div>

      <div className="atlas-tools">
        <div className="atlas-filter-group">
          <span className="atlas-filter-label">{t.color}</span>
          <div className="atlas-swatches" role="group" aria-label={t.color}>
            <button type="button" className={color === 'all' ? 'atlas-swatch active' : 'atlas-swatch'} onClick={() => setColor('all')} aria-pressed={color === 'all'} title={t.all}><span className="atlas-all-swatch">✳</span><small>{t.all}</small></button>
            {(Object.keys(colorSwatches) as FlowerColor[]).map((key) => (
              <button type="button" key={key} className={color === key ? 'atlas-swatch active' : 'atlas-swatch'} onClick={() => setColor(key)} aria-pressed={color === key} title={t.colors[key]}>
                <span className="atlas-color-dot" style={{ background: colorSwatches[key] }} /><small>{t.colors[key]}</small>
              </button>
            ))}
          </div>
        </div>
        <div className="atlas-selects">
          <label><span><SlidersHorizontal size={13} /> {t.shape}</span><select value={shape} onChange={(event) => setShape(event.target.value as PetalShape | 'all')}><option value="all">{t.shapes.all}</option><option value="rounded">{t.shapes.rounded}</option><option value="pointed">{t.shapes.pointed}</option><option value="ruffled">{t.shapes.ruffled}</option></select></label>
          <label><span>{t.layers}</span><select value={layers} onChange={(event) => setLayers(event.target.value as 'all' | '1' | '2' | '3')}><option value="all">{t.layerOptions.all}</option><option value="1">{t.layerOptions[1]}</option><option value="2">{t.layerOptions[2]}</option><option value="3">{t.layerOptions[3]}</option></select></label>
        </div>
      </div>

      <div className="atlas-results-bar"><span>{String(filteredFlowers.length).padStart(2, '0')} <span className="atlas-results-label">/ 08</span></span><button type="button" className="atlas-compare-toggle" onClick={() => setSelected(selected.length ? [] : filteredFlowers.slice(0, 2).map((flower) => flower.id))}><span>{t.compare}</span><span className="atlas-compare-count">{selected.length}/2</span></button></div>

      {filteredFlowers.length ? <div className="atlas-grid">{filteredFlowers.map((flower, index) => {
        const isSelected = selected.includes(flower.id)
        return <article className={isSelected ? 'atlas-card is-selected' : 'atlas-card'} key={flower.id}>
          <button type="button" className="atlas-image-button" onClick={() => setDetailId(flower.id)} aria-label={`${t.details}: ${flower.name[locale]}`}>
            <img src={flower.image} alt={flower.name[locale]} loading="lazy" />
            <span className="atlas-image-index">0{index + 1}</span>
            <span className="atlas-open-mark">↗</span>
          </button>
          <div className="atlas-card-info">
            <div><p className="atlas-card-name">{flower.name[locale]}</p><p className="atlas-card-description">{flower.description[locale]}</p></div>
            <button type="button" className={isSelected ? 'atlas-select-button selected' : 'atlas-select-button'} onClick={() => toggleSelected(flower.id)} aria-pressed={isSelected} aria-label={isSelected ? t.clear : t.compare}>{isSelected ? <Check size={15} /> : '+'}</button>
          </div>
        </article>
      })}</div> : <p className="atlas-empty">{t.empty}</p>}

      <div className="atlas-bottom"><p>{t.footer}</p><span>{t.compareHint}</span></div>

      {selectedFlowers.length > 0 && <div className="atlas-compare-panel" aria-live="polite">
        <div className="atlas-compare-panel-head"><div><span>{t.compare}</span><p>{t.compareHint}</p></div><button type="button" onClick={() => setSelected([])} aria-label={t.clear}><X size={17} /></button></div>
        <div className="atlas-compare-items">{selectedFlowers.map((flower) => <div className="atlas-compare-item" key={flower.id}><img src={flower.image} alt={flower.name[locale]} /><div><strong>{flower.name[locale]}</strong><span>{t.colors[flower.color]} · {t.shapes[flower.shape]} · {t.layerOptions[flower.layers]}</span></div><button type="button" onClick={() => toggleSelected(flower.id)} aria-label={t.clear}><X size={14} /></button></div>)}</div>
      </div>}

      {detailFlower && <div className="atlas-modal-backdrop" role="presentation" onClick={() => setDetailId(null)}><div className="atlas-modal" role="dialog" aria-modal="true" aria-label={detailFlower.name[locale]} onClick={(event) => event.stopPropagation()}><button type="button" className="atlas-modal-close" onClick={() => setDetailId(null)} aria-label={t.close}><X /></button><img src={detailFlower.image} alt={detailFlower.name[locale]} /><div className="atlas-modal-copy"><p className="atlas-eyebrow"><Flower2 size={14} /> {t.details}</p><h3>{detailFlower.name[locale]}</h3><p>{detailFlower.description[locale]}</p><dl><div><dt>{t.color}</dt><dd>{t.colors[detailFlower.color]}</dd></div><div><dt>{t.shapeLabel}</dt><dd>{t.shapes[detailFlower.shape]}</dd></div><div><dt>{t.layersLabel}</dt><dd>{t.layerOptions[detailFlower.layers]}</dd></div></dl><button type="button" className="atlas-modal-compare" onClick={() => { toggleSelected(detailFlower.id); setDetailId(null) }}>{t.compare} +</button></div></div></div>}
    </section>
  )
}
