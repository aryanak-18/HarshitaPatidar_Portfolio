import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { experience } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Experience() {
  const [current, setCurrent] = useState(0)
  const tabs = useRef([])
  const job = experience[current]

  // Stay in sync with the sticky company bar in the header.
  useEffect(() => {
    const onSelect = (e) => setCurrent(e.detail)
    window.addEventListener('select-experience', onSelect)
    return () => window.removeEventListener('select-experience', onSelect)
  }, [])
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('experience-change', { detail: current }))
  }, [current])

  const onKeyDown = (e) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key]
    if (!step) return
    e.preventDefault()
    const next = (current + step + experience.length) % experience.length
    setCurrent(next)
    tabs.current[next]?.focus()
  }

  return (
    <section id="experience" className="section">
      <div className="wrap">
        <SectionHeader
          index="02"
          label="Experience"
          title="Where I've shipped."
          intro="Product and growth in fintech today, built on earlier work across consulting, recruitment and finance."
        />

        <Reveal className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div
            role="tablist"
            aria-label="Companies"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:col-span-4 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-l lg:border-line lg:p-0"
          >
            {experience.map((item, i) => {
              const selected = i === current
              return (
                <button
                  key={item.company}
                  ref={(el) => (tabs.current[i] = el)}
                  type="button"
                  role="tab"
                  id={`tab-${i}`}
                  aria-selected={selected}
                  aria-controls="experience-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setCurrent(i)}
                  className={`relative shrink-0 rounded-full border px-4 py-2 text-left text-sm transition-colors duration-300 lg:-ml-px lg:rounded-none lg:border-0 lg:px-6 lg:py-4 ${
                    selected ? 'border-transparent text-paper lg:text-ink' : 'border-line-strong text-body hover:text-ink lg:hover:bg-surface/60'
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="experience-indicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                      className="absolute inset-0 rounded-full bg-ink lg:rounded-none lg:bg-transparent lg:bg-gradient-to-r lg:from-accent-wash lg:to-transparent"
                    >
                      <span className="absolute inset-y-0 left-0 hidden w-[3px] bg-gradient-to-b from-accent via-pop-green to-pop-lime lg:block" />
                    </motion.span>
                  )}
                  <span className="relative flex items-center gap-3">
                    <span className="hidden h-9 w-9 shrink-0 place-items-center rounded-lg bg-white p-1.5 shadow-[0_0_0_1px_rgb(var(--line))] lg:grid">
                      <img src={item.logo} alt="" className="max-h-full max-w-full object-contain" />
                    </span>
                    <span>
                      <span className={`block lg:text-[17px] ${selected ? 'font-medium' : ''}`}>{item.company}</span>
                      <span className="mt-1 hidden font-mono text-[11px] tracking-[.04em] text-muted lg:block">{item.period}</span>
                    </span>
                  </span>
                </button>
              )
            })}
          </div>

          <div id="experience-panel" role="tabpanel" aria-labelledby={`tab-${current}`} className="lg:col-span-8">
          <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="flex flex-col gap-2 border-b border-line pb-6 md:flex-row md:items-end md:justify-between md:gap-6">
              <div>
                <h3 className="display text-[clamp(26px,3vw,34px)] leading-[1.15]">{job.role}</h3>
                <p className="mt-2 text-[15px]">
                  <span className="font-medium text-ink">{job.company}</span>
                  <span className="text-muted"> · {job.context}</span>
                </p>
              </div>
              <span className="font-mono text-xs tracking-[.04em] text-muted md:whitespace-nowrap">{job.period}</span>
            </div>

            <ul className="mt-7 space-y-4">
              {job.bullets.map(([lead, text], i) => (
                <motion.li
                  key={text}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.08 + i * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
                  className="grid grid-cols-[18px_1fr] text-[15px] leading-[1.75]"
                >
                  <span className="mt-[11px] h-1.5 w-1.5 rotate-45 bg-gradient-to-br from-accent to-pop-lime" aria-hidden="true" />
                  <span>
                    {lead && <strong className="font-semibold text-ink">{lead} </strong>}
                    {text}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-body transition-colors hover:border-accent hover:text-accent">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
          </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
