import { useRef, useState } from 'react'
import { cases } from '../data/portfolio'
import CaseModal from './CaseModal'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const accents = ['from-pop-green to-pop-lime', 'from-pop-teal to-pop-green', 'from-pop-green to-pop-teal', 'from-pop-teal to-pop-lime']

function CaseCard({ item, index, onOpen }) {
  const ref = useRef(null)

  // Tilt towards the cursor and move the spotlight with it (mouse only).
  const onMove = (e) => {
    if (e.pointerType !== 'mouse') return
    const el = ref.current
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    el.style.setProperty('--x', `${x}px`)
    el.style.setProperty('--y', `${y}px`)
    el.style.transform = `perspective(900px) rotateX(${(0.5 - y / r.height) * 6}deg) rotateY(${(x / r.width - 0.5) * 6}deg) translateY(-4px)`
  }
  const onLeave = () => {
    ref.current.style.transform = ''
  }

  return (
    <article
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="group relative flex h-full flex-col overflow-hidden glass rounded-2xl p-7 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:border-transparent hover:shadow-[0_30px_60px_-30px_rgba(14,26,43,.4)] focus-within:border-ink/40 motion-reduce:!transform-none"
    >
      {/* Cursor spotlight + gradient rim */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(380px circle at var(--x, 50%) var(--y, 50%), rgba(18,183,106,.13), transparent 45%)' }}
      />
      <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100 ${accents[index % accents.length]}`} />

      <div className="label relative flex items-center justify-between">
        <span className="text-accent">{String(index + 1).padStart(2, '0')}</span>
        <span>{item.org}</span>
      </div>
      <p className="relative mt-8 text-xs font-medium uppercase tracking-[.08em] text-muted">{item.category}</p>
      <h3 className="relative mt-2 font-serif text-[25px] leading-[1.2] tracking-[-.01em]">{item.title}</h3>

      <div className="relative mt-auto pt-10">
        <div className="flex items-end justify-between gap-4 border-t border-line pt-5">
          <div>
            <span className={`bg-gradient-to-r bg-clip-text font-serif text-[40px] leading-none tracking-[-.02em] text-ink tabular-nums transition-colors duration-300 group-hover:text-transparent ${accents[index % accents.length]}`}>{item.metric}</span>
            <div className="mt-2 text-xs text-muted">{item.metricLabel}</div>
          </div>
          <button
            type="button"
            onClick={() => onOpen(index)}
            aria-label={`Read case study: ${item.title}`}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line-strong text-ink transition duration-300 after:absolute after:inset-0 after:content-[''] group-hover:border-ink group-hover:bg-ink group-hover:text-paper"
          >
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:-rotate-45">
              →
            </span>
          </button>
        </div>
      </div>
    </article>
  )
}

export default function Work() {
  const [active, setActive] = useState(null)

  return (
    <section id="work" className="section relative bg-gradient-to-b from-transparent via-accent-wash/50 to-transparent">
      <div className="wrap">
        <SectionHeader
          index="03"
          label="Selected work"
          title="Problems I've owned, and what moved."
          intro="Product and growth work at Nubra, alongside consulting and research projects from SRCC."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 100} className="h-full">
              <CaseCard item={item} index={i} onOpen={setActive} />
            </Reveal>
          ))}
        </div>
      </div>

      <CaseModal
        item={active === null ? null : cases[active]}
        next={active === null ? null : cases[(active + 1) % cases.length]}
        onNext={() => setActive((i) => (i + 1) % cases.length)}
        onClose={() => setActive(null)}
      />
    </section>
  )
}
