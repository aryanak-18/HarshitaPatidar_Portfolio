import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { config, navLinks } from '../data/portfolio'
import CompanyBar from './CompanyBar'
import ThemeToggle from './ThemeToggle'

function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])

  return active
}

const ids = navLinks.map((l) => l.id)

export default function Nav() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-6 md:h-[72px]">
        <a href="#top" className="font-serif text-[21px] leading-none tracking-[-.01em] text-ink">
          {config.name}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? 'true' : undefined}
              className={`relative text-[13.5px] transition-colors hover:text-ink ${active === link.id ? 'text-ink' : 'text-muted'}`}
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  layoutId="nav-underline"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  className="absolute -bottom-[25px] left-0 h-[2px] w-full bg-gradient-to-r from-accent to-pop-lime"
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" data-cta="Nav: Get in touch" className="btn-primary hidden !py-2.5 sm:inline-flex">
            Get in touch
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line-strong bg-surface/60 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="text-ink">
              {open ? (
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" />
              ) : (
                <path d="M2 5h12M2 11h12" stroke="currentColor" strokeWidth="1.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <CompanyBar />

      {open && (
        <nav aria-label="Mobile navigation" className="animate-fade-up border-t border-line bg-paper lg:hidden">
          <div className="wrap flex flex-col py-3">
            {[...navLinks, { id: 'contact', label: 'Contact' }].map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-line py-3.5 text-[15px] text-ink last:border-0">
                {link.label}
                <span className="text-muted" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
