import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { hero, productLog } from '../data/portfolio'
import Aurora from './Aurora'
import CountUp from './CountUp'
import Marquee from './Marquee'
import SplitWords from './SplitWords'

const ease = [0.2, 0.8, 0.2, 1]

const toneClass = {
  green: 'bg-pop-green',
  amber: 'bg-pop-amber',
  violet: 'bg-pop-violet',
}

// Positions just outside the product log card's corners (xl screens only).
const toastSlots = [
  { pos: '-left-14 -top-6', delay: 1.6, float: '' },
  { pos: '-right-8 -top-14', delay: 2.0, float: '[animation-delay:-2s]' },
  { pos: '-left-8 -bottom-14', delay: 2.4, float: '[animation-delay:-4s]' },
]

function Toast({ toast, slot }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: slot.delay, ease }}
      className={`absolute z-20 hidden xl:block ${slot.pos}`}
    >
      <div className={`flex w-[236px] animate-float items-center gap-3 rounded-2xl border border-line bg-surface/85 p-3 shadow-[0_18px_40px_-18px_rgba(14,26,43,.35)] backdrop-blur-md ${slot.float}`}>
        <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl text-sm font-semibold text-white ${toneClass[toast.tone]}`} aria-hidden="true">
          {toast.icon}
        </span>
        <span className="min-w-0">
          <span className="flex items-center justify-between gap-2">
            <span className="text-[13px] font-semibold text-ink">{toast.title}</span>
            <span className="font-mono text-[10px] text-muted">now</span>
          </span>
          <span className="block truncate text-xs text-muted">{toast.body}</span>
        </span>
      </div>
    </motion.div>
  )
}

function ProductLog() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_40px_80px_-40px_rgba(14,26,43,.45)]">
      <div className="absolute inset-x-0 top-0 h-[3px] animate-gradient-pan bg-[length:300%_100%] bg-[linear-gradient(90deg,#0B6E4F,#12B76A,#B5E655,#0EA5A4,#0B6E4F)]" />
      <div className="flex items-center justify-between border-b border-line px-6 py-4">
        <div>
          <div className="text-sm font-semibold text-ink">Product log</div>
          <div className="mt-0.5 text-xs text-muted">Nubra · Jul 2024 — Present</div>
        </div>
        <span className="label flex items-center gap-2 rounded-full border border-line px-2.5 py-1 !text-[10px] !tracking-[.1em]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pop-green opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pop-green" />
          </span>
          App · Web
        </span>
      </div>

      <div className="px-6 pt-4">
        <div className="label !text-[10px]">Features shipped</div>
        <ul className="mt-1">
          {productLog.shipped.map((f, i) => (
            <motion.li
              key={f.name}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.12, ease }}
              className="group flex items-center gap-3 border-b border-line py-3 last:border-0"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 14, delay: 1 + i * 0.12 }}
                className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-pop-green to-pop-teal text-white"
                aria-hidden="true"
              >
                <svg width="10" height="10" viewBox="0 0 10 10">
                  <path d="M2 5.2l2 2L8 3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm text-ink transition-colors group-hover:text-accent">{f.name}</span>
                <span className="block truncate text-xs text-muted">{f.detail}</span>
              </span>
              <span className="rounded-full bg-accent-wash px-2 py-0.5 font-mono text-[10px] uppercase tracking-[.08em] text-accent">Shipped</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="border-t border-line bg-gradient-to-br from-accent-wash via-accent-wash/60 to-surface px-6 pb-5 pt-4">
        <div className="label !text-[10px]">What it moved</div>
        <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-4">
          {productLog.impact.map((m) => (
            <div key={m.label}>
              <dt className="sr-only">{m.label}</dt>
              <dd className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <CountUp value={m.value} className="font-serif text-[30px] leading-none tracking-[-.02em] text-ink" />
                {m.from && <span className="whitespace-nowrap font-mono text-[10px] text-accent">↑ {m.from}</span>}
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
      {/* Drifting accent shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
        <span className="absolute left-[46%] top-[14%] h-3 w-3 animate-drift rounded-full bg-pop-amber" />
        <span className="absolute left-[6%] top-[62%] h-10 w-10 animate-drift rounded-full border-2 border-pop-teal/50 [animation-delay:-5s]" />
        <span className="absolute right-[4%] top-[78%] animate-drift font-mono text-2xl text-pop-violet/60 [animation-delay:-9s]">+</span>
        <span className="absolute left-[52%] top-[86%] h-2 w-2 animate-drift rounded-full bg-pop-green [animation-delay:-3s]" />
      </div>

      <div className="wrap relative grid gap-14 pb-20 pt-14 md:pt-24 lg:grid-cols-12 lg:gap-10 lg:pb-24">
        <motion.div style={{ y: textY, opacity: fade }} className="lg:col-span-7 lg:pr-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-xs text-body backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pop-green opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pop-green" />
            </span>
            {hero.status}
          </motion.div>

          <h1 className="display mt-8 text-[clamp(40px,6.2vw,76px)] leading-[1.04]">
            <span className="block">
              <SplitWords text={hero.setup} onView={false} delay={0.15} />
            </span>
            <span className="block">
              <SplitWords text={hero.headline} onView={false} delay={0.45} />
              <span className="relative inline-block">
                <SplitWords text={hero.emphasis} onView={false} delay={0.65} wordClassName="text-gradient pr-[.08em] italic" />
                <svg aria-hidden="true" viewBox="0 0 200 16" preserveAspectRatio="none" className="absolute -bottom-[.08em] left-0 h-[.22em] w-full overflow-visible">
                  <defs>
                    <linearGradient id="underline" x1="0" x2="1">
                      <stop offset="0" stopColor="#12B76A" />
                      <stop offset="1" stopColor="#B5E655" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M3 11 C 50 3, 120 2, 197 8"
                    fill="none"
                    stroke="url(#underline)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.9, delay: 1.3, ease: 'easeInOut' }}
                  />
                </svg>
              </span>
            </span>
          </h1>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9, ease }}>
            <p className="mt-8 max-w-[560px] text-[17px] leading-[1.7] md:text-lg">{hero.copy}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="btn-primary">
                View selected work <span aria-hidden="true">→</span>
              </a>
              <a href="#experience" className="btn-ghost bg-surface/60 backdrop-blur">
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
            <div className="animate-float-slow">
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
