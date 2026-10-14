'use client'

import { useState } from 'react'
import { CalendarDays, Droplets, Leaf, Sun, ThermometerSun, Sprout } from 'lucide-react'

type Locale = 'pt' | 'ru' | 'en'
type Season = 'spring' | 'summer' | 'autumn' | 'winter'
type Task = { icon: 'sun' | 'water' | 'feed' | 'repot' | 'temperature'; title: string; text: string }

const seasons: Record<Locale, Record<Season, { label: string; subtitle: string; note: string; tasks: Task[] }>> = {
  ru: {
    spring: { label: 'Весна', subtitle: 'Пробуждение и новый рост', note: 'Начинайте активный уход, когда появляются новые листья и растение действительно просыпается.', tasks: [
      { icon: 'sun', title: 'Свет и адаптация', text: 'Переставляйте на более солнечное место постепенно, чтобы после зимы не обжечь листья.' },
      { icon: 'water', title: 'Полив по просыханию', text: 'Увеличивайте полив только с началом роста. Между поливами субстрат должен заметно просыхать.' },
      { icon: 'feed', title: 'Подкормка без спешки', text: 'Возобновляйте удобрения после появления устойчивого роста, начиная с дозировки по инструкции.' },
      { icon: 'repot', title: 'Пересадка', text: 'Лучшее время для пересадки обычно совпадает с началом роста. Используйте рыхлый, быстро просыхающий грунт и горшок с отверстиями.' },
    ] },
    summer: { label: 'Лето', subtitle: 'Свет, тепло и активное цветение', note: 'В жару проверяйте грунт и состояние растения: частота полива зависит от жары, горшка и состава субстрата.', tasks: [
      { icon: 'sun', title: 'Много света', text: 'Обеспечьте яркое солнце и хорошее проветривание. В экстремальную жару следите за признаками перегрева.' },
      { icon: 'water', title: 'Полив с проверкой грунта', text: 'Поливайте обильно, когда субстрат просох, и не оставляйте воду в поддоне. В прохладные или пасмурные дни паузы длиннее.' },
      { icon: 'feed', title: 'Подкормка в период роста', text: 'Подкармливайте умеренно по инструкции, только если растение активно растёт и корни здоровы.' },
      { icon: 'temperature', title: 'Жара и ливни', text: 'Защищайте от затяжного переувлажнения и обеспечьте движение воздуха после дождя.' },
    ] },
    autumn: { label: 'Осень', subtitle: 'Постепенное замедление', note: 'Ориентируйтесь на ночную температуру и замедление роста, а не только на календарную дату.', tasks: [
      { icon: 'sun', title: 'Сохраняйте яркий свет', text: 'По возможности оставьте растение на самом светлом месте, пока температура безопасна.' },
      { icon: 'water', title: 'Постепенно реже поливайте', text: 'Если рост замедляется и грунт сохнет дольше, увеличьте интервалы. Не поливайте влажный субстрат.' },
      { icon: 'feed', title: 'Завершайте подкормки', text: 'Сократите и прекратите подкормку, когда активный рост заканчивается.' },
      { icon: 'temperature', title: 'Следите за ночами', text: 'Заранее занесите адениум в защищённое место, если ночи становятся холодными; длительный холод опасен.' },
    ] },
    winter: { label: 'Зима', subtitle: 'Покой, тепло и осторожность', note: 'В прохладе мокрый грунт особенно опасен. У спящего растения потребность в воде резко снижается.', tasks: [
      { icon: 'sun', title: 'Самое светлое место', text: 'Держите растение у светлого окна или под досветкой, вдали от холодных сквозняков.' },
      { icon: 'water', title: 'Очень осторожный полив', text: 'При прохладном содержании и покое поливайте редко и понемногу, только когда грунт полностью высох. Не допускайте сырости.' },
      { icon: 'feed', title: 'Пауза в удобрениях', text: 'Не подкармливайте растение, если оно не растёт активно.' },
      { icon: 'temperature', title: 'Берегите от холода', text: 'Старайтесь поддерживать тепло, ориентировочно выше 15 °C. Не пересаживайте без необходимости в период покоя.' },
    ] },
  },
  pt: {
    spring: { label: 'Primavera', subtitle: 'Despertar e novos brotos', note: 'Retome os cuidados ativos quando surgirem folhas novas e a planta realmente voltar a crescer.', tasks: [
      { icon: 'sun', title: 'Luz e adaptação', text: 'Aumente a exposição ao sol aos poucos para evitar queimaduras depois do período de descanso.' },
      { icon: 'water', title: 'Regue após observar o substrato', text: 'Aumente as regas somente com o início do crescimento. Deixe o substrato secar bem entre elas.' },
      { icon: 'feed', title: 'Adubação gradual', text: 'Retome o fertilizante quando o crescimento estiver consistente, seguindo a dose indicada no rótulo.' },
      { icon: 'repot', title: 'Replantio', text: 'O início do crescimento costuma ser uma boa época para replantar. Use substrato aerado, de secagem rápida, e vaso com furos.' },
    ] },
    summer: { label: 'Verão', subtitle: 'Luz, calor e floração ativa', note: 'Observe o substrato e a planta: a frequência de rega depende do calor, do vaso e da mistura usada.', tasks: [
      { icon: 'sun', title: 'Muita luminosidade', text: 'Ofereça bastante sol e boa ventilação. Em calor extremo, observe sinais de estresse térmico.' },
      { icon: 'water', title: 'Rega com verificação', text: 'Regue bem quando o substrato estiver seco e não deixe água acumulada no prato. Em dias frios ou nublados, espere mais.' },
      { icon: 'feed', title: 'Adube durante o crescimento', text: 'Adube moderadamente conforme o rótulo, apenas se a planta estiver crescendo e as raízes estiverem saudáveis.' },
      { icon: 'temperature', title: 'Calor e chuvas', text: 'Evite encharcamento prolongado e mantenha a circulação de ar depois das chuvas.' },
    ] },
    autumn: { label: 'Outono', subtitle: 'Ritmo de crescimento mais lento', note: 'Observe a temperatura noturna e o ritmo da planta, não apenas a data no calendário.', tasks: [
      { icon: 'sun', title: 'Mantenha boa luz', text: 'Deixe a planta no local mais iluminado possível enquanto as temperaturas forem seguras.' },
      { icon: 'water', title: 'Reduza a frequência das regas', text: 'Se o crescimento diminuir e o substrato demorar mais para secar, aumente o intervalo entre regas.' },
      { icon: 'feed', title: 'Encerre a adubação', text: 'Reduza e suspenda o fertilizante quando o crescimento ativo estiver terminando.' },
      { icon: 'temperature', title: 'Observe as noites frias', text: 'Proteja a planta antes que as noites esfriem muito; temperaturas baixas por muito tempo são perigosas.' },
    ] },
    winter: { label: 'Inverno', subtitle: 'Descanso, calor e atenção', note: 'Em temperaturas baixas, substrato molhado é especialmente arriscado. Uma planta dormente consome muito menos água.', tasks: [
      { icon: 'sun', title: 'Local bem iluminado', text: 'Mantenha a planta perto de uma janela clara ou use iluminação complementar, longe de correntes frias.' },
      { icon: 'water', title: 'Regue com muita cautela', text: 'Durante o descanso e em ambiente fresco, regue raramente e só quando o substrato estiver completamente seco.' },
      { icon: 'feed', title: 'Pausa no fertilizante', text: 'Não adube enquanto a planta não estiver em crescimento ativo.' },
      { icon: 'temperature', title: 'Proteja do frio', text: 'Procure manter temperaturas acima de aproximadamente 15 °C. Evite replantar durante o descanso sem necessidade.' },
    ] },
  },
  en: {
    spring: { label: 'Spring', subtitle: 'Awakening and fresh growth', note: 'Resume active care when new leaves appear and the plant is genuinely growing again.', tasks: [
      { icon: 'sun', title: 'Light and acclimation', text: 'Increase direct sun gradually to avoid leaf scorch after the resting period.' },
      { icon: 'water', title: 'Water after checking the mix', text: 'Increase watering only as growth resumes. Let the substrate dry thoroughly between waterings.' },
      { icon: 'feed', title: 'Restart feeding slowly', text: 'Resume fertilizer after steady new growth begins, following the product label.' },
      { icon: 'repot', title: 'Repotting', text: 'Early active growth is usually a good time to repot. Choose an airy, fast-draining mix and a pot with drainage holes.' },
    ] },
    summer: { label: 'Summer', subtitle: 'Light, warmth and active blooming', note: 'Check the plant and its substrate: watering frequency depends on heat, pot size and mix.', tasks: [
      { icon: 'sun', title: 'Plenty of light', text: 'Provide bright sun and good airflow. Watch for heat stress during extreme temperatures.' },
      { icon: 'water', title: 'Water based on dryness', text: 'Water thoroughly once the mix has dried, and never leave standing water in the saucer. Wait longer in cool or cloudy weather.' },
      { icon: 'feed', title: 'Feed during active growth', text: 'Fertilize moderately according to the label only while growth is active and roots are healthy.' },
      { icon: 'temperature', title: 'Heat and heavy rain', text: 'Avoid prolonged waterlogging and maintain airflow after rainfall.' },
    ] },
    autumn: { label: 'Autumn', subtitle: 'A gradual slowdown', note: 'Use night temperatures and growth rate as your guide, not the calendar date alone.', tasks: [
      { icon: 'sun', title: 'Keep the light bright', text: 'Keep the plant in the brightest safe location while temperatures remain suitable.' },
      { icon: 'water', title: 'Ease back on watering', text: 'As growth slows and the mix dries more slowly, lengthen the interval between waterings.' },
      { icon: 'feed', title: 'Wind down feeding', text: 'Reduce and stop fertilizer as active growth comes to an end.' },
      { icon: 'temperature', title: 'Watch cold nights', text: 'Move the plant to a sheltered place before nights become chilly; prolonged cold can be damaging.' },
    ] },
    winter: { label: 'Winter', subtitle: 'Rest, warmth and restraint', note: 'Cold, wet substrate is especially risky. A dormant plant needs much less water.', tasks: [
      { icon: 'sun', title: 'Choose the brightest spot', text: 'Keep the plant by a bright window or under a grow light, away from cold drafts.' },
      { icon: 'water', title: 'Water very sparingly', text: 'During dormancy in cool conditions, water infrequently and only once the mix is fully dry.' },
      { icon: 'feed', title: 'Pause fertilizer', text: 'Do not feed while the plant is not actively growing.' },
      { icon: 'temperature', title: 'Protect from cold', text: 'Aim to keep temperatures above roughly 15 °C. Avoid unnecessary repotting during dormancy.' },
    ] },
  },
}

