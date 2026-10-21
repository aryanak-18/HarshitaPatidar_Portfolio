import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { config, hero, productLog } from '../data/portfolio'
import Aurora from './Aurora'
import Marquee from './Marquee'
import SplitWords from './SplitWords'

const ease = [0.2, 0.8, 0.2, 1]

// Positions just outside the product log card's corners (xl screens only).
const toastSlots = [
  { pos: '-left-14 -top-16', delay: 1.6, float: '' },
  { pos: '-right-8 -top-14', delay: 2.0, float: '[animation-delay:-2s]' },
  { pos: '-left-8 -bottom-14', delay: 2.4, float: '[animation-delay:-4s]' },
]

const toastIcons = {
  ship: (
    <>
      <path d="M14.5 21.7a.5.5 0 0 0 .9 0l6.5-19a.5.5 0 0 0-.6-.6l-19 6.5a.5.5 0 0 0 0 .9l7.9 3.2a2 2 0 0 1 1.1 1.1z" />
      <path d="m21.9 2.1-10.9 11" />
    </>
  ),
  pulse: <path d="M22 12h-2.5a2 2 0 0 0-1.9 1.5l-2.4 8.3a.3.3 0 0 1-.5 0L9.2 2.2a.3.3 0 0 0-.5 0l-2.3 8.3A2 2 0 0 1 4.5 12H2" />,
  loop: (
    <>
      <path d="M3 12a9 9 0 0 1 9-9 9.8 9.8 0 0 1 6.7 2.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.8 9.8 0 0 1-6.7-2.7L3 16" />
      <path d="M8 16H3v5" />
    </>
  ),
}

function Toast({ toast, slot }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: slot.delay, ease }}
      className={`absolute z-20 hidden xl:block ${slot.pos}`}
    >
      <div className={`relative flex w-[290px] animate-float items-center gap-3 overflow-hidden rounded-2xl p-3 pr-4 glass ${slot.float}`}>
        <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/25 to-accent/[.04] text-accent ring-1 ring-inset ring-accent/30" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {toastIcons[toast.icon]}
          </svg>
        </span>
        <span className="relative min-w-0">
          <span className="block text-[13px] font-medium text-ink">{toast.title}</span>
          <span className="block truncate text-xs text-muted">{toast.body}</span>
        </span>
      </div>
    </motion.div>
  )
}

// Green wash shared by the card's two panels.
const tint = 'bg-gradient-to-br from-accent/[.12] via-accent/[.04] to-transparent'

function ProductLog() {
  return (
    <div className="glass relative overflow-hidden rounded-3xl">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className={`relative ${tint}`}>
      <div className="relative flex items-center justify-between border-b border-ink/[.08] px-6 py-4">
        <div>
          <div className="text-sm font-semibold text-ink">Product log</div>
          <div className="mt-0.5 text-xs text-muted">Nubra · Jul 2024 — Present</div>
        </div>
        <span className="label flex items-center gap-2 rounded-full border border-ink/10 bg-ink/[.03] px-2.5 py-1 !text-[10px] !tracking-[.1em]">
          App · Web
        </span>
      </div>

      <div className="relative px-6 pt-4">
        <div className="label !text-[10px]">Features shipped</div>
        <ul className="mt-1">
          {productLog.shipped.map((f, i) => (
            <motion.li
              key={f.name}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.12, ease }}
              className="flex items-center gap-3 border-b border-ink/[.08] py-3 last:border-0"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 14, delay: 1 + i * 0.12 }}
                className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink/[.06] text-ink ring-1 ring-inset ring-ink/15"
                aria-hidden="true"
              >
                <svg width="10" height="10" viewBox="0 0 10 10">
                  <path d="M2 5.2l2 2L8 3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm text-ink">{f.name}</span>
                <span className="block truncate text-xs text-muted">{f.detail}</span>
              </span>
              <span className="rounded-full border border-ink/10 bg-ink/[.03] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[.08em] text-muted">Shipped</span>
            </motion.li>
          ))}
        </ul>
      </div>
      </div>

      <div className={`relative border-t border-ink/[.08] px-6 pb-5 pt-4 ${tint}`}>
        <div className="label !text-[10px]">What it moved</div>
        <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-4">
          {productLog.impact.map((m) => (
            <div key={m.label}>
              <dt className="sr-only">{m.label}</dt>
              <dd className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="font-serif text-[30px] leading-none tracking-[-.02em] text-ink tabular-nums">{m.value}</span>
                {m.from && <span className="whitespace-nowrap rounded-full bg-accent/10 px-1.5 py-0.5 font-mono text-[10px] text-accent">↑ {m.from}</span>}
              </dd>
              <dd className="mt-1 text-xs text-body">{m.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0.25])

  return (
    <section ref={ref} className="relative overflow-hidden">
      <Aurora />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(var(--ink)/.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--ink)/.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_60%_35%,black,transparent)]"
      />

      <div className="wrap relative grid gap-14 pb-20 pt-14 md:pt-24 lg:grid-cols-12 lg:gap-10 lg:pb-24">
        <motion.div style={{ y: textY, opacity: fade }} className="lg:col-span-7 lg:pr-6">

          <h1 className="display text-[clamp(40px,6.2vw,76px)] leading-[1.04]">
            {hero.lines.map(([lead, bold], i) => (
              <span key={bold} className="block">
                <SplitWords text={lead} onView={false} delay={0.15 + i * 0.3} />
                <SplitWords text={bold} onView={false} delay={0.3 + i * 0.3} wordClassName="font-semibold" />
              </span>
            ))}
          </h1>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9, ease }}>
            <p className="mt-8 max-w-[560px] text-[15px] font-semibold leading-[1.6] text-ink md:text-base">
              Driving <span className="uppercase tracking-[.06em] text-accent">{hero.tagline.focus}</span> through{' '}
              {hero.tagline.pillars}.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={config.resume} target="_blank" rel="noopener noreferrer" data-cta="Hero: View resume" className="btn-primary">
                View resume <span aria-hidden="true">↗</span>
              </a>
              <a href="#experience" data-cta="Hero: Experience" className="btn-ghost bg-surface/60 backdrop-blur">
                Experience
              </a>
            </div>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-14 grid gap-6 border-t border-line pt-6 sm:grid-cols-3"
          >
            {hero.facts.map(([k, v]) => (
              <div key={k}>
                <dt className="label">{k}</dt>
                <dd className="mt-1.5 text-sm text-ink">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div style={{ y: cardY }} className="relative lg:col-span-5 lg:pt-6">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease }}>
            <div className="relative animate-float-slow">
              <ProductLog />
            </div>
          </motion.div>
          {hero.toasts.map((toast, i) => (
            <Toast key={toast.title} toast={toast} slot={toastSlots[i]} />
          ))}
        </motion.div>
      </div>

      <div className="relative border-y border-line bg-surface/50 backdrop-blur-sm">
        <div className="flex items-center gap-6 py-6 md:gap-10">
          <span className="label hidden shrink-0 pl-[max(16px,calc((100vw-1200px)/2))] md:block md:pl-[max(32px,calc((100vw-1200px)/2))]">Toolkit</span>
          <Marquee items={hero.marquee} />
        </div>
      </div>
    </section>
  )
}
