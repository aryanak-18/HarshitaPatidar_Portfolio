import { useState } from 'react'
import { flushSync } from 'react-dom'
import { motion } from 'framer-motion'

const rays = Array.from({ length: 8 }, (_, i) => {
  const a = (i * Math.PI) / 4
  return { x1: 12 + Math.cos(a) * 8.5, y1: 12 + Math.sin(a) * 8.5, x2: 12 + Math.cos(a) * 10.5, y2: 12 + Math.sin(a) * 10.5 }
})

const spring = { type: 'spring', stiffness: 260, damping: 22 }

function applyTheme(dark) {
  document.documentElement.classList.toggle('dark', dark)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0B1422' : '#FAFAF7')
  try {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  } catch {}
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  const toggle = (e) => {
    const next = !dark
    const commit = () => {
      applyTheme(next)
      setDark(next)
    }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!document.startViewTransition || reduce) return commit()

    // Reveal the new theme as a circle growing out of the button.
    const r = e.currentTarget.getBoundingClientRect()
    const x = r.left + r.width / 2
    const y = r.top + r.height / 2
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
    const transition = document.startViewTransition(() => flushSync(commit))
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 650, easing: 'cubic-bezier(.2,.8,.2,1)', pseudoElement: '::view-transition-new(root)' },
      )
    })
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light mode' : 'Dark mode'}
      className="group relative grid h-10 w-10 place-items-center rounded-full border border-line-strong bg-surface/60 text-ink transition duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_0_4px_rgb(var(--accent)/.12)]"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="overflow-visible">
        <mask id="moon-cut">
          <rect width="24" height="24" fill="white" />
          <motion.circle r="7" fill="black" initial={false} animate={dark ? { cx: 17, cy: 7 } : { cx: 30, cy: -4 }} transition={spring} />
        </mask>
        <motion.circle cx="12" cy="12" fill="currentColor" mask="url(#moon-cut)" initial={false} animate={{ r: dark ? 8 : 4.5 }} transition={spring} />
        <motion.g
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={false}
          animate={dark ? { opacity: 0, rotate: -90, scale: 0.4 } : { opacity: 1, rotate: 0, scale: 1 }}
          transition={spring}
          style={{ originX: '12px', originY: '12px' }}
        >
          {rays.map((ray, i) => (
            <line key={i} {...ray} />
          ))}
        </motion.g>
      </svg>
    </button>
  )
}