const iconMap = {
  sun: Sun,
  water: Droplets,
  feed: Sprout,
  repot: Leaf,
  temperature: ThermometerSun,
}

const intro: Record<Locale, { kicker: string; title: string; description: string; footnote: string }> = {
  ru: {
    kicker: '04 · Практический гид',
    title: 'Календарь заботы',
    description: 'Сезонные подсказки для адениума: свет, полив, подкормка, пересадка и зимний покой. Решение всегда зависит от температуры, грунта и активности роста.',
    footnote: 'Не поливайте по расписанию. Сначала проверьте грунт, температуру и состояние растения.',
  },
  pt: {
    kicker: '04 · Guia de cultivo',
    title: 'Calendário de cuidados',
    description: 'Um guia sazonal para luz, rega, adubação, replantio e repouso de inverno. A decisão depende da temperatura, do substrato e do ritmo de crescimento.',
    footnote: 'Não regue pelo calendário. Observe primeiro o substrato, a temperatura e a planta.',
  },
  en: {
    kicker: '04 · Growing guide',
    title: 'Care calendar',
    description: 'A seasonal guide to light, watering, feeding, repotting and winter rest. Care depends on temperature, substrate and actual growth.',
    footnote: 'Do not water by the calendar. Check the substrate, temperature and plant first.',
  },
}

