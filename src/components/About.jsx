import { about } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import SplitWords from './SplitWords'

const tones = [
  { dot: 'bg-pop-green', bar: 'from-pop-green to-pop-lime' },
  { dot: 'bg-pop-teal', bar: 'from-pop-teal to-pop-green' },
  { dot: 'bg-pop-amber', bar: 'from-pop-amber to-pop-lime' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <SectionHeader index="01" label="About" />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
          <p className="display text-[clamp(26px,3vw,36px)] leading-[1.25] lg:col-span-5">
            <SplitWords text={about.lead} stagger={0.03} />
          </p>
          <Reveal delay={150} className="space-y-5 text-base leading-[1.8] lg:col-span-6 lg:col-start-7">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:mt-20 md:grid-cols-3">
          {about.capabilities.map((group, i) => (
            <Reveal key={group.title} delay={i * 120}>
              <div className="group relative h-full overflow-hidden glass rounded-2xl p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(14,26,43,.35)]">
              <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${tones[i].bar}`} />
              <h3 className="label !text-ink">{group.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] transition-transform duration-300 group-hover:translate-x-0.5">
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${tones[i].dot}`} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