const seasonOrder: Season[] = ['spring', 'summer', 'autumn', 'winter']

export default function CareCalendar({ locale = 'pt' }: { locale?: Locale }) {
  const [season, setSeason] = useState<Season>('spring')
  const t = intro[locale]
  const current = seasons[locale][season]

  return (
    <section className="care-section section-pad" id="calendario-cuidados" aria-labelledby="care-title">
      <div className="section-kicker care-kicker"><span>{t.kicker.split(' · ')[0]}</span><span>{t.kicker.split(' · ')[1]}</span></div>
      <div className="care-heading">
        <div><p className="care-eyebrow"><CalendarDays size={15} strokeWidth={1.5} /> Adenium · {locale === 'ru' ? 'Сезонный уход' : locale === 'en' ? 'Seasonal care' : 'Cuidados sazonais'}</p>
          <h2 id="care-title">{t.title.split(' ').slice(0, -1).join(' ')}<br /><em>{t.title.split(' ').slice(-1)}</em></h2>
        </div>
        <p className="care-intro">{t.description}</p>
      </div>
      <div className="care-season-switch" role="tablist" aria-label={locale === 'ru' ? 'Выберите сезон' : locale === 'en' ? 'Choose a season' : 'Escolha a estação'}>
        {seasonOrder.map((key, index) => <button key={key} type="button" role="tab" aria-selected={season === key} className={season === key ? 'active' : ''} onClick={() => setSeason(key)}><span>0{index + 1}</span>{seasons[locale][key].label}</button>)}
      </div>
      <div className="care-season-summary" key={season}>
        <span className="care-season-number">0{seasonOrder.indexOf(season) + 1}</span>
        <div><h3>{current.label}</h3><p>{current.subtitle}</p></div>
        <div className="care-season-note">{current.note}</div>
      </div>
      <div className="care-task-grid" key={season + '-tasks'}>
        {current.tasks.map((task, index) => {
          const Icon = iconMap[task.icon]
          return <article className="care-task" key={task.title}>
            <div className="care-task-top"><span>0{index + 1}</span><Icon size={19} strokeWidth={1.4} /></div>
            <h4>{task.title}</h4>
            <p>{task.text}</p>
          </article>
        })}
      </div>
      <p className="care-footnote"><span>✳</span>{t.footnote}</p>
    </section>
  )
}
